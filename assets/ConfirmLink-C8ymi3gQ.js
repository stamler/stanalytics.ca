import{d as i,c as r,a as e,w as c,u,o as l}from"./index-BGlyx17V.js";const a={class:"flex flex-col items-center justify-center md:h-screen lg:py-0"},f=e("div",null,[e("h1",null,"Confirm Link"),e("div",{class:"flex flex-col"},[e("div",{class:"flex items-center justify-between"},[e("button",{class:"focus:shadow-outline my-2 rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-700 focus:outline-none",type:"submit"}," Confirm Link ")])])],-1),d=[f],x=i({__name:"ConfirmLink",setup(m){const t=u(),{confirmation_url:n}=t.currentRoute.value.query,s=async function(){if(!n){t.push({name:"Dashboard"});return}window.location.href=n};return(p,o)=>(l(),r("div",a,[e("form",{class:"mx-auto flex flex-col items-center justify-center rounded-md bg-white p-4",onSubmit:o[0]||(o[0]=c(_=>s(),["prevent"]))},d,32)]))}});export{x as default};
