import{d as e,aK as t,h as i,o as s,i as r,aL as o,aM as a,j as n}from"./index.2ebd7bfa.js";import{b as d}from"./index.ec0cac4b.js";import{C as c}from"./CheckOutlined.a020ea7c.js";import"./vendor.3b1829c7.js";import"./index.257b8920.js";import"./index.ad386ec6.js";import"./index.705f1c12.js";import"./index.c9fd18b2.js";import"./index.704fa2a9.js";import"./domUtils.e1c3618e.js";import"./_stringToArray.bc74427c.js";import"./RightOutlined.62bde205.js";/* empty css              */import"./useTimeout.def0159f.js";import"./useScrollTo.d9e2f1b0.js";import"./animation.2dca1ea3.js";import"./ArrowLeftOutlined.e3642823.js";import"./useAttrs.11cd1fa7.js";import"./isEqual.0a78f514.js";import"./useHeaderSetting.547c836a.js";import"./SettingOutlined.f67c4bdb.js";var p=e({name:"ThemePicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:i}=t("setting-theme-picker");return{prefixCls:i,handleClick:function(t){e.event&&d(e.event,t)}}}});p.render=function(e,t,d,c,p,m){const l=i("CheckOutlined");return s(),r("div",{class:e.prefixCls},[(s(!0),r(o,null,a(e.colorList||[],(t=>(s(),r("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[n(l)],14,["onClick"])))),128))],2)};export default p;
