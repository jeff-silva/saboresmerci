(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{400:function(t,n,e){var content=e(460);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("4fb14fff",content,!0,{sourceMap:!1})},459:function(t,n,e){"use strict";var o=e(400);e.n(o).a},460:function(t,n,e){(n=e(38)(!1)).push([t.i,".ui-carousel[data-v-267b3cd4]{position:relative}.ui-carousel-slider[data-v-267b3cd4]{position:relative;z-index:1}.ui-carousel-arrows[data-v-267b3cd4]{position:absolute;top:0;height:100%;z-index:2;background:none;border:none;outline:0!important;color:#ccc;font-size:25px;padding:0}.ui-carousel-arrows-prev[data-v-267b3cd4]{left:0}.ui-carousel-arrows-next[data-v-267b3cd4]{right:0}.ui-carousel-navigators[data-v-267b3cd4]{text-align:center}.ui-carousel-navigators-each[data-v-267b3cd4]{display:inline-block;padding:7px;background:hsla(0,0%,100%,.6);border-radius:50%;margin:0 5px}.ui-carousel-navigators-each-active[data-v-267b3cd4]{background:#fff}",""]),t.exports=n},482:function(t,n,e){"use strict";e.r(n);var o={components:{Flicking:e(492).a},props:{value:{default:0},options:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t),this.flickingInit()}}},data:function(){return{props:Object.assign({},this.$props),flicking:!1,itemsTotal:0}},computed:{compOptions:function(){return Object.assign({circular:!0},this.options)}},methods:{flickingInit:function(){var t=this;setTimeout((function(){try{t.flicking=t.$refs.flicking,t.itemsTotal=t.$refs.flicking.getPanelCount(),t.$refs.flicking.moveTo(t.$props.value)}catch(t){console.error(t)}}),100)},onChange:function(t){this.props.value=t.index,this.$emit("input",this.props.value)},moveTo:function(t,n){this.$refs.flicking.moveTo(t,n)},prev:function(){this.$refs.flicking.prev()},next:function(){this.$refs.flicking.next()}},mounted:function(){this.flickingInit()}},r=(e(459),e(14)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ui-carousel"},[e("flicking",{ref:"flicking",staticClass:"ui-carousel-slider",attrs:{tag:"div",options:t.compOptions},on:{change:t.onChange}},[t._t("sliders")],2),t._v(" "),t._t("arrows",[e("button",{staticClass:"ui-carousel-arrows ui-carousel-arrows-prev",attrs:{type:"button"},on:{click:function(n){return t.prev()}}},[e("i",{staticClass:"fa fa-fw fa-chevron-left"})]),t._v(" "),e("button",{staticClass:"ui-carousel-arrows ui-carousel-arrows-next",attrs:{type:"button"},on:{click:function(n){return t.next()}}},[e("i",{staticClass:"fa fa-fw fa-chevron-right"})])],{flicking:t.flicking,value:t.props.value}),t._v(" "),t._t("navigators",[e("div",{staticClass:"ui-carousel-navigators"},t._l(t.itemsTotal,(function(i){return e("a",{staticClass:"ui-carousel-navigators-each",class:{"ui-carousel-navigators-each-active":i-1==t.props.value},attrs:{href:"javascript:void(0);"},on:{click:function(n){return t.moveTo(i-1)}}})})),0)],{flicking:t.flicking,value:t.props.value})],2)}),[],!1,null,"267b3cd4",null);n.default=component.exports},555:function(t,n,e){"use strict";e.r(n);var o={layout:"coreui/admin",data:function(){return{carouselIndex:0}}},r=e(14),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-6"},[e("ui-carousel",{scopedSlots:t._u([{key:"sliders",fn:function(){return t._l(10,(function(t){return e("div",{staticStyle:{width:"100%"}},[e("img",{attrs:{src:"https://source.unsplash.com/random/200x200/?r="+t,alt:"",width:"100%"}})])}))},proxy:!0}]),model:{value:t.carouselIndex,callback:function(n){t.carouselIndex=n},expression:"carouselIndex"}})],1),t._v(" "),e("div",{staticClass:"col-6"},[e("ui-carousel",{scopedSlots:t._u([{key:"sliders",fn:function(){return t._l(10,(function(t){return e("div",{staticStyle:{width:"100%"}},[e("img",{attrs:{src:"https://source.unsplash.com/random/200x200/?r="+t,alt:"",width:"100%"}})])}))},proxy:!0}]),model:{value:t.carouselIndex,callback:function(n){t.carouselIndex=n},expression:"carouselIndex"}})],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{UiCarousel:e(482).default})}}]);