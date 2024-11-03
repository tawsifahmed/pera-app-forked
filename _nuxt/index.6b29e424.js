import pl from"./toast.esm.4e99d986.js";import{_ as ml}from"./nuxt-link.1634179a.js";import ft from"./multiselect.esm.49deb63f.js";import gt from"./dropdown.esm.95d4a155.js";import vt from"./calendar.esm.7662586a.js";import dt from"./button.esm.55d690cc.js";import ql from"./inputicon.esm.8f86592f.js";import Qt from"./inputtext.esm.8047d0d2.js";import fl from"./iconfield.esm.9bf9cd10.js";import gl from"./toolbar.esm.07cf8547.js";import Xt from"./avatar.esm.3f6f066d.js";import vl from"./speeddial.esm.e8c6bf13.js";import Zt from"./treetable.esm.c143b1db.js";import{a3 as Ke,$ as n,a4 as ct,a9 as mt,a5 as el,V as Pt,a as kt,o as u,b as q,i as e,l as o,u as t,a6 as O,e as J,w as y,c as De,k as Ze,s as Y,K as X,t as h,q as ue,F as Le,f as He,ca as tl,a2 as yt,aq as Ie,a7 as wt,a8 as _t,an as bl,B as hl,_ as kl,D as yl,h as wl,m as L,n as _l,g as xl,cb as Dl,I as Rt,ab as Tl,P as Sl}from"./entry.e1c0e88c.js";import{u as et,a as qt}from"./cookie.4ac610cc.js";import{d as $l}from"./vuedraggable.umd.a6ad22a1.js";import{u as ye}from"./company.cfdd3950.js";import{a as Fe}from"./usePermission.f2ef3c55.js";import Ge from"./column.esm.bcc460f0.js";import xt from"./textarea.esm.54b8f2ee.js";import Cl from"./floatlabel.esm.b36d56ca.js";import Vl from"./inputnumber.esm.72c2fd77.js";import Al from"./confirmpopup.esm.77c284a5.js";import El from"./tabpanel.esm.dc24715b.js";import jl from"./tabview.esm.5a53e669.js";import Ll from"./card.esm.3512be62.js";import{u as Jt}from"./clock.5fa110f4.js";import{s as Il}from"./basecomponent.esm.3d4eb624.js";import pt from"./dialog.esm.4c2eb380.js";import"./portal.esm.afd7e75b.js";import"./index.esm.ed66ea6d.js";import"./baseicon.esm.9d7b2230.js";import"./index.esm.a7dfedeb.js";import"./index.esm.9f6fb2c0.js";import"./index.esm.500ed3bc.js";import"./checkbox.esm.6eeb32a6.js";import"./index.esm.a7c42a2e.js";import"./index.esm.7e6d68a5.js";import"./index.esm.19bbf2cf.js";import"./overlayeventbus.esm.fda4f9be.js";import"./virtualscroller.esm.b9c663eb.js";import"./index.esm.572cdd6a.js";import"./index.esm.10b96bd7.js";import"./index.esm.408c5cec.js";import"./badge.esm.782a7e7b.js";import"./index.esm.33125ab0.js";import"./paginator.esm.652ac4fa.js";import"./index.esm.281f3650.js";import"./index.esm.7f6ac9fd.js";import"./index.esm.d2a1dc5f.js";import"./index.esm.b432fde7.js";import"./index.esm.8c54b7f1.js";import"./index.esm.53d6f6f4.js";import"./workCompany.4fb85ea6.js";const Ul="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwElEQVR4nO2dTYgcRRTHy/iBBoligicvXgRRUPCgiDBKdl5NcEDD1JuwLBJFmXmv1yWKEslBe8WDOfmJ6N7FgydFvYiC5K4Y1IuKl6DiNzHRg/kYaTeGYVM1sx/VU6+r6g99mqqa/3u/ruqq7p4ppbKysrKysrKysrKysraodp9uBqSXAOlLbeikRh4FPpaTgIqIlwHSa2DojICkj5KCUCVfI38sINGjJCFUZ76ABI+ShLA65vNpAckdJQkBDL8sIKmjDR2GD6tYBMhfBU8oJtwTNNIJAckcJdsTpgUpzY+ODULjAWDDIUQBABsMIRoA2FAIUQHABkKIDgA2DEKUALBBEKIFgA2BEDUAbACE6AGgcAhJAEDBEJIBgEIhJAUABUJIDgAKg5AkABQEIVkAKARC0gBw9vFtOGBpfnQGkAF4Ve4BgSUNQHLxiTcYe3ziDcYen3iDscfn22B3frALkP+0tQXIfwE+fM2k+q39+y8HpB/tfujZ0PF5Vx0GteHDrvbA0GOT/dCiI/m/dhaWdkiIz6vqMLj7/sWdYOi4I5HflGW5zVYPES8Gw986wD0hJT6vqssgID/narPdY7DWMcMFax1D33e7g+2S4vOmugzO4eAqMPy741rwrq0OIH/mAPCItPi8qU6DgPyMYzg508ZHr1/j416Hh69brfISifF5UZ0GOwtLOzTyb462nx8vC8hH7OWGfanxeVHdBrXhQ/ZewL9UU86qTLtX3G4fquio64ItJb4tq26DLSyuBKSf7e3TA1UZQHrH9nm7R3ukx6eaYBCQn3Sc4e+37jtwtTb8z4Wf8REf350BqNXVbTWVtAD4W5vh0Aqnx3dmAB67qEY+4OgFtuHpPY/fm4egsXs8x6YlZHWKWtyqPCkDGFPHcDEtIRr5TeVRGcAFfwjCP0xKSvXLfeVRGcCY5vbxjRrp1MSkGD6oPCoDGBMY/mD6EER/THtmEJVmdYZAn+9Zx/hvvU0RtWYBoCzLbWDoU8sU9JjtHlC1PujsXbpOpaBZANBYPGhfA/AbGulpx3evqBRUN4Bud7DdNf+vVrvVbWn7hZlO7dm3eIOKXXUD0I4zHJA++b8MGHrL0UPeVrGrTgDtvXSt69nw+J1O6A9v0chnLeXOdvp0h4pZdQLQyCuOs/+oUuqiNWU/nNZTolRdAOYmLrqK+bXlAYdtl4fqM2nxeVNdBsG56KLvXM94bVPV/w7Dn2/2yViSAGDCoguQ2O2lmHd72dyz4eQAlI5F17njJ8THr3DVnfRiVvV2xG2DwaWh4/Mu3wbB8EPO9gwfWkf9pQl+KHR83uXboF6d96/YjuplrXUt3Ay97mhjw39VmRwAaRIfn3iDsccn3mDs8Yk3GHt84g3GHp94g7HHJ95g7PGJNxh7fOINxh6feIOxx+f6Te/MDkMndW949wb8PhXKKxgqI93ChE50sLhrvZ6re0LRbJmikV8MD4BF94RazvzzAHrFTXK2sSKJPaH+zYI08qvhk88SISzPch/Jj8InnyVBWA6wnyS9kocjnn3y114TtKEXtOEvwu8xRiF6QhwbxIXSVmZHtc52UhJsAkJOfkAIOfkBIeTkB4SQkx8QQk5+QAg5+SqMzq0TvM7z/wUrLeMdaCtpkwAAAABJRU5ErkJggg==";const zl={class:"filter-wrapper pb-2 mb-1"},Ol={class:"mb-2 relative"},Ml={class:"mb-2 relative"},Bl={class:"flex flex-wrap gap-1"},Hl=e("img",{src:Ul},null,-1),Fl=e("i",{class:"pi pi-search"},null,-1),Nl=e("p",{class:"text-center"},"No Data found...",-1),Pl={class:"inline-block"},Rl={class:"task-status"},Jl={key:1},Yl={class:"flex align-items-center"},Gl=["onClick"],Kl={class:"flex justify-content-start gap-1"},Wl=["src"],Ql={class:"inline-block"},Xl={class:"task-status-2"},Zl={key:0,class:"flex align-items-center"},en={key:1},tn={class:"flex align-items-center"},ln=["onMouseover","onMouseleave"],nn={key:1,class:"main-container"},on={class:"content"},an={class:"boardContainer",style:{display:"flex","overflow-x":"auto","align-items":"start"}},sn={class:"column-container"},rn={class:""},dn=["onClick"],cn={class:""},un={class:"font-semibold truncate text-sm title"},pn={class:"flex align-items-center gap-2 mt-1"},mn={class:"status text-sm"},qn={class:"mt-2 flex align-items-center gap-2"},fn=e("i",{class:"pi pi-user text-lg"},null,-1),gn={class:"flex justify-content-start gap-1"},vn=["src"],bn={class:"mt-2 flex align-items-center gap-2"},hn=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),kn={class:"mt-2 flex align-items-center gap-2"},yn=e("i",{class:"pi pi-flag text-lg"},null,-1),wn={class:"text-sm"},_n=["onClick"],xn=e("p",{class:"mb-1"},"Subtask",-1),Dn={class:"text-sm font-semibold"},Tn=["onClick"],Sn={class:"font-semibold truncate text-sm title"},$n={class:"truncate text-sm desc"},Cn={class:"flex align-items-center gap-2 mt-1"},Vn={class:"status text-sm"},An={class:"mt-2 flex align-items-center gap-2"},En=e("i",{class:"pi pi-user text-lg"},null,-1),jn={class:"flex justify-content-start gap-1"},Ln=["src"],In={class:"mt-2 flex align-items-center gap-2"},Un=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),zn={class:"mt-2 flex align-items-center gap-2"},On=e("i",{class:"pi pi-flag text-lg"},null,-1),Mn={class:"text-sm"},Bn={class:"mt-2 flex align-items-center gap-2"},Hn=e("i",{class:"pi pi-angle-right text-lg"},null,-1),Fn={class:"text-sm font-semibold"},Nn={__name:"TaskTable",props:["kanbanTasks","tasks"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask"],setup(l,{emit:r}){var Re;const v=tl(),x=ye(),{getSingleProject:R,getTaskAssignModalData:_}=ye(),{modStatusList:Z,singleProject:ee,statuslist:ae}=Ke(ye()),W=n(Fe("create_task")),F=n(Fe("update_task")),he=n(Fe("delete_task")),pe=n(Fe("download_task")),H=ct(),de=r,G=(Re=mt().params)==null?void 0:Re.projects,M=n(),K=n(),N=n(),a=n(),le=n(),qe=n(),we=n({}),P=n(!0),Q=n([{name:"All",code:""},{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),g=n({}),w=D=>{g.value={...g.value,[D]:!0}},T=D=>{g.value={...g.value,[D]:!1}},S=D=>[{label:"Add Sub Task",icon:"pi pi-plus text-white",command:()=>{de("openCreateSpace",D.key,"sub-task")},disabled:!W},{label:"Edit Task",icon:"pi pi-pencil text-white",command:()=>{de("handleTaskEdit",D)},disabled:!F},{label:"Task Detail",icon:"pi pi-window-maximize text-white",command:()=>{de("handleTaskDetailView",D)}},{label:"Delete Task",icon:"pi pi-trash text-white",command:()=>{de("confirmDeleteTask",D.key)},disabled:!he}],B=n(),I=n(),ke=n(),ne=n(),oe=n(),k=n(),Te=n(null),lt=()=>{if(M.value||K.value||N.value||qe.value||a.value||le.value)M.value="",K.value="",N.value="",qe.value="",a.value="",le.value="",B.value="",I.value="",ke.value="",ne.value="",oe.value="",k.value="",m.value=!1,Ue.value=!1,E();else return},E=async()=>{B.value=M.value?M.value.map(D=>D.id):"",I.value=K.value?K.value.code:"",ke.value=N.value?N.value.id:"",ne.value=qe.value,oe.value=a.value,k.value=le.value,R(G,B.value,I.value,ke.value,ne.value,oe.value,k.value)},m=n(!1),Ue=n(!1),fe=D=>{const f=new Date(D);a.value=f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate(),m.value=!0,E()},_e=D=>{Ue.value=!0;const f=new Date(D);le.value=f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate(),E()},nt=()=>{m.value=!1,a.value="",oe.value="",E()},Ve=()=>{Ue.value=!1,le.value="",k.value="",E()},Ae=n(!1),We=D=>{if(Ae.value=!0,console.log("lod",D),D.length>0){const f=`data:text/csv;charset=utf-8,"Serial No.","Task Name","Project","Assignee","Priority","Status","Time Tracked","Due Date","Overdue"
`+D.map((se,$e)=>{const ot=$e+1,at=se.data.name,st=ee.value.name,Ee=se.data.assignee.split(", ").join("; "),Je=se.data.priority?se.data.priority:"",it=se.data.status.name;let ce=se.data.total_duration;const ve=Math.floor(ce/3600),p=Math.floor(ce%3600/60),c=ce%60;ve>0?ce=`${ve} hr ${p} min ${c} sec`:p>0?ce=`${p} min ${c} sec`:ce=`${c} sec`;const V=se.data.dueDateValue,ie=se.data.is_overdue?"Yes":"No";return`"${ot}","${at}","${st}","${Ee}","${Je}","${it}","${ce}","${V}","${ie}"`}).join(`
`),ge=encodeURI(f),te=document.createElement("a");te.setAttribute("href",ge),te.setAttribute("download","tasks.csv"),document.body.appendChild(te),te.click(),document.body.removeChild(te),Ae.value=!1}else Ae.value=!1,H.add({severity:"error",summary:"Error",detail:"No data found to download",group:"br",life:3e3})};el(async()=>{await R(G),Pe()});async function Se(D,f){var ge;try{const te=et("token"),{data:se,pending:$e}=await qt(`${v.public.apiUrl}/tasks/update/${f}`,{method:"POST",headers:{Authorization:`Bearer ${te.value}`},body:{status:D==null?void 0:D.id}},"$7UcE4NQ81w");((ge=se.value)==null?void 0:ge.app_message)==="success"?(console.log("Status Changed",se),H.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),await R(G)):H.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(te){console.error("Error fetching data:",te)}}function Ne(){const D="0123456789ABCDEF";let f="#";for(let ge=0;ge<6;ge++)f+=D[Math.floor(Math.random()*10)];return f}function ze(D){return{backgroundColor:Ne(),color:"white",borderRadius:"50%",border:"2px solid white"}}const Pe=async()=>{await _(),we.value=x.users},C=n(!0),bt=Pt(()=>({animation:250,group:"tasks",disabled:!C.value,ghostClass:"ghost"})),Oe=Pt(()=>({backgroundColor:"#fff",boxShadow:"0px 2px 2px #e2e2e2",cursor:"grab",padding:"12px 10px",margin:"8px 0px"})),Me=(D,f)=>{const{added:ge,moved:te,removed:se}=D;ge&&Se(f,D.added.element.key)};return(D,f)=>{const ge=ft,te=gt,se=vt,$e=dt,ot=ql,at=Qt,st=fl,Ee=gl,Je=Xt,it=vl,ce=Zt,ve=kt("tooltip");return u(),q(Le,null,[e("div",zl,[o(ge,{onChange:f[0]||(f[0]=p=>E()),modelValue:t(M),"onUpdate:modelValue":f[1]||(f[1]=p=>O(M)?M.value=p:null),options:t(we),filter:"",optionLabel:"name",placeholder:"Filter Assignees",maxSelectedLabels:3,class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),o(te,{onChange:f[2]||(f[2]=p=>E()),modelValue:t(K),"onUpdate:modelValue":f[3]||(f[3]=p=>O(K)?K.value=p:null),options:t(Q),optionLabel:"name",placeholder:"Filter Priority",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),o(te,{onChange:f[4]||(f[4]=p=>E()),modelValue:t(N),"onUpdate:modelValue":f[5]||(f[5]=p=>O(N)?N.value=p:null),options:t(Z),optionLabel:"name",placeholder:"Filter Status",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),e("div",Ol,[o(se,{onDateSelect:f[6]||(f[6]=p=>fe(p)),modelValue:t(a),"onUpdate:modelValue":f[7]||(f[7]=p=>O(a)?a.value=p:null),placeholder:"Filter Start Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),t(m)?(u(),q("p",{key:0,onClick:nt,class:"pi pi-times absolute cursor-pointer"})):J("",!0)]),e("div",Ml,[o(se,{onDateSelect:f[8]||(f[8]=p=>_e(p)),modelValue:t(le),"onUpdate:modelValue":f[9]||(f[9]=p=>O(le)?le.value=p:null),placeholder:"Filter End Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),t(Ue)?(u(),q("p",{key:0,onClick:Ve,class:"pi pi-times end-cross absolute cursor-pointer"})):J("",!0)]),o($e,{onClick:lt,label:"Reset",class:"mr-2 w-full md:w-15rem mb-2",severity:"secondary"})]),o(Ee,{class:"border-0 px-0"},{start:y(()=>[e("div",Bl,[t(W)?(u(),De($e,{key:0,icon:"pi pi-plus",label:"Create Task",onClick:f[10]||(f[10]=p=>de("openCreateSpace","","task")),class:"mr-2",severity:"secondary"})):J("",!0),e("div",null,[o($e,{icon:"pi pi-list",label:"List",onClick:f[11]||(f[11]=()=>P.value=!0),class:Ze(["table-btn",{"bg-indigo-400 text-white":t(P)}]),severity:"secondary"},null,8,["class"]),o($e,{icon:"pi pi-th-large",label:"Board",onClick:f[12]||(f[12]=()=>P.value=!1),class:Ze(["board-btn",{"bg-indigo-400 text-white":!t(P)}]),severity:"secondary"},null,8,["class"])]),t(pe)?Y((u(),De($e,{key:1,onClick:f[13]||(f[13]=p=>We(l.tasks)),loading:t(Ae),style:X(`${t(Ae)===!0?"backGround: red":""}`),class:"excel-export-btn"},{default:y(()=>[Hl]),_:1},8,["loading","style"])),[[ve,{value:"Download Tasks"},void 0,{right:!0}]]):J("",!0)])]),end:y(()=>[o(st,{iconPosition:"right",raised:""},{default:y(()=>[o(ot,null,{default:y(()=>[Fl]),_:1}),o(at,{onKeyup:f[14]||(f[14]=p=>E()),modelValue:t(qe),"onUpdate:modelValue":f[15]||(f[15]=p=>O(qe)?qe.value=p:null),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})]),_:1}),t(P)?(u(),De(ce,{key:0,class:"table-st",stripedRows:"",value:l.tasks,lazy:!0,tableProps:{style:{minWidth:"650px",width:"100%"}},filterDisplay:"menu",style:{overflow:"auto"}},{empty:y(()=>[Nl]),default:y(()=>[o(t(Ge),{field:"name",header:"Name",class:"cursor-pointer tone",expander:"",style:{width:"40%"}},{body:y(p=>[e("div",Pl,[Y((u(),q("div",Rl,[o(te,{class:"mr-1 flex justify-content-center align-items-center",onChange:c=>Se(p.node.data.status,p.node.key),modelValue:p.node.data.status,"onUpdate:modelValue":c=>p.node.data.status=c,options:t(ae),disabled:!t(F),optionLabel:"name"},{value:y(c=>[c.value?(u(),q("div",{key:0,class:"flex align-items-center",style:X({backgroundColor:c.value.color_code})},[e("div",{style:X({backgroundColor:c.value.color_code}),class:"status-bg"},null,4)],4)):(u(),q("span",Jl,h(c.placeholder),1))]),option:y(c=>[e("div",Yl,[e("div",{style:X([{backgroundColor:c.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,h(c.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])),[[ve,{value:`${p.node.data.status.name}`},void 0,{top:!0}]]),Y((u(),q("span",{class:"taskTitle",onClick:c=>de("handleTaskDetailView",p.node)},[ue(h(p.node.data.name),1)],8,Gl)),[[ve,{value:`${p.node.data.name}`},void 0,{left:!0}]])])]),_:1}),o(t(Ge),{field:"assignee",header:"Assignee"},{body:y(p=>[e("div",Kl,[(u(!0),q(Le,null,He(p.node.data.assigneeObj,(c,V)=>(u(),q("span",{key:V,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:V>0?"-20px":"0",zIndex:10-V})},[c.image?Y((u(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:c.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Wl)),[[ve,{value:`${c.name}`},void 0,{top:!0}]]):Y((u(),De(Je,{key:1,label:c.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},ze(V)])},null,8,["label","style"])),[[ve,{value:`${c.name}`},void 0,{top:!0}]])],4))),128))])]),_:1}),o(t(Ge),{field:"status",header:"Status",style:{width:"20%"}},{body:y(p=>[e("div",Ql,[e("div",Xl,[o(te,{class:"mr-1 flex justify-content-center align-items-center",onChange:c=>Se(p.node.data.status,p.node.key),modelValue:p.node.data.status,"onUpdate:modelValue":c=>p.node.data.status=c,options:t(ae),disabled:!t(F),optionLabel:"name"},{value:y(c=>[c.value?(u(),q("div",Zl,[e("div",{style:X({color:c.value.color_code,fontWeight:500}),class:"pt-1"},h(c.value.name),5)])):(u(),q("span",en,h(c.placeholder),1))]),option:y(c=>[e("div",tn,[e("div",{style:X([{backgroundColor:c.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,h(c.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])])]),_:1}),o(t(Ge),{field:"dueDateValue",header:"Due Date",style:{textWrap:"nowrap"}},{body:y(p=>[e("div",{style:X(`color: ${p.node.data.dueDateColor}; font-weight: 600;`)},h(p.node.data.dueDateValue),5)]),_:1}),o(t(Ge),{field:"priority",header:"Priority",style:{width:"10%"}}),o(t(Ge),{field:"action",header:"Action",style:{width:"10%",position:"relative"}},{body:y(p=>[e("div",{class:"flex justify-content-start align-items-center",style:{width:"fit-content"},onMouseover:c=>w(p.node.key),onMouseleave:c=>T(p.node.key)},[o(it,{visible:t(g)[p.node.key],"onUpdate:visible":c=>t(g)[p.node.key]=c,model:S(p.node),direction:"left",class:"custom-speed-dial",tooltipOptions:{position:"top"}},null,8,["visible","onUpdate:visible","model"])],40,ln)]),_:1})]),_:1},8,["value"])):J("",!0),t(P)?J("",!0):(u(),q("div",nn,[e("div",on,[e("div",null,[e("div",an,[(u(!0),q(Le,null,He(l.kanbanTasks,p=>(u(),q("div",{key:p,class:"groupColumnContainer"},[e("div",sn,[e("div",{style:X(`background-color: ${p.statusColor}; `),class:"column-header"},h(p.name)+" - "+h(p.content.length),5),o(t($l),{modelValue:p.content,"onUpdate:modelValue":c=>p.content=c,options:t(bt),disabled:!t(F),class:"draggable scrollbar",itemKey:"name",group:"cardItem",onChange:c=>Me(c,p.status)},{item:y(({element:c})=>[e("div",rn,[(u(),q("div",{class:"task-card",style:X(t(Oe)),key:c.id,onClick:V=>D.$emit("handleTaskDetailView",c,p.content,p.name)},[e("div",cn,[Y((u(),q("p",un,[ue(h(c.data.name),1)])),[[ve,{value:`${c.data.name}`},void 0,{top:!0}]]),e("div",pn,[e("div",{class:"status-icon",style:X(`background-color:${c.data.status.color_code}`)},null,4),e("p",mn,h(c.data.status.name),1)]),e("div",qn,[fn,e("div",gn,[(u(!0),q(Le,null,He(c.data.assigneeObj,(V,ie)=>(u(),q("span",{key:ie,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:ie>0?"-20px":"0",zIndex:10-ie})},[V.image?Y((u(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:V.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,vn)),[[ve,{value:`${V.name}`},void 0,{top:!0}]]):Y((u(),De(Je,{key:1,label:V.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},ze(ie)])},null,8,["label","style"])),[[ve,{value:`${V.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",bn,[hn,e("p",{style:X(`color: ${c.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},h(c.data.dueDateValue),5)]),e("div",kn,[yn,e("p",wn,h(c.data.priority),1)]),e("div",{class:"mt-2 flex align-items-center gap-2 cursor-pointer p-1 rounded hover:bg-gray-100",style:{"border-radius":"5px"},onClick:V=>{V.stopPropagation(),t(Te)==c.unique_id?Te.value=null:Te.value=c.unique_id}},[xn,e("i",{class:Ze(`pi ${t(Te)==c.unique_id?"pi-angle-down":"pi-angle-right"}  text-lg`)},null,2),e("p",Dn,h(c.children.length),1)],8,_n)]),ue(" "+h(c.t_name),1)],12,dn)),e("div",{class:Ze(t(Te)===c.unique_id?"":"hidden")},[(u(!0),q(Le,null,He(c.children,V=>(u(),q("div",{key:V.unique_id,class:"sub-card",onClick:ie=>D.$emit("handleTaskDetailView",V,p.content,p.name)},[e("p",Sn,h(V.data.name),1),e("p",$n,h(V.data.description),1),e("div",Cn,[e("div",{class:"status-icon",style:X(`background-color:${V.data.status.color_code}`)},null,4),e("p",Vn,h(V.data.status.name),1)]),e("div",An,[En,e("div",jn,[(u(!0),q(Le,null,He(V.data.assigneeObj,(ie,Qe)=>(u(),q("span",{key:Qe,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:Qe>0?"-20px":"0",zIndex:10-Qe})},[ie.image?Y((u(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:ie.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Ln)),[[ve,{value:`${ie.name}`},void 0,{top:!0}]]):Y((u(),De(Je,{key:1,label:ie.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},ze(Qe)])},null,8,["label","style"])),[[ve,{value:`${ie.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",In,[Un,e("p",{style:X(`color: ${V.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},h(V.data.dueDateValue),5)]),e("div",zn,[On,e("p",Mn,h(V.data.priority),1)]),e("div",Bn,[Hn,e("p",Fn,h(V.children.length),1)])],8,Tn))),128))],2)])]),_:2},1032,["modelValue","onUpdate:modelValue","options","disabled","onChange"])])]))),128))])])])]))],64)}}};const ll=l=>(wt("data-v-a61a14a1"),l=l(),_t(),l),Pn={class:"field flex flex-column"},Rn={for:"name"},Jn=ll(()=>e("i",{class:"text-red-400 text-italic"},"*",-1)),Yn={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},Gn={class:"field"},Kn={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},Wn={class:"field"},Qn={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},Xn={class:"field"},Zn={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},eo={class:"field"},to={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},lo=ll(()=>e("br",null,null,-1)),no={key:0,class:"text-center",style:{color:"red"}},oo={class:"create-btn-wrapper mb-0"},ao={__name:"CreateTask",props:["createTaskTitle","taskId","projects","usersLists","tagsLists"],emits:["closeCreateModal"],setup(l,{emit:r}){const{createTask:v}=ye(),{isTaskCreated:x,detectDuplicateTask:R}=Ke(ye()),{createTaskTitle:_,taskId:Z,projects:ee,usersLists:ae,tagsLists:W}=l,F=ct(),he=n(!1),pe=n(Z),H=n(!0),de=n(!1),me=n(!1),G=n(null),M=n(null),K=n(null),N=n(null),a=n(null),le=n(!1),qe=n([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),we=r,P=g=>{if(console.log("test druve"),le.value)M.value=g;else{const w=new Date(g);w.setHours(23,59,0,0),M.value=w}};Ie(M,(g,w)=>{g&&w&&g!==w&&(le.value=!0)});const Q=async()=>{var g,w,T;if(he.value=!0,G.value===null)me.value=!0,he.value=!1;else{me.value=!1;let S;if(M.value){const I=new Date(M.value);I.setDate(I.getDate()+1),S=I.toISOString()}const B={name:G.value,dueDate:S?new Date(new Date(S).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:(g=K.value)==null?void 0:g.map(I=>I.id),tags:(w=N.value)==null?void 0:w.map(I=>I.id),priority:(T=a.value)==null?void 0:T.name,project_id:ee,parent_task_id:Z};if(S){const I=new Date(S);I.setDate(I.getDate()-1),M.value=I?new Date(I).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await v(B),R.value===!0?(he.value=!1,F.add({severity:"error",summary:"Error",detail:"Task already exists!",group:"br",life:3e3})):x.value===!0?(he.value=!1,H.value=!1,de.value=!0,G.value=null,we("closeCreateModal",!1),F.add({severity:"success",summary:"Successful",detail:"Task created Successfully",group:"br",life:3e3})):(he.value=!1,F.add({severity:"error",summary:"Error",detail:"Unable to create task!",group:"br",life:3e3}))}};return(g,w)=>{const T=Qt,S=xt,B=ft,I=vt,ke=gt,ne=dt,oe=kt("tooltip");return u(),q("div",null,[o(T,{type:"hidden",modelValue:t(pe),"onUpdate:modelValue":w[0]||(w[0]=k=>O(pe)?pe.value=k:null)},null,8,["modelValue"]),e("div",Pn,[e("label",Rn,[ue("Set Task Name"),Jn,ue(),Y(e("span",Yn,null,512),[[oe,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(S,{id:"description",class:"border-gray-300",modelValue:t(G),"onUpdate:modelValue":w[1]||(w[1]=k=>O(G)?G.value=k:null),rows:"3",cols:"20",invalid:g.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",Gn,[e("label",null,[ue("Assignees "),Y(e("span",Kn,null,512),[[oe,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(B,{display:"chip",modelValue:t(K),"onUpdate:modelValue":w[2]||(w[2]=k=>O(K)?K.value=k:null),options:l.usersLists,filter:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",Wn,[e("label",null,[ue("Tags "),Y(e("span",Qn,null,512),[[oe,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(B,{display:"chip",modelValue:t(N),"onUpdate:modelValue":w[3]||(w[3]=k=>O(N)?N.value=k:null),options:l.tagsLists,filter:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",Xn,[e("label",null,[ue("Due Date "),Y(e("span",Zn,null,512),[[oe,{value:"Set your task due date"},void 0,{right:!0}]])]),o(I,{modelValue:t(M),"onUpdate:modelValue":w[4]||(w[4]=k=>O(M)?M.value=k:null),class:"w-full clndr",placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:w[5]||(w[5]=k=>P(k))},null,8,["modelValue"])]),e("div",eo,[e("label",null,[ue("Priority "),Y(e("span",to,null,512),[[oe,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),o(ke,{modelValue:t(a),"onUpdate:modelValue":w[6]||(w[6]=k=>O(a)?a.value=k:null),options:t(qe),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),lo,t(me)?(u(),q("p",no,"Please add task name")):J("",!0),e("div",oo,[o(ne,{label:"Save",icon:"pi pi-check",text:"",onClick:Q,loading:t(he)},null,8,["loading"])])])}}},so=yt(ao,[["__scopeId","data-v-a61a14a1"]]);const tt=l=>(wt("data-v-bd25ee08"),l=l(),_t(),l),io={class:"position-relative d-flex flex-column justify-content-between w-100 modal-container"},ro={class:"field flex flex-column"},co=tt(()=>e("label",{for:"name"},[ue("Edit Task Name"),e("i",{class:"text-red-400 text-italic"},"*")],-1)),uo={class:"field"},po=tt(()=>e("label",null,"Assignees",-1)),mo={class:"field"},qo=tt(()=>e("label",null,"Tags",-1)),fo={class:"field"},go=tt(()=>e("label",null,"Due Date",-1)),vo={class:"field"},bo=tt(()=>e("label",null,"Priority",-1)),ho=tt(()=>e("br",null,null,-1)),ko={key:0,class:"text-center",style:{color:"red"}},yo={class:"create-btn-wrapper mb-0"},wo={__name:"EditTask",props:["singleTask","usersLists","tagsLists","projects"],emits:["closeEditModal"],setup(l,{emit:r}){var we,P,Q,g,w;const{editTask:v}=ye(),{isTaskEdited:x,detectDuplicateTask:R}=Ke(ye()),{singleTask:_,usersLists:Z,tagsLists:ee,projects:ae}=l,W=ct(),F=n(!1),he=n(null),pe=n((we=_==null?void 0:_.data)==null?void 0:we.name),H=n((P=_==null?void 0:_.data)!=null&&P.dueDate?new Date(_.data.dueDate).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),de=n(!1),me=n(null);me.value=(Q=_==null?void 0:_.data)!=null&&Q.assigneeObj?(g=_==null?void 0:_.data)==null?void 0:g.assigneeObj.map(T=>({id:T.id,name:T.name})):"";const G=n((w=_==null?void 0:_.data)==null?void 0:w.tagsObj),M=n(null);M.value=_.data.priority?{name:_.data.priority,code:_.data.priority}:"";const K=n([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),N=n(!1),a=r,le=T=>{if(console.log("test druve"),de.value)H.value=T;else{const S=new Date(T);S.setHours(23,59,0,0),H.value=S}};Ie(H,(T,S)=>{T&&S&&T!==S&&(de.value=!0)});const qe=async()=>{if(F.value=!0,pe.value===null)N.value=!0,F.value=!1;else{N.value=!1;let T;if(H.value){const B=new Date(H.value);B.setDate(B.getDate()+1),T=B.toISOString()}const S={id:_.key,name:pe.value,description:he.value,priority:M.value.name,dueDate:T?new Date(new Date(T).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:me.value.map(B=>B.id),tags:G.value.map(B=>B.id),project_id:ae};if(T){const B=new Date(T);B.setDate(B.getDate()-1),H.value=B?new Date(B).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await v(S),R.value===!0?(F.value=!1,W.add({severity:"error",summary:"Error",detail:"Cannnot edit, edited task name already exists!",group:"br",life:3e3})):x.value===!0?(F.value=!1,a("closeEditModal",!1),a("visibleEdit","visibleEdit"),W.add({severity:"success",summary:"Successful",detail:"Task updated Successfully",group:"br",life:3e3})):(F.value=!1,W.add({severity:"error",summary:"Error",detail:"Unable to update task!",group:"br",life:3e3}))}};return(T,S)=>{const B=xt,I=ft,ke=vt,ne=gt,oe=dt;return u(),q("div",io,[e("div",null,[e("div",ro,[co,o(B,{id:"description",class:"border-gray-300",modelValue:t(pe),"onUpdate:modelValue":S[0]||(S[0]=k=>O(pe)?pe.value=k:null),rows:"3",cols:"15",invalid:T.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",uo,[po,o(I,{display:"chip",modelValue:t(me),"onUpdate:modelValue":S[1]||(S[1]=k=>O(me)?me.value=k:null),options:l.usersLists,filter:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",mo,[qo,o(I,{display:"chip",modelValue:t(G),"onUpdate:modelValue":S[2]||(S[2]=k=>O(G)?G.value=k:null),options:l.tagsLists,filter:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",fo,[go,o(ke,{modelValue:t(H),"onUpdate:modelValue":S[3]||(S[3]=k=>O(H)?H.value=k:null),class:"w-full",placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:S[4]||(S[4]=k=>le(k))},null,8,["modelValue"])]),e("div",vo,[bo,o(ne,{modelValue:t(M),"onUpdate:modelValue":S[5]||(S[5]=k=>O(M)?M.value=k:null),options:t(K),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),ho,t(N)?(u(),q("p",ko,"Please add/fill/check up all the fields ")):J("",!0),e("div",yo,[o(oe,{label:"Update",icon:"pi pi-check",text:"",onClick:qe,loading:t(F)},null,8,["loading"])])])])}}},_o=yt(wo,[["__scopeId","data-v-bd25ee08"]]),Yt=bl("fileUpload",()=>{const l=n(!1),r=n(!1),v=n(!1);async function x(_,Z){r.value=!0;const ee=new FormData;ee.append("task_id",_),ee.append("attachments",Z);const ae=et("token");try{const W=await fetch("https://pbe.singularitybd.net/api/v1/tasks/attachment-upload",{method:"POST",headers:{Authorization:`Bearer ${ae.value}`},body:ee});if(!W.ok)throw new Error("Network response was not ok");const F=await W.json();console.log("upload data =>",F),(F==null?void 0:F.user_message)==="success"?l.value=!0:l.value=!1,r.value=!1}catch(W){console.error("Error uploading file:",W),l.value=!1,r.value=!1}}async function R(_){const Z=et("token");try{const ee=await fetch(`https://pbe.singularitybd.net/api/v1/tasks/attachment-delete/${_}`,{method:"DELETE",headers:{Authorization:`Bearer ${Z.value}`}});if(!ee.ok)throw new Error("Network response was not ok");const ae=await ee.json();console.log("delete data =>",ae),(ae==null?void 0:ae.user_message)==="success"?v.value=!0:v.value=!1}catch(ee){console.error("Error uploading file:",ee),v.value=!1}}return{fileUpload:x,fileDelete:R,isFileUpload:l,isLoading:r,isFileDeleted:v}});var xo=`
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
`,Do={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},Gt=hl.extend({name:"editor",css:xo,classes:Do}),To={name:"BaseEditor",extends:Il,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Gt,provide:function(){return{$parentInstance:this}},beforeMount:function(){var r;Gt.loadStyle({nonce:(r=this.$primevue)===null||r===void 0||(r=r.config)===null||r===void 0||(r=r.csp)===null||r===void 0?void 0:r.nonce})}};function rt(l){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},rt(l)}function Kt(l,r){var v=Object.keys(l);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(l);r&&(x=x.filter(function(R){return Object.getOwnPropertyDescriptor(l,R).enumerable})),v.push.apply(v,x)}return v}function So(l){for(var r=1;r<arguments.length;r++){var v=arguments[r]!=null?arguments[r]:{};r%2?Kt(Object(v),!0).forEach(function(x){$o(l,x,v[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(v)):Kt(Object(v)).forEach(function(x){Object.defineProperty(l,x,Object.getOwnPropertyDescriptor(v,x))})}return l}function $o(l,r,v){return r=Co(r),r in l?Object.defineProperty(l,r,{value:v,enumerable:!0,configurable:!0,writable:!0}):l[r]=v,l}function Co(l){var r=Vo(l,"string");return rt(r)=="symbol"?r:String(r)}function Vo(l,r){if(rt(l)!="object"||!l)return l;var v=l[Symbol.toPrimitive];if(v!==void 0){var x=v.call(l,r||"default");if(rt(x)!="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}var Wt=function(){try{return window.Quill}catch{return null}}(),nl={name:"Editor",extends:To,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(r,v){r!==v&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(r))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var r=this,v={modules:So({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};Wt?(this.quill=new Wt(this.$refs.editorElement,v),this.initQuill(),this.handleLoad()):kl(()=>import("./quill.e9ca0662.js").then(x=>x.q),["./quill.e9ca0662.js","./vuedraggable.umd.a6ad22a1.js","./entry.e1c0e88c.js","./entry.4235f03a.css"],import.meta.url).then(function(x){x&&yl.isExist(r.$refs.editorElement)&&(x.default?r.quill=new x.default(r.$refs.editorElement,v):r.quill=new x(r.$refs.editorElement,v),r.initQuill())}).then(function(){r.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(r){this.quill&&(r?this.quill.setContents(this.quill.clipboard.convert(r)):this.quill.setText(""))},initQuill:function(){var r=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(v,x,R){if(R==="user"){var _=r.$refs.editorElement.children[0].innerHTML,Z=r.quill.getText().trim();_==="<p><br></p>"&&(_=""),r.$emit("update:modelValue",_),r.$emit("text-change",{htmlValue:_,textValue:Z,delta:v,source:R,instance:r.quill})}}),this.quill.on("selection-change",function(v,x,R){var _=r.$refs.editorElement.children[0].innerHTML,Z=r.quill.getText().trim();r.$emit("selection-change",{htmlValue:_,textValue:Z,range:v,oldRange:x,source:R,instance:r.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Ao(l,r,v,x,R,_){return u(),q("div",L({class:l.cx("root")},l.ptmi("root")),[e("div",L({ref:"toolbarElement",class:l.cx("toolbar")},l.ptm("toolbar")),[wl(l.$slots,"toolbar",{},function(){return[e("span",L({class:"ql-formats"},l.ptm("formats")),[e("select",L({class:"ql-header",defaultValue:"0"},l.ptm("header")),[e("option",L({value:"1"},l.ptm("option")),"Heading",16),e("option",L({value:"2"},l.ptm("option")),"Subheading",16),e("option",L({value:"0"},l.ptm("option")),"Normal",16)],16),e("select",L({class:"ql-font"},l.ptm("font")),[e("option",_l(xl(l.ptm("option"))),null,16),e("option",L({value:"serif"},l.ptm("option")),null,16),e("option",L({value:"monospace"},l.ptm("option")),null,16)],16)],16),e("span",L({class:"ql-formats"},l.ptm("formats")),[e("button",L({class:"ql-bold",type:"button"},l.ptm("bold")),null,16),e("button",L({class:"ql-italic",type:"button"},l.ptm("italic")),null,16),e("button",L({class:"ql-underline",type:"button"},l.ptm("underline")),null,16)],16),(u(),q("span",L({key:R.reRenderColorKey,class:"ql-formats"},l.ptm("formats")),[e("select",L({class:"ql-color"},l.ptm("color")),null,16),e("select",L({class:"ql-background"},l.ptm("background")),null,16)],16)),e("span",L({class:"ql-formats"},l.ptm("formats")),[e("button",L({class:"ql-list",value:"ordered",type:"button"},l.ptm("list")),null,16),e("button",L({class:"ql-list",value:"bullet",type:"button"},l.ptm("list")),null,16),e("select",L({class:"ql-align"},l.ptm("select")),[e("option",L({defaultValue:""},l.ptm("option")),null,16),e("option",L({value:"center"},l.ptm("option")),null,16),e("option",L({value:"right"},l.ptm("option")),null,16),e("option",L({value:"justify"},l.ptm("option")),null,16)],16)],16),e("span",L({class:"ql-formats"},l.ptm("formats")),[e("button",L({class:"ql-link",type:"button"},l.ptm("link")),null,16),e("button",L({class:"ql-image",type:"button"},l.ptm("image")),null,16),e("button",L({class:"ql-code-block",type:"button"},l.ptm("codeBlock")),null,16)],16),e("span",L({class:"ql-formats"},l.ptm("formats")),[e("button",L({class:"ql-clean",type:"button"},l.ptm("clean")),null,16)],16)]})],16),e("div",L({ref:"editorElement",class:l.cx("content"),style:l.editorStyle},l.ptm("content")),null,16)],16)}nl.render=Ao;const Eo={class:"grid"},jo={class:"col-12 flex justify-content-between"},Lo={class:"m-0 detail-task-name cursor-pointer"},Io={class:"flex gap-1"},Uo=e("h5",{class:"m-0 ml-2"},"Activity",-1),zo={class:"col-12 lg:col-7"},Oo={class:"task-wrapper card"},Mo={class:"task-det no-scrollbar"},Bo={class:"flex justify-content-between gap-2 flex-wrap align-items-center"},Ho={class:"w-full lg:w-fit"},Fo={class:"flex justify-content-between gap-2 flex-wrap align-items-centertask-detail-wrapper"},No=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-user"}),e("p",null,"Assignee:")],-1),Po={class:"flex mt-2 justify-content-between gap-2 align-items-center task-detail-wrapper"},Ro=e("div",{class:"flex justify-content-start gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-calendar"}),e("p",{class:"text-nowrap"},"Due Date:")],-1),Jo={class:"w-full lg:w-fit"},Yo={class:"flex justify-content-between gap-2 align-items-center task-detail-wrapper"},Go=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",null,"Status:")],-1),Ko={class:"flex mt-2 justify-content-start gap-6 align-items-center task-detail-wrapper"},Wo=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-stopwatch"}),e("p",{class:"text-nowrap"},"Track Time:")],-1),Qo={class:"clock-wrapper relative"},Xo={class:"border-round px-2 pt-3 pb-2"},Zo={class:"flex justify-content-center align-items-center gap-3 manual-wrapper -mt-1"},ea=e("label",{for:"hours",class:"block mb-2 text-xs"},"Hours",-1),ta=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),la=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),na=e("label",{for:"minutes",class:"block mb-2 text-xs"},"Minutes",-1),oa=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),aa=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),sa={class:"flex justify-content-center align-items-center",style:{"margin-top":"0.49rem !important"}},ia=e("div",null,null,-1),ra={class:"flex justify-content-between gap-2 align-items-centertask-detail-wrapper mt-3",style:{width:"100%"}},da=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property",style:{width:"10%"}},[e("span",{class:"pi pi-tags"}),e("p",null,"Tags:")],-1),ca={class:"field mt-3 flex flex-column"},ua=e("div",{class:"flex justify-content-start gap-2 align-items-center mb-1 task-detail-property"},[e("span",{class:"pi pi-sliders-h"}),e("p",null,"Description:")],-1),pa={class:"ql-formats flex justify-content-end mr-0"},ma={class:"ql-bold"},qa={class:"ql-italic"},fa={class:"ql-underline"},ga=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"ordered"},null,-1),va=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"bullet"},null,-1),ba=e("button",{class:"ql-link",type:"button","data-pc-section":"link"},null,-1),ha={key:0,class:"flex justify-content-end"},ka={class:"m-0"},ya={class:"my-3 attach-sec flex align-items-center justify-content-start gap-2",style:{"overflow-x":"scroll"}},wa={key:0,class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-5 attch-w",style:{"background-color":"#f7fafc"}},_a=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),xa=e("div",{class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},[e("div",{class:"text-xs"},"asdasd....asdme.extng"),e("div",{class:"text-xs"},"9 MAy, 2024")],-1),Da=[_a,xa],Ta=["href"],Sa=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),$a={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Ca={class:"text-xs"},Va={class:"text-xs"},Aa=["href"],Ea=["src"],ja={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},La={class:"text-xs"},Ia={class:"text-xs"},Ua=["href"],za=e("div",{class:"pi pi-video text-6xl attach-icon"},null,-1),Oa={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Ma={class:"text-xs"},Ba={class:"text-xs"},Ha=["href"],Fa=e("div",{class:"pi pi-file-pdf text-6xl text-danger attach-icon"},null,-1),Na={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Pa={class:"text-xs"},Ra={class:"text-xs"},Ja=["href"],Ya=e("div",{class:"pi pi-file-word text-6xl text-blue attach-icon"},null,-1),Ga={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Ka={class:"text-xs"},Wa={class:"text-xs"},Qa=["href"],Xa=e("div",{class:"pi pi-file-excel text-6xl attach-icon",style:{color:"#04aa6d"}},null,-1),Za={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},es={class:"text-xs"},ts={class:"text-xs"},ls=["onClick"],ns=e("i",{class:"pi pi-times text-xs text-white"},null,-1),os=[ns],as={key:0,class:"flex gap-2 w-full justify-content-center"},ss=e("p",{class:"text-center"},"No Data found...",-1),is=["onClick"],rs={class:"action-dropdown-det"},ds={class:"action-dropdown-content-det"},cs={class:"card"},us={class:"flex justify-content-start align-items-center task-detail-wrapper"},ps=e("div",{class:"flex justify-content-start gap-2 align-items-center bounce-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",{class:"text-nowrap"},"Bounce Status:")],-1),ms={class:"col-12 lg:col-5"},qs={class:"comment-wrapper card no-scrollbar"},fs={class:"comments no-scrollbar"},gs={class:"my-2 text-surface-800"},vs={key:0},bs=["innerHTML"],hs={class:"my-2 text-surface-800"},ks={class:"flex justify-content-start align-items-center"},ys=["src"],ws={class:"text-lg"},_s={key:0,class:"flex justify-content-start my-2"},xs=["href"],Ds=e("div",{class:"pi pi-file"},null,-1),Ts={class:"attach-detail flex flex-column justify-content-center align-items-center"},Ss={class:"text-xs"},$s={class:"m-0 ml-1",style:{"font-size":"0.9rem"}},Cs={style:{"line-height":"0"},class:"pb-1 float-right mt-3 mb-2"},Vs={key:0,class:"text-sm font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-itens-center mb-1 relative"},As=e("span",{class:"pi pi-file-import mr-2"},null,-1),Es=e("i",{class:"pi pi-times"},null,-1),js=[Es],Ls={__name:"TaskDetail",props:["usersLists","tagsLists","projID"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask","updateTaskTable"],setup(l,{emit:r}){var St,$t,Ct,Vt,At,Et;const v=tl(),{fileUpload:x,fileDelete:R}=Yt(),{isFileUpload:_,isLoading:Z,isFileDeleted:ee}=Ke(Yt()),{getTaskTimerData:ae,setManualTime:W,storeTaskTimer:F}=Jt();Ke(Jt());const{editTask:he,addTaskComment:pe,getTaskDetails:H,getSingleProject:de}=ye(),{isTaskEdited:me,isTaskCommentCreated:G,singleTaskComments:M,subTasks:K,taskStatus:N,taskDetails:a,taskActivity:le}=Ke(ye());localStorage.setItem("taskDetailID",JSON.stringify(a.value.id));const{usersLists:qe,tagsLists:we,projID:P}=l,Q=r,g=ct(),w=n(!1),T=n(Fe("update_task")),S=n(Fe("edit_bounce")),B=n(Fe("create_task")),I=n(null);I.value=($t=(St=a.value)==null?void 0:St.assignee)==null?void 0:$t.map(d=>({id:d.id,name:d.name}));const ke=n(!1);Ie(I,d=>{ke.value=!0});const ne=n((Vt=(Ct=a.value)==null?void 0:Ct.tags)==null?void 0:Vt.map(d=>({id:d.id,name:d.name}))),oe=n(!1);Ie(ne,d=>{oe.value=!0});const k=n((At=a.value)!=null&&At.due_date?new Date(a.value.due_date).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),Te=n(!1),lt=d=>{if(console.log("test druve"),Te.value)k.value=d;else{const s=new Date(d);s.setHours(23,59,0,0),k.value=s}};Ie(k,(d,s)=>{d&&s&&d!==s&&(Te.value=!0)});const E=n(k.value);Ie(k,(d,s)=>{d&&(E.value=new Date(d).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase())});const m=n(),Ue=Dl(),fe=n(null),_e=n(null),nt=n(!1),Ve=n(!1),Ae=async d=>{var U,j;Ve.value=!0;let s;if(fe.value>0||_e.value>0){s=fe.value*3600+_e.value*60,console.log("totalSeconds",s);const z=await W((U=a.value)==null?void 0:U.id,s);(z==null?void 0:z.code)===200?(await H((j=a.value)==null?void 0:j.id),Ve.value=!1,g.add({severity:"success",summary:"Duration Added",detail:`Duration: ${fe.value?fe.value:0} hours and ${_e.value?_e.value:0} minutes`,group:"br",life:3e3}),fe.value=null,_e.value=null,d()):(Ve.value=!1,g.add({severity:"error",summary:"Error",detail:"Unable to add duration",group:"br",life:3e3})),console.log("responseData",z)}else Ve.value=!1,g.add({severity:"error",summary:"Error",detail:"Please add duration",group:"br",life:3e3});s=null},We=d=>{var s;console.log(d.detail),d.detail===3&&((s=a.value)==null?void 0:s.is_timer_start)==="false"&&Ue.require({target:d.currentTarget,group:"headless",message:"Set task duration:",accept:()=>{g.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{}})},Se=n("00:00:00");let Ne=null;const ze=async()=>{var d,s,U,j,z,A,$,xe,je,Ce;if(a.value.id,console.log("taskDetails",a.value),((d=a.value)==null?void 0:d.is_timer_start)==="false"){await ae("start",(s=a.value)==null?void 0:s.id),await H((U=a.value)==null?void 0:U.id),Pe(),localStorage.setItem("storeTaskID",JSON.stringify((j=a.value)==null?void 0:j.id)),localStorage.setItem("storeTaskProjectID",JSON.stringify(Number(P))),localStorage.setItem("storeTaskSpaceID",JSON.stringify((z=a.value)==null?void 0:z.project.space_id)),localStorage.setItem("storeTaskCompanyID",JSON.stringify((A=a.value)==null?void 0:A.project.company_id)),localStorage.setItem("storeTaskTimerStartTime",JSON.stringify(a.value.taskTimer.start_time));let Xe={task_id:a.value.id,project_id:P,space_id:a.value.project.space_id,company_id:a.value.project.company_id,timerStartTime:a.value.taskTimer.start_time};await F(Xe),g.add({severity:"success",summary:"Task Timer",detail:"Timer Started",group:"br",life:3e3}),await de(P)}else await ae("stop",($=a.value)==null?void 0:$.id,(je=(xe=a.value)==null?void 0:xe.taskTimer)==null?void 0:je.id),await H((Ce=a.value)==null?void 0:Ce.id),C(),localStorage.removeItem("storeTaskID"),localStorage.removeItem("storeTaskProjectID"),localStorage.removeItem("storeTaskSpaceID"),localStorage.removeItem("storeTaskCompanyID"),localStorage.removeItem("storeTaskTimerStartTime"),await F({task_id:null,project_id:null,space_id:null,company_id:null}),g.add({severity:"success",summary:"Task Timer",detail:"Timer Stopped",group:"br",life:3e3}),await de(P)},Pe=()=>{a.value.id,console.log("taskDetails.value.taskTimer.start_time",a.value.taskTimer.start_time);const d=new Date(a.value.taskTimer.start_time).getTime();Ne=setInterval(()=>{const s=Math.floor((Date.now()-d)/1e3);Se.value=ie(s)},1e3)},C=()=>{clearInterval(Ne),Se.value=ie(a.value.total_duration)},bt=n([{is_bounce:"No"},{is_bounce:"Yes"}]),Oe=n(),Me=n(((Et=a.value)==null?void 0:Et.description)||" "),Re=n(!1);Ie(Me,d=>{d.length===0&&(Me.value=" "),Re.value=!0});const D=n(null),f=n(),ge=n(!0),te=n(!1),se=()=>{te.value=!0,ge.value=!1},$e=()=>{te.value=!1,ge.value=!0},ot=async()=>{var d;w.value=!0,await pe((d=a.value)==null?void 0:d.id,D.value,Ye.value),G.value===!0?(g.add({severity:"success",summary:"Successful",detail:"Comment added Successfully",group:"br",life:3e3}),D.value=null,w.value=!1,Ye.value=null):(g.add({severity:"error",summary:"Error",detail:"Unable to add comment",group:"br",life:3e3}),w.value=!1)},at=d=>{const s=new Date(d),j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()],z=s.getDate(),A=s.getFullYear().toString().substr(-2),$=s.getHours(),xe=s.getMinutes(),je=$>=12?"PM":"AM",Ce=$%12||12,Xe=xe<10?"0"+xe:xe;return`${z} ${j}'${A}, ${Ce}:${Xe}${je}`},st=async()=>{var j,z;let d;if(k.value){const A=new Date(k.value);A.setDate(A.getDate()+1),d=A.toISOString()}console.log("checkDate",E.value);const s=new Date((j=a.value)==null?void 0:j.due_date).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});console.log("formattedDueDate",s);const U={id:(z=a.value)==null?void 0:z.id,...Re.value===!0?{description:Me.value}:{},project_id:P,...E.value!==s?{dueDate:d?new Date(new Date(d).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null}:{},...ke.value===!0?{assignees:I.value.map(A=>A.id)}:{},...oe.value===!0?{tags:ne.value.map(A=>A.id)}:{}};if(d){const A=new Date(d);A.setDate(A.getDate()-1),k.value=A?new Date(A).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await he(U),me.value===!0?(g.add({severity:"success",summary:"Successfull",detail:"Task detail updated",group:"br",life:3e3}),f.value=null,Re.value===!0&&(Re.value=!1,console.log("isDescriptionEdited Flagged")),ke.value===!0&&(ke.value=!1,console.log("isAsigneeEdited Flagged")),oe.value===!0&&(oe.value=!1,console.log("isTagsEdited Flagged"))):g.add({severity:"error",summary:"Error",detail:"Unable to upadte task detail",group:"br",life:3e3})},Ee=n(null),Je=d=>{Ee.value=d.target.files[0]},it=async()=>{var d,s;Ee.value&&console.log("file =>",Ee.value),await x((d=a.value)==null?void 0:d.id,Ee.value),_.value===!0?(g.add({severity:"success",summary:"Successfull",detail:"File Upload successfully!",group:"br",life:3e3}),H((s=a.value)==null?void 0:s.id),document.getElementById("attachInput").value=null,Ee.value=null):g.add({severity:"error",summary:"Error",detail:"Unable to upload file!",group:"br",life:3e3})},ce=d=>{const s=["jpg","JPG","jpeg","png","gif","bmp","svg","webp","ico","tiff","tif","heic","heif"],U=["mp4","avi","flv","wmv","mov","3gp","mkv"],j=["pdf","PDF","ppt","pptx"],z=["doc","docx","rtf"],A=["xls","xlsx","csv"];return s.some($=>d.endsWith("."+$))?"image":U.some($=>d.endsWith("."+$))?"video":j.some($=>d.endsWith("."+$))?"pdf":z.some($=>d.endsWith("."+$))?"word":A.some($=>d.endsWith("."+$))?"excel":"file"};el(async()=>{var U,j;await H((U=a.value)==null?void 0:U.id);const d={name:a.value.status_name,code:a.value.status};m.value=d;const s={is_bounce:a.value.is_bounce};Oe.value=s,((j=a.value)==null?void 0:j.is_timer_start)==="true"&&Pe()});async function ve(d){var s,U,j;try{const z=et("token"),{data:A,pending:$}=await qt(`${v.public.apiUrl}/tasks/update/${(s=a.value)==null?void 0:s.id}`,{method:"POST",headers:{Authorization:`Bearer ${z.value}`},body:{status:d.code}},"$nwfJLeTGBC");((U=A.value)==null?void 0:U.app_message)==="success"?(H((j=a.value)==null?void 0:j.id),g.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),Q("updateTaskTable")):g.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(z){console.error("Error fetching data:",z)}}async function p(d){var s,U,j;try{const z=et("token"),{data:A,pending:$}=await qt(`${v.public.apiUrl}/tasks/update/${(s=a.value)==null?void 0:s.id}`,{method:"POST",headers:{Authorization:`Bearer ${z.value}`},body:{is_bounce:d.is_bounce}},"$np1kf0qdb3");console.log("dataBO",A),((U=A.value)==null?void 0:U.app_message)==="success"?(H((j=a.value)==null?void 0:j.id),g.add({severity:"success",summary:"Successfull",detail:"Bounce Status Changed",group:"br",life:3e3})):g.add({severity:"error",summary:"Error",detail:"Unable to change bounce status",group:"br",life:3e3})}catch(z){console.error("Error fetching data:",z)}}const c=d=>{const U=d.split("/");return U[U.length-1]},V=d=>{const s=["Jan","Feb","Mar","Apr","MAy","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],U=d,j=new Date(U),z={year:"numeric",month:"long",day:"numeric"},$=j.toLocaleDateString("en-US",z).split(" "),xe=s.indexOf($[0]);return xe!==-1&&($[0]=s[xe]),$.join(" ")};function ie(d){const s=Math.floor(d/3600).toString().padStart(2,"0"),U=Math.floor(d%3600/60).toString().padStart(2,"0"),j=(d%60).toString().padStart(2,"0");return`${s}:${U}:${j}`}const Qe=async d=>{var s;await R(d),ee.value===!0?(g.add({severity:"success",summary:"Successful",detail:"File Deleted successfully!",group:"br",life:3e3}),H((s=a.value)==null?void 0:s.id)):g.add({severity:"error",summary:"Error",detail:"Unable to delete file!",group:"br",life:3e3})},Dt=n(null),Ye=n(null),Tt=n(""),ol=d=>{Ye.value=d.target.files[0],Tt.value=Ye.value?Ye.value.name:""},al=()=>{Dt.value.click()},sl=async()=>{Ye.value=null},il=async()=>{var z;const d=et("token"),{data:s,pending:U,error:j}=await qt(`${v.public.apiUrl}/tasks/share/${(z=a.value)==null?void 0:z.id}`,{method:"GET",headers:{Authorization:`Bearer ${d.value}`}},"$yuqoLxhdIO");if(j.value){g.add({severity:"error",summary:"Error",detail:"Failed to share",life:3e3});return}else{const A=document.createElement("textarea");A.value=s.value.shared_web_link,document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A),g.add({severity:"success",summary:"Share successful",detail:"Shared link copied",group:"br",life:3e3});return}};return(d,s)=>{var jt,Lt,It,Ut,zt;const U=ft,j=Cl,z=gt,A=Vl,$=dt,xe=Al,je=El,Ce=Ge,Xe=Zt,rl=jl,dl=Xt,cl=Ll,ul=xt,Be=kt("tooltip");return u(),q("div",Eo,[e("div",jo,[Y((u(),q("h5",Lo,[ue(h(t(a).name),1)])),[[Be,{value:`${t(a).name}`,pt:{width:"200px"}},void 0,{top:!0}]]),e("div",Io,[Y(e("span",{onClick:il,class:"pi pi-share-alt my-auto cursor-pointer ml-2 share-btn"},null,512),[[Be,{value:"Share Task"},void 0,{top:!0}]]),Uo])]),e("div",zo,[e("div",null,[e("div",Oo,[e("div",Mo,[e("form",{onSubmit:Rt(st,["prevent"]),class:"mt-2 task-detail ml-2"},[e("div",Bo,[e("div",Ho,[e("div",Fo,[No,o(j,{style:{width:"164.94px"},class:"input-fields"},{default:y(()=>[o(U,{display:"chip",modelValue:t(I),"onUpdate:modelValue":s[0]||(s[0]=b=>O(I)?I.value=b:null),filter:"",options:l.usersLists,optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:2,class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",Po,[Ro,o(j,{class:"input-fields"},{default:y(()=>[o(t(vt),{style:"width: 164.94px; border-radius:7px",modelValue:t(k),"onUpdate:modelValue":s[1]||(s[1]=b=>O(k)?k.value=b:null),placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:s[2]||(s[2]=b=>lt(b))},null,8,["modelValue"])]),_:1})])]),e("div",Jo,[e("div",Yo,[Go,o(z,{onChange:s[3]||(s[3]=b=>ve(t(m))),modelValue:t(m),"onUpdate:modelValue":s[4]||(s[4]=b=>O(m)?m.value=b:null),options:t(N),optionLabel:"name",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["modelValue","options"])]),e("div",Ko,[Wo,e("div",Qo,[o(xe,{close:t(nt),group:"headless"},{container:y(({message:b,acceptCallback:ht,rejectCallback:re})=>[e("div",Xo,[e("div",Zo,[e("div",null,[ea,o(A,{modelValue:t(fe),"onUpdate:modelValue":s[5]||(s[5]=be=>O(fe)?fe.value=be:null),placeholder:"00",showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:23,id:"hours"},{incrementbuttonicon:y(()=>[ta]),decrementbuttonicon:y(()=>[la]),_:1},8,["modelValue"])]),e("div",null,[na,o(A,{modelValue:t(_e),"onUpdate:modelValue":s[6]||(s[6]=be=>O(_e)?_e.value=be:null),placeholder:"00",showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:59,id:"minutes"},{incrementbuttonicon:y(()=>[oa]),decrementbuttonicon:y(()=>[aa]),_:1},8,["modelValue"])])]),e("div",sa,[o($,{icon:"pi pi-check px-2 py-0 text-sm",label:"",class:"border-none w-full mx-3",loading:t(Ve),onClick:be=>Ae(re),size:"small"},null,8,["loading","onClick"])])])]),_:1},8,["close"]),Y((u(),q("div",{class:Ze(`clock-btn ${((jt=t(a))==null?void 0:jt.is_timer_start)=="true"?"bg-pink-300":"bg-primary-400"}`),onClick:ze},[e("i",{class:Ze(`pi ${((Lt=t(a))==null?void 0:Lt.is_timer_start)=="true"?"pi-stop stop":"pi-play start"}`)},null,2)],2)),[[Be,{value:((It=t(a))==null?void 0:It.is_timer_start)=="true"?"Stop":"Start"},void 0,{top:!0}]]),e("div",{class:"text-sm absolute",onClick:s[7]||(s[7]=b=>We(b))},h(((Ut=t(a))==null?void 0:Ut.is_timer_start)=="true"?t(Se):ie((zt=t(a))==null?void 0:zt.total_duration)),1)]),ia])])]),e("div",ra,[da,o(j,{style:{width:"90%"},class:"input-fields"},{default:y(()=>[o(U,{display:"chip",modelValue:t(ne),"onUpdate:modelValue":s[8]||(s[8]=b=>O(ne)?ne.value=b:null),filter:"",options:l.tagsLists,optionLabel:"name",placeholder:"Select Tags",class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",ca,[ua,o(t(nl),{modelValue:t(Me),"onUpdate:modelValue":s[9]||(s[9]=b=>O(Me)?Me.value=b:null),editorStyle:"height: 150px",readonly:!t(T)},{toolbar:y(()=>[e("span",pa,[Y(e("button",ma,null,512),[[Be,"Bold",void 0,{bottom:!0}]]),Y(e("button",qa,null,512),[[Be,"Italic",void 0,{bottom:!0}]]),Y(e("button",fa,null,512),[[Be,"Underline",void 0,{bottom:!0}]]),ga,va,ba])]),_:1},8,["modelValue","readonly"])]),t(T)?(u(),q("div",ha,[o($,{type:"submit",label:"Save"})])):J("",!0)],32),o(rl,{class:"mt-3"},{default:y(()=>{var b,ht;return[o(je,{class:"file-upload",header:"Detail"},{default:y(()=>{var re,be,Ot,Mt,Bt,Ht,Ft,Nt;return[e("p",ka,"Attachments: "+h((re=t(a))!=null&&re.attachments&&((Ot=(be=t(a))==null?void 0:be.attachments)==null?void 0:Ot.length)>0?(Bt=(Mt=t(a))==null?void 0:Mt.attachments)==null?void 0:Bt.length:0),1),e("div",ya,[(Ht=t(a))!=null&&Ht.attachments&&((Ft=t(a))==null?void 0:Ft.attachments.length)===0?(u(),q("div",wa,Da)):J("",!0),(u(!0),q(Le,null,He((Nt=t(a))==null?void 0:Nt.attachments,i=>(u(),q("div",{key:i,target:"_blank",class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-2 relative",style:{"background-color":"#f7fafc"}},[ce(i==null?void 0:i.file)==="file"?(u(),q("a",{key:0,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:i==null?void 0:i.file},[Sa,e("div",$a,[e("div",Ca,h(c(i==null?void 0:i.file)),1),e("div",Va,h(V(i==null?void 0:i.created_at)),1)])],8,Ta)):J("",!0),ce(i==null?void 0:i.file)==="image"?(u(),q("a",{key:1,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 relative",href:i==null?void 0:i.file},[e("img",{src:i==null?void 0:i.file,alt:"",style:{width:"90%",height:"80px","border-radius":"10px","border-top-left-radius":"10px","object-fit":"cover"}},null,8,Ea),e("div",ja,[e("div",La,h(c(i==null?void 0:i.file)),1),e("div",Ia,h(V(i==null?void 0:i.created_at)),1)])],8,Aa)):J("",!0),ce(i==null?void 0:i.file)==="video"?(u(),q("a",{key:2,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:i==null?void 0:i.file},[za,e("div",Oa,[e("div",Ma,h(c(i==null?void 0:i.file)),1),e("div",Ba,h(V(i==null?void 0:i.created_at)),1)])],8,Ua)):J("",!0),ce(i==null?void 0:i.file)==="pdf"?(u(),q("a",{key:3,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:i==null?void 0:i.file},[Fa,e("div",Na,[e("div",Pa,h(c(i==null?void 0:i.file)),1),e("div",Ra,h(V(i==null?void 0:i.created_at)),1)])],8,Ha)):J("",!0),ce(i==null?void 0:i.file)==="word"?(u(),q("a",{key:4,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:i==null?void 0:i.file},[Ya,e("div",Ga,[e("div",Ka,h(c(i==null?void 0:i.file)),1),e("div",Wa,h(V(i==null?void 0:i.created_at)),1)])],8,Ja)):J("",!0),ce(i==null?void 0:i.file)==="excel"?(u(),q("a",{key:5,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:i==null?void 0:i.file},[Xa,e("div",Za,[e("div",es,h(c(i==null?void 0:i.file)),1),e("div",ts,h(V(i==null?void 0:i.created_at)),1)])],8,Qa)):J("",!0),e("div",{onClick:Rs=>Qe(i==null?void 0:i.id),class:"absolute bg-red-500 text-white p-2 flex align-items-center justify-content-center close-btn"},os,8,ls)]))),128))]),t(T)?(u(),q("div",as,[e("input",{onChange:Je,id:"attachInput",class:"float-right file-up-btn",type:"file",placeholder:"+"},null,32),o($,{type:"button",loading:t(Z),onClick:it,label:"Uploads"},null,8,["loading"])])):J("",!0)]}),_:1}),o(je,{header:`Sub Tasks ${(b=t(K))!=null&&b.length?t(K).length:0}`},{default:y(()=>[t(B)?Y((u(),De($,{key:0,icon:"pi pi-plus",label:"Create",onClick:s[10]||(s[10]=re=>{var be;return Q("openCreateSpace",(be=t(a))==null?void 0:be.id,"sub-task")}),class:"mr-2 sub-create",severity:"secondary"},null,512)),[[Be,{value:"Create Sub Task"},void 0,{right:!0}]]):J("",!0),o(Xe,{class:"tree-table",value:t(K),lazy:!0,tableProps:{style:{minWidth:"650px"}},style:{overflow:"auto"}},{empty:y(()=>[ss]),default:y(()=>[o(Ce,{class:"cursor-pointer tone",field:"name",header:"Name",expander:"",style:{width:"45%"}},{body:y(re=>[Y((u(),q("span",{class:"taskTitle",onClick:be=>Q("handleTaskDetailView",re.node)},[ue(h(re.node.data.name),1)],8,is)),[[Be,{value:`${re.node.data.name}`},void 0,{left:!0}]])]),_:1}),o(Ce,{field:"assignee",header:"Assignee",style:{width:"25%"}}),o(Ce,{field:"dueDateValue",header:"Due Date",style:X([{width:"11.5%"},{"text-wrap":"nowrap"}])}),o(Ce,{field:"priority",header:"Priority",style:{width:"10%"}}),o(Ce,{field:"action",header:"Action"},{body:y(re=>[e("div",rs,[o($,{style:{width:"30px",height:"30px","border-radius":"50%"},icon:"pi pi-ellipsis-v",class:"action-dropdown-det-toggle"}),e("div",ds,[o($,{icon:"pi pi-plus",class:"mr-2 ac-btn",severity:"success",onClick:be=>Q("openCreateSpace",re.node.key,"sub-task"),rounded:""},null,8,["onClick"]),o($,{icon:"pi pi-pencil",class:"mr-2 ac-btn",severity:"success",onClick:be=>Q("handleTaskEdit",re.node),rounded:""},null,8,["onClick"]),o($,{icon:"pi pi-cog",class:"mr-2 ac-btn",severity:"info",onClick:be=>Q("handleTaskDetailView",re.node),rounded:""},null,8,["onClick"]),o($,{icon:"pi pi-trash",class:"ac-btn",severity:"warning",rounded:"",onClick:be=>Q("confirmDeleteTask",re.node.key)},null,8,["onClick"])])])]),_:1})]),_:1},8,["value"])]),_:1},8,["header"]),o(je,{header:`Bounce ${((ht=t(Oe))==null?void 0:ht.is_bounce)==="Yes"?"1":""}`},{default:y(()=>[e("div",cs,[e("div",us,[ps,o(z,{onChange:s[11]||(s[11]=re=>p(t(Oe))),disabled:!t(S),modelValue:t(Oe),"onUpdate:modelValue":s[12]||(s[12]=re=>O(Oe)?Oe.value=re:null),options:t(bt),optionLabel:"is_bounce",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["disabled","modelValue","options"])])])]),_:1},8,["header"])]}),_:1})])])])]),e("div",ms,[e("div",null,[e("div",qs,[e("div",fs,[e("div",gs,[t(ge)?(u(),De($,{key:0,onClick:se,label:"↓  Show More",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})):J("",!0)]),t(te)?(u(),q("div",vs,[(u(!0),q(Le,null,He(t(le),b=>(u(),q("ul",{key:b,style:{"margin-left":"-15px","margin-top":"-6px"}},[e("li",{innerHTML:b.title,style:{"font-size":"smaller !important"}},null,8,bs)]))),128)),e("div",hs,[o($,{onClick:$e,label:"↑ Hide",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})])])):J("",!0),(u(!0),q(Le,null,He(t(M),b=>(u(),De(cl,{class:"mb-2",key:b.id},{title:y(()=>[e("div",ks,[b.commentator_image?(u(),q("img",{key:0,class:"mr-2",src:b.commentator_image,alt:"",style:{width:"28px",height:"28px","border-radius":"50%"}},null,8,ys)):(u(),De(dl,{key:1,label:b.commentator_name.charAt(),class:"mr-2 capitalize",size:"small",style:{"background-color":"gray",color:"#ededed","border-radius":"50%"}},null,8,["label"])),e("p",ws,h(b.commentator_name),1)])]),content:y(()=>[c(b==null?void 0:b.file)?(u(),q("div",_s,[e("a",{href:b==null?void 0:b.file,target:"_blank",class:"bg-gray-200 attachment-wrapper cursor-pointer flex align-items-center px-3 py-3 gap-2 comment-file",style:{"background-color":"#f7fafc"}},[Ds,e("div",Ts,[e("div",Ss,h(c(b==null?void 0:b.file)),1)])],8,xs)])):J("",!0),e("p",$s,h(b!=null&&b.comment?b==null?void 0:b.comment:""),1),e("i",Cs,h(at(b.time)),1)]),_:2},1024))),128))]),e("form",{onSubmit:Rt(ot,["prevent"]),class:"comment-add"},[t(Ye)?(u(),q("div",Vs,[e("div",null,[As,ue(),e("span",null,h(t(Tt)),1)]),e("div",{onClick:sl,class:"close-comment"},js)])):J("",!0),e("div",null,[o(ul,{placeholder:"Add comment",modelValue:t(D),"onUpdate:modelValue":s[13]||(s[13]=b=>O(D)?D.value=b:null),rows:"3",cols:"15",class:"border-gray-300 mb-1 comment-text",required:""},null,8,["modelValue"]),e("input",{class:"hidden",type:"file",ref_key:"fileInput",ref:Dt,onChange:ol},null,544),o($,{icon:"pi pi-cloud-upload",onClick:al,"aria-label":"Filter"}),o($,{class:"ml-2",type:"submit",icon:"pi pi-plus",label:"Add",loading:t(w)},null,8,["loading"])])],32)])])])])}}};const ut=l=>(wt("data-v-060a3647"),l=l(),_t(),l),Is={class:"card"},Us={class:"d-flex create-space-btn-wrapper mb-3 mr-2"},zs={class:"breadCrumWrap"},Os=ut(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Ms=ut(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Bs=ut(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Hs=ut(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Fs={class:"text cursor-pointer"},Ns=ut(()=>e("p",null,"Are you sure you want to delete?",-1)),Ps={__name:"index",setup(l){const r=n(Fe("read_task")),v=ye(),x=ye(),{getSingleProject:R,deleteTask:_,getTaskAssignModalData:Z,getTagsAssignModalData:ee,getTaskDetails:ae}=ye(),{singleProject:W,isTaskDeleted:F,tasks:he,kanbanTasks:pe}=Ke(ye()),H=n({}),de=n(!0),me=ct(),G=n(!1),M=n(null),K=mt().query.task_key;console.log(K);const{projects:N}=mt().params,a=n(!1),le=n(null),qe=n(null),we=n(null),P=n([]),Q=n([]),g=n(!1),w=n(!1),T=n(!1),S=async(E,m)=>{E?qe.value=E:qe.value="",m=="sub-task"?we.value="Create Sub Task":we.value="Create Task",a.value=!0,await Z(),P.value=v.users,await ee(),Q.value=x.tags},B=async E=>{M.value=E,document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const m=document.createElement("div");m.style.position="absolute",m.style.top="0",m.style.left="0",m.style.width="100%",m.style.height="100%",m.style.backgroundColor="rgba(0, 0, 0, 0)",m.style.zIndex="1000000",document.documentElement.appendChild(m),await Z(),P.value=v.users,await ee(),Q.value=x.tags,g.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(m)},I=E=>{le.value=E,w.value=!0},ke=async()=>{G.value=!0,await _(le.value,N),F.value===!0?(G.value=!1,me.add({severity:"success",summary:"Successful",detail:"Task Deleted Successfully",group:"br",life:3e3}),w.value=!1):(G.value=!1,me.add({severity:"error",summary:"Error",detail:"Unable to delete task",group:"br",life:3e3}))},ne=async E=>{document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const m=document.createElement("div");m.style.position="absolute",m.style.top="0",m.style.left="0",m.style.width="100%",m.style.height="100%",m.style.backgroundColor="rgba(0, 0, 0, 0)",m.style.zIndex="100000010",document.documentElement.appendChild(m),T.value&&(T.value=!1),await ae(E.key),await Z(),P.value=v.users,await ee(),Q.value=x.tags,T.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(m)};console.log("visibleTaskDetailView",T.value),Ie(T,E=>{if(E===!0)return 0;localStorage.removeItem("taskDetailID")}),(()=>{H.value={global:{value:null,matchMode:Sl.CONTAINS}}})();const k=E=>{a.value=E},Te=E=>{g.value=E},lt=()=>{R(N)};return R(N),Ie(()=>mt().query.task_key,E=>{E&&ne({key:E})}),K&&ne({key:K}),Tl(()=>{de.value=!1}),(E,m)=>{var Se,Ne,ze,Pe;const Ue=pl,fe=ml,_e=Nn,nt=so,Ve=_o,Ae=Ls,We=dt;return u(),q("div",Is,[o(Ue,{position:"bottom-right",group:"br"}),e("div",Us,[e("div",zs,[o(fe,{to:"/",class:"text pi pi-home"}),Os,o(fe,{to:"/companies",class:"text"},{default:y(()=>[ue("Companies")]),_:1}),Ms,o(fe,{to:`/companies/${(Se=t(W))==null?void 0:Se.company_id}`,class:"text"},{default:y(()=>{var C;return[ue("Company - "+h((C=t(W))==null?void 0:C.company_name),1)]}),_:1},8,["to"]),Bs,o(fe,{to:`/companies/${(Ne=t(W))==null?void 0:Ne.company_id}/spaces/${(ze=t(W))==null?void 0:ze.space_id}`,class:"text"},{default:y(()=>{var C;return[ue(" Space - "+h((C=t(W))==null?void 0:C.space_name),1)]}),_:1},8,["to"]),Hs,e("p",Fs,"Project - "+h((Pe=t(W))==null?void 0:Pe.name),1)])]),t(r)?(u(),De(_e,{key:0,kanbanTasks:t(pe),tasks:t(he),onOpenCreateSpace:S,onHandleTaskEdit:m[0]||(m[0]=C=>B(C)),onHandleTaskDetailView:m[1]||(m[1]=C=>ne(C)),onConfirmDeleteTask:m[2]||(m[2]=C=>I(C))},null,8,["kanbanTasks","tasks"])):J("",!0),o(t(pt),{visible:t(a),"onUpdate:visible":m[4]||(m[4]=C=>O(a)?a.value=C:null),modal:"",header:t(we),style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw","330px":"98vw"}},{default:y(()=>[o(nt,{usersLists:t(P),tagsLists:t(Q),taskId:t(qe),projects:t(N),onCloseCreateModal:m[3]||(m[3]=C=>k(C))},null,8,["usersLists","tagsLists","taskId","projects"])]),_:1},8,["visible","header"]),o(t(pt),{visible:t(g),"onUpdate:visible":m[6]||(m[6]=C=>O(g)?g.value=C:null),modal:"",header:"Edit Task",style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:y(()=>[o(Ve,{singleTask:t(M),usersLists:t(P),tagsLists:t(Q),projects:t(N),onCloseEditModal:m[5]||(m[5]=C=>Te(C))},null,8,["singleTask","usersLists","tagsLists","projects"])]),_:1},8,["visible"]),o(t(pt),{visible:t(T),"onUpdate:visible":m[10]||(m[10]=C=>O(T)?T.value=C:null),modal:"",header:" ",style:{width:"90rem",height:"80rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:y(()=>[o(Ae,{usersLists:t(P),tagsLists:t(Q),projID:t(N),onOpenCreateSpace:S,onHandleTaskEdit:m[7]||(m[7]=C=>B(C)),onHandleTaskDetailView:m[8]||(m[8]=C=>ne(C)),onConfirmDeleteTask:m[9]||(m[9]=C=>I(C)),onUpdateTaskTable:lt},null,8,["usersLists","tagsLists","projID"])]),_:1},8,["visible"]),o(t(pt),{visible:t(w),"onUpdate:visible":m[12]||(m[12]=C=>O(w)?w.value=C:null),header:" ",style:{width:"25rem"}},{default:y(()=>[Ns,o(We,{label:"No",icon:"pi pi-times",text:"",onClick:m[11]||(m[11]=C=>w.value=!1)}),o(We,{label:"Yes",icon:"pi pi-check",loading:t(G),text:"",onClick:ke},null,8,["loading"])]),_:1},8,["visible"])])}}},Ji=yt(Ps,[["__scopeId","data-v-060a3647"]]);export{Ji as default};
