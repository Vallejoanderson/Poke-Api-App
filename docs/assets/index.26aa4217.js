var v=Object.defineProperty;var k=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var b=(t,e,s)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,y=(t,e)=>{for(var s in e||(e={}))N.call(e,s)&&b(t,s,e[s]);if(k)for(var s of k(e))w.call(e,s)&&b(t,s,e[s]);return t};import{r as i,j as P,R as L}from"./vendor.5b636afc.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};j();const p=i.exports.createContext(null),o=P.exports.jsx,c=P.exports.jsxs,R=({pokemon:t})=>{const{hiddenPokemon:e,setFolded:s,setRound:a,played:n,setPlayed:r,hearts:l,setHearts:h}=i.exports.useContext(p),m=({target:d})=>{s(!1),e.id==t.id?d.classList.add("bg-lime-600","animate__animated","animate__heartBeat"):(d.classList.add("bg-rose-900","animate__animated","animate__headShake"),h(u=>u-1)),setTimeout(()=>{s(!0),r(!0),l>0&&a(u=>u+1)},1e3)};return o("p",{className:`bg-purple-800 hover:shadow-lg hover:shadow-purple-600/50 
				hover:text-slate-50 cursor-pointer text-center uppercase text-slate-300
				font-bold rounded-lg py-2 mb-3 tracking-widest 
				hover:skew-y-1 ${n&&"cursor-not-allowed"} 
				${l<1&&"pointer-events-none"}`,onClick:d=>{m(d)},children:t.name})},A=({pokemons:t})=>o("div",{className:"w-3/4 m-2 mb-0 mx-auto animate__animated animate__bounceInLeft",children:t.map(e=>o(R,{pokemon:e},e.id))}),I=()=>Math.floor(Math.random()*(3+1)),f=async()=>{const e=`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*(200-1+1)+1)}/`,a=await(await fetch(e)).json(),{name:n,id:r,sprites:{other:{["official-artwork"]:{front_default:l}}}}=a;return{id:r,name:n,img:l}},O=(t=[])=>{const[e,s]=i.exports.useState(t),a=()=>{Promise.all([f(),f(),f(),f()]).then(n=>s(n))};return console.log(e),{pokemons:e,getPokemons:a}},S=({pokemon:t})=>{const{hiddenPokemon:e,folded:s}=t;return o("img",{className:`animate__animated animate__bounceInLeft ${s&&"hiddenpokemon"}`,src:e.img})},C=()=>{const{setHearts:t,setRound:e}=i.exports.useContext(p);return o("button",{className:"bg-rose-800 text-slate-100 py-3 px-20 rounded-lg mx-auto flex justify-center w-3/4 font-bold tracking-widest",onClick:()=>{t(3),e(1)},children:"PLAY AGAIN"})};var M="/assets/poke-logo.fa02cbe2.png";const T=()=>c("div",{className:"flex justify-center mt-6",children:[o("p",{className:"text-slate-600 font-bold mr-2",children:"Powered by"}),o("div",{className:"w-20",children:o("img",{src:M})})]});var B="/assets/poke-top.0835d23c.png";const E=()=>o("div",{className:"w-36 mx-auto mt-6 mb-0",children:o("img",{src:B})}),F=()=>o("div",{className:"animate__animated animate__bounceInDown",children:o("img",{src:require("src/resources/game-over.png")})}),G=()=>{const{hearts:t,round:e}=i.exports.useContext(p);return c("div",{className:"flex justify-evenly mt-4",children:[c("div",{children:[o("p",{className:"text-slate-100 text-center font-bold",children:"Round"}),o("p",{className:"bg-purple-800 text-slate-300 inline-block  font-bold rounded-full py-2 px-4 shadow-lg shadow-rose-400/50",children:e})]}),c("div",{children:[o("p",{className:"text-slate-100 font-bold text-center",children:" Lifes "}),o("div",{children:t>0?[...Array(t)].map((s,a)=>o("i",{className:"animate__animated animate__pulse fas fa-heart fa-2x text-red-700 inline-block mr-1"})):[...Array(3)].map((s,a)=>o("i",{className:"animate__animated animate__pulse fas fa-heart-broken fa-2x text-red-700 inline-block mr-1"}))})]})]})},$=()=>{const{pokemons:t,getPokemons:e}=O(),[s,a]=i.exports.useState({hiddenPokemon:{},status:!1}),{hiddenPokemon:n,status:r}=s,[l,h]=i.exports.useState(!0),[m,d]=i.exports.useState(1),[u,x]=i.exports.useState(!1),[g,_]=i.exports.useState(3);return i.exports.useEffect(()=>{e(),x(D=>!1),console.log(m)},[m]),i.exports.useEffect(()=>{a({hiddenPokemon:y({},t[I()]),status:!0})},[t]),console.log(t),c(p.Provider,{value:{hiddenPokemon:n,setFolded:h,round:m,setRound:d,played:u,setPlayed:x,hearts:g,setHearts:_},children:[o(E,{}),o(G,{}),c("div",{children:[g>0?r&&o(S,{pokemon:{hiddenPokemon:n,folded:l}}):o(F,{}),o(A,{pokemons:t}),o(C,{values:d}),o(T,{})]})]})};L.render(o($,{}),document.getElementById("root"));