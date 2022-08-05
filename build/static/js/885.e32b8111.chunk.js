"use strict";(self.webpackChunkelectronic_e_shop_v1=self.webpackChunkelectronic_e_shop_v1||[]).push([[885],{5212:function(n,e,t){var r=t(1413),s=t(4925),c=t(2791),i=t(6907),a=t(184),l=["children","title","meta"],u=(0,c.forwardRef)((function(n,e){var t=n.children,c=n.title,u=void 0===c?"":c,o=(n.meta,(0,s.Z)(n,l));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.ql,{children:(0,a.jsx)("title",{children:"".concat(u," | electronic online shop")})}),(0,a.jsx)("div",(0,r.Z)((0,r.Z)({ref:e},o),{},{children:t})),(0,a.jsx)("div",{className:"h-16 w-full md:hidden "})]})}));e.Z=u},1252:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(184);function s(){return(0,r.jsx)("div",{className:"animate-pulse grid w-full",children:(0,r.jsx)("div",{className:"grid gap-2",children:[1,2,3].map((function(n,e){return(0,r.jsxs)("div",{className:"flex gap-2 w-full items-center",children:[(0,r.jsxs)("div",{className:"flex gap-2 w-40",children:[(0,r.jsx)("div",{className:"w-16 h-16 bg-base-300"}),(0,r.jsxs)("div",{className:"flex flex-col w-24 justify-center",children:[(0,r.jsx)("label",{className:"w-24 h-6 bg-base-300 mb-2"}),(0,r.jsx)("label",{className:"w-18 h-6 bg-base-300"})]})]}),(0,r.jsx)("label",{className:"bg-base-300 w-1/4 h-6"}),(0,r.jsxs)("div",{className:"flex flex-col w-24 justify-center",children:[(0,r.jsx)("label",{className:"w-24 h-6 bg-base-300 mb-2"}),(0,r.jsx)("label",{className:"w-18 h-6 bg-base-300"})]}),(0,r.jsx)("label",{className:"bg-base-300 w-1/4 h-6"})]},e)}))})})}},3625:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(2791),s=t(9434);function c(){var n=(0,s.v9)((function(n){return n.setting})).language,e=(0,s.v9)((function(n){return n.shopping})).currencyRates;return(0,r.useMemo)((function(){return{currency:(null===n||void 0===n?void 0:n.currency)||"$",paypalCurrency:"en"===(null===n||void 0===n?void 0:n.key)?"USD":"ch"===(null===n||void 0===n?void 0:n.key)?"CNY":"MNT",time:"en"===(null===n||void 0===n?void 0:n.key)?1:"ch"===(null===n||void 0===n?void 0:n.key)?null===e||void 0===e?void 0:e.rmb:null===e||void 0===e?void 0:e.mnt}}),[n,e])}},7885:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r=t(7762),s=t(4165),c=t(5861),i=t(9439),a=t(2711),l=t(1105),u=t(2791),o=t(9434),d=t(6871),f=t(3504),h=t(7087),p=t(2146),x=t(1252),v=t(3180),m=t(4333),j=t(5678),w=t(5212),b=t(3625),g=t(8040),Z=t(937),N=t(184);function y(){var n=(0,b.Z)(),e=n.currency,t=n.time,y=(0,o.v9)((function(n){return n.basket})).favorites,k=(0,u.useState)([]),S=(0,i.Z)(k,2),C=S[0],I=S[1],_=(0,d.s0)(),W=(0,u.useState)(!1),z=(0,i.Z)(W,2),D=z[0],J=z[1],L=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return I([]),n.next=3,(0,g.DV)();case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return I(C.filter((function(n){return n.id!==e.id}))),n.next=3,(0,g.PM)(e.id);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,u.useEffect)((function(){var n,e=[],t=(0,r.Z)(y);try{for(t.s();!(n=t.n()).done;){var s=n.value;e.push(s)}}catch(c){t.e(c)}finally{t.f()}e.length>0&&(J(!0),(0,Z.DS)(Z.$5.product.getProductsByIds,{ids:e}).then((function(n){J(!1),200===n.status&&n.data&&I(n.data)})).catch((function(n){J(!1)})))}),[]),(0,N.jsxs)(w.Z,{title:"Favorites",className:"flex flex-col w-full gap-2 sm:gap-4 ",children:[(0,N.jsx)("div",{className:"breadcrumbs  bg-base-300 absolute w-full left-0 px-6 overflow-x-hidden mt-24",children:(0,N.jsxs)("ul",{children:[(0,N.jsx)("li",{children:(0,N.jsx)(f.rU,{to:"/",children:(0,l.t)("words.home")})}),(0,N.jsx)("li",{children:(0,N.jsx)(f.rU,{to:"/shopping",children:(0,l.t)("words.shopping")})}),(0,N.jsx)("li",{children:(0,N.jsx)("label",{children:(0,l.t)("shopping.favorite")})})]})}),(0,N.jsx)("div",{className:"mt-40 w-full"}),(0,N.jsx)("div",{className:"container flex-col flex gap-2 sm:gap-4",children:(0,N.jsxs)("div",{className:"flex flex-col w-full p-4 gap-4 items-center",children:[(0,N.jsxs)("label",{className:"font-bold",children:[(0,l.t)("shopping.favorites"),"\xa0(",null===y||void 0===y?void 0:y.length," ",(0,l.t)("words.items"),")"]}),0===y.length&&(0,N.jsxs)("div",{className:"w-full sm:w-3/4 flex flex-col gap-4 items-center",children:[(0,N.jsx)("img",{className:"w-full max-w-sm h-full",alt:"empty",src:"/assets/empty_cart.svg"}),(0,N.jsx)("label",{className:"text-lg",children:"No Product yet"})]}),D&&(0,N.jsx)(x.Z,{}),!D&&(null===y||void 0===y?void 0:y.length)>0&&(0,N.jsx)("div",{className:"w-full overflow-auto",children:(0,N.jsxs)("table",{className:"table w-full",children:[(0,N.jsx)("thead",{children:(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{children:(0,l.t)("shopping.product")}),(0,N.jsx)("td",{children:(0,l.t)("shopping.price")}),(0,N.jsx)("td",{children:(0,l.t)("shopping.amount")}),(0,N.jsx)("td",{})]})}),(0,N.jsx)("tbody",{children:C.map((function(n,r){return(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"cursor-pointer",onClick:function(){return _("/product-detail/".concat(n.id),{replace:!0})},children:(0,N.jsxs)("div",{className:"flex gap-2 w-72 items-center",children:[(0,N.jsx)(h.LazyLoadImage,{src:"".concat((0,m.G)(null===n||void 0===n?void 0:n.image)),wrapperClassName:"w-24",effect:"blur",alt:"".concat(r)}),(0,N.jsxs)("div",{className:"flex flex-col w-48",children:[(0,N.jsx)(v.Z,{maxLine:1,text:null===n||void 0===n?void 0:n.title}),(0,N.jsx)(p.Z,{size:"sm",readOnly:!0,value:(0,m.S)(null===n||void 0===n?void 0:n.reviews)})]})]})}),(0,N.jsx)("td",{children:(0,j.QB)((null===n||void 0===n?void 0:n.price)*t,e)}),(0,N.jsx)("td",{children:(0,j.jn)(n.quantity)}),(0,N.jsx)("td",{children:(0,N.jsx)("button",{className:"btn btn-ghost p-0 btn-circle",onClick:function(){return M(n)},children:(0,N.jsx)(a.JO,{icon:"akar-icons:trash-can",width:20})})})]},r)}))}),(0,N.jsx)("tfoot",{children:(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{colSpan:2}),(0,N.jsx)("td",{className:"text-lg font-bold text-accent ",children:(0,j.jn)(null===y||void 0===y?void 0:y.length)}),(0,N.jsx)("td",{children:(0,N.jsx)("button",{className:"btn btn-ghost p-0 btn-circle",onClick:L,children:(0,N.jsx)(a.JO,{icon:"akar-icons:trash-can",width:20})})})]})})]})})]})})]})}},8040:function(n,e,t){t.d(e,{DV:function(){return a},PM:function(){return f},fm:function(){return u},oz:function(){return o},yj:function(){return l},zl:function(){return d}});var r=t(4165),s=t(5861),c=t(3826),i=t(7566),a=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,i.WI)((0,c.V1)());case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,i.WI)((0,c.RT)());case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,i.WI)((0,c.L)(e)),n.abrupt("return",!0);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,i.WI)((0,c.wB)(e)),n.abrupt("return",!0);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,i.WI)((0,c.Er)(e)),n.abrupt("return",!0);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,i.WI)((0,c.QJ)(e)),n.abrupt("return",!0);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4333:function(n,e,t){t.d(e,{G:function(){return s},S:function(){return c}});var r=t(937);function s(n){try{var e=JSON.parse(n)[0].name.replace("products/","");return"".concat(r.S$.ezo).concat(e)}catch(t){return console.log(t),"".concat(r.S$.image,"product.jpg")}}function c(n){return(null===n||void 0===n?void 0:n.reduce((function(n,e){return n+e.rating}),0))/(null===n||void 0===n?void 0:n.length)}}}]);
//# sourceMappingURL=885.e32b8111.chunk.js.map