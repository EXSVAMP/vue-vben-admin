import{j as e,a7 as t,a8 as i,d as n,b1 as o,u as s,r,bP as a,h as l,o as d,i as c,w as p,l as m}from"./index.0b3ead59.js";/* empty css              */import{D as u,M as f}from"./index.86c67de7.js";import{u as j}from"./BasicForm.1b97055c.js";import"./Dropdown.821f8edc.js";import"./vendor.3b1829c7.js";import"./RightOutlined.1fbca3cd.js";import"./EllipsisOutlined.34a1a7b6.js";import"./types.899ae8eb.js";import"./isEqual.983b4f1d.js";import"./toInteger.0187ddcf.js";import"./index.b44da2b0.js";import"./index.8d566d0b.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.8556a503.js";import"./get.c65e8723.js";import"./_baseProperty.74f89655.js";import"./index.fe035716.js";import"./index.3d55f827.js";import"./SearchOutlined.7dfd6c6f.js";import"./EyeOutlined.233641ac.js";import"./index.67666648.js";import"./CheckOutlined.479d9f3d.js";import"./DownOutlined.9bd5d48d.js";import"./index.d54b400d.js";import"./index.15085294.js";import"./UpOutlined.8b99a309.js";import"./index.f614b5ca.js";import"./RedoOutlined.36a7f9a6.js";import"./Tree.9571a5cb.js";import"./util.7ccc19bb.js";import"./uuid.e5ea0ca5.js";import"./index.bbacf504.js";import"./DeleteOutlined.204ddc4f.js";import"./index.b4f8a0bd.js";import"./useModal.89f7bd9b.js";import"./useTimeout.3fa0fb28.js";import"./useWindowSizeFn.ec6e0dce.js";import"./ScrollContainer.5c821124.js";import"./index.91e67cac.js";import"./domUtils.51893063.js";import"./_stringToArray.66f5de98.js";import"./useScrollTo.999bcb83.js";import"./FullscreenOutlined.6472a3d6.js";import"./index.f4d3924f.js";import"./index.c3ba58a0.js";import"./LeftOutlined.311810c5.js";import"./download.0e86f135.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"}}]},name:"column-height",theme:"outlined"};function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var y=function(n,o){var s=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){g(e,t,i[t])}))}return e}({},n,o.attrs);return e(i,t(s,{icon:b}),null)};y.displayName="ColumnHeightOutlined",y.inheritAttrs=!1;var O=n({name:"SizeSetting",components:{ColumnHeightOutlined:y,Tooltip:o,Dropdown:u,Menu:f,MenuItem:f.Item},setup(){const e=j(),{t:t}=s(),i=r([e.getSize()]);return{handleTitleClick:function({key:t}){i.value=[t],e.setProps({size:t})},selectedKeysRef:i,getPopupContainer:a,t:t}}});O.render=function(t,i,n,o,s,r){const a=l("ColumnHeightOutlined"),u=l("MenuItem"),f=l("Menu"),j=l("Dropdown"),b=l("Tooltip");return d(),c(b,{placement:"top"},{title:p((()=>[e("span",null,m(t.t("component.table.settingDens")),1)])),default:p((()=>[e(j,{placement:"bottomCenter",trigger:["click"],getPopupContainer:t.getPopupContainer},{overlay:p((()=>[e(f,{onClick:t.handleTitleClick,selectable:"",selectedKeys:t.selectedKeysRef,"onUpdate:selectedKeys":i[1]||(i[1]=e=>t.selectedKeysRef=e)},{default:p((()=>[e(u,{key:"default"},{default:p((()=>[e("span",null,m(t.t("component.table.settingDensDefault")),1)])),_:1}),e(u,{key:"middle"},{default:p((()=>[e("span",null,m(t.t("component.table.settingDensMiddle")),1)])),_:1}),e(u,{key:"small"},{default:p((()=>[e("span",null,m(t.t("component.table.settingDensSmall")),1)])),_:1})])),_:1},8,["onClick","selectedKeys"])])),default:p((()=>[e(a)])),_:1},8,["getPopupContainer"])])),_:1})};export default O;
