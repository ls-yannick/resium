"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[7625],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=i,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7968:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={title:"GroundPolylinePrimitive"},p="GroundPolylinePrimitive",m={unversionedId:"components/GroundPolylinePrimitive",id:"components/GroundPolylinePrimitive",isDocsHomePage:!1,title:"GroundPolylinePrimitive",description:"GroundPolylinePrimitive is a ground polyline primitive in the PrimitiveCollection.",source:"@site/docs/components/GroundPolylinePrimitive.mdx",sourceDirName:"components",slug:"/components/GroundPolylinePrimitive",permalink:"/components/GroundPolylinePrimitive",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/GroundPolylinePrimitive.mdx",version:"current",frontMatter:{title:"GroundPolylinePrimitive"},sidebar:"docs",previous:{title:"Globe",permalink:"/components/Globe"},next:{title:"GroundPrimitive",permalink:"/components/GroundPrimitive"}},u=[{value:"Availability",id:"availability",children:[]},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[]},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[]},{value:"Cesium events",id:"cesium-events",children:[]},{value:"Other properties",id:"other-properties",children:[]}]}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groundpolylineprimitive"},"GroundPolylinePrimitive"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GroundPolylinePrimitive")," is a ground polyline primitive in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrimitiveCollection"),"."),(0,a.kt)("p",null,"Primitive is a low layer API for geographical visualization.\n",(0,a.kt)("a",{parentName:"p",href:"/components/entity"},"Entity")," is more recommended unless performance issues."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,a.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html"},"GroundPolylinePrimitive")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example"),": ",(0,a.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/groundpolylineprimitive--basic%22"},"GroundPolylinePrimitive"))),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Inside ",(0,a.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer"),", ",(0,a.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget"),", or ",(0,a.kt)("a",{parentName:"p",href:"/components/GroundPrimitiveCollection"},"GroundPrimitiveCollection")," component.\nIf this component is inside GroundPrimitiveCollection component, a ground primitive object will be attached to the ground primitive collection of the scene.\nOtherwise, a primitive object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"debugShowBoundingVolume"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"classificationType"),(0,a.kt)("td",{parentName:"tr",align:null},"ClassificationType"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"debugShowShadowVolume"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"appearance"),(0,a.kt)("td",{parentName:"tr",align:null},"Appearance"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"depthFailAppearance"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allowPicking"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"asynchronous"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"geometryInstances"),(0,a.kt)("td",{parentName:"tr",align:null},"any[] ","|"," GeometryInstance"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interleave"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"releaseGeometryInstances"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"other-properties"},"Other properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onReady"),(0,a.kt)("td",{parentName:"tr",align:null},"(primitive: GroundPolylinePrimitive) =",">"," void"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls when ",(0,a.kt)("a",{parentName:"td",href:"https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html#readyPromise"},"Primitive#readyPromise")," is fullfilled")))))}c.isMDXComponent=!0}}]);