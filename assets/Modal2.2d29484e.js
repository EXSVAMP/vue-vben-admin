import{_ as s,a as e}from"./index.016bc34a.js";import{d as t,h as o,o as i,i as a,w as r,j as l,a7 as d,m as n}from"./index.2ebd7bfa.js";import"./useTimeout.def0159f.js";import"./useAttrs.11cd1fa7.js";import"./useWindowSizeFn.227bb415.js";import"./index.c9fd18b2.js";import"./index.704fa2a9.js";import"./domUtils.e1c3618e.js";import"./_stringToArray.bc74427c.js";import"./RightOutlined.62bde205.js";/* empty css              */import"./useScrollTo.d9e2f1b0.js";import"./animation.2dca1ea3.js";import"./FullscreenOutlined.92085b1f.js";import"./isEqual.0a78f514.js";import"./vendor.3b1829c7.js";var p=t({components:{BasicModal:s},setup(){const[s,{closeModal:t,setModalProps:o}]=e();return{register:s,closeModal:t,setModalProps:()=>{o({title:"Modal New Title"})}}}});const c=n(" 从内部关闭弹窗 "),m=n(" 从内部修改title ");p.render=function(s,e,t,n,p,u){const f=o("a-button"),j=o("BasicModal");return i(),a(j,d(s.$attrs,{onRegister:s.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:r((()=>[l(f,{type:"primary",onClick:s.closeModal,class:"mr-2"},{default:r((()=>[c])),_:1},8,["onClick"]),l(f,{type:"primary",onClick:s.setModalProps},{default:r((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;
