import{_ as e}from"./index.6b39c5d3.js";import{getBasicColumns as i,getBasicData as t}from"./tableData.252346e9.js";import{d as o,r,h as s,o as d,i as a,j as n,w as p,m as l,l as m}from"./index.2ebd7bfa.js";import"./index.74e21404.js";import"./SearchOutlined.a2705f11.js";import"./CheckOutlined.a020ea7c.js";import"./DownOutlined.56671cd5.js";import"./index.0a97ddb0.js";import"./index.0dd18cf4.js";import"./index.909f9362.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.9bf2e605.js";import"./isEqual.0a78f514.js";import"./get.cc921876.js";import"./_baseProperty.74f89655.js";import"./toInteger.3d1037bd.js";import"./index.4b804b62.js";import"./index.94ee5ef0.js";import"./EyeOutlined.9fd98a6b.js";import"./index.dbc26e07.js";import"./colors.70040742.js";import"./index.937e178b.js";import"./UpOutlined.d6611b32.js";import"./index.fca230f3.js";import"./RightOutlined.62bde205.js";import"./RedoOutlined.5e75bc04.js";import"./index.b6fde2b2.js";import"./EllipsisOutlined.41880f5e.js";import"./types.d45ad2ea.js";import"./Tree.e43bd54d.js";import"./util.f06bef37.js";import"./useAttrs.11cd1fa7.js";/* empty css              */import"./uuid.4b9789bd.js";import"./index.731a2f67.js";import"./DeleteOutlined.719311aa.js";import"./index.e42abba8.js";import"./index.016bc34a.js";import"./useTimeout.def0159f.js";import"./useWindowSizeFn.227bb415.js";import"./index.c9fd18b2.js";import"./index.704fa2a9.js";import"./domUtils.e1c3618e.js";import"./_stringToArray.bc74427c.js";import"./useScrollTo.d9e2f1b0.js";import"./animation.2dca1ea3.js";import"./FullscreenOutlined.92085b1f.js";import"./index.257b8920.js";import"./index.17012094.js";import"./index.3981b83f.js";import"./LeftOutlined.7cf7902c.js";import"./download.3820d830.js";import"./index.8b9a951a.js";import"./DoubleLeftOutlined.1267f122.js";import"./DoubleRightOutlined.e623c642.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.6f73f198.js";import"./CaretDownFilled.77298cf1.js";import"./clickOutside.9e475aad.js";import"./useSortable.ed3ff8e0.js";import"./SettingOutlined.f67c4bdb.js";import"./useExpose.c2b3ef22.js";import"./useForm.5d7a97b6.js";var c=o({components:{BasicTable:e},setup(){const e=r(!1),o=r(!1),s=r(!0),d=r(!0),a=r(!1);return{columns:i(),data:t(),canResize:e,loading:o,striped:s,border:d,toggleStriped:function(){s.value=!s.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){o.value=!0,setTimeout((()=>{o.value=!1,a.value={pageSize:20}}),3e3)},toggleBorder:function(){d.value=!d.value},pagination:a}}});const j={class:"p-4"},u=l(" 开启loading ");c.render=function(e,i,t,o,r,c){const f=s("a-button"),b=s("BasicTable");return d(),a("div",j,[n(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:p((()=>[n(f,{type:"primary",onClick:e.toggleCanResize},{default:p((()=>[l(m(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),n(f,{type:"primary",onClick:e.toggleBorder},{default:p((()=>[l(m(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),n(f,{type:"primary",onClick:e.toggleLoading},{default:p((()=>[u])),_:1},8,["onClick"]),n(f,{type:"primary",onClick:e.toggleStriped},{default:p((()=>[l(m(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default c;
