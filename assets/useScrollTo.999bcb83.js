import{r as t,cd as a,e as o,aU as r}from"./index.0b3ead59.js";function s({el:s,to:e,duration:n=500,callback:c}){const l=t(!1),u=(t=>t.scrollTop)(s),i=e-u;let p=0;n=a(n)?500:n;const d=function(){if(!o(l))return;p+=20;const t=(a=p,e=u,f=i,(a/=n/2)<1?f/2*a*a+e:-f/2*(--a*(a-2)-1)+e);var a,e,f;((t,a)=>{t.scrollTop=a})(s,t),p<n&&o(l)?requestAnimationFrame(d):c&&r(c)&&c()};return{start:()=>{l.value=!0,d()},stop:()=>{l.value=!1}}}export{s as u};
