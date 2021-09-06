"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[4866],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=m(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6320:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"TimeDynamicPointCloud"},p="TimeDynamicPointCloud",m={unversionedId:"components/TimeDynamicPointCloud",id:"components/TimeDynamicPointCloud",isDocsHomePage:!1,title:"TimeDynamicPointCloud",description:"TimeDynamicPointCloud is a point cloud with dynamic changes with time.",source:"@site/docs/components/TimeDynamicPointCloud.mdx",sourceDirName:"components",slug:"/components/TimeDynamicPointCloud",permalink:"/components/TimeDynamicPointCloud",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/TimeDynamicPointCloud.mdx",version:"current",frontMatter:{title:"TimeDynamicPointCloud"},sidebar:"docs",previous:{title:"Sun",permalink:"/components/Sun"},next:{title:"Viewer",permalink:"/components/Viewer"}},u=[{value:"Availability",id:"availability",children:[]},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[]},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[]},{value:"Cesium events",id:"cesium-events",children:[]},{value:"Other properties",id:"other-properties",children:[]}]}],d={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"timedynamicpointcloud"},"TimeDynamicPointCloud"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TimeDynamicPointCloud")," is a point cloud with dynamic changes with time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,i.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/TimeDynamicPointCloud.html"},"TimeDynamicPointCloud")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Example"),": ",(0,i.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/timedynamicpointcloud--basic%22"},"TimeDynamicPointCloud"))),(0,i.kt)("h2",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Inside ",(0,i.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," or ",(0,i.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," component.\nA TimeDynamicPointCloud object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"intervals"),(0,i.kt)("td",{parentName:"tr",align:null},"TimeIntervalCollection"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"show"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"modelMatrix"),(0,i.kt)("td",{parentName:"tr",align:null},"Matrix4"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shadows"),(0,i.kt)("td",{parentName:"tr",align:null},"ShadowMode"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maximumMemoryUsage"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clippingPlanes"),(0,i.kt)("td",{parentName:"tr",align:null},"ClippingPlaneCollection"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"style"),(0,i.kt)("td",{parentName:"tr",align:null},"Cesium3DTileStyle"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clock"),(0,i.kt)("td",{parentName:"tr",align:null},"Clock"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shading"),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onFrameChange"),(0,i.kt)("td",{parentName:"tr",align:null},"(pointCloud: TimeDynamicPointCloud) =",">"," void"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"other-properties"},"Other properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onReady"),(0,i.kt)("td",{parentName:"tr",align:null},"(pointCloud: TimeDynamicPointCloud) =",">"," void"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls when the point cloud is completely loaded.")))))}c.isMDXComponent=!0}}]);