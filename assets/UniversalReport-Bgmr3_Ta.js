import{O as x}from"./ObjectTable-DlOlgEwL.js";import{_ as w}from"./SizeWarning.vue_vue_type_script_setup_true_lang-BWYptByy.js";import{d as C,b as A,s as S,r as a,e as v,c as j,a as p,x as q,t as T,l as t,F as O,h as U,i as h,o as k}from"./index-xSkt6JiG.js";import{_ as i}from"./SelectFilter.vue_vue_type_script_setup_true_lang-DtYte4Lg.js";import{_ as B}from"./RefreshButton.vue_vue_type_script_setup_true_lang-sa7CvgAW.js";import"./LoadingAnimation-BTnrbdfQ.js";const F={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},N={class:"bg-neutral-100"},R={class:"flex w-screen flex-wrap gap-1 p-2 md:w-full"},Z=C({__name:"UniversalReport",props:{rpcArgs:{type:Object,required:!1},name:{type:String,required:!0},objectTableProps:{type:Object,default:()=>({})}},setup(b){const g=A(),{preferences:m}=S(g),n=b,l=a("All Suppliers"),_=new Date(Date.now()-24*60*60*1e3).toLocaleString("en-CA",{timeZone:"America/Montreal"}).split(",")[0],o=a(_),r=a(_),y=a(""),u=a([]),d=a(!1),V=U(),c=a(!0);v([l,y,o,r,V],()=>{c.value=!0}),v(m,()=>{l.value=m.value.defaultSupplier||""},{immediate:!0});async function D(){d.value=!0;const f=h.rpc("get_movements",{...n.rpcArgs,_supplier:l.value,_start_date:o.value,_end_date:r.value}),{data:e}=await f;u.value=e||[],d.value=!1,c.value=!1}return(f,e)=>(k(),j(O,null,[p("h1",F,[q(T(n.name)+" ",1),t(w,{tableData:u.value},null,8,["tableData"])]),p("div",N,[p("div",R,[t(B,{class:"md:order-last",onClick:D,loading:d.value,dirty:c.value},null,8,["loading","dirty"]),t(i,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),t(i,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value=s),ascending:!0,order_col:"date",table:"sqdc_performance_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(i,{modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=s=>r.value=s),table:"sqdc_performance_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(x,{class:"md:p-2",tableData:u.value,tableConfig:{columnFormatters:{value:"dollars",price:"dollars"},omitColumns:n.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{Z as default};
