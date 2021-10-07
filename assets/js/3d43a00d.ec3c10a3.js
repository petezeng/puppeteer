"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30300],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var p=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=p.createContext({}),l=function(e){var t=p.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return p.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},m=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return r?p.createElement(d,i(i({ref:t},c),{},{components:r})):p.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return p.createElement.apply(null,i)}return p.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51303:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var p=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],o={},u=void 0,l={unversionedId:"puppeteer.page.viewport",id:"version-10.1.0/puppeteer.page.viewport",isDocsHomePage:!1,title:"puppeteer.page.viewport",description:"Home &gt; puppeteer &gt; Page &gt; viewport",source:"@site/versioned_docs/version-10.1.0/puppeteer.page.viewport.md",sourceDirName:".",slug:"/puppeteer.page.viewport",permalink:"/puppeteer/docs/puppeteer.page.viewport",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.page.viewport.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.page.url",permalink:"/puppeteer/docs/puppeteer.page.url"},next:{title:"puppeteer.page.waitfor",permalink:"/puppeteer/docs/puppeteer.page.waitfor"}},c=[{value:"Page.viewport() method",id:"pageviewport-method",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,p.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page"},"Page")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.viewport"},"viewport")),(0,a.kt)("h2",{id:"pageviewport-method"},"Page.viewport() method"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"viewport(): Viewport | null;\n")),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.viewport"},"Viewport")," ","|"," null"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"width"),": page's width in pixels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"height"),": page's height in pixels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"deviceScalarFactor"),": Specify device scale factor (can be though of as dpr). Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isMobile"),": Whether the meta viewport tag is taken into account. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hasTouch"),": Specifies if viewport supports touch events. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isLandScape"),": Specifies if viewport is in landscape mode. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."))))}m.isMDXComponent=!0}}]);