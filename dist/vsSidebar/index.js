/*!
  * Vuesax v4.0.1-alpha-e.26 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira, edited by ElBuenAnvita
  * Released under the MIT License.
  * Donate to Luis Daniel Rovira: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.vsSidebar=t(require("vue")):e.vsSidebar=t(e.Vue)}("undefined"!=typeof self?self:this,function(n){return(i={},o.m=r={0:function(e,t,n){"use strict";var r=n(4),l=n.n(r),c="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function u(n,r,o){(o?Reflect.getOwnMetadataKeys(r,o):Reflect.getOwnMetadataKeys(r)).forEach(function(e){var t=o?Reflect.getOwnMetadata(e,r,o):Reflect.getOwnMetadata(e,r);o?Reflect.defineMetadata(e,t,n,o):Reflect.defineMetadata(e,t,n)})}var s={__proto__:[]}instanceof Array;function a(o){return function(e,t,n){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof n&&(n=void 0),r.__decorators__.push(function(e){return o(e,t,n)})}}var d=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function o(e,r){void 0===r&&(r={}),r.name=r.name||e._componentTag||e.name;var o=e.prototype;Object.getOwnPropertyNames(o).forEach(function(t){if("constructor"!==t)if(-1<d.indexOf(t))r[t]=o[t];else{var n=Object.getOwnPropertyDescriptor(o,t);void 0!==n.value?"function"==typeof n.value?(r.methods||(r.methods={}))[t]=n.value:(r.mixins||(r.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((r.computed||(r.computed={}))[t]={get:n.get,set:n.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,e){var t=e.prototype._init;e.prototype._init=function(){var e=this,t=Object.getOwnPropertyNames(r);if(r.$options.props)for(var n in r.$options.props)r.hasOwnProperty(n)||t.push(n);t.forEach(function(t){"_"!==t.charAt(0)&&Object.defineProperty(e,t,{get:function(){return r[t]},set:function(e){r[t]=e},configurable:!0})})};var n=new e;e.prototype._init=t;var o={};return Object.keys(n).forEach(function(e){void 0!==n[e]&&(o[e]=n[e])}),o}(this,e)}});var t=e.__decorators__;t&&(t.forEach(function(e){return e(r)}),delete e.__decorators__);var n=Object.getPrototypeOf(e.prototype),i=n instanceof l.a?n.constructor:l.a,a=i.extend(r);return function(o,i,a){Object.getOwnPropertyNames(i).forEach(function(e){if(!p[e]){var t=Object.getOwnPropertyDescriptor(o,e);if(!t||t.configurable){var n=Object.getOwnPropertyDescriptor(i,e);if(!s){if("cid"===e)return;var r=Object.getOwnPropertyDescriptor(a,e);if(!function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(n.value)&&r&&r.value===n.value)return}0,Object.defineProperty(o,e,n)}}})}(a,e,i),c&&function(t,n){u(t,n),Object.getOwnPropertyNames(n.prototype).forEach(function(e){u(t.prototype,n.prototype,e)}),Object.getOwnPropertyNames(n).forEach(function(e){u(t,n,e)})}(a,e),a}var p={prototype:!0,arguments:!0,callee:!0,caller:!0};function i(t){return"function"==typeof t?o(t):function(e){return o(e,t)}}i.registerHooks=function(e){d.push.apply(d,e)};var f=i;n.d(t,"b",function(){return y}),n.d(t,"c",function(){return g}),n.d(t,"a",function(){return f});var b="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function h(e,t,n){b&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,n)))}function y(n){return void 0===n&&(n={}),function(e,t){h(n,e,t),a(function(e,t){(e.props||(e.props={}))[t]=n})(e,t)}}function g(r,e){void 0===e&&(e={});var t=e.deep,o=void 0!==t&&t,n=e.immediate,i=void 0!==n&&n;return a(function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var n=e.watch;"object"!=typeof n[r]||Array.isArray(n[r])?void 0===n[r]&&(n[r]=[]):n[r]=[n[r]],n[r].push({handler:t,deep:o,immediate:i})})}},1:function(e,t){e.exports=function(n,r,e,t,o){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(n,r,i),i=null),i}},2:function(e,t){e.exports=function(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},3:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4:function(e,t){e.exports=n},40:function(e,t,n){},5:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}},6:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},66:function(e,t,n){"use strict";n.r(t);n(40);var r,o,i,a,l,c,u,s,d,p,f,b,h,y,g,v,w,m,O,j,x,_,k,C,B,P,R,z,L,$,E=n(2),S=n.n(E),I=n(6),A=n.n(I),M=n(3),W=n.n(M),D=n(5),H=n.n(D),q=n(1),N=n.n(q),V=(n(8),n(0)),T=n(9),K=n(7),Y=(r=Object(V.b)({}),o=Object(V.b)({default:!1,type:Boolean}),i=Object(V.b)({default:!1,type:Boolean}),a=Object(V.b)({default:!1,type:Boolean}),l=Object(V.b)({default:!1,type:Boolean}),c=Object(V.b)({default:!1,type:Boolean}),u=Object(V.b)({default:!1,type:Boolean}),s=Object(V.b)({default:!1,type:Boolean}),d=Object(V.b)({default:!1,type:Boolean}),p=Object(V.b)({default:!1,type:Boolean}),f=Object(V.b)({default:!1,type:Boolean}),b=Object(V.b)({default:"background",type:String}),h=Object(V.c)("open"),y=Object(V.c)("reduce"),g=Object(V.c)("reduceInternal"),v=Object(V.c)("background"),Object(V.a)((m=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=o.call.apply(o,[this].concat(n))||this,S()(e,"value",O,W()(e)),S()(e,"reduce",j,W()(e)),S()(e,"hoverExpand",x,W()(e)),S()(e,"open",_,W()(e)),S()(e,"notLineActive",k,W()(e)),S()(e,"square",C,W()(e)),S()(e,"textWhite",B,W()(e)),S()(e,"notShadow",P,W()(e)),S()(e,"relative",R,W()(e)),S()(e,"absolute",z,W()(e)),S()(e,"right",L,W()(e)),S()(e,"background",$,W()(e)),e.staticWidth=260,e.forceExpand=!1,e.reduceInternal=!1,e}H()(e,o);var t=e.prototype;return t.handleOpen=function(e){var t=this;e?setTimeout(function(){window.addEventListener("click",t.clickCloseSidebar)},200):window.removeEventListener("click",this.clickCloseSidebar)},t.handleReduce=function(e){this.reduceInternal=e;var t=this.$el;t.style.width=e?"50px":this.staticWidth+"px"},t.handleReduceInternal=function(e){var t=this.$el;t.style.width=e?"50px":this.staticWidth+"px"},t.handleBackground=function(){Object(K.c)("background",this.background,this.$el,!0)},t.clickCloseSidebar=function(e){e.target.closest(".vs-sidebar-content")||this.$emit("update:open",!1)},t.handleClickItem=function(e){this.$emit("input",e)},t.mounted=function(){this.staticWidth=this.$el.offsetWidth,this.reduceInternal=this.reduce,"background"!==this.background&&Object(K.c)("background",this.background,this.$el,!0),this.textWhite&&Object(K.c)("text","#fff",this.$el,!0)},t.render=function(e){var t,n,r,o,i,a,l,c=this,u=e("div",{staticClass:"vs-sidebar__logo"},[this.$slots.logo]),s=e("div",{staticClass:"vs-sidebar__header"},[this.$slots.header]),d=e("div",{staticClass:"vs-sidebar__footer"},[this.$slots.footer]),p=e("div",{staticClass:"vs-sidebar"},[this.$slots.default]);return e("div",{staticClass:"vs-sidebar-content",style:(t={},t["--vs-color"]=this.color?this.getColor:"",t),class:[{reduce:this.reduceInternal,open:this.open,notLineActive:this.notLineActive,square:this.square,notShadow:this.notShadow,textWhite:this.textWhite,relative:this.relative,absolute:this.absolute,right:this.right},(n={},n["vs-component--primary"]=!!this.primary,n),(r={},r["vs-component--danger"]=!!this.danger,r),(o={},o["vs-component--warn"]=!!this.warn,o),(i={},i["vs-component--success"]=!!this.success,i),(a={},a["vs-component--dark"]=!!this.dark,a),(l={},l["vs-component--is-color"]=!!this.isColor,l)],on:{mouseenter:function(){c.hoverExpand&&(c.reduceInternal=!1)},mouseleave:function(){c.hoverExpand&&(c.reduceInternal=!0)}}},[this.$slots.logo&&u,this.$slots.header&&s,p,this.$slots.footer&&d])},A()(e,[{key:"getValue",get:function(){return this.value}}]),e}(T.a),O=N()(m.prototype,"value",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=N()(m.prototype,"reduce",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=N()(m.prototype,"hoverExpand",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=N()(m.prototype,"open",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=N()(m.prototype,"notLineActive",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=N()(m.prototype,"square",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=N()(m.prototype,"textWhite",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=N()(m.prototype,"notShadow",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=N()(m.prototype,"relative",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=N()(m.prototype,"absolute",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=N()(m.prototype,"right",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=N()(m.prototype,"background",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N()(m.prototype,"handleOpen",[h],Object.getOwnPropertyDescriptor(m.prototype,"handleOpen"),m.prototype),N()(m.prototype,"handleReduce",[y],Object.getOwnPropertyDescriptor(m.prototype,"handleReduce"),m.prototype),N()(m.prototype,"handleReduceInternal",[g],Object.getOwnPropertyDescriptor(m.prototype,"handleReduceInternal"),m.prototype),N()(m.prototype,"handleBackground",[v],Object.getOwnPropertyDescriptor(m.prototype,"handleBackground"),m.prototype),w=m))||w);Y.install=function(e){e.component("vs-sidebar",Y)},"undefined"!=typeof window&&window.Vue&&Y.install(window.Vue);t.default=Y},7:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return l});function s(e){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}function d(e,t,n){n?"#comment"!==n.nodeName&&n.style.setProperty("--vs-"+e,t):document.documentElement.style.setProperty("--vs-"+e,t)}var r=function(e,t,n,r){var o,i=/^(rgb|rgba)/.test(t),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),l=/^(#)/.test(t);if("dark"==t&&n&&r&&n.classList.add("vs-component-dark"),i){var c=t.replace(/[rgba()]/g,"").split(",");o=c[0]+","+c[1]+","+c[2],d(e,o,n),r&&n.classList.add("vs-change-color")}else if(l){var u=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(t);o=u.r+","+u.g+","+u.b,d(e,o,n),r&&n.classList.add("vs-change-color")}else if(s(t)){o=window.getComputedStyle(document.body).getPropertyValue("--vs-"+t),d(e,o,n),r&&n.classList.add("vs-change-color")}else a&&(d(e,t,n),r&&n.classList.add("vs-change-color"))},o=function(e){var t,n=/^(rgb|rgba)/.test(e),r=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),o=/^(#)/.test(e);if(n){var i=e.replace(/[rgba()]/g,"").split(",");t=i[0]+","+i[1]+","+i[2]}else if(o){var a=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e);t=a.r+","+a.g+","+a.b}else if(s(e)){t=window.getComputedStyle(document.body).getPropertyValue("--vs-"+e)}else r&&(t=e);return t},i=function(e,t){var n=t||document.body;n.insertBefore(e,n.lastChild)},a=function(e,t){var n=t.getBoundingClientRect(),r=n.x,o=n.y,i=n.width,a=n.height,l=e.style,c=window.pageYOffset,u=e.clientHeight+n.y+c;c+window.innerHeight-u<30?(l.top=o+c-e.clientHeight-4+"px",l.left=r+"px",l.width=i+"px",e.classList.add("top"),t.classList.add("top")):(l.top=o+c+a-4+"px",l.left=r+"px",l.width=i+"px",e.classList.remove("top"),t.classList.remove("top"))},l=function(e,t,n){var r=t.getBoundingClientRect(),o=r.x,i=r.y,a=r.width,l=r.height,c=e.style,u=window.pageYOffset,s=e.clientHeight+r.y+u,d=u+window.innerHeight;if(o+a+10+e.getBoundingClientRect().width>window.innerWidth&&"right"==n&&(n="left",e.classList.remove("right"),e.classList.add("left")),o-10<e.getBoundingClientRect().width&&"left"==n&&(n="top",e.classList.remove("left"),e.classList.add("top")),d-s<30||"top"==n){c.top=i+u-e.clientHeight-8+"px";var p=o+(a-e.getBoundingClientRect().width)/2;p+e.getBoundingClientRect().width<window.innerWidth?0<p?c.left=p+"px":(c.left="10px",e.classList.add("notArrow")):(c.left="auto",c.right="10px",e.classList.add("notArrow"))}else if("bottom"==n){c.top=i+u+l+8+"px";var f=o+(a-e.getBoundingClientRect().width)/2;f+e.getBoundingClientRect().width<window.innerWidth?0<f?c.left=f+"px":(c.left="10px",e.classList.add("notArrow")):(c.left="auto",c.right="10px",e.classList.add("notArrow"))}else"left"==n?(c.top=i+u+(l-e.getBoundingClientRect().height)/2+"px",c.left=o-e.getBoundingClientRect().width-8+"px"):"right"==n&&(c.top=i+u+(l-e.getBoundingClientRect().height)/2+"px",c.left=o+a+8+"px")}},8:function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(e,t,n){"use strict";n.d(t,"a",function(){return I});var r,o,i,a,l,c,u,s,d,p,f,b,h,y,g,v,w,m,O=n(2),j=n.n(O),x=n(6),_=n.n(x),k=n(3),C=n.n(k),B=n(5),P=n.n(B),R=n(1),z=n.n(R),L=(n(8),n(4)),$=n.n(L),E=n(0),S=n(7),I=(r=Object(E.b)({type:String,default:null}),o=Object(E.b)({type:Boolean,default:!1}),i=Object(E.b)({type:Boolean,default:!1}),a=Object(E.b)({type:Boolean,default:!1}),l=Object(E.b)({type:Boolean,default:!1}),c=Object(E.b)({type:Boolean,default:!1}),u=Object(E.b)({type:Boolean,default:!1}),Object(E.a)((m=w=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))||this).componentColor=null,e.getColor=null,j()(e,"color",p,C()(e)),j()(e,"danger",f,C()(e)),j()(e,"success",b,C()(e)),j()(e,"warn",h,C()(e)),j()(e,"dark",y,C()(e)),j()(e,"primary",g,C()(e)),j()(e,"active",v,C()(e)),e}return P()(e,o),e.prototype.mounted=function(){this.getColor=Object(S.a)(this.color)},_()(e,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}},{key:"isColor",get:function(){return!!(this.color||this.primary||this.success||this.warn||this.danger||this.dark)}}]),e}($.a),w.install=void 0,w.use=void 0,d=m,p=z()(d.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=z()(d.prototype,"danger",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=z()(d.prototype,"success",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=z()(d.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=z()(d.prototype,"dark",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=z()(d.prototype,"primary",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=z()(d.prototype,"active",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=d))||s)}},o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=66)).default;function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,i});