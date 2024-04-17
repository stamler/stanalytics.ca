import{O as U}from"./ObjectTable-BzFXOmdB.js";import{_ as R}from"./SizeWarning.vue_vue_type_script_setup_true_lang-BkPjKYnd.js";import{o as m,c as x,a as _,d as T,b as F,s as N,r as n,e as q,x as $,t as h,l as r,q as j,g as o,z as v,y as d,m as O,F as A,h as H,u as P,i as Z,B as M}from"./index-CGpnL-pd.js";import{_ as i}from"./SelectFilter.vue_vue_type_script_setup_true_lang-B72JjeYl.js";import{_ as Q}from"./RefreshButton.vue_vue_type_script_setup_true_lang-uipZr_Sw.js";import"./LoadingAnimation-CAcIE6ic.js";function z(g,k){return m(),x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"fill-rule":"evenodd",d:"M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"})])}const E={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},L={class:"bg-neutral-100"},G={class:"flex w-screen flex-wrap gap-1 p-2 md:w-full"},ee=T({__name:"PerformanceOneDimension",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0},dbFunction:{type:null,required:!0},dimension:{type:String,required:!0},value:{type:String,required:!1},startDate:{type:String,required:!1},endDate:{type:String,required:!1}},setup(g){const k=F(),{preferences:c}=N(k),l=g,D=new Date(Date.now()-24*60*60*1e3).toLocaleString("en-CA",{timeZone:"America/Montreal"}).split(",")[0],e=l.value?n(l.value):n(""),s=l.startDate?n(l.startDate):n(D),u=l.endDate?n(l.endDate):n(D),f=n([]),b=n(!1),y=H(),w=P(),V=n(!0);q([e,s,u,y],()=>{V.value=!0}),q([c,y],()=>{if(!y.params.value)switch(l.dimension){case"brand":e.value=c.value.defaultBrand||"";break;case"sku":e.value=c.value.defaultSku||"";break;case"store":e.value=c.value.defaultStore||"";break;case"supplier":e.value=c.value.defaultSupplier||"";break;case"type":e.value=c.value.defaultType||"";break}},{immediate:!0});const C=()=>{const p=w.currentRoute.value.name,a=p==null?void 0:p.split(" By ");return`${a[1]}s By ${a[0].slice(0,-1)}`};async function S(){w.push({params:{dimension:l.dimension,value:e.value,startDate:s.value,endDate:u.value}}),b.value=!0;const p=Z.rpc(l.dbFunction,{_dimension:l.dimension,_value:e.value,_start_date:s.value,_end_date:u.value}),{data:a}=await p;f.value=a||[],b.value=!1,V.value=!1}return(p,a)=>{const B=M("router-link");return m(),x(A,null,[_("h1",E,[$(h(l.name)+" ",1),r(R,{tableData:f.value},null,8,["tableData"]),r(B,{class:"inline-block w-5",to:{name:C(),params:{startDate:o(s),endDate:o(u)}}},{default:j(()=>[r(o(z))]),_:1},8,["to"])]),_("div",L,[_("div",G,[r(Q,{class:"md:order-last",onClick:S,loading:b.value,dirty:V.value},null,8,["loading","dirty"]),l.dimension==="brand"?(m(),v(i,{key:0,modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),table:"sqdc_brands",name_col:"brand",value_col:"brand"},null,8,["modelValue"])):l.dimension==="sku"?(m(),v(i,{key:1,modelValue:o(e),"onUpdate:modelValue":a[1]||(a[1]=t=>d(e)?e.value=t:null),table:"sqdc_skus",name_col:"slug",value_col:"sku"},null,8,["modelValue"])):l.dimension==="store"?(m(),v(i,{key:2,modelValue:o(e),"onUpdate:modelValue":a[2]||(a[2]=t=>d(e)?e.value=t:null),table:"sqdc_stores_latest",order_col:"name",name_col:"name",value_col:"number"},null,8,["modelValue"])):l.dimension==="supplier"?(m(),v(i,{key:3,modelValue:o(e),"onUpdate:modelValue":a[3]||(a[3]=t=>d(e)?e.value=t:null),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"])):l.dimension==="type"?(m(),v(i,{key:4,modelValue:o(e),"onUpdate:modelValue":a[4]||(a[4]=t=>d(e)?e.value=t:null),table:"sqdc_product_types",name_col:"type",value_col:"type"},null,8,["modelValue"])):O("",!0),r(i,{modelValue:o(s),"onUpdate:modelValue":a[5]||(a[5]=t=>d(s)?s.value=t:null),ascending:!0,order_col:"date",table:"sqdc_performance_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),r(i,{modelValue:o(u),"onUpdate:modelValue":a[6]||(a[6]=t=>d(u)?u.value=t:null),table:"sqdc_performance_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),r(U,{class:"md:p-2",tableData:f.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out:"dollars"},omitColumns:l.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64)}}});export{ee as default};
