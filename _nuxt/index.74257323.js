import pl from"./toast.esm.b0531f89.js";import{_ as ml}from"./nuxt-link.4096e530.js";import bt from"./multiselect.esm.d7f23f7e.js";import ht from"./dropdown.esm.41ec9c30.js";import kt from"./calendar.esm.018b0b6d.js";import ut from"./button.esm.3b86381e.js";import ql from"./inputicon.esm.06a6089c.js";import Zt from"./inputtext.esm.1adcdca4.js";import fl from"./iconfield.esm.ade3cb3b.js";import vl from"./toolbar.esm.f70d2b5c.js";import el from"./avatar.esm.078b8819.js";import gl from"./speeddial.esm.399b1c80.js";import tl from"./treetable.esm.536a33e7.js";import{a3 as Ge,$ as n,a4 as pt,a9 as vt,a5 as ll,V as Jt,a as xt,o as p,b as q,i as e,l as o,u as t,a6 as I,e as Y,w as h,c as $e,k as et,s as N,K as Z,t as g,q as me,F as Ie,f as Re,ca as nl,a2 as Dt,aq as Oe,a7 as Tt,a8 as St,an as bl,B as hl,_ as kl,D as yl,h as wl,m as A,n as _l,g as xl,cb as Dl,I as Yt,ab as Tl,P as Sl}from"./entry.ac7f7863.js";import{u as tt,a as gt}from"./cookie.3945ca3b.js";import{d as $l}from"./vuedraggable.umd.493e0d78.js";import{u as xe}from"./company.b2683794.js";import{a as Pe}from"./usePermission.696200f7.js";import Ye from"./column.esm.0912c493.js";import $t from"./textarea.esm.54f73921.js";import Cl from"./floatlabel.esm.9bdc5ca4.js";import Vl from"./inputnumber.esm.0bf6a2e4.js";import Al from"./confirmpopup.esm.ca24d3ab.js";import El from"./tabpanel.esm.e3bad12c.js";import jl from"./tabview.esm.b416c5dc.js";import Ll from"./card.esm.75fe192c.js";import{u as Gt}from"./clock.a4d5e424.js";import{s as Ul}from"./basecomponent.esm.9e3a8801.js";import ft from"./dialog.esm.d0098eaa.js";import"./portal.esm.9859a090.js";import"./index.esm.ce62ee13.js";import"./baseicon.esm.0b1bbe6c.js";import"./index.esm.5b8bc08b.js";import"./index.esm.3be4e240.js";import"./index.esm.3a2b51ac.js";import"./checkbox.esm.039a8c45.js";import"./index.esm.dabc14ae.js";import"./index.esm.cc5d2015.js";import"./index.esm.da1576e5.js";import"./overlayeventbus.esm.90e85a42.js";import"./virtualscroller.esm.0243c540.js";import"./index.esm.4b59481a.js";import"./index.esm.45d2fbbf.js";import"./index.esm.9ea3dddf.js";import"./badge.esm.95c9c5c2.js";import"./index.esm.aa6b8b51.js";import"./paginator.esm.191359e7.js";import"./index.esm.134b9ad1.js";import"./index.esm.3e0a6883.js";import"./index.esm.d3b3d2a0.js";import"./index.esm.34f4e146.js";import"./index.esm.efe5814b.js";import"./index.esm.8ac7e423.js";import"./workCompany.11c26d14.js";const Il="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwElEQVR4nO2dTYgcRRTHy/iBBoligicvXgRRUPCgiDBKdl5NcEDD1JuwLBJFmXmv1yWKEslBe8WDOfmJ6N7FgydFvYiC5K4Y1IuKl6DiNzHRg/kYaTeGYVM1sx/VU6+r6g99mqqa/3u/ruqq7p4ppbKysrKysrKysrKysraodp9uBqSXAOlLbeikRh4FPpaTgIqIlwHSa2DojICkj5KCUCVfI38sINGjJCFUZ76ABI+ShLA65vNpAckdJQkBDL8sIKmjDR2GD6tYBMhfBU8oJtwTNNIJAckcJdsTpgUpzY+ODULjAWDDIUQBABsMIRoA2FAIUQHABkKIDgA2DEKUALBBEKIFgA2BEDUAbACE6AGgcAhJAEDBEJIBgEIhJAUABUJIDgAKg5AkABQEIVkAKARC0gBw9vFtOGBpfnQGkAF4Ve4BgSUNQHLxiTcYe3ziDcYen3iDscfn22B3frALkP+0tQXIfwE+fM2k+q39+y8HpB/tfujZ0PF5Vx0GteHDrvbA0GOT/dCiI/m/dhaWdkiIz6vqMLj7/sWdYOi4I5HflGW5zVYPES8Gw986wD0hJT6vqssgID/narPdY7DWMcMFax1D33e7g+2S4vOmugzO4eAqMPy741rwrq0OIH/mAPCItPi8qU6DgPyMYzg508ZHr1/j416Hh69brfISifF5UZ0GOwtLOzTyb462nx8vC8hH7OWGfanxeVHdBrXhQ/ZewL9UU86qTLtX3G4fquio64ItJb4tq26DLSyuBKSf7e3TA1UZQHrH9nm7R3ukx6eaYBCQn3Sc4e+37jtwtTb8z4Wf8REf350BqNXVbTWVtAD4W5vh0Aqnx3dmAB67qEY+4OgFtuHpPY/fm4egsXs8x6YlZHWKWtyqPCkDGFPHcDEtIRr5TeVRGcAFfwjCP0xKSvXLfeVRGcCY5vbxjRrp1MSkGD6oPCoDGBMY/mD6EER/THtmEJVmdYZAn+9Zx/hvvU0RtWYBoCzLbWDoU8sU9JjtHlC1PujsXbpOpaBZANBYPGhfA/AbGulpx3evqBRUN4Bud7DdNf+vVrvVbWn7hZlO7dm3eIOKXXUD0I4zHJA++b8MGHrL0UPeVrGrTgDtvXSt69nw+J1O6A9v0chnLeXOdvp0h4pZdQLQyCuOs/+oUuqiNWU/nNZTolRdAOYmLrqK+bXlAYdtl4fqM2nxeVNdBsG56KLvXM94bVPV/w7Dn2/2yViSAGDCoguQ2O2lmHd72dyz4eQAlI5F17njJ8THr3DVnfRiVvV2xG2DwaWh4/Mu3wbB8EPO9gwfWkf9pQl+KHR83uXboF6d96/YjuplrXUt3Ay97mhjw39VmRwAaRIfn3iDsccn3mDs8Yk3GHt84g3GHp94g7HHJ95g7PGJNxh7fOINxh6feIOxx+f6Te/MDkMndW949wb8PhXKKxgqI93ChE50sLhrvZ6re0LRbJmikV8MD4BF94RazvzzAHrFTXK2sSKJPaH+zYI08qvhk88SISzPch/Jj8InnyVBWA6wnyS9kocjnn3y114TtKEXtOEvwu8xRiF6QhwbxIXSVmZHtc52UhJsAkJOfkAIOfkBIeTkB4SQkx8QQk5+QAg5+SqMzq0TvM7z/wUrLeMdaCtpkwAAAABJRU5ErkJggg==";const Ol={class:"filter-wrapper pb-2 mb-1"},zl={class:"mb-2 relative"},Ml={class:"mb-2 relative"},Hl={class:"flex flex-wrap gap-1"},Bl=e("img",{src:Il},null,-1),Fl=e("i",{class:"pi pi-search"},null,-1),Nl=e("p",{class:"text-center"},"No data found...",-1),Rl={class:"inline-block"},Pl={class:"task-status"},Jl={key:1},Yl={class:"flex align-items-center"},Gl=["onClick"],Kl={class:"flex justify-content-start gap-1"},Wl=["src"],Ql={class:"inline-block"},Xl={class:"task-status-2"},Zl={key:0,class:"flex align-items-center"},en={key:1},tn={class:"flex align-items-center"},ln={class:"inline-block"},nn={class:"task-status-2"},on={key:0,class:"flex align-items-center"},an={key:1,class:"pt-1"},sn={key:1},rn={class:"flex align-items-center"},dn=["onMouseover","onMouseleave"],cn=["onClick","onMouseleave"],un={key:1,class:"main-container"},pn={class:"content"},mn={class:"boardContainer",style:{display:"flex","overflow-x":"auto","align-items":"start"}},qn={class:"column-container"},fn={class:""},vn=["onClick"],gn={class:""},bn={class:"font-semibold truncate text-sm title"},hn={class:"flex align-items-center gap-2 mt-1"},kn={class:"status text-sm"},yn={class:"mt-2 flex align-items-center gap-2"},wn=e("i",{class:"pi pi-user text-lg"},null,-1),_n={class:"flex justify-content-start gap-1"},xn=["src"],Dn={class:"mt-2 flex align-items-center gap-2"},Tn=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),Sn={class:"mt-2 flex align-items-center gap-2"},$n=e("i",{class:"pi pi-flag text-lg"},null,-1),Cn={class:"text-sm"},Vn=["onClick"],An=e("p",{class:"mb-1"},"Subtask",-1),En={class:"text-sm font-semibold"},jn=["onClick"],Ln={class:"font-semibold truncate text-sm title"},Un={class:"truncate text-sm desc"},In={class:"flex align-items-center gap-2 mt-1"},On={class:"status text-sm"},zn={class:"mt-2 flex align-items-center gap-2"},Mn=e("i",{class:"pi pi-user text-lg"},null,-1),Hn={class:"flex justify-content-start gap-1"},Bn=["src"],Fn={class:"mt-2 flex align-items-center gap-2"},Nn=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),Rn={class:"mt-2 flex align-items-center gap-2"},Pn=e("i",{class:"pi pi-flag text-lg"},null,-1),Jn={class:"text-sm"},Yn={class:"mt-2 flex align-items-center gap-2"},Gn=e("i",{class:"pi pi-angle-right text-lg"},null,-1),Kn={class:"text-sm font-semibold"},Wn={__name:"TaskTable",props:["kanbanTasks","tasks"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask"],setup(l,{emit:d}){var qt;const k=nl(),x=xe(),{getSingleProject:R,getTaskAssignModalData:_,editTask:ee}=xe(),{modStatusList:te,singleProject:pe,statuslist:W,isTaskEdited:G}=Ge(xe()),le=n(Pe("create_task")),P=n(Pe("update_task")),re=n(Pe("delete_task")),ke=n(Pe("download_task")),ne=pt(),H=d,Q=(qt=vt().params)==null?void 0:qt.projects,B=n(),s=n(),ce=n(),oe=n(),ae=n(),F=n(),K=n({}),b=n(!0),f=n([{name:"All",code:""},{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),w=n([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),D=n({}),qe=S=>{D.value={...D.value,[S]:!0}},O=S=>{D.value={...D.value,[S]:!1}},we=S=>[{label:"Add Sub Task",icon:"pi pi-plus text-white",command:()=>{H("openCreateSpace",S.key,"sub-task")},disabled:!le},{label:"Edit Task",icon:"pi pi-pencil text-white",command:()=>{H("handleTaskEdit",S)},disabled:!P},{label:"Task Detail",icon:"pi pi-window-maximize text-white",command:()=>{H("handleTaskDetailView",S)}},{label:"Delete Task",icon:"pi pi-trash text-white",command:()=>{H("confirmDeleteTask",S.key)},disabled:!re}],ie=n(),z=n(),E=n(),ze=n(),Me=n(),M=n(),m=n(null),nt=()=>{if(B.value||s.value||ce.value||F.value||oe.value||ae.value)B.value="",s.value="",ce.value="",F.value="",oe.value="",ae.value="",ie.value="",z.value="",E.value="",ze.value="",Me.value="",M.value="",fe.value=!1,He.value=!1,J();else return},J=async()=>{ie.value=B.value?B.value.map(S=>S.id):"",z.value=s.value?s.value.code:"",E.value=ce.value?ce.value.id:"",ze.value=F.value,Me.value=oe.value,M.value=ae.value,R(Q,ie.value,z.value,E.value,ze.value,Me.value,M.value)},fe=n(!1),He=n(!1),je=S=>{const v=new Date(S);oe.value=v.getFullYear()+"-"+(v.getMonth()+1)+"-"+v.getDate(),fe.value=!0,J()},ot=S=>{He.value=!0;const v=new Date(S);ae.value=v.getFullYear()+"-"+(v.getMonth()+1)+"-"+v.getDate(),J()},Ke=()=>{fe.value=!1,oe.value="",Me.value="",J()},Be=()=>{He.value=!1,ae.value="",M.value="",J()},De=n(!1),We=S=>{if(De.value=!0,console.log("lod",S),S.length>0){const v=`data:text/csv;charset=utf-8,"Serial No.","Task Name","Project","Assignee","Priority","Status","Time Tracked","Due Date","Overdue"
`+S.map((X,Ve)=>{const st=Ve+1,Ae=X.data.name,rt=pe.value.name,dt=X.data.assignee.split(", ").join("; "),ye=X.data.priority?X.data.priority:"",Te=X.data.status.name;let _e=X.data.total_duration;const ge=Math.floor(_e/3600),c=Math.floor(_e%3600/60),a=_e%60;ge>0?_e=`${ge} hr ${c} min ${a} sec`:c>0?_e=`${c} min ${a} sec`:_e=`${a} sec`;const j=X.data.dueDateValue,be=X.data.is_overdue?"Yes":"No";return`"${st}","${Ae}","${rt}","${dt}","${ye}","${Te}","${_e}","${j}","${be}"`}).join(`
`),ve=encodeURI(v),se=document.createElement("a");se.setAttribute("href",ve),se.setAttribute("download","tasks.csv"),document.body.appendChild(se),se.click(),document.body.removeChild(se),De.value=!1}else De.value=!1,ne.add({severity:"error",summary:"Error",detail:"No data found to download",group:"br",life:3e3})},Fe=n(!0);ll(async()=>{await R(Q),Fe.value=!1,Qe()});async function T(S,v){var ve;try{const se=tt("token"),{data:X,pending:Ve}=await gt(`${k.public.apiUrl}/tasks/update/${v}`,{method:"POST",headers:{Authorization:`Bearer ${se.value}`},body:{status:S==null?void 0:S.id}},"$7UcE4NQ81w");((ve=X.value)==null?void 0:ve.app_message)==="success"?(console.log("Status Changed",X),ne.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),await R(Q)):ne.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(se){console.error("Error fetching data:",se)}}const yt=async(S,v)=>{const ve={id:v,priority:S.name,project_id:Q};await ee(ve),G.value===!0?ne.add({severity:"success",summary:"Successful",detail:"Priority updated ",group:"br",life:3e3}):ne.add({severity:"error",summary:"Error",detail:"Unable to update task priority!",group:"br",life:3e3})};function Ne(){const S="0123456789ABCDEF";let v="#";for(let ve=0;ve<6;ve++)v+=S[Math.floor(Math.random()*10)];return v}function Ce(S){return{backgroundColor:Ne(),color:"white",borderRadius:"50%",border:"2px solid white"}}const Qe=async()=>{await _(),K.value=x.users},Je=n(!0),wt=Jt(()=>({animation:250,group:"tasks",disabled:!Je.value,ghostClass:"ghost"})),at=Jt(()=>({backgroundColor:"#fff",boxShadow:"0px 2px 2px #e2e2e2",cursor:"grab",padding:"12px 10px",margin:"8px 0px"})),it=(S,v)=>{const{added:ve,moved:se,removed:X}=S;ve&&T(v,S.added.element.key)};return(S,v)=>{const ve=bt,se=ht,X=kt,Ve=ut,st=ql,Ae=Zt,rt=fl,dt=vl,ye=el,Te=gl,_e=tl,ge=xt("tooltip");return p(),q(Ie,null,[e("div",Ol,[o(ve,{onChange:v[0]||(v[0]=c=>J()),modelValue:t(B),"onUpdate:modelValue":v[1]||(v[1]=c=>I(B)?B.value=c:null),options:t(K),filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Filter Assignees",maxSelectedLabels:3,class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),o(se,{onChange:v[2]||(v[2]=c=>J()),modelValue:t(s),"onUpdate:modelValue":v[3]||(v[3]=c=>I(s)?s.value=c:null),options:t(f),optionLabel:"name",placeholder:"Filter Priority",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),o(se,{onChange:v[4]||(v[4]=c=>J()),modelValue:t(ce),"onUpdate:modelValue":v[5]||(v[5]=c=>I(ce)?ce.value=c:null),options:t(te),optionLabel:"name",placeholder:"Filter Status",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),e("div",zl,[o(X,{onDateSelect:v[6]||(v[6]=c=>je(c)),modelValue:t(oe),"onUpdate:modelValue":v[7]||(v[7]=c=>I(oe)?oe.value=c:null),placeholder:"Filter Start Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),t(fe)?(p(),q("p",{key:0,onClick:Ke,class:"pi pi-times absolute cursor-pointer"})):Y("",!0)]),e("div",Ml,[o(X,{onDateSelect:v[8]||(v[8]=c=>ot(c)),modelValue:t(ae),"onUpdate:modelValue":v[9]||(v[9]=c=>I(ae)?ae.value=c:null),placeholder:"Filter End Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),t(He)?(p(),q("p",{key:0,onClick:Be,class:"pi pi-times end-cross absolute cursor-pointer"})):Y("",!0)]),o(Ve,{onClick:nt,label:"Reset",class:"mr-2 w-full md:w-15rem mb-2",severity:"secondary"})]),o(dt,{class:"border-0 px-0"},{start:h(()=>[e("div",Hl,[t(le)?(p(),$e(Ve,{key:0,icon:"pi pi-plus",label:"Create Task",onClick:v[10]||(v[10]=c=>H("openCreateSpace","","task")),class:"mr-2",severity:"secondary"})):Y("",!0),e("div",null,[o(Ve,{icon:"pi pi-list",label:"List",onClick:v[11]||(v[11]=()=>b.value=!0),class:et(["table-btn",{"bg-indigo-400 text-white":t(b)}]),severity:"secondary"},null,8,["class"]),o(Ve,{icon:"pi pi-th-large",label:"Board",onClick:v[12]||(v[12]=()=>b.value=!1),class:et(["board-btn",{"bg-indigo-400 text-white":!t(b)}]),severity:"secondary"},null,8,["class"])]),t(ke)?N((p(),$e(Ve,{key:1,onClick:v[13]||(v[13]=c=>We(l.tasks)),loading:t(De),style:Z(`${t(De)===!0?"backGround: red":""}`),class:"excel-export-btn"},{default:h(()=>[Bl]),_:1},8,["loading","style"])),[[ge,{value:"Download Tasks"},void 0,{right:!0}]]):Y("",!0)])]),end:h(()=>[o(rt,{iconPosition:"right",raised:""},{default:h(()=>[o(st,null,{default:h(()=>[Fl]),_:1}),o(Ae,{onKeyup:v[14]||(v[14]=c=>J()),modelValue:t(F),"onUpdate:modelValue":v[15]||(v[15]=c=>I(F)?F.value=c:null),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})]),_:1}),t(b)?(p(),$e(_e,{key:0,class:"table-st",stripedRows:"",value:l.tasks,lazy:!0,loading:t(Fe),tableProps:{style:{minWidth:"650px",width:"100%"}},filterDisplay:"menu",style:{overflow:"auto"}},{empty:h(()=>[Nl]),default:h(()=>[o(t(Ye),{field:"name",header:"Name",class:"cursor-pointer tone",expander:"",style:{width:"40%"}},{body:h(c=>[e("div",Rl,[N((p(),q("div",Pl,[o(se,{class:"mr-1 flex justify-content-center align-items-center",onChange:a=>T(c.node.data.status,c.node.key),modelValue:c.node.data.status,"onUpdate:modelValue":a=>c.node.data.status=a,options:t(W),disabled:!t(P),optionLabel:"name"},{value:h(a=>[a.value?(p(),q("div",{key:0,class:"flex align-items-center",style:Z({backgroundColor:a.value.color_code})},[e("div",{style:Z({backgroundColor:a.value.color_code}),class:"status-bg"},null,4)],4)):(p(),q("span",Jl,g(a.placeholder),1))]),option:h(a=>[e("div",Yl,[e("div",{style:Z([{backgroundColor:a.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,g(a.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])),[[ge,{value:`${c.node.data.status.name}`},void 0,{top:!0}]]),N((p(),q("span",{class:"taskTitle",onClick:a=>H("handleTaskDetailView",c.node)},[me(g(c.node.data.name),1)],8,Gl)),[[ge,{value:`${c.node.data.name}`},void 0,{left:!0}]])])]),_:1}),o(t(Ye),{field:"assignee",header:"Assignee"},{body:h(c=>[e("div",Kl,[(p(!0),q(Ie,null,Re(c.node.data.assigneeObj,(a,j)=>(p(),q("span",{key:j,class:"flex justify-content-center assignee-wrapper",style:Z({marginLeft:j>0?"-20px":"0",zIndex:10-j})},[a.image?N((p(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:a.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Wl)),[[ge,{value:`${a.name}`},void 0,{top:!0}]]):N((p(),$e(ye,{key:1,label:a.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:Z([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},Ce(j)])},null,8,["label","style"])),[[ge,{value:`${a.name}`},void 0,{top:!0}]])],4))),128))])]),_:1}),o(t(Ye),{field:"status",header:"Status",style:{width:"20%"}},{body:h(c=>[e("div",Ql,[e("div",Xl,[o(se,{class:"mr-1 flex justify-content-center align-items-center",onChange:a=>T(c.node.data.status,c.node.key),modelValue:c.node.data.status,"onUpdate:modelValue":a=>c.node.data.status=a,options:t(W),disabled:!t(P),optionLabel:"name"},{value:h(a=>[a.value?(p(),q("div",Zl,[e("div",{style:Z({color:a.value.color_code,fontWeight:500}),class:"pt-1"},g(a.value.name),5)])):(p(),q("span",en,g(a.placeholder),1))]),option:h(a=>[e("div",tn,[e("div",{style:Z([{backgroundColor:a.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,g(a.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])])]),_:1}),o(t(Ye),{field:"dueDateValue",header:"Due Date",style:{textWrap:"nowrap"}},{body:h(c=>[e("div",{style:Z(`color: ${c.node.data.dueDateColor}; font-weight: 600;`)},g(c.node.data.dueDateValue),5)]),_:1}),o(t(Ye),{field:"priority",header:"Priority",style:{width:"10%"}},{body:h(c=>[e("div",ln,[e("div",nn,[o(se,{class:"mr-1 flex justify-content-center align-items-center",onChange:a=>yt(c.node.data.priority,c.node.key),modelValue:c.node.data.priority,"onUpdate:modelValue":a=>c.node.data.priority=a,options:t(w),disabled:!t(P),optionLabel:"name",placeholder:"Set Priority"},{value:h(a=>[a.value?(p(),q("div",on,[a.value.name?(p(),q("div",{key:0,style:Z({color:a.value.name==="Low"?"#e1aa1e":a.value.name==="Normal"?"#067bea":a.value.name==="High"?"#ff4928":a.value.name==="Urgent"?"crimson":"",fontWeight:500}),class:"pt-1"},g(a.value.name),5)):(p(),q("div",an,"Set "))])):(p(),q("span",sn,g(a.placeholder),1))]),option:h(a=>[e("div",rn,[e("div",null,g(a.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])])]),_:1}),o(t(Ye),{field:"action",header:"Action",style:{width:"10%",position:"relative"}},{body:h(c=>[e("div",{class:"justify-content-start align-items-center webView-action",style:{width:"fit-content"},onMouseover:a=>qe(c.node.key),onMouseleave:a=>O(c.node.key)},[o(Te,{visible:t(D)[c.node.key],"onUpdate:visible":a=>t(D)[c.node.key]=a,model:we(c.node),direction:"left",class:"custom-speed-dial",tooltipOptions:{position:"top"}},null,8,["visible","onUpdate:visible","model"])],40,dn),e("div",{class:"justify-content-start align-items-center tabView-action",style:{width:"fit-content"},onClick:a=>qe(c.node.key),onMouseleave:a=>O(c.node.key)},[o(Te,{visible:t(D)[c.node.key],"onUpdate:visible":a=>t(D)[c.node.key]=a,model:we(c.node),direction:"left",class:"custom-speed-dial",tooltipOptions:{position:"top"}},null,8,["visible","onUpdate:visible","model"])],40,cn)]),_:1})]),_:1},8,["value","loading"])):Y("",!0),t(b)?Y("",!0):(p(),q("div",un,[e("div",pn,[e("div",null,[e("div",mn,[(p(!0),q(Ie,null,Re(l.kanbanTasks,c=>(p(),q("div",{key:c,class:"groupColumnContainer"},[e("div",qn,[e("div",{style:Z(`background-color: ${c.statusColor}; `),class:"column-header"},g(c.name)+" - "+g(c.content.length),5),o(t($l),{modelValue:c.content,"onUpdate:modelValue":a=>c.content=a,options:t(wt),disabled:!t(P),class:"draggable scrollbar",itemKey:"name",group:"cardItem",onChange:a=>it(a,c.status)},{item:h(({element:a})=>[e("div",fn,[(p(),q("div",{class:"task-card",style:Z(t(at)),key:a.id,onClick:j=>S.$emit("handleTaskDetailView",a,c.content,c.name)},[e("div",gn,[N((p(),q("p",bn,[me(g(a.data.name),1)])),[[ge,{value:`${a.data.name}`},void 0,{top:!0}]]),e("div",hn,[e("div",{class:"status-icon",style:Z(`background-color:${a.data.status.color_code}`)},null,4),e("p",kn,g(a.data.status.name),1)]),e("div",yn,[wn,e("div",_n,[(p(!0),q(Ie,null,Re(a.data.assigneeObj,(j,be)=>(p(),q("span",{key:be,class:"flex justify-content-center assignee-wrapper",style:Z({marginLeft:be>0?"-20px":"0",zIndex:10-be})},[j.image?N((p(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:j.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,xn)),[[ge,{value:`${j.name}`},void 0,{top:!0}]]):N((p(),$e(ye,{key:1,label:j.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:Z([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},Ce(be)])},null,8,["label","style"])),[[ge,{value:`${j.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",Dn,[Tn,e("p",{style:Z(`color: ${a.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},g(a.data.dueDateValue),5)]),e("div",Sn,[$n,e("p",Cn,g(a.data.priority),1)]),e("div",{class:"mt-2 flex align-items-center gap-2 cursor-pointer p-1 rounded hover:bg-gray-100",style:{"border-radius":"5px"},onClick:j=>{j.stopPropagation(),t(m)==a.unique_id?m.value=null:m.value=a.unique_id}},[An,e("i",{class:et(`pi ${t(m)==a.unique_id?"pi-angle-down":"pi-angle-right"}  text-lg`)},null,2),e("p",En,g(a.children.length),1)],8,Vn)]),me(" "+g(a.t_name),1)],12,vn)),e("div",{class:et(t(m)===a.unique_id?"":"hidden")},[(p(!0),q(Ie,null,Re(a.children,j=>(p(),q("div",{key:j.unique_id,class:"sub-card",onClick:be=>S.$emit("handleTaskDetailView",j,c.content,c.name)},[e("p",Ln,g(j.data.name),1),e("p",Un,g(j.data.description),1),e("div",In,[e("div",{class:"status-icon",style:Z(`background-color:${j.data.status.color_code}`)},null,4),e("p",On,g(j.data.status.name),1)]),e("div",zn,[Mn,e("div",Hn,[(p(!0),q(Ie,null,Re(j.data.assigneeObj,(be,Xe)=>(p(),q("span",{key:Xe,class:"flex justify-content-center assignee-wrapper",style:Z({marginLeft:Xe>0?"-20px":"0",zIndex:10-Xe})},[be.image?N((p(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:be.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Bn)),[[ge,{value:`${be.name}`},void 0,{top:!0}]]):N((p(),$e(ye,{key:1,label:be.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:Z([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},Ce(Xe)])},null,8,["label","style"])),[[ge,{value:`${be.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",Fn,[Nn,e("p",{style:Z(`color: ${j.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},g(j.data.dueDateValue),5)]),e("div",Rn,[Pn,e("p",Jn,g(j.data.priority),1)]),e("div",Yn,[Gn,e("p",Kn,g(j.children.length),1)])],8,jn))),128))],2)])]),_:2},1032,["modelValue","onUpdate:modelValue","options","disabled","onChange"])])]))),128))])])])]))],64)}}};const ol=l=>(Tt("data-v-b96e1129"),l=l(),St(),l),Qn={class:"field flex flex-column"},Xn={for:"name"},Zn=ol(()=>e("i",{class:"text-red-400 text-italic"},"*",-1)),eo={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},to={class:"field"},lo={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},no={class:"field"},oo={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},ao={class:"field"},io={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},so={class:"field"},ro={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},co=ol(()=>e("br",null,null,-1)),uo={key:0,class:"text-center",style:{color:"red"}},po={class:"create-btn-wrapper mb-0"},mo={__name:"CreateTask",props:["createTaskTitle","taskId","projects","usersLists","tagsLists"],emits:["closeCreateModal"],setup(l,{emit:d}){const{createTask:k}=xe(),{isTaskCreated:x,detectDuplicateTask:R}=Ge(xe()),{createTaskTitle:_,taskId:ee,projects:te,usersLists:pe,tagsLists:W}=l,G=pt(),le=n(!1),P=n(ee),re=n(!0),ke=n(!1),ne=n(!1),H=n(null),de=n(null),Q=n(null),B=n(null),s=n(null),ce=n(!1),oe=n([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),ae=d,F=b=>{if(console.log("test druve"),ce.value)de.value=b;else{const f=new Date(b);f.setHours(23,59,0,0),de.value=f}};Oe(de,(b,f)=>{b&&f&&b!==f&&(ce.value=!0)});const K=async()=>{var b,f,w;if(le.value=!0,H.value===null)ne.value=!0,le.value=!1;else{ne.value=!1;let D;if(de.value){const O=new Date(de.value);O.setDate(O.getDate()+1),D=O.toISOString()}const qe={name:H.value,dueDate:D?new Date(new Date(D).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:(b=Q.value)==null?void 0:b.map(O=>O.id),tags:(f=B.value)==null?void 0:f.map(O=>O.id),priority:(w=s.value)==null?void 0:w.name,project_id:te,parent_task_id:ee};if(D){const O=new Date(D);O.setDate(O.getDate()-1),de.value=O?new Date(O).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await k(qe),R.value===!0?(le.value=!1,G.add({severity:"error",summary:"Error",detail:"Task already exists!",group:"br",life:3e3})):x.value===!0?(le.value=!1,re.value=!1,ke.value=!0,H.value=null,ae("closeCreateModal",!1),G.add({severity:"success",summary:"Successful",detail:"Task created Successfully",group:"br",life:3e3})):(le.value=!1,G.add({severity:"error",summary:"Error",detail:"Unable to create task!",group:"br",life:3e3}))}};return(b,f)=>{const w=Zt,D=$t,qe=bt,O=kt,we=ht,ie=ut,z=xt("tooltip");return p(),q("div",null,[o(w,{type:"hidden",modelValue:t(P),"onUpdate:modelValue":f[0]||(f[0]=E=>I(P)?P.value=E:null)},null,8,["modelValue"]),e("div",Qn,[e("label",Xn,[me("Set Task Name"),Zn,me(),N(e("span",eo,null,512),[[z,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(D,{id:"description",class:"border-gray-300",modelValue:t(H),"onUpdate:modelValue":f[1]||(f[1]=E=>I(H)?H.value=E:null),rows:"3",cols:"20",invalid:b.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",to,[e("label",null,[me("Assignees "),N(e("span",lo,null,512),[[z,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(qe,{display:"chip",modelValue:t(Q),"onUpdate:modelValue":f[2]||(f[2]=E=>I(Q)?Q.value=E:null),options:l.usersLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",no,[e("label",null,[me("Tags "),N(e("span",oo,null,512),[[z,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(qe,{display:"chip",modelValue:t(B),"onUpdate:modelValue":f[3]||(f[3]=E=>I(B)?B.value=E:null),options:l.tagsLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",ao,[e("label",null,[me("Due Date "),N(e("span",io,null,512),[[z,{value:"Set your task due date"},void 0,{right:!0}]])]),o(O,{modelValue:t(de),"onUpdate:modelValue":f[4]||(f[4]=E=>I(de)?de.value=E:null),class:"w-full clndr",placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:f[5]||(f[5]=E=>F(E))},null,8,["modelValue"])]),e("div",so,[e("label",null,[me("Priority "),N(e("span",ro,null,512),[[z,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(we,{modelValue:t(s),"onUpdate:modelValue":f[6]||(f[6]=E=>I(s)?s.value=E:null),options:t(oe),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),co,t(ne)?(p(),q("p",uo,"Please add task name")):Y("",!0),e("div",po,[o(ie,{label:"Save",icon:"pi pi-check",text:"",onClick:K,loading:t(le)},null,8,["loading"])])])}}},qo=Dt(mo,[["__scopeId","data-v-b96e1129"]]);const lt=l=>(Tt("data-v-0acc2fe1"),l=l(),St(),l),fo={class:"position-relative d-flex flex-column justify-content-between w-100 modal-container"},vo={class:"field flex flex-column"},go=lt(()=>e("label",{for:"name"},[me("Edit Task Name"),e("i",{class:"text-red-400 text-italic"},"*")],-1)),bo={class:"field"},ho=lt(()=>e("label",null,"Assignees",-1)),ko={class:"field"},yo=lt(()=>e("label",null,"Tags",-1)),wo={class:"field"},_o=lt(()=>e("label",null,"Due Date",-1)),xo={class:"field"},Do=lt(()=>e("label",null,"Priority",-1)),To=lt(()=>e("br",null,null,-1)),So={key:0,class:"text-center",style:{color:"red"}},$o={class:"create-btn-wrapper mb-0"},Co={__name:"EditTask",props:["singleTask","usersLists","tagsLists","projects"],emits:["closeEditModal"],setup(l,{emit:d}){var oe,ae,F,K,b;const{editTask:k}=xe(),{isTaskEdited:x,detectDuplicateTask:R}=Ge(xe()),{singleTask:_,usersLists:ee,tagsLists:te,projects:pe}=l,W=pt(),G=n(!1),le=n((oe=_==null?void 0:_.data)==null?void 0:oe.name),P=n((ae=_==null?void 0:_.data)!=null&&ae.dueDate?new Date(_.data.dueDate).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),re=n(!1),ke=n(null);ke.value=(F=_==null?void 0:_.data)!=null&&F.assigneeObj?(K=_==null?void 0:_.data)==null?void 0:K.assigneeObj.map(f=>({id:f.id,name:f.name})):"";const ne=n((b=_==null?void 0:_.data)==null?void 0:b.tagsObj),H=n(null);H.value=_.data.priority?{name:_.data.priority.name,code:_.data.priority.code}:"";const de=n([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),Q=n(!1),B=d,s=f=>{if(console.log("test druve"),re.value)P.value=f;else{const w=new Date(f);w.setHours(23,59,0,0),P.value=w}};Oe(P,(f,w)=>{f&&w&&f!==w&&(re.value=!0)});const ce=async()=>{if(G.value=!0,le.value===null)Q.value=!0,G.value=!1;else{Q.value=!1;let f;if(P.value){const D=new Date(P.value);D.setDate(D.getDate()+1),f=D.toISOString()}const w={id:_.key,name:le.value,priority:H.value.name,dueDate:f?new Date(new Date(f).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:ke.value.map(D=>D.id),tags:ne.value.map(D=>D.id),project_id:pe};if(f){const D=new Date(f);D.setDate(D.getDate()-1),P.value=D?new Date(D).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await k(w),R.value===!0?(G.value=!1,W.add({severity:"error",summary:"Error",detail:"Cannnot edit, edited task name already exists!",group:"br",life:3e3})):x.value===!0?(G.value=!1,B("closeEditModal",!1),B("visibleEdit","visibleEdit"),W.add({severity:"success",summary:"Successful",detail:"Task updated Successfully",group:"br",life:3e3})):(G.value=!1,W.add({severity:"error",summary:"Error",detail:"Unable to update task!",group:"br",life:3e3}))}};return(f,w)=>{const D=$t,qe=bt,O=kt,we=ht,ie=ut;return p(),q("div",fo,[e("div",null,[e("div",vo,[go,o(D,{id:"description",class:"border-gray-300",modelValue:t(le),"onUpdate:modelValue":w[0]||(w[0]=z=>I(le)?le.value=z:null),rows:"3",cols:"15",invalid:f.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",bo,[ho,o(qe,{display:"chip",modelValue:t(ke),"onUpdate:modelValue":w[1]||(w[1]=z=>I(ke)?ke.value=z:null),options:l.usersLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",ko,[yo,o(qe,{display:"chip",modelValue:t(ne),"onUpdate:modelValue":w[2]||(w[2]=z=>I(ne)?ne.value=z:null),options:l.tagsLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",wo,[_o,o(O,{modelValue:t(P),"onUpdate:modelValue":w[3]||(w[3]=z=>I(P)?P.value=z:null),class:"w-full",placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:w[4]||(w[4]=z=>s(z))},null,8,["modelValue"])]),e("div",xo,[Do,o(we,{modelValue:t(H),"onUpdate:modelValue":w[5]||(w[5]=z=>I(H)?H.value=z:null),options:t(de),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),To,t(Q)?(p(),q("p",So,"Please add/fill/check up all the fields ")):Y("",!0),e("div",$o,[o(ie,{label:"Update",icon:"pi pi-check",text:"",onClick:ce,loading:t(G)},null,8,["loading"])])])])}}},Vo=Dt(Co,[["__scopeId","data-v-0acc2fe1"]]),Kt=bl("fileUpload",()=>{const l=n(!1),d=n(!1),k=n(!1);async function x(_,ee){d.value=!0;const te=new FormData;te.append("task_id",_),te.append("attachments",ee);const pe=tt("token");try{const W=await fetch("https://pbe.singularitybd.net/api/v1/tasks/attachment-upload",{method:"POST",headers:{Authorization:`Bearer ${pe.value}`},body:te});if(!W.ok)throw new Error("Network response was not ok");const G=await W.json();console.log("upload data =>",G),(G==null?void 0:G.user_message)==="success"?l.value=!0:l.value=!1,d.value=!1}catch(W){console.error("Error uploading file:",W),l.value=!1,d.value=!1}}async function R(_){const ee=tt("token");try{const te=await fetch(`https://pbe.singularitybd.net/api/v1/tasks/attachment-delete/${_}`,{method:"DELETE",headers:{Authorization:`Bearer ${ee.value}`}});if(!te.ok)throw new Error("Network response was not ok");const pe=await te.json();console.log("delete data =>",pe),(pe==null?void 0:pe.user_message)==="success"?k.value=!0:k.value=!1}catch(te){console.error("Error uploading file:",te),k.value=!1}}return{fileUpload:x,fileDelete:R,isFileUpload:l,isLoading:d,isFileDeleted:k}});var Ao=`
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}
`,Eo={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},Wt=hl.extend({name:"editor",css:Ao,classes:Eo}),jo={name:"BaseEditor",extends:Ul,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Wt,provide:function(){return{$parentInstance:this}},beforeMount:function(){var d;Wt.loadStyle({nonce:(d=this.$primevue)===null||d===void 0||(d=d.config)===null||d===void 0||(d=d.csp)===null||d===void 0?void 0:d.nonce})}};function ct(l){"@babel/helpers - typeof";return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},ct(l)}function Qt(l,d){var k=Object.keys(l);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(l);d&&(x=x.filter(function(R){return Object.getOwnPropertyDescriptor(l,R).enumerable})),k.push.apply(k,x)}return k}function Lo(l){for(var d=1;d<arguments.length;d++){var k=arguments[d]!=null?arguments[d]:{};d%2?Qt(Object(k),!0).forEach(function(x){Uo(l,x,k[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(k)):Qt(Object(k)).forEach(function(x){Object.defineProperty(l,x,Object.getOwnPropertyDescriptor(k,x))})}return l}function Uo(l,d,k){return d=Io(d),d in l?Object.defineProperty(l,d,{value:k,enumerable:!0,configurable:!0,writable:!0}):l[d]=k,l}function Io(l){var d=Oo(l,"string");return ct(d)=="symbol"?d:String(d)}function Oo(l,d){if(ct(l)!="object"||!l)return l;var k=l[Symbol.toPrimitive];if(k!==void 0){var x=k.call(l,d||"default");if(ct(x)!="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(l)}var Xt=function(){try{return window.Quill}catch{return null}}(),al={name:"Editor",extends:jo,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(d,k){d!==k&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(d))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var d=this,k={modules:Lo({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};Xt?(this.quill=new Xt(this.$refs.editorElement,k),this.initQuill(),this.handleLoad()):kl(()=>import("./quill.b9bfb486.js").then(x=>x.q),["./quill.b9bfb486.js","./vuedraggable.umd.493e0d78.js","./entry.ac7f7863.js","./entry.5d0b2de3.css"],import.meta.url).then(function(x){x&&yl.isExist(d.$refs.editorElement)&&(x.default?d.quill=new x.default(d.$refs.editorElement,k):d.quill=new x(d.$refs.editorElement,k),d.initQuill())}).then(function(){d.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(d){this.quill&&(d?this.quill.setContents(this.quill.clipboard.convert(d)):this.quill.setText(""))},initQuill:function(){var d=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(k,x,R){if(R==="user"){var _=d.$refs.editorElement.children[0].innerHTML,ee=d.quill.getText().trim();_==="<p><br></p>"&&(_=""),d.$emit("update:modelValue",_),d.$emit("text-change",{htmlValue:_,textValue:ee,delta:k,source:R,instance:d.quill})}}),this.quill.on("selection-change",function(k,x,R){var _=d.$refs.editorElement.children[0].innerHTML,ee=d.quill.getText().trim();d.$emit("selection-change",{htmlValue:_,textValue:ee,range:k,oldRange:x,source:R,instance:d.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function zo(l,d,k,x,R,_){return p(),q("div",A({class:l.cx("root")},l.ptmi("root")),[e("div",A({ref:"toolbarElement",class:l.cx("toolbar")},l.ptm("toolbar")),[wl(l.$slots,"toolbar",{},function(){return[e("span",A({class:"ql-formats"},l.ptm("formats")),[e("select",A({class:"ql-header",defaultValue:"0"},l.ptm("header")),[e("option",A({value:"1"},l.ptm("option")),"Heading",16),e("option",A({value:"2"},l.ptm("option")),"Subheading",16),e("option",A({value:"0"},l.ptm("option")),"Normal",16)],16),e("select",A({class:"ql-font"},l.ptm("font")),[e("option",_l(xl(l.ptm("option"))),null,16),e("option",A({value:"serif"},l.ptm("option")),null,16),e("option",A({value:"monospace"},l.ptm("option")),null,16)],16)],16),e("span",A({class:"ql-formats"},l.ptm("formats")),[e("button",A({class:"ql-bold",type:"button"},l.ptm("bold")),null,16),e("button",A({class:"ql-italic",type:"button"},l.ptm("italic")),null,16),e("button",A({class:"ql-underline",type:"button"},l.ptm("underline")),null,16)],16),(p(),q("span",A({key:R.reRenderColorKey,class:"ql-formats"},l.ptm("formats")),[e("select",A({class:"ql-color"},l.ptm("color")),null,16),e("select",A({class:"ql-background"},l.ptm("background")),null,16)],16)),e("span",A({class:"ql-formats"},l.ptm("formats")),[e("button",A({class:"ql-list",value:"ordered",type:"button"},l.ptm("list")),null,16),e("button",A({class:"ql-list",value:"bullet",type:"button"},l.ptm("list")),null,16),e("select",A({class:"ql-align"},l.ptm("select")),[e("option",A({defaultValue:""},l.ptm("option")),null,16),e("option",A({value:"center"},l.ptm("option")),null,16),e("option",A({value:"right"},l.ptm("option")),null,16),e("option",A({value:"justify"},l.ptm("option")),null,16)],16)],16),e("span",A({class:"ql-formats"},l.ptm("formats")),[e("button",A({class:"ql-link",type:"button"},l.ptm("link")),null,16),e("button",A({class:"ql-image",type:"button"},l.ptm("image")),null,16),e("button",A({class:"ql-code-block",type:"button"},l.ptm("codeBlock")),null,16)],16),e("span",A({class:"ql-formats"},l.ptm("formats")),[e("button",A({class:"ql-clean",type:"button"},l.ptm("clean")),null,16)],16)]})],16),e("div",A({ref:"editorElement",class:l.cx("content"),style:l.editorStyle},l.ptm("content")),null,16)],16)}al.render=zo;const Mo={class:"grid"},Ho={class:"col-12 flex justify-content-between"},Bo={class:"m-0 detail-task-name cursor-pointer"},Fo={class:"flex gap-1"},No=e("h5",{class:"m-0 ml-2"},"Activity",-1),Ro={class:"col-12 lg:col-7"},Po={class:"task-wrapper card"},Jo={class:"task-det no-scrollbar"},Yo={class:"flex justify-content-between gap-2 flex-wrap align-items-center"},Go={class:"w-full lg:w-fit"},Ko={class:"flex justify-content-between gap-2 flex-wrap align-items-centertask-detail-wrapper"},Wo=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-user"}),e("p",null,"Assignee:")],-1),Qo={class:"flex mt-2 justify-content-between gap-2 align-items-center task-detail-wrapper"},Xo=e("div",{class:"flex justify-content-start gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-calendar"}),e("p",{class:"text-nowrap"},"Due Date:")],-1),Zo={class:"w-full lg:w-fit"},ea={class:"flex justify-content-between gap-2 align-items-center task-detail-wrapper"},ta=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",null,"Status:")],-1),la={class:"flex mt-2 justify-content-start gap-6 align-items-center task-detail-wrapper"},na=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-stopwatch"}),e("p",{class:"text-nowrap"},"Track Time:")],-1),oa={class:"clock-wrapper relative"},aa={class:"border-round px-2 pt-3 pb-2"},ia={class:"flex justify-content-center align-items-center gap-3 manual-wrapper -mt-1"},sa=e("label",{for:"hours",class:"block mb-2 text-xs"},"Hours",-1),ra=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),da=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),ca=e("label",{for:"minutes",class:"block mb-2 text-xs"},"Minutes",-1),ua=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),pa=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),ma={class:"flex justify-content-center align-items-center",style:{"margin-top":"0.49rem !important"}},qa=e("div",null,null,-1),fa={class:"flex justify-content-between gap-2 align-items-centertask-detail-wrapper mt-3",style:{width:"100%"}},va=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property",style:{width:"10%"}},[e("span",{class:"pi pi-tags"}),e("p",null,"Tags:")],-1),ga={class:"field mt-3 flex flex-column"},ba=e("div",{class:"flex justify-content-start gap-2 align-items-center mb-1 task-detail-property"},[e("span",{class:"pi pi-sliders-h"}),e("p",null,"Description:")],-1),ha={class:"ql-formats flex justify-content-end mr-0"},ka={class:"ql-bold"},ya={class:"ql-italic"},wa={class:"ql-underline"},_a={class:"ql-strike"},xa=e("span",{class:"ql-formats"},[e("select",{class:"ql-color"}),e("select",{class:"ql-background"})],-1),Da=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"ordered"},null,-1),Ta=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"bullet"},null,-1),Sa=e("button",{class:"ql-link",type:"button","data-pc-section":"link"},null,-1),$a={key:0,class:"flex justify-content-end"},Ca={class:"m-0"},Va={class:"my-3 attach-sec flex align-items-center justify-content-start gap-2",style:{"overflow-x":"scroll"}},Aa={key:0,class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-5 attch-w",style:{"background-color":"#f7fafc"}},Ea=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),ja=e("div",{class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},[e("div",{class:"text-xs"},"asdasd....asdme.extng"),e("div",{class:"text-xs"},"9 MAy, 2024")],-1),La=[Ea,ja],Ua=["href"],Ia=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),Oa={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},za={class:"text-xs"},Ma={class:"text-xs"},Ha=["href"],Ba=["src"],Fa={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Na={class:"text-xs"},Ra={class:"text-xs"},Pa=["href"],Ja=e("div",{class:"pi pi-video text-6xl attach-icon"},null,-1),Ya={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Ga={class:"text-xs"},Ka={class:"text-xs"},Wa=["href"],Qa=e("div",{class:"pi pi-file-pdf text-6xl text-danger attach-icon"},null,-1),Xa={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Za={class:"text-xs"},ei={class:"text-xs"},ti=["href"],li=e("div",{class:"pi pi-file-word text-6xl text-blue attach-icon"},null,-1),ni={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},oi={class:"text-xs"},ai={class:"text-xs"},ii=["href"],si=e("div",{class:"pi pi-file-excel text-6xl attach-icon",style:{color:"#04aa6d"}},null,-1),ri={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},di={class:"text-xs"},ci={class:"text-xs"},ui=["onClick"],pi=e("i",{class:"pi pi-times text-xs text-white"},null,-1),mi=[pi],qi={key:0,class:"flex gap-2 w-full justify-content-center"},fi=e("p",{class:"text-center"},"No Data found...",-1),vi=["onClick"],gi={class:"action-dropdown-det"},bi={class:"action-dropdown-content-det"},hi={class:"card"},ki={class:"flex justify-content-start align-items-center task-detail-wrapper"},yi=e("div",{class:"flex justify-content-start gap-2 align-items-center bounce-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",{class:"text-nowrap"},"Bounce Status:")],-1),wi={class:"col-12 lg:col-5"},_i={class:"comment-wrapper card no-scrollbar"},xi={class:"comments no-scrollbar"},Di={class:"my-2 text-surface-800"},Ti={key:0},Si=["innerHTML"],$i={class:"my-2 text-surface-800"},Ci={class:"flex justify-content-start align-items-center"},Vi=["src"],Ai={class:"text-lg"},Ei={key:0,class:"flex justify-content-start my-2"},ji=["href"],Li=e("div",{class:"pi pi-file"},null,-1),Ui={class:"attach-detail flex flex-column justify-content-center align-items-center"},Ii={class:"text-xs"},Oi={class:"m-0 ml-1",style:{"font-size":"0.9rem"}},zi={style:{"line-height":"0"},class:"pb-1 float-right mt-3 mb-2"},Mi={key:0,class:"text-sm font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-itens-center mb-1 relative"},Hi=e("span",{class:"pi pi-file-import mr-2"},null,-1),Bi=e("i",{class:"pi pi-times"},null,-1),Fi=[Bi],Ni={__name:"TaskDetail",props:["usersLists","tagsLists","projID"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask","updateTaskTable"],setup(l,{emit:d}){var Ct,Vt,At,Et,jt,Lt;const k=nl(),{fileUpload:x,fileDelete:R}=Kt(),{isFileUpload:_,isLoading:ee,isFileDeleted:te}=Ge(Kt()),{getTaskTimerData:pe,setManualTime:W,storeTaskTimer:G}=Gt();Ge(Gt());const{editTask:le,addTaskComment:P,getTaskDetails:re,getSingleProject:ke}=xe(),{isTaskEdited:ne,isTaskCommentCreated:H,singleTaskComments:de,subTasks:Q,taskStatus:B,taskDetails:s,taskActivity:ce}=Ge(xe());localStorage.setItem("taskDetailID",JSON.stringify(s.value.id));const{usersLists:oe,tagsLists:ae,projID:F}=l,K=d,b=pt(),f=n(!1),w=n(Pe("update_task")),D=n(Pe("edit_bounce")),qe=n(Pe("create_task")),O=n(null);O.value=(Vt=(Ct=s.value)==null?void 0:Ct.assignee)==null?void 0:Vt.map(u=>({id:u.id,name:u.name}));const we=n(!1);Oe(O,u=>{we.value=!0});const ie=n((Et=(At=s.value)==null?void 0:At.tags)==null?void 0:Et.map(u=>({id:u.id,name:u.name}))),z=n(!1);Oe(ie,u=>{z.value=!0});const E=n((jt=s.value)!=null&&jt.due_date?new Date(s.value.due_date).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),ze=n(!1),Me=u=>{if(console.log("test druve"),ze.value)E.value=u;else{const i=new Date(u);i.setHours(23,59,0,0),E.value=i}};Oe(E,(u,i)=>{u&&i&&u!==i&&(ze.value=!0)});const M=n(E.value);Oe(E,(u,i)=>{u&&(M.value=new Date(u).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase())});const m=n(),nt=Dl(),J=n(null),fe=n(null),He=n(!1),je=n(!1),ot=async u=>{var L,V;je.value=!0;let i;if(J.value>0||fe.value>0){i=J.value*3600+fe.value*60,console.log("totalSeconds",i);const U=await W((L=s.value)==null?void 0:L.id,i);(U==null?void 0:U.code)===200?(await re((V=s.value)==null?void 0:V.id),je.value=!1,b.add({severity:"success",summary:"Duration Added",detail:`Duration: ${J.value?J.value:0} hours and ${fe.value?fe.value:0} minutes`,group:"br",life:3e3}),J.value=null,fe.value=null,u()):(je.value=!1,b.add({severity:"error",summary:"Error",detail:"Unable to add duration",group:"br",life:3e3})),console.log("responseData",U)}else je.value=!1,b.add({severity:"error",summary:"Error",detail:"Please add duration",group:"br",life:3e3});i=null},Ke=u=>{var i;console.log(u.detail),u.detail===3&&((i=s.value)==null?void 0:i.is_timer_start)==="false"&&nt.require({target:u.currentTarget,group:"headless",message:"Set task duration:",accept:()=>{b.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{}})},Be=n("00:00:00");let De=null;const We=async()=>{var u,i,L,V,U,C,$,Se,Le,Ee;if(s.value.id,console.log("taskDetails",s.value),((u=s.value)==null?void 0:u.is_timer_start)==="false"){await pe("start",(i=s.value)==null?void 0:i.id),await re((L=s.value)==null?void 0:L.id),Fe(),localStorage.setItem("storeTaskID",JSON.stringify((V=s.value)==null?void 0:V.id)),localStorage.setItem("storeTaskProjectID",JSON.stringify(Number(F))),localStorage.setItem("storeTaskSpaceID",JSON.stringify((U=s.value)==null?void 0:U.project.space_id)),localStorage.setItem("storeTaskCompanyID",JSON.stringify((C=s.value)==null?void 0:C.project.company_id)),localStorage.setItem("storeTaskTimerStartTime",JSON.stringify(s.value.taskTimer.start_time));let Ze={task_id:s.value.id,project_id:F,space_id:s.value.project.space_id,company_id:s.value.project.company_id,timerStartTime:s.value.taskTimer.start_time};await G(Ze),b.add({severity:"success",summary:"Task Timer",detail:"Timer Started",group:"br",life:3e3}),await ke(F)}else await pe("stop",($=s.value)==null?void 0:$.id,(Le=(Se=s.value)==null?void 0:Se.taskTimer)==null?void 0:Le.id),await re((Ee=s.value)==null?void 0:Ee.id),T(),localStorage.removeItem("storeTaskID"),localStorage.removeItem("storeTaskProjectID"),localStorage.removeItem("storeTaskSpaceID"),localStorage.removeItem("storeTaskCompanyID"),localStorage.removeItem("storeTaskTimerStartTime"),await G({task_id:null,project_id:null,space_id:null,company_id:null}),b.add({severity:"success",summary:"Task Timer",detail:"Timer Stopped",group:"br",life:3e3}),await ke(F)},Fe=()=>{s.value.id,console.log("taskDetails.value.taskTimer.start_time",s.value.taskTimer.start_time);const u=new Date(s.value.taskTimer.start_time).getTime();De=setInterval(()=>{const i=Math.floor((Date.now()-u)/1e3);Be.value=_e(i)},1e3)},T=()=>{clearInterval(De),Be.value=_e(s.value.total_duration)},yt=n([{is_bounce:"No"},{is_bounce:"Yes"}]),Ne=n(),Ce=n(((Lt=s.value)==null?void 0:Lt.description)||" "),Qe=n(!1);Oe(Ce,u=>{u.length===0&&(Ce.value=" "),Qe.value=!0});const Je=n(null),wt=n(),at=n(!0),it=n(!1),qt=()=>{it.value=!0,at.value=!1},S=()=>{it.value=!1,at.value=!0},v=async()=>{var u;f.value=!0,await P((u=s.value)==null?void 0:u.id,Je.value,a.value),H.value===!0?(b.add({severity:"success",summary:"Successful",detail:"Comment added Successfully",group:"br",life:3e3}),Je.value=null,f.value=!1,a.value=null):(b.add({severity:"error",summary:"Error",detail:"Unable to add comment",group:"br",life:3e3}),f.value=!1)},ve=u=>{const i=new Date(u),V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i.getMonth()],U=i.getDate(),C=i.getFullYear().toString().substr(-2),$=i.getHours(),Se=i.getMinutes(),Le=$>=12?"PM":"AM",Ee=$%12||12,Ze=Se<10?"0"+Se:Se;return`${U} ${V}'${C}, ${Ee}:${Ze}${Le}`},se=async()=>{var V,U;let u;if(E.value){const C=new Date(E.value);C.setDate(C.getDate()+1),u=C.toISOString()}console.log("checkDate",M.value);const i=new Date((V=s.value)==null?void 0:V.due_date).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});console.log("formattedDueDate",i);const L={id:(U=s.value)==null?void 0:U.id,...Qe.value===!0?{description:Ce.value}:{},project_id:F,...M.value!==i?{dueDate:u?new Date(new Date(u).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null}:{},...we.value===!0?{assignees:O.value.map(C=>C.id)}:{},...z.value===!0?{tags:ie.value.map(C=>C.id)}:{}};if(u){const C=new Date(u);C.setDate(C.getDate()-1),E.value=C?new Date(C).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await le(L),ne.value===!0?(b.add({severity:"success",summary:"Successful",detail:"Task detail updated",group:"br",life:3e3}),wt.value=null,Qe.value===!0&&(Qe.value=!1,console.log("isDescriptionEdited Flagged")),we.value===!0&&(we.value=!1,console.log("isAsigneeEdited Flagged")),z.value===!0&&(z.value=!1,console.log("isTagsEdited Flagged"))):b.add({severity:"error",summary:"Error",detail:"Unable to upadte task detail",group:"br",life:3e3})},X=n(null),Ve=u=>{X.value=u.target.files[0]},st=async()=>{var u,i;X.value&&console.log("file =>",X.value),await x((u=s.value)==null?void 0:u.id,X.value),_.value===!0?(b.add({severity:"success",summary:"Successfull",detail:"File Upload successfully!",group:"br",life:3e3}),re((i=s.value)==null?void 0:i.id),document.getElementById("attachInput").value=null,X.value=null):b.add({severity:"error",summary:"Error",detail:"Unable to upload file!",group:"br",life:3e3})},Ae=u=>{const i=["jpg","JPG","jpeg","png","gif","bmp","svg","webp","ico","tiff","tif","heic","heif"],L=["mp4","avi","flv","wmv","mov","3gp","mkv"],V=["pdf","PDF","ppt","pptx"],U=["doc","docx","rtf"],C=["xls","xlsx","csv"];return i.some($=>u.endsWith("."+$))?"image":L.some($=>u.endsWith("."+$))?"video":V.some($=>u.endsWith("."+$))?"pdf":U.some($=>u.endsWith("."+$))?"word":C.some($=>u.endsWith("."+$))?"excel":"file"};ll(async()=>{var L,V;await re((L=s.value)==null?void 0:L.id);const u={name:s.value.status_name,code:s.value.status};m.value=u;const i={is_bounce:s.value.is_bounce};Ne.value=i,((V=s.value)==null?void 0:V.is_timer_start)==="true"&&Fe()});async function rt(u){var i,L,V;try{const U=tt("token"),{data:C,pending:$}=await gt(`${k.public.apiUrl}/tasks/update/${(i=s.value)==null?void 0:i.id}`,{method:"POST",headers:{Authorization:`Bearer ${U.value}`},body:{status:u.code}},"$nwfJLeTGBC");((L=C.value)==null?void 0:L.app_message)==="success"?(re((V=s.value)==null?void 0:V.id),b.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),K("updateTaskTable")):b.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(U){console.error("Error fetching data:",U)}}async function dt(u){var i,L,V;try{const U=tt("token"),{data:C,pending:$}=await gt(`${k.public.apiUrl}/tasks/update/${(i=s.value)==null?void 0:i.id}`,{method:"POST",headers:{Authorization:`Bearer ${U.value}`},body:{is_bounce:u.is_bounce}},"$np1kf0qdb3");console.log("dataBO",C),((L=C.value)==null?void 0:L.app_message)==="success"?(re((V=s.value)==null?void 0:V.id),b.add({severity:"success",summary:"Successfull",detail:"Bounce Status Changed",group:"br",life:3e3})):b.add({severity:"error",summary:"Error",detail:"Unable to change bounce status",group:"br",life:3e3})}catch(U){console.error("Error fetching data:",U)}}const ye=u=>{const L=u.split("/");return L[L.length-1]},Te=u=>{const i=["Jan","Feb","Mar","Apr","MAy","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],L=u,V=new Date(L),U={year:"numeric",month:"long",day:"numeric"},$=V.toLocaleDateString("en-US",U).split(" "),Se=i.indexOf($[0]);return Se!==-1&&($[0]=i[Se]),$.join(" ")};function _e(u){const i=Math.floor(u/3600).toString().padStart(2,"0"),L=Math.floor(u%3600/60).toString().padStart(2,"0"),V=(u%60).toString().padStart(2,"0");return`${i}:${L}:${V}`}const ge=async u=>{var i;await R(u),te.value===!0?(b.add({severity:"success",summary:"Successful",detail:"File Deleted successfully!",group:"br",life:3e3}),re((i=s.value)==null?void 0:i.id)):b.add({severity:"error",summary:"Error",detail:"Unable to delete file!",group:"br",life:3e3})},c=n(null),a=n(null),j=n(""),be=u=>{a.value=u.target.files[0],j.value=a.value?a.value.name:""},Xe=()=>{c.value.click()},il=async()=>{a.value=null},sl=async()=>{var U;const u=tt("token"),{data:i,pending:L,error:V}=await gt(`${k.public.apiUrl}/tasks/share/${(U=s.value)==null?void 0:U.id}`,{method:"GET",headers:{Authorization:`Bearer ${u.value}`}},"$yuqoLxhdIO");if(V.value){b.add({severity:"error",summary:"Error",detail:"Failed to share",life:3e3});return}else{const C=document.createElement("textarea");C.value=i.value.shared_web_link,document.body.appendChild(C),C.select(),document.execCommand("copy"),document.body.removeChild(C),b.add({severity:"success",summary:"Share successful",detail:"Shared link copied",group:"br",life:3e3});return}};return(u,i)=>{var Ut,It,Ot,zt,Mt;const L=bt,V=Cl,U=ht,C=Vl,$=ut,Se=Al,Le=El,Ee=Ye,Ze=tl,rl=jl,dl=el,cl=Ll,ul=$t,Ue=xt("tooltip");return p(),q("div",Mo,[e("div",Ho,[N((p(),q("h5",Bo,[me(g(t(s).name),1)])),[[Ue,{value:`${t(s).name}`,pt:{width:"200px"}},void 0,{top:!0}]]),e("div",Fo,[N(e("span",{onClick:sl,class:"pi pi-share-alt my-auto cursor-pointer ml-2 share-btn"},null,512),[[Ue,{value:"Share Task"},void 0,{top:!0}]]),No])]),e("div",Ro,[e("div",null,[e("div",Po,[e("div",Jo,[e("form",{onSubmit:Yt(se,["prevent"]),class:"mt-2 task-detail ml-2"},[e("div",Yo,[e("div",Go,[e("div",Ko,[Wo,o(V,{style:{width:"164.94px"},class:"input-fields"},{default:h(()=>[o(L,{display:"chip",modelValue:t(O),"onUpdate:modelValue":i[0]||(i[0]=y=>I(O)?O.value=y:null),filter:"",resetFilterOnHide:"",options:l.usersLists,optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:2,class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",Qo,[Xo,o(V,{class:"input-fields"},{default:h(()=>[o(t(kt),{style:"width: 164.94px; border-radius:7px",modelValue:t(E),"onUpdate:modelValue":i[1]||(i[1]=y=>I(E)?E.value=y:null),placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:i[2]||(i[2]=y=>Me(y))},null,8,["modelValue"])]),_:1})])]),e("div",Zo,[e("div",ea,[ta,o(U,{onChange:i[3]||(i[3]=y=>rt(t(m))),modelValue:t(m),"onUpdate:modelValue":i[4]||(i[4]=y=>I(m)?m.value=y:null),options:t(B),optionLabel:"name",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["modelValue","options"])]),e("div",la,[na,e("div",oa,[o(Se,{close:t(He),group:"headless"},{container:h(({message:y,acceptCallback:_t,rejectCallback:ue})=>[e("div",aa,[e("div",ia,[e("div",null,[sa,o(C,{modelValue:t(J),"onUpdate:modelValue":i[5]||(i[5]=he=>I(J)?J.value=he:null),placeholder:"00",showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:23,id:"hours"},{incrementbuttonicon:h(()=>[ra]),decrementbuttonicon:h(()=>[da]),_:1},8,["modelValue"])]),e("div",null,[ca,o(C,{modelValue:t(fe),"onUpdate:modelValue":i[6]||(i[6]=he=>I(fe)?fe.value=he:null),placeholder:"00",showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:59,id:"minutes"},{incrementbuttonicon:h(()=>[ua]),decrementbuttonicon:h(()=>[pa]),_:1},8,["modelValue"])])]),e("div",ma,[o($,{icon:"pi pi-check px-2 py-0 text-sm",label:"",class:"border-none w-full mx-3",loading:t(je),onClick:he=>ot(ue),size:"small"},null,8,["loading","onClick"])])])]),_:1},8,["close"]),N((p(),q("div",{class:et(`clock-btn ${((Ut=t(s))==null?void 0:Ut.is_timer_start)=="true"?"bg-pink-300":"bg-primary-400"}`),onClick:We},[e("i",{class:et(`pi ${((It=t(s))==null?void 0:It.is_timer_start)=="true"?"pi-stop stop":"pi-play start"}`)},null,2)],2)),[[Ue,{value:((Ot=t(s))==null?void 0:Ot.is_timer_start)=="true"?"Stop":"Start"},void 0,{top:!0}]]),e("div",{class:"text-sm absolute",onClick:i[7]||(i[7]=y=>Ke(y))},g(((zt=t(s))==null?void 0:zt.is_timer_start)=="true"?t(Be):_e((Mt=t(s))==null?void 0:Mt.total_duration)),1)]),qa])])]),e("div",fa,[va,o(V,{style:{width:"90%"},class:"input-fields"},{default:h(()=>[o(L,{display:"chip",modelValue:t(ie),"onUpdate:modelValue":i[8]||(i[8]=y=>I(ie)?ie.value=y:null),filter:"",resetFilterOnHide:"",options:l.tagsLists,optionLabel:"name",placeholder:"Select Tags",class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",ga,[ba,o(t(al),{modelValue:t(Ce),"onUpdate:modelValue":i[9]||(i[9]=y=>I(Ce)?Ce.value=y:null),editorStyle:"height: 150px",readonly:!t(w)},{toolbar:h(()=>[e("span",ha,[N(e("button",ka,null,512),[[Ue,"Bold",void 0,{bottom:!0}]]),N(e("button",ya,null,512),[[Ue,"Italic",void 0,{bottom:!0}]]),N(e("button",wa,null,512),[[Ue,"Underline",void 0,{bottom:!0}]]),N(e("button",_a,null,512),[[Ue,"Strikethrough",void 0,{bottom:!0}]]),xa,Da,Ta,Sa])]),_:1},8,["modelValue","readonly"])]),t(w)?(p(),q("div",$a,[o($,{type:"submit",label:"Save"})])):Y("",!0)],32),o(rl,{class:"mt-3"},{default:h(()=>{var y,_t;return[o(Le,{class:"file-upload",header:"Detail"},{default:h(()=>{var ue,he,Ht,Bt,Ft,Nt,Rt,Pt;return[e("p",Ca,"Attachments: "+g((ue=t(s))!=null&&ue.attachments&&((Ht=(he=t(s))==null?void 0:he.attachments)==null?void 0:Ht.length)>0?(Ft=(Bt=t(s))==null?void 0:Bt.attachments)==null?void 0:Ft.length:0),1),e("div",Va,[(Nt=t(s))!=null&&Nt.attachments&&((Rt=t(s))==null?void 0:Rt.attachments.length)===0?(p(),q("div",Aa,La)):Y("",!0),(p(!0),q(Ie,null,Re((Pt=t(s))==null?void 0:Pt.attachments,r=>(p(),q("div",{key:r,target:"_blank",class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-2 relative",style:{"background-color":"#f7fafc"}},[Ae(r==null?void 0:r.file)==="file"?(p(),q("a",{key:0,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:r==null?void 0:r.file},[Ia,e("div",Oa,[e("div",za,g(ye(r==null?void 0:r.file)),1),e("div",Ma,g(Te(r==null?void 0:r.created_at)),1)])],8,Ua)):Y("",!0),Ae(r==null?void 0:r.file)==="image"?(p(),q("a",{key:1,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 relative",href:r==null?void 0:r.file},[e("img",{src:r==null?void 0:r.file,alt:"",style:{width:"90%",height:"80px","border-radius":"10px","border-top-left-radius":"10px","object-fit":"cover"}},null,8,Ba),e("div",Fa,[e("div",Na,g(ye(r==null?void 0:r.file)),1),e("div",Ra,g(Te(r==null?void 0:r.created_at)),1)])],8,Ha)):Y("",!0),Ae(r==null?void 0:r.file)==="video"?(p(),q("a",{key:2,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:r==null?void 0:r.file},[Ja,e("div",Ya,[e("div",Ga,g(ye(r==null?void 0:r.file)),1),e("div",Ka,g(Te(r==null?void 0:r.created_at)),1)])],8,Pa)):Y("",!0),Ae(r==null?void 0:r.file)==="pdf"?(p(),q("a",{key:3,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:r==null?void 0:r.file},[Qa,e("div",Xa,[e("div",Za,g(ye(r==null?void 0:r.file)),1),e("div",ei,g(Te(r==null?void 0:r.created_at)),1)])],8,Wa)):Y("",!0),Ae(r==null?void 0:r.file)==="word"?(p(),q("a",{key:4,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:r==null?void 0:r.file},[li,e("div",ni,[e("div",oi,g(ye(r==null?void 0:r.file)),1),e("div",ai,g(Te(r==null?void 0:r.created_at)),1)])],8,ti)):Y("",!0),Ae(r==null?void 0:r.file)==="excel"?(p(),q("a",{key:5,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:r==null?void 0:r.file},[si,e("div",ri,[e("div",di,g(ye(r==null?void 0:r.file)),1),e("div",ci,g(Te(r==null?void 0:r.created_at)),1)])],8,ii)):Y("",!0),e("div",{onClick:es=>ge(r==null?void 0:r.id),class:"absolute bg-red-500 text-white p-2 flex align-items-center justify-content-center close-btn"},mi,8,ui)]))),128))]),t(w)?(p(),q("div",qi,[e("input",{onChange:Ve,id:"attachInput",class:"float-right file-up-btn",type:"file",placeholder:"+"},null,32),o($,{type:"button",loading:t(ee),onClick:st,label:"Upload"},null,8,["loading"])])):Y("",!0)]}),_:1}),o(Le,{header:`Sub Tasks ${(y=t(Q))!=null&&y.length?t(Q).length:0}`},{default:h(()=>[t(qe)?N((p(),$e($,{key:0,icon:"pi pi-plus",label:"Create",onClick:i[10]||(i[10]=ue=>{var he;return K("openCreateSpace",(he=t(s))==null?void 0:he.id,"sub-task")}),class:"mr-2 sub-create",severity:"secondary"},null,512)),[[Ue,{value:"Create Sub Task"},void 0,{right:!0}]]):Y("",!0),o(Ze,{class:"tree-table",value:t(Q),lazy:!0,tableProps:{style:{minWidth:"650px"}},style:{overflow:"auto"}},{empty:h(()=>[fi]),default:h(()=>[o(Ee,{class:"cursor-pointer tone",field:"name",header:"Name",expander:"",style:{width:"45%"}},{body:h(ue=>[N((p(),q("span",{class:"taskTitle",onClick:he=>K("handleTaskDetailView",ue.node)},[me(g(ue.node.data.name),1)],8,vi)),[[Ue,{value:`${ue.node.data.name}`},void 0,{left:!0}]])]),_:1}),o(Ee,{field:"assignee",header:"Assignee",style:{width:"25%"}}),o(Ee,{field:"dueDateValue",header:"Due Date",style:Z([{width:"11.5%"},{"text-wrap":"nowrap"}])}),o(Ee,{field:"priority",header:"Priority",style:{width:"10%"}}),o(Ee,{field:"action",header:"Action"},{body:h(ue=>[e("div",gi,[o($,{style:{width:"30px",height:"30px","border-radius":"50%"},icon:"pi pi-ellipsis-v",class:"action-dropdown-det-toggle"}),e("div",bi,[o($,{icon:"pi pi-plus",class:"mr-2 ac-btn",severity:"success",onClick:he=>K("openCreateSpace",ue.node.key,"sub-task"),rounded:""},null,8,["onClick"]),o($,{icon:"pi pi-pencil",class:"mr-2 ac-btn",severity:"success",onClick:he=>K("handleTaskEdit",ue.node),rounded:""},null,8,["onClick"]),o($,{icon:"pi pi-cog",class:"mr-2 ac-btn",severity:"info",onClick:he=>K("handleTaskDetailView",ue.node),rounded:""},null,8,["onClick"]),o($,{icon:"pi pi-trash",class:"ac-btn",severity:"warning",rounded:"",onClick:he=>K("confirmDeleteTask",ue.node.key)},null,8,["onClick"])])])]),_:1})]),_:1},8,["value"])]),_:1},8,["header"]),o(Le,{header:`Bounce ${((_t=t(Ne))==null?void 0:_t.is_bounce)==="Yes"?"1":""}`},{default:h(()=>[e("div",hi,[e("div",ki,[yi,o(U,{onChange:i[11]||(i[11]=ue=>dt(t(Ne))),disabled:!t(D),modelValue:t(Ne),"onUpdate:modelValue":i[12]||(i[12]=ue=>I(Ne)?Ne.value=ue:null),options:t(yt),optionLabel:"is_bounce",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["disabled","modelValue","options"])])])]),_:1},8,["header"])]}),_:1})])])])]),e("div",wi,[e("div",null,[e("div",_i,[e("div",xi,[e("div",Di,[t(at)?(p(),$e($,{key:0,onClick:qt,label:"↓  Show More",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})):Y("",!0)]),t(it)?(p(),q("div",Ti,[(p(!0),q(Ie,null,Re(t(ce),y=>(p(),q("ul",{key:y,style:{"margin-left":"-15px","margin-top":"-6px"}},[e("li",{innerHTML:y.title,style:{"font-size":"smaller !important"}},null,8,Si)]))),128)),e("div",$i,[o($,{onClick:S,label:"↑ Hide",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})])])):Y("",!0),(p(!0),q(Ie,null,Re(t(de),y=>(p(),$e(cl,{class:"mb-2",key:y.id},{title:h(()=>[e("div",Ci,[y.commentator_image?(p(),q("img",{key:0,class:"mr-2",src:y.commentator_image,alt:"",style:{width:"28px",height:"28px","border-radius":"50%"}},null,8,Vi)):(p(),$e(dl,{key:1,label:y.commentator_name.charAt(),class:"mr-2 capitalize",size:"small",style:{"background-color":"gray",color:"#ededed","border-radius":"50%"}},null,8,["label"])),e("p",Ai,g(y.commentator_name),1)])]),content:h(()=>[ye(y==null?void 0:y.file)?(p(),q("div",Ei,[e("a",{href:y==null?void 0:y.file,target:"_blank",class:"bg-gray-200 attachment-wrapper cursor-pointer flex align-items-center px-3 py-3 gap-2 comment-file",style:{"background-color":"#f7fafc"}},[Li,e("div",Ui,[e("div",Ii,g(ye(y==null?void 0:y.file)),1)])],8,ji)])):Y("",!0),e("p",Oi,g(y!=null&&y.comment?y==null?void 0:y.comment:""),1),e("i",zi,g(ve(y.time)),1)]),_:2},1024))),128))]),e("form",{onSubmit:Yt(v,["prevent"]),class:"comment-add"},[t(a)?(p(),q("div",Mi,[e("div",null,[Hi,me(),e("span",null,g(t(j)),1)]),e("div",{onClick:il,class:"close-comment"},Fi)])):Y("",!0),e("div",null,[o(ul,{placeholder:"Add comment",modelValue:t(Je),"onUpdate:modelValue":i[13]||(i[13]=y=>I(Je)?Je.value=y:null),rows:"3",cols:"15",class:"border-gray-300 mb-1 comment-text",required:""},null,8,["modelValue"]),e("input",{class:"hidden",type:"file",ref_key:"fileInput",ref:c,onChange:be},null,544),o($,{icon:"pi pi-cloud-upload",onClick:Xe,"aria-label":"Filter"}),o($,{class:"ml-2",type:"submit",icon:"pi pi-plus",label:"Add",loading:t(f)},null,8,["loading"])])],32)])])])])}}};const mt=l=>(Tt("data-v-060a3647"),l=l(),St(),l),Ri={class:"card"},Pi={class:"d-flex create-space-btn-wrapper mb-3 mr-2"},Ji={class:"breadCrumWrap"},Yi=mt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Gi=mt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Ki=mt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Wi=mt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Qi={class:"text cursor-pointer"},Xi=mt(()=>e("p",null,"Are you sure you want to delete?",-1)),Zi={__name:"index",setup(l){const d=n(Pe("read_task")),k=xe(),x=xe(),{getSingleProject:R,deleteTask:_,getTaskAssignModalData:ee,getTagsAssignModalData:te,getTaskDetails:pe}=xe(),{singleProject:W,isTaskDeleted:G,tasks:le,kanbanTasks:P}=Ge(xe()),re=n({}),ke=n(!0),ne=pt(),H=n(!1),de=n(null),Q=vt().query.task_key;console.log(Q);const{projects:B}=vt().params,s=n(!1),ce=n(null),oe=n(null),ae=n(null),F=n([]),K=n([]),b=n(!1),f=n(!1),w=n(!1),D=async(M,m)=>{M?oe.value=M:oe.value="",m=="sub-task"?ae.value="Create Sub Task":ae.value="Create Task",s.value=!0,await ee(),F.value=k.users,await te(),K.value=x.tags},qe=async M=>{de.value=M,document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const m=document.createElement("div");m.style.position="absolute",m.style.top="0",m.style.left="0",m.style.width="100%",m.style.height="100%",m.style.backgroundColor="rgba(0, 0, 0, 0)",m.style.zIndex="1000000",document.documentElement.appendChild(m),await ee(),F.value=k.users,await te(),K.value=x.tags,b.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(m)},O=M=>{ce.value=M,f.value=!0},we=async()=>{H.value=!0,await _(ce.value,B),G.value===!0?(H.value=!1,ne.add({severity:"success",summary:"Successful",detail:"Task Deleted Successfully",group:"br",life:3e3}),f.value=!1):(H.value=!1,ne.add({severity:"error",summary:"Error",detail:"Unable to delete task",group:"br",life:3e3}))},ie=async M=>{document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const m=document.createElement("div");m.style.position="absolute",m.style.top="0",m.style.left="0",m.style.width="100%",m.style.height="100%",m.style.backgroundColor="rgba(0, 0, 0, 0)",m.style.zIndex="100000010",document.documentElement.appendChild(m),w.value&&(w.value=!1),await pe(M.key),await ee(),F.value=k.users,await te(),K.value=x.tags,w.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(m)};console.log("visibleTaskDetailView",w.value),Oe(w,M=>{if(M===!0)return 0;localStorage.removeItem("taskDetailID")}),(()=>{re.value={global:{value:null,matchMode:Sl.CONTAINS}}})();const E=M=>{s.value=M},ze=M=>{b.value=M},Me=()=>{R(B)};return R(B),Oe(()=>vt().query.task_key,M=>{M&&ie({key:M})}),Q&&ie({key:Q}),Tl(()=>{ke.value=!1}),(M,m)=>{var Be,De,We,Fe;const nt=pl,J=ml,fe=Wn,He=qo,je=Vo,ot=Ni,Ke=ut;return p(),q("div",Ri,[o(nt,{position:"bottom-right",group:"br"}),e("div",Pi,[e("div",Ji,[o(J,{to:"/",class:"text pi pi-home"}),Yi,o(J,{to:"/companies",class:"text"},{default:h(()=>[me("Companies")]),_:1}),Gi,o(J,{to:`/companies/${(Be=t(W))==null?void 0:Be.company_id}`,class:"text"},{default:h(()=>{var T;return[me("Company - "+g((T=t(W))==null?void 0:T.company_name),1)]}),_:1},8,["to"]),Ki,o(J,{to:`/companies/${(De=t(W))==null?void 0:De.company_id}/spaces/${(We=t(W))==null?void 0:We.space_id}`,class:"text"},{default:h(()=>{var T;return[me(" Space - "+g((T=t(W))==null?void 0:T.space_name),1)]}),_:1},8,["to"]),Wi,e("p",Qi,"Project - "+g((Fe=t(W))==null?void 0:Fe.name),1)])]),t(d)?(p(),$e(fe,{key:0,kanbanTasks:t(P),tasks:t(le),onOpenCreateSpace:D,onHandleTaskEdit:m[0]||(m[0]=T=>qe(T)),onHandleTaskDetailView:m[1]||(m[1]=T=>ie(T)),onConfirmDeleteTask:m[2]||(m[2]=T=>O(T))},null,8,["kanbanTasks","tasks"])):Y("",!0),o(t(ft),{visible:t(s),"onUpdate:visible":m[4]||(m[4]=T=>I(s)?s.value=T:null),modal:"",header:t(ae),style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw","330px":"98vw"}},{default:h(()=>[o(He,{usersLists:t(F),tagsLists:t(K),taskId:t(oe),projects:t(B),onCloseCreateModal:m[3]||(m[3]=T=>E(T))},null,8,["usersLists","tagsLists","taskId","projects"])]),_:1},8,["visible","header"]),o(t(ft),{visible:t(b),"onUpdate:visible":m[6]||(m[6]=T=>I(b)?b.value=T:null),modal:"",header:"Edit Task",style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:h(()=>[o(je,{singleTask:t(de),usersLists:t(F),tagsLists:t(K),projects:t(B),onCloseEditModal:m[5]||(m[5]=T=>ze(T))},null,8,["singleTask","usersLists","tagsLists","projects"])]),_:1},8,["visible"]),o(t(ft),{visible:t(w),"onUpdate:visible":m[10]||(m[10]=T=>I(w)?w.value=T:null),modal:"",header:" ",style:{width:"90rem",height:"80rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:h(()=>[o(ot,{usersLists:t(F),tagsLists:t(K),projID:t(B),onOpenCreateSpace:D,onHandleTaskEdit:m[7]||(m[7]=T=>qe(T)),onHandleTaskDetailView:m[8]||(m[8]=T=>ie(T)),onConfirmDeleteTask:m[9]||(m[9]=T=>O(T)),onUpdateTaskTable:Me},null,8,["usersLists","tagsLists","projID"])]),_:1},8,["visible"]),o(t(ft),{visible:t(f),"onUpdate:visible":m[12]||(m[12]=T=>I(f)?f.value=T:null),header:" ",style:{width:"25rem"}},{default:h(()=>[Xi,o(Ke,{label:"No",icon:"pi pi-times",text:"",onClick:m[11]||(m[11]=T=>f.value=!1)}),o(Ke,{label:"Yes",icon:"pi pi-check",loading:t(H),text:"",onClick:we},null,8,["loading"])]),_:1},8,["visible"])])}}},tr=Dt(Zi,[["__scopeId","data-v-060a3647"]]);export{tr as default};
