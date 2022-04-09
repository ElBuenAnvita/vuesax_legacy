/*!
  * Vuesax v4.0.2-alpha-e.1 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira, edited by ElBuenAnvita
  * Released under the MIT License.
  * Donate to Luis Daniel Rovira: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.vsTooltip=t(require("vue")):e.vsTooltip=t(e.Vue)}("undefined"!=typeof self?self:this,function(o){return(i={},r.m=n={0:function(e,t,o){"use strict";var n=o(4),l=o.n(n),c="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function u(o,n,r){(r?Reflect.getOwnMetadataKeys(n,r):Reflect.getOwnMetadataKeys(n)).forEach(function(e){var t=r?Reflect.getOwnMetadata(e,n,r):Reflect.getOwnMetadata(e,n);r?Reflect.defineMetadata(e,t,o,r):Reflect.defineMetadata(e,t,o)})}var s={__proto__:[]}instanceof Array;function a(r){return function(e,t,o){var n="function"==typeof e?e:e.constructor;n.__decorators__||(n.__decorators__=[]),"number"!=typeof o&&(o=void 0),n.__decorators__.push(function(e){return r(e,t,o)})}}var d=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function r(e,n){void 0===n&&(n={}),n.name=n.name||e._componentTag||e.name;var r=e.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(-1<d.indexOf(t))n[t]=r[t];else{var o=Object.getOwnPropertyDescriptor(r,t);void 0!==o.value?"function"==typeof o.value?(n.methods||(n.methods={}))[t]=o.value:(n.mixins||(n.mixins=[])).push({data:function(){var e;return(e={})[t]=o.value,e}}):(o.get||o.set)&&((n.computed||(n.computed={}))[t]={get:o.get,set:o.set})}}),(n.mixins||(n.mixins=[])).push({data:function(){return function(n,e){var t=e.prototype._init;e.prototype._init=function(){var e=this,t=Object.getOwnPropertyNames(n);if(n.$options.props)for(var o in n.$options.props)n.hasOwnProperty(o)||t.push(o);t.forEach(function(t){"_"!==t.charAt(0)&&Object.defineProperty(e,t,{get:function(){return n[t]},set:function(e){n[t]=e},configurable:!0})})};var o=new e;e.prototype._init=t;var r={};return Object.keys(o).forEach(function(e){void 0!==o[e]&&(r[e]=o[e])}),r}(this,e)}});var t=e.__decorators__;t&&(t.forEach(function(e){return e(n)}),delete e.__decorators__);var o=Object.getPrototypeOf(e.prototype),i=o instanceof l.a?o.constructor:l.a,a=i.extend(n);return function(r,i,a){Object.getOwnPropertyNames(i).forEach(function(e){if(!f[e]){var t=Object.getOwnPropertyDescriptor(r,e);if(!t||t.configurable){var o=Object.getOwnPropertyDescriptor(i,e);if(!s){if("cid"===e)return;var n=Object.getOwnPropertyDescriptor(a,e);if(!function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(o.value)&&n&&n.value===o.value)return}0,Object.defineProperty(r,e,o)}}})}(a,e,i),c&&function(t,o){u(t,o),Object.getOwnPropertyNames(o.prototype).forEach(function(e){u(t.prototype,o.prototype,e)}),Object.getOwnPropertyNames(o).forEach(function(e){u(t,o,e)})}(a,e),a}var f={prototype:!0,arguments:!0,callee:!0,caller:!0};function i(t){return"function"==typeof t?r(t):function(e){return r(e,t)}}i.registerHooks=function(e){d.push.apply(d,e)};var p=i;o.d(t,"b",function(){return v}),o.d(t,"c",function(){return y}),o.d(t,"a",function(){return p});var b="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function h(e,t,o){b&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,o)))}function v(o){return void 0===o&&(o={}),function(e,t){h(o,e,t),a(function(e,t){(e.props||(e.props={}))[t]=o})(e,t)}}function y(n,e){void 0===e&&(e={});var t=e.deep,r=void 0!==t&&t,o=e.immediate,i=void 0!==o&&o;return a(function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var o=e.watch;"object"!=typeof o[n]||Array.isArray(o[n])?void 0===o[n]&&(o[n]=[]):o[n]=[o[n]],o[n].push({handler:t,deep:r,immediate:i})})}},1:function(e,t){e.exports=function(o,n,e,t,r){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(o,n,e)||e},i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(o,n,i),i=null),i}},2:function(e,t){e.exports=function(e,t,o,n){o&&Object.defineProperty(e,t,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(n):void 0})}},28:function(e,t,o){},3:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4:function(e,t){e.exports=o},5:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}},57:function(e,t,o){"use strict";o.r(t);o(28);var n,r,i,a,l,c,u,s,d,f,p,b,h,v,y,g,m,w,O,j,x,_,T,z,k,B,P,R,C,L,E,M=o(2),H=o.n(M),$=o(3),A=o.n($),D=o(5),N=o.n(D),S=o(1),V=o.n(S),q=(o(8),o(0)),I=o(9),W=o(7),K=(n=Object(q.b)({}),r=Object(q.b)({default:!1,type:Boolean}),i=Object(q.b)({default:!1,type:Boolean}),a=Object(q.b)({default:!1,type:Boolean}),l=Object(q.b)({default:!1,type:Boolean}),c=Object(q.b)({default:!1,type:Boolean}),u=Object(q.b)({default:!1,type:Boolean}),s=Object(q.b)({default:!1,type:Boolean}),d=Object(q.b)({default:!1,type:Boolean}),f=Object(q.b)({default:!1,type:Boolean}),p=Object(q.b)({default:!1,type:Boolean}),b=Object(q.b)({default:!1,type:Boolean}),h=Object(q.b)({default:!1,type:Boolean}),v=Object(q.b)({default:null,type:String}),y=Object(q.c)("value"),Object(q.a)((m=function(r){function e(){for(var e,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(e=r.call.apply(r,[this].concat(o))||this).activeTooltip=!1,e.isHoverTooltip=!1,H()(e,"value",w,A()(e)),H()(e,"loading",O,A()(e)),H()(e,"bottom",j,A()(e)),H()(e,"left",x,A()(e)),H()(e,"right",_,A()(e)),H()(e,"notHover",T,A()(e)),H()(e,"shadow",z,A()(e)),H()(e,"interactivity",k,A()(e)),H()(e,"notArrow",B,A()(e)),H()(e,"square",P,A()(e)),H()(e,"circle",R,A()(e)),H()(e,"border",C,A()(e)),H()(e,"borderThick",L,A()(e)),H()(e,"delay",E,A()(e)),e}N()(e,r);var t=e.prototype;return t.insertTooltip=function(){var e=this.$refs.tooltip;Object(W.b)(e,document.body);var t="top";this.bottom?t="bottom":this.left?t="left":this.right&&(t="right"),Object(W.e)(e,this.$refs.content,t)},t.handlerMouseEnter=function(){var e=this;this.delay?setTimeout(function(){e.activeTooltip=!0,e.$nextTick(function(){e.insertTooltip()})},Number(this.delay)):(this.activeTooltip=!0,this.$nextTick(function(){e.insertTooltip()}))},t.removeTooltip=function(){this.activeTooltip=!1,this.$emit("input",!1)},t.handleResize=function(){var e=this,t="top";this.bottom?t="bottom":this.left?t="left":this.right&&(t="right");var o=this.$refs.tooltip;if(o){this.$nextTick(function(){Object(W.e)(o,e.$refs.content,t)});for(var n=0;n<300;n++)setTimeout(function(){Object(W.e)(o,e.$refs.content,t)},n)}},t.handleMouseDownNotHover=function(e){e.target.closest(".vs-tooltip")||e.target.closest(".vs-tooltip-content")||this.removeTooltip()},t.handleWatchValue=function(e){var t=this;(this.activeTooltip=e)&&this.$nextTick(function(){t.insertTooltip()})},t.mounted=function(){window.addEventListener("popstate",function(e){document.querySelectorAll(".vs-tooltip").forEach(function(e){e.remove()})}),window.addEventListener("resize",this.handleResize),this.notHover&&window.addEventListener("mousedown",this.handleMouseDownNotHover),window.addEventListener("touchstart",this.handleMouseDownNotHover)},t.beforeDestroy=function(){this.activeTooltip=!1,window.removeEventListener("resize",this.handleResize),window.removeEventListener("mousedown",this.handleMouseDownNotHover)},t.render=function(e){var t,o,n,r,i,a,l=this,c=e("div",{staticClass:"vs-tooltip__loading"}),u=e("div",{staticClass:"vs-tooltip",ref:"tooltip",style:(t={},t["--vs-color"]=this.color?this.getColor:"",t),class:[{top:!this.bottom&&!this.left&&!this.right,bottom:this.bottom,left:this.left,right:this.right,shadow:this.shadow,notArrow:this.notArrow,square:this.square,circle:this.circle,border:this.border,borderThick:this.borderThick,loading:this.loading},(o={},o["vs-component--primary"]=!!this.primary,o),(n={},n["vs-component--danger"]=!!this.danger,n),(r={},r["vs-component--warn"]=!!this.warn,r),(i={},i["vs-component--success"]=!!this.success,i),(a={},a["vs-component--dark"]=!!this.dark,a)],on:{mouseenter:function(){l.interactivity&&(l.isHoverTooltip=!0,l.handlerMouseEnter())},mouseleave:function(){l.isHoverTooltip=!1,l.removeTooltip()}}},[this.$slots.tooltip,this.loading&&c]);return e("div",{staticClass:"vs-tooltip-content",ref:"content",on:{mouseenter:function(){l.notHover||l.handlerMouseEnter()},mouseleave:function(){l.notHover||(l.interactivity?setTimeout(function(){l.isHoverTooltip||l.removeTooltip()},250):l.removeTooltip())}}},[e("transition",{props:{name:"vs-tooltip"}},[this.activeTooltip&&u]),this.$slots.default])},e}(I.a),w=V()(m.prototype,"value",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=V()(m.prototype,"loading",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=V()(m.prototype,"bottom",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=V()(m.prototype,"left",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=V()(m.prototype,"right",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=V()(m.prototype,"notHover",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=V()(m.prototype,"shadow",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=V()(m.prototype,"interactivity",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=V()(m.prototype,"notArrow",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=V()(m.prototype,"square",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=V()(m.prototype,"circle",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=V()(m.prototype,"border",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=V()(m.prototype,"borderThick",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=V()(m.prototype,"delay",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V()(m.prototype,"handleWatchValue",[y],Object.getOwnPropertyDescriptor(m.prototype,"handleWatchValue"),m.prototype),g=m))||g);K.install=function(e){e.component("vs-tooltip",K)},"undefined"!=typeof window&&window.Vue&&K.install(window.Vue);t.default=K},6:function(e,t){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},7:function(e,t,o){"use strict";o.d(t,"c",function(){return n}),o.d(t,"a",function(){return r}),o.d(t,"b",function(){return i}),o.d(t,"d",function(){return a}),o.d(t,"e",function(){return l});function s(e){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}function d(e,t,o){o?"#comment"!==o.nodeName&&o.style.setProperty("--vs-"+e,t):document.documentElement.style.setProperty("--vs-"+e,t)}var n=function(e,t,o,n){var r,i=/^(rgb|rgba)/.test(t),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),l=/^(#)/.test(t);if("dark"==t&&o&&n&&o.classList.add("vs-component-dark"),i){var c=t.replace(/[rgba()]/g,"").split(",");r=c[0]+","+c[1]+","+c[2],d(e,r,o),n&&o.classList.add("vs-change-color")}else if(l){var u=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,o,n){return t+t+o+o+n+n});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(t);r=u.r+","+u.g+","+u.b,d(e,r,o),n&&o.classList.add("vs-change-color")}else if(s(t)){r=window.getComputedStyle(document.body).getPropertyValue("--vs-"+t),d(e,r,o),n&&o.classList.add("vs-change-color")}else a&&(d(e,t,o),n&&o.classList.add("vs-change-color"))},r=function(e){var t,o=/^(rgb|rgba)/.test(e),n=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),r=/^(#)/.test(e);if(o){var i=e.replace(/[rgba()]/g,"").split(",");t=i[0]+","+i[1]+","+i[2]}else if(r){var a=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,o,n){return t+t+o+o+n+n});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e);t=a.r+","+a.g+","+a.b}else if(s(e)){t=window.getComputedStyle(document.body).getPropertyValue("--vs-"+e)}else n&&(t=e);return t},i=function(e,t){var o=t||document.body;o.insertBefore(e,o.lastChild)},a=function(e,t){var o=t.getBoundingClientRect(),n=o.x,r=o.y,i=o.width,a=o.height,l=e.style,c=window.pageYOffset,u=e.clientHeight+o.y+c;c+window.innerHeight-u<30?(l.top=r+c-e.clientHeight-4+"px",l.left=n+"px",l.width=i+"px",e.classList.add("top"),t.classList.add("top")):(l.top=r+c+a-4+"px",l.left=n+"px",l.width=i+"px",e.classList.remove("top"),t.classList.remove("top"))},l=function(e,t,o){var n=t.getBoundingClientRect(),r=n.x,i=n.y,a=n.width,l=n.height,c=e.style,u=window.pageYOffset,s=e.clientHeight+n.y+u,d=u+window.innerHeight;if(r+a+10+e.getBoundingClientRect().width>window.innerWidth&&"right"==o&&(o="left",e.classList.remove("right"),e.classList.add("left")),r-10<e.getBoundingClientRect().width&&"left"==o&&(o="top",e.classList.remove("left"),e.classList.add("top")),d-s<30||"top"==o){c.top=i+u-e.clientHeight-8+"px";var f=r+(a-e.getBoundingClientRect().width)/2;f+e.getBoundingClientRect().width<window.innerWidth?0<f?c.left=f+"px":(c.left="10px",e.classList.add("notArrow")):(c.left="auto",c.right="10px",e.classList.add("notArrow"))}else if("bottom"==o){c.top=i+u+l+8+"px";var p=r+(a-e.getBoundingClientRect().width)/2;p+e.getBoundingClientRect().width<window.innerWidth?0<p?c.left=p+"px":(c.left="10px",e.classList.add("notArrow")):(c.left="auto",c.right="10px",e.classList.add("notArrow"))}else"left"==o?(c.top=i+u+(l-e.getBoundingClientRect().height)/2+"px",c.left=r-e.getBoundingClientRect().width-8+"px"):"right"==o&&(c.top=i+u+(l-e.getBoundingClientRect().height)/2+"px",c.left=r+a+8+"px")}},8:function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(e,t,o){"use strict";o.d(t,"a",function(){return H});var n,r,i,a,l,c,u,s,d,f,p,b,h,v,y,g,m,w,O=o(2),j=o.n(O),x=o(6),_=o.n(x),T=o(3),z=o.n(T),k=o(5),B=o.n(k),P=o(1),R=o.n(P),C=(o(8),o(4)),L=o.n(C),E=o(0),M=o(7),H=(n=Object(E.b)({type:String,default:null}),r=Object(E.b)({type:Boolean,default:!1}),i=Object(E.b)({type:Boolean,default:!1}),a=Object(E.b)({type:Boolean,default:!1}),l=Object(E.b)({type:Boolean,default:!1}),c=Object(E.b)({type:Boolean,default:!1}),u=Object(E.b)({type:Boolean,default:!1}),Object(E.a)((w=m=function(r){function e(){for(var e,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(e=r.call.apply(r,[this].concat(o))||this).componentColor=null,e.getColor=null,j()(e,"color",f,z()(e)),j()(e,"danger",p,z()(e)),j()(e,"success",b,z()(e)),j()(e,"warn",h,z()(e)),j()(e,"dark",v,z()(e)),j()(e,"primary",y,z()(e)),j()(e,"active",g,z()(e)),e}return B()(e,r),e.prototype.mounted=function(){this.getColor=Object(M.a)(this.color)},_()(e,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}},{key:"isColor",get:function(){return!!(this.color||this.primary||this.success||this.warn||this.danger||this.dark)}}]),e}(L.a),m.install=void 0,m.use=void 0,d=w,f=R()(d.prototype,"color",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=R()(d.prototype,"danger",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=R()(d.prototype,"success",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=R()(d.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=R()(d.prototype,"dark",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=R()(d.prototype,"primary",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=R()(d.prototype,"active",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=d))||s)}},r.c=i,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=57)).default;function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var n,i});