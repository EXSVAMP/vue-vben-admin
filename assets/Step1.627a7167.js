import{d as e,dn as t,dp as i,h as s,o,i as a,j as r,bw as d,m as n}from"./index.0b3ead59.js";import{S as p}from"./index.67666648.js";import{I as m}from"./index.3d55f827.js";import{D as c}from"./index.f4d3924f.js";import{f as l}from"./BasicForm.1b97055c.js";import{u}from"./useForm.51e14cd1.js";import{step1Schemas as j}from"./data.2505cb7f.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.7dfd6c6f.js";import"./CheckOutlined.479d9f3d.js";import"./DownOutlined.9bd5d48d.js";import"./EyeOutlined.233641ac.js";import"./index.b44da2b0.js";import"./index.8d566d0b.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.8556a503.js";import"./isEqual.983b4f1d.js";import"./get.c65e8723.js";import"./_baseProperty.74f89655.js";import"./toInteger.0187ddcf.js";import"./index.fe035716.js";import"./index.d54b400d.js";import"./index.15085294.js";import"./UpOutlined.8b99a309.js";import"./index.f614b5ca.js";import"./RightOutlined.1fbca3cd.js";import"./RedoOutlined.36a7f9a6.js";import"./index.86c67de7.js";import"./EllipsisOutlined.34a1a7b6.js";import"./types.899ae8eb.js";import"./Tree.9571a5cb.js";import"./util.7ccc19bb.js";/* empty css              */import"./uuid.e5ea0ca5.js";import"./index.bbacf504.js";import"./DeleteOutlined.204ddc4f.js";import"./index.b4f8a0bd.js";import"./useModal.89f7bd9b.js";import"./useTimeout.3fa0fb28.js";import"./useWindowSizeFn.ec6e0dce.js";import"./ScrollContainer.5c821124.js";import"./index.91e67cac.js";import"./domUtils.51893063.js";import"./_stringToArray.66f5de98.js";import"./useScrollTo.999bcb83.js";import"./FullscreenOutlined.6472a3d6.js";import"./Dropdown.821f8edc.js";import"./index.c3ba58a0.js";import"./LeftOutlined.311810c5.js";import"./download.0e86f135.js";var f=e({components:{BasicForm:l,[p.name]:p,ASelectOption:p.Option,[m.name]:m,[m.Group.name]:m.Group,[c.name]:c},emits:["next"],setup(e,{emit:t}){const[i,{validate:s}]=u({labelWidth:100,schemas:j,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:i}}});const b=d("data-v-c22ef27a");t("data-v-c22ef27a");const v={class:"step1"},x={class:"step1-form"},O=n(" 支付宝 "),h=n(" 银联 "),y=r("h3",null,"说明",-1),g=r("h4",null,"转账到支付宝账户",-1),_=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),w=r("h4",null,"转账到银行卡",-1),F=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);i();const S=b(((e,t,i,d,n,p)=>{const m=s("a-select-option"),c=s("a-select"),l=s("a-input"),u=s("a-input-group"),j=s("BasicForm"),f=s("a-divider");return o(),a("div",v,[r("div",x,[r(j,{onRegister:e.register},{fac:b((({model:e,field:t})=>[r(u,{compact:""},{default:b((()=>[r(c,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:b((()=>[r(m,{value:"zfb"},{default:b((()=>[O])),_:1}),r(m,{value:"yl"},{default:b((()=>[h])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(l,{class:"pay-input",value:e[t],"onUpdate:value":i=>e[t]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(f),y,g,_,w,F])}));f.render=S,f.__scopeId="data-v-c22ef27a";export default f;
