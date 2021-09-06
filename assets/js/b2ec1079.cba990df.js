"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[1242],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5463:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"getting_started",title:"Getting Started"},l="Getting Started",p={unversionedId:"getting_started",id:"getting_started",isDocsHomePage:!1,title:"Getting Started",description:"After installation, let's create a hello world application.",source:"@site/docs/02-getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/getting_started",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/02-getting_started.md",version:"current",sidebarPosition:2,frontMatter:{id:"getting_started",title:"Getting Started"},sidebar:"docs",previous:{title:"Installation",permalink:"/installation"},next:{title:"Guide",permalink:"/guide"}},c=[{value:"The simplest Resium application",id:"the-simplest-resium-application",children:[]},{value:"Displaying an entity",id:"displaying-an-entity",children:[]},{value:"Displaying description of an entity",id:"displaying-description-of-an-entity",children:[]},{value:"Adding Cesium world terrain",id:"adding-cesium-world-terrain",children:[]},{value:"Loading your own data",id:"loading-your-own-data",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"/installation"},"installation"),", let's create a hello world application."),(0,a.kt)("p",null,"You can import all resium components as following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Viewer } from "resium";\n')),(0,a.kt)("h2",{id:"the-simplest-resium-application"},"The simplest Resium application"),(0,a.kt)("p",null,"The simplest resium application is as following."),(0,a.kt)("p",null,"Just as Cesium's root object is ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Viewer>")," is also a root component in resium."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { Viewer } from "resium";\n\nconst App = () => <Viewer />;\n\nexport default App;\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport ReactDOM from "react-dom";\nimport App from "./app";\n\nReactDOM.render(<App />, document.getElementById("wrapper"));\n')),(0,a.kt)("p",null,"This is almost equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const viewer = new Cesium.Viewer("wrapper");\n')),(0,a.kt)("p",null,"But the viewer is displayed small because it does not have its own size."),(0,a.kt)("p",null,"The easiest solution is using ",(0,a.kt)("inlineCode",{parentName:"p"},"full")," prop. It makes the viewer displayed on the full screen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Viewer full />\n")),(0,a.kt)("p",null,"This is equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Viewer\n  style={{\n    position: "absolute",\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0,\n  }}\n/>\n')),(0,a.kt)("p",null,"If you want to customize the container styles, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," prop. They are applied to ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," element rendered by a Viewer component."),(0,a.kt)("p",null,"It means that CSS-in-JS libraries (styled-components, emotion...) are available on a Viewer component."),(0,a.kt)("p",null,"Hereafter, we omit the code such as HMR in example code."),(0,a.kt)("h2",{id:"displaying-an-entity"},"Displaying an entity"),(0,a.kt)("p",null,"Next, let's display an entity on Cesium. Entity component is available in resium."),(0,a.kt)("p",null,"Entity has many way to visualize geograohical data. Here let's try to use PointGraphics."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { Viewer, Entity } from "resium";\nimport { Cartesian3 } from "cesium";\n\nconst position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);\nconst pointGraphics = { pixelSize: 10 };\n\nconst App = () => (\n  <Viewer full>\n    <Entity position={position} point={pointGraphics} />\n  </Viewer>\n);\n')),(0,a.kt)("p",null,"This is equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const viewer = new Cesium.Viewer("wrapper");\nconst entity = new Cesium.Entity({\n  position: Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100),\n  point: { pixelSize: 10 },\n});\nviewer.entities.add(entity);\n')),(0,a.kt)("p",null,"If HMR is enabled, it fully works in resium, so entity is updated without reloading the page when the source code is changed!"),(0,a.kt)("p",null,"The following is also the same. It uses ",(0,a.kt)("inlineCode",{parentName:"p"},"PointGraphics")," component. This enables updating graphic properties with minimal cost."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { Viewer, Entity, PointGraphics } from "resium";\nimport { Cartesian3 } from "cesium";\n\nconst position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);\n\nconst App = () => (\n  <Viewer full>\n    <Entity position={position}>\n      <PointGraphics pixelSize={10} />\n    </Entity>\n  </Viewer>\n);\n')),(0,a.kt)("h2",{id:"displaying-description-of-an-entity"},"Displaying description of an entity"),(0,a.kt)("p",null,"The following example is displaying a simple name and description of the entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { Viewer, Entity, PointGraphics } from "resium";\nimport { Cartesian3 } from "cesium";\n\nconst position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);\n\nconst App = () => (\n  <Viewer full>\n    <Entity position={position} name="Tokyo" description="Hello, world.">\n      <PointGraphics pixelSize={10} />\n    </Entity>\n  </Viewer>\n);\n')),(0,a.kt)("p",null,"If you want to render rich description, ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityDescription")," component is the best. It enables using JSX in the description of entities!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { Viewer, Entity, PointGraphics, EntityDescription } from "resium";\nimport { Cartesian3 } from "cesium";\n\nconst position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);\n\nconst App = () => (\n  <Viewer full>\n    <Entity position={position} name="Tokyo">\n      <PointGraphics pixelSize={10} />\n      <EntityDescription>\n        <h1>Hello, world.</h1>\n        <p>JSX is available here!</p>\n      </EntityDescription>\n    </Entity>\n  </Viewer>\n);\n')),(0,a.kt)("h2",{id:"adding-cesium-world-terrain"},"Adding Cesium world terrain"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"terrainProvider")," prop of ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewer")," is available."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { Viewer, Entity, PointGraphics, EntityDescription } from "resium";\nimport { Cartesian3, createWorldTerrain } from "cesium";\n\nconst terrainProvider = createWorldTerrain();\nconst position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);\n\nconst App = () => (\n  <Viewer full terrainProvider={terrainProvider}>\n    <Entity position={position} name="Tokyo">\n      <PointGraphics pixelSize={10} />\n      <EntityDescription>\n        <h1>Hello, world.</h1>\n        <p>JSX is available here!</p>\n      </EntityDescription>\n    </Entity>\n  </Viewer>\n);\n')),(0,a.kt)("h2",{id:"loading-your-own-data"},"Loading your own data"),(0,a.kt)("p",null,"Cesium and resium support KML, GeoJSON, TopoJSON, and CZML. Let's load and display your own data!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { Viewer, GeoJsonDataSource, KmlDataSource } from "resium";\n\nconst data = {\n  type: "Feature",\n  properties: {\n    name: "Coors Field",\n    amenity: "Baseball Stadium",\n    popupContent: "This is where the Rockies play!",\n  },\n  geometry: {\n    type: "Point",\n    coordinates: [-104.99404, 39.75621],\n  },\n};\n\nconst App = () => (\n  <Viewer full>\n    <GeoJsonDataSource data={"your_geo_json.geojson"} />\n    <KmlDataSource data={"your_geo_json.kml"} />\n    <GeoJsonDataSource data={data} />\n  </Viewer>\n);\n')),(0,a.kt)("p",null,"3D tile is also available."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { Viewer, Cesium3DTileset } from "resium";\nimport { IonResource } from "cesium";\n\nconst App = () => {\n  let viewer; // This will be raw Cesium\'s Viewer object.\n\n  const handleReady = tileset => {\n    if (viewer) {\n      viewer.zoomTo(tileset);\n    }\n  };\n\n  return (\n    <Viewer\n      full\n      ref={e => {\n        viewer = e && e.cesiumElement;\n      }}>\n      <Cesium3DTileset url={IonResource.fromAssetId(5714)} onReady={handleReady} />\n    </Viewer>\n  );\n};\n')),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guide"},"Guide")),(0,a.kt)("li",{parentName:"ul"},"Components: see menu"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/examples/"},"Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cesium.com/learn/cesiumjs/ref-doc/"},"Cesium Documentation"))))}u.isMDXComponent=!0}}]);