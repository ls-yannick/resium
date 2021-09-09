define(["./when-4bbc8319","./Matrix2-ccd5b911","./RuntimeError-346a3079","./EllipsoidOutlineGeometry-c8fcc563","./ComponentDatatype-93750d1a","./WebGLConstants-1c8239cc","./GeometryOffsetAttribute-1772960d","./Transforms-d5c6ad6e","./combine-83860057","./GeometryAttribute-c30799b8","./GeometryAttributes-7827a6c2","./IndexDatatype-b7d979a6"],(function(r,n,i,o,e,t,s,a,d,c,l,u){"use strict";function m(i){var e=r.defaultValue(i.radius,1);i={radii:new n.Cartesian3(e,e,e),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,subdivisions:i.subdivisions};this._ellipsoidGeometry=new o.EllipsoidOutlineGeometry(i),this._workerName="createSphereOutlineGeometry"}m.packedLength=o.EllipsoidOutlineGeometry.packedLength,m.pack=function(i,e,t){return o.EllipsoidOutlineGeometry.pack(i._ellipsoidGeometry,e,t)};var p=new o.EllipsoidOutlineGeometry,y={radius:void 0,radii:new n.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return m.unpack=function(i,e,t){return e=o.EllipsoidOutlineGeometry.unpack(i,e,p),y.stackPartitions=e._stackPartitions,y.slicePartitions=e._slicePartitions,y.subdivisions=e._subdivisions,r.defined(t)?(n.Cartesian3.clone(e._radii,y.radii),t._ellipsoidGeometry=new o.EllipsoidOutlineGeometry(y),t):(y.radius=e._radii.x,new m(y))},m.createGeometry=function(i){return o.EllipsoidOutlineGeometry.createGeometry(i._ellipsoidGeometry)},function(i,e){return r.defined(e)&&(i=m.unpack(i,e)),m.createGeometry(i)}}));