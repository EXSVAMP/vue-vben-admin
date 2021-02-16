import{_ as e}from"./index.96333ad4.js";import{o as t}from"./select.cc045e7e.js";import{d as i}from"./table.dd74e143.js";import{d,h as o,o as n,i as s,j as r}from"./index.0b3ead59.js";import{u as a}from"./useTable.71c0807b.js";import"./index.67666648.js";import"./SearchOutlined.7dfd6c6f.js";import"./CheckOutlined.479d9f3d.js";import"./DownOutlined.9bd5d48d.js";import"./BasicForm.1b97055c.js";import"./index.b44da2b0.js";import"./index.8d566d0b.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.8556a503.js";import"./isEqual.983b4f1d.js";import"./get.c65e8723.js";import"./_baseProperty.74f89655.js";import"./toInteger.0187ddcf.js";import"./index.fe035716.js";import"./index.3d55f827.js";import"./EyeOutlined.233641ac.js";import"./index.d54b400d.js";import"./index.15085294.js";import"./UpOutlined.8b99a309.js";import"./index.f614b5ca.js";import"./RightOutlined.1fbca3cd.js";import"./RedoOutlined.36a7f9a6.js";import"./index.86c67de7.js";import"./EllipsisOutlined.34a1a7b6.js";import"./types.899ae8eb.js";import"./Tree.9571a5cb.js";import"./util.7ccc19bb.js";/* empty css              */import"./uuid.e5ea0ca5.js";import"./index.bbacf504.js";import"./DeleteOutlined.204ddc4f.js";import"./index.b4f8a0bd.js";import"./useModal.89f7bd9b.js";import"./useTimeout.3fa0fb28.js";import"./useWindowSizeFn.ec6e0dce.js";import"./ScrollContainer.5c821124.js";import"./index.91e67cac.js";import"./domUtils.51893063.js";import"./_stringToArray.66f5de98.js";import"./useScrollTo.999bcb83.js";import"./FullscreenOutlined.6472a3d6.js";import"./index.f4d3924f.js";import"./Dropdown.821f8edc.js";import"./index.c3ba58a0.js";import"./LeftOutlined.311810c5.js";import"./download.0e86f135.js";import"./index.c4b29bcb.js";import"./DoubleLeftOutlined.11303b27.js";import"./DoubleRightOutlined.ffcd1992.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.76298618.js";import"./CaretDownFilled.8abf03ff.js";import"./useForm.51e14cd1.js";import"./clickOutside.f68ea04f.js";import"./useSortable.b1e8106f.js";import"./useExpose.95e938c2.js";const p=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:t},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var m=d({components:{BasicTable:e},setup(){const[e]=a({title:"可编辑单元格示例",api:i,columns:p,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const l={class:"p-4"};m.render=function(e,t,i,d,a,p){const m=o("BasicTable");return n(),s("div",l,[r(m,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default m;
