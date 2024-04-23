import{O as x}from"./ObjectTable-DQpcvL3m.js";import{_ as V}from"./SizeWarning.vue_vue_type_script_setup_true_lang-vaNWJAuf.js";import{d as w,b as C,s as S,r as e,e as _,c as h,a as i,x as j,t as A,l,F as T,h as k,i as F,o as O}from"./index-qk5ShdY3.js";import{_ as f}from"./SelectFilter.vue_vue_type_script_setup_true_lang-JMRQ0-ej.js";import{_ as B}from"./RefreshButton.vue_vue_type_script_setup_true_lang-Bji3Oq_o.js";import"./LoadingAnimation-DznZV4Bp.js";const N={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},$={class:"bg-neutral-100"},P={class:"flex w-screen flex-wrap gap-1 p-2 md:w-full"},M=w({__name:"FullInventory",props:{rpcArgs:{type:Object,required:!1},name:{type:String,required:!0},objectTableProps:{type:Object,default:()=>({})}},setup(v){const b=C(),{preferences:c}=S(b),d=v,t=e("All Suppliers"),p=new Date(Date.now()-24*60*60*1e3).toLocaleString("en-CA",{timeZone:"America/Montreal"}).split(",")[0],y=e(p),g=e(p),s=e(""),o=e([]),r=e(!1),D=k(),n=e(!0);_([t,s,y,g,D],()=>{n.value=!0}),_(c,()=>{t.value=c.value.defaultSupplier||""},{immediate:!0});async function q(){r.value=!0;const m=F.from("sqdc_inventory_daily").select("brand, name, sku, price, store, location:store_name, type:product_type, date, quantity, value").gt("quantity",0).eq("supplier",t.value).eq("date",s.value),{data:a}=await m;o.value=a||[],r.value=!1,n.value=!1}return(m,a)=>(O(),h(T,null,[i("h1",N,[j(A(d.name)+" ",1),l(V,{tableData:o.value},null,8,["tableData"])]),i("div",$,[i("div",P,[l(B,{class:"md:order-last",onClick:q,loading:r.value,dirty:n.value},null,8,["loading","dirty"]),l(f,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=u=>t.value=u),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),l(f,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=u=>s.value=u),table:"sqdc_inventory_daily_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),l(x,{class:"md:p-2",tableData:o.value,tableConfig:{columnFormatters:{value:"dollars",price:"dollars"},omitColumns:d.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{M as default};
