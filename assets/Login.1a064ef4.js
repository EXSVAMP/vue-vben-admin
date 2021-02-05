import{d as a,_ as e,A as s,r as o,u as l,a as t,L as n,b as r,c as i,e as c,f as d,t as u,g as m,h as f,o as g,i as p,j as w,k as _,l as b,w as v,m as y}from"./index.2ebd7bfa.js";import{C as h,F as j}from"./index.0dd18cf4.js";import"./index.909f9362.js";import{I as k}from"./index.94ee5ef0.js";import{R as x,C as L}from"./index.4b804b62.js";import"./vendor.3b1829c7.js";import"./findIndex.9bf2e605.js";import"./isEqual.0a78f514.js";import"./get.cc921876.js";import"./_baseProperty.74f89655.js";import"./toInteger.3d1037bd.js";import"./responsiveObserve.c545f1cc.js";import"./SearchOutlined.a2705f11.js";import"./EyeOutlined.9fd98a6b.js";var P=a({components:{[h.name]:h,[j.name]:j,[j.Item.name]:j.Item,[k.name]:k,[k.Password.name]:k.Password,AButton:e,AppLocalePicker:s,[x.name]:x,[L.name]:L},setup(){const a=o(null),e=o(!1),s=r(),{locale:f}=i(),{notification:g}=m(),{t:p}=l(),w=t({account:"vben",password:"123456"}),_=t({loading:!1}),b=t({account:[{required:!0,message:p("sys.login.accountPlaceholder"),trigger:"blur"}],password:[{required:!0,message:p("sys.login.passwordPlaceholder"),trigger:"blur"}]});return{formRef:a,formData:w,formState:_,formRules:b,login:async function(){const e=c(a);if(e){_.loading=!0;try{const a=await e.validate(),s=await d.login(u({password:a.password,username:a.account}));s&&g.success({message:p("sys.login.loginSuccessTitle"),description:`${p("sys.login.loginSuccessDesc")}: ${s.realName}`,duration:3})}catch(s){}finally{_.loading=!1}}},autoLogin:e,title:s&&s.title,logo:n,t:p,showLocale:f.show}}});const D={class:"login"},z=w("div",{class:"login-mask"},null,-1),I={class:"login-form-wrap"},R={class:"mx-6 login-form"},S={class:"px-2 py-10 login-form__content"};P.render=function(a,e,s,o,l,t){const n=f("AppLocalePicker"),r=f("a-input"),i=f("a-form-item"),c=f("a-input-password"),d=f("a-checkbox"),u=f("a-col"),m=f("a-button"),h=f("a-row"),j=f("a-form");return g(),p("div",D,[z,w("div",I,[w("div",R,[a.showLocale?(g(),p(n,{key:0,class:"login-form__locale"})):_("",!0),w("div",S,[w("header",null,[w("img",{src:a.logo,class:"mr-4"},null,8,["src"]),w("h1",null,b(a.title),1)]),w(j,{class:"login-form__main",model:a.formData,rules:a.formRules,ref:"formRef"},{default:v((()=>[w(i,{name:"account"},{default:v((()=>[w(r,{size:"large",value:a.formData.account,"onUpdate:value":e[1]||(e[1]=e=>a.formData.account=e),placeholder:"username: vben"},null,8,["value"])])),_:1}),w(i,{name:"password"},{default:v((()=>[w(c,{size:"large",visibilityToggle:"",value:a.formData.password,"onUpdate:value":e[2]||(e[2]=e=>a.formData.password=e),placeholder:"password: 123456"},null,8,["value"])])),_:1}),w(h,null,{default:v((()=>[w(u,{span:12},{default:v((()=>[w(i,null,{default:v((()=>[w(d,{checked:a.autoLogin,"onUpdate:checked":e[3]||(e[3]=e=>a.autoLogin=e),size:"small"},{default:v((()=>[y(b(a.t("sys.login.autoLogin")),1)])),_:1},8,["checked"])])),_:1})])),_:1}),w(u,{span:12},{default:v((()=>[w(i,{style:{"text-align":"right"}},{default:v((()=>[w(m,{type:"link",size:"small"},{default:v((()=>[y(b(a.t("sys.login.forgetPassword")),1)])),_:1})])),_:1})])),_:1})])),_:1}),w(i,null,{default:v((()=>[w(m,{type:"primary",size:"large",class:"rounded-sm",block:!0,onClick:a.login,loading:a.formState.loading},{default:v((()=>[y(b(a.t("sys.login.loginButton")),1)])),_:1},8,["onClick","loading"])])),_:1})])),_:1},8,["model","rules"])])])])])};export default P;
