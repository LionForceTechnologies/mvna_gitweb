(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[10],{575:function(e,t,a){"use strict";a.r(t);var n=a(24),c=a(0),i=a.n(c),o=a(10),d=a(19),r=a(540),l=a(581),u=(a(190),a(58));t.default=function(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),s=(a[0],a[1],Object(c.useState)(0)),m=Object(n.a)(s,2),b=(m[0],m[1],Object(c.useState)(0)),j=Object(n.a)(b,2),p=j[0],O=j[1],f=Object(o.e)((function(e){return e.crud.data})),E=Object(o.d)();function g(e){E(Object(u.I)(e.target.getAttribute("data-id")))}Object(c.useEffect)((function(){0===p&&E(Object(u.z)()),O(1)}));var k=[];return f.length>0&&(k=f.map((function(e,t){var a="/";return"HOME"==e.menu.toUpperCase()&&(a="/web"),{menu:e.menu,action:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(d.b,{to:"/admin/editor".concat(e.url.split(" ").join(""),"?id=").concat(e.id),onClick:g,"data-id":e.id},"Go to Editor"),i.a.createElement(d.b,{to:"".concat(a.split(" ").join(""),"?id=").concat(e.id),style:{marginLeft:"15px"},"data-id":e.id},"Go to Page"))),index:e.id,key:e.id}}))),i.a.createElement("div",null,i.a.createElement(r.a,{title:"Pages"},i.a.createElement(l.a,{className:"gx-table-responsive",columns:[{title:"Menu Name",dataIndex:"menu",key:"menu"},{title:"Action",dataIndex:"action",key:"action"}],dataSource:k})))}}}]);
//# sourceMappingURL=10.e0bb4294.chunk.js.map