(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{528:function(t,e,r){var content=r(536);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("b8d0879e",content,!0,{sourceMap:!1})},530:function(t,e,r){var content=r(541);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("890feb8e",content,!0,{sourceMap:!1})},531:function(t,e,r){"use strict";r.r(e);var n={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:"api"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var t=this,e=this.$axios[this.method],r="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},e(this.action,r).then((function(e){t.loading="",t.responseSuccess=e.data,t.$emit("success",t.responseSuccess)})).catch((function(e){for(var i in t.loading="",t.responseErrorMessage=e.response.data.message||"Erro",t.responseErrorFields=e.response.data.fields||{},t.responseErrorFields)Array.isArray(t.responseErrorFields[i])&&(t.responseErrorFields[i]=t.responseErrorFields[i].join("<br>"));t.$emit("error",t.responseErrorFields)}))}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"ui-form",attrs:{method:t.method,action:t.action},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t.responseSuccess&&(t.$slots.success||t.$scopedSlots.success)?r("div",{staticClass:"alert alert-success"},[t._t("success",null,{response:t.responseSuccess})],2):t._e(),t._v(" "),t.responseErrorMessage?t._t("error",[t.responseErrorMessage?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:t._s(t.responseErrorMessage)}}):t._e()],{errorMessage:t.responseErrorMessage,fields:t.responseErrorFields}):t._e(),t._v(" "),t._t("default",null,{loading:t.loading,error:t.responseErrorFields,errorMessage:t.responseErrorMessage,success:t.responseSuccess})],2)}),[],!1,null,null,null);e.default=component.exports},533:function(t,e,r){var content=r(552);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("eed70b5e",content,!0,{sourceMap:!1})},534:function(t,e,r){var content=r(554);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("6539bdd3",content,!0,{sourceMap:!1})},535:function(t,e,r){"use strict";var n=r(528);r.n(n).a},536:function(t,e,r){(e=r(29)(!1)).push([t.i,".ui-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}.ui-modal .card{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),t.exports=e},539:function(t,e,r){"use strict";r.r(e);var n={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},toggle:function(){this.props.value=!this.props.value,this.emit()}},data:function(){return{props:Object.assign({},this.$props)}}},o=(r(535),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?r("div",{staticClass:"modal fade show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toggle()}}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[t.$slots.header&&t.$scopedSlots.header?r("h5",{staticClass:"modal-title"},[t._t("header")],2):t._e(),t._v(" "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.toggle()}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),r("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),t.$slots.footer&&t.$scopedSlots.footer?r("div",{staticClass:"modal-footer"},[t._t("footer")],2):t._e()])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},540:function(t,e,r){"use strict";var n=r(530);r.n(n).a},541:function(t,e,r){(e=r(29)(!1)).push([t.i,".ui-code .CodeMirror-cursor{height:16px!important}.ui-code .CodeMirror-line,.ui-code .CodeMirror-line *{font:16px monospace!important;line-height:16px!important}.ui-code .CodeMirror{height:auto}.CodeMirror-hscrollbar::-webkit-scrollbar{width:8px;height:8px}.CodeMirror-hscrollbar::-webkit-scrollbar-track{background:transparent}.CodeMirror-hscrollbar::-webkit-scrollbar-thumb{background:#999;border-radius:6px}",""]),t.exports=e},542:function(t,e,r){"use strict";r.r(e);var n=r(563),o=r.n(n),l=(r(565),r(566),r(567),r(559),r(560),r(561),r(558),{components:{codemirror:o.a.codemirror},props:{value:{default:""},mode:{default:"htmlmixed"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},computed:{compOptions:function(){var t=this.props.mode;return"html"==t&&(t="htmlmixed"),{tabSize:4,mode:t,theme:"bespin",lineNumbers:!0,lineWrapping:!1,line:!0}}},data:function(){var data={};return data.props=Object.assign({},this.$props),data},methods:{emit:function(){this.$emit("input",this.props.value)}},mounted:function(){}}),c=(r(540),r(12)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-code bg-dark"},[r("codemirror",{attrs:{options:t.compOptions},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}})],1)}),[],!1,null,null,null);e.default=component.exports},551:function(t,e,r){"use strict";var n=r(533);r.n(n).a},552:function(t,e,r){(e=r(29)(!1)).push([t.i,".ui-table *{transition:all .3s ease}.ui-table table tbody td{vertical-align:middle}.ui-table-actions{position:relative;z-index:2}.ui-table-actions>.btn-group{position:absolute;top:-15px;right:0}.ui-table-actions-hidden{white-space:nowrap;opacity:0;visibility:hidden}.ui-table-actions .btn{margin-left:5px!important;border-radius:5px!important}.ui-table table tbody tr:hover .ui-table-actions-hidden{opacity:1;visibility:visible}.ui-table-fixed-header{overflow-y:scroll}.ui-table-fixed-header thead th{position:-webkit-sticky;position:sticky;top:0;background:#f5f5f5;z-index:3}",""]),t.exports=e},553:function(t,e,r){"use strict";var n=r(534);r.n(n).a},554:function(t,e,r){(e=r(29)(!1)).push([t.i,".ui-pagination-btn{width:30px;height:30px;margin:0 2px;padding:4px 0 0;border-radius:50%}.ui-pagination-btn-active{background:#ddd}.ui-pagination-scroll{white-space:nowrap;overflow:auto;padding-bottom:3px}.ui-pagination-scroll::-webkit-scrollbar{height:4px}.ui-pagination-scroll::-webkit-scrollbar-thumb{background:#ccc;cursor:pointer}",""]),t.exports=e},556:function(t,e,r){"use strict";r.r(e);var n={props:{fixedHeader:{default:!0},select:{default:!1},loading:{default:!1},maxHeight:{default:"auto"},current_page:{default:1},from:{default:0},to:{default:0},last_page:{default:0},per_page:{default:0},total:{default:0},value:{default:function(){return[]}},data:{default:function(){return[]}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{toggleSelect:function(t){for(var i in this.props.value)if(this.props.value[i]==t.item)return this.props.value.splice(i,1),void this.$emit("input",this.props.value);this.props.value.push(t.item),this.$emit("input",this.props.value)},toggleSelectAll:function(t){this.$el.querySelectorAll("input[type=checkbox]").forEach((function(e){t!=e&&(e.checked=t.checked,e.dispatchEvent(new Event("change")))}))},isSelected:function(t){for(var i in this.props.value)if(this.props.value[i]==t.item)return!0;return!1},getHeaders:function(){var t=this;this.headers=[],this.$el.querySelectorAll("table thead th").forEach((function(e){t.headers.push({text:e.innerText,width:e.getAttribute("width")})}))},onPaginationChange:function(t){this.props.current_page=t.current_page,this.$emit("update:current_page",this.props.current_page),this.$emit("paginate",t.current_page)}},computed:{compData:function(){return this.props.data.map((function(t,e){var r=t.id;return"number"==typeof r&&"string"==typeof r||(r=e),{_id:r,item:t}}))}},data:function(){var data={headers:[]};return data.props=Object.assign({},this.$props),data},mounted:function(){this.getHeaders()}},o=(r(551),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-table"},[r("div",{staticStyle:{overflow:"auto"},style:{maxHeight:t.props.maxHeight}},[r("table",{staticClass:"table table-borderless table-striped bg-white shadow-sm m-0",class:{"table-hover":t.props.data.length>0,"ui-table-fixed-header":t.props.fixedHeader}},[r("thead",[r("tr",[t.select?r("th",{attrs:{width:"10px"}},[r("input",{attrs:{type:"checkbox"},on:{change:function(e){return t.toggleSelectAll(e.target)}}})]):t._e(),t._v(" "),t._t("header",[r("th",[t._v(" ")])]),t._v(" "),r("th",[t._v(" ")])],2)]),t._v(" "),r("tbody",[r("tr",[r("td",{staticClass:"p-0",attrs:{colspan:t.headers.length}},[t._t("loading",[r("div",{staticStyle:{height:"5px",position:"relative"}},[t.props.loading?r("div",{staticClass:"progress rounded-0",staticStyle:{height:"100%"}},[r("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})]):t._e()])])],2)]),t._v(" "),0!=t.props.data.length||t.props.loading?t._e():[r("tr",[r("td",{attrs:{colspan:t.headers.length}},[t._t("empty",[t._v("Nenhum item carregado")])],2)])],t._v(" "),t._l(t.compData,(function(i){return r("tr",{key:i._id},[t.select?r("td",[r("input",{attrs:{type:"checkbox"},domProps:{checked:t.isSelected(i)},on:{change:function(e){return t.toggleSelect(i)}}})]):t._e(),t._v(" "),t._t("item",[r("td",[r("pre",[t._v(t._s(i._id))])])],{item:i.item}),t._v(" "),r("td",{attrs:{width:"50px"}},[r("div",{staticClass:"ui-table-actions"},[r("div",{staticClass:"btn-group btn-group-sm"},[r("div",{staticClass:"btn-group btn-group-sm ui-table-actions-hidden"},[t._t("actions",[t._v(" ")],{item:i.item})],2),t._v(" "),t._m(0,!0)])])])],2)}))],2)])]),t._v(" "),r("div",{staticClass:"bg-white"},[r("div",{staticClass:"row no-gutters align-items-center"},[r("div",{staticClass:"col-12 col-md-8 p-2"},[r("ui-pagination",t._b({on:{change:function(e){return t.onPaginationChange(e)}}},"ui-pagination",t.props,!1))],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 p-2 text-md-right"},[t._v("\r\n                Página "+t._s(t.props.current_page)+"/"+t._s(t.props.last_page)+"\r\n                  •  \r\n                "+t._s(t.props.total)+" Itens\r\n            ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn d-md-none",attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-fw fa-plus"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiPagination:r(557).default})},557:function(t,e,r){"use strict";r.r(e);var n={props:{current_page:{default:1},from:{default:0},to:{default:0},last_page:{default:0},per_page:{default:0},total:{default:0}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{setPage:function(t){"+"==t?t=this.props.current_page+1:"-"==t&&(t=this.props.current_page-1),this.props.current_page=t,this.$emit("change",this.props)},onWheel:function(t){t.preventDefault(),(t.target.classList.contains("ui-pagination-scroll")?t.target:t.target.parentNode).scrollLeft+=t.deltaY/2}},data:function(){return{props:Object.assign({},this.$props)}}},o=(r(553),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.props.last_page>1?r("div",{staticClass:"ui-pagination"},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"pr-1"},[r("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":1==t.props.current_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(1)}}},[r("i",{staticClass:"fa fa-fw fa-angle-double-left"})])]),t._v(" "),r("div",{staticClass:"pr-1"},[r("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":1==t.props.current_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage("-")}}},[r("i",{staticClass:"fa fa-fw fa-angle-left"})])]),t._v(" "),r("div",{staticClass:"text-center ui-pagination-scroll",on:{wheel:function(e){return t.onWheel(e)}}},t._l(t.props.last_page,(function(p){return r("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==p},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(p)}}},[t._v("\r\n                "+t._s(p)+"\r\n            ")])})),0),t._v(" "),r("div",{staticClass:"pl-1"},[r("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==t.props.last_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage("+")}}},[r("i",{staticClass:"fa fa-fw fa-angle-right"})])]),t._v(" "),r("div",{staticClass:"pl-1"},[r("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==t.props.last_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(t.props.last_page)}}},[r("i",{staticClass:"fa fa-fw fa-angle-double-right"})])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},578:function(t,e,r){"use strict";r.r(e);var n={props:{label:{default:""},help:{default:""},error:{default:""}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group row no-gutters"},[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[r("div",[t._v(t._s(t.label))]),t._v(" "),t.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:t._s(t.help)}}):t._e()]),t._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[t._t("default"),t._v(" "),t.error?r("small",{staticClass:"d-block text-danger mt-1 mx-1"},[t._v(t._s(t.error))]):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},717:function(t,e,r){"use strict";r.r(e);var n={props:{value:Object,error:[Object,Boolean]},data:function(){return{loading:0,emailTemplates:{data:[]},emailTemplateEdit:!1}},methods:{getEmailTemplates:function(){var t=this;this.loading++,this.$axios.get("/api/email/search").then((function(e){t.loading--,t.emailTemplates=e.data||{}}))}},mounted:function(){this.getEmailTemplates()}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ui-table",t._b({attrs:{loading:t.loading},scopedSlots:t._u([{key:"header",fn:function(){return[r("th",[t._v("ID")]),t._v(" "),r("th",[t._v("Assunto")])]},proxy:!0},{key:"item",fn:function(e){var n=e.item;return[r("td",[t._v(t._s(n.name))]),t._v(" "),r("td",[t._v(t._s(n.subject))])]}},{key:"actions",fn:function(e){var n=e.item;return[r("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:;"},on:{click:function(e){t.emailTemplateEdit=n}}},[r("i",{staticClass:"fas fa-pen"})])]}}])},"ui-table",t.emailTemplates,!1)),t._v(" "),r("ui-form",{attrs:{method:"post",action:"/api/email/save"},scopedSlots:t._u([{key:"default",fn:function(e){e.loading,e.error,e.success;return[r("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Editar")]},proxy:!0},{key:"body",fn:function(){return[r("ui-field",{attrs:{label:"Assunto"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.emailTemplateEdit.subject,expression:"emailTemplateEdit.subject"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.emailTemplateEdit.subject},on:{input:function(e){e.target.composing||t.$set(t.emailTemplateEdit,"subject",e.target.value)}}})]),t._v(" "),r("ui-code",{model:{value:t.emailTemplateEdit.body,callback:function(e){t.$set(t.emailTemplateEdit,"body",e)},expression:"emailTemplateEdit.body"}}),t._v(" "),r("div",t._l(t.emailTemplateEdit.params,(function(p){return r("div",{staticClass:"badge badge-success"},[t._v(t._s(p))])})),0)]},proxy:!0},{key:"footer",fn:function(){return[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\r\n                    Salvar\r\n                ")])]},proxy:!0}],null,!0),model:{value:t.emailTemplateEdit,callback:function(e){t.emailTemplateEdit=e},expression:"emailTemplateEdit"}})]}}]),model:{value:t.emailTemplateEdit,callback:function(e){t.emailTemplateEdit=e},expression:"emailTemplateEdit"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiTable:r(556).default,UiField:r(578).default,UiCode:r(542).default,UiModal:r(539).default,UiForm:r(531).default})}}]);