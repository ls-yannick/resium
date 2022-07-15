"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[5701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,v=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(v,c(c({ref:t},s),{},{components:n})):r.createElement(v,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"ScreenSpaceEvent"},c="ScreenSpaceEvent",l={unversionedId:"components/ScreenSpaceEvent",id:"components/ScreenSpaceEvent",title:"ScreenSpaceEvent",description:"ScreenSpaceEvent is an event callback for mouse or touch interactions.",source:"@site/docs/components/ScreenSpaceEvent.mdx",sourceDirName:"components",slug:"/components/ScreenSpaceEvent",permalink:"/components/ScreenSpaceEvent",draft:!1,editUrl:"https://github.com/reearth/resium/edit/main/docs/docs/components/ScreenSpaceEvent.mdx",tags:[],version:"current",frontMatter:{title:"ScreenSpaceEvent"},sidebar:"docs",previous:{title:"ScreenSpaceCameraController",permalink:"/components/ScreenSpaceCameraController"},next:{title:"ScreenSpaceEventHandler",permalink:"/components/ScreenSpaceEventHandler"}},i={},p=[{value:"Availability",id:"availability",level:2},{value:"Properties",id:"properties",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"screenspaceevent"},"ScreenSpaceEvent"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ScreenSpaceEvent")," is an event callback for mouse or touch interactions."),(0,a.kt)("p",null,"See also: ",(0,a.kt)("a",{parentName:"p",href:"https://cesium.com/docs/cesiumjs-ref-doc/ScreenSpaceEventHandler.html?classFilter=screenspa#setInputAction"},"ScreenSpaceEventHandler#setInputAction")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example"),": ",(0,a.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/screenspaceevent--basic%22"},"ScreenSpaceEvent"))),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Only inside ",(0,a.kt)("a",{parentName:"p",href:"/components/ScreenSpaceEventHandler"},"ScreenSpaceEventHandler"),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"action"),(0,a.kt)("td",{parentName:"tr",align:null},"(e: { position: Cartesian2; } ","|"," { startPosition: Cartesian2; endPosition: Cartesian2; }) =",">"," void"),(0,a.kt)("td",{parentName:"tr",align:null},"If empty, the event will be removed even if there is the default event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"modifier"),(0,a.kt)("td",{parentName:"tr",align:null},"KeyboardEventModifier"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"ScreenSpaceEventType"),(0,a.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);