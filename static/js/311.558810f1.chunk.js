"use strict";(self.webpackChunkbooks_react_redux=self.webpackChunkbooks_react_redux||[]).push([[311],{1949:(s,t,e)=>{e.r(t),e.d(t,{default:()=>Z});var a=e(5043),c=e(8298),l=e(645),_=e(3216),r=e(4117);const o="styles_Cart_cart__sCSVy",n="styles_Cart_cart__container__HEEcj",i="styles_Cart_cart__buttons__fbxQM",d="styles_Cart_cart__button__fdV8W",m="styles_Cart_cart__box__-Legc",C="styles_Cart_cart__block__u6PPk",h="styles_Cart_cart__buttonsBack__FafN2",y="styles_Cart_cart__totalSum__Sx2WS",x="styles_Cart_cart__emptyBlock__GVnIt",u="styles_Cart_cart__empty__-K57K",j="styles_Cart_img__QVyGL",N="styles_Cart_wrapper__Il4Bg",p="styles_Cart_item1__VRtjF",b="styles_Cart_item2__IPOVe",k="styles_Cart_item3__UpTdJ",f="styles_Cart_item4__6iIIw",g="styles_Cart_item5__67Z0b",v="styles_Cart_item6__U+uav",P="styles_Cart_item7__UNfZU",T="styles_Cart_item8__hUl5m",F="styles_Cart_item9__lpTYk";const B=e.p+"static/media/cart.5a1c3c755c07e59db7d65be6bc8d8bfb.svg",M=e.p+"static/media/bin.68583426fd99d3a76201.png";var S=e(7950);const I="stylesModalCart_modal__backdrop__fMm7a",V="stylesModalCart_modal__content__pY4cd",w="stylesModalCart_modal__giftBox__I85Yz",U="stylesModalCart_gift__yptNn",H="stylesModalCart_modal__ok__vfXF-",R=e.p+"static/media/thanks.f01a28824a1307a6ccfd.jpg";var Y=e(1310),A=e(579);const E=document.querySelector("#modal-root");function G(s){let{onClose:t}=s;(0,Y.A)(t);const e=s=>{s.currentTarget===s.target&&t()};return(0,S.createPortal)((0,A.jsx)("div",{className:I,onClick:e,children:(0,A.jsx)("div",{className:V,children:(0,A.jsxs)("div",{className:w,children:[(0,A.jsx)("img",{src:R,alt:"Gift",className:U}),(0,A.jsx)("button",{className:H,onClick:e,children:"Ok"})]})})}),E)}const Q=s=>{let{goToBack:t,goToHome:e,handleClearCart:c,cart:l,handleRemoveFromCart:_}=s;const{t:S}=(0,r.Bd)(),I=l.reduce(((s,t)=>s+parseFloat(t.totalPrice)),0).toFixed(2),[V,w]=(0,a.useState)(!1);return(0,A.jsxs)("main",{className:o,children:[(0,A.jsxs)("section",{className:n,children:[(0,A.jsxs)("section",{className:i,children:[(0,A.jsxs)("section",{className:h,children:[(0,A.jsx)("button",{type:"button",onClick:()=>t(),className:d,children:S("Back")}),(0,A.jsx)("button",{type:"button",onClick:()=>e(),className:d,children:S("Home")})]}),(0,A.jsx)("section",{children:(0,A.jsx)("button",{type:"button",onClick:()=>{w(!0),c()},className:d,disabled:0===l.length,children:S("Purchase")})})]}),(0,A.jsxs)("ul",{className:m,children:[l.length>0?l.map(((s,t)=>(0,A.jsxs)("li",{className:C,children:[(0,A.jsx)("section",{children:(0,A.jsx)("img",{src:M,alt:S("Remove"),onClick:()=>_(s),className:j})}),(0,A.jsxs)("section",{className:N,children:[(0,A.jsx)("section",{className:p,children:S("Title")}),(0,A.jsx)("section",{className:b,children:S("Price")}),(0,A.jsx)("section",{className:k,children:S("Quantity")}),(0,A.jsx)("section",{className:f,children:S("Total")}),(0,A.jsx)("section",{className:g,children:s.title}),(0,A.jsx)("section",{className:v,children:s.price}),(0,A.jsx)("section",{className:P,children:s.quantity}),(0,A.jsx)("section",{className:T,children:s.totalPrice})]}),(0,A.jsxs)("section",{className:F,children:[S("Total Price"),": $",s.totalPrice]})]},t))):(0,A.jsxs)("section",{className:x,children:[(0,A.jsx)("img",{src:B,alt:S("Cart is empty")}),(0,A.jsx)("p",{className:u,children:S("Your cart is empty...")})]}),l.length>0&&(0,A.jsx)("div",{className:y,children:(0,A.jsxs)("span",{style:{fontFamily:"Montserrat Alternates"},children:[S("Total Sum"),": $",I]})})]})]}),V&&(0,A.jsx)(G,{onClose:()=>{w(!1)}})]})},Z=()=>{const s=(0,c.d4)((s=>s.books.cart))||[],t=(0,c.d4)((s=>s.books.cart.reduce(((s,t)=>s+parseFloat(t.totalPrice)),0))),e=(0,c.wA)(),r=(0,_.Zp)();(0,a.useEffect)((()=>{e((0,l.Fy)())}),[e]);return(0,A.jsx)(Q,{goToBack:()=>{r(-1)},goToHome:()=>{r("/")},handleClearCart:()=>{e((0,l.Pu)())},cart:s,totalPrice:t,handleRemoveFromCart:s=>{e((0,l.sv)(s.id))}})}}}]);
//# sourceMappingURL=311.558810f1.chunk.js.map