(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,n,e){},11:function(t,n,e){"use strict";e.r(n);var o=e(4),c=e.n(o),r=e(3),s=e(1),a=e(0),i=function(t){var n=t.goods;return Object(a.jsx)("ul",{children:n.map((function(t){return Object(a.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function u(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}e(10);var d=function(){var t=Object(s.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=Object(s.useState)(""),d=Object(r.a)(c,2),l=d[0],b=d[1];return Object(s.useEffect)((function(){"all"===l&&u().then((function(t){return o(t)})),"sort"===l&&u().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){return o(t)})),"red"===l&&u().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return o(t)}))}),[l]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(a.jsx)("button",{className:"btn",type:"button","data-cy":"all-button",onClick:function(){return b("all")},children:"Load all goods"}),Object(a.jsx)("button",{className:"btn",type:"button","data-cy":"first-five-button",onClick:function(){return b("sort")},children:"Load 5 first goods"}),Object(a.jsx)("button",{className:"btn",type:"button","data-cy":"red-button",onClick:function(){return b("red")},children:"Load red goods"}),Object(a.jsx)(i,{goods:e})]})};c.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.ee8dfdfb.chunk.js.map