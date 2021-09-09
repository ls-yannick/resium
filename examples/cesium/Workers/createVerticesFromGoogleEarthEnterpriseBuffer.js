define(["./AxisAlignedBoundingBox-883f9c89","./Transforms-d5c6ad6e","./Matrix2-ccd5b911","./when-4bbc8319","./TerrainEncoding-bccee540","./ComponentDatatype-93750d1a","./OrientedBoundingBox-0a826a8b","./RuntimeError-346a3079","./WebMercatorProjection-b29097b4","./createTaskProcessorWorker","./combine-83860057","./AttributeCompression-1f045b73","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-e000bae1","./IntersectionTests-4d6f5c54","./Plane-18bb00f8"],(function(ve,Me,xe,Ne,be,Se,we,Be,Pe,e,t,i,n,r,a,o){"use strict";var Ae=Uint16Array.BYTES_PER_ELEMENT,ye=Int32Array.BYTES_PER_ELEMENT,Re=Uint32Array.BYTES_PER_ELEMENT,_e=Float32Array.BYTES_PER_ELEMENT,We=Float64Array.BYTES_PER_ELEMENT;function Fe(e,t,i){i=Ne.defaultValue(i,Se.CesiumMath);for(var n=e.length,r=0;r<n;++r)if(i.equalsEpsilon(e[r],t,Se.CesiumMath.EPSILON12))return r;return-1}var Oe=new xe.Cartographic,Ye=new xe.Cartesian3,Ue=new xe.Cartesian3,Ve=new xe.Cartesian3,ke=new xe.Matrix4;function He(e,t,i,n,r,a,o,s,u,h,c){for(var d=s.length,g=0;g<d;++g){var l=s[g],m=l.cartographic,p=l.index,I=e.length,E=m.longitude,T=m.latitude;T=Se.CesiumMath.clamp(T,-Se.CesiumMath.PI_OVER_TWO,Se.CesiumMath.PI_OVER_TWO),m=m.height-o.skirtHeight;o.hMin=Math.min(o.hMin,m),xe.Cartographic.fromRadians(E,T,m,Oe),h&&(Oe.longitude+=u),h?g===d-1?Oe.latitude+=c:0===g&&(Oe.latitude-=c):Oe.latitude+=u,T=o.ellipsoid.cartographicToCartesian(Oe),e.push(T),t.push(m),i.push(xe.Cartesian2.clone(i[p])),0<n.length&&n.push(n[p]),0<r.length&&r.push(r[p]),xe.Matrix4.multiplyByPoint(o.toENU,T,Ye),m=o.minimum,T=o.maximum,xe.Cartesian3.minimumByComponent(Ye,m,m),xe.Cartesian3.maximumByComponent(Ye,T,T),T=o.lastBorderPoint,Ne.defined(T)&&(T=T.index,a.push(T,I-1,I,I,p,T)),o.lastBorderPoint=l}}return e((function(e,t){e.ellipsoid=xe.Ellipsoid.clone(e.ellipsoid),e.rectangle=xe.Rectangle.clone(e.rectangle);var i=function(e,t,i,n,r,a,o,s,u,h,c){var d,g,l,m,p;le=Ne.defined(n)?(d=n.west,g=n.south,l=n.east,m=n.north,p=n.width,n.height):(d=Se.CesiumMath.toRadians(r.west),g=Se.CesiumMath.toRadians(r.south),l=Se.CesiumMath.toRadians(r.east),m=Se.CesiumMath.toRadians(r.north),p=Se.CesiumMath.toRadians(n.width),Se.CesiumMath.toRadians(n.height));var I,E,T=[g,m],f=[d,l],C=Me.Transforms.eastNorthUpToFixedFrame(t,i),v=xe.Matrix4.inverseTransformation(C,ke);u&&(I=Pe.WebMercatorProjection.geodeticLatitudeToMercatorAngle(g),E=1/(Pe.WebMercatorProjection.geodeticLatitudeToMercatorAngle(m)-I));var M=1!==a,x=new DataView(e),N=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY,S=Ue;S.x=Number.POSITIVE_INFINITY,S.y=Number.POSITIVE_INFINITY,S.z=Number.POSITIVE_INFINITY;var w=Ve;w.x=Number.NEGATIVE_INFINITY,w.y=Number.NEGATIVE_INFINITY,w.z=Number.NEGATIVE_INFINITY;var B,P,A=0,y=0,R=0;for(P=0;P<4;++P){var _=A;B=x.getUint32(_,!0),_+=Re;var W=Se.CesiumMath.toRadians(180*x.getFloat64(_,!0));_+=We,-1===Fe(f,W)&&f.push(W),W=Se.CesiumMath.toRadians(180*x.getFloat64(_,!0)),_+=We,-1===Fe(T,W)&&T.push(W),_+=2*We,W=x.getInt32(_,!0),_+=ye,y+=W,R+=3*(W=x.getInt32(_,!0)),A+=B+Re}var F=[],O=[],Y=new Array(y),U=new Array(y),V=new Array(y),k=u?new Array(y):[],H=M?new Array(y):[],L=new Array(R),D=[],G=[],j=[],z=[],q=0,J=0;for(P=A=0;P<4;++P){B=x.getUint32(A,!0);var K=A+=Re,Q=Se.CesiumMath.toRadians(180*x.getFloat64(A,!0));A+=We;var X=Se.CesiumMath.toRadians(180*x.getFloat64(A,!0));A+=We;var Z=Se.CesiumMath.toRadians(180*x.getFloat64(A,!0)),$=.5*Z;A+=We;var ee=Se.CesiumMath.toRadians(180*x.getFloat64(A,!0)),te=.5*ee;A+=We;var ie=x.getInt32(A,!0);A+=ye;var ne=x.getInt32(A,!0);A+=ye,A+=ye;for(var re=new Array(ie),ae=0;ae<ie;++ae){var oe=Q+x.getUint8(A++)*Z;Oe.longitude=oe;var se=X+x.getUint8(A++)*ee;Oe.latitude=se;var ue=x.getFloat32(A,!0);if(A+=_e,0!==ue&&ue<c&&(ue*=-Math.pow(2,h)),ue*=6371010,Oe.height=ue,-1!==Fe(f,oe)||-1!==Fe(T,se)){var he=Fe(F,Oe,xe.Cartographic);if(-1!==he){re[ae]=O[he];continue}F.push(xe.Cartographic.clone(Oe)),O.push(q)}re[ae]=q,Math.abs(oe-d)<$?D.push({index:q,cartographic:xe.Cartographic.clone(Oe)}):Math.abs(oe-l)<$?j.push({index:q,cartographic:xe.Cartographic.clone(Oe)}):Math.abs(se-g)<te?G.push({index:q,cartographic:xe.Cartographic.clone(Oe)}):Math.abs(se-m)<te&&z.push({index:q,cartographic:xe.Cartographic.clone(Oe)}),N=Math.min(ue,N),b=Math.max(ue,b),V[q]=ue,he=i.cartographicToCartesian(Oe),Y[q]=he,u&&(k[q]=(Pe.WebMercatorProjection.geodeticLatitudeToMercatorAngle(se)-I)*E),M&&(ue=i.geodeticSurfaceNormal(he),H[q]=ue),xe.Matrix4.multiplyByPoint(v,he,Ye),xe.Cartesian3.minimumByComponent(Ye,S,S),xe.Cartesian3.maximumByComponent(Ye,w,w),oe=(oe-d)/(l-d),oe=Se.CesiumMath.clamp(oe,0,1),se=(se-g)/(m-g),se=Se.CesiumMath.clamp(se,0,1),U[q]=new xe.Cartesian2(oe,se),++q}for(var ce=3*ne,de=0;de<ce;++de,++J)L[J]=re[x.getUint16(A,!0)],A+=Ae;if(B!==A-K)throw new Be.RuntimeError("Invalid terrain tile.")}Y.length=q,U.length=q,V.length=q,u&&(k.length=q),M&&(H.length=q);var le,ge=q;r=J,e={hMin:N,lastBorderPoint:void 0,skirtHeight:s,toENU:v,ellipsoid:i,minimum:S,maximum:w};D.sort((function(e,t){return t.cartographic.latitude-e.cartographic.latitude})),G.sort((function(e,t){return e.cartographic.longitude-t.cartographic.longitude})),j.sort((function(e,t){return e.cartographic.latitude-t.cartographic.latitude})),z.sort((function(e,t){return t.cartographic.longitude-e.cartographic.longitude})),He(Y,V,U,k,H,L,e,D,-(s=1e-5)*p,!0,-s*le),He(Y,V,U,k,H,L,e,G,-s*le,!1),He(Y,V,U,k,H,L,e,j,s*p,!0,s*le),He(Y,V,U,k,H,L,e,z,s*le,!1),0<D.length&&0<z.length&&(pe=D[0].index,Ie=z[z.length-1].index,le=Y.length-1,L.push(Ie,le,ge,ge,pe,Ie)),y=Y.length;var me,pe=Me.BoundingSphere.fromPoints(Y);Ne.defined(n)&&(me=we.OrientedBoundingBox.fromRectangle(n,N,b,i));for(var Ie=new be.EllipsoidalOccluder(i).computeHorizonCullingPointPossiblyUnderEllipsoid(t,Y,N),Ee=(n=new ve.AxisAlignedBoundingBox(S,w,t),new be.TerrainEncoding(t,n,e.hMin,b,C,!1,u,M,a,o)),Te=new Float32Array(y*Ee.stride),fe=0,Ce=0;Ce<y;++Ce)fe=Ee.encode(Te,fe,Y[Ce],U[Ce],V[Ce],void 0,k[Ce],H[Ce]);return e=D.map((function(e){return e.index})).reverse(),C=G.map((function(e){return e.index})).reverse(),a=j.map((function(e){return e.index})).reverse(),o=z.map((function(e){return e.index})).reverse(),C.unshift(a[a.length-1]),C.push(e[0]),o.unshift(e[e.length-1]),o.push(a[0]),{vertices:Te,indices:new Uint16Array(L),maximumHeight:b,minimumHeight:N,encoding:Ee,boundingSphere3D:pe,orientedBoundingBox:me,occludeePointInScaledSpace:Ie,vertexCountWithoutSkirts:ge,indexCountWithoutSkirts:r,westIndicesSouthToNorth:e,southIndicesEastToWest:C,eastIndicesNorthToSouth:a,northIndicesWestToEast:o}}(e.buffer,e.relativeToCenter,e.ellipsoid,e.rectangle,e.nativeRectangle,e.exaggeration,e.exaggerationRelativeHeight,e.skirtHeight,e.includeWebMercatorT,e.negativeAltitudeExponentBias,e.negativeElevationThreshold),n=i.vertices;return t.push(n.buffer),e=i.indices,t.push(e.buffer),{vertices:n.buffer,indices:e.buffer,numberOfAttributes:i.encoding.stride,minimumHeight:i.minimumHeight,maximumHeight:i.maximumHeight,boundingSphere3D:i.boundingSphere3D,orientedBoundingBox:i.orientedBoundingBox,occludeePointInScaledSpace:i.occludeePointInScaledSpace,encoding:i.encoding,vertexCountWithoutSkirts:i.vertexCountWithoutSkirts,indexCountWithoutSkirts:i.indexCountWithoutSkirts,westIndicesSouthToNorth:i.westIndicesSouthToNorth,southIndicesEastToWest:i.southIndicesEastToWest,eastIndicesNorthToSouth:i.eastIndicesNorthToSouth,northIndicesWestToEast:i.northIndicesWestToEast}}))}));