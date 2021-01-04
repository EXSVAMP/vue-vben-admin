import{dk as e,a as r,r as i,u as o,b0 as t,R as s,d2 as a,dv as n,i as d,o as m,j as l,aM as p,aW as c,ap as f,aq as j,k as u,w as b,p as x,n as g}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./useSortable.a227f6d3.js";import"./index.63df68f8.js";import"./Trigger.e3ee00d7.js";import"./omit.fa5f69c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06f8d2e0.js";import"./CheckOutlined.7eddd459.js";import"./index.ee856824.js";import"./colors.4a59113e.js";import"./index.e9c76b61.js";import"./RightOutlined.8b7faa82.js";import"./index.874dac81.js";import"./types.0b2024d5.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./_baseFor.f4e5f03f.js";import"./index.157e5b0f.js";import"./index.a172b251.js";import"./index.49f51c29.js";import"./index.c7a723bb.js";import"./UpOutlined.3eedcb1d.js";import"./LeftOutlined.22980e9b.js";import"./index.0a2c42e4.js";import"./index.12e9aa85.js";import"./index.2eedb6b3.js";import"./index.5f2b7f1b.js";import"./index.cb3cff10.js";import"./zh_CN.0242bd16.js";import"./index.4d00a526.js";import"./index.e6dc8920.js";import"./CaretDownFilled.22ce7fec.js";import"./index.8d1e8c32.js";import"./CheckOutlined.3708797f.js";import"./CloseOutlined.bfc223d0.js";import{s as E}from"./index.efd70534.js";import"./FullscreenOutlined.bef0f37b.js";import"./LeftOutlined.5c049255.js";import"./LoadingOutlined.0e06bc81.js";import{s as y}from"./TableAction.3c60fdb8.js";import"./RightOutlined.536370f6.js";import"./SettingOutlined.2787675f.js";import"./index.d370ab61.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import"./index.0da51bc9.js";import"./useDescription.80208c28.js";import"./useAttrs.75b03407.js";import"./index.431d78e6.js";import{a as R}from"./index.c0c9b6ac.js";import"./useWindowSizeFn.b44974f1.js";import"./useForm.78921f4a.js";import"./uuid.40269c00.js";import"./useExpose.a7bd01cb.js";import{u as T}from"./useTable.cf8f4be4.js";import{getColumns as C}from"./data.4d502aa6.js";import h from"./DetailModal.39ab5cf2.js";var k;(k||(k={})).Error="/error";var O=r({name:"ErrorHandler",components:{DetailModal:h,BasicTable:E,TableAction:y},setup(){const r=i(),d=i([]),{t:m}=o(),[l,{setTableData:p}]=T({title:m("sys.errorLog.tableTitle"),columns:C(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[c,{openModal:f}]=R();return t((()=>n.getErrorInfoState),(e=>{s((()=>{p(a(e))}))}),{immediate:!0}),{register:l,registerModal:c,handleDetail:function(e){r.value=e,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){d.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await e.request({url:k.Error,method:"GET"})},imgListRef:d,rowInfoRef:r,t:m}}});const w={class:"p-4"};O.render=function(e,r,i,o,t,s){const a=d("DetailModal"),n=d("a-button"),E=d("TableAction"),y=d("BasicTable");return m(),l("div",w,[(m(!0),l(p,null,c(e.imgListRef,(e=>f((m(),l("img",{key:e,src:e},null,8,["src"])),[[j,!1]]))),128)),u(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),u(y,{onRegister:e.register,class:"error-handle-table"},{toolbar:b((()=>[u(n,{onClick:e.fireVueError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireResourceError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireAjaxError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:r})=>[u(E,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default O;