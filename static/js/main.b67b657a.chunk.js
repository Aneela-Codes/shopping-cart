(this.webpackJsonpadd=this.webpackJsonpadd||[]).push([[0],{12:function(t,e,i){},13:function(t,e,i){},14:function(t,e,i){},36:function(t,e,i){"use strict";i.r(e);var a=i(2),c=i.n(a),n=i(5),r=i.n(n),s=(i(12),i(13),i(1)),j=i(7),o=(i(14),i(6)),u=i(0),d=function(t){var e=t.title,i=t.description,c=t.price,n=t.img,r=t.quantity,s=t.id,j=Object(a.useContext)(x),o=j.RemoveItem,d=j.quantityINC,l=j.quantityDEC;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"items-info",children:[Object(u.jsx)("div",{className:"product-img",children:Object(u.jsx)("img",{src:n,alt:""})}),Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h2",{children:e}),Object(u.jsxs)("p",{children:[i," "]})]}),Object(u.jsxs)("div",{className:"add-minus-quantity",children:[Object(u.jsx)("i",{className:"fas fa-minus minus",onClick:function(){return l(s)}}),Object(u.jsx)("input",{type:"text",name:"",placeholder:r,id:""}),Object(u.jsx)("i",{className:"fas fa-plus add",onClick:function(){return d(s)}})]}),Object(u.jsx)("div",{className:"price",children:Object(u.jsx)("h3",{children:c})}),Object(u.jsx)("div",{className:"remove-item",children:Object(u.jsx)("i",{className:"fas fa-trash-alt remove",onClick:function(){return o(s)}})})]}),Object(u.jsx)("hr",{})]})},l=function(){var t=Object(a.useContext)(x),e=t.item,i=t.clearCart,c=t.totalItems,n=t.totalAmount;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{children:[Object(u.jsxs)("div",{className:"cart-total",children:[Object(u.jsxs)("h3",{children:["Cart Total: ",Object(u.jsxs)("span",{children:[" ",n," rs"]})]}),Object(u.jsx)("button",{children:"check out"}),Object(u.jsx)("button",{className:"btn-clear",onClick:i,children:"Clear Cart"})]}),Object(u.jsxs)("div",{className:"cart-icon",children:[Object(u.jsx)("img",{src:"../Images/cart.png",alt:""}),Object(u.jsx)("p",{children:c})]})]}),Object(u.jsxs)("section",{className:"main-cart-section",children:[Object(u.jsxs)("p",{className:"total-items",children:["You have ",Object(u.jsx)("span",{className:"total-items-count",children:c})," items in shopping cart"]}),Object(u.jsx)("div",{className:"cart-items",children:Object(u.jsx)("div",{className:"cart-items-container container",children:Object(u.jsx)(o.Scrollbars,{children:e.map((function(t){return Object(u.jsx)(d,Object(s.a)({},t),t.id)}))})})})]})]})},m=i.p+"static/media/cheese2.51b9a7c2.jpg",p=i.p+"static/media/paneer.f1ca2b36.jpg",b=i.p+"static/media/paneer1.e4ad2f78.jpg",O=i.p+"static/media/coffee1.1a0e7ea4.jpg",f=[{id:1,title:"Cheese",description:"Fresh Cheese",price:2500,img:m,quantity:1},{id:2,title:"Cheese",description:"white in color",price:300,img:p,quantity:1},{id:3,title:"Desi Ghee",description:"Fresh and natural ghee",price:3500,img:i.p+"static/media/desi ghee.1481c9bb.jpg",quantity:1},{id:4,title:"Paneer",description:"Best paneer",price:1500,img:b,quantity:1},{id:5,title:"Coffee",description:"Black coffee beans",price:2500,img:O,quantity:1},{id:6,title:"Sugar",description:"Desi Sugar",price:3500,img:i.p+"static/media/sugar.0600fff9.jpg",quantity:1},{id:7,title:"Sabzi",description:"Fresh vegetables",price:1500,img:i.p+"static/media/sabzi2.106936e2.jpg",quantity:1},{id:8,title:"Pasta",description:"Imported Pasta",price:90500,img:i.p+"static/media/pasta2.9025e7c4.jpg",quantity:1},{id:9,title:"Flour",description:"Home-made aata - flour",price:2500,img:i.p+"static/media/flour.855299a9.jpg",quantity:1}],h=function(t,e){if("REMOVE_ITEM"===e.type)return Object(s.a)(Object(s.a)({},t),{},{item:t.item.filter((function(t){return t.id!==e.payLoad}))});if("CLEAR_ALL"===e.type)return Object(s.a)(Object(s.a)({},t),{},{item:[]});if("INCREMENT"===e.type){var i=t.item.map((function(t){return t.id===e.payLoad?Object(s.a)(Object(s.a)({},t),{},{quantity:t.quantity+1}):t}));return Object(s.a)(Object(s.a)({},t),{},{item:i})}if("DECREMENT"===e.type){var a=t.item.map((function(t){return t.id===e.payLoad?Object(s.a)(Object(s.a)({},t),{},{quantity:t.quantity-1}):t})).filter((function(t){return 0!==t.quantity}));return Object(s.a)(Object(s.a)({},t),{},{item:a})}if("GET_TOTAL"===e.type){var c=t.item.reduce((function(t,e){var i=e.price,a=e.quantity,c=i*a;return t.totalAmount+=c,t.totalItems+=a,t}),{totalItems:0,totalAmount:0}),n=c.totalItems,r=c.totalAmount;return Object(s.a)(Object(s.a)({},t),{},{totalItems:n,totalAmount:r})}return t},x=Object(a.createContext)(),g={item:f,totalAmount:0,totalItems:0},y=function(){var t=Object(a.useReducer)(h,g),e=Object(j.a)(t,2),i=e[0],c=e[1];return Object(a.useEffect)((function(){c({type:"GET_TOTAL"})}),[i.item]),Object(u.jsx)("div",{className:"container-fluid cart_container",children:Object(u.jsx)(x.Provider,{value:Object(s.a)(Object(s.a)({},i),{},{RemoveItem:function(t){return c({type:"REMOVE_ITEM",payLoad:t})},clearCart:function(){return c({type:"CLEAR_ALL"})},quantityINC:function(t){return c({type:"INCREMENT",payLoad:t})},quantityDEC:function(t){return c({type:"DECREMENT",payLoad:t})}}),children:Object(u.jsx)(l,{})})})};var v=function(){return Object(u.jsx)(y,{})},C=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(e){var i=e.getCLS,a=e.getFID,c=e.getFCP,n=e.getLCP,r=e.getTTFB;i(t),a(t),c(t),n(t),r(t)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.b67b657a.chunk.js.map