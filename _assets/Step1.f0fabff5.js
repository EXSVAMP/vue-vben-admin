let t=document.createElement("style");t.innerHTML=".step1-form[data-v-686dc77c]{width:450px;margin:0 auto}.step1 h3[data-v-686dc77c]{margin:0 0 12px;font-size:16px;line-height:32px;color:rgba(0,0,0,.45)}.step1 h4[data-v-686dc77c]{margin:0 0 4px;font-size:14px;line-height:22px;color:rgba(0,0,0,.45)}.step1 p[data-v-686dc77c]{color:rgba(0,0,0,.45)}.pay-select[data-v-686dc77c]{width:20%}.pay-input[data-v-686dc77c]{width:70%}",document.head.appendChild(t);import{a as e,d6 as i,d7 as s,i as a,o,j as d,k as r,bp as n,p}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./index.63df68f8.js";import"./Trigger.e3ee00d7.js";import"./omit.fa5f69c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06f8d2e0.js";import"./CheckOutlined.7eddd459.js";import{s as c}from"./index.ee856824.js";import"./colors.4a59113e.js";import"./RightOutlined.8b7faa82.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./index.157e5b0f.js";import"./index.a172b251.js";import"./index.49f51c29.js";import"./index.c7a723bb.js";import"./UpOutlined.3eedcb1d.js";import"./index.0a2c42e4.js";import"./index.12e9aa85.js";import"./index.5f2b7f1b.js";import"./index.4d00a526.js";import"./index.e6dc8920.js";import"./index.8d1e8c32.js";import"./CloseOutlined.bfc223d0.js";import"./FullscreenOutlined.bef0f37b.js";import"./LoadingOutlined.0e06bc81.js";import"./RightOutlined.536370f6.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import"./useAttrs.75b03407.js";import"./index.431d78e6.js";import"./index.c0c9b6ac.js";import"./useWindowSizeFn.b44974f1.js";import{u as l}from"./useForm.78921f4a.js";import{step1Schemas as m}from"./data.9968c9c2.js";var u=e({components:{BasicForm:c},emits:["next"],setup(t,{emit:e}){const[i,{validate:s}]=l({labelWidth:100,schemas:m,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const t=await s();e("next",t)}catch(t){}}});return{register:i}}});const f=n("data-v-686dc77c");i("data-v-686dc77c");const j={class:"step1"},x={class:"step1-form"},b=p(" 支付宝 "),v=p(" 银联 "),h=r("h3",null,"说明",-1),g=r("h4",null,"转账到支付宝账户",-1),y=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),O=r("h4",null,"转账到银行卡",-1),_=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);s();const w=f(((t,e,i,s,n,p)=>{const c=a("a-select-option"),l=a("a-select"),m=a("a-input"),u=a("a-input-group"),w=a("BasicForm"),F=a("a-divider");return o(),d("div",j,[r("div",x,[r(w,{onRegister:t.register},{fac:f((({model:t,field:e})=>[r(u,{compact:""},{default:f((()=>[r(l,{value:t.pay,"onUpdate:value":e=>t.pay=e,class:"pay-select"},{default:f((()=>[r(c,{value:"zfb"},{default:f((()=>[b])),_:1}),r(c,{value:"yl"},{default:f((()=>[v])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(m,{class:"pay-input",value:t[e],"onUpdate:value":i=>t[e]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(F),h,g,y,O,_])}));u.render=w,u.__scopeId="data-v-686dc77c";export default u;