(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{375:function(t,e,r){var content=r(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("b8d0879e",content,!0,{sourceMap:!1})},377:function(t,e,r){"use strict";var n=r(375);r.n(n).a},378:function(t,e,r){(e=r(38)(!1)).push([t.i,".ui-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}.ui-modal .card{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),t.exports=e},381:function(t,e,r){var content=r(399);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("d8c97870",content,!0,{sourceMap:!1})},382:function(t,e,r){"use strict";r.r(e);var n={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{toggle:function(){this.props.value=!this.props.value,this.$emit("value",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},o=(r(377),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?r("div",{staticClass:"ui-modal",staticStyle:{"animation-duration":"300ms"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.props.value=!1,t.$emit("input",t.props.value)}}},[r(t.tag,{tag:"component",on:{submit:function(e){return e.preventDefault(),t.$emit("submit",e)}}},[r("div",{staticClass:"card"},[t.$slots.header?r("div",{staticClass:"card-header"},[t._t("header")],2):t._e(),t._v(" "),r("div",{staticClass:"card-body"},[t._t("body")],2),t._v(" "),t.$slots&&t.$slots.footer?r("div",{staticClass:"card-footer text-right"},[t._t("footer")],2):t._e()])])],1):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},398:function(t,e,r){"use strict";var n=r(381);r.n(n).a},399:function(t,e,r){(e=r(38)(!1)).push([t.i,".user-card-content{height:90px;display:flex;align-items:center;justify-content:center}.user-card-actions{display:flex}.user-card-actions .btn{margin:0}.user-card-image{background:50% no-repeat #f5f5f5;background-size:cover;width:100px;height:100px;margin:-50px auto 0;border-radius:50%;border:4px solid #fff;overflow:hidden;display:flex;align-items:center;justify-content:center}.user-card-bg{background-size:cover;background-position:50%;background-repeat:no-repeat;height:200px}.user-card-pattern{--stripe:#f5f5f5;--bg:#eee;background:linear-gradient(135deg,var(--bg) 25%,transparent 0) -50px 0,linear-gradient(225deg,var(--bg) 25%,transparent 0) -50px 0,linear-gradient(315deg,var(--bg) 25%,transparent 0),linear-gradient(45deg,var(--bg) 25%,transparent 0);background-size:100px 100px;background-color:var(--stripe)}",""]),t.exports=e},407:function(t,e,r){"use strict";r.r(e);var n={name:"user-card",props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{props:Object.assign({},this.$props)}}},o=(r(398),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-card bg-white shadow-sm rounded"},[t.props.value.meta.background?r("div",{staticClass:"user-card-bg",style:"background-image:url("+t.props.value.meta.background+");"}):r("div",{staticClass:"user-card-bg user-card-pattern"}),t._v(" "),r("div",{staticClass:"user-card-image shadow-sm",style:"background-image:url("+t.props.value.meta.photo+");"},[t._t("image")],2),t._v(" "),r("div",{staticClass:"user-card-content"},[r("div",[r("div",{staticClass:"text-center font-weight-bold text-uppercase mt-2"},[r("nuxt-link",{attrs:{to:""}},[t._v(t._s(t.props.value.name))])],1),t._v(" "),r("div",{staticClass:"text-center text-muted"},[t._v(t._s(t.props.value.meta.description))]),t._v(" "),r("div",{staticClass:"text-center text-muted"},[t._v(t._s(t.props.value.email))]),t._v(" "),r("div",{staticClass:"pb-4"})])]),t._v(" "),r("div",{staticClass:"btn-group user-card-actions"},[t._t("actions")],2)])}),[],!1,null,null,null);e.default=component.exports},486:function(t,e,r){"use strict";r.r(e);var n={layout:"admin",methods:{userSearch:function(){var t=this;this.user.loading=!0,this.$axios.get("/api/user/search").then((function(e){t.user.loading=!1,t.user.resp=e.data}))}},data:function(){return{user:{loading:!1,edit:!1,params:{},resp:{}}}},mounted:function(){this.userSearch()}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"text-right mb-3"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.user.edit={}}}},[r("i",{staticClass:"fa fa-fw fa-plus"}),t._v(" Novo usuário\r\n        ")])]),t._v(" "),r("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\r\n            "+t._s(t.user.edit.name||"Criar")+"\r\n        ")]},proxy:!0},{key:"body",fn:function(){return[r("ui-auth-register",{on:{success:function(e){t.user.edit=!1,t.userSearch()}},model:{value:t.user.edit,callback:function(e){t.$set(t.user,"edit",e)},expression:"user.edit"}})]},proxy:!0}]),model:{value:t.user.edit,callback:function(e){t.$set(t.user,"edit",e)},expression:"user.edit"}}),t._v(" "),t.user.loading?r("div",{staticClass:"text-center"},[t._v("\r\n        Carregando...\r\n    ")]):t._e(),t._v(" "),r("div",{staticClass:"row"},t._l(t.user.resp.data,(function(u){return r("div",{key:u.id,staticClass:"col-12 col-md-3 mb-5",staticStyle:{position:"relative"}},[r("user-card",{staticStyle:{position:"relative",height:"100%"},attrs:{value:u},scopedSlots:t._u([{key:"actions",fn:function(){return[r("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Editar",expression:"'Editar'",modifiers:{"top-center":!0}}],staticClass:"btn btn-light",attrs:{to:"/user/"+u.id}},[r("i",{staticClass:"fas fa-edit"})]),t._v(" "),r("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Projetos",expression:"'Projetos'",modifiers:{"top-center":!0}}],staticClass:"btn btn-light",attrs:{to:"/tevep/?user="+u.id}},[r("i",{staticClass:"fas fa-shopping-bag"})])]},proxy:!0}],null,!0)})],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiAuthRegister:r(278).default,UiModal:r(382).default,UserCard:r(407).default})}}]);