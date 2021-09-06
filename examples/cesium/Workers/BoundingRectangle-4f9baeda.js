define(["exports","./when-54c2dc71","./Check-6c0211bc","./Cartesian2-bddc1162","./Transforms-6f81ad4c"],(function(t,o,e,h,a){"use strict";function f(t,e,n,i){this.x=o.defaultValue(t,0),this.y=o.defaultValue(e,0),this.width=o.defaultValue(n,0),this.height=o.defaultValue(i,0)}f.packedLength=4,f.pack=function(t,e,n){return n=o.defaultValue(n,0),e[n++]=t.x,e[n++]=t.y,e[n++]=t.width,e[n]=t.height,e},f.unpack=function(t,e,n){return e=o.defaultValue(e,0),o.defined(n)||(n=new f),n.x=t[e++],n.y=t[e++],n.width=t[e++],n.height=t[e],n},f.fromPoints=function(t,e){if(o.defined(e)||(e=new f),!o.defined(t)||0===t.length)return e.x=0,e.y=0,e.width=0,e.height=0,e;for(var n=t.length,i=t[0].x,h=t[0].y,r=t[0].x,a=t[0].y,d=1;d<n;d++){var c=(u=t[d]).x,u=u.y;i=Math.min(c,i),r=Math.max(c,r),h=Math.min(u,h),a=Math.max(u,a)}return e.x=i,e.y=h,e.width=r-i,e.height=a-h,e};var r=new a.GeographicProjection,d=new h.Cartographic,u=new h.Cartographic;f.fromRectangle=function(t,e,n){if(o.defined(n)||(n=new f),!o.defined(t))return n.x=0,n.y=0,n.width=0,n.height=0,n;var i=(e=o.defaultValue(e,r)).project(h.Rectangle.southwest(t,d));t=e.project(h.Rectangle.northeast(t,u));return h.Cartesian2.subtract(t,i,t),n.x=i.x,n.y=i.y,n.width=t.x,n.height=t.y,n},f.clone=function(t,e){if(o.defined(t))return o.defined(e)?(e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e):new f(t.x,t.y,t.width,t.height)},f.union=function(t,e,n){o.defined(n)||(n=new f);var i=Math.min(t.x,e.x),h=Math.min(t.y,e.y),r=Math.max(t.x+t.width,e.x+e.width);e=Math.max(t.y+t.height,e.y+e.height);return n.x=i,n.y=h,n.width=r-i,n.height=e-h,n},f.expand=function(t,e,n){n=f.clone(t,n);var i=e.x-n.x;t=e.y-n.y;return i>n.width?n.width=i:i<0&&(n.width-=i,n.x=e.x),t>n.height?n.height=t:t<0&&(n.height-=t,n.y=e.y),n},f.intersect=function(t,e){var n=t.x,i=t.y,h=e.x,r=e.y;return n>h+e.width||n+t.width<h||i+t.height<r||i>r+e.height?a.Intersect.OUTSIDE:a.Intersect.INTERSECTING},f.equals=function(t,e){return t===e||o.defined(t)&&o.defined(e)&&t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height},f.prototype.clone=function(t){return f.clone(this,t)},f.prototype.intersect=function(t){return f.intersect(this,t)},f.prototype.equals=function(t){return f.equals(this,t)},t.BoundingRectangle=f}));