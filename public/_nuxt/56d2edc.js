(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{529:function(e,t,r){"use strict";r.r(t);var o={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e,this.props)}}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(12),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-control p-0 bg-white"},[r("div",{staticClass:"input-group"},["checkbox"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){var r=e.props.value,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&e.$set(e.props,"value",r.concat([null])):l>-1&&e.$set(e.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.props,"value",n)}}}):"radio"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){return e.$set(e.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:e.props.type},domProps:{value:e.props.value},on:{input:[function(t){t.target.composing||e.$set(e.props,"value",t.target.value)},function(t){return e.$emit("input",e.props.value)}]}}),e._v(" "),e.props.toggleShow?r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("div",{staticClass:"btn",on:{click:function(t){e.props.type="text"==e.props.type?"password":"text"}}},[r("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==e.props.type}})])])]):e._e()]),e._v(" "),e.props.meter?r("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiPasswordMeter:r(532).default})},531:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:"api"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var e=this,t=this.$axios[this.method],r="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},t(this.action,r).then((function(t){e.loading="",e.responseSuccess=t.data,e.$emit("success",e.responseSuccess)})).catch((function(t){for(var i in e.loading="",e.responseErrorMessage=t.response.data.message||"Erro",e.responseErrorFields=t.response.data.fields||{},e.responseErrorFields)Array.isArray(e.responseErrorFields[i])&&(e.responseErrorFields[i]=e.responseErrorFields[i].join("<br>"));e.$emit("error",e.responseErrorFields)}))}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},n=r(12),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"ui-form",attrs:{method:e.method,action:e.action},on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e.responseSuccess&&(e.$slots.success||e.$scopedSlots.success)?r("div",{staticClass:"alert alert-success"},[e._t("success",null,{response:e.responseSuccess})],2):e._e(),e._v(" "),e.responseErrorMessage?e._t("error",[e.responseErrorMessage?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.responseErrorMessage)}}):e._e()],{errorMessage:e.responseErrorMessage,fields:e.responseErrorFields}):e._e(),e._v(" "),e._t("default",null,{loading:e.loading,error:e.responseErrorFields,errorMessage:e.responseErrorMessage,success:e.responseSuccess})],2)}),[],!1,null,null,null);t.default=component.exports},532:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{meter:function(){var e=this.props.value,t=0,r="danger";if(e){for(var o=new Object,i=0;i<e.length;i++)o[e[i]]=(o[e[i]]||0)+1,t+=5/o[e[i]];var n={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},l=0;for(var c in n)l+=1==n[c]?1:0;t+=10*(l-1),(t=parseInt(t))>=70?r="success":t>=40&&(r="primary")}return{score:t,class:r}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(12),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"progress",staticStyle:{height:"5px"}},[t("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+this.meter.class,style:"width:"+this.meter.score+"%;"})])])}),[],!1,null,null,null);t.default=component.exports},555:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:!1}},methods:{passwordToken:function(){var e=this;this.$axios.post("/api/auth/password-token",this.post).then((function(t){if(t.data.error)return e.error=t.data.error;e.tokenGenerated=!0}))},passwordReset:function(){var e=this;this.error={},this.$axios.post("/api/auth/password-reset",this.post).then((function(t){if(t.data.error)return e.error=t.data.error;e.post={email:"",password:"",password_confirmation:"",token:""},e.$emit("success",t.data)}))}},data:function(){return{tokenGenerated:!1,tokenInformed:!1,passwordChanged:!1,error:{},user:{email:"",token:"",password:"",password_confirmation:""}}}},n=r(12),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.tokenGenerated?e._e():r("ui-form",{attrs:{method:"post",action:"/api/auth/password-token"},on:{success:function(t){e.tokenGenerated=!0}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.error,n=t.loading;return[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Informe seu e-mail"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("span",n?{domProps:{innerHTML:e._s(n)}}:[e._v("Enviar")])])])]),e._v(" "),o.token?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.email)}}):e._e()])]}}],null,!1,420827506),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),e._v(" "),e.tokenGenerated&&!e.passwordChanged?r("ui-form",{attrs:{method:"post",action:"/api/auth/password-reset"},on:{success:function(t){e.passwordChanged=!0}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.error;return[r("div",{staticClass:"form-group"},[r("label",[e._v("Informe o token recebido por e-mail")]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.token,expression:"user.token"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Informe o token recebido"},domProps:{value:e.user.token},on:{input:function(t){t.target.composing||e.$set(e.user,"token",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.tokenInformed=!!e.user.token}}},[e._v("Ok")])])])]),e._v(" "),o.token?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.token)}}):e._e()]),e._v(" "),e.tokenInformed&&e.user.token?r("div",[r("div",{staticClass:"form-group"},[r("label",[e._v("Informe sua nova senha")]),e._v(" "),r("ui-password",{model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),o.password?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.password)}}):e._e()],1),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v("Repita a senha")]),e._v(" "),r("ui-password",{attrs:{meter:!1},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}}),e._v(" "),o.password_confirmation?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.password_confirmation)}}):e._e()],1),e._v(" "),r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("\r\n                    Concluir\r\n                ")])]):e._e()]}}],null,!1,3340356037),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}):e._e(),e._v(" "),e.passwordChanged?r("div",{staticClass:"text-center"},[e._v("\r\n        Senha alterada. Por favor, faça login\r\n    ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiForm:r(531).default,UiPassword:r(529).default})},723:function(e,t,r){"use strict";r.r(t);var o={layout:"auth",methods:{onPassword:function(){this.$swalSuccess("Sucesso","Senha alterada. Por favor, faça login."),this.$router.push({path:"/auth"})}}},n=r(12),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"text-center py-2"},[e._v("Recuperar senha")]),e._v(" "),r("ui-auth-password",{on:{success:function(t){return e.onPassword()}}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiAuthPassword:r(555).default})}}]);