import{_ as e}from"./index.6b39c5d3.js";import{o as t}from"./select.8e6c5579.js";import{d as i}from"./table.5d093973.js";import{d,h as o,o as n,i as s,j as r}from"./index.2ebd7bfa.js";import{u as a}from"./useTable.bba23bae.js";import"./index.74e21404.js";import"./SearchOutlined.a2705f11.js";import"./CheckOutlined.a020ea7c.js";import"./DownOutlined.56671cd5.js";import"./index.0a97ddb0.js";import"./index.0dd18cf4.js";import"./index.909f9362.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.9bf2e605.js";import"./isEqual.0a78f514.js";import"./get.cc921876.js";import"./_baseProperty.74f89655.js";import"./toInteger.3d1037bd.js";import"./index.4b804b62.js";import"./index.94ee5ef0.js";import"./EyeOutlined.9fd98a6b.js";import"./index.dbc26e07.js";import"./colors.70040742.js";import"./index.937e178b.js";import"./UpOutlined.d6611b32.js";import"./index.fca230f3.js";import"./RightOutlined.62bde205.js";import"./RedoOutlined.5e75bc04.js";import"./index.b6fde2b2.js";import"./EllipsisOutlined.41880f5e.js";import"./types.d45ad2ea.js";import"./Tree.e43bd54d.js";import"./util.f06bef37.js";import"./useAttrs.11cd1fa7.js";/* empty css              */import"./uuid.4b9789bd.js";import"./index.731a2f67.js";import"./DeleteOutlined.719311aa.js";import"./index.e42abba8.js";import"./index.016bc34a.js";import"./useTimeout.def0159f.js";import"./useWindowSizeFn.227bb415.js";import"./index.c9fd18b2.js";import"./index.704fa2a9.js";import"./domUtils.e1c3618e.js";import"./_stringToArray.bc74427c.js";import"./useScrollTo.d9e2f1b0.js";import"./animation.2dca1ea3.js";import"./FullscreenOutlined.92085b1f.js";import"./index.257b8920.js";import"./index.17012094.js";import"./index.3981b83f.js";import"./LeftOutlined.7cf7902c.js";import"./download.3820d830.js";import"./index.8b9a951a.js";import"./DoubleLeftOutlined.1267f122.js";import"./DoubleRightOutlined.e623c642.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.6f73f198.js";import"./CaretDownFilled.77298cf1.js";import"./clickOutside.9e475aad.js";import"./useSortable.ed3ff8e0.js";import"./SettingOutlined.f67c4bdb.js";import"./useExpose.c2b3ef22.js";import"./useForm.5d7a97b6.js";const p=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:t},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var m=d({components:{BasicTable:e},setup(){const[e]=a({title:"可编辑单元格示例",api:i,columns:p,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const l={class:"p-4"};m.render=function(e,t,i,d,a,p){const m=o("BasicTable");return n(),s("div",l,[r(m,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default m;
