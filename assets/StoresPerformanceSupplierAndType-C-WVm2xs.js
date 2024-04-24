import{O as g}from"./ObjectTable-D5k8VNLD.js";import{_ as D}from"./SizeWarning.vue_vue_type_script_setup_true_lang-ZFNYi85H.js";import{d as x,r as a,e as w,c as C,a as m,x as q,t as S,l as t,F as T,h as j,i as k,o as U}from"./index-fNjIOEz0.js";import{_ as u}from"./SelectFilter.vue_vue_type_script_setup_true_lang-DbLzFKRI.js";import{_ as A}from"./RefreshButton.vue_vue_type_script_setup_true_lang-CZ-REY2J.js";import"./LoadingAnimation-5dxG5IrP.js";const B={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},F={class:"bg-neutral-100"},N={class:"flex w-screen flex-wrap gap-1 p-2 md:w-full"},M=x({__name:"StoresPerformanceSupplierAndType",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0}},setup(f){const i=f,_=new Date(Date.now()-24*60*60*1e3).toLocaleString("en-CA",{timeZone:"America/Montreal"}).split(",")[0],b=a(""),o=a(""),s=a(""),r=a(_),n=a(_),d=a([]),p=a(!1),y=j(),c=a(!0);w([o,r,n,y,s,b],()=>{c.value=!0});async function V(){p.value=!0;const v=k.rpc("stores_performance_supplier_and_type",{_supplier:o.value,_type:s.value,_start_date:r.value,_end_date:n.value}),{data:e}=await v;d.value=e||[],p.value=!1,c.value=!1}return(v,e)=>(U(),C(T,null,[m("h1",B,[q(S(i.name)+" ",1),t(D,{tableData:d.value},null,8,["tableData"])]),m("div",F,[m("div",N,[t(A,{class:"md:order-last",onClick:V,loading:p.value,dirty:c.value},null,8,["loading","dirty"]),t(u,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),t(u,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value=l),table:"sqdc_product_types",name_col:"type",value_col:"type"},null,8,["modelValue"]),t(u,{modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=l=>r.value=l),ascending:!0,order_col:"date",table:"sqdc_performance_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(u,{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=l=>n.value=l),table:"sqdc_performance_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(g,{class:"md:p-2",tableData:d.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out:"dollars"},omitColumns:i.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{M as default};
