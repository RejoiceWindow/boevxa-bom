import{P as c,aD as u,f as d,h as g,y as h,w as p,t as v,X as f,k as w,l as _,Y as T,S as L,n as D,ao as k,j as y}from"./vue.1660443802877.js";import{_ as C,u as R,c as V,s as m}from"./index.1660443802877.js";const $=c({name:"layoutIfameView",setup(){const e=R(),o=V(),{themeConfig:i}=m(e),{isTagsViewCurrenFull:n}=m(o),r=u(),a=d({iframeDom:null,iframeLoading:!0,iframeUrl:""}),s=()=>{a.iframeUrl=r.meta.isLink,D(()=>{a.iframeLoading=!0;const t=a.iframeDom;if(!t)return!1;t.onload=()=>{a.iframeLoading=!1}})},l=g(()=>{let{isTagsview:t}=i.value;return n.value?"1px":t?"86px":"51px"});return h(()=>{s()}),p(()=>r.path,()=>{s()}),{setIframeHeight:l,...v(a)}}}),x=["src"];function I(e,o,i,n,r,a){const s=k("loading");return f((y(),w("div",{class:"layout-view-bg-white flex mt1",style:L({height:`calc(100vh - ${e.setIframeHeight}`,border:"none"})},[f(_("iframe",{src:e.iframeUrl,frameborder:"0",height:"100%",width:"100%",ref:"iframeDom"},null,8,x),[[T,!e.iframeLoading]])],4)),[[s,e.iframeLoading]])}var S=C($,[["render",I]]);export{S as default};
