import{D as e}from"./index.32a42716.js";import{u as t}from"./useDescription.9d184a58.js";import{_ as s}from"./index.16224c8b.js";import{d as a,h as i,o as r,i as o,w as n,j as m}from"./index.0b3ead59.js";import"./index.cc64ee66.js";import"./responsiveObserve.c545f1cc.js";import"./ScrollContainer.5c821124.js";import"./index.91e67cac.js";import"./domUtils.51893063.js";import"./_stringToArray.66f5de98.js";import"./RightOutlined.1fbca3cd.js";/* empty css              */import"./useTimeout.3fa0fb28.js";import"./useScrollTo.999bcb83.js";import"./get.c65e8723.js";import"./index.b99c961b.js";import"./index.86c67de7.js";import"./EllipsisOutlined.34a1a7b6.js";import"./types.899ae8eb.js";import"./isEqual.983b4f1d.js";import"./toInteger.0187ddcf.js";import"./DownOutlined.9bd5d48d.js";import"./index.a348ae4d.js";import"./usePageContext.f14eba1e.js";import"./transButton.76298618.js";import"./ArrowLeftOutlined.e8aefb02.js";import"./vendor.3b1829c7.js";const l={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},c=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var p=a({components:{Description:e,PageWrapper:s},setup(){const[e]=t({title:"useDescription",data:l,schema:c}),[s]=t({title:"无边框",bordered:!1,data:l,schema:c});return{mockData:l,schema:c,register:e,register1:s}}});p.render=function(e,t,s,a,l,c){const p=i("Description"),d=i("PageWrapper");return r(),o(d,{title:"详情组件示例"},{default:n((()=>[m(p,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),m(p,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),m(p,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),m(p,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default p;
