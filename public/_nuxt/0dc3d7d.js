(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{719:function(t,e,l){"use strict";l.r(e);l(35),l(147);var n={layout:"admin",data:function(){return{menuItems:[{title:"Cores",to:"/docs/colors",children:[]},{title:"Autenticação",to:"/docs/auth",children:[]},{title:"Carrosel",to:"/docs/carousel",children:[]},{title:"Drawer",to:"/docs/drawer",children:[]},{title:"Endpoints",to:"/docs/endpoints",children:[]},{title:"Inputs",to:"/docs/input",children:[{title:"Select",to:"/docs/input/select",children:[]},{title:"Loading",to:"/docs/input/loading",children:[]}]},{title:"Table",to:"/docs/table",children:[]},{title:"Tabs",to:"/docs/tabs",children:[]}]}},mounted:function(){1==this.$route.path.split("/").filter((function(t){return!!t})).length&&this.$router.push({path:this.menuItems[0].to})}},o=l(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"row no-gutters"},[l("div",{staticClass:"col-2 bg-white shadow-sm",staticStyle:{height:"calc(100vh - 130px)",overflow:"auto"}},[l("div",{staticClass:"nav nav-pills flex-column"},t._l(t.menuItems,(function(i,e){return l("div",[l("nuxt-link",{key:e,staticClass:"nav-link font-weight-bold",attrs:{to:i.to}},[t._v(t._s(i.title))]),t._v(" "),t._l(i.children,(function(e,n){return l("div",[l("nuxt-link",{key:n,staticClass:"nav-link",attrs:{to:e.to}},[t._v("  "+t._s(e.title))])],1)}))],2)})),0)]),t._v(" "),l("div",{staticClass:"col pl-3",staticStyle:{height:"calc(100vh - 130px)",overflow:"auto"}},[l("nuxt-child")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);