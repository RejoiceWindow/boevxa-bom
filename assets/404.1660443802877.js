import{P as m,aG as u,h as p,k as f,l as t,a0 as o,a1 as g,W as h,S as v,a8 as w,j as T,$ as b,aB as F,aC as C}from"./vue.1660443802877.js";import{_ as y,u as $,c as x,s as l}from"./index.1660443802877.js";const V=m({name:"404",setup(){const e=$(),a=x(),{themeConfig:i}=l(e),{isTagsViewCurrenFull:n}=l(a),c=u(),r=()=>{c.push("/")},s=p(()=>{let{isTagsview:_}=i.value;return n.value?"30px":_?"114px":"80px"});return{onGoHome:r,initTagViewHeight:s}}}),d=e=>(F("data-v-3b19d5ac"),e=e(),C(),e),k={class:"error-flex"},B={class:"left"},S={class:"left-item"},H=d(()=>t("div",{class:"left-item-animation left-item-num"},"404",-1)),R={class:"left-item-animation left-item-title"},I={class:"left-item-animation left-item-msg"},N={class:"left-item-animation left-item-btn"},G=d(()=>t("div",{class:"right"},[t("img",{src:"https://img-blog.csdnimg.cn/9eb1d85a417f4ed1ba7107f149ce3da1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_16,color_FFFFFF,t_70,g_se,x_16"})],-1));function z(e,a,i,n,c,r){const s=w("el-button");return T(),f("div",{class:"error layout-view-bg-white",style:v({height:`calc(100vh - ${e.initTagViewHeight}`})},[t("div",k,[t("div",B,[t("div",S,[H,t("div",R,o(e.$t("message.notFound.foundTitle")),1),t("div",I,o(e.$t("message.notFound.foundMsg")),1),t("div",N,[g(s,{type:"primary",round:"",onClick:e.onGoHome},{default:h(()=>[b(o(e.$t("message.notFound.foundBtn")),1)]),_:1},8,["onClick"])])])]),G])],4)}var L=y(V,[["render",z],["__scopeId","data-v-3b19d5ac"]]);export{L as default};
