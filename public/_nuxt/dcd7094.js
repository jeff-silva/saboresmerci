(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{528:function(t,e,n){var content=n(536);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("b8d0879e",content,!0,{sourceMap:!1})},535:function(t,e,n){"use strict";var o=n(528);n.n(o).a},536:function(t,e,n){(e=n(29)(!1)).push([t.i,".ui-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}.ui-modal .card{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),t.exports=e},539:function(t,e,n){"use strict";n.r(e);var o={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},toggle:function(){this.props.value=!this.props.value,this.emit()}},data:function(){return{props:Object.assign({},this.$props)}}},r=(n(535),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?n("div",{staticClass:"modal fade show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toggle()}}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t.$slots.header&&t.$scopedSlots.header?n("h5",{staticClass:"modal-title"},[t._t("header")],2):t._e(),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.toggle()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),t.$slots.footer&&t.$scopedSlots.footer?n("div",{staticClass:"modal-footer"},[t._t("footer")],2):t._e()])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},629:function(t,e,n){"use strict";n.r(e);var o={props:{value:{default:""},placeholder:{default:"Buscar usuário"}},data:function(){return{loading:!1,items:[],props:Object.assign({},this.$props)}},methods:{emitValue:function(){this.$emit("input",this.props.value)},getResults:function(t){var e=this;this.loading=!0,this.$axios.get("/api/user/search",{params:{search:t}}).then((function(t){e.loading=!1,e.items=t.data.data}))}},mounted:function(){this.getResults(this.props.value)}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-select",{staticClass:"d-block",attrs:{placeholder:t.placeholder,loading:t.loading,filterable:"",remote:"","remote-method":t.getResults},on:{change:function(e){return t.emitValue()}},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}},t._l(t.items,(function(i){return n("el-option",{key:i.id,attrs:{value:i.id,label:i.name}},[t._v(t._s(i.name))])})),1)],1)}),[],!1,null,null,null);e.default=component.exports},636:function(t,e,n){"use strict";n.r(e);var o={computed:{model:function(){return this.$store.state.tevep2.model}},data:function(){return{loading:!1,invite:!1,inviteInfo:!1,invites:{data:[]}}},methods:{inviteOpen:function(){this.invite={tevep_id:this.$route.params.id||"",user_id:"",user_email:""}},invitesLoad:function(){var t=this;if(+this.model.id){var e={tevep_id:this.model.id};this.loading=!0,this.$axios.get("/api/tevep-invite/search",{params:e}).then((function(e){t.loading=!1,t.invites=e.data}))}},inviteSave:function(){var t=this;this.$axios.post("/api/tevep-invite/save",this.invite).then((function(e){t.invite=!1,t.invitesLoad()}))},inviteResponse:function(data){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};data=Object.assign({},data,e),this.loading=!0,this.$axios.post("/api/tevep-invite/save",data).then((function(e){t.loading=!1,t.invitesLoad()}))},inviteInfoOpen:function(t){this.inviteInfo=t},inviteRemove:function(){var t=this;this.$swal("Remover convite","Deseja mesmo continuar?").then((function(e){e.value&&(t.loading=!0,t.$axios.post("/api/tevep-invite/delete/".concat(t.inviteInfo.id)).then((function(e){t.loading=!1,t.inviteInfo=!1,t.invitesLoad()})))}))}},mounted:function(){this.invitesLoad()}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"mr-4"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.inviteOpen()}}},[n("el-tooltip",{attrs:{content:"Convidar"}},[n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-preta.png",alt:"Enviar convite",title:"Enviar convite"}})])],1)]),t._v(" "),t._l(t.invites.data,(function(i){return n("div",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.inviteInfoOpen(i)}}},[n("el-tooltip",{attrs:{content:i.user.name}},["accepted"==i.status?n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-verde.png",alt:"Aceito"}}):"denied"==i.status?n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-vermelha.png",alt:"Negado"}}):n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-amarela.png",alt:"Aguardando"}})])],1)])}))],2),t._v(" "),n("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\r\n            Novo convite\r\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"form-group"},[n("label",[t._v("Encontre um usuário para convidá-lo a editar este evento.")]),t._v(" "),n("ui-user",{model:{value:t.invite.user_id,callback:function(e){t.$set(t.invite,"user_id",e)},expression:"invite.user_id"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Ou convide por e-mail")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.invite.user_email,expression:"invite.user_email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.invite.user_email},on:{input:function(e){e.target.composing||t.$set(t.invite,"user_email",e.target.value)}}})])]},proxy:!0},{key:"footer",fn:function(){return[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.invite=!1}}},[t._v("\r\n                Cancelar\r\n            ")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.inviteSave()}}},[t._v("\r\n                Enviar\r\n            ")])]},proxy:!0}]),model:{value:t.invite,callback:function(e){t.invite=e},expression:"invite"}}),t._v(" "),n("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Detalhes")]},proxy:!0},{key:"body",fn:function(){return["denied"==t.inviteInfo.status?n("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.inviteInfo.user.name)+" recusou o convite")]):"accepted"==t.inviteInfo.status?n("div",{staticClass:"alert alert-success"},[t._v(t._s(t.inviteInfo.user.name)+" aceitou o convite")]):n("div",{staticClass:"alert alert-warning"},[t._v("\r\n                Aguardando resposta de "+t._s(t.inviteInfo.user.name)+"\r\n                "),t.inviteInfo.links.whatsapp?n("a",{staticClass:"btn bg-whatsapp text-white btn-block mt-3",attrs:{href:t.inviteInfo.links.whatsapp,target:"_blank"}},[n("i",{staticClass:"fab fa-whatsapp"}),t._v("\r\n                    Convidar pelo whatsapp\r\n                ")]):t._e()])]},proxy:!0},{key:"footer",fn:function(){return[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.inviteRemove()}}},[t._v("\r\n                Remover convite\r\n            ")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.inviteInfo=!1}}},[t._v("\r\n                Ok\r\n            ")])]},proxy:!0}]),model:{value:t.inviteInfo,callback:function(e){t.inviteInfo=e},expression:"inviteInfo"}}),t._v(" "),t._l(t.invites.data,(function(i){return i.status||i.user_id!=t.$auth.user.id?t._e():[n("ui-modal",{attrs:{value:!0},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Você foi convidado para editar este projeto")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"flex-grow-1"},[n("a",{staticClass:"btn btn-primary btn-block",attrs:{href:"javascript:;"},on:{click:function(e){return t.inviteResponse(i,{status:"accepted"})}}},[t._v("Aceitar")])]),t._v(" "),n("div",{staticClass:"flex-grow-1"},[n("a",{staticClass:"btn btn-danger btn-block",attrs:{href:"javascript:;"},on:{click:function(e){return t.inviteResponse(i,{status:"denied"})}}},[t._v("Recusar")])])])]},proxy:!0}],null,!0)})]}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiUser:n(629).default,UiModal:n(539).default})}}]);