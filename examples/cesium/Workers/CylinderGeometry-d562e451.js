define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./GeometryAttributes-4fcfcf40","./IndexDatatype-53503fee","./GeometryOffsetAttribute-7350d9af","./VertexFormat-7572c785","./CylinderGeometryLibrary-b0214ab1"],(function(t,P,e,k,M,z,E,N,I,U,S,m,B){"use strict";var Y=new M.Cartesian2,Z=new M.Cartesian3,J=new M.Cartesian3,W=new M.Cartesian3,j=new M.Cartesian3;function u(t){var e=(t=P.defaultValue(t,P.defaultValue.EMPTY_OBJECT)).length,a=t.topRadius,r=t.bottomRadius,n=P.defaultValue(t.vertexFormat,m.VertexFormat.DEFAULT),o=P.defaultValue(t.slices,128);this._length=e,this._topRadius=a,this._bottomRadius=r,this._vertexFormat=m.VertexFormat.clone(n),this._slices=o,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}u.packedLength=m.VertexFormat.packedLength+5,u.pack=function(t,e,a){return a=P.defaultValue(a,0),m.VertexFormat.pack(t._vertexFormat,e,a),a+=m.VertexFormat.packedLength,e[a++]=t._length,e[a++]=t._topRadius,e[a++]=t._bottomRadius,e[a++]=t._slices,e[a]=P.defaultValue(t._offsetAttribute,-1),e};var a,d=new m.VertexFormat,f={vertexFormat:d,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};u.unpack=function(t,e,a){e=P.defaultValue(e,0);var r=m.VertexFormat.unpack(t,e,d);e+=m.VertexFormat.packedLength;var n=t[e++],o=t[e++],i=t[e++],s=t[e++];e=t[e];return P.defined(a)?(a._vertexFormat=m.VertexFormat.clone(r,a._vertexFormat),a._length=n,a._topRadius=o,a._bottomRadius=i,a._slices=s,a._offsetAttribute=-1===e?void 0:e,a):(f.length=n,f.topRadius=o,f.bottomRadius=i,f.slices=s,f.offsetAttribute=-1===e?void 0:e,new u(f))},u.createGeometry=function(t){var e=t._length,a=t._topRadius,r=t._bottomRadius,n=t._vertexFormat,o=t._slices;if(!(e<=0||a<0||r<0||0===a&&0===r)){var i=o+o,s=o+i,m=i+i,u=B.CylinderGeometryLibrary.computePositions(e,a,r,o,!0),d=n.st?new Float32Array(2*m):void 0,f=n.normal?new Float32Array(3*m):void 0,p=n.tangent?new Float32Array(3*m):void 0,y=n.bitangent?new Float32Array(3*m):void 0,c=n.normal||n.tangent||n.bitangent;if(c){var l=n.tangent||n.bitangent,b=0,v=0,A=0,g=Math.atan2(r-a,e),h=Z;h.z=Math.sin(g);for(var x=Math.cos(g),_=W,C=J,F=0;F<o;F++){var w=F/o*k.CesiumMath.TWO_PI,G=x*Math.cos(w);w=x*Math.sin(w);c&&(h.x=G,h.y=w,l&&(_=M.Cartesian3.normalize(M.Cartesian3.cross(M.Cartesian3.UNIT_Z,h,_),_)),n.normal&&(f[b++]=h.x,f[b++]=h.y,f[b++]=h.z,f[b++]=h.x,f[b++]=h.y,f[b++]=h.z),n.tangent&&(p[v++]=_.x,p[v++]=_.y,p[v++]=_.z,p[v++]=_.x,p[v++]=_.y,p[v++]=_.z),n.bitangent&&(C=M.Cartesian3.normalize(M.Cartesian3.cross(h,_,C),C),y[A++]=C.x,y[A++]=C.y,y[A++]=C.z,y[A++]=C.x,y[A++]=C.y,y[A++]=C.z))}for(F=0;F<o;F++)n.normal&&(f[b++]=0,f[b++]=0,f[b++]=-1),n.tangent&&(p[v++]=1,p[v++]=0,p[v++]=0),n.bitangent&&(y[A++]=0,y[A++]=-1,y[A++]=0);for(F=0;F<o;F++)n.normal&&(f[b++]=0,f[b++]=0,f[b++]=1),n.tangent&&(p[v++]=1,p[v++]=0,p[v++]=0),n.bitangent&&(y[A++]=0,y[A++]=1,y[A++]=0)}g=12*o-12;var D=U.IndexDatatype.createTypedArray(m,g),R=0,V=0;for(F=0;F<o-1;F++)D[R++]=V,D[R++]=V+2,D[R++]=V+3,D[R++]=V,D[R++]=V+3,D[R++]=V+1,V+=2;for(D[R++]=i-2,D[R++]=0,D[R++]=1,D[R++]=i-2,D[R++]=1,D[R++]=i-1,F=1;F<o-1;F++)D[R++]=i+F+1,D[R++]=i+F,D[R++]=i;for(F=1;F<o-1;F++)D[R++]=s,D[R++]=s+F,D[R++]=s+F+1;var T=0;if(n.st){var O=Math.max(a,r);for(F=0;F<m;F++){var L=M.Cartesian3.fromArray(u,3*F,j);d[T++]=(L.x+O)/(2*O),d[T++]=(L.y+O)/(2*O)}}return g=new I.GeometryAttributes,n.position&&(g.position=new N.GeometryAttribute({componentDatatype:E.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})),n.normal&&(g.normal=new N.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:f})),n.tangent&&(g.tangent=new N.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),n.bitangent&&(g.bitangent=new N.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),n.st&&(g.st=new N.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:d})),Y.x=.5*e,Y.y=Math.max(r,a),r=new z.BoundingSphere(M.Cartesian3.ZERO,M.Cartesian2.magnitude(Y)),P.defined(t._offsetAttribute)&&(e=u.length,a=new Uint8Array(e/3),e=t._offsetAttribute===S.GeometryOffsetAttribute.NONE?0:1,S.arrayFill(a,e),g.applyOffset=new N.GeometryAttribute({componentDatatype:E.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})),new N.Geometry({attributes:g,indices:D,primitiveType:N.PrimitiveType.TRIANGLES,boundingSphere:r,offsetAttribute:t._offsetAttribute})}},u.getUnitCylinder=function(){return P.defined(a)||(a=u.createGeometry(new u({topRadius:1,bottomRadius:1,length:1,vertexFormat:m.VertexFormat.POSITION_ONLY}))),a},t.CylinderGeometry=u}));