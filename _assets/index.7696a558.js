import{a as e,i as o,o as i,j as s,k as r,w as t,p as n}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./index.63df68f8.js";import"./Trigger.e3ee00d7.js";import"./omit.fa5f69c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06f8d2e0.js";import"./CheckOutlined.7eddd459.js";import"./index.ee856824.js";import{A as a}from"./index.c6a6b983.js";import"./colors.4a59113e.js";import"./RightOutlined.8b7faa82.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./index.157e5b0f.js";import"./index.a172b251.js";import"./index.49f51c29.js";import"./index.c7a723bb.js";import"./UpOutlined.3eedcb1d.js";import"./index.0a2c42e4.js";import"./index.12e9aa85.js";import"./index.5f2b7f1b.js";import"./index.4d00a526.js";import"./index.e6dc8920.js";import"./index.8d1e8c32.js";import"./CloseOutlined.bfc223d0.js";import"./FullscreenOutlined.bef0f37b.js";import"./LoadingOutlined.0e06bc81.js";import"./RightOutlined.536370f6.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import"./useAttrs.75b03407.js";import"./index.431d78e6.js";import{a as d}from"./index.c0c9b6ac.js";import"./useWindowSizeFn.b44974f1.js";import"./useForm.78921f4a.js";import l from"./Modal1.47a0b9e9.js";import p from"./Modal2.4f4d4465.js";import m from"./Modal3.d97b55b3.js";import c from"./Modal4.df9bcc4c.js";var f=e({components:{Alert:a,Modal1:l,Modal2:p,Modal3:m,Modal4:c},setup(){const[e,{openModal:o,setModalProps:i}]=d(),[s,{openModal:r}]=d(),[t,{openModal:n}]=d(),[a,{openModal:l}]=d();return{register1:e,openModal1:o,register2:s,openModal2:r,register3:t,openModal3:n,register4:a,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const j={class:"px-10 py-4"},u=n("打开弹窗 默认可以拖动/全屏"),g=n("打开弹窗"),b=n("打开弹窗"),M=n("打开弹窗并传递数据");f.render=function(e,n,a,d,l,p){const m=o("Alert"),c=o("a-button"),f=o("Modal1"),x=o("Modal2"),y=o("Modal3"),R=o("Modal4");return i(),s("div",j,[r(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:t((()=>[u])),_:1},8,["onClick"]),r(m,{message:"内外同时同时显示隐藏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:t((()=>[g])),_:1},8,["onClick"]),r(m,{message:"自适应高度","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:t((()=>[b])),_:1},8,["onClick"]),r(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[M])),_:1},8,["onClick"]),r(f,{onRegister:e.register1},null,8,["onRegister"]),r(x,{onRegister:e.register2},null,8,["onRegister"]),r(y,{onRegister:e.register3},null,8,["onRegister"]),r(R,{onRegister:e.register4},null,8,["onRegister"])])};export default f;