define(["exports","./Matrix2-ccd5b911","./when-4bbc8319","./RuntimeError-346a3079","./ComponentDatatype-93750d1a"],(function(t,a,r,e,i){"use strict";function n(t){this._ellipsoid=r.defaultValue(t,a.Ellipsoid.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(n.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),n.mercatorAngleToGeodeticLatitude=function(t){return i.CesiumMath.PI_OVER_TWO-2*Math.atan(Math.exp(-t))},n.geodeticLatitudeToMercatorAngle=function(t){return n.MaximumLatitude<t?t=n.MaximumLatitude:t<-n.MaximumLatitude&&(t=-n.MaximumLatitude),t=Math.sin(t),.5*Math.log((1+t)/(1-t))},n.MaximumLatitude=n.mercatorAngleToGeodeticLatitude(Math.PI),n.prototype.project=function(t,e){var i=this._semimajorAxis,o=t.longitude*i;i=n.geodeticLatitudeToMercatorAngle(t.latitude)*i,t=t.height;return r.defined(e)?(e.x=o,e.y=i,e.z=t,e):new a.Cartesian3(o,i,t)},n.prototype.unproject=function(t,e){var i=this._oneOverSemimajorAxis,o=t.x*i;i=n.mercatorAngleToGeodeticLatitude(t.y*i),t=t.z;return r.defined(e)?(e.longitude=o,e.latitude=i,e.height=t,e):new a.Cartographic(o,i,t)},t.WebMercatorProjection=n}));