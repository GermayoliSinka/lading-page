(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1398:function(e,t,n){Promise.resolve().then(n.bind(n,2194))},2194:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(7437),s=e=>{let{currentPage:t,totalPages:n,onPageChange:s}=e;return(0,r.jsxs)("div",{className:"flex justify-center mt-4",children:[(0,r.jsx)("button",{onClick:()=>s(t-1),disabled:1===t,className:"px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400",children:"Anterior"}),(0,r.jsxs)("span",{className:"px-4 py-2",children:["Pagina ",t," / ",n]}),(0,r.jsx)("button",{onClick:()=>s(t+1),disabled:t===n,className:"px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400",children:"Siguient"})]})},i=n(2265),l=n(7138),a=n(6648),c=e=>{let{id:t,title:n,authors:s,description:i,imageUrl:c,rating:o}=e;return(0,r.jsx)("div",{className:"bg-white p-4 rounded-lg shadow-md flex flex-col",style:{minHeight:"500px"},children:(0,r.jsxs)(l.default,{href:"/book/".concat(t),className:"flex flex-col h-full",children:[(0,r.jsx)("div",{className:"relative w-full",style:{height:"300px"},children:(0,r.jsx)(a.default,{src:c,alt:n,layout:"fill",objectFit:"cover",className:"rounded-md"})}),(0,r.jsxs)("div",{className:"flex flex-col flex-grow p-4",children:[(0,r.jsxs)("div",{className:"relative text-center mb-4",children:[(0,r.jsx)("span",{className:"absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-gray-400"}),(0,r.jsx)("h2",{className:"relative text-lg font-semibold mb-2 mt-2 bg-white inline-block px-2",children:n})]}),(0,r.jsx)("p",{className:"text-sm mb-2 text-gray-600 flex-grow truncated-description",children:i}),(0,r.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,r.jsxs)("p",{className:"font-semibold text-blue-600",children:["Rating: ",o]}),(0,r.jsxs)("p",{className:"text-gray-500 mt-2",children:["Author: ",(0,r.jsx)("span",{className:"text-red-500",children:s})]})]})]})]})})},o=n(8472),d=n(8646),u=n(6290),h=n(3098);function x(){let e=(0,d._)(["\n    position: relative;\n    width: 100%;\n    max-width: 100%;\n    margin: 0 auto;\n    overflow: hidden;\n"]);return x=function(){return e},e}function f(){let e=(0,d._)(["\n    position: relative;\n    width: 100%;\n    height: ","; /* Ajusta la altura del contenedor del carrusel */\n    overflow: hidden;\n"]);return f=function(){return e},e}function g(){let e=(0,d._)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover; /*cubrir el contenedor */\n    display: block;\n"]);return g=function(){return e},e}function m(){let e=(0,d._)(["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    background: rgba(0, 0, 0, 0.5);\n    color: white;\n    padding: 8px 16px;\n    border: none;\n    cursor: pointer;\n    font-size: 18px;\n    ",": 10px;\n    z-index: 1;\n"]);return m=function(){return e},e}function b(){let e=(0,d._)(["\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    z-index: 1;\n"]);return b=function(){return e},e}function p(){let e=(0,d._)(["\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.5);\n    margin: 0 5px;\n    cursor: pointer;\n"]);return p=function(){return e},e}function j(){let e=(0,d._)(["\n    background: white;\n"]);return j=function(){return e},e}let v=(0,h.iv)(x()),N=e=>(0,h.iv)(f(),e),w=(0,h.iv)(g()),y=e=>(0,h.iv)(m(),e),k=(0,h.iv)(b()),_=(0,h.iv)(p()),C=(0,h.iv)(j());var S=e=>{let{images:t,height:n}=e,[r,s]=(0,i.useState)(0),l=(0,i.useCallback)(()=>{s(e=>e===t.length-1?0:e+1)},[t.length]),c=(0,i.useCallback)(()=>{s(e=>0===e?t.length-1:e-1)},[t.length]);return(0,i.useEffect)(()=>{let e=setInterval(l,5e3);return()=>clearInterval(e)},[l]),(0,u.BX)("div",{css:v,children:[(0,u.tZ)("button",{css:y("left"),onClick:c,children:"❮"}),(0,u.tZ)("div",{css:N(n),children:(0,u.tZ)(a.default,{src:t[r],alt:"Slide ".concat(r+1),layout:"fill",objectFit:"cover",css:w})}),(0,u.tZ)("button",{css:y("right"),onClick:l,children:"❯"}),(0,u.tZ)("div",{css:k,children:t.map((e,t)=>(0,u.tZ)("span",{css:[_,t===r&&C],onClick:()=>s(t)},t))})]})};function Z(){let[e,t]=(0,i.useState)([]),[n,l]=(0,i.useState)(1),[a,d]=(0,i.useState)(1),[u,h]=(0,i.useState)(0);return(0,i.useEffect)(()=>{(async()=>{try{let e=(await o.Z.get("https://example-data.draftbit.com/books")).data;h(e.length);let r=(n-1)*10,s=e.slice(r,r+10);t(s),d(Math.ceil(u/10))}catch(e){console.error("Error fetching books:",e)}})()},[n,u]),(0,r.jsxs)("div",{children:[(0,r.jsx)(S,{images:["/images/im1.jpg","/images/im4.jpg","/images/im3.jpg"],height:"600px"}),(0,r.jsxs)("main",{className:"p-4 m-10",children:[(0,r.jsxs)("h1",{className:"text-2xl font-bold mb-4 text-center relative",children:[(0,r.jsx)("span",{className:"absolute inset-0 border-t border-gray-400 transform translate-y-1/2"}),(0,r.jsx)("span",{className:"relative bg-white px-2",children:"Library Books"})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:e.map(e=>(0,r.jsx)(c,{id:e.id,title:e.title,authors:e.authors,description:e.description,imageUrl:e.image_url,rating:e.rating},e.id))}),(0,r.jsx)(s,{currentPage:n,totalPages:a,onPageChange:e=>{e>0&&e<=a&&l(e)}})]})]})}}},function(e){e.O(0,[138,648,656,971,23,744],function(){return e(e.s=1398)}),_N_E=e.O()}]);