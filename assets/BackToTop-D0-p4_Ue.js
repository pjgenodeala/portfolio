import{r,h as n,i as s,o as l,c as i,j as a}from"./index-BchpS4T1.js";const p={__name:"BackToTop",setup(c){const o=r(!1),e=()=>{o.value=window.scrollY>300},t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return n(()=>{window.addEventListener("scroll",e)}),s(()=>{window.removeEventListener("scroll",e)}),(d,u)=>o.value?(l(),i("button",{key:0,onClick:t,class:"fixed bottom-4 right-4 bg-gradient-to-r from-primary to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-blue-600"}," ↥ ")):a("",!0)}};export{p as default};
