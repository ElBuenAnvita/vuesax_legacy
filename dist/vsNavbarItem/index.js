/*!
  * Vuesax v4.0.2-alpha-e.2 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira, edited by ElBuenAnvita
  * Released under the MIT License.
  * Donate to Luis Daniel Rovira: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.vsNavbarItem=t(require("vue")):e.vsNavbarItem=t(e.Vue)}("undefined"!=typeof self?self:this,function(n){return(o={},i.m=r={0:function(e,t,n){"use strict";var r=n(4),c=n.n(r),l="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function u(n,r,i){(i?Reflect.getOwnMetadataKeys(r,i):Reflect.getOwnMetadataKeys(r)).forEach(function(e){var t=i?Reflect.getOwnMetadata(e,r,i):Reflect.getOwnMetadata(e,r);i?Reflect.defineMetadata(e,t,n,i):Reflect.defineMetadata(e,t,n)})}var d={__proto__:[]}instanceof Array;function a(i){return function(e,t,n){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof n&&(n=void 0),r.__decorators__.push(function(e){return i(e,t,n)})}}var s=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function i(e,r){void 0===r&&(r={}),r.name=r.name||e._componentTag||e.name;var i=e.prototype;Object.getOwnPropertyNames(i).forEach(function(t){if("constructor"!==t)if(-1<s.indexOf(t))r[t]=i[t];else{var n=Object.getOwnPropertyDescriptor(i,t);void 0!==n.value?"function"==typeof n.value?(r.methods||(r.methods={}))[t]=n.value:(r.mixins||(r.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((r.computed||(r.computed={}))[t]={get:n.get,set:n.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,e){var t=e.prototype._init;e.prototype._init=function(){var e=this,t=Object.getOwnPropertyNames(r);if(r.$options.props)for(var n in r.$options.props)r.hasOwnProperty(n)||t.push(n);t.forEach(function(t){"_"!==t.charAt(0)&&Object.defineProperty(e,t,{get:function(){return r[t]},set:function(e){r[t]=e},configurable:!0})})};var n=new e;e.prototype._init=t;var i={};return Object.keys(n).forEach(function(e){void 0!==n[e]&&(i[e]=n[e])}),i}(this,e)}});var t=e.__decorators__;t&&(t.forEach(function(e){return e(r)}),delete e.__decorators__);var n=Object.getPrototypeOf(e.prototype),o=n instanceof c.a?n.constructor:c.a,a=o.extend(r);return function(i,o,a){Object.getOwnPropertyNames(o).forEach(function(e){if(!f[e]){var t=Object.getOwnPropertyDescriptor(i,e);if(!t||t.configurable){var n=Object.getOwnPropertyDescriptor(o,e);if(!d){if("cid"===e)return;var r=Object.getOwnPropertyDescriptor(a,e);if(!function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(n.value)&&r&&r.value===n.value)return}0,Object.defineProperty(i,e,n)}}})}(a,e,o),l&&function(t,n){u(t,n),Object.getOwnPropertyNames(n.prototype).forEach(function(e){u(t.prototype,n.prototype,e)}),Object.getOwnPropertyNames(n).forEach(function(e){u(t,n,e)})}(a,e),a}var f={prototype:!0,arguments:!0,callee:!0,caller:!0};function o(t){return"function"==typeof t?i(t):function(e){return i(e,t)}}o.registerHooks=function(e){s.push.apply(s,e)};var p=o;n.d(t,"b",function(){return v}),n.d(t,"c",function(){return y}),n.d(t,"a",function(){return p});var b="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function h(e,t,n){b&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,n)))}function v(n){return void 0===n&&(n={}),function(e,t){h(n,e,t),a(function(e,t){(e.props||(e.props={}))[t]=n})(e,t)}}function y(r,e){void 0===e&&(e={});var t=e.deep,i=void 0!==t&&t,n=e.immediate,o=void 0!==n&&n;return a(function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var n=e.watch;"object"!=typeof n[r]||Array.isArray(n[r])?void 0===n[r]&&(n[r]=[]):n[r]=[n[r]],n[r].push({handler:t,deep:i,immediate:o})})}},1:function(e,t){e.exports=function(n,r,e,t,i){var o={};return Object.keys(t).forEach(function(e){o[e]=t[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(n,r,o),o=null),o}},2:function(e,t){e.exports=function(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},3:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},38:function(e,t,n){},4:function(e,t){e.exports=n},5:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}},6:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},64:function(e,t,n){"use strict";n.r(t);n(38);var r,i,o,a,c,l,u,d,s,f,p,b,h,v=n(2),y=n.n(v),g=n(3),w=n.n(g),m=n(5),O=n.n(m),j=n(1),x=n.n(j),_=(n(8),n(0)),L=n(9),P=(r=Object(_.b)({default:!1,type:Boolean}),i=Object(_.b)({}),o=Object(_.b)({}),a=Object(_.b)({}),c=Object(_.b)({default:"_blank"}),l=Object(_.c)("active"),Object(_.a)((d=function(i){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=i.call.apply(i,[this].concat(n))||this,y()(e,"active",s,w()(e)),y()(e,"to",f,w()(e)),y()(e,"id",p,w()(e)),y()(e,"href",b,w()(e)),y()(e,"target",h,w()(e)),e}O()(e,i);var t=e.prototype;return t.handleWatchActive=function(){this.handleLine()},t.handleLine=function(){var r=this;this.$nextTick(function(){if(r.active){var e=r.$parent,t=r.$el.offsetLeft;e.setLeftLine(t);var n=r.$el.scrollWidth;e.setWidthLine(n)}})},t.handleClick=function(){this.to?this.$router.push(this.to):this.href&&window.open(this.href,this.target)},t.handleActive=function(){this.$parent.setModel(this.id),this.handleLine()},t.mounted=function(){var i=this;setTimeout(function(){if(i.active){var e=i.$el,t=i.$parent,n=e.offsetLeft;t.setLeftLine(n);var r=e.scrollWidth;t.setWidthLine(r)}},150)},t.render=function(e){var t=this;return e("button",{staticClass:"vs-navbar__item",class:{active:this.active},on:{click:function(e){t.$emit("click",e),t.handleLine(),t.handleClick(),t.handleActive()}}},this.$slots.default)},e}(L.a),s=x()(d.prototype,"active",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=x()(d.prototype,"to",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=x()(d.prototype,"id",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=x()(d.prototype,"href",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=x()(d.prototype,"target",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x()(d.prototype,"handleWatchActive",[l],Object.getOwnPropertyDescriptor(d.prototype,"handleWatchActive"),d.prototype),u=d))||u);P.install=function(e){e.component("vs-navbar-item",P)},"undefined"!=typeof window&&window.Vue&&P.install(window.Vue);t.default=P},7:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return c});function d(e){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}function s(e,t,n){n?"#comment"!==n.nodeName&&n.style.setProperty("--vs-"+e,t):document.documentElement.style.setProperty("--vs-"+e,t)}var r=function(e,t,n,r){var i,o=/^(rgb|rgba)/.test(t),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),c=/^(#)/.test(t);if("dark"==t&&n&&r&&n.classList.add("vs-component-dark"),o){var l=t.replace(/[rgba()]/g,"").split(",");i=l[0]+","+l[1]+","+l[2],s(e,i,n),r&&n.classList.add("vs-change-color")}else if(c){var u=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(t);i=u.r+","+u.g+","+u.b,s(e,i,n),r&&n.classList.add("vs-change-color")}else if(d(t)){i=window.getComputedStyle(document.body).getPropertyValue("--vs-"+t),s(e,i,n),r&&n.classList.add("vs-change-color")}else a&&(s(e,t,n),r&&n.classList.add("vs-change-color"))},i=function(e){var t,n=/^(rgb|rgba)/.test(e),r=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),i=/^(#)/.test(e);if(n){var o=e.replace(/[rgba()]/g,"").split(",");t=o[0]+","+o[1]+","+o[2]}else if(i){var a=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e);t=a.r+","+a.g+","+a.b}else if(d(e)){t=window.getComputedStyle(document.body).getPropertyValue("--vs-"+e)}else r&&(t=e);return t},o=function(e,t){var n=t||document.body;n.insertBefore(e,n.lastChild)},a=function(e,t){var n=t.getBoundingClientRect(),r=n.x,i=n.y,o=n.width,a=n.height,c=e.style,l=window.pageYOffset,u=e.clientHeight+n.y+l;l+window.innerHeight-u<30?(c.top=i+l-e.clientHeight-4+"px",c.left=r+"px",c.width=o+"px",e.classList.add("top"),t.classList.add("top")):(c.top=i+l+a-4+"px",c.left=r+"px",c.width=o+"px",e.classList.remove("top"),t.classList.remove("top"))},c=function(e,t,n){var r=t.getBoundingClientRect(),i=r.x,o=r.y,a=r.width,c=r.height,l=e.style,u=window.pageYOffset,d=e.clientHeight+r.y+u,s=u+window.innerHeight;if(i+a+10+e.getBoundingClientRect().width>window.innerWidth&&"right"==n&&(n="left",e.classList.remove("right"),e.classList.add("left")),i-10<e.getBoundingClientRect().width&&"left"==n&&(n="top",e.classList.remove("left"),e.classList.add("top")),s-d<30||"top"==n){l.top=o+u-e.clientHeight-8+"px";var f=i+(a-e.getBoundingClientRect().width)/2;f+e.getBoundingClientRect().width<window.innerWidth?0<f?l.left=f+"px":(l.left="10px",e.classList.add("notArrow")):(l.left="auto",l.right="10px",e.classList.add("notArrow"))}else if("bottom"==n){l.top=o+u+c+8+"px";var p=i+(a-e.getBoundingClientRect().width)/2;p+e.getBoundingClientRect().width<window.innerWidth?0<p?l.left=p+"px":(l.left="10px",e.classList.add("notArrow")):(l.left="auto",l.right="10px",e.classList.add("notArrow"))}else"left"==n?(l.top=o+u+(c-e.getBoundingClientRect().height)/2+"px",l.left=i-e.getBoundingClientRect().width-8+"px"):"right"==n&&(l.top=o+u+(c-e.getBoundingClientRect().height)/2+"px",l.left=i+a+8+"px")}},8:function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(e,t,n){"use strict";n.d(t,"a",function(){return E});var r,i,o,a,c,l,u,d,s,f,p,b,h,v,y,g,w,m,O=n(2),j=n.n(O),x=n(6),_=n.n(x),L=n(3),P=n.n(L),k=n(5),C=n.n(k),R=n(1),z=n.n(R),B=(n(8),n(4)),$=n.n(B),A=n(0),M=n(7),E=(r=Object(A.b)({type:String,default:null}),i=Object(A.b)({type:Boolean,default:!1}),o=Object(A.b)({type:Boolean,default:!1}),a=Object(A.b)({type:Boolean,default:!1}),c=Object(A.b)({type:Boolean,default:!1}),l=Object(A.b)({type:Boolean,default:!1}),u=Object(A.b)({type:Boolean,default:!1}),Object(A.a)((m=w=function(i){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))||this).componentColor=null,e.getColor=null,j()(e,"color",f,P()(e)),j()(e,"danger",p,P()(e)),j()(e,"success",b,P()(e)),j()(e,"warn",h,P()(e)),j()(e,"dark",v,P()(e)),j()(e,"primary",y,P()(e)),j()(e,"active",g,P()(e)),e}return C()(e,i),e.prototype.mounted=function(){this.getColor=Object(M.a)(this.color)},_()(e,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}},{key:"isColor",get:function(){return!!(this.color||this.primary||this.success||this.warn||this.danger||this.dark)}}]),e}($.a),w.install=void 0,w.use=void 0,s=m,f=z()(s.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=z()(s.prototype,"danger",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=z()(s.prototype,"success",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=z()(s.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=z()(s.prototype,"dark",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=z()(s.prototype,"primary",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=z()(s.prototype,"active",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=s))||d)}},i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=64)).default;function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var r,o});