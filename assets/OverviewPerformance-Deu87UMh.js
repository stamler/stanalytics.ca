import{O as V}from"./ObjectTable-CNdlKrO6.js";import{_ as w}from"./SizeWarning.vue_vue_type_script_setup_true_lang-DbwDhO5e.js";import{d as C,r as e,e as k,c as h,a as i,x as j,t as q,l as o,F as O,h as S,i as T,o as B}from"./index-Bv6rAw1M.js";import{_ as p}from"./SelectFilter.vue_vue_type_script_setup_true_lang-BIzFVZoB.js";import{_ as F}from"./RefreshButton.vue_vue_type_script_setup_true_lang-uiWYfs4k.js";const N={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},P={class:"bg-neutral-100"},$={class:"flex w-screen flex-wrap gap-1 p-2 md:w-full"},M=C({__name:"OverviewPerformance",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0},db_function:{type:null,required:!0},stride:{type:String}},setup(_){const t=_,m=new Date(Date.now()-24*60*60*1e3).toLocaleString("en-CA",{timeZone:"America/Montreal"}).split(",")[0],f=e(""),b=e(""),v=e(""),g=e(""),y=e(""),s=e(m),n=e(m),r=e([]),u=e(!1),D=S(),d=e(!0);k([f,b,v,g,y,s,n,D],()=>{d.value=!0});async function x(){u.value=!0;const c={_start_date:s.value,_end_date:n.value};t.stride&&(c._stride=t.stride);const a=T.rpc(t.db_function,c),{data:l}=await a;r.value=l||[],u.value=!1,d.value=!1}return(c,a)=>(B(),h(O,null,[i("h1",N,[j(q(t.name)+" ",1),o(w,{tableData:r.value},null,8,["tableData"])]),i("div",P,[i("div",$,[o(F,{class:"md:order-last",onClick:x,loading:u.value,dirty:d.value},null,8,["loading","dirty"]),o(p,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l),ascending:!0,order_col:"date",table:"sqdc_performance_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),o(p,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),table:"sqdc_performance_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),o(V,{class:"md:p-2",tableData:r.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out:"dollars"},omitColumns:t.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{M as default};
