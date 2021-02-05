import{d as e,h as o,o as i,i as t,w as r,j as s,m as d}from"./index.2ebd7bfa.js";import{A as n}from"./index.e42abba8.js";import{b as a}from"./index.016bc34a.js";import p from"./Modal1.a55c95be.js";import m from"./Modal2.2d29484e.js";import l from"./Modal3.c08c2442.js";import j from"./Modal4.7e09c868.js";import{_ as c}from"./index.987c4c53.js";import"./vendor.3b1829c7.js";import"./useTimeout.def0159f.js";import"./useAttrs.11cd1fa7.js";import"./useWindowSizeFn.227bb415.js";import"./index.c9fd18b2.js";import"./index.704fa2a9.js";import"./domUtils.e1c3618e.js";import"./_stringToArray.bc74427c.js";import"./RightOutlined.62bde205.js";/* empty css              */import"./useScrollTo.d9e2f1b0.js";import"./animation.2dca1ea3.js";import"./FullscreenOutlined.92085b1f.js";import"./isEqual.0a78f514.js";import"./index.0a97ddb0.js";import"./index.0dd18cf4.js";import"./index.909f9362.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.9bf2e605.js";import"./get.cc921876.js";import"./_baseProperty.74f89655.js";import"./toInteger.3d1037bd.js";import"./index.4b804b62.js";import"./index.94ee5ef0.js";import"./SearchOutlined.a2705f11.js";import"./EyeOutlined.9fd98a6b.js";import"./index.74e21404.js";import"./CheckOutlined.a020ea7c.js";import"./DownOutlined.56671cd5.js";import"./index.dbc26e07.js";import"./colors.70040742.js";import"./index.937e178b.js";import"./UpOutlined.d6611b32.js";import"./index.fca230f3.js";import"./RedoOutlined.5e75bc04.js";import"./index.b6fde2b2.js";import"./EllipsisOutlined.41880f5e.js";import"./types.d45ad2ea.js";import"./Tree.e43bd54d.js";import"./util.f06bef37.js";import"./uuid.4b9789bd.js";import"./index.731a2f67.js";import"./DeleteOutlined.719311aa.js";import"./index.257b8920.js";import"./index.17012094.js";import"./index.3981b83f.js";import"./LeftOutlined.7cf7902c.js";import"./download.3820d830.js";import"./useForm.5d7a97b6.js";import"./index.27444d3c.js";import"./index.5493b21b.js";import"./usePageContext.1954f1d6.js";import"./transButton.6f73f198.js";import"./ArrowLeftOutlined.e3642823.js";var f=e({components:{Alert:n,Modal1:p,Modal2:m,Modal3:l,Modal4:j,PageWrapper:c},setup(){const[e,{openModal:o,setModalProps:i}]=a(),[t,{openModal:r}]=a(),[s,{openModal:d}]=a(),[n,{openModal:p}]=a();return{register1:e,openModal1:o,register2:t,openModal2:r,register3:s,openModal3:d,register4:n,openModal4:p,send:function(){p(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=d(" 打开弹窗 默认可以拖动/全屏 "),b=d(" 打开弹窗 "),g=d(" 打开弹窗 "),M=d(" 打开弹窗并传递数据 ");f.render=function(e,d,n,a,p,m){const l=o("Alert"),j=o("a-button"),c=o("Modal1"),f=o("Modal2"),x=o("Modal3"),y=o("Modal4"),O=o("PageWrapper");return i(),t(O,{title:"modal组件使用示例"},{default:r((()=>[s(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:r((()=>[u])),_:1},8,["onClick"]),s(l,{message:"内外同时同时显示隐藏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openModal2},{default:r((()=>[b])),_:1},8,["onClick"]),s(l,{message:"自适应高度","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openModal3},{default:r((()=>[g])),_:1},8,["onClick"]),s(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.send},{default:r((()=>[M])),_:1},8,["onClick"]),s(c,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(x,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default f;
