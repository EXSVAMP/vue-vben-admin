import{_ as s}from"./ScrollContainer.5c821124.js";import{_ as o}from"./index.16224c8b.js";import{d as r,r as t,e as l,dn as a,dp as e,h as i,o as c,i as n,j as d,aL as p,aM as m,l as u,bw as f,m as j}from"./index.0b3ead59.js";import"./index.91e67cac.js";import"./domUtils.51893063.js";import"./_stringToArray.66f5de98.js";import"./RightOutlined.1fbca3cd.js";/* empty css              */import"./useTimeout.3fa0fb28.js";import"./useScrollTo.999bcb83.js";import"./index.b99c961b.js";import"./index.86c67de7.js";import"./EllipsisOutlined.34a1a7b6.js";import"./types.899ae8eb.js";import"./isEqual.983b4f1d.js";import"./toInteger.0187ddcf.js";import"./DownOutlined.9bd5d48d.js";import"./index.a348ae4d.js";import"./usePageContext.f14eba1e.js";import"./transButton.76298618.js";import"./ArrowLeftOutlined.e8aefb02.js";import"./vendor.3b1829c7.js";var b=r({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=t(null),o=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const x=f("data-v-331a2139");a("data-v-331a2139");const _={class:"my-4"},C=j(" 滚动到100px位置 "),T=j(" 滚动到800px位置 "),v=j(" 滚动到顶部 "),g=j(" 滚动到底部 "),w={class:"scroll-wrap"},k={class:"p-3"};e();const y=x(((s,o,r,t,l,a)=>{const e=i("a-button"),f=i("ScrollContainer"),j=i("PageWrapper");return c(),n(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:x((()=>[d("div",_,[d(e,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:x((()=>[C])),_:1}),d(e,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:x((()=>[T])),_:1}),d(e,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:x((()=>[v])),_:1}),d(e,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:x((()=>[g])),_:1})]),d("div",w,[d(f,{class:"mt-4",ref:"scrollRef"},{default:x((()=>[d("ul",k,[(c(),n(p,null,m(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},u(s),1))),64))])])),_:1},512)])])),_:1})}));b.render=y,b.__scopeId="data-v-331a2139";export default b;
