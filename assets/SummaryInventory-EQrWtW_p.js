import{O as V}from"./ObjectTable-BoSfhiyy.js";import{_ as q}from"./SizeWarning.vue_vue_type_script_setup_true_lang-CwYBvSR6.js";import{d as w,e as C,s as S,r as e,f,c as h,a as c,x as j,t as A,l,F as T,h as k,i as O,o as B}from"./index-DObwgmAk.js";import{_}from"./SelectFilter.vue_vue_type_script_setup_true_lang-BmyPE4KP.js";import{_ as F}from"./RefreshButton.vue_vue_type_script_setup_true_lang-z4Q2UNGJ.js";const N={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},$={class:"bg-neutral-100"},P={class:"flex w-screen flex-wrap gap-1 p-2 md:w-full"},L=w({__name:"SummaryInventory",props:{rpcArgs:{type:Object,required:!1},name:{type:String,required:!0},objectTableProps:{type:Object,default:()=>({})}},setup(v){const b=C(),{preferences:i}=S(b),d=v,t=e("All Suppliers"),p=new Date(Date.now()-24*60*60*1e3).toLocaleString("en-CA",{timeZone:"America/Montreal"}).split(",")[0],y=e(p),g=e(p),s=e(""),o=e([]),r=e(!1),D=k(),n=e(!0);f([t,s,y,g,D],()=>{n.value=!0}),f(i,()=>{t.value=i.value.defaultSupplier||""},{immediate:!0});async function x(){r.value=!0;const m=O.from("sqdc_inventory_daily_allstores").select("brand, name, sku, price, type:product_type, date, quantity, value").eq("supplier",t.value).eq("date",s.value),{data:a}=await m;o.value=a||[],r.value=!1,n.value=!1}return(m,a)=>(B(),h(T,null,[c("h1",N,[j(A(d.name)+" ",1),l(q,{tableData:o.value},null,8,["tableData"])]),c("div",$,[c("div",P,[l(F,{class:"md:order-last",onClick:x,loading:r.value,dirty:n.value},null,8,["loading","dirty"]),l(_,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=u=>t.value=u),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),l(_,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=u=>s.value=u),table:"sqdc_inventory_daily_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),l(V,{class:"md:p-2",tableData:o.value,tableConfig:{columnFormatters:{value:"dollars",price:"dollars"},omitColumns:d.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{L as default};
