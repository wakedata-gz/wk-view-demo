import{_ as e}from"./wk-section.70e01cf8.js";import{_ as t,o as r,c as f,w as a,l,n as i,m as o,i as d,e as c,f as n,p as s,h as p}from"./index-96c5d632.js";import{r as u}from"./uni-app.es.4a5812e0.js";const y=t({__name:"wkv-tag",props:{type:{type:String,default:"primary",validator:e=>["primary","success","error","warning","info"].includes(e)},effect:{type:String,default:"light",validator:e=>["dark","light","plain"].includes(e)},color:{type:String,default:""},borderRadius:{type:String,default:"8px"},noBorder:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const c=e,n=()=>{c.clickable&&t("click")};return(t,c)=>{const s=d;return r(),f(s,{class:i({"wkv-tag":!0,[`wkv-tag--${e.type}`]:!0,[`wkv-tag--${e.effect}`]:!0,"wkv-tag--no-border":e.noBorder}),style:o({"--wkv-tag-border-radius":e.borderRadius,"--wkv-tag-color":e.color}),onClick:n},{default:a((()=>[l(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}},[["__scopeId","data-v-2e44ac9a"]]);const _=t({},[["render",function(t,l){const i=u(p("wk-section"),e),o=u(p("wkv-tag"),y),_=d;return r(),f(_,{class:"wkv-tag-example"},{default:a((()=>[c(i,null,{default:a((()=>[n("类型：")])),_:1}),c(o,{type:"primary"},{default:a((()=>[n("primary")])),_:1}),c(o,{type:"success"},{default:a((()=>[n("success")])),_:1}),c(o,{type:"error"},{default:a((()=>[n("error")])),_:1}),c(o,{type:"warning"},{default:a((()=>[n("warning")])),_:1}),c(o,{type:"info"},{default:a((()=>[n("info")])),_:1}),c(i,null,{default:a((()=>[n("主题：")])),_:1}),c(o,{effect:"dark",type:"primary"},{default:a((()=>[n("primary")])),_:1}),c(o,{effect:"dark",type:"success"},{default:a((()=>[n("success")])),_:1}),c(o,{effect:"dark",type:"error"},{default:a((()=>[n("error")])),_:1}),c(o,{effect:"dark",type:"warning"},{default:a((()=>[n("warning")])),_:1}),c(o,{effect:"dark",type:"info"},{default:a((()=>[n("info")])),_:1}),s("div",{style:{height:"5px"}}),c(o,{effect:"light",type:"primary"},{default:a((()=>[n("primary")])),_:1}),c(o,{effect:"light",type:"success"},{default:a((()=>[n("success")])),_:1}),c(o,{effect:"light",type:"error"},{default:a((()=>[n("error")])),_:1}),c(o,{effect:"light",type:"warning"},{default:a((()=>[n("warning")])),_:1}),c(o,{effect:"light",type:"info"},{default:a((()=>[n("info")])),_:1}),s("div",{style:{height:"5px"}}),c(o,{effect:"plain",type:"primary"},{default:a((()=>[n("primary")])),_:1}),c(o,{effect:"plain",type:"success"},{default:a((()=>[n("success")])),_:1}),c(o,{effect:"plain",type:"error"},{default:a((()=>[n("error")])),_:1}),c(o,{effect:"plain",type:"warning"},{default:a((()=>[n("warning")])),_:1}),c(o,{effect:"plain",type:"info"},{default:a((()=>[n("info")])),_:1}),c(i,null,{default:a((()=>[n("自定义颜色：")])),_:1}),c(o,{effect:"dark",color:"#12C9E7"},{default:a((()=>[n("#12C9E7")])),_:1}),c(o,{effect:"dark",color:"#F4BB07"},{default:a((()=>[n("#F4BB07")])),_:1}),c(o,{effect:"dark",color:"#2FC78B"},{default:a((()=>[n("#2FC78B")])),_:1}),c(o,{effect:"dark",color:"#7E4BFF"},{default:a((()=>[n("#7E4BFF")])),_:1}),s("div",{style:{height:"5px"}}),c(o,{effect:"light",color:"#12C9E7"},{default:a((()=>[n("#12C9E7")])),_:1}),c(o,{effect:"light",color:"#F4BB07"},{default:a((()=>[n("#F4BB07")])),_:1}),c(o,{effect:"light",color:"#2FC78B"},{default:a((()=>[n("#2FC78B")])),_:1}),c(o,{effect:"light",color:"#7E4BFF"},{default:a((()=>[n("#7E4BFF")])),_:1}),s("div",{style:{height:"5px"}}),c(o,{effect:"plain",color:"#12C9E7"},{default:a((()=>[n("#12C9E7")])),_:1}),c(o,{effect:"plain",color:"#F4BB07"},{default:a((()=>[n("#F4BB07")])),_:1}),c(o,{effect:"plain",color:"#2FC78B"},{default:a((()=>[n("#2FC78B")])),_:1}),c(o,{effect:"plain",color:"#7E4BFF"},{default:a((()=>[n("#7E4BFF")])),_:1}),c(i,null,{default:a((()=>[n("无边框：")])),_:1}),c(o,{effect:"dark",type:"primary"},{default:a((()=>[n("primary")])),_:1}),c(o,{effect:"dark",type:"success"},{default:a((()=>[n("success")])),_:1}),c(o,{effect:"dark",type:"error"},{default:a((()=>[n("error")])),_:1}),c(o,{effect:"dark",type:"warning"},{default:a((()=>[n("warning")])),_:1}),c(o,{effect:"dark",type:"info"},{default:a((()=>[n("info")])),_:1}),s("div",{style:{height:"5px"}}),c(o,{effect:"light",type:"primary","no-border":""},{default:a((()=>[n("primary")])),_:1}),c(o,{effect:"light",type:"success","no-border":""},{default:a((()=>[n("success")])),_:1}),c(o,{effect:"light",type:"error","no-border":""},{default:a((()=>[n("error")])),_:1}),c(o,{effect:"light",type:"warning","no-border":""},{default:a((()=>[n("warning")])),_:1}),c(o,{effect:"light",type:"info","no-border":""},{default:a((()=>[n("info")])),_:1}),s("div",{style:{height:"5px"}}),c(o,{effect:"plain",type:"primary","no-border":""},{default:a((()=>[n("primary")])),_:1}),c(o,{effect:"plain",type:"success","no-border":""},{default:a((()=>[n("success")])),_:1}),c(o,{effect:"plain",type:"error","no-border":""},{default:a((()=>[n("error")])),_:1}),c(o,{effect:"plain",type:"warning","no-border":""},{default:a((()=>[n("warning")])),_:1}),c(o,{effect:"plain",type:"info","no-border":""},{default:a((()=>[n("info")])),_:1})])),_:1})}],["__scopeId","data-v-28e4dfed"]]);export{_ as default};
