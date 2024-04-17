import{d as q,r as s,e as A,c as o,a as v,t as h,l as D,f as g,H as N,F as C,z as U,m as _,v as B,x as O,q as S,i as b,o as n,n as j}from"./index-DzOiaNG7.js";import{O as T}from"./ObjectTable-JYM83Q_c.js";import{_ as z}from"./RefreshButton.vue_vue_type_script_setup_true_lang-ZeCpkskA.js";import"./LoadingAnimation-BbmyJmAz.js";const L={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},M={class:"bg-neutral-100"},R={class:"flex w-screen flex-wrap gap-1 p-2 md:w-full"},E=["value"],H=["value"],I={key:0,class:"rounded-md bg-yellow-100 p-2 font-bold"},G=["disabled"],J=["disabled","onClick"],K=["disabled","onClick"],P=q({__name:"ConsolidateColumnValues",setup(Q){const F=s([{value:"sqdc_products",text:"sqdc_products"}]),m=s([]),u=s(null),r=s(null),i=s(null),f=s(!1),y=s(!1),t=s(!1),x=s(!0),d=s([]);A(u,async()=>{if(!u.value)return;const{data:l}=await b.from(u.value).select("*").limit(1);!l||l.length!==1||(m.value=Object.keys(l[0]))});async function w(){if(u.value===null||r.value===null||i.value===null)return;t.value=!0;const{data:l}=await b.rpc("most_similar_values",{table_name:u.value,column_name:r.value,property_name:i.value});d.value=l||[],t.value=!1,x.value=!1}const k=async(l,a)=>{if(t.value=!0,u.value===null||r.value===null||i.value===null)return;const e=d.value[a][l],c=d.value[a][l==="value"?"most_similar":"value"],{error:p}=await b.rpc("update_jsonb_property_value",{table_name:u.value,column_name:r.value,property_name:i.value,old_value:c,new_value:e});p&&alert(p),await w(),t.value=!1},V=l=>{const a=d.value[l];return a.date>a.most_similar_date},$=async()=>{if(!(u.value===null||r.value===null||i.value===null)&&confirm("Are you sure you want to update all rows with full similarity to the latest value?")){for(t.value=!0,y.value=!0;;){const l=d.value.find(p=>p.trigram_similarity===1);if(!l||f.value)break;const a=l.date>l.most_similar_date?l.value:l.most_similar,e=l.date>l.most_similar_date?l.most_similar:l.value,{error:c}=await b.rpc("update_jsonb_property_value",{table_name:u.value,column_name:r.value,property_name:i.value,old_value:e,new_value:a});c&&alert(c),await w()}f.value=!1,y.value=!1,t.value=!1}};return(l,a)=>(n(),o(C,null,[v("h1",L," Consolidate Column Values ("+h(d.value.length)+") ",1),v("div",M,[v("div",R,[D(z,{class:"md:order-last",onClick:w,loading:t.value,dirty:x.value},null,8,["loading","dirty"]),g(v("select",{class:"rounded-sm px-2 py-1","onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e)},[(n(!0),o(C,null,U(F.value,e=>(n(),o("option",{key:e.value,value:e.value},h(e.text),9,E))),128))],512),[[N,u.value]]),m.value.length>0?g((n(),o("select",{key:0,class:"rounded-sm px-2 py-1","onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e)},[(n(!0),o(C,null,U(m.value,e=>(n(),o("option",{key:e,value:e},h(e),9,H))),128))],512)),[[N,r.value]]):_("",!0),m.value.length>0?g((n(),o("input",{key:1,class:"rounded-sm px-2 py-1","onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),placeholder:"Property Name"},null,512)),[[B,i.value]]):_("",!0)]),x.value?_("",!0):(n(),o("h2",I,[O(" Darker blue button is the newer value "),v("button",{disabled:t.value,class:"mx-1 rounded-sm bg-blue-500 px-2 py-1 text-blue-200 hover:bg-blue-400 hover:text-white",onClick:$}," update all full similarity ",8,G),y.value?(n(),o("button",{key:0,class:"mx-1 rounded-sm bg-blue-500 px-2 py-1 text-blue-200 hover:bg-blue-400 hover:text-white",onClick:a[3]||(a[3]=e=>f.value=!0)}," cancel full update ")):_("",!0)])),D(T,{class:"md:p-2",tableData:d.value,tableConfig:{columnFormatters:{},omitColumns:["date","most_similar_date"]}},{rowActions:S(e=>[v("button",{disabled:t.value,class:j(["mx-1 rounded-sm px-2 py-1 text-blue-200 hover:bg-blue-400 hover:text-white",[V(e.idx)?"bg-blue-500":"bg-blue-400",{"disabled:opacity-70":t.value}]]),onClick:c=>k("value",e.idx)}," Left ",10,J),v("button",{disabled:t.value,class:j(["mx-1 rounded-sm px-2 py-1 text-blue-200 hover:bg-blue-400 hover:text-white",[V(e.idx)?"bg-blue-400":"bg-blue-500",{"disabled:opacity-70":t.value}]]),onClick:c=>k("most_similar",e.idx)}," Right ",10,K)]),_:1},8,["tableData"])])],64))}});export{P as default};
