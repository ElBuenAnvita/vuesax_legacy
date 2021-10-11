/*!
  * Vuesax v4.0.1-alpha.25 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.vsSwitch=t(require("vue")):e.vsSwitch=t(e.Vue)}("undefined"!=typeof self?self:this,function(n){return(o={},i.m=r={0:function(e,t,n){"use strict";var r=n(4),l=n.n(r),c="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function u(n,r,i){(i?Reflect.getOwnMetadataKeys(r,i):Reflect.getOwnMetadataKeys(r)).forEach(function(e){var t=i?Reflect.getOwnMetadata(e,r,i):Reflect.getOwnMetadata(e,r);i?Reflect.defineMetadata(e,t,n,i):Reflect.defineMetadata(e,t,n)})}var s={__proto__:[]}instanceof Array;function a(i){return function(e,t,n){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof n&&(n=void 0),r.__decorators__.push(function(e){return i(e,t,n)})}}var f=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function i(e,r){void 0===r&&(r={}),r.name=r.name||e._componentTag||e.name;var i=e.prototype;Object.getOwnPropertyNames(i).forEach(function(t){if("constructor"!==t)if(-1<f.indexOf(t))r[t]=i[t];else{var n=Object.getOwnPropertyDescriptor(i,t);void 0!==n.value?"function"==typeof n.value?(r.methods||(r.methods={}))[t]=n.value:(r.mixins||(r.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((r.computed||(r.computed={}))[t]={get:n.get,set:n.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,e){var t=e.prototype._init;e.prototype._init=function(){var e=this,t=Object.getOwnPropertyNames(r);if(r.$options.props)for(var n in r.$options.props)r.hasOwnProperty(n)||t.push(n);t.forEach(function(t){"_"!==t.charAt(0)&&Object.defineProperty(e,t,{get:function(){return r[t]},set:function(e){r[t]=e},configurable:!0})})};var n=new e;e.prototype._init=t;var i={};return Object.keys(n).forEach(function(e){void 0!==n[e]&&(i[e]=n[e])}),i}(this,e)}});var t=e.__decorators__;t&&(t.forEach(function(e){return e(r)}),delete e.__decorators__);var n=Object.getPrototypeOf(e.prototype),o=n instanceof l.a?n.constructor:l.a,a=o.extend(r);return function(i,o,a){Object.getOwnPropertyNames(o).forEach(function(e){if(!d[e]){var t=Object.getOwnPropertyDescriptor(i,e);if(!t||t.configurable){var n=Object.getOwnPropertyDescriptor(o,e);if(!s){if("cid"===e)return;var r=Object.getOwnPropertyDescriptor(a,e);if(!function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(n.value)&&r&&r.value===n.value)return}0,Object.defineProperty(i,e,n)}}})}(a,e,o),c&&function(t,n){u(t,n),Object.getOwnPropertyNames(n.prototype).forEach(function(e){u(t.prototype,n.prototype,e)}),Object.getOwnPropertyNames(n).forEach(function(e){u(t,n,e)})}(a,e),a}var d={prototype:!0,arguments:!0,callee:!0,caller:!0};function o(t){return"function"==typeof t?i(t):function(e){return i(e,t)}}o.registerHooks=function(e){f.push.apply(f,e)};var p=o;n.d(t,"b",function(){return y}),n.d(t,"c",function(){return g}),n.d(t,"a",function(){return p});var b="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function v(e,t,n){b&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,n)))}function y(n){return void 0===n&&(n={}),function(e,t){v(n,e,t),a(function(e,t){(e.props||(e.props={}))[t]=n})(e,t)}}function g(r,e){void 0===e&&(e={});var t=e.deep,i=void 0!==t&&t,n=e.immediate,o=void 0!==n&&n;return a(function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var n=e.watch;"object"!=typeof n[r]||Array.isArray(n[r])?void 0===n[r]&&(n[r]=[]):n[r]=[n[r]],n[r].push({handler:t,deep:i,immediate:o})})}},1:function(e,t){e.exports=function(n,r,e,t,i){var o={};return Object.keys(t).forEach(function(e){o[e]=t[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(n,r,o),o=null),o}},10:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},2:function(e,t){e.exports=function(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},21:function(e,t,n){},3:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4:function(e,t){e.exports=n},5:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}},51:function(e,t,n){"use strict";n.r(t);n(21);var r,i,o,a,l,c,u,s,f,d,p,b,v,y,g,h,w=n(10),m=n.n(w),O=n(2),j=n.n(O),x=n(6),_=n.n(x),P=n(3),k=n.n(P),C=n(5),R=n.n(C),z=n(1),B=n.n(z),S=(n(8),n(0)),$=n(9);function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(n,!0).forEach(function(e){m()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var M=(r=Object(S.b)({default:""}),i=Object(S.b)({default:""}),o=Object(S.b)({default:""}),a=Object(S.b)({type:Boolean,default:!1}),l=Object(S.b)({type:Boolean,default:!1}),c=Object(S.b)({type:Boolean,default:!1}),u=Object(S.b)({type:Boolean,default:!1}),Object(S.a)((f=function(i){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=i.call.apply(i,[this].concat(n))||this,j()(e,"value",d,k()(e)),j()(e,"val",p,k()(e)),j()(e,"notValue",b,k()(e)),j()(e,"loading",v,k()(e)),j()(e,"square",y,k()(e)),j()(e,"indeterminate",g,k()(e)),j()(e,"icon",h,k()(e)),e}return R()(e,i),e.prototype.render=function(e){var t,n,r,i,o,a,l=this,c=e("div",{class:["vs-switch__circle"]},[this.$slots.circle]),u=e("div",{ref:"on",class:["vs-switch__text","on"]},[this.$slots.on||this.$slots.default]),s=e("div",{ref:"off",class:["vs-switch__text","off"]},[this.$slots.off||this.$slots.default]),f=e("div",{class:["vs-switch__background"]}),d=e("input",{attrs:E({},this.$attrs,{type:"checkbox"}),domProps:{checked:this.isChecked},on:E({},this.$listeners,{input:function(e){if("boolean"==typeof l.value)l.$emit("input",!l.value);else if("object"==typeof l.value&&null!==l.value){var t=l.value,n=-1===t.indexOf(l.val)&&-1===JSON.stringify(t).indexOf(JSON.stringify(l.val)),r=0;t.forEach(function(e,t){JSON.stringify(e)==JSON.stringify(l.val)&&(r=t)}),n?t.push(l.val):t.splice(r,1),l.$emit("input",t)}else l.val!==l.value?l.$emit("input",l.val):l.$emit("input",l.notValue||null);l.$emit("change",e)}}),class:["vs-switch__input"]});return e("div",{staticClass:"vs-switch",attrs:{type:"checkbox"},style:(t={},t["--vs-color"]=this.color?this.getColor:"",t),class:[{"vs-switch--loading":this.loading,"vs-switch--square":this.square,"vs-switch--indeterminate":this.indeterminate,"vs-switch--icon":this.icon},(n={},n["vs-component--primary"]=!(this.danger||this.success||this.warn||this.dark||this.color),n),(r={},r["vs-component--danger"]=!!this.danger,r),(i={},i["vs-component--warn"]=!!this.warn,i),(o={},o["vs-component--success"]=!!this.success,o),(a={},a["vs-component--dark"]=!!this.dark,a)]},[d,c,u,s,f])},_()(e,[{key:"isChecked",get:function(){var n=this,e=!1;if(this.value){if("boolean"==typeof this.value)e=this.value;else if("object"==typeof this.value&&null!==this.value){var t=this.value,r=-1===t.indexOf(this.val)&&-1===JSON.stringify(t).indexOf(JSON.stringify(this.val));return t.forEach(function(e,t){JSON.stringify(e)==JSON.stringify(n.val)&&t}),!r}}else e=!1;return e}}]),e}($.a),d=B()(f.prototype,"value",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=B()(f.prototype,"val",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=B()(f.prototype,"notValue",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=B()(f.prototype,"loading",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=B()(f.prototype,"square",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=B()(f.prototype,"indeterminate",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=B()(f.prototype,"icon",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=f))||s);M.install=function(e){e.component("vs-switch",M)},"undefined"!=typeof window&&window.Vue&&M.install(window.Vue);t.default=M},6:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},7:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return l});function s(e){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}function f(e,t,n){n?"#comment"!==n.nodeName&&n.style.setProperty("--vs-"+e,t):document.documentElement.style.setProperty("--vs-"+e,t)}var r=function(e,t,n,r){var i,o=/^(rgb|rgba)/.test(t),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),l=/^(#)/.test(t);if("dark"==t&&n&&r&&n.classList.add("vs-component-dark"),o){var c=t.replace(/[rgba()]/g,"").split(",");i=c[0]+","+c[1]+","+c[2],f(e,i,n),r&&n.classList.add("vs-change-color")}else if(l){var u=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(t);i=u.r+","+u.g+","+u.b,f(e,i,n),r&&n.classList.add("vs-change-color")}else if(s(t)){i=window.getComputedStyle(document.body).getPropertyValue("--vs-"+t),f(e,i,n),r&&n.classList.add("vs-change-color")}else a&&(f(e,t,n),r&&n.classList.add("vs-change-color"))},i=function(e){var t,n=/^(rgb|rgba)/.test(e),r=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),i=/^(#)/.test(e);if(n){var o=e.replace(/[rgba()]/g,"").split(",");t=o[0]+","+o[1]+","+o[2]}else if(i){var a=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e);t=a.r+","+a.g+","+a.b}else if(s(e)){t=window.getComputedStyle(document.body).getPropertyValue("--vs-"+e)}else r&&(t=e);return t},o=function(e,t){var n=t||document.body;n.insertBefore(e,n.lastChild)},a=function(e,t){var n=t.getBoundingClientRect(),r=n.x,i=n.y,o=n.width,a=n.height,l=e.style,c=window.pageYOffset,u=e.clientHeight+n.y+c;c+window.innerHeight-u<30?(l.top=i+c-e.clientHeight-4+"px",l.left=r+"px",l.width=o+"px",e.classList.add("top"),t.classList.add("top")):(l.top=i+c+a-4+"px",l.left=r+"px",l.width=o+"px",e.classList.remove("top"),t.classList.remove("top"))},l=function(e,t,n){var r=t.getBoundingClientRect(),i=r.x,o=r.y,a=r.width,l=r.height,c=e.style,u=window.pageYOffset,s=e.clientHeight+r.y+u,f=u+window.innerHeight;if(i+a+10+e.getBoundingClientRect().width>window.innerWidth&&"right"==n&&(n="left",e.classList.remove("right"),e.classList.add("left")),i-10<e.getBoundingClientRect().width&&"left"==n&&(n="top",e.classList.remove("left"),e.classList.add("top")),f-s<30||"top"==n){c.top=o+u-e.clientHeight-8+"px";var d=i+(a-e.getBoundingClientRect().width)/2;d+e.getBoundingClientRect().width<window.innerWidth?0<d?c.left=d+"px":(c.left="10px",e.classList.add("notArrow")):(c.left="auto",c.right="10px",e.classList.add("notArrow"))}else if("bottom"==n){c.top=o+u+l+8+"px";var p=i+(a-e.getBoundingClientRect().width)/2;p+e.getBoundingClientRect().width<window.innerWidth?0<p?c.left=p+"px":(c.left="10px",e.classList.add("notArrow")):(c.left="auto",c.right="10px",e.classList.add("notArrow"))}else"left"==n?(c.top=o+u+(l-e.getBoundingClientRect().height)/2+"px",c.left=i-e.getBoundingClientRect().width-8+"px"):"right"==n&&(c.top=o+u+(l-e.getBoundingClientRect().height)/2+"px",c.left=i+a+8+"px")}},8:function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(e,t,n){"use strict";n.d(t,"a",function(){return M});var r,i,o,a,l,c,u,s,f,d,p,b,v,y,g,h,w,m,O=n(2),j=n.n(O),x=n(6),_=n.n(x),P=n(3),k=n.n(P),C=n(5),R=n.n(C),z=n(1),B=n.n(z),S=(n(8),n(4)),$=n.n(S),L=n(0),E=n(7),M=(r=Object(L.b)({type:String,default:null}),i=Object(L.b)({type:Boolean,default:!1}),o=Object(L.b)({type:Boolean,default:!1}),a=Object(L.b)({type:Boolean,default:!1}),l=Object(L.b)({type:Boolean,default:!1}),c=Object(L.b)({type:Boolean,default:!1}),u=Object(L.b)({type:Boolean,default:!1}),Object(L.a)((m=w=function(i){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))||this).componentColor=null,e.getColor=null,j()(e,"color",d,k()(e)),j()(e,"danger",p,k()(e)),j()(e,"success",b,k()(e)),j()(e,"warn",v,k()(e)),j()(e,"dark",y,k()(e)),j()(e,"primary",g,k()(e)),j()(e,"active",h,k()(e)),e}return R()(e,i),e.prototype.mounted=function(){this.getColor=Object(E.a)(this.color)},_()(e,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}},{key:"isColor",get:function(){return!!(this.color||this.primary||this.success||this.warn||this.danger||this.dark)}}]),e}($.a),w.install=void 0,w.use=void 0,f=m,d=B()(f.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=B()(f.prototype,"danger",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=B()(f.prototype,"success",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=B()(f.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=B()(f.prototype,"dark",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=B()(f.prototype,"primary",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=B()(f.prototype,"active",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=f))||s)}},i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=51)).default;function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var r,o});