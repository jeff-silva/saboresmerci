(window.webpackJsonp=window.webpackJsonp||[]).push([[131,40],{786:function(t,n,e){"use strict";e.r(n);var o={name:"ui-laravel-pagination",props:{value:{default:""},range:{default:3}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(link){this.props.value.current_page=link.page,this.$emit("change",link)}},computed:{compLinks:function(){var t=this.props.value,n=[],e=t.total&&t.per_page?Math.ceil(parseInt(t.total)/parseInt(t.per_page)):0;if(e<=1)return[];var o=Math.max(1,(t.current_page||0)-this.range),r=Math.min(e,o+2*this.range);n.push({page:1,active:1==t.current_page,label:'<i class="fas fa-chevron-left"></i>'});for(var p=o;p<=r;p++)n.push({page:p,active:p==t.current_page,label:p});return n.push({page:e,active:e==t.current_page,label:'<i class="fas fa-chevron-right"></i>'}),n}},data:function(){return{props:Object.assign({},this.$props)}}},r=e(13),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ui-laravel-pagination"},[e("ul",{staticClass:"pagination m-0"},t._l(t.compLinks,(function(n,i){return e("li",{key:i,staticClass:"page-item",class:{active:n.active}},[e("a",{staticClass:"page-link",attrs:{href:"javascript:;"},domProps:{innerHTML:t._s(n.label)},on:{click:function(e){return t.emit(n)}}})])})),0)])}),[],!1,null,null,null);n.default=component.exports},870:function(t,n,e){"use strict";e.r(n);var o={layout:"admin",middleware:"auth",methods:{notificationsRead:function(t){t.seen=1,this.$axios.post("/api/user/notification/".concat(t.id,"/"))},notificationsLoad:function(){var t=this;this.notifications.loading=!0,this.$axios.get("/api/user/notifications/",{params:this.notifications.params}).then((function(n){t.notifications.resp=n.data,t.notifications.loading=!1}))}},data:function(){return{notifications:{loading:!1,params:{seen:null,perpage:10,page:1},resp:{}}}},mounted:function(){this.notificationsLoad()}},r=e(13),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-5"},[e("div",{staticClass:"bg-white shadow-sm"},[t._l(t.notifications.resp.data,(function(n){return e("div",{key:n.id,staticClass:"d-flex align-items-center p-1",class:{"bg-gray-100":n.id==t.$route.params.id}},[e("div",[e("div",{style:"width:40px; height:40px; background:url("+n.image+") center center no-repeat; background-size:cover;"})]),t._v(" "),e("div",{staticClass:"flex-grow-1 px-2",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("div",[e("nuxt-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:"/user/notifications/"+n.id+"/"},on:{click:function(e){return t.notificationsRead(n)}}},[e("i",{staticClass:"fas fa-caret-right"})])],1)])})),t._v(" "),e("div",{staticClass:"p-1"},[e("ui-laravel-pagination",{on:{change:function(n){t.notifications.params.page=n.page,t.notificationsLoad()}},model:{value:t.notifications.resp,callback:function(n){t.$set(t.notifications,"resp",n)},expression:"notifications.resp"}})],1)],2)]),t._v(" "),e("div",{staticClass:"col-12 col-md-7"},t._l(t.notifications.resp.data,(function(n){return n.id==t.$route.params.id?e("div",{key:n.id},[e("nuxt-child",{staticClass:"p-3 bg-white shadow-sm",attrs:{value:n,"keep-alive":""}})],1):t._e()})),0)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{UiLaravelPagination:e(786).default})}}]);