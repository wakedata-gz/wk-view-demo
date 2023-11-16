import{_ as e}from"./wk-section.3aca4118.js";import{_ as l,s as t,j as o,h as a,o as s,a as n,e as u,w as i,B as c,m as d,u as r,f as v,t as w,l as f,C as p,T as h,F as _,i as k,r as m,c as y,b as C,P as b,D as x}from"./index-7b1e858d.js";import{r as O}from"./uni-app.es.9af6c891.js";import{_ as T}from"./wkv-button.00910b16.js";import"./wkv-icons.961e9f4a.js";const g=l({__name:"wkv-bottom-select",props:{show:{type:Boolean,default:!1},style:{type:Object,default:()=>({height:"40%"})},round:{type:Boolean,default:!1},closeClickOverlay:{type:Boolean,default:!0},title:{type:String,default:"请选择"},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"}},emits:["onOpen","onClose","onCancel","onConfirm","update:show"],setup(e,{emit:l}){const m=e;t((()=>m.show),(e=>{e?C():b()}));const y=o((()=>({...m.style,borderRadius:m.round?"12px 12px 0 0":"0"}))),C=()=>{l("onOpen")},b=()=>{m.closeClickOverlay&&l("update:show",!1),l("onClose")},x=()=>{l("update:show",!1),l("onCancel")},g=()=>{l("update:show",!1),l("onConfirm")};return(l,t)=>{const o=k,m=O(a("wkv-button"),T);return s(),n(_,null,[u(h,{name:"fade"},{default:i((()=>[c(u(o,{class:"wkv-bottom-select",style:d(r(y))},{default:i((()=>[u(o,{class:"wkv-bottom-select-title ellipsis-1"},{default:i((()=>[v(w(e.title),1)])),_:1}),u(o,{class:"wkv-bottom-select-body"},{default:i((()=>[f(l.$slots,"body",{},void 0,!0)])),_:3}),u(o,{class:"wkv-bottom-select-footer"},{default:i((()=>[u(m,{type:"secondary",onClick:x},{default:i((()=>[v(w(e.cancelText),1)])),_:1}),u(m,{type:"primary",onClick:g},{default:i((()=>[v(w(e.confirmText),1)])),_:1})])),_:1})])),_:3},8,["style"]),[[p,e.show]])])),_:3}),u(h,{name:"overlay"},{default:i((()=>[c(u(o,{class:"wkv-overlay",onClick:b},null,512),[[p,e.show]])])),_:1})],64)}}},[["__scopeId","data-v-cf1e6cc1"]]),j=l({__name:"index",setup(l){const t=["中国","美国","巴西","日本"],o=m(!1),c=m(!1),d=m(!1),r=m(!1),f=m(!1),p=m(!1),h=m(!1),j=m([0]),U=()=>{o.value=!0},$=()=>{c.value=!0},B=e=>{console.log("picker发送选择改变，携带值为",e.detail.value),j.value=e.detail.value},S=()=>{uni.$wkv.showToast({title:`选择值为：${t[j.value[0]]}`})},I=()=>{r.value=!0},D=()=>{d.value=!0},F=()=>{f.value=!0},P=()=>{uni.$wkv.showToast({title:"弹窗已打开"})},R=()=>{setTimeout((()=>{uni.$wkv.showToast({title:"弹窗已关闭"})}),300)},q=()=>{p.value=!0},z=()=>{h.value=!0};return(l,m)=>{const A=O(a("wk-section"),e),E=O(a("wkv-button"),T),G=O(a("wkv-bottom-select"),g),H=k,J=b,K=x;return s(),y(H,{class:"wkv-bottom-select-example"},{default:i((()=>[u(A,null,{default:i((()=>[v("空白容器：")])),_:1}),u(E,{onClick:U},{default:i((()=>[v("空白容器")])),_:1}),u(G,{show:o.value,"onUpdate:show":m[0]||(m[0]=e=>o.value=e)},null,8,["show"]),u(A,null,{default:i((()=>[v("带插槽容器：")])),_:1}),u(E,{onClick:$},{default:i((()=>[v("带插槽容器")])),_:1}),u(G,{show:c.value,"onUpdate:show":m[1]||(m[1]=e=>c.value=e),title:"插槽",onOnConfirm:S},{body:i((()=>[u(K,{value:j.value,onChange:B,"indicator-style":"height: 50px",class:"picker-view"},{default:i((()=>[u(J,null,{default:i((()=>[(s(),n(_,null,C(t,((e,l)=>u(H,{class:"picker-item",key:l},{default:i((()=>[v(w(e),1)])),_:2},1024))),64))])),_:1})])),_:1},8,["value"])])),_:1},8,["show"]),u(A,null,{default:i((()=>[v("标题文案：")])),_:1}),u(E,{onClick:I},{default:i((()=>[v("更改标题文案")])),_:1}),u(G,{show:r.value,"onUpdate:show":m[2]||(m[2]=e=>r.value=e),title:"新的标题"},null,8,["show"]),u(A,null,{default:i((()=>[v("圆角显示：")])),_:1}),u(E,{onClick:D},{default:i((()=>[v("圆角显示")])),_:1}),u(G,{show:d.value,"onUpdate:show":m[3]||(m[3]=e=>d.value=e),title:"圆角",round:""},null,8,["show"]),u(A,null,{default:i((()=>[v("打开&关闭事件：")])),_:1}),u(E,{onClick:F},{default:i((()=>[v("事件")])),_:1}),u(G,{show:f.value,"onUpdate:show":m[4]||(m[4]=e=>f.value=e),title:"事件",round:"",onOnClose:R,onOnOpen:P,onOnCancel:R,onOnConfirm:R},null,8,["show"]),u(A,null,{default:i((()=>[v("按钮文案：")])),_:1}),u(E,{onClick:q},{default:i((()=>[v("按钮文案")])),_:1}),u(G,{show:p.value,"onUpdate:show":m[5]||(m[5]=e=>p.value=e),round:"",title:"按钮文案",cancelText:"这是取消按钮",confirmText:"这是确定按钮"},null,8,["show"]),u(A,null,{default:i((()=>[v("不允许点击遮罩层关闭：")])),_:1}),u(E,{onClick:z},{default:i((()=>[v("不允许点击遮罩层关闭")])),_:1}),u(G,{show:h.value,"onUpdate:show":m[6]||(m[6]=e=>h.value=e),round:"","close-click-overlay":!1,title:"不允许点击遮罩层关闭"},null,8,["show"])])),_:1})}}},[["__scopeId","data-v-fb01c76c"]]);export{j as default};
