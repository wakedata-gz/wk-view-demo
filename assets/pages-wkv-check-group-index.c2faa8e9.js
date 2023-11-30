import{_ as e}from"./wk-section.6cd0c367.js";import{_ as t,o,c as l,w as n,f as a,t as s,n as u,i as p,r as i,j as r,u as c,a as m,F as d,b as h,m as k,d as f,e as v,h as g}from"./index-f01243c1.js";import{r as _}from"./uni-app.es.81331c7f.js";const b=t({__name:"wkv-check-item",props:{option:Object,labelProps:{type:String,default:"label"},checked:{type:Boolean,default:!1}},emits:["change"],setup(e,{emit:t}){const i=e,r=()=>{t("change",!i.checked,i.option)},c=()=>{var e;if(i.option&&(null==(e=i.option)?void 0:e[i.labelProps]))return i.option[i.labelProps]};return(t,i)=>{const m=p;return o(),l(m,{class:u({"wkv-check-item":!0,"wkv-check-item--hidden":!e.option,"wkv-check-item--checked":e.checked}),onClick:r},{default:n((()=>[a(s(c()),1)])),_:1},8,["class"])}}},[["__scopeId","data-v-b40caa00"]]),w=t({__name:"wkv-check-group",props:{options:{type:Array,default:()=>[],required:!0},optionProps:{type:Object,default:()=>({label:"label",value:"value"})},columnCount:{type:Number,default:0},gap:{type:[Number,String],default:8},multiple:{type:[Boolean,Number],default:!1}},emits:["change","extra"],setup(e,{emit:t}){const a=e,s=i([]),u=r((()=>new Set(s.value.map((e=>e[a.optionProps.value]))))),f=r((()=>{if(a.columnCount<=0)return[];const e=Math.ceil(a.options.length/a.columnCount),t=Array.from({length:e},(()=>[]));return t.forEach(((e,t)=>{for(let o=0;o<a.columnCount;o++)e.push(a.options[t*a.columnCount+o])})),t})),v=r((()=>{const e=uni.$wkv.addUnit(a.gap);return{width:`calc(100% + ${e})`,marginRight:`-${e}`,marginBottom:`-${e}`}})),g=r((()=>{const e=uni.$wkv.addUnit(a.gap);return{marginRight:`${e}`,marginBottom:`${e}`}})),_=(e,o)=>{if(a.multiple||s.value.splice(0),e&&"number"==typeof a.multiple&&a.multiple<=s.value.length)return t("extra",a.multiple,`最多选中 ${a.multiple} 个选项`);e?s.value.push(o):s.value.splice(s.value.indexOf(o),1),t("change",a.multiple?s.value:s.value[0])};return(t,a)=>{const s=p;return o(),l(s,{class:"wkv-check-group",style:k(c(v))},{default:n((()=>[c(f).length?(o(!0),m(d,{key:0},h(c(f),((t,a)=>(o(),l(s,{class:"check-row",key:a},{default:n((()=>[(o(!0),m(d,null,h(t,(t=>(o(),l(b,{class:"check-row__item",option:t,style:k(c(g)),"label-prop":e.optionProps.label,checked:t&&c(u).has(t[e.optionProps.value]),onChange:_},null,8,["option","style","label-prop","checked"])))),256))])),_:2},1024)))),128)):(o(!0),m(d,{key:1},h(e.options,(t=>(o(),l(b,{option:t,style:k(c(g)),"label-prop":e.optionProps.label,checked:c(u).has(t[e.optionProps.value]),onChange:_},null,8,["option","style","label-prop","checked"])))),256))])),_:1},8,["style"])}}},[["__scopeId","data-v-ee3b30d8"]]),y=t(f({__name:"index",setup(t){const s=(e=3)=>{const t=[];for(let o=0;o<e;o++)t.push({label:`选项${o}`,value:o});return t},u=(e,t)=>{uni.$wkv.showToast(t)};return(t,i)=>{const r=_(g("wk-section"),e),c=_(g("wkv-check-group"),w),m=p;return o(),l(m,{class:"wkv-check-group-example"},{default:n((()=>[v(r,null,{default:n((()=>[a("单选")])),_:1}),v(c,{options:s()},null,8,["options"]),v(r,null,{default:n((()=>[a("多选")])),_:1}),v(c,{multiple:"",options:s()},null,8,["options"]),v(r,null,{default:n((()=>[a("限制具体数量")])),_:1}),v(c,{multiple:3,onExtra:u,options:s(10)},null,8,["options"]),v(r,null,{default:n((()=>[a("限制单行展示数量")])),_:1}),v(c,{columnCount:3,options:s(8)},null,8,["options"])])),_:1})}}}),[["__scopeId","data-v-7984f325"]]);export{y as default};
