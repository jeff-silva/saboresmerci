(window.webpackJsonp=window.webpackJsonp||[]).push([[78,95],{560:function(t,e,n){"use strict";n.r(e);var r=n(578),o={components:{draggable:n.n(r).a},props:{node:Object,uuid:Function,singular:{default:"Utilidade"},plural:{default:"Utilidades"},field:{default:"utilidades"},itemFields:{default:function(){return{title:""}}}},methods:{itemDefault:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({id:this.uuid()},this.itemFields,t)},itemAdd:function(){var t=this.itemDefault();this.node[this.field].unshift(t)},itemRemove:function(t){var e=this.node[this.field].indexOf(t);this.node[this.field].splice(e,1)},draggableEnd:function(){}}},l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"max-width":"600px"}},[n("button",{staticClass:"btn btn-primary btn-block mb-2",attrs:{type:"button"},on:{click:function(e){return t.itemAdd()}}},[n("i",{staticClass:"fas fa-plus"}),t._v(" Adicionar "+t._s(t.singular)+"\r\n    ")]),t._v(" "),0==t.node[t.field].length?n("div",{staticClass:"bg-white p-2 text-center"},[t._v("\r\n        Nenhum item de "+t._s(t.singular)+"\r\n    ")]):t._e(),t._v(" "),n("draggable",t._b({on:{end:function(e){return t.draggableEnd()}},model:{value:t.node[t.field],callback:function(e){t.$set(t.node,t.field,e)},expression:"node[field]"}},"draggable",{animation:200,handle:"._handle"},!1),t._l(t.node[t.field],(function(i){return n("div",{staticClass:"d-flex align-items-center bg-white mt-1 p-1"},[n("div",{staticClass:"px-2 _handle"},[n("i",{staticClass:"fas fa-bars"})]),t._v(" "),n("div",{staticClass:"flex-grow-1"},[t._t("fields",[n("input",{directives:[{name:"model",rawName:"v-model",value:i.title,expression:"i.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:i.title},on:{input:function(e){e.target.composing||t.$set(i,"title",e.target.value)}}})],{item:i})],2),t._v(" "),n("div",{staticClass:"pl-2"},[n("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(e){return t.itemRemove(i)}}},[n("i",{staticClass:"fas fa-times"})])])])})),0)],1)}),[],!1,null,null,null);e.default=component.exports},588:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=9)}([function(t,e,n){"use strict";e.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(t,e,n){"use strict";var r=n(2),i=n(5),u=n(0);e.a=function(t,e){if(e.value){var o=n.i(i.a)(u.a,e.value);if("INPUT"!==t.tagName.toLocaleUpperCase()){var a=t.getElementsByTagName("input");1!==a.length||(t=a[0])}t.oninput=function(){var e=t.value.length-t.selectionEnd;t.value=n.i(r.a)(t.value,o),e=Math.max(e,o.suffix.length),e=t.value.length-e,e=Math.max(e,o.prefix.length+1),n.i(r.b)(t,e),t.dispatchEvent(n.i(r.c)("change"))},t.onfocus=function(){n.i(r.b)(t,t.value.length-o.suffix.length)},t.oninput(),t.dispatchEvent(n.i(r.c)("input"))}}},function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a;"number"==typeof t&&(t=t.toFixed(o(e.precision)));var n=t.indexOf("-")>=0?"-":"",r=u(t),i=l(r,e.precision),a=f(i).split("."),p=a[0],d=a[1];return p=c(p,e.thousands),e.prefix+n+s(p,d,e.decimal)+e.suffix}function i(t,e){var n=t.indexOf("-")>=0?-1:1,i=l(u(t),e);return parseFloat(i)*n}function u(t){return f(t).replace(/\D+/g,"")||"0"}function o(t){return function(t,e,n){return Math.max(t,Math.min(e,n))}(0,t,20)}function l(t,e){var n=Math.pow(10,e);return(parseFloat(t)/n).toFixed(o(e))}function c(t,e){return t.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+e)}function s(t,e,n){return e?t+n+e:t}function f(t){return t?t.toString():""}function p(t,e){var n=function(){t.setSelectionRange(e,e)};t===document.activeElement&&(n(),setTimeout(n,1))}function d(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var m=n(0);n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return d}))},function(t,e,n){"use strict";function r(t,e){e&&Object.keys(e).map((function(t){a.a[t]=e[t]})),t.directive("money",o.a),t.component("money",u.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),u=n.n(i),o=n(1),a=n(0);n.d(e,"Money",(function(){return u.a})),n.d(e,"VMoney",(function(){return o.a})),n.d(e,"options",(function(){return a.a})),n.d(e,"VERSION",(function(){return l}));var l="0.8.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(0),u=n(2);e.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(t,e){var r=n.i(u.a)(t,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(t){this.$emit("input",this.masked?t.target.value:n.i(u.d)(t.target.value,this.precision))}}}},function(t,e,n){"use strict";e.a=function(t,e){return t=t||{},e=e||{},Object.keys(t).concat(Object.keys(e)).reduce((function(n,r){return n[r]=void 0===e[r]?t[r]:e[r],n}),{})}},function(t,e,n){var r=n(7)(n(4),n(8),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var i,u=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,u=t.default);var a="function"==typeof u?u.options:u;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var l=a.computed||(a.computed={});Object.keys(r).forEach((function(t){var e=r[t];l[t]=function(){return e}}))}return{esModule:i,exports:u,options:a}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:t.precision,decimal:t.decimal,thousands:t.thousands,prefix:t.prefix,suffix:t.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:t.formattedValue},on:{change:t.change}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])},601:function(t,e,n){"use strict";n.r(e);var r={name:"ui-money",components:{Money:n(588).Money},props:{value:{default:0}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{props:Object.assign({},this.$props)}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("money",t._b({staticClass:"form-control",nativeOn:{change:function(e){return t.$emit("input",t.props.value)}},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}},"money",{decimal:",",thousands:".",prefix:"R$ ",precision:2},!1))}),[],!1,null,null,null);e.default=component.exports},763:function(t,e,n){"use strict";n.r(e);var r={components:{SubComponent:n(560).default},props:{node:Object,uuid:Function,singular:{default:"Custo"},plural:{default:"Custos"},field:{default:"custos"},itemFields:{default:function(){return{title:"",value:0}}}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sub-component",t._b({scopedSlots:t._u([{key:"fields",fn:function(e){var r=e.item;return[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"flex-grow-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:r.title,expression:"item.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:r.title},on:{input:function(e){e.target.composing||t.$set(r,"title",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex-grow-1"},[n("ui-money",{model:{value:r.value,callback:function(e){t.$set(r,"value",e)},expression:"item.value"}})],1)])]}}])},"sub-component",t.$props,!1))],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiMoney:n(601).default})}}]);