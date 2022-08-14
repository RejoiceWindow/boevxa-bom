import{G as D,U as g,D as v,A as B}from"./index.16604438028775.js";import{b as y,e as c,_ as A,f as C,g as w,E as R}from"./index.1660443802877.js";import{aG as S,P as U,r as d,y as O,k,a1 as l,W as a,T as L,I as V,a8 as r,j as q,$ as m,a0 as x,l as p}from"./vue.1660443802877.js";function I({expose:t}){const{t:e}=y(),i=S();return{crudOptions:{request:{pageRequest:async o=>await D(o),addRequest:async({form:o})=>await B(o),editRequest:async({form:o,row:n})=>(o.id=n.id,await g(o)),delRequest:async({row:o})=>await v(o.id)},table:{border:!0,bordered:!0,height:320,size:"small"},rowHandle:{buttons:{traysShow:{text:"\u6599\u76D8\u4FE1\u606F",title:"\u6599\u76D8\u4FE1\u606F\u793A\u4F8B",size:"small",order:0,type:"primary",click(o){i.push({path:"/primary/warehouse",query:{id:o.row.id}})}}}},columns:{binCode:{title:e("app.location.binCode"),type:"text",form:{},search:{show:!0}},FNumber:{title:e("app.location.FNumber"),type:"text",form:{}},FStockID:{title:e("app.location.FStockID"),type:"text",search:{show:!0},form:{}},FStockProperty:{title:e("app.location.FStockProperty"),type:"dict-select",dict:c({data:[{value:"3",label:"\u4F9B\u5E94\u5546\u4ED3\u5E93",color:"success"},{value:"5",label:"\u7B2C\u4E09\u65B9\u4ED3\u50A8",color:"primary"},{value:"2",label:"\u8F66\u95F4\u4ED3\u5E93",color:"danger"},{value:"4",label:"\u5BA2\u6237\u4ED3\u5E93",color:"warning"},{value:"1",label:"\u666E\u901A\u4ED3\u5E93",color:"info"}]})},FAddress:{title:e("app.location.FAddress"),type:"text",form:{},search:{show:!0}},FPrincipal:{title:e("app.location.FPrincipal"),type:"text",form:{}},FIsOpenLocation:{title:e("app.location.FIsOpenLocation"),type:"dict-switch",valueResolve(o){o.form.FIsOpenLocation&&(o.form.FIsOpenLocation=o.form.FIsOpenLocation?1:0)},dict:c({data:[{value:!0,label:"\u662F",color:"success"},{value:!1,label:"\u5426",color:"danger"}]})},store:{title:e("app.location.store"),type:"text",search:{show:!0},form:{}},source:{title:e("app.location.source"),type:"dict-select",search:{show:!0,rules:null},dict:c({data:[{value:"ManualAdd",label:"\u624B\u52A8\u6DFB\u52A0",color:"success"},{value:"ManualExcel",label:"\u4ED3\u5E93\u7269\u6599\u548CBIN\u4F4D\u6E05\u5355",color:"warning"},{value:"SAL_OUTSTOCK",label:"\u9500\u552E\u51FA\u5E93\u5355",color:"primary"},{value:"STK_MisDelivery",label:"\u5176\u4ED6\u51FA\u5E93\u5355",color:"primary"},{value:"PUR_MRB",label:"\u91C7\u8D2D\u9000\u6599\u5355",color:"primary"}]}),form:{}},FDocumentStatus:{title:e("app.location.FDocumentStatus"),type:"dict-select",dict:c({data:[{value:"Z",label:"\u6682\u5B58",color:"warning"},{value:"A",label:"\u521B\u5EFA",color:"info"},{value:"B",label:"\u5BA1\u6838\u4E2D",color:"primary"},{value:"C",label:"\u5DF2\u5BA1\u6838",color:"success"},{value:"D",label:"\u91CD\u65B0\u5BA1\u6838",color:"danger"}]})}}}}}const $=U({name:"primaryLocation",setup(){const t=d(),e=d(),{t:i}=y(),f=d(i("message.info.uploadURL")),{crudExpose:s}=C({crudRef:t,crudBinding:e}),{crudOptions:F}=I({crudExpose:s});w({crudExpose:s,crudOptions:F}),O(()=>{s.doRefresh()});const u=d(!1);return{dialogVisible:u,handleClose:b=>{R.confirm("Are you sure to close this dialog?").then(()=>{b()}).catch(()=>{})},UploadFile:()=>{u.value=!0},UploadFileSuccess:()=>{s.doRefresh()},crudBinding:e,crudRef:t,uploadURL:f}}}),M=p("div",{class:"el-upload__text"},[m("\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC \u6216\u8005 "),p("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1),P=p("div",{class:"el-upload__tip"},"xls/xlsx files with a size less than 5MB",-1),N={class:"dialog-footer"},T=m("\u53D6 \u6D88"),j=m("\u786E \u5B9A");function z(t,e,i,f,s,F){const u=r("el-button"),o=r("fs-crud"),n=r("upload-filled"),E=r("el-icon"),b=r("el-upload"),h=r("el-dialog");return q(),k(V,null,[l(o,L({ref:"crudRef"},t.crudBinding),{"actionbar-right":a(()=>[l(u,{type:"success",onClick:t.UploadFile},{default:a(()=>[m(x(t.$t("message.button.import")),1)]),_:1},8,["onClick"])]),_:1},16),l(h,{modelValue:t.dialogVisible,"onUpdate:modelValue":e[2]||(e[2]=_=>t.dialogVisible=_),title:"\u6839\u636E\u6A21\u677F\u4E0A\u4F20\u6570\u636E",width:"30%","before-close":t.handleClose},{footer:a(()=>[p("span",N,[l(u,{onClick:e[0]||(e[0]=_=>t.dialogVisible=!1)},{default:a(()=>[T]),_:1}),l(u,{type:"primary",onClick:e[1]||(e[1]=_=>t.dialogVisible=!1)},{default:a(()=>[j]),_:1})])]),default:a(()=>[l(b,{class:"upload-demo",drag:"",action:`${t.uploadURL}/api/handler/location/`,"on-success":t.UploadFileSuccess,multiple:""},{tip:a(()=>[P]),default:a(()=>[l(E,{class:"el-icon--upload"},{default:a(()=>[l(n)]),_:1}),M]),_:1},8,["action","on-success"])]),_:1},8,["modelValue","before-close"])],64)}var W=A($,[["render",z]]);export{W as default};
