(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["mdbView"]=t():e["mdbView"]=t()})("undefined"!==typeof self?self:this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="fb15")}({f6fd:function(e,t){(function(e){var t="currentScript",r=e.getElementsByTagName("script");t in e||Object.defineProperty(e,t,{get:function(){try{throw new Error}catch(n){var e,t=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(n.stack)||[!1])[1];for(e in r)if(r[e].src==t||"interactive"==r[e].readyState)return r[e];return null}}})})(document)},fb15:function(e,t,r){"use strict";var n;(r.r(t),"undefined"!==typeof window)&&(r("f6fd"),(n=window.document.currentScript)&&(n=n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(r.p=n[1]));var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(e.tag,{tag:"component",class:e.className},[e.src&&!e.video?r("img",{class:e.imgClass,attrs:{src:e.src,alt:e.alt}}):e._e(),e.src&&e.video?r("video",{staticClass:"video-fluid",attrs:{autoplay:e.autoplay?"true":null,loop:e.loop?"true":null}},[r("source",{attrs:{src:e.src,type:e.videoType}})]):e._e(),e._t("default")],2)},i=[],a={props:{tag:{type:String,default:"div"},src:{type:String},alt:{type:String},hover:{type:Boolean,default:!1},zoom:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},imageClass:{type:String},wrapperClass:{type:String},gradient:{type:String},circle:{type:Boolean},cascade:{type:Boolean},video:{type:Boolean,default:!1},videoType:{type:String,default:"video/mp4"},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!0}},computed:{className:function(){return["view",this.hover?"overlay":"",this.zoom?"zoom":"",this.wrapperClass?this.wrapperClass:"",this.rounded?"rounded":"",this.circle?"rounded-circle":"",this.gradient?"gradient-card-header "+this.gradient+"-gradient":"",this.cascade&&"view-cascade"]},imgClass:function(){return[this.zoom?"w-100":"","img-fluid",this.imageClass?this.imageClass:"",this.shadow?"hoverable":""]}}},s=a,l=s;function u(e,t,r,n,o,i,a,s){var l,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(e,t){return l.call(t),d(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:u}}var d=u(l,o,i,!1,null,null,null),c=d.exports;r.d(t,"mdbView",(function(){return a}));t["default"]=c}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map