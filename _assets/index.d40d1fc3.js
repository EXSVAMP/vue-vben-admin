let a=document.createElement("style");a.innerHTML=".iframe-page .ant-spin-nested-loading[data-v-5c45baaa]{position:relative;height:100%}.iframe-page .ant-spin-nested-loading .ant-spin-container[data-v-5c45baaa]{width:100%;height:100%;padding:10px}.iframe-page__mask[data-v-5c45baaa]{position:absolute;top:0;left:0;width:100%;height:100%}.iframe-page__main[data-v-5c45baaa]{width:100%;height:100%;overflow:hidden;background:#fff;border:0;box-sizing:border-box}",document.head.appendChild(a);import{a as e,c8 as t,r as n,X as i,I as s,R as r,f as o,i as d,o as l,j as p,k as c,bp as m}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import{g as f}from"./domUtils.d92ff7b8.js";import{u as g}from"./useWindowSizeFn.b44974f1.js";var h=e({name:"IFrame",components:{Spin:t},props:{frameSrc:{type:String}},setup(){const a=n(!1),e=n(50),t=n(window.innerHeight),d=n(null);function l(){const a=o(d);if(!a)return;let{top:n}=f(a);n+=20,e.value=n,t.value=window.innerHeight-n;const i=document.documentElement.clientHeight-n;a.style.height=`${i}px`}function p(){a.value=!1,l()}return g(l,150,{immediate:!0}),i((()=>{a.value=!0,r((()=>{const a=o(d);a&&(a.attachEvent?a.attachEvent("onload",(()=>{p()})):a.onload=()=>{p()})}))})),{getWrapStyle:s((()=>({height:`${o(t)}px`}))),loading:a,frameRef:d}}});const u=m("data-v-5c45baaa"),b=u(((a,e,t,n,i,s)=>{const r=d("Spin");return l(),p("div",{class:"iframe-page",style:a.getWrapStyle},[c(r,{spinning:a.loading,size:"large",style:a.getWrapStyle},{default:u((()=>[c("iframe",{src:a.frameSrc,class:"iframe-page__main",ref:"frameRef"},null,8,["src"])])),_:1},8,["spinning","style"])],4)}));h.render=b,h.__scopeId="data-v-5c45baaa";export default h;