import{d as e,f as t,dy as a,K as s,dz as o,dn as r,dp as n,h as i,o as d,i as l,bw as p,j as u,l as m,m as c}from"./index.0b3ead59.js";import{A as f}from"./index.b4f8a0bd.js";import j from"./CurrentPermissionMode.cb11965a.js";import{_ as b}from"./index.16224c8b.js";import"./vendor.3b1829c7.js";import"./index.f4d3924f.js";import"./index.b99c961b.js";import"./index.86c67de7.js";import"./RightOutlined.1fbca3cd.js";import"./EllipsisOutlined.34a1a7b6.js";import"./types.899ae8eb.js";import"./isEqual.983b4f1d.js";import"./toInteger.0187ddcf.js";import"./DownOutlined.9bd5d48d.js";/* empty css              */import"./index.a348ae4d.js";import"./usePageContext.f14eba1e.js";import"./transButton.76298618.js";import"./ArrowLeftOutlined.e8aefb02.js";var R=e({components:{Alert:f,CurrentPermissionMode:j,PageWrapper:b},setup(){const{changeRole:e}=o();return{userStore:t,RoleEnum:a,isSuper:s((()=>t.getRoleListState.includes(a.SUPER))),isTest:s((()=>t.getRoleListState.includes(a.TEST))),changeRole:e}}});const g=p("data-v-9a73aaae");r("data-v-9a73aaae");const E=c(" 当前角色: "),S={class:"mt-4"},x=c(" 权限切换(请先切换权限模式为前端角色权限模式): ");n();const y=g(((e,t,a,s,o,r)=>{const n=i("CurrentPermissionMode"),p=i("Alert"),f=i("a-button"),j=i("a-button-group"),b=i("PageWrapper");return d(),l(b,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:g((()=>[u(n),u("p",null,[E,u("a",null,m(e.userStore.getRoleListState),1)]),u(p,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),u("div",S,[x,u(j,null,{default:g((()=>[u(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:g((()=>[c(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),u(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:g((()=>[c(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));R.render=y,R.__scopeId="data-v-9a73aaae";export default R;
