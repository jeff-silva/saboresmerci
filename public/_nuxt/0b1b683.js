(window.webpackJsonp=window.webpackJsonp||[]).push([[87,29,43,73,86],{646:function(t,e,n){var content=n(651);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("54b080ef",content,!0,{sourceMap:!1})},650:function(t,e,n){"use strict";n(646)},651:function(t,e,n){(e=t.exports=n(63)(!1)).push([t.i,"._3zmAcsi2edid9LiM-wSgM7{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}._3zmAcsi2edid9LiM-wSgM7 .Um7hY4BQrxkIukrIjOocQ{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),e.locals={"ui-modal":"_3zmAcsi2edid9LiM-wSgM7",card:"Um7hY4BQrxkIukrIjOocQ"}},652:function(t,e,n){"use strict";n.r(e);var o={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},toggle:function(){this.props.value=!this.props.value,this.emit()}},data:function(){return{props:Object.assign({},this.$props)}}},r=(n(650),n(13)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?n("div",{staticClass:"modal fade show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toggle()}}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t.$slots.header&&t.$scopedSlots.header?n("h5",{staticClass:"modal-title"},[t._t("header")],2):t._e(),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.toggle()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),t.$slots.footer&&t.$scopedSlots.footer?n("div",{staticClass:"modal-footer"},[t._t("footer")],2):t._e()])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},659:function(t,e,n){var content=n(684);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("6d9afeda",content,!0,{sourceMap:!1})},683:function(t,e,n){"use strict";n(659)},684:function(t,e,n){(e=t.exports=n(63)(!1)).push([t.i,"._2kaNkxZFY6PGpAM3Rnpzn1 ._3MSYnHS0BNyr-fnYm-zxZm{visibility:hidden;opacity:0;transition:all .2s ease;position:absolute;top:110%;left:0;min-width:310px;z-index:9}._2kaNkxZFY6PGpAM3Rnpzn1 ._3MSYnHS0BNyr-fnYm-zxZm *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._2kaNkxZFY6PGpAM3Rnpzn1._1yaugL9GzP-Tn0xIJNk8dY ._3MSYnHS0BNyr-fnYm-zxZm{visibility:visible;opacity:1}",""]),e.locals={"ui-datetime":"_2kaNkxZFY6PGpAM3Rnpzn1","flatpickr-calendar":"_3MSYnHS0BNyr-fnYm-zxZm","ui-datetime-flatpickr-show":"_1yaugL9GzP-Tn0xIJNk8dY"}},692:function(t,e,n){"use strict";n.r(e);n(34),n(170);var o=n(734),r=(n(723),n(0)),l=n.n(r),c={props:{value:{default:""},time:{default:!0}},computed:{compConfig:function(){var t=this,data={};return this.props.time&&(data.inline=!0,data.enableTime=!0,data.time_24hr=!0),data.onChange=function(e,n,o){t.props.value=o.formatDate(e[0],"Y-m-d H:i:S"),t.valueFake=o.formatDate(e[0],"d/m/Y H:i:S"),t.flatpickrShowTest(),t.$refs.input.focus(),t.emit()},data.locale={weekdays:{shorthand:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],longhand:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]},months:{shorthand:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],longhand:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},rangeSeparator:" até ",time_24hr:!0},data}},data:function(){return{valueFake:!1,flatpickr:!1,flatpickrShow:!1,props:Object.assign({},this.$props)}},methods:{emit:function(){this.$emit("input",this.props.value)},formattedToDate:function(t){var e=this.valueFake.split(/[^0-9]/).filter((function(t){return!!t}));e[2]&&4==e[2].length&&(this.props.value=[e[2],e[1]||"01",e[0]||"01"].join("-")+" "+[e[3]||"00",e[4]||"00",e[5]||"00"].join(":"),this.flatpickr.setDate(this.props.value))},flatpickrShowTest:function(){var t=this;setTimeout((function(){t.flatpickrShow=t.$el.contains(document.activeElement)}),100)}},mounted:function(){this.flatpickr=Object(o.a)(this.$refs.flatpickr,this.compConfig),this.valueFake=l()(this.props.value).format("DD/MM/YYYY - HH:mm")}},d=(n(683),n(13)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-datetime",class:{"ui-datetime-flatpickr-show":t.flatpickrShow},staticStyle:{position:"relative"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.valueFake,expression:"valueFake"},{name:"mask",rawName:"v-mask",value:["##/##/####","##/##/#### - ##:##:##"],expression:"['##/##/####', '##/##/#### - ##:##:##']"}],ref:"input",staticClass:"form-control",attrs:{type:"text",autocomplete:"chrome-off"},domProps:{value:t.valueFake},on:{keyup:function(e){t.formattedToDate(e),t.emit()},focus:function(e){return t.flatpickrShowTest()},blur:function(e){return t.flatpickrShowTest()},input:function(e){e.target.composing||(t.valueFake=e.target.value)}}}),t._v(" "),n("div",{ref:"flatpickr",staticClass:"ui-datetime-flatpickr"})])}),[],!1,null,null,null);e.default=component.exports},744:function(t,e,n){"use strict";n.r(e);var o={computed:{model:function(){return this.$store.state.tevep2.model}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-12 mb-4"},[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-4"},[t.model.title?n("div",[n("div",{staticClass:"text-center"},[t._v("Início")]),t._v(" "),n("ui-datetime",{model:{value:t.model.date_start,callback:function(e){t.$set(t.model,"date_start",e)},expression:"model.date_start"}})],1):t._e()]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"col-4"},[t.model.date_start?[n("div",{staticClass:"text-center"},[t._v("Início")]),t._v(" "),n("ui-datetime",{model:{value:t.model.date_final,callback:function(e){t.$set(t.model,"date_final",e)},expression:"model.date_final"}})]:t._e()],2)])]),t._v(" "),n("div",{staticClass:"col-12 mb-4"},[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-4"},[t.model.date_final?n("div",[t._m(1),t._v(" "),n("div",{staticClass:"text-center"},[t._v("Piloto")]),t._v(" "),t._l(t.model.meta.pilotos,(function(p){return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:p.title,expression:"p.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:p.title},on:{input:function(e){e.target.composing||t.$set(p,"title",e.target.value)}}})])}))],2):t._e()]),t._v(" "),n("div",{staticClass:"col-4 px-3"},[t._m(2),t._v(" "),n("div",{staticClass:"text-center"},[t._v("Evento")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.model.title,expression:"model.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.model.title},on:{input:function(e){e.target.composing||t.$set(t.model,"title",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-4"},[t.model.date_final?n("div",[t._m(3),t._v(" "),n("div",{staticClass:"text-center"},[t._v("Público")]),t._v(" "),t._l(t.model.meta.pessoas,(function(p){return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:p.title,expression:"p.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:p.title},on:{input:function(e){e.target.composing||t.$set(p,"title",e.target.value)}}})])}))],2):t._e()])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4 text-center"},[e("img",{staticStyle:{height:"60px"},attrs:{src:"/assets/icons/ampulheta.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center mb-3"},[e("img",{staticStyle:{height:"60px"},attrs:{src:"/assets/icons/piloto.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center mb-3"},[e("img",{staticStyle:{height:"60px"},attrs:{src:"/assets/icons/evento.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center mb-3"},[e("img",{staticStyle:{height:"60px"},attrs:{src:"/assets/icons/publico.png",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiDatetime:n(692).default})},787:function(t,e,n){"use strict";n.r(e);var o={computed:{model:function(){return this.$store.state.tevep2.model}},data:function(){return{loading:!1,invite:!1,inviteInfo:!1,invites:{data:[]}}},methods:{inviteOpen:function(){this.invite={tevep_id:this.$route.params.id||"",user_id:"",user_email:""}},invitesLoad:function(){var t=this;if(+this.model.id){var e={tevep_id:this.model.id};this.loading=!0,this.$axios.get("/api/tevep-invite/search",{params:e}).then((function(e){t.loading=!1,t.invites=e.data}))}},inviteSave:function(){var t=this;this.$axios.post("/api/tevep-invite/save",this.invite).then((function(e){t.invite=!1,t.invitesLoad()}))},inviteResponse:function(data){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};data=Object.assign({},data,e),this.loading=!0,this.$axios.post("/api/tevep-invite/save",data).then((function(e){t.loading=!1,t.invitesLoad()}))},inviteInfoOpen:function(t){this.inviteInfo=t},inviteRemove:function(){var t=this;this.$swal("Remover convite","Deseja mesmo continuar?").then((function(e){e.value&&(t.loading=!0,t.$axios.post("/api/tevep-invite/delete/".concat(t.inviteInfo.id)).then((function(e){t.loading=!1,t.inviteInfo=!1,t.invitesLoad()})))}))}},mounted:function(){this.invitesLoad()}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"mr-4"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.inviteOpen()}}},[n("el-tooltip",{attrs:{content:"Convidar"}},[n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-preta.png",alt:"Enviar convite",title:"Enviar convite"}})])],1)]),t._v(" "),t._l(t.invites.data,(function(i){return n("div",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.inviteInfoOpen(i)}}},[n("el-tooltip",{attrs:{content:i.user.name}},["accepted"==i.status?n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-verde.png",alt:"Aceito"}}):"denied"==i.status?n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-vermelha.png",alt:"Negado"}}):n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-amarela.png",alt:"Aguardando"}})])],1)])}))],2),t._v(" "),n("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\r\n            Novo convite\r\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"form-group"},[n("label",[t._v("Encontre um usuário para convidá-lo a editar este evento.")]),t._v(" "),n("ui-user",{model:{value:t.invite.user_id,callback:function(e){t.$set(t.invite,"user_id",e)},expression:"invite.user_id"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Ou convide por e-mail")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.invite.user_email,expression:"invite.user_email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.invite.user_email},on:{input:function(e){e.target.composing||t.$set(t.invite,"user_email",e.target.value)}}})])]},proxy:!0},{key:"footer",fn:function(){return[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.invite=!1}}},[t._v("\r\n                Cancelar\r\n            ")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.inviteSave()}}},[t._v("\r\n                Enviar\r\n            ")])]},proxy:!0}]),model:{value:t.invite,callback:function(e){t.invite=e},expression:"invite"}}),t._v(" "),n("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Detalhes")]},proxy:!0},{key:"body",fn:function(){return["denied"==t.inviteInfo.status?n("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.inviteInfo.user.name)+" recusou o convite")]):"accepted"==t.inviteInfo.status?n("div",{staticClass:"alert alert-success"},[t._v(t._s(t.inviteInfo.user.name)+" aceitou o convite")]):n("div",{staticClass:"alert alert-warning"},[t._v("\r\n                Aguardando resposta de "+t._s(t.inviteInfo.user.name)+"\r\n                "),t.inviteInfo.links.whatsapp?n("a",{staticClass:"btn bg-whatsapp text-white btn-block mt-3",attrs:{href:t.inviteInfo.links.whatsapp,target:"_blank"}},[n("i",{staticClass:"fab fa-whatsapp"}),t._v("\r\n                    Convidar pelo whatsapp\r\n                ")]):t._e()])]},proxy:!0},{key:"footer",fn:function(){return[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.inviteRemove()}}},[t._v("\r\n                Remover convite\r\n            ")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.inviteInfo=!1}}},[t._v("\r\n                Ok\r\n            ")])]},proxy:!0}]),model:{value:t.inviteInfo,callback:function(e){t.inviteInfo=e},expression:"inviteInfo"}}),t._v(" "),t._l(t.invites.data,(function(i){return i.status||i.user_id!=t.$auth.user.id?t._e():[n("ui-modal",{attrs:{value:!0},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Você foi convidado para editar este projeto")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"flex-grow-1"},[n("a",{staticClass:"btn btn-primary btn-block",attrs:{href:"javascript:;"},on:{click:function(e){return t.inviteResponse(i,{status:"accepted"})}}},[t._v("Aceitar")])]),t._v(" "),n("div",{staticClass:"flex-grow-1"},[n("a",{staticClass:"btn btn-danger btn-block",attrs:{href:"javascript:;"},on:{click:function(e){return t.inviteResponse(i,{status:"denied"})}}},[t._v("Recusar")])])])]},proxy:!0}],null,!0)})]}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiModal:n(652).default})},887:function(t,e,n){"use strict";n.r(e);var o={components:{basico:n(744).default,pingpong:n(787).default},computed:{model:function(){return this.$store.state.tevep2.model}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("basico"),t._v(" "),n("pingpong")],1)}),[],!1,null,null,null);e.default=component.exports}}]);