(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{575:function(e,t,o){"use strict";o.r(t);o(36);var r={components:{TimeAgo:o(583).a},props:{value:{default:0},locale:{default:"pt_BR"},refresh:{default:60},long:{default:!0}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{validDatetime:function(e){return(e||"").replace("T"," ")}},data:function(){return{props:Object.assign({},this.$props)}}},l=o(14),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ui-timeago",attrs:{title:e._f("datetime")(e.props.value)}},[e.props.value?o("time-ago",{attrs:{datetime:e.validDatetime(e.props.value),refresh:e.props.refresh,locale:e.props.locale,long:e.props.long}}):o("div",[e._v(" ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);