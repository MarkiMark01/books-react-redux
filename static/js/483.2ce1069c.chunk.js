"use strict";(self.webpackChunkbooks_react_redux=self.webpackChunkbooks_react_redux||[]).push([[483],{8483:(e,s,o)=>{o.r(s),o.d(s,{default:()=>C});var t=o(5043),l=o(8298),r=o(3216),a=o(645),i=o(1321),n=o(5239),c=o(4117),_=o(4291);const d="stylesBooks_books__nq-O4",k="stylesBooks_books__filter__pBXbE",u="stylesBooks_books__mainContainer__C78Vp",h="stylesBooks_books__container__gfbRX",b="stylesBooks_books__box__a8t07",x="stylesBooks_books__button__STDJc",m="stylesBooks_book__purchase__1ClSN",p="stylesBooks_books__title__o2YKE",f="stylesBooks_books__img__yU0Ih",j="stylesBooks_books__author__sm+0k",y="stylesBooks_books__price__nODHa",B="stylesBooks_books__filterText__K7N3t",v="stylesBooks_books__filterPrice__d40r6",g=(e,s)=>{const[o,l]=(0,t.useState)(e);return(0,t.useEffect)((()=>{const o=setTimeout((()=>{l(e)}),s);return()=>{clearTimeout(o)}}),[e,s]),o};var $=o(579);const N=e=>{let{isLoading:s,error:o,filteredBooks:l,handleView:r,textFilter:a,priceFilter:i,handlePriceFilter:n,handleTextFilter:N}=e;const{t:C}=(0,c.Bd)(),[F,S]=(0,t.useState)(a),w=g(F,400);(0,t.useEffect)((()=>{N({target:{value:w}})}),[w,N]);return(0,$.jsx)("main",{children:(0,$.jsxs)("section",{className:d,children:[(0,$.jsxs)("section",{className:k,children:[(0,$.jsx)("input",{type:"text",placeholder:C("Search by book title"),value:F,onChange:e=>{S(e.target.value)},className:B}),(0,$.jsxs)("select",{value:i,onChange:n,className:v,children:[(0,$.jsx)("option",{value:"All books",children:C("All books")}),(0,$.jsx)("option",{value:"from $0 to $15",children:C("from $0 to $15")}),(0,$.jsx)("option",{value:"from $15 to $30",children:C("from $15 to $30")}),(0,$.jsx)("option",{value:"more than $30",children:C("more than $30")})]})]}),(0,$.jsx)("section",{className:u,children:s?(0,$.jsx)(_.a,{}):o?(0,$.jsxs)("p",{style:{fontSize:"20px"},children:[C("Error"),": ",o]}):(0,$.jsx)("div",{children:l.length>0?(0,$.jsx)("ul",{className:h,children:l.map((e=>(0,$.jsxs)("li",{className:b,children:[(0,$.jsx)("img",{src:e.image,alt:C("Book cover"),className:f}),(0,$.jsx)("p",{className:p,children:e.title}),(0,$.jsx)("p",{className:j,children:e.author}),(0,$.jsxs)("div",{className:m,children:[(0,$.jsxs)("p",{className:y,children:["$",e.price]}),(0,$.jsx)("button",{type:"button",onClick:()=>{r(e)},className:x,children:C("View")})]})]},e.id)))}):(0,$.jsx)("p",{style:{fontSize:"20px"},children:C("Books not found...")})})})]})})},C=()=>{const e=(0,l.d4)((e=>e.books.books)),s=(0,l.d4)((e=>e.books.isLoading)),o=(0,l.d4)((e=>e.books.error)),c=(0,l.wA)(),[_,d]=(0,t.useState)(""),[k,u]=(0,t.useState)("All books"),h=(0,r.Zp)(),b=(0,n.A)(),x=(0,t.useMemo)((()=>e.filter((e=>{var s;const o=parseFloat(e.price);return(null===(s=e.title)||void 0===s?void 0:s.toLowerCase().includes(_.toLowerCase()))&&("All books"===k||"from $0 to $15"===k&&o>=0&&o<=15||"from $15 to $30"===k&&o>15&&o<=30||"more than $30"===k&&o>30)}))),[e,_,k]);return(0,t.useEffect)((()=>{c((0,a.zy)())}),[c]),(0,$.jsx)(N,{isLoading:s,error:o,filteredBooks:x,handleView:e=>{b?(c((0,i.HL)(e)),h("/books/".concat(e.id)),d("")):h("/login")},isLogin:b,textFilter:_,priceFilter:k,handlePriceFilter:e=>{u(e.target.value)},handleTextFilter:e=>{d(e.target.value)}})}}}]);
//# sourceMappingURL=483.2ce1069c.chunk.js.map