import ul from"./toast.esm.a949a884.js";import{_ as pl}from"./nuxt-link.056bab72.js";import gt from"./multiselect.esm.39120340.js";import vt from"./dropdown.esm.86f50d1a.js";import bt from"./calendar.esm.d2ab0d31.js";import ct from"./button.esm.02c969f5.js";import ml from"./inputicon.esm.aa6b56ce.js";import Wt from"./inputtext.esm.df1ed0e5.js";import ql from"./iconfield.esm.03792d6d.js";import fl from"./toolbar.esm.e29b6e89.js";import Qt from"./avatar.esm.8b6eff80.js";import gl from"./speeddial.esm.c25f054f.js";import Xt from"./treetable.esm.73f0b268.js";import{a3 as Ke,$ as n,a4 as ut,a9 as qt,a5 as Zt,V as Nt,a as kt,o as p,b as m,i as e,l as o,u as t,a6 as O,e as J,w,c as De,k as et,s as Y,K as X,t as h,q as de,F as Ie,f as Ne,ca as el,a2 as wt,aq as Ue,a7 as yt,a8 as _t,an as vl,B as bl,_ as hl,D as kl,h as wl,m as E,n as yl,g as _l,cb as xl,I as Pt,ab as Dl,P as Tl}from"./entry.f0c5cf2a.js";import{u as tt,a as ft}from"./cookie.151b076d.js";import{d as Sl}from"./vuedraggable.umd.250477a3.js";import{u as ke}from"./company.50ada1b3.js";import{a as Pe}from"./usePermission.6cb1f234.js";import Ge from"./column.esm.1ce75797.js";import xt from"./textarea.esm.8229b6ad.js";import $l from"./floatlabel.esm.cbe3397c.js";import Cl from"./inputnumber.esm.f13f38d5.js";import Vl from"./confirmpopup.esm.bad741f0.js";import Al from"./tabpanel.esm.ed24b913.js";import jl from"./tabview.esm.ffec7ef4.js";import El from"./card.esm.ea6569d3.js";import{u as Rt}from"./clock.d208ae6a.js";import{s as Ll}from"./basecomponent.esm.ed9a8dc9.js";import mt from"./dialog.esm.b5cdb412.js";import"./portal.esm.b5621338.js";import"./index.esm.f961079b.js";import"./baseicon.esm.a7d442d2.js";import"./index.esm.0dd784d2.js";import"./index.esm.492ad606.js";import"./index.esm.09b018b7.js";import"./checkbox.esm.576414ca.js";import"./index.esm.1932eccc.js";import"./index.esm.af38a3d4.js";import"./index.esm.535c9e07.js";import"./overlayeventbus.esm.f6271641.js";import"./virtualscroller.esm.f65cf989.js";import"./index.esm.540e4544.js";import"./index.esm.e1281ff7.js";import"./index.esm.0e9bb796.js";import"./badge.esm.6b4b3237.js";import"./index.esm.5809deb4.js";import"./paginator.esm.e80bd062.js";import"./index.esm.a48eb4f3.js";import"./index.esm.e8d5890c.js";import"./index.esm.e2ed82be.js";import"./index.esm.e94ddaa2.js";import"./index.esm.cd2fa4b9.js";import"./index.esm.c1cddcbb.js";import"./workCompany.e44c0af1.js";const Il="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwElEQVR4nO2dTYgcRRTHy/iBBoligicvXgRRUPCgiDBKdl5NcEDD1JuwLBJFmXmv1yWKEslBe8WDOfmJ6N7FgydFvYiC5K4Y1IuKl6DiNzHRg/kYaTeGYVM1sx/VU6+r6g99mqqa/3u/ruqq7p4ppbKysrKysrKysrKysraodp9uBqSXAOlLbeikRh4FPpaTgIqIlwHSa2DojICkj5KCUCVfI38sINGjJCFUZ76ABI+ShLA65vNpAckdJQkBDL8sIKmjDR2GD6tYBMhfBU8oJtwTNNIJAckcJdsTpgUpzY+ODULjAWDDIUQBABsMIRoA2FAIUQHABkKIDgA2DEKUALBBEKIFgA2BEDUAbACE6AGgcAhJAEDBEJIBgEIhJAUABUJIDgAKg5AkABQEIVkAKARC0gBw9vFtOGBpfnQGkAF4Ve4BgSUNQHLxiTcYe3ziDcYen3iDscfn22B3frALkP+0tQXIfwE+fM2k+q39+y8HpB/tfujZ0PF5Vx0GteHDrvbA0GOT/dCiI/m/dhaWdkiIz6vqMLj7/sWdYOi4I5HflGW5zVYPES8Gw986wD0hJT6vqssgID/narPdY7DWMcMFax1D33e7g+2S4vOmugzO4eAqMPy741rwrq0OIH/mAPCItPi8qU6DgPyMYzg508ZHr1/j416Hh69brfISifF5UZ0GOwtLOzTyb462nx8vC8hH7OWGfanxeVHdBrXhQ/ZewL9UU86qTLtX3G4fquio64ItJb4tq26DLSyuBKSf7e3TA1UZQHrH9nm7R3ukx6eaYBCQn3Sc4e+37jtwtTb8z4Wf8REf350BqNXVbTWVtAD4W5vh0Aqnx3dmAB67qEY+4OgFtuHpPY/fm4egsXs8x6YlZHWKWtyqPCkDGFPHcDEtIRr5TeVRGcAFfwjCP0xKSvXLfeVRGcCY5vbxjRrp1MSkGD6oPCoDGBMY/mD6EER/THtmEJVmdYZAn+9Zx/hvvU0RtWYBoCzLbWDoU8sU9JjtHlC1PujsXbpOpaBZANBYPGhfA/AbGulpx3evqBRUN4Bud7DdNf+vVrvVbWn7hZlO7dm3eIOKXXUD0I4zHJA++b8MGHrL0UPeVrGrTgDtvXSt69nw+J1O6A9v0chnLeXOdvp0h4pZdQLQyCuOs/+oUuqiNWU/nNZTolRdAOYmLrqK+bXlAYdtl4fqM2nxeVNdBsG56KLvXM94bVPV/w7Dn2/2yViSAGDCoguQ2O2lmHd72dyz4eQAlI5F17njJ8THr3DVnfRiVvV2xG2DwaWh4/Mu3wbB8EPO9gwfWkf9pQl+KHR83uXboF6d96/YjuplrXUt3Ay97mhjw39VmRwAaRIfn3iDsccn3mDs8Yk3GHt84g3GHp94g7HHJ95g7PGJNxh7fOINxh6feIOxx+f6Te/MDkMndW949wb8PhXKKxgqI93ChE50sLhrvZ6re0LRbJmikV8MD4BF94RazvzzAHrFTXK2sSKJPaH+zYI08qvhk88SISzPch/Jj8InnyVBWA6wnyS9kocjnn3y114TtKEXtOEvwu8xRiF6QhwbxIXSVmZHtc52UhJsAkJOfkAIOfkBIeTkB4SQkx8QQk5+QAg5+SqMzq0TvM7z/wUrLeMdaCtpkwAAAABJRU5ErkJggg==";const Ul={class:"filter-wrapper pb-2 mb-1"},zl={class:"mb-2 relative"},Ol={class:"mb-2 relative"},Ml={class:"flex flex-wrap gap-1"},Bl=e("img",{src:Il},null,-1),Hl=e("i",{class:"pi pi-search"},null,-1),Fl=e("p",{class:"text-center"},"No Data found...",-1),Nl={class:"inline-block"},Pl={class:"task-status"},Rl={key:1},Jl={class:"flex align-items-center"},Yl=["onClick"],Gl={class:"flex justify-content-start gap-1"},Kl=["src"],Wl={class:"inline-block"},Ql={class:"task-status-2"},Xl={key:0,class:"flex align-items-center"},Zl={key:1},en={class:"flex align-items-center"},tn=["onMouseover","onMouseleave"],ln={key:1,class:"main-container"},nn={class:"content"},on={class:"boardContainer",style:{display:"flex","overflow-x":"auto","align-items":"start"}},an={class:"column-container"},sn={class:""},rn=["onClick"],dn={class:""},cn={class:"font-semibold truncate text-sm title"},un={class:"flex align-items-center gap-2 mt-1"},pn={class:"status text-sm"},mn={class:"mt-2 flex align-items-center gap-2"},qn=e("i",{class:"pi pi-user text-lg"},null,-1),fn={class:"flex justify-content-start gap-1"},gn=["src"],vn={class:"mt-2 flex align-items-center gap-2"},bn=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),hn={class:"mt-2 flex align-items-center gap-2"},kn=e("i",{class:"pi pi-flag text-lg"},null,-1),wn={class:"text-sm"},yn=["onClick"],_n=e("p",{class:"mb-1"},"Subtask",-1),xn={class:"text-sm font-semibold"},Dn=["onClick"],Tn={class:"font-semibold truncate text-sm title"},Sn={class:"truncate text-sm desc"},$n={class:"flex align-items-center gap-2 mt-1"},Cn={class:"status text-sm"},Vn={class:"mt-2 flex align-items-center gap-2"},An=e("i",{class:"pi pi-user text-lg"},null,-1),jn={class:"flex justify-content-start gap-1"},En=["src"],Ln={class:"mt-2 flex align-items-center gap-2"},In=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),Un={class:"mt-2 flex align-items-center gap-2"},zn=e("i",{class:"pi pi-flag text-lg"},null,-1),On={class:"text-sm"},Mn={class:"mt-2 flex align-items-center gap-2"},Bn=e("i",{class:"pi pi-angle-right text-lg"},null,-1),Hn={class:"text-sm font-semibold"},Fn={__name:"TaskTable",props:["kanbanTasks","tasks"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask"],setup(l,{emit:r}){var He;const v=el(),x=ke(),{getSingleProject:R,getTaskAssignModalData:_}=ke(),{modStatusList:Z,singleProject:ee,statuslist:oe}=Ke(ke()),W=n(Pe("create_task")),F=n(Pe("update_task")),ve=n(Pe("delete_task")),ce=n(Pe("download_task")),H=ut(),re=r,G=(He=qt().params)==null?void 0:He.projects,M=n(),K=n(),N=n(),a=n(),te=n(),pe=n(),we=n({}),P=n(!0),Q=n([{name:"All",code:""},{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),g=n({}),y=C=>{g.value={...g.value,[C]:!0}},D=C=>{g.value={...g.value,[C]:!1}},T=C=>[{label:"Add Sub Task",icon:"pi pi-plus text-white",command:()=>{re("openCreateSpace",C.key,"sub-task")},disabled:!W},{label:"Edit Task",icon:"pi pi-pencil text-white",class:"bg-red-300",command:()=>{re("handleTaskEdit",C)},disabled:!F},{label:"Task Detail",icon:"pi pi-window-maximize text-white",command:()=>{re("handleTaskDetailView",C)}},{label:"Delete Task",icon:"pi pi-trash text-white",command:()=>{re("confirmDeleteTask",C.key)},disabled:!ve}],B=n(),L=n(),be=n(),le=n(),ne=n(),k=n(),Te=n(null),nt=()=>{if(M.value||K.value||N.value||pe.value||a.value||te.value)M.value="",K.value="",N.value="",pe.value="",a.value="",te.value="",B.value="",L.value="",be.value="",le.value="",ne.value="",k.value="",f.value=!1,ze.value=!1,A();else return},A=async()=>{B.value=M.value?M.value.map(C=>C.id):"",L.value=K.value?K.value.code:"",be.value=N.value?N.value.id:"",le.value=pe.value,ne.value=a.value,k.value=te.value,R(G,B.value,L.value,be.value,le.value,ne.value,k.value)},f=n(!1),ze=n(!1),he=C=>{const q=new Date(C);a.value=q.getFullYear()+"-"+(q.getMonth()+1)+"-"+q.getDate(),f.value=!0,A()},ye=C=>{ze.value=!0;const q=new Date(C);te.value=q.getFullYear()+"-"+(q.getMonth()+1)+"-"+q.getDate(),A()},ot=()=>{f.value=!1,a.value="",ne.value="",A()},at=()=>{ze.value=!1,te.value="",k.value="",A()},Ve=n(!1),Oe=C=>{if(Ve.value=!0,console.log("lod",C),C.length>0){const q=`data:text/csv;charset=utf-8,"Serial No.","Task Name","Project","Assignee","Priority","Status","Time Tracked","Due Date","Overdue"
`+C.map((se,Se)=>{const st=Se+1,it=se.data.name,Ee=ee.value.name,rt=se.data.assignee.split(", ").join("; "),Re=se.data.priority?se.data.priority:"",$e=se.data.status.name;let _e=se.data.total_duration;const qe=Math.floor(_e/3600),c=Math.floor(_e%3600/60),u=_e%60;qe>0?_e=`${qe} hr ${c} min ${u} sec`:c>0?_e=`${c} min ${u} sec`:_e=`${u} sec`;const I=se.data.dueDateValue,fe=se.data.is_overdue?"Yes":"No";return`"${st}","${it}","${Ee}","${rt}","${Re}","${$e}","${_e}","${I}","${fe}"`}).join(`
`),me=encodeURI(q),ae=document.createElement("a");ae.setAttribute("href",me),ae.setAttribute("download","tasks.csv"),document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),Ve.value=!1}else Ve.value=!1,H.add({severity:"error",summary:"Error",detail:"No data found to download",group:"br",life:3e3})};Zt(async()=>{await R(G),Qe()});async function Ae(C,q){var me;try{const ae=tt("token"),{data:se,pending:Se}=await ft(`${v.public.apiUrl}/tasks/update/${q}`,{method:"POST",headers:{Authorization:`Bearer ${ae.value}`},body:{status:C==null?void 0:C.id}},"$7UcE4NQ81w");((me=se.value)==null?void 0:me.app_message)==="success"?(console.log("Status Changed",se),H.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),await R(G)):H.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(ae){console.error("Error fetching data:",ae)}}function We(){const C="0123456789ABCDEF";let q="#";for(let me=0;me<6;me++)q+=C[Math.floor(Math.random()*10)];return q}function je(C){return{backgroundColor:We(),color:"white",borderRadius:"50%",border:"2px solid white"}}const Qe=async()=>{await _(),we.value=x.users},$=n(!0),Me=Nt(()=>({animation:250,group:"tasks",disabled:!$.value,ghostClass:"ghost"})),Be=Nt(()=>({backgroundColor:"#fff",boxShadow:"0px 2px 2px #e2e2e2",cursor:"grab",padding:"12px 10px",margin:"8px 0px"})),Xe=(C,q)=>{const{added:me,moved:ae,removed:se}=C;me&&Ae(q,C.added.element.key)};return(C,q)=>{const me=gt,ae=vt,se=bt,Se=ct,st=ml,it=Wt,Ee=ql,rt=fl,Re=Qt,$e=gl,_e=Xt,qe=kt("tooltip");return p(),m(Ie,null,[e("div",Ul,[o(me,{onChange:q[0]||(q[0]=c=>A()),modelValue:t(M),"onUpdate:modelValue":q[1]||(q[1]=c=>O(M)?M.value=c:null),options:t(we),filter:"",optionLabel:"name",placeholder:"Filter Assignees",maxSelectedLabels:3,class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),o(ae,{onChange:q[2]||(q[2]=c=>A()),modelValue:t(K),"onUpdate:modelValue":q[3]||(q[3]=c=>O(K)?K.value=c:null),options:t(Q),optionLabel:"name",placeholder:"Filter Priority",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),o(ae,{onChange:q[4]||(q[4]=c=>A()),modelValue:t(N),"onUpdate:modelValue":q[5]||(q[5]=c=>O(N)?N.value=c:null),options:t(Z),optionLabel:"name",placeholder:"Filter Status",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),e("div",zl,[o(se,{onDateSelect:q[6]||(q[6]=c=>he(c)),modelValue:t(a),"onUpdate:modelValue":q[7]||(q[7]=c=>O(a)?a.value=c:null),placeholder:"Filter Start Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),t(f)?(p(),m("p",{key:0,onClick:ot,class:"pi pi-times absolute cursor-pointer"})):J("",!0)]),e("div",Ol,[o(se,{onDateSelect:q[8]||(q[8]=c=>ye(c)),modelValue:t(te),"onUpdate:modelValue":q[9]||(q[9]=c=>O(te)?te.value=c:null),placeholder:"Filter End Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),t(ze)?(p(),m("p",{key:0,onClick:at,class:"pi pi-times end-cross absolute cursor-pointer"})):J("",!0)]),o(Se,{onClick:nt,label:"Reset",class:"mr-2 w-full md:w-15rem mb-2",severity:"secondary"})]),o(rt,{class:"border-0 px-0"},{start:w(()=>[e("div",Ml,[t(W)?(p(),De(Se,{key:0,icon:"pi pi-plus",label:"Create Task",onClick:q[10]||(q[10]=c=>re("openCreateSpace","","task")),class:"mr-2",severity:"secondary"})):J("",!0),e("div",null,[o(Se,{icon:"pi pi-list",label:"List",onClick:q[11]||(q[11]=()=>P.value=!0),class:et(["table-btn",{"bg-indigo-400 text-white":t(P)}]),severity:"secondary"},null,8,["class"]),o(Se,{icon:"pi pi-th-large",label:"Board",onClick:q[12]||(q[12]=()=>P.value=!1),class:et(["board-btn",{"bg-indigo-400 text-white":!t(P)}]),severity:"secondary"},null,8,["class"])]),t(ce)?Y((p(),De(Se,{key:1,onClick:q[13]||(q[13]=c=>Oe(l.tasks)),loading:t(Ve),style:X(`${t(Ve)===!0?"backGround: red":""}`),class:"excel-export-btn"},{default:w(()=>[Bl]),_:1},8,["loading","style"])),[[qe,{value:"Download Tasks"},void 0,{right:!0}]]):J("",!0)])]),end:w(()=>[o(Ee,{iconPosition:"right",raised:""},{default:w(()=>[o(st,null,{default:w(()=>[Hl]),_:1}),o(it,{onKeyup:q[14]||(q[14]=c=>A()),modelValue:t(pe),"onUpdate:modelValue":q[15]||(q[15]=c=>O(pe)?pe.value=c:null),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})]),_:1}),t(P)?(p(),De(_e,{key:0,class:"table-st",stripedRows:"",value:l.tasks,lazy:!0,tableProps:{style:{minWidth:"650px",width:"100%"}},filterDisplay:"menu",style:{overflow:"auto"}},{empty:w(()=>[Fl]),default:w(()=>[o(t(Ge),{field:"name",header:"Name",class:"cursor-pointer tone",expander:"",style:{width:"40%"}},{body:w(c=>[e("div",Nl,[Y((p(),m("div",Pl,[o(ae,{class:"mr-1 flex justify-content-center align-items-center",onChange:u=>Ae(c.node.data.status,c.node.key),modelValue:c.node.data.status,"onUpdate:modelValue":u=>c.node.data.status=u,options:t(oe),disabled:!t(F),optionLabel:"name"},{value:w(u=>[u.value?(p(),m("div",{key:0,class:"flex align-items-center",style:X({backgroundColor:u.value.color_code})},[e("div",{style:X({backgroundColor:u.value.color_code}),class:"status-bg"},null,4)],4)):(p(),m("span",Rl,h(u.placeholder),1))]),option:w(u=>[e("div",Jl,[e("div",{style:X([{backgroundColor:u.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,h(u.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])),[[qe,{value:`${c.node.data.status.name}`},void 0,{top:!0}]]),Y((p(),m("span",{class:"taskTitle",onClick:u=>re("handleTaskDetailView",c.node)},[de(h(c.node.data.name),1)],8,Yl)),[[qe,{value:`${c.node.data.name}`},void 0,{left:!0}]])])]),_:1}),o(t(Ge),{field:"assignee",header:"Assignee"},{body:w(c=>[e("div",Gl,[(p(!0),m(Ie,null,Ne(c.node.data.assigneeObj,(u,I)=>(p(),m("span",{key:I,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:I>0?"-20px":"0",zIndex:10-I})},[u.image?Y((p(),m("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:u.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Kl)),[[qe,{value:`${u.name}`},void 0,{top:!0}]]):Y((p(),De(Re,{key:1,label:u.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},je(I)])},null,8,["label","style"])),[[qe,{value:`${u.name}`},void 0,{top:!0}]])],4))),128))])]),_:1}),o(t(Ge),{field:"status",header:"Status",style:{width:"20%"}},{body:w(c=>[e("div",Wl,[e("div",Ql,[o(ae,{class:"mr-1 flex justify-content-center align-items-center",onChange:u=>Ae(c.node.data.status,c.node.key),modelValue:c.node.data.status,"onUpdate:modelValue":u=>c.node.data.status=u,options:t(oe),disabled:!t(F),optionLabel:"name"},{value:w(u=>[u.value?(p(),m("div",Xl,[e("div",{style:X({color:u.value.color_code,fontWeight:500}),class:"pt-1"},h(u.value.name),5)])):(p(),m("span",Zl,h(u.placeholder),1))]),option:w(u=>[e("div",en,[e("div",{style:X([{backgroundColor:u.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,h(u.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])])]),_:1}),o(t(Ge),{field:"dueDateValue",header:"Due Date",style:{textWrap:"nowrap"}},{body:w(c=>[e("div",{style:X(`color: ${c.node.data.dueDateColor}; font-weight: 600;`)},h(c.node.data.dueDateValue),5)]),_:1}),o(t(Ge),{field:"priority",header:"Priority",style:{width:"10%"}}),o(t(Ge),{field:"action",header:"Action",style:{width:"10%",position:"relative"}},{body:w(c=>[e("div",{class:"flex justify-content-start align-items-center",style:{width:"fit-content"},onMouseover:u=>y(c.node.key),onMouseleave:u=>D(c.node.key)},[o($e,{visible:t(g)[c.node.key],"onUpdate:visible":u=>t(g)[c.node.key]=u,model:T(c.node),direction:"left",class:"custom-speed-dial",tooltipOptions:{position:"top"}},null,8,["visible","onUpdate:visible","model"])],40,tn)]),_:1})]),_:1},8,["value"])):J("",!0),t(P)?J("",!0):(p(),m("div",ln,[e("div",nn,[e("div",null,[e("div",on,[(p(!0),m(Ie,null,Ne(l.kanbanTasks,c=>(p(),m("div",{key:c,class:"groupColumnContainer"},[e("div",an,[e("div",{style:X(`background-color: ${c.statusColor}; `),class:"column-header"},h(c.name)+" - "+h(c.content.length),5),o(t(Sl),{modelValue:c.content,"onUpdate:modelValue":u=>c.content=u,options:t(Me),disabled:!t(F),class:"draggable scrollbar",itemKey:"name",group:"cardItem",onChange:u=>Xe(u,c.status)},{item:w(({element:u})=>[e("div",sn,[(p(),m("div",{class:"task-card",style:X(t(Be)),key:u.id,onClick:I=>C.$emit("handleTaskDetailView",u,c.content,c.name)},[e("div",dn,[Y((p(),m("p",cn,[de(h(u.data.name),1)])),[[qe,{value:`${u.data.name}`},void 0,{top:!0}]]),e("div",un,[e("div",{class:"status-icon",style:X(`background-color:${u.data.status.color_code}`)},null,4),e("p",pn,h(u.data.status.name),1)]),e("div",mn,[qn,e("div",fn,[(p(!0),m(Ie,null,Ne(u.data.assigneeObj,(I,fe)=>(p(),m("span",{key:fe,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:fe>0?"-20px":"0",zIndex:10-fe})},[I.image?Y((p(),m("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:I.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,gn)),[[qe,{value:`${I.name}`},void 0,{top:!0}]]):Y((p(),De(Re,{key:1,label:I.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},je(fe)])},null,8,["label","style"])),[[qe,{value:`${I.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",vn,[bn,e("p",{style:X(`color: ${u.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},h(u.data.dueDateValue),5)]),e("div",hn,[kn,e("p",wn,h(u.data.priority),1)]),e("div",{class:"mt-2 flex align-items-center gap-2 cursor-pointer p-1 rounded hover:bg-gray-100",style:{"border-radius":"5px"},onClick:I=>{I.stopPropagation(),t(Te)==u.unique_id?Te.value=null:Te.value=u.unique_id}},[_n,e("i",{class:et(`pi ${t(Te)==u.unique_id?"pi-angle-down":"pi-angle-right"}  text-lg`)},null,2),e("p",xn,h(u.children.length),1)],8,yn)]),de(" "+h(u.t_name),1)],12,rn)),e("div",{class:et(t(Te)===u.unique_id?"":"hidden")},[(p(!0),m(Ie,null,Ne(u.children,I=>(p(),m("div",{key:I.unique_id,class:"sub-card",onClick:fe=>C.$emit("handleTaskDetailView",I,c.content,c.name)},[e("p",Tn,h(I.data.name),1),e("p",Sn,h(I.data.description),1),e("div",$n,[e("div",{class:"status-icon",style:X(`background-color:${I.data.status.color_code}`)},null,4),e("p",Cn,h(I.data.status.name),1)]),e("div",Vn,[An,e("div",jn,[(p(!0),m(Ie,null,Ne(I.data.assigneeObj,(fe,Je)=>(p(),m("span",{key:Je,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:Je>0?"-20px":"0",zIndex:10-Je})},[fe.image?Y((p(),m("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:fe.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,En)),[[qe,{value:`${fe.name}`},void 0,{top:!0}]]):Y((p(),De(Re,{key:1,label:fe.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},je(Je)])},null,8,["label","style"])),[[qe,{value:`${fe.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",Ln,[In,e("p",{style:X(`color: ${I.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},h(I.data.dueDateValue),5)]),e("div",Un,[zn,e("p",On,h(I.data.priority),1)]),e("div",Mn,[Bn,e("p",Hn,h(I.children.length),1)])],8,Dn))),128))],2)])]),_:2},1032,["modelValue","onUpdate:modelValue","options","disabled","onChange"])])]))),128))])])])]))],64)}}};const tl=l=>(yt("data-v-a61a14a1"),l=l(),_t(),l),Nn={class:"field flex flex-column"},Pn={for:"name"},Rn=tl(()=>e("i",{class:"text-red-400 text-italic"},"*",-1)),Jn={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},Yn={class:"field"},Gn={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},Kn={class:"field"},Wn={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},Qn={class:"field"},Xn={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},Zn={class:"field"},eo={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},to=tl(()=>e("br",null,null,-1)),lo={key:0,class:"text-center",style:{color:"red"}},no={class:"create-btn-wrapper mb-0"},oo={__name:"CreateTask",props:["createTaskTitle","taskId","projects","usersLists","tagsLists"],emits:["closeCreateModal"],setup(l,{emit:r}){const{createTask:v}=ke(),{isTaskCreated:x,detectDuplicateTask:R}=Ke(ke()),{createTaskTitle:_,taskId:Z,projects:ee,usersLists:oe,tagsLists:W}=l,F=ut(),ve=n(!1),ce=n(Z),H=n(!0),re=n(!1),ue=n(!1),G=n(null),M=n(null),K=n(null),N=n(null),a=n(null),te=n(!1),pe=n([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),we=r,P=g=>{if(console.log("test druve"),te.value)M.value=g;else{const y=new Date(g);y.setHours(23,59,0,0),M.value=y}};Ue(M,(g,y)=>{g&&y&&g!==y&&(te.value=!0)});const Q=async()=>{var g,y,D;if(ve.value=!0,G.value===null)ue.value=!0,ve.value=!1;else{ue.value=!1;let T;if(M.value){const L=new Date(M.value);L.setDate(L.getDate()+1),T=L.toISOString()}const B={name:G.value,dueDate:T?new Date(new Date(T).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:(g=K.value)==null?void 0:g.map(L=>L.id),tags:(y=N.value)==null?void 0:y.map(L=>L.id),priority:(D=a.value)==null?void 0:D.name,project_id:ee,parent_task_id:Z};if(T){const L=new Date(T);L.setDate(L.getDate()-1),M.value=L?new Date(L).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await v(B),R.value===!0?(ve.value=!1,F.add({severity:"error",summary:"Error",detail:"Task already exists!",group:"br",life:3e3})):x.value===!0?(ve.value=!1,H.value=!1,re.value=!0,G.value=null,we("closeCreateModal",!1),F.add({severity:"success",summary:"Successful",detail:"Task created Successfully",group:"br",life:3e3})):(ve.value=!1,F.add({severity:"error",summary:"Error",detail:"Unable to create task!",group:"br",life:3e3}))}};return(g,y)=>{const D=Wt,T=xt,B=gt,L=bt,be=vt,le=ct,ne=kt("tooltip");return p(),m("div",null,[o(D,{type:"hidden",modelValue:t(ce),"onUpdate:modelValue":y[0]||(y[0]=k=>O(ce)?ce.value=k:null)},null,8,["modelValue"]),e("div",Nn,[e("label",Pn,[de("Set Task Name"),Rn,de(),Y(e("span",Jn,null,512),[[ne,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(T,{id:"description",class:"border-gray-300",modelValue:t(G),"onUpdate:modelValue":y[1]||(y[1]=k=>O(G)?G.value=k:null),rows:"3",cols:"20",invalid:g.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",Yn,[e("label",null,[de("Assignees "),Y(e("span",Gn,null,512),[[ne,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(B,{display:"chip",modelValue:t(K),"onUpdate:modelValue":y[2]||(y[2]=k=>O(K)?K.value=k:null),options:l.usersLists,filter:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",Kn,[e("label",null,[de("Tags "),Y(e("span",Wn,null,512),[[ne,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(B,{display:"chip",modelValue:t(N),"onUpdate:modelValue":y[3]||(y[3]=k=>O(N)?N.value=k:null),options:l.tagsLists,filter:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",Qn,[e("label",null,[de("Due Date "),Y(e("span",Xn,null,512),[[ne,{value:"Set your task due date"},void 0,{right:!0}]])]),o(L,{modelValue:t(M),"onUpdate:modelValue":y[4]||(y[4]=k=>O(M)?M.value=k:null),class:"w-full clndr",placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:y[5]||(y[5]=k=>P(k))},null,8,["modelValue"])]),e("div",Zn,[e("label",null,[de("Priority "),Y(e("span",eo,null,512),[[ne,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(be,{modelValue:t(a),"onUpdate:modelValue":y[6]||(y[6]=k=>O(a)?a.value=k:null),options:t(pe),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),to,t(ue)?(p(),m("p",lo,"Please add task name")):J("",!0),e("div",no,[o(le,{label:"Save",icon:"pi pi-check",text:"",onClick:Q,loading:t(ve)},null,8,["loading"])])])}}},ao=wt(oo,[["__scopeId","data-v-a61a14a1"]]);const lt=l=>(yt("data-v-bd25ee08"),l=l(),_t(),l),so={class:"position-relative d-flex flex-column justify-content-between w-100 modal-container"},io={class:"field flex flex-column"},ro=lt(()=>e("label",{for:"name"},[de("Edit Task Name"),e("i",{class:"text-red-400 text-italic"},"*")],-1)),co={class:"field"},uo=lt(()=>e("label",null,"Assignees",-1)),po={class:"field"},mo=lt(()=>e("label",null,"Tags",-1)),qo={class:"field"},fo=lt(()=>e("label",null,"Due Date",-1)),go={class:"field"},vo=lt(()=>e("label",null,"Priority",-1)),bo=lt(()=>e("br",null,null,-1)),ho={key:0,class:"text-center",style:{color:"red"}},ko={class:"create-btn-wrapper mb-0"},wo={__name:"EditTask",props:["singleTask","usersLists","tagsLists","projects"],emits:["closeEditModal"],setup(l,{emit:r}){var we,P,Q,g,y;const{editTask:v}=ke(),{isTaskEdited:x,detectDuplicateTask:R}=Ke(ke()),{singleTask:_,usersLists:Z,tagsLists:ee,projects:oe}=l,W=ut(),F=n(!1),ve=n(null),ce=n((we=_==null?void 0:_.data)==null?void 0:we.name),H=n((P=_==null?void 0:_.data)!=null&&P.dueDate?new Date(_.data.dueDate).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),re=n(!1),ue=n(null);ue.value=(Q=_==null?void 0:_.data)!=null&&Q.assigneeObj?(g=_==null?void 0:_.data)==null?void 0:g.assigneeObj.map(D=>({id:D.id,name:D.name})):"";const G=n((y=_==null?void 0:_.data)==null?void 0:y.tagsObj),M=n(null);M.value=_.data.priority?{name:_.data.priority,code:_.data.priority}:"";const K=n([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),N=n(!1),a=r,te=D=>{if(console.log("test druve"),re.value)H.value=D;else{const T=new Date(D);T.setHours(23,59,0,0),H.value=T}};Ue(H,(D,T)=>{D&&T&&D!==T&&(re.value=!0)});const pe=async()=>{if(F.value=!0,ce.value===null)N.value=!0,F.value=!1;else{N.value=!1;let D;if(H.value){const B=new Date(H.value);B.setDate(B.getDate()+1),D=B.toISOString()}const T={id:_.key,name:ce.value,description:ve.value,priority:M.value.name,dueDate:D?new Date(new Date(D).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:ue.value.map(B=>B.id),tags:G.value.map(B=>B.id),project_id:oe};if(D){const B=new Date(D);B.setDate(B.getDate()-1),H.value=B?new Date(B).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await v(T),R.value===!0?(F.value=!1,W.add({severity:"error",summary:"Error",detail:"Cannnot edit, edited task name already exists!",group:"br",life:3e3})):x.value===!0?(F.value=!1,a("closeEditModal",!1),a("visibleEdit","visibleEdit"),W.add({severity:"success",summary:"Successful",detail:"Task updated Successfully",group:"br",life:3e3})):(F.value=!1,W.add({severity:"error",summary:"Error",detail:"Unable to update task!",group:"br",life:3e3}))}};return(D,T)=>{const B=xt,L=gt,be=bt,le=vt,ne=ct;return p(),m("div",so,[e("div",null,[e("div",io,[ro,o(B,{id:"description",class:"border-gray-300",modelValue:t(ce),"onUpdate:modelValue":T[0]||(T[0]=k=>O(ce)?ce.value=k:null),rows:"3",cols:"15",invalid:D.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",co,[uo,o(L,{display:"chip",modelValue:t(ue),"onUpdate:modelValue":T[1]||(T[1]=k=>O(ue)?ue.value=k:null),options:l.usersLists,filter:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",po,[mo,o(L,{display:"chip",modelValue:t(G),"onUpdate:modelValue":T[2]||(T[2]=k=>O(G)?G.value=k:null),options:l.tagsLists,filter:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",qo,[fo,o(be,{modelValue:t(H),"onUpdate:modelValue":T[3]||(T[3]=k=>O(H)?H.value=k:null),class:"w-full",placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:T[4]||(T[4]=k=>te(k))},null,8,["modelValue"])]),e("div",go,[vo,o(le,{modelValue:t(M),"onUpdate:modelValue":T[5]||(T[5]=k=>O(M)?M.value=k:null),options:t(K),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),bo,t(N)?(p(),m("p",ho,"Please add/fill/check up all the fields ")):J("",!0),e("div",ko,[o(ne,{label:"Update",icon:"pi pi-check",text:"",onClick:pe,loading:t(F)},null,8,["loading"])])])])}}},yo=wt(wo,[["__scopeId","data-v-bd25ee08"]]),Jt=vl("fileUpload",()=>{const l=n(!1),r=n(!1),v=n(!1);async function x(_,Z){r.value=!0;const ee=new FormData;ee.append("task_id",_),ee.append("attachments",Z);const oe=tt("token");try{const W=await fetch("https://pbe.singularitybd.net/api/v1/tasks/attachment-upload",{method:"POST",headers:{Authorization:`Bearer ${oe.value}`},body:ee});if(!W.ok)throw new Error("Network response was not ok");const F=await W.json();console.log("upload data =>",F),(F==null?void 0:F.user_message)==="success"?l.value=!0:l.value=!1,r.value=!1}catch(W){console.error("Error uploading file:",W),l.value=!1,r.value=!1}}async function R(_){const Z=tt("token");try{const ee=await fetch(`https://pbe.singularitybd.net/api/v1/tasks/attachment-delete/${_}`,{method:"DELETE",headers:{Authorization:`Bearer ${Z.value}`}});if(!ee.ok)throw new Error("Network response was not ok");const oe=await ee.json();console.log("delete data =>",oe),(oe==null?void 0:oe.user_message)==="success"?v.value=!0:v.value=!1}catch(ee){console.error("Error uploading file:",ee),v.value=!1}}return{fileUpload:x,fileDelete:R,isFileUpload:l,isLoading:r,isFileDeleted:v}});var _o=`
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
`,xo={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},Yt=bl.extend({name:"editor",css:_o,classes:xo}),Do={name:"BaseEditor",extends:Ll,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Yt,provide:function(){return{$parentInstance:this}},beforeMount:function(){var r;Yt.loadStyle({nonce:(r=this.$primevue)===null||r===void 0||(r=r.config)===null||r===void 0||(r=r.csp)===null||r===void 0?void 0:r.nonce})}};function dt(l){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},dt(l)}function Gt(l,r){var v=Object.keys(l);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(l);r&&(x=x.filter(function(R){return Object.getOwnPropertyDescriptor(l,R).enumerable})),v.push.apply(v,x)}return v}function To(l){for(var r=1;r<arguments.length;r++){var v=arguments[r]!=null?arguments[r]:{};r%2?Gt(Object(v),!0).forEach(function(x){So(l,x,v[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(v)):Gt(Object(v)).forEach(function(x){Object.defineProperty(l,x,Object.getOwnPropertyDescriptor(v,x))})}return l}function So(l,r,v){return r=$o(r),r in l?Object.defineProperty(l,r,{value:v,enumerable:!0,configurable:!0,writable:!0}):l[r]=v,l}function $o(l){var r=Co(l,"string");return dt(r)=="symbol"?r:String(r)}function Co(l,r){if(dt(l)!="object"||!l)return l;var v=l[Symbol.toPrimitive];if(v!==void 0){var x=v.call(l,r||"default");if(dt(x)!="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}var Kt=function(){try{return window.Quill}catch{return null}}(),ll={name:"Editor",extends:Do,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(r,v){r!==v&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(r))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var r=this,v={modules:To({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};Kt?(this.quill=new Kt(this.$refs.editorElement,v),this.initQuill(),this.handleLoad()):hl(()=>import("./quill.61a7ecb2.js").then(x=>x.q),["./quill.61a7ecb2.js","./vuedraggable.umd.250477a3.js","./entry.f0c5cf2a.js","./entry.4235f03a.css"],import.meta.url).then(function(x){x&&kl.isExist(r.$refs.editorElement)&&(x.default?r.quill=new x.default(r.$refs.editorElement,v):r.quill=new x(r.$refs.editorElement,v),r.initQuill())}).then(function(){r.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(r){this.quill&&(r?this.quill.setContents(this.quill.clipboard.convert(r)):this.quill.setText(""))},initQuill:function(){var r=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(v,x,R){if(R==="user"){var _=r.$refs.editorElement.children[0].innerHTML,Z=r.quill.getText().trim();_==="<p><br></p>"&&(_=""),r.$emit("update:modelValue",_),r.$emit("text-change",{htmlValue:_,textValue:Z,delta:v,source:R,instance:r.quill})}}),this.quill.on("selection-change",function(v,x,R){var _=r.$refs.editorElement.children[0].innerHTML,Z=r.quill.getText().trim();r.$emit("selection-change",{htmlValue:_,textValue:Z,range:v,oldRange:x,source:R,instance:r.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Vo(l,r,v,x,R,_){return p(),m("div",E({class:l.cx("root")},l.ptmi("root")),[e("div",E({ref:"toolbarElement",class:l.cx("toolbar")},l.ptm("toolbar")),[wl(l.$slots,"toolbar",{},function(){return[e("span",E({class:"ql-formats"},l.ptm("formats")),[e("select",E({class:"ql-header",defaultValue:"0"},l.ptm("header")),[e("option",E({value:"1"},l.ptm("option")),"Heading",16),e("option",E({value:"2"},l.ptm("option")),"Subheading",16),e("option",E({value:"0"},l.ptm("option")),"Normal",16)],16),e("select",E({class:"ql-font"},l.ptm("font")),[e("option",yl(_l(l.ptm("option"))),null,16),e("option",E({value:"serif"},l.ptm("option")),null,16),e("option",E({value:"monospace"},l.ptm("option")),null,16)],16)],16),e("span",E({class:"ql-formats"},l.ptm("formats")),[e("button",E({class:"ql-bold",type:"button"},l.ptm("bold")),null,16),e("button",E({class:"ql-italic",type:"button"},l.ptm("italic")),null,16),e("button",E({class:"ql-underline",type:"button"},l.ptm("underline")),null,16)],16),(p(),m("span",E({key:R.reRenderColorKey,class:"ql-formats"},l.ptm("formats")),[e("select",E({class:"ql-color"},l.ptm("color")),null,16),e("select",E({class:"ql-background"},l.ptm("background")),null,16)],16)),e("span",E({class:"ql-formats"},l.ptm("formats")),[e("button",E({class:"ql-list",value:"ordered",type:"button"},l.ptm("list")),null,16),e("button",E({class:"ql-list",value:"bullet",type:"button"},l.ptm("list")),null,16),e("select",E({class:"ql-align"},l.ptm("select")),[e("option",E({defaultValue:""},l.ptm("option")),null,16),e("option",E({value:"center"},l.ptm("option")),null,16),e("option",E({value:"right"},l.ptm("option")),null,16),e("option",E({value:"justify"},l.ptm("option")),null,16)],16)],16),e("span",E({class:"ql-formats"},l.ptm("formats")),[e("button",E({class:"ql-link",type:"button"},l.ptm("link")),null,16),e("button",E({class:"ql-image",type:"button"},l.ptm("image")),null,16),e("button",E({class:"ql-code-block",type:"button"},l.ptm("codeBlock")),null,16)],16),e("span",E({class:"ql-formats"},l.ptm("formats")),[e("button",E({class:"ql-clean",type:"button"},l.ptm("clean")),null,16)],16)]})],16),e("div",E({ref:"editorElement",class:l.cx("content"),style:l.editorStyle},l.ptm("content")),null,16)],16)}ll.render=Vo;const Ao={class:"grid"},jo={class:"col-12 flex justify-content-between"},Eo={class:"m-0 detail-task-name cursor-pointer"},Lo={class:"flex gap-1"},Io=e("h5",{class:"m-0 ml-2"},"Activity",-1),Uo={class:"col-12 lg:col-7"},zo={class:"task-wrapper card"},Oo={class:"task-det no-scrollbar"},Mo={class:"flex justify-content-between gap-2 flex-wrap align-items-center"},Bo={class:"w-full lg:w-fit"},Ho={class:"flex justify-content-between gap-2 flex-wrap align-items-centertask-detail-wrapper"},Fo=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-user"}),e("p",null,"Assignee:")],-1),No={class:"flex mt-2 justify-content-between gap-2 align-items-center task-detail-wrapper"},Po=e("div",{class:"flex justify-content-start gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-calendar"}),e("p",{class:"text-nowrap"},"Due Date:")],-1),Ro={class:"w-full lg:w-fit"},Jo={class:"flex justify-content-between gap-2 align-items-center task-detail-wrapper"},Yo=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",null,"Status:")],-1),Go={class:"flex mt-2 justify-content-between gap-2 align-items-center task-detail-wrapper"},Ko=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-stopwatch"}),e("p",{class:"text-nowrap"},"Track Time:")],-1),Wo={class:"clock-wrapper relative"},Qo={class:"border-round px-2 pt-3 pb-2"},Xo={class:"flex justify-content-center align-items-center gap-3 manual-wrapper -mt-1"},Zo=e("label",{for:"hours",class:"block mb-2 text-xs"},"Hours",-1),ea=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),ta=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),la=e("label",{for:"minutes",class:"block mb-2 text-xs"},"Minutes",-1),na=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),oa=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),aa={class:"flex justify-content-center align-items-center",style:{"margin-top":"0.49rem !important"}},sa=e("div",null,null,-1),ia={class:"flex justify-content-between gap-2 align-items-centertask-detail-wrapper mt-3",style:{width:"100%"}},ra=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property",style:{width:"10%"}},[e("span",{class:"pi pi-tags"}),e("p",null,"Tags:")],-1),da={class:"field mt-3 flex flex-column"},ca=e("div",{class:"flex justify-content-start gap-2 align-items-center mb-1 task-detail-property"},[e("span",{class:"pi pi-sliders-h"}),e("p",null,"Description:")],-1),ua={class:"ql-formats flex justify-content-end mr-0"},pa={class:"ql-bold"},ma={class:"ql-italic"},qa={class:"ql-underline"},fa=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"ordered"},null,-1),ga=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"bullet"},null,-1),va=e("button",{class:"ql-link",type:"button","data-pc-section":"link"},null,-1),ba={key:0,class:"flex justify-content-end"},ha={class:"m-0"},ka={class:"my-3 attach-sec flex align-items-center justify-content-start gap-2",style:{"overflow-x":"scroll"}},wa={key:0,class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-5 attch-w",style:{"background-color":"#f7fafc"}},ya=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),_a=e("div",{class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},[e("div",{class:"text-xs"},"asdasd....asdme.extng"),e("div",{class:"text-xs"},"9 MAy, 2024")],-1),xa=[ya,_a],Da=["href"],Ta=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),Sa={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},$a={class:"text-xs"},Ca={class:"text-xs"},Va=["href"],Aa=["src"],ja={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Ea={class:"text-xs"},La={class:"text-xs"},Ia=["href"],Ua=e("div",{class:"pi pi-video text-6xl attach-icon"},null,-1),za={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Oa={class:"text-xs"},Ma={class:"text-xs"},Ba=["href"],Ha=e("div",{class:"pi pi-file-pdf text-6xl text-danger attach-icon"},null,-1),Fa={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Na={class:"text-xs"},Pa={class:"text-xs"},Ra=["href"],Ja=e("div",{class:"pi pi-file-word text-6xl text-blue attach-icon"},null,-1),Ya={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Ga={class:"text-xs"},Ka={class:"text-xs"},Wa=["href"],Qa=e("div",{class:"pi pi-file-excel text-6xl attach-icon",style:{color:"#04aa6d"}},null,-1),Xa={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Za={class:"text-xs"},es={class:"text-xs"},ts=["onClick"],ls=e("i",{class:"pi pi-times text-xs text-white"},null,-1),ns=[ls],os={key:0,class:"flex gap-2 w-full justify-content-center"},as=e("p",{class:"text-center"},"No Data found...",-1),ss=["onClick"],is={class:"action-dropdown-det"},rs={class:"action-dropdown-content-det"},ds={class:"card"},cs={class:"flex justify-content-start align-items-center task-detail-wrapper"},us=e("div",{class:"flex justify-content-start gap-2 align-items-center bounce-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",{class:"text-nowrap"},"Bounce Status:")],-1),ps={class:"col-12 lg:col-5"},ms={class:"comment-wrapper card no-scrollbar"},qs={class:"comments no-scrollbar"},fs={class:"my-2 text-surface-800"},gs={key:0},vs=["innerHTML"],bs={class:"my-2 text-surface-800"},hs={class:"flex justify-content-start align-items-center"},ks=["src"],ws={class:"text-lg"},ys={key:0,class:"flex justify-content-start my-2"},_s=["href"],xs=e("div",{class:"pi pi-file"},null,-1),Ds={class:"attach-detail flex flex-column justify-content-center align-items-center"},Ts={class:"text-xs"},Ss={class:"m-0 ml-1",style:{"font-size":"0.9rem"}},$s={style:{"line-height":"0"},class:"pb-1 float-right mt-3 mb-2"},Cs={key:0,class:"text-sm font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-itens-center mb-1 relative"},Vs=e("span",{class:"pi pi-file-import mr-2"},null,-1),As=e("i",{class:"pi pi-times"},null,-1),js=[As],Es={__name:"TaskDetail",props:["usersLists","tagsLists","projID"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask","updateTaskTable"],setup(l,{emit:r}){var Tt,St,$t,Ct,Vt,At;const v=el(),{fileUpload:x,fileDelete:R}=Jt(),{isFileUpload:_,isLoading:Z,isFileDeleted:ee}=Ke(Jt()),{getTaskTimerData:oe,setManualTime:W,storeTaskTimer:F}=Rt();Ke(Rt());const{editTask:ve,addTaskComment:ce,getTaskDetails:H,getSingleProject:re}=ke(),{isTaskEdited:ue,isTaskCommentCreated:G,singleTaskComments:M,subTasks:K,taskStatus:N,taskDetails:a,taskActivity:te}=Ke(ke());localStorage.setItem("taskDetailID",JSON.stringify(a.value.id));const{usersLists:pe,tagsLists:we,projID:P}=l,Q=r,g=ut(),y=n(!1),D=n(Pe("update_task")),T=n(Pe("edit_bounce")),B=n(Pe("create_task")),L=n(null);L.value=(St=(Tt=a.value)==null?void 0:Tt.assignee)==null?void 0:St.map(d=>({id:d.id,name:d.name}));const be=n(!1);Ue(L,d=>{be.value=!0});const le=n((Ct=($t=a.value)==null?void 0:$t.tags)==null?void 0:Ct.map(d=>({id:d.id,name:d.name}))),ne=n(!1);Ue(le,d=>{ne.value=!0});const k=n((Vt=a.value)!=null&&Vt.due_date?new Date(a.value.due_date).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),Te=n(!1),nt=d=>{if(console.log("test druve"),Te.value)k.value=d;else{const s=new Date(d);s.setHours(23,59,0,0),k.value=s}};Ue(k,(d,s)=>{d&&s&&d!==s&&(Te.value=!0)});const A=n(k.value);Ue(k,(d,s)=>{d&&(A.value=new Date(d).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase())});const f=n(),ze=xl(),he=n(0),ye=n(0),ot=n(!1),at=async d=>{var U,j;let s;if(he.value>0||ye.value>0){s=he.value*3600+ye.value*60,console.log("totalSeconds",s);const z=await W((U=a.value)==null?void 0:U.id,s);(z==null?void 0:z.code)===200?(await H((j=a.value)==null?void 0:j.id),g.add({severity:"success",summary:"Duration Added",detail:`Duration: ${he.value} hours and ${ye.value} minutes`,group:"br",life:3e3}),he.value=0,ye.value=0,d()):g.add({severity:"error",summary:"Error",detail:"Unable to add duration",group:"br",life:3e3}),console.log("responseData",z)}else g.add({severity:"error",summary:"Error",detail:"Please add duration",group:"br",life:3e3});s=null},Ve=d=>{var s;console.log(d.detail),d.detail===3&&((s=a.value)==null?void 0:s.is_timer_start)==="false"&&ze.require({target:d.currentTarget,group:"headless",message:"Set task duration:",accept:()=>{g.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{}})},Oe=n("00:00:00");let Ae=null;const We=async()=>{var d,s,U,j,z,V,S,xe,Le,Ce;if(a.value.id,console.log("taskDetails",a.value),((d=a.value)==null?void 0:d.is_timer_start)==="false"){await oe("start",(s=a.value)==null?void 0:s.id),await H((U=a.value)==null?void 0:U.id),je(),localStorage.setItem("storeTaskID",JSON.stringify((j=a.value)==null?void 0:j.id)),localStorage.setItem("storeTaskProjectID",JSON.stringify(Number(P))),localStorage.setItem("storeTaskSpaceID",JSON.stringify((z=a.value)==null?void 0:z.project.space_id)),localStorage.setItem("storeTaskCompanyID",JSON.stringify((V=a.value)==null?void 0:V.project.company_id)),localStorage.setItem("storeTaskTimerStartTime",JSON.stringify(a.value.taskTimer.start_time));let Ze={task_id:a.value.id,project_id:P,space_id:a.value.project.space_id,company_id:a.value.project.company_id,timerStartTime:a.value.taskTimer.start_time};await F(Ze),g.add({severity:"success",summary:"Task Timer",detail:"Timer Started",group:"br",life:3e3}),await re(P)}else await oe("stop",(S=a.value)==null?void 0:S.id,(Le=(xe=a.value)==null?void 0:xe.taskTimer)==null?void 0:Le.id),await H((Ce=a.value)==null?void 0:Ce.id),Qe(),localStorage.removeItem("storeTaskID"),localStorage.removeItem("storeTaskProjectID"),localStorage.removeItem("storeTaskSpaceID"),localStorage.removeItem("storeTaskCompanyID"),localStorage.removeItem("storeTaskTimerStartTime"),await F({task_id:null,project_id:null,space_id:null,company_id:null}),g.add({severity:"success",summary:"Task Timer",detail:"Timer Stopped",group:"br",life:3e3}),await re(P)},je=()=>{a.value.id,console.log("taskDetails.value.taskTimer.start_time",a.value.taskTimer.start_time);const d=new Date(a.value.taskTimer.start_time).getTime();Ae=setInterval(()=>{const s=Math.floor((Date.now()-d)/1e3);Oe.value=I(s)},1e3)},Qe=()=>{clearInterval(Ae),Oe.value=I(a.value.total_duration)},$=n([{is_bounce:"No"},{is_bounce:"Yes"}]),Me=n(),Be=n(((At=a.value)==null?void 0:At.description)||" "),Xe=n(!1);Ue(Be,d=>{d.length===0&&(Be.value=" "),Xe.value=!0});const He=n(null),C=n(),q=n(!0),me=n(!1),ae=()=>{me.value=!0,q.value=!1},se=()=>{me.value=!1,q.value=!0},Se=async()=>{var d;y.value=!0,await ce((d=a.value)==null?void 0:d.id,He.value,Ye.value),G.value===!0?(g.add({severity:"success",summary:"Successful",detail:"Comment added Successfully",group:"br",life:3e3}),He.value=null,y.value=!1,Ye.value=null):(g.add({severity:"error",summary:"Error",detail:"Unable to add comment",group:"br",life:3e3}),y.value=!1)},st=d=>{const s=new Date(d),j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()],z=s.getDate(),V=s.getFullYear().toString().substr(-2),S=s.getHours(),xe=s.getMinutes(),Le=S>=12?"PM":"AM",Ce=S%12||12,Ze=xe<10?"0"+xe:xe;return`${z} ${j}'${V}, ${Ce}:${Ze}${Le}`},it=async()=>{var j,z;let d;if(k.value){const V=new Date(k.value);V.setDate(V.getDate()+1),d=V.toISOString()}console.log("checkDate",A.value);const s=new Date((j=a.value)==null?void 0:j.due_date).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});console.log("formattedDueDate",s);const U={id:(z=a.value)==null?void 0:z.id,...Xe.value===!0?{description:Be.value}:{},project_id:P,...A.value!==s?{dueDate:d?new Date(new Date(d).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null}:{},...be.value===!0?{assignees:L.value.map(V=>V.id)}:{},...ne.value===!0?{tags:le.value.map(V=>V.id)}:{}};if(d){const V=new Date(d);V.setDate(V.getDate()-1),k.value=V?new Date(V).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await ve(U),ue.value===!0?(g.add({severity:"success",summary:"Successfull",detail:"Task detail updated",group:"br",life:3e3}),C.value=null,Xe.value===!0&&(Xe.value=!1,console.log("isDescriptionEdited Flagged")),be.value===!0&&(be.value=!1,console.log("isAsigneeEdited Flagged")),ne.value===!0&&(ne.value=!1,console.log("isTagsEdited Flagged"))):g.add({severity:"error",summary:"Error",detail:"Unable to upadte task detail",group:"br",life:3e3})},Ee=n(null),rt=d=>{Ee.value=d.target.files[0]},Re=async()=>{var d,s;Ee.value&&console.log("file =>",Ee.value),await x((d=a.value)==null?void 0:d.id,Ee.value),_.value===!0?(g.add({severity:"success",summary:"Successfull",detail:"File Upload successfully!",group:"br",life:3e3}),H((s=a.value)==null?void 0:s.id),document.getElementById("attachInput").value=null,Ee.value=null):g.add({severity:"error",summary:"Error",detail:"Unable to upload file!",group:"br",life:3e3})},$e=d=>{const s=["jpg","JPG","jpeg","png","gif","bmp","svg","webp","ico","tiff","tif","heic","heif"],U=["mp4","avi","flv","wmv","mov","3gp","mkv"],j=["pdf","PDF","ppt","pptx"],z=["doc","docx","rtf"],V=["xls","xlsx","csv"];return s.some(S=>d.endsWith("."+S))?"image":U.some(S=>d.endsWith("."+S))?"video":j.some(S=>d.endsWith("."+S))?"pdf":z.some(S=>d.endsWith("."+S))?"word":V.some(S=>d.endsWith("."+S))?"excel":"file"};Zt(async()=>{var U,j;await H((U=a.value)==null?void 0:U.id);const d={name:a.value.status_name,code:a.value.status};f.value=d;const s={is_bounce:a.value.is_bounce};Me.value=s,((j=a.value)==null?void 0:j.is_timer_start)==="true"&&je()});async function _e(d){var s,U,j;try{const z=tt("token"),{data:V,pending:S}=await ft(`${v.public.apiUrl}/tasks/update/${(s=a.value)==null?void 0:s.id}`,{method:"POST",headers:{Authorization:`Bearer ${z.value}`},body:{status:d.code}},"$nwfJLeTGBC");((U=V.value)==null?void 0:U.app_message)==="success"?(H((j=a.value)==null?void 0:j.id),g.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),Q("updateTaskTable")):g.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(z){console.error("Error fetching data:",z)}}async function qe(d){var s,U,j;try{const z=tt("token"),{data:V,pending:S}=await ft(`${v.public.apiUrl}/tasks/update/${(s=a.value)==null?void 0:s.id}`,{method:"POST",headers:{Authorization:`Bearer ${z.value}`},body:{is_bounce:d.is_bounce}},"$np1kf0qdb3");console.log("dataBO",V),((U=V.value)==null?void 0:U.app_message)==="success"?(H((j=a.value)==null?void 0:j.id),g.add({severity:"success",summary:"Successfull",detail:"Bounce Status Changed",group:"br",life:3e3})):g.add({severity:"error",summary:"Error",detail:"Unable to change bounce status",group:"br",life:3e3})}catch(z){console.error("Error fetching data:",z)}}const c=d=>{const U=d.split("/");return U[U.length-1]},u=d=>{const s=["Jan","Feb","Mar","Apr","MAy","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],U=d,j=new Date(U),z={year:"numeric",month:"long",day:"numeric"},S=j.toLocaleDateString("en-US",z).split(" "),xe=s.indexOf(S[0]);return xe!==-1&&(S[0]=s[xe]),S.join(" ")};function I(d){const s=Math.floor(d/3600).toString().padStart(2,"0"),U=Math.floor(d%3600/60).toString().padStart(2,"0"),j=(d%60).toString().padStart(2,"0");return`${s}:${U}:${j}`}const fe=async d=>{var s;await R(d),ee.value===!0?(g.add({severity:"success",summary:"Successful",detail:"File Deleted successfully!",group:"br",life:3e3}),H((s=a.value)==null?void 0:s.id)):g.add({severity:"error",summary:"Error",detail:"Unable to delete file!",group:"br",life:3e3})},Je=n(null),Ye=n(null),Dt=n(""),nl=d=>{Ye.value=d.target.files[0],Dt.value=Ye.value?Ye.value.name:""},ol=()=>{Je.value.click()},al=async()=>{Ye.value=null},sl=async()=>{var z;const d=tt("token"),{data:s,pending:U,error:j}=await ft(`${v.public.apiUrl}/tasks/share/${(z=a.value)==null?void 0:z.id}`,{method:"GET",headers:{Authorization:`Bearer ${d.value}`}},"$yuqoLxhdIO");if(j.value){g.add({severity:"error",summary:"Error",detail:"Failed to share",life:3e3});return}else{const V=document.createElement("textarea");V.value=s.value.shared_web_link,document.body.appendChild(V),V.select(),document.execCommand("copy"),document.body.removeChild(V),g.add({severity:"success",summary:"Share successful",detail:"Shared link copied",group:"br",life:3e3});return}};return(d,s)=>{var jt,Et,Lt,It,Ut;const U=gt,j=$l,z=vt,V=Cl,S=ct,xe=Vl,Le=Al,Ce=Ge,Ze=Xt,il=jl,rl=Qt,dl=El,cl=xt,Fe=kt("tooltip");return p(),m("div",Ao,[e("div",jo,[Y((p(),m("h5",Eo,[de(h(t(a).name),1)])),[[Fe,{value:`${t(a).name}`,pt:{width:"200px"}},void 0,{top:!0}]]),e("div",Lo,[Y(e("span",{onClick:sl,class:"pi pi-share-alt my-auto cursor-pointer ml-2 share-btn"},null,512),[[Fe,{value:"Share Task"},void 0,{top:!0}]]),Io])]),e("div",Uo,[e("div",null,[e("div",zo,[e("div",Oo,[e("form",{onSubmit:Pt(it,["prevent"]),class:"mt-2 task-detail ml-2"},[e("div",Mo,[e("div",Bo,[e("div",Ho,[Fo,o(j,{style:{width:"164.94px"},class:"input-fields"},{default:w(()=>[o(U,{display:"chip",modelValue:t(L),"onUpdate:modelValue":s[0]||(s[0]=b=>O(L)?L.value=b:null),filter:"",options:l.usersLists,optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:2,class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",No,[Po,o(j,{class:"input-fields"},{default:w(()=>[o(t(bt),{style:"width: 164.94px; border-radius:7px",modelValue:t(k),"onUpdate:modelValue":s[1]||(s[1]=b=>O(k)?k.value=b:null),placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:s[2]||(s[2]=b=>nt(b))},null,8,["modelValue"])]),_:1})])]),e("div",Ro,[e("div",Jo,[Yo,o(z,{onChange:s[3]||(s[3]=b=>_e(t(f))),modelValue:t(f),"onUpdate:modelValue":s[4]||(s[4]=b=>O(f)?f.value=b:null),options:t(N),optionLabel:"name",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["modelValue","options"])]),e("div",Go,[Ko,e("div",Wo,[o(xe,{close:t(ot),group:"headless"},{container:w(({message:b,acceptCallback:ht,rejectCallback:ie})=>[e("div",Qo,[e("div",Xo,[e("div",null,[Zo,o(V,{modelValue:t(he),"onUpdate:modelValue":s[5]||(s[5]=ge=>O(he)?he.value=ge:null),showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:23,id:"hours"},{incrementbuttonicon:w(()=>[ea]),decrementbuttonicon:w(()=>[ta]),_:1},8,["modelValue"])]),e("div",null,[la,o(V,{modelValue:t(ye),"onUpdate:modelValue":s[6]||(s[6]=ge=>O(ye)?ye.value=ge:null),showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:59,id:"minutes"},{incrementbuttonicon:w(()=>[na]),decrementbuttonicon:w(()=>[oa]),_:1},8,["modelValue"])])]),e("div",aa,[o(S,{icon:"pi pi-check px-2 py-0 text-sm",label:"",class:"border-none w-full mx-4",onClick:ge=>at(ie),size:"small"},null,8,["onClick"])])])]),_:1},8,["close"]),Y((p(),m("div",{class:et(`clock-btn ${((jt=t(a))==null?void 0:jt.is_timer_start)=="true"?"bg-pink-300":"bg-primary-400"}`),onClick:We},[e("i",{class:et(`pi ${((Et=t(a))==null?void 0:Et.is_timer_start)=="true"?"pi-stop stop":"pi-play start"}`)},null,2)],2)),[[Fe,{value:((Lt=t(a))==null?void 0:Lt.is_timer_start)=="true"?"Stop":"Start"},void 0,{top:!0}]]),e("div",{class:"text-sm absolute",onClick:s[7]||(s[7]=b=>Ve(b))},h(((It=t(a))==null?void 0:It.is_timer_start)=="true"?t(Oe):I((Ut=t(a))==null?void 0:Ut.total_duration)),1)]),sa])])]),e("div",ia,[ra,o(j,{style:{width:"90%"},class:"input-fields"},{default:w(()=>[o(U,{display:"chip",modelValue:t(le),"onUpdate:modelValue":s[8]||(s[8]=b=>O(le)?le.value=b:null),filter:"",options:l.tagsLists,optionLabel:"name",placeholder:"Select Tags",class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",da,[ca,o(t(ll),{modelValue:t(Be),"onUpdate:modelValue":s[9]||(s[9]=b=>O(Be)?Be.value=b:null),editorStyle:"height: 150px",readonly:!t(D)},{toolbar:w(()=>[e("span",ua,[Y(e("button",pa,null,512),[[Fe,"Bold",void 0,{bottom:!0}]]),Y(e("button",ma,null,512),[[Fe,"Italic",void 0,{bottom:!0}]]),Y(e("button",qa,null,512),[[Fe,"Underline",void 0,{bottom:!0}]]),fa,ga,va])]),_:1},8,["modelValue","readonly"])]),t(D)?(p(),m("div",ba,[o(S,{type:"submit",label:"Save"})])):J("",!0)],32),o(il,{class:"mt-3"},{default:w(()=>{var b,ht;return[o(Le,{class:"file-upload",header:"Detail"},{default:w(()=>{var ie,ge,zt,Ot,Mt,Bt,Ht,Ft;return[e("p",ha,"Attachments: "+h((ie=t(a))!=null&&ie.attachments&&((zt=(ge=t(a))==null?void 0:ge.attachments)==null?void 0:zt.length)>0?(Mt=(Ot=t(a))==null?void 0:Ot.attachments)==null?void 0:Mt.length:0),1),e("div",ka,[(Bt=t(a))!=null&&Bt.attachments&&((Ht=t(a))==null?void 0:Ht.attachments.length)===0?(p(),m("div",wa,xa)):J("",!0),(p(!0),m(Ie,null,Ne((Ft=t(a))==null?void 0:Ft.attachments,i=>(p(),m("div",{key:i,target:"_blank",class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-2 relative",style:{"background-color":"#f7fafc"}},[$e(i==null?void 0:i.file)==="file"?(p(),m("a",{key:0,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:i==null?void 0:i.file},[Ta,e("div",Sa,[e("div",$a,h(c(i==null?void 0:i.file)),1),e("div",Ca,h(u(i==null?void 0:i.created_at)),1)])],8,Da)):J("",!0),$e(i==null?void 0:i.file)==="image"?(p(),m("a",{key:1,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 relative",href:i==null?void 0:i.file},[e("img",{src:i==null?void 0:i.file,alt:"",style:{width:"90%",height:"80px","border-radius":"10px","border-top-left-radius":"10px","object-fit":"cover"}},null,8,Aa),e("div",ja,[e("div",Ea,h(c(i==null?void 0:i.file)),1),e("div",La,h(u(i==null?void 0:i.created_at)),1)])],8,Va)):J("",!0),$e(i==null?void 0:i.file)==="video"?(p(),m("a",{key:2,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:i==null?void 0:i.file},[Ua,e("div",za,[e("div",Oa,h(c(i==null?void 0:i.file)),1),e("div",Ma,h(u(i==null?void 0:i.created_at)),1)])],8,Ia)):J("",!0),$e(i==null?void 0:i.file)==="pdf"?(p(),m("a",{key:3,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:i==null?void 0:i.file},[Ha,e("div",Fa,[e("div",Na,h(c(i==null?void 0:i.file)),1),e("div",Pa,h(u(i==null?void 0:i.created_at)),1)])],8,Ba)):J("",!0),$e(i==null?void 0:i.file)==="word"?(p(),m("a",{key:4,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:i==null?void 0:i.file},[Ja,e("div",Ya,[e("div",Ga,h(c(i==null?void 0:i.file)),1),e("div",Ka,h(u(i==null?void 0:i.created_at)),1)])],8,Ra)):J("",!0),$e(i==null?void 0:i.file)==="excel"?(p(),m("a",{key:5,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:i==null?void 0:i.file},[Qa,e("div",Xa,[e("div",Za,h(c(i==null?void 0:i.file)),1),e("div",es,h(u(i==null?void 0:i.created_at)),1)])],8,Wa)):J("",!0),e("div",{onClick:Ps=>fe(i==null?void 0:i.id),class:"absolute bg-red-500 text-white p-2 flex align-items-center justify-content-center close-btn"},ns,8,ts)]))),128))]),t(D)?(p(),m("div",os,[e("input",{onChange:rt,id:"attachInput",class:"float-right file-up-btn",type:"file",placeholder:"+"},null,32),o(S,{type:"button",loading:t(Z),onClick:Re,label:"Uploads"},null,8,["loading"])])):J("",!0)]}),_:1}),o(Le,{header:`Sub Tasks ${(b=t(K))!=null&&b.length?t(K).length:0}`},{default:w(()=>[t(B)?Y((p(),De(S,{key:0,icon:"pi pi-plus",label:"Create",onClick:s[10]||(s[10]=ie=>{var ge;return Q("openCreateSpace",(ge=t(a))==null?void 0:ge.id,"sub-task")}),class:"mr-2 sub-create",severity:"secondary"},null,512)),[[Fe,{value:"Create Sub Task"},void 0,{right:!0}]]):J("",!0),o(Ze,{class:"tree-table",value:t(K),lazy:!0,tableProps:{style:{minWidth:"650px"}},style:{overflow:"auto"}},{empty:w(()=>[as]),default:w(()=>[o(Ce,{class:"cursor-pointer tone",field:"name",header:"Name",expander:"",style:{width:"45%"}},{body:w(ie=>[Y((p(),m("span",{class:"taskTitle",onClick:ge=>Q("handleTaskDetailView",ie.node)},[de(h(ie.node.data.name),1)],8,ss)),[[Fe,{value:`${ie.node.data.name}`},void 0,{left:!0}]])]),_:1}),o(Ce,{field:"assignee",header:"Assignee",style:{width:"25%"}}),o(Ce,{field:"dueDateValue",header:"Due Date",style:X([{width:"11.5%"},{"text-wrap":"nowrap"}])}),o(Ce,{field:"priority",header:"Priority",style:{width:"10%"}}),o(Ce,{field:"action",header:"Action"},{body:w(ie=>[e("div",is,[o(S,{style:{width:"30px",height:"30px","border-radius":"50%"},icon:"pi pi-ellipsis-v",class:"action-dropdown-det-toggle"}),e("div",rs,[o(S,{icon:"pi pi-plus",class:"mr-2 ac-btn",severity:"success",onClick:ge=>Q("openCreateSpace",ie.node.key,"sub-task"),rounded:""},null,8,["onClick"]),o(S,{icon:"pi pi-pencil",class:"mr-2 ac-btn",severity:"success",onClick:ge=>Q("handleTaskEdit",ie.node),rounded:""},null,8,["onClick"]),o(S,{icon:"pi pi-cog",class:"mr-2 ac-btn",severity:"info",onClick:ge=>Q("handleTaskDetailView",ie.node),rounded:""},null,8,["onClick"]),o(S,{icon:"pi pi-trash",class:"ac-btn",severity:"warning",rounded:"",onClick:ge=>Q("confirmDeleteTask",ie.node.key)},null,8,["onClick"])])])]),_:1})]),_:1},8,["value"])]),_:1},8,["header"]),o(Le,{header:`Bounce ${((ht=t(Me))==null?void 0:ht.is_bounce)==="Yes"?"1":""}`},{default:w(()=>[e("div",ds,[e("div",cs,[us,o(z,{onChange:s[11]||(s[11]=ie=>qe(t(Me))),disabled:!t(T),modelValue:t(Me),"onUpdate:modelValue":s[12]||(s[12]=ie=>O(Me)?Me.value=ie:null),options:t($),optionLabel:"is_bounce",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["disabled","modelValue","options"])])])]),_:1},8,["header"])]}),_:1})])])])]),e("div",ps,[e("div",null,[e("div",ms,[e("div",qs,[e("div",fs,[t(q)?(p(),De(S,{key:0,onClick:ae,label:"↓  Show More",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})):J("",!0)]),t(me)?(p(),m("div",gs,[(p(!0),m(Ie,null,Ne(t(te),b=>(p(),m("ul",{key:b,style:{"margin-left":"-15px","margin-top":"-6px"}},[e("li",{innerHTML:b.title,style:{"font-size":"smaller !important"}},null,8,vs)]))),128)),e("div",bs,[o(S,{onClick:se,label:"↑ Hide",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})])])):J("",!0),(p(!0),m(Ie,null,Ne(t(M),b=>(p(),De(dl,{class:"mb-2",key:b.id},{title:w(()=>[e("div",hs,[b.commentator_image?(p(),m("img",{key:0,class:"mr-2",src:b.commentator_image,alt:"",style:{width:"28px",height:"28px","border-radius":"50%"}},null,8,ks)):(p(),De(rl,{key:1,label:b.commentator_name.charAt(),class:"mr-2 capitalize",size:"small",style:{"background-color":"gray",color:"#ededed","border-radius":"50%"}},null,8,["label"])),e("p",ws,h(b.commentator_name),1)])]),content:w(()=>[c(b==null?void 0:b.file)?(p(),m("div",ys,[e("a",{href:b==null?void 0:b.file,target:"_blank",class:"bg-gray-200 attachment-wrapper cursor-pointer flex align-items-center px-3 py-3 gap-2 comment-file",style:{"background-color":"#f7fafc"}},[xs,e("div",Ds,[e("div",Ts,h(c(b==null?void 0:b.file)),1)])],8,_s)])):J("",!0),e("p",Ss,h(b!=null&&b.comment?b==null?void 0:b.comment:""),1),e("i",$s,h(st(b.time)),1)]),_:2},1024))),128))]),e("form",{onSubmit:Pt(Se,["prevent"]),class:"comment-add"},[t(Ye)?(p(),m("div",Cs,[e("div",null,[Vs,de(),e("span",null,h(t(Dt)),1)]),e("div",{onClick:al,class:"close-comment"},js)])):J("",!0),e("div",null,[o(cl,{placeholder:"Add comment",modelValue:t(He),"onUpdate:modelValue":s[13]||(s[13]=b=>O(He)?He.value=b:null),rows:"3",cols:"15",class:"border-gray-300 mb-1 comment-text",required:""},null,8,["modelValue"]),e("input",{class:"hidden",type:"file",ref_key:"fileInput",ref:Je,onChange:nl},null,544),o(S,{icon:"pi pi-cloud-upload",onClick:ol,"aria-label":"Filter"}),o(S,{class:"ml-2",type:"submit",icon:"pi pi-plus",label:"Add",loading:t(y)},null,8,["loading"])])],32)])])])])}}};const pt=l=>(yt("data-v-9fcd82f9"),l=l(),_t(),l),Ls={class:"card"},Is={class:"d-flex create-space-btn-wrapper mb-3 mr-2"},Us={class:"breadCrumWrap"},zs=pt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Os=pt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Ms=pt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Bs=pt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Hs={class:"text cursor-pointer"},Fs=pt(()=>e("p",null,"Are you sure you want to delete?",-1)),Ns={__name:"index",setup(l){const r=n(Pe("read_task")),v=ke(),x=ke(),{getSingleProject:R,deleteTask:_,getTaskAssignModalData:Z,getTagsAssignModalData:ee,getTaskDetails:oe}=ke(),{singleProject:W,isTaskDeleted:F,tasks:ve,kanbanTasks:ce}=Ke(ke()),H=n({}),re=n(!0),ue=ut(),G=n(!1),M=n(null),K=qt().query.task_key;console.log(K);const{projects:N}=qt().params,a=n(!1),te=n(null),pe=n(null),we=n(null),P=n([]),Q=n([]),g=n(!1),y=n(!1),D=n(!1),T=async(A,f)=>{A?pe.value=A:pe.value="",f=="sub-task"?we.value="Create Sub Task":we.value="Create Task",a.value=!0,await Z(),P.value=v.users,await ee(),Q.value=x.tags},B=async A=>{M.value=A,await Z(),P.value=v.users,await ee(),Q.value=x.tags,g.value=!0},L=A=>{te.value=A,y.value=!0},be=async()=>{G.value=!0,await _(te.value,N),F.value===!0?(G.value=!1,ue.add({severity:"success",summary:"Successful",detail:"Task Deleted Successfully",group:"br",life:3e3}),y.value=!1):(G.value=!1,ue.add({severity:"error",summary:"Error",detail:"Unable to delete task",group:"br",life:3e3}))},le=async A=>{document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const f=document.createElement("div");f.style.position="absolute",f.style.top="0",f.style.left="0",f.style.width="100%",f.style.height="100%",f.style.backgroundColor="rgba(0, 0, 0, 0)",f.style.zIndex="1000000",document.documentElement.appendChild(f),D.value&&(D.value=!1),await oe(A.key),await Z(),P.value=v.users,await ee(),Q.value=x.tags,D.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(f)};console.log("visibleTaskDetailView",D.value),Ue(D,A=>{if(A===!0)return 0;localStorage.removeItem("taskDetailID")}),(()=>{H.value={global:{value:null,matchMode:Tl.CONTAINS}}})();const k=A=>{a.value=A},Te=A=>{g.value=A},nt=()=>{R(N)};return R(N),Ue(()=>qt().query.task_key,A=>{A&&le({key:A})}),K&&le({key:K}),Dl(()=>{re.value=!1}),(A,f)=>{var Ae,We,je,Qe;const ze=ul,he=pl,ye=Fn,ot=ao,at=yo,Ve=Es,Oe=ct;return p(),m("div",Ls,[o(ze,{position:"bottom-right",group:"br"}),e("div",Is,[e("div",Us,[o(he,{to:"/",class:"text pi pi-home"}),zs,o(he,{to:"/companies",class:"text"},{default:w(()=>[de("Companies")]),_:1}),Os,o(he,{to:`/companies/${(Ae=t(W))==null?void 0:Ae.company_id}`,class:"text"},{default:w(()=>{var $;return[de("Company - "+h(($=t(W))==null?void 0:$.company_name),1)]}),_:1},8,["to"]),Ms,o(he,{to:`/companies/${(We=t(W))==null?void 0:We.company_id}/spaces/${(je=t(W))==null?void 0:je.space_id}`,class:"text"},{default:w(()=>{var $;return[de(" Space - "+h(($=t(W))==null?void 0:$.space_name),1)]}),_:1},8,["to"]),Bs,e("p",Hs,"Project - "+h((Qe=t(W))==null?void 0:Qe.name),1)])]),t(r)?(p(),De(ye,{key:0,kanbanTasks:t(ce),tasks:t(ve),onOpenCreateSpace:T,onHandleTaskEdit:f[0]||(f[0]=$=>B($)),onHandleTaskDetailView:f[1]||(f[1]=$=>le($)),onConfirmDeleteTask:f[2]||(f[2]=$=>L($))},null,8,["kanbanTasks","tasks"])):J("",!0),o(t(mt),{visible:t(a),"onUpdate:visible":f[4]||(f[4]=$=>O(a)?a.value=$:null),modal:"",header:t(we),style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw","330px":"98vw"}},{default:w(()=>[o(ot,{usersLists:t(P),tagsLists:t(Q),taskId:t(pe),projects:t(N),onCloseCreateModal:f[3]||(f[3]=$=>k($))},null,8,["usersLists","tagsLists","taskId","projects"])]),_:1},8,["visible","header"]),o(t(mt),{visible:t(g),"onUpdate:visible":f[6]||(f[6]=$=>O(g)?g.value=$:null),modal:"",header:"Edit Task",style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:w(()=>[o(at,{singleTask:t(M),usersLists:t(P),tagsLists:t(Q),projects:t(N),onCloseEditModal:f[5]||(f[5]=$=>Te($))},null,8,["singleTask","usersLists","tagsLists","projects"])]),_:1},8,["visible"]),o(t(mt),{visible:t(D),"onUpdate:visible":f[10]||(f[10]=$=>O(D)?D.value=$:null),modal:"",header:" ",style:{width:"90rem",height:"80rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:w(()=>[o(Ve,{usersLists:t(P),tagsLists:t(Q),projID:t(N),onOpenCreateSpace:T,onHandleTaskEdit:f[7]||(f[7]=$=>B($)),onHandleTaskDetailView:f[8]||(f[8]=$=>le($)),onConfirmDeleteTask:f[9]||(f[9]=$=>L($)),onUpdateTaskTable:nt},null,8,["usersLists","tagsLists","projID"])]),_:1},8,["visible"]),o(t(mt),{visible:t(y),"onUpdate:visible":f[12]||(f[12]=$=>O(y)?y.value=$:null),header:" ",style:{width:"25rem"}},{default:w(()=>[Fs,o(Oe,{label:"No",icon:"pi pi-times",text:"",onClick:f[11]||(f[11]=$=>y.value=!1)}),o(Oe,{label:"Yes",icon:"pi pi-check",loading:t(G),text:"",onClick:be},null,8,["loading"])]),_:1},8,["visible"])])}}},Ri=wt(Ns,[["__scopeId","data-v-9fcd82f9"]]);export{Ri as default};
