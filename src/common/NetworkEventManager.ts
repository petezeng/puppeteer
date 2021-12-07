import { Protocol } from 'devtools-protocol';
import { HTTPRequest } from './HTTPRequest.js';

export type QueuedEventGroup = {
  responseReceived: Protocol.Network.ResponseReceivedEvent;
  promise: Promise<void>;
  resolver: () => void;
  loadingFinished?: Protocol.Network.LoadingFinishedEvent;
  loadingFailed?: Protocol.Network.LoadingFailedEvent;
};

export type FetchRequestId = string;
export type NetworkRequestId = string;

type RedirectInfo = {
  event: Protocol.Network.RequestWillBeSentEvent;
  fetchRequestId?: FetchRequestId;
};
export type RedirectInfoMap = RedirectInfo[];

/**
 * @internal
 *
 * Helper class to track network events by request ID
 */
export class NetworkEventManager {
  /*
   * There are four possible orders of events:
   *  A. `_onRequestWillBeSent`
   *  B. `_onRequestWillBeSent`, `_onRequestPaused`
   *  C. `_onRequestPaused`, `_onRequestWillBeSent`
   *  D. `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
   *     `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`
   *     (see crbug.com/1196004)
   *
   * For `_onRequest` we need the event from `_onRequestWillBeSent` and
   * optionally the `interceptionId` from `_onRequestPaused`.
   *
   * If request interception is disabled, call `_onRequest` once per call to
   * `_onRequestWillBeSent`.
   * If request interception is enabled, call `_onRequest` once per call to
   * `_onRequestPaused` (once per `interceptionId`).
   *
   * Events are stored to allow for subsequent events to call `_onRequest`.
   *
   * Note that (chains of) redirect requests have the same `requestId` (!) as
   * the original request. We have to anticipate series of events like these:
   *  A. `_onRequestWillBeSent`,
   *     `_onRequestWillBeSent`, ...
   *  B. `_onRequestWillBeSent`, `_onRequestPaused`,
   *     `_onRequestWillBeSent`, `_onRequestPaused`, ...
   *  C. `_onRequestWillBeSent`, `_onRequestPaused`,
   *     `_onRequestPaused`, `_onRequestWillBeSent`, ...
   *  D. `_onRequestPaused`, `_onRequestWillBeSent`,
   *     `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
   *     `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`, ...
   *     (see crbug.com/1196004)
   */
  private _requestWillBeSent = new Map<
    NetworkRequestId,
    Protocol.Network.RequestWillBeSentEvent
  >();
  private _requestPaused = new Map<
    NetworkRequestId,
    Protocol.Fetch.RequestPausedEvent
  >();
  private _httpRequests = new Map<NetworkRequestId, HTTPRequest>();

  /*
   * The below maps are used to reconcile Network.responseReceivedExtraInfo
   * events with their corresponding request. Each response and redirect
   * response gets an ExtraInfo event, and we don't know which will come first.
   * This means that we have to store a Response or an ExtraInfo for each
   * response, and emit the event when we get both of them. In addition, to
   * handle redirects, we have to make them Arrays to represent the chain of
   * events.
   */
  private _responseReceivedExtraInfo = new Map<
    NetworkRequestId,
    Protocol.Network.ResponseReceivedExtraInfoEvent[]
  >();
  private _queuedRedirectInfoMap = new Map<NetworkRequestId, RedirectInfoMap>();
  private _queuedEventGroupMap = new Map<NetworkRequestId, QueuedEventGroup>();

  forget(networkRequestId: NetworkRequestId): void {
    this._requestWillBeSent.delete(networkRequestId);
    this._requestPaused.delete(networkRequestId);
    this._queuedEventGroupMap.delete(networkRequestId);
    this._queuedRedirectInfoMap.delete(networkRequestId);
    this._responseReceivedExtraInfo.delete(networkRequestId);
  }

  responseExtraInfo(
    networkRequestId: NetworkRequestId
  ): Protocol.Network.ResponseReceivedExtraInfoEvent[] {
    if (!this._responseReceivedExtraInfo.has(networkRequestId)) {
      this._responseReceivedExtraInfo.set(networkRequestId, []);
    }
    return this._responseReceivedExtraInfo.get(networkRequestId);
  }

  private queuedRedirectInfo(fetchRequestId: FetchRequestId): RedirectInfoMap {
    if (!this._queuedRedirectInfoMap.has(fetchRequestId)) {
      this._queuedRedirectInfoMap.set(fetchRequestId, []);
    }
    return this._queuedRedirectInfoMap.get(fetchRequestId);
  }

  queueRedirectInfo(
    fetchRequestId: FetchRequestId,
    redirectInfo: RedirectInfo
  ): void {
    this.queuedRedirectInfo(fetchRequestId).push(redirectInfo);
  }

  takeQueuedRedirectInfo(
    fetchRequestId: FetchRequestId
  ): RedirectInfo | undefined {
    return this.queuedRedirectInfo(fetchRequestId).shift();
  }

  numRequestsInProgress(): number {
    return [...this._httpRequests].filter(([, request]) => {
      return !request.response();
    }).length;
  }

  storeRequestWillBeSent(
    networkRequestId: NetworkRequestId,
    event: Protocol.Network.RequestWillBeSentEvent
  ): void {
    this._requestWillBeSent.set(networkRequestId, event);
  }

  getRequestWillBeSent(
    networkRequestId: NetworkRequestId
  ): Protocol.Network.RequestWillBeSentEvent | undefined {
    return this._requestWillBeSent.get(networkRequestId);
  }

  forgetRequestWillBeSent(networkRequestId: NetworkRequestId): void {
    this._requestPaused.delete(networkRequestId);
  }

  getRequestPaused(
    networkRequestId: NetworkRequestId
  ): Protocol.Fetch.RequestPausedEvent | undefined {
    return this._requestPaused.get(networkRequestId);
  }

  forgetRequestPaused(networkRequestId: NetworkRequestId): void {
    this._requestPaused.delete(networkRequestId);
  }

  storeRequestPaused(
    networkRequestId: NetworkRequestId,
    event: Protocol.Fetch.RequestPausedEvent
  ): void {
    this._requestPaused.set(networkRequestId, event);
  }

  getRequest(networkRequestId: NetworkRequestId): HTTPRequest | undefined {
    return this._httpRequests.get(networkRequestId);
  }

  storeRequest(networkRequestId: NetworkRequestId, request: HTTPRequest): void {
    this._httpRequests.set(networkRequestId, request);
  }

  forgetRequest(networkRequestId: NetworkRequestId): void {
    this._httpRequests.delete(networkRequestId);
  }

  getQueuedEventGroup(
    networkRequestId: NetworkRequestId
  ): QueuedEventGroup | undefined {
    return this._queuedEventGroupMap.get(networkRequestId);
  }

  queueEventGroup(
    networkRequestId: NetworkRequestId,
    event: QueuedEventGroup
  ): void {
    this._queuedEventGroupMap.set(networkRequestId, event);
  }
}
