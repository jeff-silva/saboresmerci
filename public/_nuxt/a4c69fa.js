(window.webpackJsonp=window.webpackJsonp||[]).push([[116,31],{666:function(t,e,o){var content=o(700);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("1ad5d77f",content,!0,{sourceMap:!1})},699:function(t,e,o){"use strict";o(666)},700:function(t,e,o){(e=t.exports=o(63)(!1)).push([t.i,"._318zS-imPiHQhRJF2-SpGS *{transition:all .3s ease}._2N08MZsQz4mnFWqAVfW5J1{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:99999!important;visibility:hidden;opacity:0}._2N08MZsQz4mnFWqAVfW5J1._173rw9XGStgpEXMLdTZBly{visibility:visible;opacity:1}._2eTNG-6OUraNxjPLHoxj5m{overflow-x:hidden;overflow-y:auto}._1OzCJ9UTxHt9LMM-s8LWWq{display:flex;align-items:center;justify-content:center;padding:0!important}._3ccelf22jAui6neyeLoG2Y ._2eTNG-6OUraNxjPLHoxj5m{height:100vh;overflow:auto;position:absolute;top:0;left:-100%}._3ccelf22jAui6neyeLoG2Y._173rw9XGStgpEXMLdTZBly ._2eTNG-6OUraNxjPLHoxj5m{left:0}._1TXMlw6eLbzyIV1ohGd4zm ._2eTNG-6OUraNxjPLHoxj5m{height:100vh;overflow:auto;position:absolute;top:0;right:-100%}._1TXMlw6eLbzyIV1ohGd4zm._173rw9XGStgpEXMLdTZBly ._2eTNG-6OUraNxjPLHoxj5m{right:0}",""]),e.locals={"ui-drawer":"_318zS-imPiHQhRJF2-SpGS","ui-drawer-type":"_2N08MZsQz4mnFWqAVfW5J1","ui-drawer-type-show":"_173rw9XGStgpEXMLdTZBly","ui-drawer-content":"_2eTNG-6OUraNxjPLHoxj5m","ui-drawer-type-modal":"_1OzCJ9UTxHt9LMM-s8LWWq","ui-drawer-type-drawer-left":"_3ccelf22jAui6neyeLoG2Y","ui-drawer-type-drawer-right":"_1TXMlw6eLbzyIV1ohGd4zm"}},713:function(t,e,o){"use strict";o.r(e);var r={props:{value:{default:!1},tag:{default:"div"},type:{default:"modal"},backdropColor:{default:"#00000055"},width:{default:"300px"},renderHere:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{toggle:function(){this.props.value?this.hide():this.show()},show:function(){this.props.value=!0,this.$emit("value",this.props.value)},hide:function(){this.props.value=!1,this.$emit("value",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},l=(o(699),o(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui-drawer"},[t.renderHere?[t._t("content")]:t._e(),t._v(" "),o("div",{class:"ui-drawer-type ui-drawer-type-"+t.props.type+" "+(t.props.value?"ui-drawer-type-show":null),staticStyle:{"animation-duration":"300ms"},style:"background:"+t.props.backdropColor+";",on:{mousedown:function(e){if(e.target!==e.currentTarget)return null;t.props.value=!1,t.$emit("input",t.props.value)}}},[o(t.tag,{tag:"component",on:{submit:function(e){return e.preventDefault(),t.$emit("submit",e)}}},[o("div",{staticClass:"ui-drawer-content bg-white shadow",style:"width:"+t.props.width+";"},[t._t("content")],2)])],1)],2)}),[],!1,null,null,null);e.default=component.exports},764:function(t,e,o){var content=o(800);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("3cadd89e",content,!0,{sourceMap:!1})},799:function(t,e,o){"use strict";o(764)},800:function(t,e,o){(e=t.exports=o(63)(!1)).push([t.i,"._3ahiJfQgHtq7Lky8u5plcC{height:100vh;display:flex;flex-direction:column}._17jESQbJk8XIuz0juNtRPz{flex-direction:column}._1JL3LVhUf_RD6LDdPTXWjF,._17jESQbJk8XIuz0juNtRPz{display:flex;-webkit-box-pack:center}._1JL3LVhUf_RD6LDdPTXWjF{flex-direction:column;flex:1;overflow:auto}",""]),e.locals={admin:"_3ahiJfQgHtq7Lky8u5plcC","admin-header":"_17jESQbJk8XIuz0juNtRPz","admin-content":"_1JL3LVhUf_RD6LDdPTXWjF"}},848:function(t,e,o){"use strict";o.r(e);var r={layout:"coreui/admin",data:function(){return{menuItems:[{title:"Home",to:"/test"},{title:"Autenticação",to:"/test/auth"},{title:"Cores",to:"/test/colors"},{title:"Carrosel",to:"/test/carousel"},{title:"Drawer",to:"/test/drawer"},{title:"Endpoints",to:"/test/endpoints"},{title:"Grape",to:"/test/grape"},{title:"Inputs",to:"/test/input"},{title:"Layout",to:"/test/layout"},{title:"Navigation",to:"/test/nav"},{title:"Table",to:"/test/table"},{title:"Tabs",to:"/test/tabs"},{title:"Exemplo completo",to:"/test/example"}]}}},l=(o(799),o(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row no-gutters"},[o("div",{staticClass:"col-12 col-md-2 bg-white shadow-sm d-none d-md-block"},[o("div",{staticClass:"admin"},[o("div",{staticClass:"admin-content"},[o("div",{staticClass:"nav nav-pills flex-column"},[o("ui-drawer",{ref:"drawer",attrs:{type:"drawer-left","render-here":!0},scopedSlots:t._u([{key:"content",fn:function(){return t._l(t.menuItems,(function(i,e){return o("nuxt-link",{key:e,staticClass:"nav-link rounded-0 text-dark font-weight-bold",class:{"bg-light":t.$route.path==i.to},attrs:{to:i.to}},[t._v(t._s(i.title))])}))},proxy:!0}])})],1)])])]),t._v(" "),o("div",{staticClass:"col-12 col-md-10"},[o("div",{staticClass:"admin"},[o("div",{staticClass:"admin-header p-2 bg-white shadow-sm"},[o("div",{staticClass:"d-flex align-items-center"},[o("div",[o("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$refs.drawer.show()}}},[o("i",{staticClass:"fa fa-fw fa-bars"})])])])]),t._v(" "),o("div",{staticClass:"admin-content p-2"},[o("nuxt-child")],1),t._v(" "),o("div",{staticClass:"admin-header bg-secondary p-1"},[t._v("footer")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiDrawer:o(713).default})}}]);