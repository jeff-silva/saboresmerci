(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{661:function(t,e,l){"use strict";l.r(e);var r={components:{TimeAgo:l(583).a},props:{value:{default:function(){return[]}},folder:{default:""}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{files:[],props:Object.assign({},this.$props)}},methods:{listFiles:function(){var t=this,e={folder:this.props.folder};this.$axios.get("/api/file/list",{params:e}).then((function(e){t.files=e.data.files}))},toggle:function(t){if(!t.is_folder){var e=Array.isArray(this.props.value)?this.props.value:[],l=e.indexOf(t);l>=0?e.splice(l,1):e.push(t),this.props.value=e,this.$emit("input",this.props.value)}},selected:function(t){return this.props.value.indexOf(t)>=0}},mounted:function(){this.listFiles()}},o=l(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"ui-file"},[l("div",{staticClass:"row no-gutters"},[l("div",{staticClass:"col-12 col-md-3 col-lg-2 border bg-light"},[l("a",{staticClass:"d-block py-1 px-2",attrs:{href:"javascript:;"},on:{click:function(e){t.props.folder="",t.listFiles()}}},[l("i",{staticClass:"fa fa-fw fa-folder"}),t._v("\r\n                ..\r\n            ")]),t._v(" "),t._l(t.files,(function(e){return e.is_folder?l("a",{key:e.name,staticClass:"d-block py-1 px-2",attrs:{href:"javascript:;"},on:{click:function(l){t.props.folder=e.name,t.listFiles()}}},[e.is_folder?l("i",{staticClass:"fa fa-fw fa-folder"}):t._e(),t._v(" "),e.is_folder?t._e():l("i",{staticClass:"fa fa-fw fa-file"}),t._v("\r\n                "+t._s(e.name)+"\r\n            ")]):t._e()}))],2),t._v(" "),l("div",{staticClass:"col-12 col-md-9 col-lg-10 border border-left-0"},[l("div",{staticClass:"row no-gutters"},t._l(t.files,(function(e){return e.is_folder?t._e():l("div",{key:e.name,staticClass:"col-6 col-md-3 col-lg-2 p-2"},[l("div",{class:{"border border-primary":t.selected(e)},on:{click:function(l){return t.toggle(e)}}},[l("div",[e.is_image?l("img",{staticStyle:{width:"100%",height:"100px","object-fit":"cover"},attrs:{src:e.url,alt:""}}):e.is_folder?l("div",{staticClass:"text-center p-3"},[l("i",{staticClass:"fa fa-fw fa-folder",staticStyle:{"font-size":"68px"}})]):l("div",{staticClass:"text-center p-3"},[l("i",{staticClass:"fa fa-fw fa-file",staticStyle:{"font-size":"68px"}})])]),t._v(" "),l("div",{staticClass:"text-center bg-dark p-1"},[t._v(t._s(e.name))])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);