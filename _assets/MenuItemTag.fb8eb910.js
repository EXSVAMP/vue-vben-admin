import{a as e,aV as i,I as t,o as r,j as s,n as o,m as n}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./useSortable.a227f6d3.js";import"./index.63df68f8.js";import"./Trigger.e3ee00d7.js";import"./omit.fa5f69c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06f8d2e0.js";import"./CheckOutlined.7eddd459.js";import"./index.c6a6b983.js";import"./index.99831407.js";import"./index.fc197608.js";import"./colors.4a59113e.js";import"./index.e9c76b61.js";import"./RightOutlined.8b7faa82.js";import{c as d}from"./index.17535709.js";import"./index.874dac81.js";import"./types.0b2024d5.js";import"./index.e66f21d9.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./_baseFor.f4e5f03f.js";import"./index.157e5b0f.js";import"./index.a172b251.js";import"./index.49f51c29.js";import"./index.c7a723bb.js";import"./index.ae61caad.js";import"./UpOutlined.3eedcb1d.js";import"./LeftOutlined.22980e9b.js";import"./index.0a2c42e4.js";import"./index.b08693ae.js";import"./index.12e9aa85.js";import"./index.2eedb6b3.js";import"./index.cb3cff10.js";import"./zh_CN.0242bd16.js";import"./index.ceeef7cc.js";import"./index.4d00a526.js";import"./index.bb6c9219.js";import"./index.59ca3f5a.js";import"./index.e6dc8920.js";import"./CaretDownFilled.22ce7fec.js";import"./FileOutlined.aa9b143a.js";import"./index.084e2f91.js";import"./index.e90c3e4e.js";import"./index.8d1e8c32.js";import"./RightOutlined.536370f6.js";import"./index.fd1c75fe.js";import"./index.d370ab61.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import"./index.431d78e6.js";import"./useWindowSizeFn.b44974f1.js";import"./index.d40d1fc3.js";import"./useHeaderSetting.d8375fc6.js";var m=e({name:"MenuItemTag",props:d,setup(e){const{prefixCls:r}=i("basic-menu-item-tag"),s=t((()=>{const{item:i,showTitle:t,isHorizontal:r}=e;if(!i||t||r)return!1;const{tag:s}=i;if(!s)return!1;const{dot:o,content:n}=s;return!(!o&&!n)})),o=t((()=>{if(!s.value)return"";const{item:i}=e,{tag:t}=i,{dot:r,content:o}=t;return r?"":o})),n=t((()=>{const{item:i}=e,{tag:t={}}=i||{},{dot:s,type:o="error"}=t;return[r,[`${r}--${o}`],{[`${r}--dot`]:s}]}));return{prefixCls:r,getTagClass:n,getShowTag:s,getContent:o}}});m.render=function(e,i,t,d,m,p){return e.getShowTag?(r(),s("span",{key:0,class:e.getTagClass},o(e.getContent),3)):n("v-if",!0)};export default m;