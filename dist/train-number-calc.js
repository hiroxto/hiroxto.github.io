!function(u){function n(n){for(var t,e,r=n[0],a=n[1],i=n[2],o=0,s=[];o<r.length;o++)e=r[o],l[e]&&s.push(l[e][0]),l[e]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(u[t]=a[t]);for(f&&f(n);s.length;)s.shift()();return p.push.apply(p,i||[]),c()}function c(){for(var n,t=0;t<p.length;t++){for(var e=p[t],r=!0,a=1;a<e.length;a++){var i=e[a];0!==l[i]&&(r=!1)}r&&(p.splice(t--,1),n=o(o.s=e[0]))}return n}var e={},l={4:0},p=[];function o(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return u[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=u,o.c=e,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="dist";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=n,t=t.slice();for(var a=0;a<t.length;a++)n(t[a]);var f=r;p.push([50,0]),c()}({11:function(n,t){var e,r,a,i,o,s;e=window,r=document,a="script",i="ga",e.GoogleAnalyticsObject=i,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,o=r.createElement(a),s=r.getElementsByTagName(a)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(o,s),ga("create","UA-73752623-2","auto"),ga("send","pageview")},3:function(n,t,e){var r=e(4);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(7).default)("5585a372",r,!0,{})},4:function(n,t,e){(n.exports=e(5)(!1)).push([n.i,"\nhtml[data-v-99128a60], body[data-v-99128a60] {\n  height: 100%;\n}\n#footer[data-v-99128a60] {\n  margin-bottom: 10px;\n  height: 60px;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  background-color: #f5f5f5;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 0px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.footer-text[data-v-99128a60] {\n  margin: 20px 0;\n  line-height: 60px;\n}\n",""])},45:function(n,t,e){var r=e(46);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(7).default)("62268342",r,!0,{})},46:function(n,t,e){(n.exports=e(5)(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},50:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e(12),i={name:"TrainNumberCalc",data:function(){return{trainNumber:null,trainType:null}},computed:{hasErrors:function(){return this.errors.has("freightNumber")},errorMessage:function(){return this.errors.first("freightNumber")},inputClass:function(){return this.hasErrors?"is-invalid":"is-valid"},splitNumber:function(){return this.trainNumber.toString().padStart(4,"0").split("").map(function(n){return parseInt(n)})},isSpecial:function(){return 6<=this.splitNumber[0]},isFreightSpecial:function(){return 8<=this.splitNumber[0]}},methods:{validateRules:function(){return{numeric:!0,between:{min:1,max:9999}}},changeInput:function(){var t=this;this.$validator.validate().then(function(n){n&&""!==t.trainNumber?t.updateType():t.trainType=null})},updateType:function(){this.trainType=this.getType()},getType:function(){return this.splitNumber[2]<5?this.getPassengerType():this.getFreightType()},getPassengerType:function(){var n=this.splitNumber;return 0===n[1]?"".concat(this.isSpecial?"臨":"","特急客"):(0!==n[0]||0!==n[1])&&n[2]<=1?"".concat(this.isSpecial?"臨":"","急客"):0!==n[1]&&2<=n[2]?"".concat(this.isSpecial?"臨":"","客"):"不明"},getFreightType:function(){var n=this.splitNumber,t="";if(0===n[1]){var e=n[2]<=6?"A":"B";t="".concat(this.isFreightSpecial?"臨":"","高速貨").concat(e)}else t=(n[0]<=1||this.isFreightSpecial)&&5===n[2]?"".concat(this.isFreightSpecial?"臨":"","高速貨C"):6<=n[2]&&n[2]<=8?"".concat(this.isFreightSpecial?"臨":"","専貨A"):9===n[2]?"".concat(this.isFreightSpecial?"臨":"","専貨B"):"不明";return t}}},o=e(2);var s=function(n){e(45)},u=Object(o.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"jumbotron"},[e("div",{staticClass:"container"},[e("h1",[t._v("列車番号から種別計算")]),t._v(" "),e("p",{staticClass:"lead"},[t._v("1〜4ケタの列番から列車種別を計算。")]),t._v(" "),null!==t.trainType?e("div",[e("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v("\n          "+t._s(t.trainType)+"\n        ")])]):t._e(),t._v(" "),e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"freightNumber"}},[t._v("列車番号 (1〜4ケタの数字)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.trainNumber,expression:"trainNumber",modifiers:{number:!0}},{name:"validate",rawName:"v-validate",value:t.validateRules(),expression:"validateRules()"}],staticClass:"form-control",class:t.inputClass,attrs:{"data-vv-as":"列車番号",type:"text",name:"freightNumber",id:"freightNumber",placeholder:"列車番号"},domProps:{value:t.trainNumber},on:{keyup:t.changeInput,keydown:t.changeInput,input:function(n){n.target.composing||(t.trainNumber=t._n(n.target.value))},blur:function(n){t.$forceUpdate()}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.hasErrors,expression:"hasErrors"}],staticClass:"invalid-feedback"},[t._v("\n            "+t._s(t.errorMessage)+"\n          ")])])])])]),t._v(" "),e("page-footer")],1)},[],!1,s,"data-v-2076a40c",null).exports,c=e(20),l=e.n(c);e(6),e(11);r.a.use(a.b),a.a.localize("ja",l.a),new r.a({el:"#app",render:function(n){return n(u)}})},6:function(n,t,e){"use strict";var r=e(0),a={name:"Footer",data:function(){return{sinceYear:"2015"}},computed:{currentYear:function(){return(new Date).getFullYear().toString()}}},i=e(2);var o=function(n){e(3)},s=Object(i.a)(a,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("p",{staticClass:"footer-text"},[n._v("© "+n._s(n.sinceYear)+"-"+n._s(n.currentYear)+" Hiroto-K")])])])},[],!1,o,"data-v-99128a60",null).exports;e(9);r.a.component("page-footer",s)}});