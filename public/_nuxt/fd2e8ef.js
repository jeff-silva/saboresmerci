(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{529:function(e,o,t){"use strict";t.r(o);var r={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e,this.props)}}},data:function(){return{props:Object.assign({},this.$props)}}},n=t(12),component=Object(n.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"form-control p-0 bg-white"},[t("div",{staticClass:"input-group"},["checkbox"===e.props.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{input:function(o){return e.$emit("input",e.props.value)},change:function(o){var t=e.props.value,r=o.target,n=!!r.checked;if(Array.isArray(t)){var c=e._i(t,null);r.checked?c<0&&e.$set(e.props,"value",t.concat([null])):c>-1&&e.$set(e.props,"value",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.props,"value",n)}}}):"radio"===e.props.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{input:function(o){return e.$emit("input",e.props.value)},change:function(o){return e.$set(e.props,"value",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:e.props.type},domProps:{value:e.props.value},on:{input:[function(o){o.target.composing||e.$set(e.props,"value",o.target.value)},function(o){return e.$emit("input",e.props.value)}]}}),e._v(" "),e.props.toggleShow?t("div",{staticClass:"input-group-append"},[t("div",{staticClass:"input-group-btn"},[t("div",{staticClass:"btn",on:{click:function(o){e.props.type="text"==e.props.type?"password":"text"}}},[t("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==e.props.type}})])])]):e._e()]),e._v(" "),e.props.meter?t("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:e.props.value,callback:function(o){e.$set(e.props,"value",o)},expression:"props.value"}}):e._e()],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{UiPasswordMeter:t(532).default})},531:function(e,o,t){"use strict";t.r(o);var r={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:"api"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var e=this,o=this.$axios[this.method],t="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},o(this.action,t).then((function(o){e.loading="",e.responseSuccess=o.data,e.$emit("success",e.responseSuccess)})).catch((function(o){for(var i in e.loading="",e.responseErrorMessage=o.response.data.message||"Erro",e.responseErrorFields=o.response.data.fields||{},e.responseErrorFields)Array.isArray(e.responseErrorFields[i])&&(e.responseErrorFields[i]=e.responseErrorFields[i].join("<br>"));e.$emit("error",e.responseErrorFields)}))}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},n=t(12),component=Object(n.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("form",{staticClass:"ui-form",attrs:{method:e.method,action:e.action},on:{submit:function(o){return o.preventDefault(),e.submit()}}},[e.responseSuccess&&(e.$slots.success||e.$scopedSlots.success)?t("div",{staticClass:"alert alert-success"},[e._t("success",null,{response:e.responseSuccess})],2):e._e(),e._v(" "),e.responseErrorMessage?e._t("error",[e.responseErrorMessage?t("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.responseErrorMessage)}}):e._e()],{errorMessage:e.responseErrorMessage,fields:e.responseErrorFields}):e._e(),e._v(" "),e._t("default",null,{loading:e.loading,error:e.responseErrorFields,errorMessage:e.responseErrorMessage,success:e.responseSuccess})],2)}),[],!1,null,null,null);o.default=component.exports},532:function(e,o,t){"use strict";t.r(o);var r={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{meter:function(){var e=this.props.value,o=0,t="danger";if(e){for(var r=new Object,i=0;i<e.length;i++)r[e[i]]=(r[e[i]]||0)+1,o+=5/r[e[i]];var n={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},c=0;for(var m in n)c+=1==n[m]?1:0;o+=10*(c-1),(o=parseInt(o))>=70?t="success":o>=40&&(t="primary")}return{score:o,class:t}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=t(12),component=Object(n.a)(r,(function(){var e=this.$createElement,o=this._self._c||e;return o("div",[o("div",{staticClass:"progress",staticStyle:{height:"5px"}},[o("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+this.meter.class,style:"width:"+this.meter.score+"%;"})])])}),[],!1,null,null,null);o.default=component.exports},538:function(e,o,t){var content=t(574);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(30).default)("9ad8599e",content,!0,{sourceMap:!1})},572:function(e,o,t){var content=t(621);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(30).default)("d8c97870",content,!0,{sourceMap:!1})},573:function(e,o,t){"use strict";var r=t(538);t.n(r).a},574:function(e,o,t){(o=t(29)(!1)).push([e.i,".ui-actions-fixed{position:fixed;bottom:0;left:0;width:100%;z-index:999;box-shadow:0 -3px 3px -2px rgb(0 0 0/10%)!important}.ui-actions .d-flex>*{flex-grow:1}.ui-actions .btn{border-radius:0!important}",""]),e.exports=o},578:function(e,o,t){"use strict";t.r(o);var r={props:{label:{default:""},help:{default:""},error:{default:""}}},n=t(12),component=Object(n.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"form-group row no-gutters"},[t("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[t("div",[e._v(e._s(e.label))]),e._v(" "),e.help?t("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e()]),e._v(" "),t("div",{staticClass:"col-12 col-md-8 col-lg-9"},[e._t("default"),e._v(" "),e.error?t("small",{staticClass:"d-block text-danger mt-1 mx-1"},[e._v(e._s(e.error))]):e._e()],2)])}),[],!1,null,null,null);o.default=component.exports},579:function(e,o,t){"use strict";t.r(o);t(573);var r=t(12),component=Object(r.a)({},(function(){var e=this.$createElement,o=this._self._c||e;return o("div",{staticClass:"ui-actions"},[o("br"),o("br"),this._v(" "),o("div",{staticClass:"ui-actions-fixed bg-white text-center text-md-right"},[o("div",{staticClass:"d-flex d-md-block p-md-1"},[this._t("default")],2)])])}),[],!1,null,null,null);o.default=component.exports},597:function(e,o,t){"use strict";t.r(o);t(72),t(99);var r={props:{value:{default:""},country:{default:"BR"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value)},getCode:function(){for(var i in this.codes){var code=this.codes[i];if((this.props.value||"").includes(code.code))return code}for(var e in this.codes){var o=this.codes[e];if(o.country==this.props.country)return o}return this.codes[0]}},mounted:function(){this.code=this.getCode()},data:function(){var data={};return data.props=Object.assign({},this.$props),data.code=!1,data.codes=[{code:"+55",country:"BR",countryName:"Brasil",masks:["+55 (##) ####-####","+55 (##) #####-####"]},{code:"+1",country:"US",countryName:"USA",masks:["+1 (###) ###-####"]},{code:"+213",country:"DZ",countryName:"Algeria",masks:["+213-##-###-####"]},{code:"+376",country:"AD",countryName:"Andorra",masks:["+376-###-###"]},{code:"+244",country:"AO",countryName:"Angola",masks:["+244 (###) ###-###"]},{code:"+1264",country:"AI",countryName:"Anguilla",masks:["+1 (264) ###-####"]},{code:"+1268",country:"AG",countryName:"Antigua & Barbuda",masks:["+1 (268) ###-####"]},{code:"+54",country:"AR",countryName:"Argentina",masks:["+54 (###) ###-####"]},{code:"+374",country:"AM",countryName:"Armenia",masks:["+374-##-###-###"]},{code:"+297",country:"AW",countryName:"Aruba",masks:["+297-###-####"]},{code:"+61",country:"AU",countryName:"Australia",masks:["+61-#-####-####"]},{code:"+43",country:"AT",countryName:"Austria",masks:["+43 (###) ###-####"]},{code:"+994",country:"AZ",countryName:"Azerbaijan",masks:["+994-##-###-##-##"]},{code:"+1242",country:"BS",countryName:"Bahamas",masks:["+1 (242) ###-####"]},{code:"+973",country:"BH",countryName:"Bahrain",masks:["+973-####-####"]},{code:"+880",country:"BD",countryName:"Bangladesh",masks:["+880-##-###-###"]},{code:"+1246",country:"BB",countryName:"Barbados",masks:["+1 (246) ###-####"]},{code:"+375",country:"BY",countryName:"Belarus",masks:["+375 (##) ###-##-##"]},{code:"+32",country:"BE",countryName:"Belgium",masks:["+32 (###) ###-###"]},{code:"+501",country:"BZ",countryName:"Belize",masks:["+501-###-####"]},{code:"+229",country:"BJ",countryName:"Benin",masks:["+229-##-##-####"]},{code:"+1441",country:"BM",countryName:"Bermuda",masks:["+1 (441) ###-####"]},{code:"+975",country:"BT",countryName:"Bhutan",masks:["+975-17-###-###","+975-#-###-###"]},{code:"+591",country:"BO",countryName:"Bolivia",masks:["+591-#-###-####"]},{code:"+387",country:"BA",countryName:"Bosnia Herzegovina",masks:["+387-##-#####","+387-##-####"]},{code:"+267",country:"BW",countryName:"Botswana",masks:["+267-##-###-###"]},{code:"+673",country:"BN",countryName:"Brunei",masks:["+673-###-####"]},{code:"+359",country:"BG",countryName:"Bulgaria",masks:["+359 (###) ###-###"]},{code:"+226",country:"BF",countryName:"Burkina Faso",masks:["+226-##-##-####"]},{code:"+257",country:"BI",countryName:"Burundi",masks:["+257-##-##-####"]},{code:"+855",country:"KH",countryName:"Cambodia",masks:["+855-##-###-###"]},{code:"+237",country:"CM",countryName:"Cameroon",masks:["+237-####-####"]},{code:"+1",country:"CA",countryName:"Canada",masks:["+1(###)###-####"]},{code:"+238",country:"CV",countryName:"Cape Verde Islands",masks:["+238(###)##-##"]},{code:"+1345",country:"KY",countryName:"Cayman Islands",masks:["+1(345)###-####"]},{code:"+236",country:"CF",countryName:"Central African Republic",masks:["+236-##-##-####"]},{code:"+56",country:"CL",countryName:"Chile",masks:["+56-#-####-####"]},{code:"+86",country:"CN",countryName:"China",masks:["+86(###)####-####","+86(###)####-###","+86-##-#####-#####"]},{code:"+57",country:"CO",countryName:"Colombia",masks:["+57(###)###-####"]},{code:"+269",country:"KM",countryName:"Comoros",masks:["+269-##-#####"]},{code:"+242",country:"CG",countryName:"Congo",masks:["+242-##-###-####"]},{code:"+682",country:"CK",countryName:"Cook Islands",masks:["+682-##-###"]},{code:"+506",country:"CR",countryName:"Costa Rica",masks:["+506-####-####"]},{code:"+385",country:"HR",countryName:"Croatia",masks:["+385-##-###-###"]},{code:"+53",country:"CU",countryName:"Cuba",masks:["+53-#-###-####"]},{code:"+90392",country:"CY",countryName:"Cyprus North",masks:["+357-##-###-###"]},{code:"+357",country:"CY",countryName:"Cyprus South",masks:["+357-##-###-###"]},{code:"+42",country:"CZ",countryName:"Czech Republic",masks:["+420(###)###-###"]},{code:"+45",country:"DK",countryName:"Denmark",masks:["+45-##-##-##-##"]},{code:"+253",country:"DJ",countryName:"Djibouti",masks:["+253-##-##-##-##"]},{code:"+1809",country:"DM",countryName:"Dominica",masks:["+1(767)###-####"]},{code:"+1809",country:"DO",countryName:"Dominican Republic",masks:["+1(809)###-####","+1(829)###-####","+1(849)###-####"]},{code:"+593",country:"EC",countryName:"Ecuador",masks:["+593-##-###-####","+593-#-###-####"]},{code:"+20",country:"EG",countryName:"Egypt",masks:["+20(###)###-####"]},{code:"+503",country:"SV",countryName:"El Salvador",masks:["+503-##-##-####"]},{code:"+240",country:"GQ",countryName:"Equatorial Guinea",masks:["+240-##-###-####"]},{code:"+291",country:"ER",countryName:"Eritrea",masks:["+291-#-###-###"]},{code:"+372",country:"EE",countryName:"Estonia",masks:["+372-####-####","+372-###-####"]},{code:"+251",country:"ET",countryName:"Ethiopia",masks:["+251-##-###-####"]},{code:"+500",country:"FK",countryName:"Falkland Islands",masks:["+500-#####"]},{code:"+298",country:"FO",countryName:"Faroe Islands",masks:["+298-###-###"]},{code:"+679",country:"FJ",countryName:"Fiji",masks:["+679-##-#####"]},{code:"+358",country:"FI",countryName:"Finland",masks:["+358(###)###-##-##"]},{code:"+33",country:"FR",countryName:"France",masks:["+262-#####-####","+33(###)###-###","+508-##-####","+590(###)###-###"]},{code:"+594",country:"GF",countryName:"French Guiana",masks:["+594-#####-####"]},{code:"+689",country:"PF",countryName:"French Polynesia",masks:["+689-##-##-##"]},{code:"+241",country:"GA",countryName:"Gabon",masks:["+241-#-##-##-##"]},{code:"+220",country:"GM",countryName:"Gambia",masks:["+220(###)##-##"]},{code:"+7880",country:"GE",countryName:"Georgia",masks:["+995(###)###-###"]},{code:"+49",country:"DE",countryName:"Germany",masks:["+49(####)###-####","+49(###)###-####","+49(###)##-####","+49(###)##-###","+49(###)##-##","+49-###-###"]},{code:"+233",country:"GH",countryName:"Ghana",masks:["+233(###)###-###"]},{code:"+350",country:"GI",countryName:"Gibraltar",masks:["+350-###-#####"]},{code:"+30",country:"GR",countryName:"Greece",masks:["+30(###)###-####"]},{code:"+299",country:"GL",countryName:"Greenland",masks:["+299-##-##-##"]},{code:"+1473",country:"GD",countryName:"Grenada",masks:["+1(473)###-####"]},{code:"+590",country:"GP",countryName:"Guadeloupe",masks:[]},{code:"+671",country:"GU",countryName:"Guam",masks:["+1(671)###-####"]},{code:"+502",country:"GT",countryName:"Guatemala",masks:["+502-#-###-####"]},{code:"+224",country:"GN",countryName:"Guinea",masks:["+224-##-###-###"]},{code:"+245",country:"GW",countryName:"Guinea - Bissau",masks:["+245-#-######"]},{code:"+592",country:"GY",countryName:"Guyana",masks:["+592-###-####"]},{code:"+509",country:"HT",countryName:"Haiti",masks:["+509-##-##-####"]},{code:"+504",country:"HN",countryName:"Honduras",masks:["+504-####-####"]},{code:"+852",country:"HK",countryName:"Hong Kong",masks:["+852-####-####"]},{code:"+36",country:"HU",countryName:"Hungary",masks:["+36(###)###-###"]},{code:"+354",country:"IS",countryName:"Iceland",masks:["+354-###-####"]},{code:"+91",country:"IN",countryName:"India",masks:["+91(####)###-###"]},{code:"+62",country:"ID",countryName:"Indonesia",masks:["+62(8##)###-####","+62-##-###-##","+62-##-###-###","+62-##-###-####","+62(8##)###-###","+62(8##)###-##-###"]},{code:"+98",country:"IR",countryName:"Iran",masks:["+98(###)###-####"]},{code:"+964",country:"IQ",countryName:"Iraq",masks:["+964(###)###-####"]},{code:"+353",country:"IE",countryName:"Ireland",masks:["+353(###)###-###"]},{code:"+972",country:"IL",countryName:"Israel",masks:["+972-5#-###-####","+972-#-###-####"]},{code:"+39",country:"IT",countryName:"Italy",masks:["+39(###)####-###"]},{code:"+1876",country:"JM",countryName:"Jamaica",masks:["+1(876)###-####"]},{code:"+81",country:"JP",countryName:"Japan",masks:["+81-##-####-####","+81(###)###-###"]},{code:"+962",country:"JO",countryName:"Jordan",masks:["+962-#-####-####"]},{code:"+7",country:"KZ",countryName:"Kazakhstan",masks:["+7(6##)###-##-##","+7(7##)###-##-##"]},{code:"+254",country:"KE",countryName:"Kenya",masks:["+254-###-######"]},{code:"+686",country:"KI",countryName:"Kiribati",masks:["+686-##-###"]},{code:"+850",country:"KP",countryName:"Korea North",masks:["+850-191-###-####","+850-##-###-###","+850-###-####-###","+850-###-###","+850-####-####","+850-####-#############"]},{code:"+82",country:"KR",countryName:"Korea South",masks:["+82-##-###-####"]},{code:"+965",country:"KW",countryName:"Kuwait",masks:["+965-####-####"]},{code:"+996",country:"KG",countryName:"Kyrgyzstan",masks:["+996(###)###-###"]},{code:"+856",country:"LA",countryName:"Laos",masks:["+856(20##)###-###","+856-##-###-###"]},{code:"+371",country:"LV",countryName:"Latvia",masks:["+371-##-###-###"]},{code:"+961",country:"LB",countryName:"Lebanon",masks:["+961-##-###-###","+961-#-###-###"]},{code:"+266",country:"LS",countryName:"Lesotho",masks:["+266-#-###-####"]},{code:"+231",country:"LR",countryName:"Liberia",masks:["+231-##-###-###"]},{code:"+218",country:"LY",countryName:"Libya",masks:["+218-##-###-###","+218-21-###-####"]},{code:"+417",country:"LI",countryName:"Liechtenstein",masks:["+423(###)###-####"]},{code:"+370",country:"LT",countryName:"Lithuania",masks:["+370(###)##-###"]},{code:"+352",country:"LU",countryName:"Luxembourg",masks:["+352(###)###-###"]},{code:"+853",country:"MO",countryName:"Macao",masks:["+853-####-####"]},{code:"+389",country:"MK",countryName:"Macedonia",masks:["+389-##-###-###"]},{code:"+261",country:"MG",countryName:"Madagascar",masks:["+261-##-##-#####"]},{code:"+265",country:"MW",countryName:"Malawi",masks:["+265-1-###-###","+265-#-####-####"]},{code:"+60",country:"MY",countryName:"Malaysia",masks:["+60-##-###-####","+60(###)###-###","+60-##-###-###","+60-#-###-###"]},{code:"+960",country:"MV",countryName:"Maldives",masks:["+960-###-####"]},{code:"+223",country:"ML",countryName:"Mali",masks:["+223-##-##-####"]},{code:"+356",country:"MT",countryName:"Malta",masks:["+356-####-####"]},{code:"+692",country:"MH",countryName:"Marshall Islands",masks:["+692-###-####"]},{code:"+596",country:"MQ",countryName:"Martinique",masks:["+596(###)##-##-##"]},{code:"+222",country:"MR",countryName:"Mauritania",masks:["+222-##-##-####"]},{code:"+269",country:"YT",countryName:"Mayotte",masks:[]},{code:"+52",country:"MX",countryName:"Mexico",masks:["+52(###)###-####","+52-##-##-####"]},{code:"+691",country:"FM",countryName:"Micronesia",masks:["+691-###-####"]},{code:"+373",country:"MD",countryName:"Moldova",masks:["+373-####-####"]},{code:"+377",country:"MC",countryName:"Monaco",masks:["+377(###)###-###","+377-##-###-###"]},{code:"+976",country:"MN",countryName:"Mongolia",masks:["+976-##-##-####"]},{code:"+1664",country:"MS",countryName:"Montserrat",masks:["+1(664)###-####"]},{code:"+212",country:"MA",countryName:"Morocco",masks:["+212-##-####-###"]},{code:"+258",country:"MZ",countryName:"Mozambique",masks:["+258-##-###-###"]},{code:"+95",country:"MN",countryName:"Myanmar",masks:["+976-##-##-####"]},{code:"+264",country:"NA",countryName:"Namibia",masks:["+264-##-###-####"]},{code:"+674",country:"NR",countryName:"Nauru",masks:["+674-###-####"]},{code:"+977",country:"NP",countryName:"Nepal",masks:["+977-##-###-###"]},{code:"+31",country:"NL",countryName:"Netherlands",masks:["+31-##-###-####"]},{code:"+687",country:"NC",countryName:"New Caledonia",masks:["+687-##-####"]},{code:"+64",country:"NZ",countryName:"New Zealand",masks:["+64(###)###-###","+64-##-###-###","+64(###)###-####"]},{code:"+505",country:"NI",countryName:"Nicaragua",masks:["+505-####-####"]},{code:"+227",country:"NE",countryName:"Niger",masks:["+227-##-##-####"]},{code:"+234",country:"NG",countryName:"Nigeria",masks:["+234(###)###-####","+234-##-###-###","+234-##-###-##","+234(###)###-####"]},{code:"+683",country:"NU",countryName:"Niue",masks:["+683-####"]},{code:"+672",country:"NF",countryName:"Norfolk Islands",masks:["+672-3##-###"]},{code:"+670",country:"NP",countryName:"Northern Marianas",masks:["+977-##-###-###"]},{code:"+47",country:"NO",countryName:"Norway",masks:["+47(###)##-###"]},{code:"+968",country:"OM",countryName:"Oman",masks:["+968-##-###-###"]},{code:"+680",country:"PW",countryName:"Palau",masks:["+680-###-####"]},{code:"+507",country:"PA",countryName:"Panama",masks:["+507-###-####"]},{code:"+675",country:"PG",countryName:"Papua New Guinea",masks:["+675(###)##-###"]},{code:"+595",country:"PY",countryName:"Paraguay",masks:["+595(###)###-###"]},{code:"+51",country:"PE",countryName:"Peru",masks:["+51(###)###-###"]},{code:"+63",country:"PH",countryName:"Philippines",masks:["+63(###)###-####"]},{code:"+48",country:"PL",countryName:"Poland",masks:["+48(###)###-###"]},{code:"+351",country:"PT",countryName:"Portugal",masks:["+351-##-###-####"]},{code:"+1787",country:"PR",countryName:"Puerto Rico",masks:[]},{code:"+974",country:"QA",countryName:"Qatar",masks:["+974-####-####"]},{code:"+262",country:"RE",countryName:"Reunion",masks:["+262-#####-####"]},{code:"+40",country:"RO",countryName:"Romania",masks:["+40-##-###-####"]},{code:"+7",country:"RU",countryName:"Russia",masks:["+7(###)###-##-##"]},{code:"+250",country:"RW",countryName:"Rwanda",masks:["+250(###)###-###"]},{code:"+378",country:"SM",countryName:"San Marino",masks:["+378-####-######"]},{code:"+239",country:"ST",countryName:"Sao Tome & Principe",masks:["+239-##-#####"]},{code:"+966",country:"SA",countryName:"Saudi Arabia",masks:["+966-5-####-####","+966-#-###-####"]},{code:"+221",country:"SN",countryName:"Senegal",masks:["+221-##-###-####"]},{code:"+381",country:"CS",countryName:"Serbia",masks:[]},{code:"+248",country:"SC",countryName:"Seychelles",masks:["+248-#-###-###"]},{code:"+232",country:"SL",countryName:"Sierra Leone",masks:["+232-##-######"]},{code:"+65",country:"SG",countryName:"Singapore",masks:["+65-####-####"]},{code:"+421",country:"SK",countryName:"Slovak Republic",masks:["+421(###)###-###"]},{code:"+386",country:"SI",countryName:"Slovenia",masks:["+386-##-###-###"]},{code:"+677",country:"SB",countryName:"Solomon Islands",masks:["+677-###-####","+677-#####"]},{code:"+252",country:"SO",countryName:"Somalia",masks:["+252-##-###-###","+252-#-###-###","+252-#-###-###"]},{code:"+27",country:"ZA",countryName:"South Africa",masks:["+27-##-###-####"]},{code:"+34",country:"ES",countryName:"Spain",masks:["+34(###)###-###"]},{code:"+94",country:"LK",countryName:"Sri Lanka",masks:["+94-##-###-####"]},{code:"+290",country:"SH",countryName:"St. Helena",masks:["+290-####","+290-####"]},{code:"+1869",country:"KN",countryName:"St. Kitts",masks:["+1(869)###-####"]},{code:"+1758",country:"SC",countryName:"St. Lucia",masks:["+248-#-###-###"]},{code:"+249",country:"SD",countryName:"Sudan",masks:["+249-##-###-####"]},{code:"+597",country:"SR",countryName:"Suriname",masks:["+597-###-####","+597-###-###"]},{code:"+268",country:"SZ",countryName:"Swaziland",masks:["+268-##-##-####"]},{code:"+46",country:"SE",countryName:"Sweden",masks:["+46-##-###-####"]},{code:"+41",country:"CH",countryName:"Switzerland",masks:["+41-##-###-####"]},{code:"+963",country:"SI",countryName:"Syria",masks:["+386-##-###-###"]},{code:"+886",country:"TW",countryName:"Taiwan",masks:["+886-#-####-####","+886-####-####"]},{code:"+7",country:"TJ",countryName:"Tajikstan",masks:["+992-##-###-####"]},{code:"+66",country:"TH",countryName:"Thailand",masks:["+66-##-###-####","+66-##-###-###"]},{code:"+228",country:"TG",countryName:"Togo",masks:["+228-##-###-###"]},{code:"+676",country:"TO",countryName:"Tonga",masks:["+676-#####"]},{code:"+1868",country:"TT",countryName:"Trinidad & Tobago",masks:["+1(868)###-####"]},{code:"+216",country:"TN",countryName:"Tunisia",masks:["+216-##-###-###"]},{code:"+90",country:"TR",countryName:"Turkey",masks:["+90(###)###-####"]},{code:"+7",country:"TM",countryName:"Turkmenistan",masks:["+993-#-###-####"]},{code:"+993",country:"TM",countryName:"Turkmenistan",masks:["+993-#-###-####"]},{code:"+1649",country:"TC",countryName:"Turks & Caicos Islands",masks:["+1(649)###-####"]},{code:"+688",country:"TV",countryName:"Tuvalu",masks:["+688-90####","+688-2####"]},{code:"+256",country:"UG",countryName:"Uganda",masks:["+256(###)###-###"]},{code:"+44",country:"GB",countryName:"UK",masks:[]},{code:"+380",country:"UA",countryName:"Ukraine",masks:["+380(##)###-##-##"]},{code:"+971",country:"AE",countryName:"United Arab Emirates",masks:["+971-5#-###-####","+971-#-###-####"]},{code:"+598",country:"UY",countryName:"Uruguay",masks:["+598-#-###-##-##"]},{code:"+1",country:"US",countryName:"USA",masks:["+1(###)###-####"]},{code:"+7",country:"UZ",countryName:"Uzbekistan",masks:["+998-##-###-####"]},{code:"+678",country:"VU",countryName:"Vanuatu",masks:["+678-##-#####","+678-#####"]},{code:"+379",country:"VA",countryName:"Vatican City",masks:["+39-6-698-#####"]},{code:"+58",country:"VE",countryName:"Venezuela",masks:["+58(###)###-####"]},{code:"+84",country:"VN",countryName:"Vietnam",masks:["+84-##-####-###","+84(###)####-###"]},{code:"+84",country:"VG",countryName:"Virgin Islands - British",masks:["+1(284)###-####"]},{code:"+84",country:"VI",countryName:"Virgin Islands - US",masks:["+1(340)###-####"]},{code:"+681",country:"WF",countryName:"Wallis & Futuna",masks:["+681-##-####"]},{code:"+969",country:"YE",countryName:"Yemen (North",masks:["+967-###-###-###","+967-#-###-###","+967-##-###-###"]},{code:"+967",country:"YE",countryName:"Yemen (South",masks:["+967-###-###-###","+967-#-###-###","+967-##-###-###"]},{code:"+260",country:"ZM",countryName:"Zambia",masks:["+260-##-###-####"]},{code:"+263",country:"ZW",countryName:"Zimbabwe",masks:["+263-#-######"]}],data}},n=t(12),component=Object(n.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return e.code?t("div",{staticClass:"ui-phone input-group"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"form-control border-right-0",staticStyle:{"max-width":"130px"},on:{change:[function(o){var t=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.code=o.target.multiple?t:t[0]},function(o){return e.emit()}]}},e._l(e.codes,(function(o){return t("option",{domProps:{value:o}},[e._v(e._s(o.countryName)+" ("+e._s(o.code)+")")])})),0),e._v(" "),t("input",{directives:[{name:"mask",rawName:"v-mask",value:[].concat(e.code.masks||[]),expression:"[...code.masks||[]]"},{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.props.value},on:{keyup:function(o){return e.emit()},change:function(o){return e.emit()},input:function(o){o.target.composing||e.$set(e.props,"value",o.target.value)}}})]):e._e()}),[],!1,null,null,null);o.default=component.exports},620:function(e,o,t){"use strict";var r=t(572);t.n(r).a},621:function(e,o,t){(o=t(29)(!1)).push([e.i,".user-card-content{height:90px;display:flex;align-items:center;justify-content:center}.user-card-actions{display:flex}.user-card-actions .btn{margin:0}.user-card-image{background:50% no-repeat #f5f5f5;background-size:cover;width:100px;height:100px;margin:-50px auto 0;border-radius:50%;border:4px solid #fff;overflow:hidden;display:flex;align-items:center;justify-content:center}.user-card-bg{background-size:cover;background-position:50%;background-repeat:no-repeat;height:200px}.user-card-pattern{--stripe:#f5f5f5;--bg:#eee;background:linear-gradient(135deg,var(--bg) 25%,transparent 0) -50px 0,linear-gradient(225deg,var(--bg) 25%,transparent 0) -50px 0,linear-gradient(315deg,var(--bg) 25%,transparent 0),linear-gradient(45deg,var(--bg) 25%,transparent 0);background-size:100px 100px;background-color:var(--stripe)}",""]),e.exports=o},629:function(e,o,t){"use strict";t.r(o);var r={name:"user-card",props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},data:function(){return{props:Object.assign({},this.$props)}}},n=(t(620),t(12)),component=Object(n.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"user-card bg-white shadow-sm rounded"},[e.props.value.meta.background?t("div",{staticClass:"user-card-bg",style:"background-image:url("+e.props.value.meta.background+");"}):t("div",{staticClass:"user-card-bg user-card-pattern"}),e._v(" "),t("div",{staticClass:"user-card-image shadow-sm",style:"background-image:url("+e.props.value.meta.photo+");"},[e._t("image")],2),e._v(" "),t("div",{staticClass:"user-card-content"},[t("div",[t("div",{staticClass:"text-center font-weight-bold text-uppercase mt-2"},[t("nuxt-link",{attrs:{to:""}},[e._v(e._s(e.props.value.name))])],1),e._v(" "),t("div",{staticClass:"text-center text-muted"},[e._v(e._s(e.props.value.meta.description))]),e._v(" "),t("div",{staticClass:"text-center text-muted"},[e._v(e._s(e.props.value.email))]),e._v(" "),t("div",{staticClass:"pb-4"})])]),e._v(" "),t("div",{staticClass:"btn-group user-card-actions"},[e._t("actions")],2)])}),[],!1,null,null,null);o.default=component.exports},750:function(e,o,t){"use strict";t.r(o);var r={layout:"admin",methods:{userFind:function(){var e=this;this.loading=!0;var o="me"==this.$route.params.id?this.$auth.user.id:this.$route.params.id;this.$axios.get("/api/user/find/".concat(o)).then((function(o){e.loading=!1,e.user=o.data}))},success:function(e){this.$swal("","Dados salvos","success"),e.id==this.$auth.user.id&&location.reload()}},data:function(){return{loading:!1,error:{},user:{}}},mounted:function(){this.userFind()}},n=t(12),component=Object(n.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e.loading?t("div",[e._v("Carregando...")]):e._e(),e._v(" "),e.user.id?t("form",{on:{submit:function(o){return o.preventDefault(),e.userStore()}}},[t("ui-form",{attrs:{method:"post",action:"/api/user/save/"},on:{success:function(o){return e.success(o)}},scopedSlots:e._u([{key:"default",fn:function(o){var r=o.loading;o.success,o.error;return[t("div",{staticClass:"row no-gutters"},[t("div",{staticClass:"col-12 col-md-4 mb-4 pr-3"},[t("user-card",{scopedSlots:e._u([{key:"actions",fn:function(){return[t("a",{staticClass:"btn btn-light",attrs:{href:"javascript:;"},on:{click:function(o){return e.$refs.userPhoto.toggle()}}},[e._v("Foto")]),e._v(" "),t("a",{staticClass:"btn btn-light",attrs:{href:"javascript:;"},on:{click:function(o){return e.$refs.userBackground.toggle()}}},[e._v("Background")])]},proxy:!0}],null,!0),model:{value:e.user,callback:function(o){e.user=o},expression:"user"}})],1),e._v(" "),t("div",{staticClass:"col-12 col-md-8"},[t("ui-field",{attrs:{label:"Nome"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.name},on:{input:function(o){o.target.composing||e.$set(e.user,"name",o.target.value)}}})]),e._v(" "),t("ui-field",{attrs:{label:"E-mail"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.email},on:{input:function(o){o.target.composing||e.$set(e.user,"email",o.target.value)}}})]),e._v(" "),t("ui-field",{attrs:{label:"Descrição"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.description,expression:"user.description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.description},on:{input:function(o){o.target.composing||e.$set(e.user,"description",o.target.value)}}})]),e._v(" "),t("ui-field",{attrs:{label:"Senha"}},[t("div",{staticClass:"row no-gutters"},[t("div",{staticClass:"col-12 col-md-6"},[t("ui-password",{attrs:{placeholder:"Senha"},model:{value:e.user.password,callback:function(o){e.$set(e.user,"password",o)},expression:"user.password"}})],1),e._v(" "),t("div",{staticClass:"col-12 col-md-6 pl-md-2"},[t("ui-password",{attrs:{placeholder:"Repita a senha",meter:!1},model:{value:e.user.password,callback:function(o){e.$set(e.user,"password",o)},expression:"user.password"}})],1)])]),e._v(" "),t("ui-field",{attrs:{label:"Whatsapp"}},[t("ui-phone",{model:{value:e.user.whatsapp,callback:function(o){e.$set(e.user,"whatsapp",o)},expression:"user.whatsapp"}})],1)],1)]),e._v(" "),t("ui-actions",[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t("div",r?[t("span",{domProps:{innerHTML:e._s(r)}}),e._v(" Salvando")]:[t("i",{staticClass:"fas fa-save"}),e._v(" Salvar")])])])]}}],null,!1,1238236523),model:{value:e.user,callback:function(o){e.user=o},expression:"user"}})],1):e._e()])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{UserCard:t(629).default,UiField:t(578).default,UiPassword:t(529).default,UiPhone:t(597).default,UiActions:t(579).default,UiForm:t(531).default})}}]);