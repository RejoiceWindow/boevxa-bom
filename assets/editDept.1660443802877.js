import{_ as A}from"./index.1660443802877.js";import{P as w,f as C,y as S,t as y,k as b,a1 as e,W as o,a8 as a,j as E,l as _,a0 as V,_ as k,$ as D}from"./vue.1660443802877.js";const x=w({name:"systemEditDept",setup(){const l=C({isShowDialog:!1,ruleForm:{deptLevel:[],deptName:"",person:"",phone:"",email:"",sort:0,status:!0,describe:""},deptData:[]}),u=n=>{n.deptLevel=["vueNextAdmin"],n.person="lyt",n.phone="12345678910",n.email="vueNextAdmin@123.com",l.ruleForm=n,l.isShowDialog=!0},r=()=>{l.isShowDialog=!1},i=()=>{r()},p=()=>{r()},c=()=>{l.deptData.push({deptName:"vueNextAdmin",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"\u9876\u7EA7\u90E8\u95E8",id:Math.random(),children:[{deptName:"IT\u5916\u5305\u670D\u52A1",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"\u603B\u90E8",id:Math.random()},{deptName:"\u8D44\u672C\u63A7\u80A1",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"\u5206\u90E8",id:Math.random()}]})};return S(()=>{c()}),{openDialog:u,closeDialog:r,onCancel:i,onSubmit:p,...y(l)}}}),U={class:"system-edit-dept-container"},L={key:0},M={class:"dialog-footer"},T=D("\u53D6 \u6D88"),$=D("\u4FEE \u6539");function z(l,u,r,i,p,c){const n=a("el-cascader"),s=a("el-form-item"),d=a("el-col"),m=a("el-input"),g=a("el-input-number"),h=a("el-switch"),B=a("el-row"),N=a("el-form"),F=a("el-button"),v=a("el-dialog");return E(),b("div",U,[e(v,{title:"\u4FEE\u6539\u90E8\u95E8",modelValue:l.isShowDialog,"onUpdate:modelValue":u[8]||(u[8]=t=>l.isShowDialog=t),width:"769px"},{footer:o(()=>[_("span",M,[e(F,{onClick:l.onCancel,size:"default"},{default:o(()=>[T]),_:1},8,["onClick"]),e(F,{type:"primary",onClick:l.onSubmit,size:"default"},{default:o(()=>[$]),_:1},8,["onClick"])])]),default:o(()=>[e(N,{model:l.ruleForm,size:"default","label-width":"90px"},{default:o(()=>[e(B,{gutter:35},{default:o(()=>[e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"\u4E0A\u7EA7\u90E8\u95E8"},{default:o(()=>[e(n,{options:l.deptData,props:{checkStrictly:!0,value:"deptName",label:"deptName"},placeholder:"\u8BF7\u9009\u62E9\u90E8\u95E8",clearable:"",class:"w100",modelValue:l.ruleForm.deptLevel,"onUpdate:modelValue":u[0]||(u[0]=t=>l.ruleForm.deptLevel=t)},{default:o(({node:t,data:f})=>[_("span",null,V(f.deptName),1),t.isLeaf?k("",!0):(E(),b("span",L," ("+V(f.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u90E8\u95E8\u540D\u79F0"},{default:o(()=>[e(m,{modelValue:l.ruleForm.deptName,"onUpdate:modelValue":u[1]||(u[1]=t=>l.ruleForm.deptName=t),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u8D1F\u8D23\u4EBA"},{default:o(()=>[e(m,{modelValue:l.ruleForm.person,"onUpdate:modelValue":u[2]||(u[2]=t=>l.ruleForm.person=t),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u624B\u673A\u53F7"},{default:o(()=>[e(m,{modelValue:l.ruleForm.phone,"onUpdate:modelValue":u[3]||(u[3]=t=>l.ruleForm.phone=t),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u90AE\u7BB1"},{default:o(()=>[e(m,{modelValue:l.ruleForm.email,"onUpdate:modelValue":u[4]||(u[4]=t=>l.ruleForm.email=t),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u6392\u5E8F"},{default:o(()=>[e(g,{modelValue:l.ruleForm.sort,"onUpdate:modelValue":u[5]||(u[5]=t=>l.ruleForm.sort=t),min:0,max:999,"controls-position":"right",placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u90E8\u95E8\u72B6\u6001"},{default:o(()=>[e(h,{modelValue:l.ruleForm.status,"onUpdate:modelValue":u[6]||(u[6]=t=>l.ruleForm.status=t),"inline-prompt":"","active-text":"\u542F","inactive-text":"\u7981"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"\u90E8\u95E8\u63CF\u8FF0"},{default:o(()=>[e(m,{modelValue:l.ruleForm.describe,"onUpdate:modelValue":u[7]||(u[7]=t=>l.ruleForm.describe=t),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u63CF\u8FF0",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}var P=A(x,[["render",z]]);export{P as default};
