import{d as u,C as m,c as s,a as l,n as p,o,r as f,l as d,g as b,m as h,F as x,D as _}from"./index-fNjIOEz0.js";const g={class:"m-2 mx-auto w-full p-4 text-white md:m-auto md:w-1/2"},v=l("h2",{class:"text-xl"},"Large Result Set",-1),w=l("p",null," This query has a result set with over 1000 records. Only the first 1000 records are shown. You can see a complete result set by downloading the report related to this data. ",-1),V=u({__name:"LargeResultsModal",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=m(a,"modelValue");return(n,t)=>(o(),s("div",{class:p([e.value?"fixed left-0 top-0":"hidden","justify-content inset-x-0 flex h-screen w-screen flex-1 flex-col bg-black bg-opacity-90 text-base font-normal"])},[l("div",g,[v,w,l("button",{class:"mt-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700",onClick:t[0]||(t[0]=i=>e.value=!1)}," OK ")])],2))}}),k=u({__name:"SizeWarning",props:{tableData:{type:Array,required:!0}},setup(a){const e=f(!1),n=a,t=()=>{e.value=!e.value};return(i,r)=>(o(),s(x,null,[d(V,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=c=>e.value=c)},null,8,["modelValue"]),n.tableData.length>=1e3?(o(),s("span",{key:0,class:"inline-block",onClick:t},[d(b(_),{class:"h-6 w-6 rounded-full bg-white text-red-700"})])):h("",!0)],64))}});export{k as _};
