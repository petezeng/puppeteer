"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25652],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=i(t),m=p,d=f["".concat(u,".").concat(m)]||f[m]||l[m]||o;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function m(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:p,a[1]=s;for(var i=2;i<o;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37257:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return f}});var n=t(87462),p=t(63366),o=(t(67294),t(3905)),a=["components"],s={},u=void 0,i={unversionedId:"puppeteer.browser.pages",id:"version-10.1.0/puppeteer.browser.pages",isDocsHomePage:!1,title:"puppeteer.browser.pages",description:"Home &gt; puppeteer &gt; Browser &gt; pages",source:"@site/versioned_docs/version-10.1.0/puppeteer.browser.pages.md",sourceDirName:".",slug:"/puppeteer.browser.pages",permalink:"/puppeteer/docs/puppeteer.browser.pages",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.browser.pages.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.browser.newpage",permalink:"/puppeteer/docs/puppeteer.browser.newpage"},next:{title:"puppeteer.browser.process",permalink:"/puppeteer/docs/puppeteer.browser.process"}},c=[{value:"Browser.pages() method",id:"browserpages-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],l={toc:c};function f(e){var r=e.components,t=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browser"},"Browser")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browser.pages"},"pages")),(0,o.kt)("h2",{id:"browserpages-method"},"Browser.pages() method"),(0,o.kt)("p",null,"An array of all open pages inside the Browser."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"pages(): Promise<Page[]>;\n")),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page"},"Page"),"[","]",">"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"In case of multiple browser contexts, returns an array with all the pages in all browser contexts. Non-visible pages, such as ",(0,o.kt)("inlineCode",{parentName:"p"},'"background_page"'),", will not be listed here. You can find them using ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.target.page"},"Target.page()"),"."))}f.isMDXComponent=!0}}]);