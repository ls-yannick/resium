"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[3577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(7462),a=r(7294),i=r(3905);const o={features:"features_vqN4",feature:"feature_G9wp",emoji:"emoji_Xx5Q",desc:"desc_t_Pf"};function s(e){let{children:t}=e;return a.createElement("div",{className:o.features},t)}function c(e){let{title:t,emoji:r,desc:n}=e;return a.createElement("section",{className:o.feature},a.createElement("h3",{className:o.title},a.createElement("span",{className:o.emoji},r),t),a.createElement("p",{className:o.desc},n))}const l={title:"Home",slug:"/"},m="Resium",u={unversionedId:"home",id:"home",title:"Home",description:"Resium",source:"@site/docs/00-home.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/reearth/resium/edit/main/docs/docs/00-home.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Home",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/installation"}},p={},d=[],f={toc:d};function y(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"resium"},"Resium"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Resium",src:r(7715).Z,width:"1000",height:"200"})),(0,i.kt)("p",null,"Resium is library of React components for \ud83c\udf0d",(0,i.kt)("a",{parentName:"p",href:"https://cesium.com/"},"Cesium")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Viewer full>\n  <Entity\n    name="tokyo"\n    description="test"\n    position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}\n  />\n</Viewer>\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot",src:r(4761).Z,width:"970",height:"498"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Usage",src:r(7593).Z,width:"803",height:"454"})),(0,i.kt)(s,{mdxType:"Features"},(0,i.kt)(c,{title:"Declarative Cesium",emoji:"\ud83c\udf0f",desc:"Let's create a high maintainability Cesium application with React today!",mdxType:"Feature"}),(0,i.kt)(c,{title:"Blazing Fast Development",emoji:"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb",desc:"Resium brings hot module replacement to Cesium, which dramatically improves your development speed!",mdxType:"Feature"}),(0,i.kt)(c,{title:"Strongly Typed",emoji:"\ud83d\udcaa",desc:"Resium fully supports TypeScript. Type definitions are built-in!",mdxType:"Feature"})))}y.isMDXComponent=!0},7715:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/resium-085fdc2884e3691fcf1a55ed4c6817f2.gif"},4761:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screenshot-b360defd35910a2e9b645d3eeeca3df2.png"},7593:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/usage-26027c7ee0d8fb503a02a5168bfe2fd6.gif"}}]);