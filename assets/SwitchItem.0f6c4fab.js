import{d as e,aK as t,u as i,K as s,h as a,o as n,i as d,j as o,l as r,a7 as c,bw as l}from"./index.2ebd7bfa.js";import{S as p}from"./index.fca230f3.js";import{b as m}from"./index.ec0cac4b.js";import"./vendor.3b1829c7.js";import"./index.257b8920.js";import"./index.ad386ec6.js";import"./index.705f1c12.js";import"./index.c9fd18b2.js";import"./index.704fa2a9.js";import"./domUtils.e1c3618e.js";import"./_stringToArray.bc74427c.js";import"./RightOutlined.62bde205.js";/* empty css              */import"./useTimeout.def0159f.js";import"./useScrollTo.d9e2f1b0.js";import"./animation.2dca1ea3.js";import"./ArrowLeftOutlined.e3642823.js";import"./useAttrs.11cd1fa7.js";import"./isEqual.0a78f514.js";import"./useHeaderSetting.547c836a.js";import"./SettingOutlined.f67c4bdb.js";var f=e({name:"SwitchItem",components:{Switch:p},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:a}=t("setting-switch-item"),{t:n}=i();return{prefixCls:a,t:n,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:s((()=>e.def?{checked:e.def}:{}))}}});const u=l("data-v-3a858942")(((e,t,i,s,l,p)=>{const m=a("Switch");return n(),d("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(m,c(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));f.render=u,f.__scopeId="data-v-3a858942";export default f;
