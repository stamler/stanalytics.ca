import{O as V}from"./ObjectTable-GaUcb8bv.js";import{_ as w}from"./SizeWarning.vue_vue_type_script_setup_true_lang-7ZmbNqJn.js";import{d as C,r as e,e as k,c as h,a as i,x as q,t as j,l as o,F as O,h as S,i as T,o as B}from"./index-DTtvqpat.js";import{_ as p}from"./SelectFilter.vue_vue_type_script_setup_true_lang-C-hotEmd.js";import{_ as F}from"./RefreshButton.vue_vue_type_script_setup_true_lang-liJ8cAen.js";import"./lodash-B18rHKPD.js";import"./LoadingAnimation-C1QqP4xM.js";const N={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},P={class:"bg-neutral-100"},$={class:"flex w-screen flex-wrap gap-1 p-2 md:w-full"},Z=C({__name:"OverviewPerformance",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0},db_function:{type:null,required:!0},stride:{type:String}},setup(_){const a=_,m=new Date(Date.now()-24*60*60*1e3).toLocaleString("en-CA",{timeZone:"America/Montreal"}).split(",")[0],f=e(""),b=e(""),v=e(""),g=e(""),y=e(""),s=e(m),r=e(m),n=e([]),u=e(!1),D=S(),d=e(!0);k([f,b,v,g,y,s,r,D],()=>{d.value=!0});async function x(){u.value=!0;const c={_start_date:s.value,_end_date:r.value};a.stride&&(c._stride=a.stride);const t=T.rpc(a.db_function,c),{data:l}=await t;n.value=l||[],u.value=!1,d.value=!1}return(c,t)=>(B(),h(O,null,[i("h1",N,[q(j(a.name)+" ",1),o(w,{tableData:n.value},null,8,["tableData"])]),i("div",P,[i("div",$,[o(F,{class:"md:order-last",onClick:x,loading:u.value,dirty:d.value},null,8,["loading","dirty"]),o(p,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),ascending:!0,order_col:"date",table:"sqdc_performance_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),o(p,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=l=>r.value=l),table:"sqdc_performance_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),o(V,{class:"md:p-2",tableData:n.value,tableConfig:{columnFormatters:{quantity_market_share:"percent",value_market_share:"percent",value_out:"dollars",value_in:"dollars",total_out:"dollars"},omitColumns:a.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{Z as default};
