import{O as r}from"./ObjectTable-BRXh3_iH.js";import{d as c,r as o,c as i,a,l,q as p,F as u,i as d,o as _}from"./index-BGlyx17V.js";import{_ as m}from"./RefreshButton.vue_vue_type_script_setup_true_lang-CkozxSEH.js";import"./lodash-DPrCdIBa.js";import"./LoadingAnimation-D347o2HO.js";const f=a("h1",{class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"}," Supplier Mapping ",-1),b={class:"bg-neutral-100"},x={class:"flex w-screen flex-wrap gap-1 p-2 md:w-full"},g=a("button",{class:"mx-1 rounded-sm px-2 py-1 text-blue-200 hover:bg-blue-400 hover:text-white"}," Do a thing ",-1),C=c({__name:"SupplierMapping",setup(h){const t=o([]),e=o(!1);async function n(){e.value=!0;const{data:s}=await d.from("supplier_lookup").select("*");t.value=s||[],e.value=!1}return(s,v)=>(_(),i(u,null,[f,a("div",b,[a("div",x,[l(m,{class:"md:order-last",onClick:n,loading:e.value,dirty:!0},null,8,["loading"])]),l(r,{class:"md:p-2",tableData:t.value},{rowActions:p(()=>[g]),_:1},8,["tableData"])])],64))}});export{C as default};
