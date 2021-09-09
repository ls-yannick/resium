define(["./when-4bbc8319","./Matrix2-ccd5b911","./RuntimeError-346a3079","./EllipsoidGeometry-abf94da3","./VertexFormat-71718faa","./ComponentDatatype-93750d1a","./WebGLConstants-1c8239cc","./GeometryOffsetAttribute-1772960d","./Transforms-d5c6ad6e","./combine-83860057","./GeometryAttribute-c30799b8","./GeometryAttributes-7827a6c2","./IndexDatatype-b7d979a6"],(function(i,a,e,o,n,t,r,s,c,d,l,m,u){"use strict";function p(e){var t=i.defaultValue(e.radius,1);e={radii:new a.Cartesian3(t,t,t),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new o.EllipsoidGeometry(e),this._workerName="createSphereGeometry"}p.packedLength=o.EllipsoidGeometry.packedLength,p.pack=function(e,t,r){return o.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,r)};var y=new o.EllipsoidGeometry,G={radius:void 0,radii:new a.Cartesian3,vertexFormat:new n.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return p.unpack=function(e,t,r){return t=o.EllipsoidGeometry.unpack(e,t,y),G.vertexFormat=n.VertexFormat.clone(t._vertexFormat,G.vertexFormat),G.stackPartitions=t._stackPartitions,G.slicePartitions=t._slicePartitions,i.defined(r)?(a.Cartesian3.clone(t._radii,G.radii),r._ellipsoidGeometry=new o.EllipsoidGeometry(G),r):(G.radius=t._radii.x,new p(G))},p.createGeometry=function(e){return o.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(e,t){return i.defined(t)&&(e=p.unpack(e,t)),p.createGeometry(e)}}));