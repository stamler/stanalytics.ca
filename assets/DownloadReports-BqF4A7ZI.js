import{d as g,r as i,k as f,c as r,a as e,F as u,z as b,i as p,o as l,t as _}from"./index-Bv6rAw1M.js";const k=e("h1",{class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},"Download Reports",-1),x={class:"p-5"},v=e("h2",{class:"text-xl"},"Daily Reports",-1),y=e("p",null,"These reports include data up to the previous day and go as far back as 1 month",-1),w={class:"float"},D=["onClick"],F={class:"inline-block shrink-0 px-3 text-neutral-400"},R=g({__name:"DownloadReports",setup(B){const c=i([]);i({});const m=async()=>{const{data:t,error:s}=await p.storage.from("sqdc_reports").list("regular");if(s){console.error(s);return}t&&(c.value=t)},h=async(t,s="sqdc_reports",a="regular/")=>{const{data:n,error:d}=await p.storage.from(s).createSignedUrl(a+t.name,60);if(d){console.error(d);return}if(n){const o=document.createElement("a");o.href=n.signedUrl,o.download=t.name,o.click(),o.remove()}};return f(async()=>{await m()}),(t,s)=>(l(),r(u,null,[k,e("main",x,[e("div",null,[v,y,e("ul",null,[(l(!0),r(u,null,b(c.value,a=>(l(),r("li",{class:"my-1",key:a.id},[e("div",w,[e("button",{class:"rounded-sm bg-blue-300 px-3 py-1 hover:bg-blue-500",onClick:n=>h(a)},_(a.name),9,D),e("div",F," updated at "+_(new Date(a.updated_at).toLocaleString()),1)])]))),128))])])])],64))}});export{R as default};
