import{d as e,aJ as n,K as a,e as t,h as s,o as i,i as r,a7 as d,w as o,j as l,aL as u,aM as c,k as m,l as p,b0 as f,bX as y}from"./index.2ebd7bfa.js";import{D as v,a as g,M as b}from"./index.b6fde2b2.js";/* empty css              */v.Button=g,v.install=function(e){return e.component(v.name,v),e.component(g.name,g),e};var k=e({name:"BasicDropdown",components:{[v.name]:v,[b.name]:b,[b.Item.name]:b.Item,[b.Divider.name]:b.Divider,Icon:n},props:{trigger:{type:[Array],default:()=>["contextmenu"]},dropMenuList:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]}},emits:["menuEvent"],setup(e,{emit:n}){const s=a((()=>e.dropMenuList));return{handleClickMenu:function(e){var a;const{event:i}=e,r=t(s).find((e=>`${e.event}`==`${i}`));n("menuEvent",r),null==(a=e.onClick)||a.call(e)},getMenuList:s}}});const M={class:"ml-1"};k.render=function(e,n,a,t,y,v){const g=s("Icon"),b=s("a-menu-item"),k=s("a-menu-divider"),x=s("a-menu"),$=s("a-dropdown");return i(),r($,d({trigger:e.trigger},e.$attrs),{overlay:o((()=>[l(x,{selectedKeys:e.selectedKeys},{default:o((()=>[(i(!0),r(u,null,c(e.getMenuList,(n=>(i(),r(u,{key:`${n.event}`},[l(b,{onClick:a=>e.handleClickMenu(n),disabled:n.disabled},{default:o((()=>[n.icon?(i(),r(g,{key:0,icon:n.icon},null,8,["icon"])):m("",!0),l("span",M,p(n.text),1)])),_:2},1032,["onClick","disabled"]),n.divider?(i(),r(k,{key:`d-${n.event}`})):m("",!0)],64)))),128))])),_:1},8,["selectedKeys"])])),default:o((()=>[l("span",null,[f(e.$slots,"default")])])),_:3},16,["trigger"])},y(k);export{k as _};
