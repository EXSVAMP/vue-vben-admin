import{d as e,r as o,dn as t,dp as r,h as i,o as s,i as n,bw as d,j as l,m as p}from"./index.0b3ead59.js";import{C as a}from"./index.92a4e01f.js";import"./index.22593f55.js";import"./index.8d566d0b.js";import{f as m}from"./BasicForm.1b97055c.js";import{u as c}from"./useForm.51e14cd1.js";import f from"./PersonTable.844541e7.js";import{_ as b}from"./index.16224c8b.js";import"./vendor.3b1829c7.js";import"./index.fe035716.js";import"./UpOutlined.8b99a309.js";import"./LeftOutlined.311810c5.js";import"./DownOutlined.9bd5d48d.js";import"./RightOutlined.1fbca3cd.js";import"./PlusOutlined.8dc6eb90.js";import"./responsiveObserve.c545f1cc.js";import"./index.b44da2b0.js";import"./findIndex.8556a503.js";import"./isEqual.983b4f1d.js";import"./get.c65e8723.js";import"./_baseProperty.74f89655.js";import"./toInteger.0187ddcf.js";import"./index.3d55f827.js";import"./SearchOutlined.7dfd6c6f.js";import"./EyeOutlined.233641ac.js";import"./index.67666648.js";import"./CheckOutlined.479d9f3d.js";import"./index.d54b400d.js";import"./index.15085294.js";import"./index.f614b5ca.js";import"./RedoOutlined.36a7f9a6.js";import"./index.86c67de7.js";import"./EllipsisOutlined.34a1a7b6.js";import"./types.899ae8eb.js";import"./Tree.9571a5cb.js";import"./util.7ccc19bb.js";/* empty css              */import"./uuid.e5ea0ca5.js";import"./index.bbacf504.js";import"./DeleteOutlined.204ddc4f.js";import"./index.b4f8a0bd.js";import"./useModal.89f7bd9b.js";import"./useTimeout.3fa0fb28.js";import"./useWindowSizeFn.ec6e0dce.js";import"./ScrollContainer.5c821124.js";import"./index.91e67cac.js";import"./domUtils.51893063.js";import"./_stringToArray.66f5de98.js";import"./useScrollTo.999bcb83.js";import"./FullscreenOutlined.6472a3d6.js";import"./index.f4d3924f.js";import"./Dropdown.821f8edc.js";import"./index.c3ba58a0.js";import"./download.0e86f135.js";import"./index.96333ad4.js";import"./index.c4b29bcb.js";import"./DoubleLeftOutlined.11303b27.js";import"./DoubleRightOutlined.ffcd1992.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.76298618.js";import"./CaretDownFilled.8abf03ff.js";import"./clickOutside.f68ea04f.js";import"./useSortable.b1e8106f.js";import"./useExpose.95e938c2.js";import"./useTable.71c0807b.js";import"./index.b99c961b.js";import"./index.a348ae4d.js";import"./usePageContext.f14eba1e.js";import"./ArrowLeftOutlined.e8aefb02.js";const u=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],j=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:u},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:j},required:!0,colProps:{offset:2}}],x=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:u},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:j},required:!0,colProps:{offset:2}}];var g=e({components:{BasicForm:m,PersonTable:f,PageWrapper:b,[a.name]:a},setup(){const e=o(null),[t,{validate:r}]=c({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[i,{validate:s}]=c({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1});return{register:t,registerTask:i,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([r(),s()])}catch(o){}},tableRef:e}}});const O=d("data-v-2d2b3260");t("data-v-2d2b3260");const h=p(" 提交 ");r();const v=O(((e,o,t,r,d,p)=>{const a=i("BasicForm"),m=i("a-card"),c=i("PersonTable"),f=i("a-button"),b=i("PageWrapper");return s(),n(b,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:O((()=>[l(f,{type:"primary",onClick:e.submitAll},{default:O((()=>[h])),_:1},8,["onClick"])])),default:O((()=>[l(m,{title:"仓库管理",bordered:!1},{default:O((()=>[l(a,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(m,{title:"任务管理",bordered:!1,class:"mt-5"},{default:O((()=>[l(a,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),l(m,{title:"成员管理",bordered:!1,class:"mt-5"},{default:O((()=>[l(c,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=v,g.__scopeId="data-v-2d2b3260";export default g;
