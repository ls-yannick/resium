define(["exports","./Check-6c0211bc","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./OrientedBoundingBox-b5830afd"],(function(n,t,g,f,l){"use strict";var e={},i=new g.Cartesian3,x=new g.Cartesian3,B=new g.Cartesian3,P=new g.Cartesian3,M=new l.OrientedBoundingBox;function o(n,t,e,r,a){return t=g.Cartesian3.subtract(n,t,i),e=g.Cartesian3.dot(e,t),t=g.Cartesian3.dot(r,t),g.Cartesian2.fromElements(e,t,a)}e.validOutline=function(n){var t=l.OrientedBoundingBox.fromPoints(n,M).halfAxes,e=f.Matrix3.getColumn(t,0,x);n=f.Matrix3.getColumn(t,1,B),t=f.Matrix3.getColumn(t,2,P),e=g.Cartesian3.magnitude(e),n=g.Cartesian3.magnitude(n),t=g.Cartesian3.magnitude(t);return!(0===e&&(0===n||0===t)||0===n&&0===t)},e.computeProjectTo2DArguments=function(n,t,e,r){var a,i,o=l.OrientedBoundingBox.fromPoints(n,M),u=o.halfAxes,s=f.Matrix3.getColumn(u,0,x),C=f.Matrix3.getColumn(u,1,B),c=f.Matrix3.getColumn(u,2,P),m=g.Cartesian3.magnitude(s),d=g.Cartesian3.magnitude(C);n=g.Cartesian3.magnitude(c),u=Math.min(m,d,n);return(0!==m||0!==d&&0!==n)&&(0!==d||0!==n)&&(u!==d&&u!==n||(a=s),u===m?a=C:u===n&&(i=C),u!==m&&u!==d||(i=c),g.Cartesian3.normalize(a,e),g.Cartesian3.normalize(i,r),g.Cartesian3.clone(o.center,t),!0)},e.createProjectPointsTo2DFunction=function(r,a,i){return function(n){for(var t=new Array(n.length),e=0;e<n.length;e++)t[e]=o(n[e],r,a,i);return t}},e.createProjectPointTo2DFunction=function(e,r,a){return function(n,t){return o(n,e,r,a,t)}},n.CoplanarPolygonGeometryLibrary=e}));