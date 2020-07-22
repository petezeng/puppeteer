<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [puppeteer](./puppeteer.md) &gt; [Protocol](./puppeteer.protocol.md) &gt; [Debugger](./puppeteer.protocol.debugger.md) &gt; [Scope](./puppeteer.protocol.debugger.scope.md)

## Protocol.Debugger.Scope interface

Scope description.

<b>Signature:</b>

```typescript
export interface Scope 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [endLocation](./puppeteer.protocol.debugger.scope.endlocation.md) | [Location](./puppeteer.protocol.debugger.location.md) | Location in the source code where scope ends |
|  [name](./puppeteer.protocol.debugger.scope.name.md) | string |  |
|  [object](./puppeteer.protocol.debugger.scope.object.md) | [Runtime.RemoteObject](./puppeteer.protocol.runtime.remoteobject.md) | Object representing the scope. For <code>global</code> and <code>with</code> scopes it represents the actual object; for the rest of the scopes, it is artificial transient object enumerating scope variables as its properties. |
|  [startLocation](./puppeteer.protocol.debugger.scope.startlocation.md) | [Location](./puppeteer.protocol.debugger.location.md) | Location in the source code where scope starts |
|  [type](./puppeteer.protocol.debugger.scope.type.md) | ('global' \| 'local' \| 'with' \| 'closure' \| 'catch' \| 'block' \| 'script' \| 'eval' \| 'module' \| 'wasm-expression-stack') | Scope type. (ScopeType enum) |
