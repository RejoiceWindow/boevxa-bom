import{_ as u,u as l,s as _,L as n,a}from"./index.1660443802877.js";import{P as d,aE as i,O as m,o as c,j as f,V as p,Z as y,g as v}from"./vue.1660443802877.js";const L=d({name:"layout",components:{defaults:i(()=>a(()=>import("./defaults.1660443802877.js"),["assets/defaults.1660443802877.js","assets/vue.1660443802877.js","assets/index.1660443802877.js","assets/index.16604438028778.css","assets/aside.1660443802877.js","assets/main.1660443802877.js","assets/main.1660443802877.css","assets/logo-mini.1660443802877.js","assets/parent.1660443802877.js"])),classic:i(()=>a(()=>import("./classic.1660443802877.js"),["assets/classic.1660443802877.js","assets/index.1660443802877.js","assets/index.16604438028778.css","assets/vue.1660443802877.js","assets/aside.1660443802877.js","assets/main.1660443802877.js","assets/main.1660443802877.css","assets/logo-mini.1660443802877.js","assets/parent.1660443802877.js"])),transverse:i(()=>a(()=>import("./transverse.1660443802877.js"),["assets/transverse.1660443802877.js","assets/main.1660443802877.js","assets/main.1660443802877.css","assets/vue.1660443802877.js","assets/index.1660443802877.js","assets/index.16604438028778.css","assets/logo-mini.1660443802877.js","assets/parent.1660443802877.js"])),columns:i(()=>a(()=>import("./columns.1660443802877.js"),["assets/columns.1660443802877.js","assets/columns.1660443802877.css","assets/index.1660443802877.js","assets/index.16604438028778.css","assets/vue.1660443802877.js","assets/aside.1660443802877.js","assets/main.1660443802877.js","assets/main.1660443802877.css","assets/logo-mini.1660443802877.js","assets/parent.1660443802877.js"]))},setup(){const{proxy:o}=v(),r=l(),{themeConfig:e}=_(r),t=()=>{n.get("oldLayout")||n.set("oldLayout",e.value.layout);const s=document.body.clientWidth;s<1e3?(e.value.isCollapse=!1,o.mittBus.emit("layoutMobileResize",{layout:"defaults",clientWidth:s})):o.mittBus.emit("layoutMobileResize",{layout:n.get("oldLayout")?n.get("oldLayout"):e.value.layout,clientWidth:s})};return m(()=>{t(),window.addEventListener("resize",t)}),c(()=>{window.removeEventListener("resize",t)}),{themeConfig:e}}});function E(o,r,e,t,s,g){return f(),p(y(o.themeConfig.layout))}var h=u(L,[["render",E]]);export{h as default};
