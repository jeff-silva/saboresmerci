(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{895:function(t,e,r){"use strict";r.r(e);r(173);var n={props:{value:{default:!1},placeholder:{default:"Buscar usuário"},showDropdown:{default:!1}},data:function(){return{loading:!1,searchParams:{search:""},search:{data:[]},user:!1,props:Object.assign({},this.$props)}},methods:{setValue:function(t){this.user=t,this.props.value=!!t&&t.id,this.$emit("input",this.props.value)},searchUsers:function(){var t=this;this.loading=!0,this.$axios.get("/api/user/search",{params:this.searchParams}).then((function(e){t.search=e.data||[],t.loading=!1}))},dropdownTest:function(){var t=this;setTimeout((function(){t.props.showDropdown=t.$el.contains(document.activeElement)}),100)}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative"},on:{click:function(e){return t.dropdownTest()}}},[r("div",{staticClass:"input-group form-control p-0"},[t.$slots.prepend&&t.$scopedSlots.prepend?r("div",{staticClass:"input-group-prepend"},[t._t("prepend",null,{user:t.user,value:t.props.value})],2):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchParams.search,expression:"searchParams.search"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:t.user?t.user.name:t.placeholder},domProps:{value:t.searchParams.search},on:{blur:function(e){return t.dropdownTest()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchUsers()},input:function(e){e.target.composing||t.$set(t.searchParams,"search",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-append"},[t.user?t._e():r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.searchUsers()}}},[t.loading?r("i",{staticClass:"fa fa-fw fa-spin fa-spinner"}):r("i",{staticClass:"fas fa-search"})])])]),t._v(" "),r("div",{staticClass:"input-group-append"},[t.user?r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.setValue(!1)}}},[r("i",{staticClass:"fas fa-times"})])]):t._e()]),t._v(" "),t.$slots.append&&t.$scopedSlots.append?r("div",{staticClass:"input-group-append"},[t._t("append",null,{user:t.user,value:t.props.value})],2):t._e()]),t._v(" "),t.props.showDropdown?r("div",{staticClass:"list-group bg-white shadow-sm",staticStyle:{position:"absolute",top:"100%",left:"0px",width:"100%","min-width":"300px"}},[t.loading||0!=t.search.data.length?t._e():r("div",{staticClass:"list-group-item"},[t._v("Nenhum resultado encontrado")]),t._v(" "),t._l(t.search.data,(function(u){return r("a",{staticClass:"list-group-item",attrs:{href:"javascript:void(0);"},on:{click:function(e){t.setValue(u),t.searchParams.search=""}}},[t._v(t._s(u.name))])}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);