!function(c){function t(t){for(var n,e,r=t[0],o=t[1],a=t[2],i=0,u=[];i<r.length;i++)e=r[i],f[e]&&u.push(f[e][0]),f[e]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(c[n]=o[n]);for(s&&s(t);u.length;)u.shift()();return l.push.apply(l,a||[]),p()}function p(){for(var t,n=0;n<l.length;n++){for(var e=l[n],r=!0,o=1;o<e.length;o++){var a=e[o];0!==f[a]&&(r=!1)}r&&(l.splice(n--,1),t=i(i.s=e[0]))}return t}var e={},f={1:0},l=[];function i(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return c[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=c,i.c=e,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="dist";var n=window.webpackJsonp=window.webpackJsonp||[],r=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var s=r;l.push([26,0]),p()}({10:function(t,n,e){"use strict";var r=e(0),o=e(3),a=e(5),i=e.n(a),u=e(6),c={name:"Footer",computed:{currentYear:function(){return(new Date).getFullYear().toString()}}},p=e(1);var f=function(t){e(7)},l=Object(p.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("p",{staticClass:"footer-text"},[t._v("\n      © 2015-"+t._s(t.currentYear)+" Hiroto-K\n    ")])])])},[],!1,f,"data-v-97c9c4a4",null).exports;e(15);r.a.use(o.b),o.a.localize("ja",i.a),r.a.use(u.a),r.a.component("page-footer",l)},26:function(t,n,e){"use strict";e.r(n);var r=e(0);e(10);new r.a({el:"#app",template:'\n    <b-container>\n      <b-jumbotron>\n        <h1>404 Not Found</h1>\n        <hr>\n        <p class="lead">Page not found. Back to <a href="/">Top Page</a>.</p>      \n      </b-jumbotron>\n      <page-footer></page-footer>\n    </b-container>\n  '})},7:function(t,n,e){var r=e(8);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(11).default)("286664ca",r,!0,{})},8:function(t,n,e){(t.exports=e(9)(!1)).push([t.i,"\nhtml[data-v-97c9c4a4], body[data-v-97c9c4a4] {\n  height: 100%;\n}\n#footer[data-v-97c9c4a4] {\n  margin-bottom: 10px;\n  height: 60px;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  background-color: #f5f5f5;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 0px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.footer-text[data-v-97c9c4a4] {\n  margin: 20px 0;\n  line-height: 60px;\n}\n",""])}});