(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{nS3R:function(t,e,r){"use strict";r.r(e);var n=r("OkUi"),o=r.n(n),a=(r("9Q51"),r("Wbzz")),i=r("msgH"),c=(r("fKUm"),r("YA/O"),r("S16a"),r("bCgh"),r("TAtK"),r("54Pu"),r("iczh")),u=r.n(c);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,b(e).apply(this,arguments))}var r,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,t),r=e,(o=[{key:"render",value:function(){var t,e,r=this.props,o=r.prefixCls,a=r.className,i=r.style,c=r.size,l=r.shape,s=u()((p(t={},"".concat(o,"-lg"),"large"===c),p(t,"".concat(o,"-sm"),"small"===c),t)),y=u()((p(e={},"".concat(o,"-circle"),"circle"===l),p(e,"".concat(o,"-square"),"square"===l),e)),b="number"==typeof c?{width:c,height:c,lineHeight:"".concat(c,"px")}:{};return n.createElement("span",{className:u()(o,a,s,y),style:f(f({},b),i)})}}])&&s(r.prototype,o),a&&s(r,a),e}(n.Component);m.defaultProps={size:"large"};var v=m;function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var w=function(t){var e=t.prefixCls,r=t.className,o=t.width,a=t.style;return n.createElement("h3",{className:u()(e,r),style:d({width:o},a)})};r("+v2D"),r("qbEc"),r("zB3d"),r("/Li9"),r("RjSp");function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function E(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var S=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,_(e).apply(this,arguments))}var r,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,t),r=e,(o=[{key:"getWidth",value:function(t){var e=this.props,r=e.width,n=e.rows,o=void 0===n?2:n;return Array.isArray(r)?r[t]:o-1===t?r:void 0}},{key:"render",value:function(){var t=this,e=this.props,r=e.prefixCls,o=e.className,a=e.style,i=e.rows,c=g(Array(i)).map((function(e,r){return n.createElement("li",{key:r,style:{width:t.getWidth(r)}})}));return n.createElement("ul",{className:u()(r,o),style:a},c)}}])&&j(r.prototype,o),a&&j(r,a),e}(n.Component),C=r("ooka");function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function N(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t){return t&&"object"===R(t)?t:{}}var K=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=N(this,z(e).apply(this,arguments))).renderSkeleton=function(e){var r=e.getPrefixCls,o=t.props,a=o.prefixCls,i=o.loading,c=o.className,l=o.children,f=o.avatar,p=o.title,s=o.paragraph,y=o.active,b=r("skeleton",a);if(i||!("loading"in t.props)){var h,m,d,O=!!f,g=!!p,j=!!s;if(O){var E=x(x({prefixCls:"".concat(b,"-avatar")},function(t,e){return t&&!e?{shape:"square"}:{shape:"circle"}}(g,j)),q(f));m=n.createElement("div",{className:"".concat(b,"-header")},n.createElement(v,E))}if(g||j){var _,P;if(g){var C=x(x({prefixCls:"".concat(b,"-title")},function(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}(O,j)),q(p));_=n.createElement(w,C)}if(j){var A=x(x({prefixCls:"".concat(b,"-paragraph")},function(t,e){var r={};return t&&e||(r.width="61%"),r.rows=!t&&e?3:2,r}(O,g)),q(s));P=n.createElement(S,A)}d=n.createElement("div",{className:"".concat(b,"-content")},_,P)}var N=u()(b,c,(k(h={},"".concat(b,"-with-avatar"),O),k(h,"".concat(b,"-active"),y),h));return n.createElement("div",{className:N},m,d)}return l},t}var r,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(e,t),r=e,(o=[{key:"render",value:function(){return n.createElement(C.a,null,this.renderSkeleton)}}])&&A(r.prototype,o),a&&A(r,a),e}(n.Component);K.defaultProps={avatar:!1,title:!0,paragraph:!0};var L=K,U=function(){return o.a.createElement("div",{style:{padding:"100px 10%"}},o.a.createElement(L,null),o.a.createElement(L,null),o.a.createElement(L,null),o.a.createElement(L,null))};var W=function(t){var e,r;function n(e){var r;if(r=t.call(this,e)||this,"undefined"!=typeof window){var n=Object(i.getUserLangKey)(["zh","en"],"zh");Object(a.navigate)(n)}return r}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return o.a.createElement(U,null)},n}(o.a.PureComponent),H=function(){return o.a.createElement(W,null)};H.noLayout=!0;e.default=H}}]);
//# sourceMappingURL=component---node-modules-antv-gatsby-theme-antv-0-9-49-antv-gatsby-theme-antv-site-pages-index-tsx-873cf01c033602de6df2.js.map