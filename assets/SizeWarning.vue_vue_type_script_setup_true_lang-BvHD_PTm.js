import{o,c as s,a as t,d as u,C as m,n as p,r as f,l as d,g as h,m as x,F as v}from"./index-BBj2jzkt.js";function b(l,e){return o(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z","clip-rule":"evenodd"})])}const g={class:"m-2 mx-auto w-full p-4 text-white md:m-auto md:w-1/2"},_=t("h2",{class:"text-xl"},"Large Result Set",-1),w=t("p",null," This query has a result set with over 1000 records. Only the first 1000 records are shown. You can see a complete result set by downloading the report related to this data. ",-1),V=u({__name:"LargeResultsModal",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(l){const e=m(l,"modelValue");return(n,a)=>(o(),s("div",{class:p([e.value?"fixed left-0 top-0":"hidden","justify-content inset-x-0 flex h-screen w-screen flex-1 flex-col bg-black bg-opacity-90 text-base font-normal"])},[t("div",g,[_,w,t("button",{class:"mt-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700",onClick:a[0]||(a[0]=i=>e.value=!1)}," OK ")])],2))}}),k=u({__name:"SizeWarning",props:{tableData:{type:Array,required:!0}},setup(l){const e=f(!1),n=l,a=()=>{e.value=!e.value};return(i,r)=>(o(),s(v,null,[d(V,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=c=>e.value=c)},null,8,["modelValue"]),n.tableData.length>=1e3?(o(),s("span",{key:0,class:"inline-block",onClick:a},[d(h(b),{class:"h-6 w-6 rounded-full bg-white text-red-700"})])):x("",!0)],64))}});export{k as _};
