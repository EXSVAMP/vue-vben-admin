import{d as e,u as s,aK as i,K as r,dA as t,f as o,h as a,o as d,i as n,w as m,j as l,l as p,m as c,a7 as j}from"./index.2ebd7bfa.js";import{_ as f,a as u}from"./index.016bc34a.js";import{_ as b}from"./index.0a97ddb0.js";import{h as x}from"./header.d801b988.js";import{u as g}from"./useForm.5d7a97b6.js";import"./vendor.3b1829c7.js";import"./useTimeout.def0159f.js";import"./useAttrs.11cd1fa7.js";import"./useWindowSizeFn.227bb415.js";import"./index.c9fd18b2.js";import"./index.704fa2a9.js";import"./domUtils.e1c3618e.js";import"./_stringToArray.bc74427c.js";import"./RightOutlined.62bde205.js";/* empty css              */import"./useScrollTo.d9e2f1b0.js";import"./animation.2dca1ea3.js";import"./FullscreenOutlined.92085b1f.js";import"./isEqual.0a78f514.js";import"./index.0dd18cf4.js";import"./index.909f9362.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.9bf2e605.js";import"./get.cc921876.js";import"./_baseProperty.74f89655.js";import"./toInteger.3d1037bd.js";import"./index.4b804b62.js";import"./index.94ee5ef0.js";import"./SearchOutlined.a2705f11.js";import"./EyeOutlined.9fd98a6b.js";import"./index.74e21404.js";import"./CheckOutlined.a020ea7c.js";import"./DownOutlined.56671cd5.js";import"./index.dbc26e07.js";import"./colors.70040742.js";import"./index.937e178b.js";import"./UpOutlined.d6611b32.js";import"./index.fca230f3.js";import"./RedoOutlined.5e75bc04.js";import"./index.b6fde2b2.js";import"./EllipsisOutlined.41880f5e.js";import"./types.d45ad2ea.js";import"./Tree.e43bd54d.js";import"./util.f06bef37.js";import"./uuid.4b9789bd.js";import"./index.731a2f67.js";import"./DeleteOutlined.719311aa.js";import"./index.e42abba8.js";import"./index.257b8920.js";import"./index.17012094.js";import"./index.3981b83f.js";import"./LeftOutlined.7cf7902c.js";import"./download.3820d830.js";var h=e({name:"LockModal",components:{BasicModal:f,BasicForm:b},setup(){const{t:e}=s(),{prefixCls:a}=i("header-lock-modal"),d=r((()=>{var e;return null==(e=o.getUserInfoState)?void 0:e.realName})),[n,{closeModal:m}]=u(),[l,{validateFields:p,resetFields:c}]=g({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:a,getRealName:d,register:n,registerForm:l,handleLock:async function(){const e=(await p()).password;m(),t.commitLockInfoState({isLock:!0,pwd:e}),await c()},headerImg:x}}});h.render=function(e,s,i,r,t,o){const f=a("BasicForm"),u=a("a-button"),b=a("BasicModal");return d(),n(b,j({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:m((()=>[l("div",{class:`${e.prefixCls}__entry`},[l("div",{class:`${e.prefixCls}__header`},[l("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),l("p",{class:`${e.prefixCls}__header-name`},p(e.getRealName),3)],2),l(f,{onRegister:e.registerForm},null,8,["onRegister"]),l("div",{class:`${e.prefixCls}__footer`},[l(u,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:m((()=>[c(p(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default h;
