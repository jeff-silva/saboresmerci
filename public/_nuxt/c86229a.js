(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{777:function(t,o,e){"use strict";e.r(o);var n={data:function(){return{posts:{data:[]}}},methods:{getPost:function(){var t=this;this.$axios.get("/api/app/posts?post_type=produto").then((function(o){t.posts=o.data}))}},mounted:function(){this.getPost()}},r=e(14),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("a",{staticClass:"btn btn-primary",attrs:{href:""}},[t._v("Recarregar")]),t._v(" "),e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"list-group list-group-flush"},t._l(t.posts.data,(function(p){return e("div",{staticClass:"list-group-item d-flex"},[e("div",[t._v(t._s(p.post_title))])])})),0)]),t._v(" "),e("div",{staticClass:"col-6 border"},[e("pre",[t._v(t._s(t.$data))])])])])}),[],!1,null,null,null);o.default=component.exports}}]);