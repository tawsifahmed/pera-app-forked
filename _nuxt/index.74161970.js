import pl from"./toast.esm.634bf885.js";import{_ as ml}from"./nuxt-link.d0abc039.js";import xt from"./multiselect.esm.36161fa7.js";import Dt from"./dropdown.esm.cf9b06e9.js";import Tt from"./calendar.esm.bc6c7c9a.js";import gt from"./button.esm.e12394ce.js";import fl from"./inputicon.esm.0dd62b5f.js";import tl from"./inputtext.esm.dcb64235.js";import ql from"./iconfield.esm.722a7c31.js";import vl from"./toolbar.esm.5fecb76c.js";import ll from"./avatar.esm.68c5740e.js";import gl from"./speeddial.esm.83933dc6.js";import nl from"./treetable.esm.dd5a44eb.js";import{a3 as Qe,$ as a,a4 as ht,a9 as wt,aq as $e,a5 as ol,V as Kt,a as Lt,o as p,b as q,i as e,l as s,u as t,a6 as U,e as z,w as k,c as ge,k as Ne,s as M,K as te,t as b,q as me,F as Ue,f as Fe,bm as hl,ca as al,a2 as Ut,a7 as It,a8 as Ot,an as bl,B as kl,_ as yl,D as wl,h as _l,m as A,n as xl,g as Dl,cb as Tl,I as Wt,ab as Sl,P as $l}from"./entry.82b56541.js";import{u as ot,a as _t}from"./cookie.0ffa113a.js";import{d as Cl}from"./vuedraggable.umd.ea176440.js";import{u as ke}from"./company.b1a506d5.js";import{a as Re}from"./usePermission.01e1eb27.js";import Be from"./column.esm.83aae726.js";import zt from"./textarea.esm.b3e1db62.js";import Vl from"./floatlabel.esm.6c80a519.js";import El from"./inputnumber.esm.f03bd4c6.js";import Al from"./confirmpopup.esm.0f211da0.js";import jl from"./tabpanel.esm.7eeec2d7.js";import Ll from"./tabview.esm.5b386553.js";import Ul from"./card.esm.3734fe16.js";import{u as Pt}from"./clock.044f3fd1.js";import{s as Il}from"./basecomponent.esm.cccd55d8.js";import yt from"./dialog.esm.c9ffe19c.js";import"./portal.esm.0a4090af.js";import"./index.esm.326fc4a5.js";import"./baseicon.esm.ba87d652.js";import"./index.esm.3f94c475.js";import"./index.esm.1e913dd5.js";import"./index.esm.9c72a555.js";import"./checkbox.esm.6ed1dd07.js";import"./index.esm.e5315b0b.js";import"./index.esm.35a37b4c.js";import"./index.esm.9244a4de.js";import"./overlayeventbus.esm.1b125fe8.js";import"./virtualscroller.esm.54ce2b95.js";import"./index.esm.361d6dd3.js";import"./index.esm.f3f19f54.js";import"./index.esm.693bb530.js";import"./badge.esm.1c1a7e2f.js";import"./index.esm.fc69c95a.js";import"./paginator.esm.a16e1990.js";import"./index.esm.b4da949b.js";import"./index.esm.5ba86a2a.js";import"./index.esm.843c709b.js";import"./index.esm.ac48bfe1.js";import"./index.esm.a250c091.js";import"./index.esm.c2a6f7d1.js";import"./workCompany.daf19ca3.js";const Ol="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwElEQVR4nO2dTYgcRRTHy/iBBoligicvXgRRUPCgiDBKdl5NcEDD1JuwLBJFmXmv1yWKEslBe8WDOfmJ6N7FgydFvYiC5K4Y1IuKl6DiNzHRg/kYaTeGYVM1sx/VU6+r6g99mqqa/3u/ruqq7p4ppbKysrKysrKysrKysraodp9uBqSXAOlLbeikRh4FPpaTgIqIlwHSa2DojICkj5KCUCVfI38sINGjJCFUZ76ABI+ShLA65vNpAckdJQkBDL8sIKmjDR2GD6tYBMhfBU8oJtwTNNIJAckcJdsTpgUpzY+ODULjAWDDIUQBABsMIRoA2FAIUQHABkKIDgA2DEKUALBBEKIFgA2BEDUAbACE6AGgcAhJAEDBEJIBgEIhJAUABUJIDgAKg5AkABQEIVkAKARC0gBw9vFtOGBpfnQGkAF4Ve4BgSUNQHLxiTcYe3ziDcYen3iDscfn22B3frALkP+0tQXIfwE+fM2k+q39+y8HpB/tfujZ0PF5Vx0GteHDrvbA0GOT/dCiI/m/dhaWdkiIz6vqMLj7/sWdYOi4I5HflGW5zVYPES8Gw986wD0hJT6vqssgID/narPdY7DWMcMFax1D33e7g+2S4vOmugzO4eAqMPy741rwrq0OIH/mAPCItPi8qU6DgPyMYzg508ZHr1/j416Hh69brfISifF5UZ0GOwtLOzTyb462nx8vC8hH7OWGfanxeVHdBrXhQ/ZewL9UU86qTLtX3G4fquio64ItJb4tq26DLSyuBKSf7e3TA1UZQHrH9nm7R3ukx6eaYBCQn3Sc4e+37jtwtTb8z4Wf8REf350BqNXVbTWVtAD4W5vh0Aqnx3dmAB67qEY+4OgFtuHpPY/fm4egsXs8x6YlZHWKWtyqPCkDGFPHcDEtIRr5TeVRGcAFfwjCP0xKSvXLfeVRGcCY5vbxjRrp1MSkGD6oPCoDGBMY/mD6EER/THtmEJVmdYZAn+9Zx/hvvU0RtWYBoCzLbWDoU8sU9JjtHlC1PujsXbpOpaBZANBYPGhfA/AbGulpx3evqBRUN4Bud7DdNf+vVrvVbWn7hZlO7dm3eIOKXXUD0I4zHJA++b8MGHrL0UPeVrGrTgDtvXSt69nw+J1O6A9v0chnLeXOdvp0h4pZdQLQyCuOs/+oUuqiNWU/nNZTolRdAOYmLrqK+bXlAYdtl4fqM2nxeVNdBsG56KLvXM94bVPV/w7Dn2/2yViSAGDCoguQ2O2lmHd72dyz4eQAlI5F17njJ8THr3DVnfRiVvV2xG2DwaWh4/Mu3wbB8EPO9gwfWkf9pQl+KHR83uXboF6d96/YjuplrXUt3Ay97mhjw39VmRwAaRIfn3iDsccn3mDs8Yk3GHt84g3GHp94g7HHJ95g7PGJNxh7fOINxh6feIOxx+f6Te/MDkMndW949wb8PhXKKxgqI93ChE50sLhrvZ6re0LRbJmikV8MD4BF94RazvzzAHrFTXK2sSKJPaH+zYI08qvhk88SISzPch/Jj8InnyVBWA6wnyS9kocjnn3y114TtKEXtOEvwu8xRiF6QhwbxIXSVmZHtc52UhJsAkJOfkAIOfkBIeTkB4SQkx8QQk5+QAg5+SqMzq0TvM7z/wUrLeMdaCtpkwAAAABJRU5ErkJggg==";const zl={class:"filter-wrapper pb-2 mb-1"},Ml={class:"mb-2 relative"},Hl={class:"mb-2 relative"},Bl={class:"flex flex-wrap gap-1"},Nl=e("img",{src:Ol},null,-1),Fl=e("i",{class:"pi pi-search"},null,-1),Rl=e("p",{class:"text-center"},"No data found...",-1),Jl=["onMouseenter"],Yl=["onDblclick"],Gl={class:"task-status"},Kl={key:1},Wl={class:"flex align-items-center"},Pl=["onClick"],Ql=["onMouseenter"],Xl={key:0,class:"flex gap-1 w-full h-full align-items-center"},Zl={class:"flex justify-content-start gap-1"},en=["src"],tn={class:"inline-block"},ln={class:"task-status-2"},nn={key:0,class:"flex align-items-center"},on={key:1},an={class:"flex align-items-center"},sn={class:"relative"},rn={class:"inline-block"},dn={class:"task-status-2"},cn={key:0,class:"flex align-items-center"},un={key:1,class:"pt-1"},pn={key:1},mn={class:"flex align-items-center"},fn=["onMouseover","onMouseleave"],qn=["onClick","onMouseleave"],vn={key:1,class:"main-container"},gn={class:"content"},hn={class:"boardContainer",style:{display:"flex","overflow-x":"auto","align-items":"start"}},bn={class:"column-container"},kn={class:""},yn=["onClick"],wn={class:""},_n={class:"font-semibold truncate text-sm title"},xn={class:"flex align-items-center gap-2 mt-1"},Dn={class:"status text-sm"},Tn={class:"mt-2 flex align-items-center gap-2"},Sn=e("i",{class:"pi pi-user text-lg"},null,-1),$n={class:"flex justify-content-start gap-1"},Cn=["src"],Vn={class:"mt-2 flex align-items-center gap-2"},En=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),An={class:"mt-2 flex align-items-center gap-2"},jn=e("i",{class:"pi pi-flag text-lg"},null,-1),Ln={class:"text-sm"},Un=["onClick"],In=e("p",{class:"mb-1"},"Subtask",-1),On={class:"text-sm font-semibold"},zn=["onClick"],Mn={class:"font-semibold truncate text-sm title"},Hn={class:"truncate text-sm desc"},Bn={class:"flex align-items-center gap-2 mt-1"},Nn={class:"status text-sm"},Fn={class:"mt-2 flex align-items-center gap-2"},Rn=e("i",{class:"pi pi-user text-lg"},null,-1),Jn={class:"flex justify-content-start gap-1"},Yn=["src"],Gn={class:"mt-2 flex align-items-center gap-2"},Kn=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),Wn={class:"mt-2 flex align-items-center gap-2"},Pn=e("i",{class:"pi pi-flag text-lg"},null,-1),Qn={class:"text-sm"},Xn={class:"mt-2 flex align-items-center gap-2"},Zn=e("i",{class:"pi pi-angle-right text-lg"},null,-1),eo={class:"text-sm font-semibold"},to={__name:"TaskTable",props:["kanbanTasks","tasks"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask"],setup(o,{emit:u}){var mt;const _=al(),C=ke(),{getSingleProject:G,getTaskAssignModalData:S,editTask:X}=ke(),{modStatusList:le,singleProject:ce,statuslist:Z,isTaskEdited:F}=Qe(ke()),ne=a(Re("create_task")),K=a(Re("update_task")),se=a(Re("delete_task")),ve=a(Re("download_task")),R=ht(),O=u,W=(mt=wt().params)==null?void 0:mt.projects,J=a(),d=a(),de=a(),oe=a(),ae=a(),Y=a(),P=a({}),y=a(!0),h=a([{name:"All",code:""},{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),D=a([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),V=a({}),fe=a(null),I=m=>{fe.value=m,ue.value!==m&&(H.value={...H.value,[m]:!1},ue.value=null)},ue=a(null),H=a({}),j=a(null),E=a(!1),Je=m=>{j.value=m.data.name;const f=document.getElementById(`inputTaskName${m.key}`);console.log("inputTFunc",f),ue.value=m.key,H.value=Object.keys(H.value).reduce((B,N)=>(B[N]=!1,B),{}),hl(()=>{f&&f.focus()}),H.value={...H.value,[m.key]:!0}},Ie=a(!1);$e(j,(m,f)=>{console.log("newVal",m),console.log("oldVal",f),f!==null&&(Ie.value=!0,console.log("inputChanged",Ie.value))});let L=a(null);const g=m=>{L.value&&(clearTimeout(L.value),L.value=null),L.value=setTimeout(()=>{O("handleTaskDetailView",m),L.value=null},250)},it=m=>{L.value&&(clearTimeout(L.value),L.value=null),Je(m)},qe=async m=>{if(Ie.value!==!0)return R.add({severity:"warn",summary:"Error",detail:"Change task name!",group:"br",life:3e3});await Ae(j.value,m),H.value={...H.value,[m]:!1},j.value=null,ue.value=null,Ie.value=!1},he=m=>{V.value={...V.value,[m]:!0}},Xe=m=>{V.value={...V.value,[m]:!1}},_e=m=>[{label:"Add Sub Task",icon:"pi pi-plus text-white",command:()=>{O("openCreateSpace",m.key,"sub-task")},disabled:!ne},{label:"Edit Task",icon:"pi pi-pencil text-white",command:()=>{O("handleTaskEdit",m)},disabled:!K},{label:"Task Detail",icon:"pi pi-window-maximize text-white",command:()=>{O("handleTaskDetailView",m)}},{label:"Delete Task",icon:"pi pi-trash text-white",command:()=>{O("confirmDeleteTask",m.key)},disabled:!se}],Ye=a(),Oe=a(),xe=a(),Ce=a(),Ve=a(),De=a(),$=a(null),St=()=>{if(J.value||d.value||de.value||Y.value||oe.value||ae.value)J.value="",d.value="",de.value="",Y.value="",oe.value="",ae.value="",Ye.value="",Oe.value="",xe.value="",Ce.value="",Ve.value="",De.value="",ye.value=!1,Ee.value=!1,pe();else return},pe=async()=>{Ye.value=J.value?J.value.map(m=>m.id):"",Oe.value=d.value?d.value.code:"",xe.value=de.value?de.value.id:"",Ce.value=Y.value,Ve.value=oe.value,De.value=ae.value,G(W,Ye.value,Oe.value,xe.value,Ce.value,Ve.value,De.value)},ye=a(!1),Ee=a(!1),Ge=m=>{const f=new Date(m);oe.value=f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate(),ye.value=!0,pe()},$t=m=>{Ee.value=!0;const f=new Date(m);ae.value=f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate(),pe()},st=()=>{ye.value=!1,oe.value="",Ve.value="",pe()},rt=()=>{Ee.value=!1,ae.value="",De.value="",pe()},Ke=a(!1),Ct=m=>{if(Ke.value=!0,console.log("lod",m),m.length>0){const f=`data:text/csv;charset=utf-8,"Serial No.","Task Name","Project","Assignee","Priority","Status","Time Tracked","Due Date","Overdue"
`+m.map((Q,be)=>{const et=be+1,We=Q.data.name,tt=ce.value.name,lt=Q.data.assignee.split(", ").join("; "),He=Q.data.priority?Q.data.priority:"",Pe=Q.data.status.name;let r=Q.data.total_duration;const i=Math.floor(r/3600),l=Math.floor(r%3600/60),n=r%60;i>0?r=`${i} hr ${l} min ${n} sec`:l>0?r=`${l} min ${n} sec`:r=`${n} sec`;const v=Q.data.dueDateValue,w=Q.data.is_overdue?"Yes":"No";return`"${et}","${We}","${tt}","${lt}","${He}","${Pe}","${r}","${v}","${w}"`}).join(`
`),B=encodeURI(f),N=document.createElement("a");N.setAttribute("href",B),N.setAttribute("download","tasks.csv"),document.body.appendChild(N),N.click(),document.body.removeChild(N),Ke.value=!1}else Ke.value=!1,R.add({severity:"error",summary:"Error",detail:"No data found to download",group:"br",life:3e3})},kt=a(!0);ol(async()=>{await G(W),kt.value=!1,Et()});async function dt(m,f){var B;try{const N=ot("token"),{data:Q,pending:be}=await _t(`${_.public.apiUrl}/tasks/update/${f}`,{method:"POST",headers:{Authorization:`Bearer ${N.value}`},body:{status:m==null?void 0:m.id}},"$7UcE4NQ81w");((B=Q.value)==null?void 0:B.app_message)==="success"?(console.log("Status Changed",Q),R.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),await G(W)):R.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(N){console.error("Error fetching data:",N)}}const ct=a(!1),Ae=async(m,f)=>{if(m instanceof Date){ct.value=!0;let B;if(m){const Q=new Date(m);Q.setDate(Q.getDate()+1),B=Q.toISOString()}const N={id:f,dueDate:B?new Date(new Date(B).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,project_id:W};await X(N),F.value===!0?(ct.value=!1,R.add({severity:"success",summary:"Successful",detail:"Due date updated ",group:"br",life:3e3})):(ct.value=!1,R.add({severity:"error",summary:"Error",detail:"Unable to update due date!",group:"br",life:3e3}))}else if(m!=null&&m.name){const B={id:f,priority:m.name,project_id:W};await X(B),F.value===!0?R.add({severity:"success",summary:"Successful",detail:"Priority updated ",group:"br",life:3e3}):R.add({severity:"error",summary:"Error",detail:"Unable to update task priority!",group:"br",life:3e3})}else E.value=!0,await X({id:f,name:m,project_id:W}),F.value===!0?(R.add({severity:"success",summary:"Successful",detail:"Task name updated ",group:"br",life:3e3}),E.value=!1):(R.add({severity:"error",summary:"Error",detail:"Unable to update task name!",group:"br",life:3e3}),E.value=!1)},Ze=a(),Vt=async(m,f)=>{console.log("newDate",m),f.node.data.dueDateValue;const B=new Date(m);B.setHours(23,59,0,0),Ze.value=B,console.log("inlineDueDate",Ze.value);let N=new Date(Ze.value).toLocaleDateString("en-US",{month:"short",day:"2-digit"});console.log("placeHolderValue",N),f.node.data.dueDateValue=N,await Ae(Ze.value,f.node.key)};function ze(){const m="0123456789ABCDEF";let f="#";for(let B=0;B<6;B++)f+=m[Math.floor(Math.random()*10)];return f}function ut(m){return{backgroundColor:ze(),color:"white",borderRadius:"50%",border:"2px solid white"}}const Et=async()=>{await S(),P.value=C.users},Te=a(!0),Me=Kt(()=>({animation:250,group:"tasks",disabled:!Te.value,ghostClass:"ghost"})),pt=Kt(()=>({backgroundColor:"#fff",boxShadow:"0px 2px 2px #e2e2e2",cursor:"grab",padding:"12px 10px",margin:"8px 0px"})),At=(m,f)=>{const{added:B,moved:N,removed:Q}=m;B&&dt(f,m.added.element.key)};return(m,f)=>{const B=xt,N=Dt,Q=Tt,be=gt,et=fl,We=tl,tt=ql,lt=vl,He=ll,Pe=gl,r=nl,i=Lt("tooltip");return p(),q(Ue,null,[e("div",zl,[s(B,{onChange:f[0]||(f[0]=l=>pe()),modelValue:t(J),"onUpdate:modelValue":f[1]||(f[1]=l=>U(J)?J.value=l:null),options:t(P),filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Filter Assignees",maxSelectedLabels:3,class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),s(N,{onChange:f[2]||(f[2]=l=>pe()),modelValue:t(d),"onUpdate:modelValue":f[3]||(f[3]=l=>U(d)?d.value=l:null),options:t(h),optionLabel:"name",placeholder:"Filter Priority",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),s(N,{onChange:f[4]||(f[4]=l=>pe()),modelValue:t(de),"onUpdate:modelValue":f[5]||(f[5]=l=>U(de)?de.value=l:null),options:t(le),optionLabel:"name",placeholder:"Filter Status",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),e("div",Ml,[s(Q,{onDateSelect:f[6]||(f[6]=l=>Ge(l)),modelValue:t(oe),"onUpdate:modelValue":f[7]||(f[7]=l=>U(oe)?oe.value=l:null),placeholder:"Filter Start Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),t(ye)?(p(),q("p",{key:0,onClick:st,class:"pi pi-times absolute cursor-pointer"})):z("",!0)]),e("div",Hl,[s(Q,{onDateSelect:f[8]||(f[8]=l=>$t(l)),modelValue:t(ae),"onUpdate:modelValue":f[9]||(f[9]=l=>U(ae)?ae.value=l:null),placeholder:"Filter End Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),t(Ee)?(p(),q("p",{key:0,onClick:rt,class:"pi pi-times end-cross absolute cursor-pointer"})):z("",!0)]),s(be,{onClick:St,label:"Reset",class:"mr-2 w-full md:w-15rem mb-2",severity:"secondary"})]),s(lt,{class:"border-0 px-0"},{start:k(()=>[e("div",Bl,[t(ne)?(p(),ge(be,{key:0,icon:"pi pi-plus",label:"Create Task",onClick:f[10]||(f[10]=l=>O("openCreateSpace","","task")),class:"mr-2",severity:"secondary"})):z("",!0),e("div",null,[s(be,{icon:"pi pi-list",label:"List",onClick:f[11]||(f[11]=()=>y.value=!0),class:Ne(["table-btn",{"bg-indigo-400 text-white":t(y)}]),severity:"secondary"},null,8,["class"]),s(be,{icon:"pi pi-th-large",label:"Board",onClick:f[12]||(f[12]=()=>y.value=!1),class:Ne(["board-btn",{"bg-indigo-400 text-white":!t(y)}]),severity:"secondary"},null,8,["class"])]),t(ve)?M((p(),ge(be,{key:1,onClick:f[13]||(f[13]=l=>Ct(o.tasks)),loading:t(Ke),style:te(`${t(Ke)===!0?"backGround: red":""}`),class:"excel-export-btn"},{default:k(()=>[Nl]),_:1},8,["loading","style"])),[[i,{value:"Download Tasks"},void 0,{right:!0}]]):z("",!0)])]),end:k(()=>[s(tt,{iconPosition:"right",raised:""},{default:k(()=>[s(et,null,{default:k(()=>[Fl]),_:1}),s(We,{onKeyup:f[14]||(f[14]=l=>pe()),modelValue:t(Y),"onUpdate:modelValue":f[15]||(f[15]=l=>U(Y)?Y.value=l:null),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})]),_:1}),t(y)?(p(),ge(r,{key:0,class:"table-st",stripedRows:"",value:o.tasks,scrollable:"",scrollDirection:"both",lazy:!0,loading:t(kt),tableProps:{style:{minWidth:"650px",width:"100%"}},filterDisplay:"menu",style:{overflow:"auto"}},{empty:k(()=>[Rl]),default:k(()=>[s(t(Be),{field:"name",header:"Name",class:"tone",expander:"",style:{width:"610px"},showAddButton:!0},{body:k(l=>[e("div",{class:"inline-block w-full tasktitle-hover cursor-pointer",onMouseenter:n=>I(l.node.key)},[e("div",{onDblclick:n=>it(l.node),class:"flex w-full relative"},[M((p(),q("div",Gl,[s(N,{class:"mr-1 flex justify-content-center align-items-center",onChange:n=>dt(l.node.data.status,l.node.key),modelValue:l.node.data.status,"onUpdate:modelValue":n=>l.node.data.status=n,options:t(Z),disabled:!t(K),optionLabel:"name"},{value:k(n=>[n.value?(p(),q("div",{key:0,class:"flex align-items-center",style:te({backgroundColor:n.value.color_code})},[e("div",{style:te({backgroundColor:n.value.color_code}),class:"status-bg"},null,4)],4)):(p(),q("span",Kl,b(n.placeholder),1))]),option:k(n=>[e("div",Wl,[e("div",{style:te([{backgroundColor:n.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,b(n.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])),[[i,{value:`${l.node.data.status.name}`},void 0,{top:!0}]]),M((p(),q("span",{onClick:n=>g(l.node),class:"taskTitle cursor-pointer"},[me(b(l.node.data.name),1)],8,Pl)),[[i,{value:`${l.node.data.name}`},void 0,{left:!0}]]),e("span",null,[s(We,{id:`inputTaskName${l.node.key}`,style:te(t(ue)===l.node.key?"display: block;":"display: none;"),class:"inline-task-input",modelValue:t(j),"onUpdate:modelValue":f[16]||(f[16]=n=>U(j)?j.value=n:null),type:"text",placeholder:"Edit task title"},null,8,["id","style","modelValue"])])],40,Yl)],40,Jl)]),_:1}),s(t(Be),{field:"",header:"",style:{width:"75px",padding:"0.75rem .9rem"}},{body:k(l=>[e("div",{class:"w-full h-full flex align-items center",onMouseenter:n=>I(l.node.key)},[t(fe)===l.node.key?(p(),q("div",Xl,[t(H)[l.node.key]?z("",!0):M((p(),ge(be,{key:0,onClick:n=>Je(l.node),severity:"secondary",icon:"pi pi-pencil",class:"w-fit h-fit p-1 ml-auto",style:{"font-size":"0.8rem !important"}},null,8,["onClick"])),[[i,{value:"Edit Name",showDelay:500},void 0,{top:!0}]]),t(H)[l.node.key]?z("",!0):M((p(),ge(be,{key:1,onClick:n=>O("openCreateSpace",l.node.key,"sub-task"),severity:"secondary",icon:"pi pi-plus",class:"w-fit h-fit p-1 ml-auto",style:{"font-size":"0.2rem"}},null,8,["onClick"])),[[i,{value:"Add Sub Task",showDelay:500},void 0,{top:!0}]]),t(H)[l.node.key]?M((p(),ge(be,{key:2,onClick:n=>qe(l.node.key),loading:t(E),severity:"primary",icon:"pi pi-check",class:"p-1 w-full",style:{"font-size":"0.2rem"}},null,8,["onClick","loading"])),[[i,{value:"Update Name"},void 0,{top:!0}]]):z("",!0)])):z("",!0)],40,Ql)]),_:1}),s(t(Be),{field:"assignee",header:"Assignee",style:{width:"250px"}},{body:k(l=>[e("div",Zl,[(p(!0),q(Ue,null,Fe(l.node.data.assigneeObj,(n,v)=>(p(),q("span",{key:v,class:"flex justify-content-center assignee-wrapper",style:te({marginLeft:v>0?"-20px":"0",zIndex:10-v})},[n.image?M((p(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:n.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,en)),[[i,{value:`${n.name}`},void 0,{top:!0}]]):M((p(),ge(He,{key:1,label:n.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:te([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},ut(v)])},null,8,["label","style"])),[[i,{value:`${n.name}`},void 0,{top:!0}]])],4))),128))])]),_:1}),s(t(Be),{field:"status",header:"Status",style:{width:"148px"}},{body:k(l=>[e("div",tn,[e("div",ln,[s(N,{class:"mr-1 flex justify-content-center align-items-center",onChange:n=>dt(l.node.data.status,l.node.key),modelValue:l.node.data.status,"onUpdate:modelValue":n=>l.node.data.status=n,options:t(Z),disabled:!t(K),optionLabel:"name"},{value:k(n=>[n.value?(p(),q("div",nn,[e("div",{style:te({color:n.value.color_code,fontWeight:500}),class:"pt-1"},b(n.value.name),5)])):(p(),q("span",on,b(n.placeholder),1))]),option:k(n=>[e("div",an,[e("div",{style:te([{backgroundColor:n.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,b(n.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])])]),_:1}),s(t(Be),{field:"dueDateValue",header:"Due Date",style:{textWrap:"nowrap",width:"148px"}},{body:k(l=>[e("div",sn,[s(Q,{onDateSelect:n=>Vt(n,l),class:Ne(["inline-calendar cursor-pointer",l.node.data.dueDateColor==="#087641"&&l.node.data.dueDateValue?"green-calendar":l.node.data.dueDateColor==="#b13a41"&&l.node.data.dueDateValue?"red-calendar":""]),placeholder:l.node.data.dueDateValue?l.node.data.dueDateValue:"Set"},null,8,["onDateSelect","class","placeholder"])])]),_:1}),s(t(Be),{field:"priority",header:"Priority",style:{width:"140px"}},{body:k(l=>[e("div",rn,[e("div",dn,[s(N,{class:"mr-1 flex justify-content-center align-items-center",onChange:n=>Ae(l.node.data.priority,l.node.key),modelValue:l.node.data.priority,"onUpdate:modelValue":n=>l.node.data.priority=n,options:t(D),disabled:!t(K),optionLabel:"name",placeholder:"Set Priority"},{value:k(n=>[n.value?(p(),q("div",cn,[n.value.name?(p(),q("div",{key:0,style:te({color:n.value.name==="Low"?"#e1aa1e":n.value.name==="Normal"?"#067bea":n.value.name==="High"?"#ff4928":n.value.name==="Urgent"?"crimson":"",fontWeight:500}),class:"pt-1"},b(n.value.name),5)):(p(),q("div",un,"Set "))])):(p(),q("span",pn,b(n.placeholder),1))]),option:k(n=>[e("div",mn,[e("div",null,b(n.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])])]),_:1}),s(t(Be),{field:"action",header:"Action",style:{width:"73px",position:"relative"}},{body:k(l=>[e("div",{class:"justify-content-start align-items-center webView-action",style:{width:"fit-content"},onMouseover:n=>he(l.node.key),onMouseleave:n=>Xe(l.node.key)},[s(Pe,{visible:t(V)[l.node.key],"onUpdate:visible":n=>t(V)[l.node.key]=n,model:_e(l.node),direction:"left",class:"custom-speed-dial",tooltipOptions:{position:"top"}},null,8,["visible","onUpdate:visible","model"])],40,fn),e("div",{class:"justify-content-start align-items-center tabView-action",style:{width:"fit-content"},onClick:n=>he(l.node.key),onMouseleave:n=>Xe(l.node.key)},[s(Pe,{visible:t(V)[l.node.key],"onUpdate:visible":n=>t(V)[l.node.key]=n,model:_e(l.node),direction:"left",class:"custom-speed-dial",tooltipOptions:{position:"top"}},null,8,["visible","onUpdate:visible","model"])],40,qn)]),_:1})]),_:1},8,["value","loading"])):z("",!0),t(y)?z("",!0):(p(),q("div",vn,[e("div",gn,[e("div",null,[e("div",hn,[(p(!0),q(Ue,null,Fe(o.kanbanTasks,l=>(p(),q("div",{key:l,class:"groupColumnContainer"},[e("div",bn,[e("div",{style:te(`background-color: ${l.statusColor}; `),class:"column-header"},b(l.name)+" - "+b(l.content.length),5),s(t(Cl),{modelValue:l.content,"onUpdate:modelValue":n=>l.content=n,options:t(Me),disabled:!t(K),class:"draggable scrollbar",itemKey:"name",group:"cardItem",onChange:n=>At(n,l.status)},{item:k(({element:n})=>[e("div",kn,[(p(),q("div",{class:"task-card",style:te(t(pt)),key:n.id,onClick:v=>m.$emit("handleTaskDetailView",n,l.content,l.name)},[e("div",wn,[M((p(),q("p",_n,[me(b(n.data.name),1)])),[[i,{value:`${n.data.name}`},void 0,{top:!0}]]),e("div",xn,[e("div",{class:"status-icon",style:te(`background-color:${n.data.status.color_code}`)},null,4),e("p",Dn,b(n.data.status.name),1)]),e("div",Tn,[Sn,e("div",$n,[(p(!0),q(Ue,null,Fe(n.data.assigneeObj,(v,w)=>(p(),q("span",{key:w,class:"flex justify-content-center assignee-wrapper",style:te({marginLeft:w>0?"-20px":"0",zIndex:10-w})},[v.image?M((p(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:v.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Cn)),[[i,{value:`${v.name}`},void 0,{top:!0}]]):M((p(),ge(He,{key:1,label:v.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:te([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},ut(w)])},null,8,["label","style"])),[[i,{value:`${v.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",Vn,[En,e("p",{style:te(`color: ${n.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},b(n.data.dueDateValue),5)]),e("div",An,[jn,e("p",Ln,b(n.data.priority),1)]),e("div",{class:"mt-2 flex align-items-center gap-2 cursor-pointer p-1 rounded hover:bg-gray-100",style:{"border-radius":"5px"},onClick:v=>{v.stopPropagation(),t($)==n.unique_id?$.value=null:$.value=n.unique_id}},[In,e("i",{class:Ne(`pi ${t($)==n.unique_id?"pi-angle-down":"pi-angle-right"}  text-lg`)},null,2),e("p",On,b(n.children.length),1)],8,Un)]),me(" "+b(n.t_name),1)],12,yn)),e("div",{class:Ne(t($)===n.unique_id?"":"hidden")},[(p(!0),q(Ue,null,Fe(n.children,v=>(p(),q("div",{key:v.unique_id,class:"sub-card",onClick:w=>m.$emit("handleTaskDetailView",v,l.content,l.name)},[e("p",Mn,b(v.data.name),1),e("p",Hn,b(v.data.description),1),e("div",Bn,[e("div",{class:"status-icon",style:te(`background-color:${v.data.status.color_code}`)},null,4),e("p",Nn,b(v.data.status.name),1)]),e("div",Fn,[Rn,e("div",Jn,[(p(!0),q(Ue,null,Fe(v.data.assigneeObj,(w,T)=>(p(),q("span",{key:T,class:"flex justify-content-center assignee-wrapper",style:te({marginLeft:T>0?"-20px":"0",zIndex:10-T})},[w.image?M((p(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:w.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Yn)),[[i,{value:`${w.name}`},void 0,{top:!0}]]):M((p(),ge(He,{key:1,label:w.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:te([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},ut(T)])},null,8,["label","style"])),[[i,{value:`${w.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",Gn,[Kn,e("p",{style:te(`color: ${v.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},b(v.data.dueDateValue),5)]),e("div",Wn,[Pn,e("p",Qn,b(v.data.priority),1)]),e("div",Xn,[Zn,e("p",eo,b(v.children.length),1)])],8,zn))),128))],2)])]),_:2},1032,["modelValue","onUpdate:modelValue","options","disabled","onChange"])])]))),128))])])])]))],64)}}};const il=o=>(It("data-v-7ee8e54f"),o=o(),Ot(),o),lo={class:"field flex flex-column"},no={for:"name"},oo=il(()=>e("i",{class:"text-red-400 text-italic"},"*",-1)),ao={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},io={class:"field"},so={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},ro={class:"field"},co={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},uo={class:"field"},po={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},mo={class:"field"},fo={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},qo=il(()=>e("br",null,null,-1)),vo={key:0,class:"text-center",style:{color:"red"}},go={class:"create-btn-wrapper mb-0"},ho={__name:"CreateTask",props:["createTaskTitle","taskId","projects","usersLists","tagsLists"],emits:["closeCreateModal"],setup(o,{emit:u}){const{createTask:_}=ke(),{isTaskCreated:C,detectDuplicateTask:G}=Qe(ke()),{createTaskTitle:S,taskId:X,projects:le,usersLists:ce,tagsLists:Z}=o,F=ht(),ne=a(!1),K=a(X),se=a(!0),ve=a(!1),R=a(!1),O=a(null),re=a(null),W=a(null),J=a(null),d=a(null),de=a(!1),oe=a([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),ae=u,Y=y=>{if(console.log("test druve"),de.value)re.value=y;else{const h=new Date(y);h.setHours(23,59,0,0),re.value=h}};$e(re,(y,h)=>{y&&h&&y!==h&&(de.value=!0)});const P=async()=>{var y,h,D;if(ne.value=!0,O.value===null)R.value=!0,ne.value=!1;else{R.value=!1;let V;if(re.value){const I=new Date(re.value);I.setDate(I.getDate()+1),V=I.toISOString()}const fe={name:O.value,dueDate:V?new Date(new Date(V).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:(y=W.value)==null?void 0:y.map(I=>I.id),tags:(h=J.value)==null?void 0:h.map(I=>I.id),priority:(D=d.value)==null?void 0:D.name,project_id:le,parent_task_id:X};if(V){const I=new Date(V);I.setDate(I.getDate()-1),re.value=I?new Date(I).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await _(fe),G.value===!0?(ne.value=!1,F.add({severity:"error",summary:"Error",detail:"Task already exists!",group:"br",life:3e3})):C.value===!0?(ne.value=!1,se.value=!1,ve.value=!0,O.value=null,ae("closeCreateModal",!1),F.add({severity:"success",summary:"Successful",detail:"Task created Successfully",group:"br",life:3e3})):(ne.value=!1,F.add({severity:"error",summary:"Error",detail:"Unable to create task!",group:"br",life:3e3}))}};return(y,h)=>{const D=tl,V=zt,fe=xt,I=Tt,ue=Dt,H=gt,j=Lt("tooltip");return p(),q("div",null,[s(D,{type:"hidden",modelValue:t(K),"onUpdate:modelValue":h[0]||(h[0]=E=>U(K)?K.value=E:null)},null,8,["modelValue"]),e("div",lo,[e("label",no,[me("Set Task Name"),oo,me(),M(e("span",ao,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(V,{id:"description",class:"border-gray-300",modelValue:t(O),"onUpdate:modelValue":h[1]||(h[1]=E=>U(O)?O.value=E:null),rows:"3",cols:"20",invalid:y.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",io,[e("label",null,[me("Assignees "),M(e("span",so,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(fe,{display:"chip",modelValue:t(W),"onUpdate:modelValue":h[2]||(h[2]=E=>U(W)?W.value=E:null),options:o.usersLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",ro,[e("label",null,[me("Tags "),M(e("span",co,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(fe,{display:"chip",modelValue:t(J),"onUpdate:modelValue":h[3]||(h[3]=E=>U(J)?J.value=E:null),options:o.tagsLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",uo,[e("label",null,[me("Due Date "),M(e("span",po,null,512),[[j,{value:"Set your task due date"},void 0,{right:!0}]])]),s(I,{modelValue:t(re),"onUpdate:modelValue":h[4]||(h[4]=E=>U(re)?re.value=E:null),class:"w-full clndr",placeholder:"Set Due Date",showTime:"",hideOnDateTimeSelect:"",hourFormat:"12",onDateSelect:h[5]||(h[5]=E=>Y(E))},null,8,["modelValue"])]),e("div",mo,[e("label",null,[me("Priority "),M(e("span",fo,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(ue,{modelValue:t(d),"onUpdate:modelValue":h[6]||(h[6]=E=>U(d)?d.value=E:null),options:t(oe),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),qo,t(R)?(p(),q("p",vo,"Please add task name")):z("",!0),e("div",go,[s(H,{label:"Save",icon:"pi pi-check",text:"",onClick:P,loading:t(ne)},null,8,["loading"])])])}}},bo=Ut(ho,[["__scopeId","data-v-7ee8e54f"]]);const at=o=>(It("data-v-31d1b6b7"),o=o(),Ot(),o),ko={class:"position-relative d-flex flex-column justify-content-between w-100 modal-container"},yo={class:"field flex flex-column"},wo=at(()=>e("label",{for:"name"},[me("Edit Task Name"),e("i",{class:"text-red-400 text-italic"},"*")],-1)),_o={class:"field"},xo=at(()=>e("label",null,"Assignees",-1)),Do={class:"field"},To=at(()=>e("label",null,"Tags",-1)),So={class:"field"},$o=at(()=>e("label",null,"Due Date",-1)),Co={class:"field"},Vo=at(()=>e("label",null,"Priority",-1)),Eo=at(()=>e("br",null,null,-1)),Ao={key:0,class:"text-center",style:{color:"red"}},jo={class:"create-btn-wrapper mb-0"},Lo={__name:"EditTask",props:["singleTask","usersLists","tagsLists","projects"],emits:["closeEditModal"],setup(o,{emit:u}){var oe,ae,Y,P,y;const{editTask:_}=ke(),{isTaskEdited:C,detectDuplicateTask:G}=Qe(ke()),{singleTask:S,usersLists:X,tagsLists:le,projects:ce}=o,Z=ht(),F=a(!1),ne=a((oe=S==null?void 0:S.data)==null?void 0:oe.name),K=a((ae=S==null?void 0:S.data)!=null&&ae.dueDate?new Date(S.data.dueDate).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),se=a(!1),ve=a(null);ve.value=(Y=S==null?void 0:S.data)!=null&&Y.assigneeObj?(P=S==null?void 0:S.data)==null?void 0:P.assigneeObj.map(h=>({id:h.id,name:h.name})):"";const R=a((y=S==null?void 0:S.data)==null?void 0:y.tagsObj),O=a(null);O.value=S.data.priority?{name:S.data.priority.name,code:S.data.priority.code}:"";const re=a([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),W=a(!1),J=u,d=h=>{if(console.log("test druve"),se.value)K.value=h;else{const D=new Date(h);D.setHours(23,59,0,0),K.value=D}};$e(K,(h,D)=>{h&&D&&h!==D&&(se.value=!0)});const de=async()=>{if(F.value=!0,ne.value===null)W.value=!0,F.value=!1;else{W.value=!1;let h;if(K.value){const V=new Date(K.value);V.setDate(V.getDate()+1),h=V.toISOString()}const D={id:S.key,name:ne.value,priority:O.value.name,dueDate:h?new Date(new Date(h).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:ve.value.map(V=>V.id),tags:R.value.map(V=>V.id),project_id:ce};if(h){const V=new Date(h);V.setDate(V.getDate()-1),K.value=V?new Date(V).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await _(D),G.value===!0?(F.value=!1,Z.add({severity:"error",summary:"Error",detail:"Cannnot edit, edited task name already exists!",group:"br",life:3e3})):C.value===!0?(F.value=!1,J("closeEditModal",!1),J("visibleEdit","visibleEdit"),Z.add({severity:"success",summary:"Successful",detail:"Task updated Successfully",group:"br",life:3e3})):(F.value=!1,Z.add({severity:"error",summary:"Error",detail:"Unable to update task!",group:"br",life:3e3}))}};return(h,D)=>{const V=zt,fe=xt,I=Tt,ue=Dt,H=gt;return p(),q("div",ko,[e("div",null,[e("div",yo,[wo,s(V,{id:"description",class:"border-gray-300",modelValue:t(ne),"onUpdate:modelValue":D[0]||(D[0]=j=>U(ne)?ne.value=j:null),rows:"3",cols:"15",invalid:h.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",_o,[xo,s(fe,{display:"chip",modelValue:t(ve),"onUpdate:modelValue":D[1]||(D[1]=j=>U(ve)?ve.value=j:null),options:o.usersLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",Do,[To,s(fe,{display:"chip",modelValue:t(R),"onUpdate:modelValue":D[2]||(D[2]=j=>U(R)?R.value=j:null),options:o.tagsLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",So,[$o,s(I,{modelValue:t(K),"onUpdate:modelValue":D[3]||(D[3]=j=>U(K)?K.value=j:null),class:"w-full",placeholder:"Set Due Date",showTime:"",hideOnDateTimeSelect:"",hourFormat:"12",onDateSelect:D[4]||(D[4]=j=>d(j))},null,8,["modelValue"])]),e("div",Co,[Vo,s(ue,{modelValue:t(O),"onUpdate:modelValue":D[5]||(D[5]=j=>U(O)?O.value=j:null),options:t(re),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),Eo,t(W)?(p(),q("p",Ao,"Please add/fill/check up all the fields ")):z("",!0),e("div",jo,[s(H,{label:"Update",icon:"pi pi-check",text:"",onClick:de,loading:t(F)},null,8,["loading"])])])])}}},Uo=Ut(Lo,[["__scopeId","data-v-31d1b6b7"]]),Qt=bl("fileUpload",()=>{const o=a(!1),u=a(!1),_=a(!1);async function C(S,X){u.value=!0;const le=new FormData;le.append("task_id",S),le.append("attachments",X);const ce=ot("token");try{const Z=await fetch("https://pbe.singularitybd.net/api/v1/tasks/attachment-upload",{method:"POST",headers:{Authorization:`Bearer ${ce.value}`},body:le});if(!Z.ok)throw new Error("Network response was not ok");const F=await Z.json();console.log("upload data =>",F),(F==null?void 0:F.user_message)==="success"?o.value=!0:o.value=!1,u.value=!1}catch(Z){console.error("Error uploading file:",Z),o.value=!1,u.value=!1}}async function G(S){const X=ot("token");try{const le=await fetch(`https://pbe.singularitybd.net/api/v1/tasks/attachment-delete/${S}`,{method:"DELETE",headers:{Authorization:`Bearer ${X.value}`}});if(!le.ok)throw new Error("Network response was not ok");const ce=await le.json();console.log("delete data =>",ce),(ce==null?void 0:ce.user_message)==="success"?_.value=!0:_.value=!1}catch(le){console.error("Error uploading file:",le),_.value=!1}}return{fileUpload:C,fileDelete:G,isFileUpload:o,isLoading:u,isFileDeleted:_}});var Io=`
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
`,Oo={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},Xt=kl.extend({name:"editor",css:Io,classes:Oo}),zo={name:"BaseEditor",extends:Il,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Xt,provide:function(){return{$parentInstance:this}},beforeMount:function(){var u;Xt.loadStyle({nonce:(u=this.$primevue)===null||u===void 0||(u=u.config)===null||u===void 0||(u=u.csp)===null||u===void 0?void 0:u.nonce})}};function vt(o){"@babel/helpers - typeof";return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},vt(o)}function Zt(o,u){var _=Object.keys(o);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(o);u&&(C=C.filter(function(G){return Object.getOwnPropertyDescriptor(o,G).enumerable})),_.push.apply(_,C)}return _}function Mo(o){for(var u=1;u<arguments.length;u++){var _=arguments[u]!=null?arguments[u]:{};u%2?Zt(Object(_),!0).forEach(function(C){Ho(o,C,_[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(_)):Zt(Object(_)).forEach(function(C){Object.defineProperty(o,C,Object.getOwnPropertyDescriptor(_,C))})}return o}function Ho(o,u,_){return u=Bo(u),u in o?Object.defineProperty(o,u,{value:_,enumerable:!0,configurable:!0,writable:!0}):o[u]=_,o}function Bo(o){var u=No(o,"string");return vt(u)=="symbol"?u:String(u)}function No(o,u){if(vt(o)!="object"||!o)return o;var _=o[Symbol.toPrimitive];if(_!==void 0){var C=_.call(o,u||"default");if(vt(C)!="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)}var el=function(){try{return window.Quill}catch{return null}}(),sl={name:"Editor",extends:zo,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(u,_){u!==_&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(u))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var u=this,_={modules:Mo({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};el?(this.quill=new el(this.$refs.editorElement,_),this.initQuill(),this.handleLoad()):yl(()=>import("./quill.98086aca.js").then(C=>C.q),["./quill.98086aca.js","./vuedraggable.umd.ea176440.js","./entry.82b56541.js","./entry.5d0b2de3.css"],import.meta.url).then(function(C){C&&wl.isExist(u.$refs.editorElement)&&(C.default?u.quill=new C.default(u.$refs.editorElement,_):u.quill=new C(u.$refs.editorElement,_),u.initQuill())}).then(function(){u.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(u){this.quill&&(u?this.quill.setContents(this.quill.clipboard.convert(u)):this.quill.setText(""))},initQuill:function(){var u=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(_,C,G){if(G==="user"){var S=u.$refs.editorElement.children[0].innerHTML,X=u.quill.getText().trim();S==="<p><br></p>"&&(S=""),u.$emit("update:modelValue",S),u.$emit("text-change",{htmlValue:S,textValue:X,delta:_,source:G,instance:u.quill})}}),this.quill.on("selection-change",function(_,C,G){var S=u.$refs.editorElement.children[0].innerHTML,X=u.quill.getText().trim();u.$emit("selection-change",{htmlValue:S,textValue:X,range:_,oldRange:C,source:G,instance:u.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Fo(o,u,_,C,G,S){return p(),q("div",A({class:o.cx("root")},o.ptmi("root")),[e("div",A({ref:"toolbarElement",class:o.cx("toolbar")},o.ptm("toolbar")),[_l(o.$slots,"toolbar",{},function(){return[e("span",A({class:"ql-formats"},o.ptm("formats")),[e("select",A({class:"ql-header",defaultValue:"0"},o.ptm("header")),[e("option",A({value:"1"},o.ptm("option")),"Heading",16),e("option",A({value:"2"},o.ptm("option")),"Subheading",16),e("option",A({value:"0"},o.ptm("option")),"Normal",16)],16),e("select",A({class:"ql-font"},o.ptm("font")),[e("option",xl(Dl(o.ptm("option"))),null,16),e("option",A({value:"serif"},o.ptm("option")),null,16),e("option",A({value:"monospace"},o.ptm("option")),null,16)],16)],16),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-bold",type:"button"},o.ptm("bold")),null,16),e("button",A({class:"ql-italic",type:"button"},o.ptm("italic")),null,16),e("button",A({class:"ql-underline",type:"button"},o.ptm("underline")),null,16)],16),(p(),q("span",A({key:G.reRenderColorKey,class:"ql-formats"},o.ptm("formats")),[e("select",A({class:"ql-color"},o.ptm("color")),null,16),e("select",A({class:"ql-background"},o.ptm("background")),null,16)],16)),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-list",value:"ordered",type:"button"},o.ptm("list")),null,16),e("button",A({class:"ql-list",value:"bullet",type:"button"},o.ptm("list")),null,16),e("select",A({class:"ql-align"},o.ptm("select")),[e("option",A({defaultValue:""},o.ptm("option")),null,16),e("option",A({value:"center"},o.ptm("option")),null,16),e("option",A({value:"right"},o.ptm("option")),null,16),e("option",A({value:"justify"},o.ptm("option")),null,16)],16)],16),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-link",type:"button"},o.ptm("link")),null,16),e("button",A({class:"ql-image",type:"button"},o.ptm("image")),null,16),e("button",A({class:"ql-code-block",type:"button"},o.ptm("codeBlock")),null,16)],16),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-clean",type:"button"},o.ptm("clean")),null,16)],16)]})],16),e("div",A({ref:"editorElement",class:o.cx("content"),style:o.editorStyle},o.ptm("content")),null,16)],16)}sl.render=Fo;const Ro={class:"grid"},Jo={class:"col-12 flex justify-content-between"},Yo={class:"m-0 detail-task-name cursor-pointer"},Go={class:"flex gap-1"},Ko=e("h5",{class:"m-0 ml-2"},"Activity",-1),Wo={class:"col-12 lg:col-7"},Po={class:"task-wrapper card"},Qo={class:"task-det no-scrollbar"},Xo={class:"flex justify-content-between gap-2 flex-wrap align-items-center"},Zo={class:"w-full lg:w-fit"},ea={class:"flex justify-content-between gap-2 flex-wrap align-items-centertask-detail-wrapper"},ta=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-user"}),e("p",null,"Assignee:")],-1),la={class:"flex mt-2 justify-content-between gap-2 align-items-center task-detail-wrapper"},na=e("div",{class:"flex justify-content-start gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-calendar"}),e("p",{class:"text-nowrap"},"Due Date:")],-1),oa={class:"w-full lg:w-fit"},aa={class:"flex justify-content-between gap-2 align-items-center task-detail-wrapper"},ia=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",null,"Status:")],-1),sa={class:"flex mt-2 justify-content-start gap-6 align-items-center task-detail-wrapper"},ra=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-stopwatch"}),e("p",{class:"text-nowrap"},"Track Time:")],-1),da={class:"clock-wrapper relative"},ca={class:"border-round px-2 pt-3 pb-2"},ua={class:"flex justify-content-center align-items-center gap-3 manual-wrapper -mt-1"},pa=e("label",{for:"hours",class:"block mb-2 text-xs"},"Hours",-1),ma=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),fa=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),qa=e("label",{for:"minutes",class:"block mb-2 text-xs"},"Minutes",-1),va=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),ga=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),ha={class:"flex justify-content-center align-items-center",style:{"margin-top":"0.49rem !important"}},ba=e("div",null,null,-1),ka={class:"flex justify-content-between gap-2 align-items-centertask-detail-wrapper mt-3",style:{width:"100%"}},ya=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property",style:{width:"10%"}},[e("span",{class:"pi pi-tags"}),e("p",null,"Tags:")],-1),wa={class:"field mt-3 flex flex-column"},_a=e("div",{class:"flex justify-content-start gap-2 align-items-center mb-1 task-detail-property"},[e("span",{class:"pi pi-sliders-h"}),e("p",null,"Description:")],-1),xa={class:"ql-formats flex justify-content-end mr-0"},Da={class:"ql-bold"},Ta={class:"ql-italic"},Sa={class:"ql-underline"},$a={class:"ql-strike"},Ca=e("span",{class:"ql-formats"},[e("select",{class:"ql-color"}),e("select",{class:"ql-background"})],-1),Va=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"ordered"},null,-1),Ea=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"bullet"},null,-1),Aa=e("button",{class:"ql-link",type:"button","data-pc-section":"link"},null,-1),ja={key:0,class:"flex justify-content-end"},La={class:"m-0"},Ua={class:"my-3 attach-sec flex align-items-center justify-content-start gap-2",style:{"overflow-x":"scroll"}},Ia={key:0,class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-5 attch-w",style:{"background-color":"#f7fafc"}},Oa=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),za=e("div",{class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},[e("div",{class:"text-xs"},"asdasd....asdme.extng"),e("div",{class:"text-xs"},"9 MAy, 2024")],-1),Ma=[Oa,za],Ha=["href"],Ba=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),Na={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Fa={class:"text-xs"},Ra={class:"text-xs"},Ja=["href"],Ya=["src"],Ga={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Ka={class:"text-xs"},Wa={class:"text-xs"},Pa=["href"],Qa=e("div",{class:"pi pi-video text-6xl attach-icon"},null,-1),Xa={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Za={class:"text-xs"},ei={class:"text-xs"},ti=["href"],li=e("div",{class:"pi pi-file-pdf text-6xl text-danger attach-icon"},null,-1),ni={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},oi={class:"text-xs"},ai={class:"text-xs"},ii=["href"],si=e("div",{class:"pi pi-file-word text-6xl text-blue attach-icon"},null,-1),ri={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},di={class:"text-xs"},ci={class:"text-xs"},ui=["href"],pi=e("div",{class:"pi pi-file-excel text-6xl attach-icon",style:{color:"#04aa6d"}},null,-1),mi={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},fi={class:"text-xs"},qi={class:"text-xs"},vi=["onClick"],gi=e("i",{class:"pi pi-times text-xs text-white"},null,-1),hi=[gi],bi={key:0,class:"flex gap-2 w-full justify-content-center"},ki=e("p",{class:"text-center"},"No Data found...",-1),yi=["onClick"],wi={class:"action-dropdown-det"},_i={class:"action-dropdown-content-det"},xi={class:"card"},Di={class:"flex justify-content-start align-items-center task-detail-wrapper"},Ti=e("div",{class:"flex justify-content-start gap-2 align-items-center bounce-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",{class:"text-nowrap"},"Bounce Status:")],-1),Si={class:"col-12 lg:col-5"},$i={class:"comment-wrapper card no-scrollbar"},Ci={class:"comments no-scrollbar"},Vi={class:"my-2 text-surface-800"},Ei={key:0},Ai=["innerHTML"],ji={class:"my-2 text-surface-800"},Li={class:"flex justify-content-start align-items-center"},Ui=["src"],Ii={class:"text-lg"},Oi={key:0,class:"flex justify-content-start my-2"},zi=["href"],Mi=e("div",{class:"pi pi-file"},null,-1),Hi={class:"attach-detail flex flex-column justify-content-center align-items-center"},Bi={class:"text-xs"},Ni={class:"m-0 ml-1",style:{"font-size":"0.9rem"}},Fi={style:{"line-height":"0"},class:"pb-1 float-right mt-3 mb-2"},Ri={key:0,class:"text-sm font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-itens-center mb-1 relative"},Ji=e("span",{class:"pi pi-file-import mr-2"},null,-1),Yi=e("i",{class:"pi pi-times"},null,-1),Gi=[Yi],Ki={__name:"TaskDetail",props:["usersLists","tagsLists","projID"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask","updateTaskTable"],setup(o,{emit:u}){var et,We,tt,lt,He,Pe;const _=al(),{fileUpload:C,fileDelete:G}=Qt(),{isFileUpload:S,isLoading:X,isFileDeleted:le}=Qe(Qt()),{getTaskTimerData:ce,setManualTime:Z,storeTaskTimer:F}=Pt();Qe(Pt());const{editTask:ne,addTaskComment:K,getTaskDetails:se,getSingleProject:ve}=ke(),{isTaskEdited:R,isTaskCommentCreated:O,singleTaskComments:re,subTasks:W,taskStatus:J,taskDetails:d,taskActivity:de}=Qe(ke());localStorage.setItem("taskDetailID",JSON.stringify(d.value.id));const{usersLists:oe,tagsLists:ae,projID:Y}=o,P=u,y=ht(),h=a(!1),D=a(Re("update_task")),V=a(Re("edit_bounce")),fe=a(Re("create_task")),I=a(null);I.value=(We=(et=d.value)==null?void 0:et.assignee)==null?void 0:We.map(r=>({id:r.id,name:r.name}));const ue=a(!1);$e(I,r=>{ue.value=!0});const H=a((lt=(tt=d.value)==null?void 0:tt.tags)==null?void 0:lt.map(r=>({id:r.id,name:r.name}))),j=a(!1);$e(H,r=>{j.value=!0});const E=a((He=d.value)!=null&&He.due_date?new Date(d.value.due_date).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),Je=a(!1),Ie=r=>{if(console.log("test druve"),Je.value)E.value=r;else{const i=new Date(r);i.setHours(23,59,0,0),E.value=i}};$e(E,(r,i)=>{r&&i&&r!==i&&(Je.value=!0)});const L=a(E.value);$e(E,(r,i)=>{r&&(L.value=new Date(r).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase())});const g=a(),it=Tl(),qe=a(null),he=a(null),Xe=a(!1),_e=a(!1),Ye=async r=>{var l,n;_e.value=!0;let i;if(qe.value>0||he.value>0){i=qe.value*3600+he.value*60,console.log("totalSeconds",i);const v=await Z((l=d.value)==null?void 0:l.id,i);(v==null?void 0:v.code)===200?(await se((n=d.value)==null?void 0:n.id),_e.value=!1,y.add({severity:"success",summary:"Duration Added",detail:`Duration: ${qe.value?qe.value:0} hours and ${he.value?he.value:0} minutes`,group:"br",life:3e3}),qe.value=null,he.value=null,r()):(_e.value=!1,y.add({severity:"error",summary:"Error",detail:"Unable to add duration",group:"br",life:3e3})),console.log("responseData",v)}else _e.value=!1,y.add({severity:"error",summary:"Error",detail:"Please add duration",group:"br",life:3e3});i=null},Oe=r=>{var i;console.log(r.detail),r.detail===3&&((i=d.value)==null?void 0:i.is_timer_start)==="false"&&it.require({target:r.currentTarget,group:"headless",message:"Set task duration:",accept:()=>{y.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{}})},xe=a("00:00:00");let Ce=null;const Ve=async()=>{var r,i,l,n,v,w,T,we,je,Se;if(d.value.id,console.log("taskDetails",d.value),((r=d.value)==null?void 0:r.is_timer_start)==="false"){await ce("start",(i=d.value)==null?void 0:i.id),await se((l=d.value)==null?void 0:l.id),De(),localStorage.setItem("storeTaskID",JSON.stringify((n=d.value)==null?void 0:n.id)),localStorage.setItem("storeTaskProjectID",JSON.stringify(Number(Y))),localStorage.setItem("storeTaskSpaceID",JSON.stringify((v=d.value)==null?void 0:v.project.space_id)),localStorage.setItem("storeTaskCompanyID",JSON.stringify((w=d.value)==null?void 0:w.project.company_id)),localStorage.setItem("storeTaskTimerStartTime",JSON.stringify(d.value.taskTimer.start_time));let nt={task_id:d.value.id,project_id:Y,space_id:d.value.project.space_id,company_id:d.value.project.company_id,timerStartTime:d.value.taskTimer.start_time};await F(nt),y.add({severity:"success",summary:"Task Timer",detail:"Timer Started",group:"br",life:3e3}),await ve(Y)}else await ce("stop",(T=d.value)==null?void 0:T.id,(je=(we=d.value)==null?void 0:we.taskTimer)==null?void 0:je.id),await se((Se=d.value)==null?void 0:Se.id),$(),localStorage.removeItem("storeTaskID"),localStorage.removeItem("storeTaskProjectID"),localStorage.removeItem("storeTaskSpaceID"),localStorage.removeItem("storeTaskCompanyID"),localStorage.removeItem("storeTaskTimerStartTime"),await F({task_id:null,project_id:null,space_id:null,company_id:null}),y.add({severity:"success",summary:"Task Timer",detail:"Timer Stopped",group:"br",life:3e3}),await ve(Y)},De=()=>{d.value.id,console.log("taskDetails.value.taskTimer.start_time",d.value.taskTimer.start_time);const r=new Date(d.value.taskTimer.start_time).getTime();Ce=setInterval(()=>{const i=Math.floor((Date.now()-r)/1e3);xe.value=pt(i)},1e3)},$=()=>{clearInterval(Ce),xe.value=pt(d.value.total_duration)},St=a([{is_bounce:"No"},{is_bounce:"Yes"}]),pe=a(),ye=a(((Pe=d.value)==null?void 0:Pe.description)||" "),Ee=a(!1);$e(ye,r=>{r.length===0&&(ye.value=" "),Ee.value=!0});const Ge=a(null),$t=a(),st=a(!0),rt=a(!1),Ke=()=>{rt.value=!0,st.value=!1},Ct=()=>{rt.value=!1,st.value=!0},kt=async()=>{var r;h.value=!0,await K((r=d.value)==null?void 0:r.id,Ge.value,m.value),O.value===!0?(y.add({severity:"success",summary:"Successful",detail:"Comment added Successfully",group:"br",life:3e3}),Ge.value=null,h.value=!1,m.value=null):(y.add({severity:"error",summary:"Error",detail:"Unable to add comment",group:"br",life:3e3}),h.value=!1)},dt=r=>{const i=new Date(r),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i.getMonth()],v=i.getDate(),w=i.getFullYear().toString().substr(-2),T=i.getHours(),we=i.getMinutes(),je=T>=12?"PM":"AM",Se=T%12||12,nt=we<10?"0"+we:we;return`${v} ${n}'${w}, ${Se}:${nt}${je}`},ct=async()=>{var n,v;let r;if(E.value){const w=new Date(E.value);w.setDate(w.getDate()+1),r=w.toISOString()}console.log("checkDate",L.value);const i=new Date((n=d.value)==null?void 0:n.due_date).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});console.log("formattedDueDate",i);const l={id:(v=d.value)==null?void 0:v.id,...Ee.value===!0?{description:ye.value}:{},project_id:Y,...L.value!==i?{dueDate:r?new Date(new Date(r).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null}:{},...ue.value===!0?{assignees:I.value.map(w=>w.id)}:{},...j.value===!0?{tags:H.value.map(w=>w.id)}:{}};if(r){const w=new Date(r);w.setDate(w.getDate()-1),E.value=w?new Date(w).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await ne(l),R.value===!0?(y.add({severity:"success",summary:"Successful",detail:"Task detail updated",group:"br",life:3e3}),$t.value=null,Ee.value===!0&&(Ee.value=!1,console.log("isDescriptionEdited Flagged")),ue.value===!0&&(ue.value=!1,console.log("isAsigneeEdited Flagged")),j.value===!0&&(j.value=!1,console.log("isTagsEdited Flagged"))):y.add({severity:"error",summary:"Error",detail:"Unable to upadte task detail",group:"br",life:3e3})},Ae=a(null),Ze=r=>{Ae.value=r.target.files[0]},Vt=async()=>{var r,i;Ae.value&&console.log("file =>",Ae.value),await C((r=d.value)==null?void 0:r.id,Ae.value),S.value===!0?(y.add({severity:"success",summary:"Successfull",detail:"File Upload successfully!",group:"br",life:3e3}),se((i=d.value)==null?void 0:i.id),document.getElementById("attachInput").value=null,Ae.value=null):y.add({severity:"error",summary:"Error",detail:"Unable to upload file!",group:"br",life:3e3})},ze=r=>{const i=["jpg","JPG","jpeg","png","gif","bmp","svg","webp","ico","tiff","tif","heic","heif"],l=["mp4","avi","flv","wmv","mov","3gp","mkv"],n=["pdf","PDF","ppt","pptx"],v=["doc","docx","rtf"],w=["xls","xlsx","csv"];return i.some(T=>r.endsWith("."+T))?"image":l.some(T=>r.endsWith("."+T))?"video":n.some(T=>r.endsWith("."+T))?"pdf":v.some(T=>r.endsWith("."+T))?"word":w.some(T=>r.endsWith("."+T))?"excel":"file"};ol(async()=>{var l,n;await se((l=d.value)==null?void 0:l.id);const r={name:d.value.status_name,code:d.value.status};g.value=r;const i={is_bounce:d.value.is_bounce};pe.value=i,((n=d.value)==null?void 0:n.is_timer_start)==="true"&&De()});async function ut(r){var i,l,n;try{const v=ot("token"),{data:w,pending:T}=await _t(`${_.public.apiUrl}/tasks/update/${(i=d.value)==null?void 0:i.id}`,{method:"POST",headers:{Authorization:`Bearer ${v.value}`},body:{status:r.code}},"$nwfJLeTGBC");((l=w.value)==null?void 0:l.app_message)==="success"?(se((n=d.value)==null?void 0:n.id),y.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),P("updateTaskTable")):y.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(v){console.error("Error fetching data:",v)}}async function Et(r){var i,l,n;try{const v=ot("token"),{data:w,pending:T}=await _t(`${_.public.apiUrl}/tasks/update/${(i=d.value)==null?void 0:i.id}`,{method:"POST",headers:{Authorization:`Bearer ${v.value}`},body:{is_bounce:r.is_bounce}},"$np1kf0qdb3");console.log("dataBO",w),((l=w.value)==null?void 0:l.app_message)==="success"?(se((n=d.value)==null?void 0:n.id),y.add({severity:"success",summary:"Successfull",detail:"Bounce Status Changed",group:"br",life:3e3})):y.add({severity:"error",summary:"Error",detail:"Unable to change bounce status",group:"br",life:3e3})}catch(v){console.error("Error fetching data:",v)}}const Te=r=>{const l=r.split("/");return l[l.length-1]},Me=r=>{const i=["Jan","Feb","Mar","Apr","MAy","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=r,n=new Date(l),v={year:"numeric",month:"long",day:"numeric"},T=n.toLocaleDateString("en-US",v).split(" "),we=i.indexOf(T[0]);return we!==-1&&(T[0]=i[we]),T.join(" ")};function pt(r){const i=Math.floor(r/3600).toString().padStart(2,"0"),l=Math.floor(r%3600/60).toString().padStart(2,"0"),n=(r%60).toString().padStart(2,"0");return`${i}:${l}:${n}`}const At=async r=>{var i;await G(r),le.value===!0?(y.add({severity:"success",summary:"Successful",detail:"File Deleted successfully!",group:"br",life:3e3}),se((i=d.value)==null?void 0:i.id)):y.add({severity:"error",summary:"Error",detail:"Unable to delete file!",group:"br",life:3e3})},mt=a(null),m=a(null),f=a(""),B=r=>{m.value=r.target.files[0],f.value=m.value?m.value.name:""},N=()=>{mt.value.click()},Q=async()=>{m.value=null},be=async()=>{var v;const r=ot("token"),{data:i,pending:l,error:n}=await _t(`${_.public.apiUrl}/tasks/share/${(v=d.value)==null?void 0:v.id}`,{method:"GET",headers:{Authorization:`Bearer ${r.value}`}},"$yuqoLxhdIO");if(n.value){y.add({severity:"error",summary:"Error",detail:"Failed to share",life:3e3});return}else{const w=document.createElement("textarea");w.value=i.value.shared_web_link,document.body.appendChild(w),w.select(),document.execCommand("copy"),document.body.removeChild(w),y.add({severity:"success",summary:"Share successful",detail:"Shared link copied",group:"br",life:3e3});return}};return(r,i)=>{var Mt,Ht,Bt,Nt,Ft;const l=xt,n=Vl,v=Dt,w=El,T=gt,we=Al,je=jl,Se=Be,nt=nl,rl=Ll,dl=ll,cl=Ul,ul=zt,Le=Lt("tooltip");return p(),q("div",Ro,[e("div",Jo,[M((p(),q("h5",Yo,[me(b(t(d).name),1)])),[[Le,{value:`${t(d).name}`,pt:{width:"200px"}},void 0,{top:!0}]]),e("div",Go,[M(e("span",{onClick:be,class:"pi pi-share-alt my-auto cursor-pointer ml-2 share-btn"},null,512),[[Le,{value:"Share Task"},void 0,{top:!0}]]),Ko])]),e("div",Wo,[e("div",null,[e("div",Po,[e("div",Qo,[e("form",{onSubmit:Wt(ct,["prevent"]),class:"mt-2 task-detail ml-2"},[e("div",Xo,[e("div",Zo,[e("div",ea,[ta,s(n,{style:{width:"164.94px"},class:"input-fields"},{default:k(()=>[s(l,{display:"chip",modelValue:t(I),"onUpdate:modelValue":i[0]||(i[0]=x=>U(I)?I.value=x:null),filter:"",resetFilterOnHide:"",options:o.usersLists,optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:2,class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",la,[na,s(n,{class:"input-fields"},{default:k(()=>[s(t(Tt),{style:"width: 164.94px; border-radius:7px",modelValue:t(E),"onUpdate:modelValue":i[1]||(i[1]=x=>U(E)?E.value=x:null),placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:i[2]||(i[2]=x=>Ie(x))},null,8,["modelValue"])]),_:1})])]),e("div",oa,[e("div",aa,[ia,s(v,{onChange:i[3]||(i[3]=x=>ut(t(g))),modelValue:t(g),"onUpdate:modelValue":i[4]||(i[4]=x=>U(g)?g.value=x:null),options:t(J),optionLabel:"name",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["modelValue","options"])]),e("div",sa,[ra,e("div",da,[s(we,{close:t(Xe),group:"headless"},{container:k(({message:x,acceptCallback:jt,rejectCallback:ee})=>[e("div",ca,[e("div",ua,[e("div",null,[pa,s(w,{modelValue:t(qe),"onUpdate:modelValue":i[5]||(i[5]=ie=>U(qe)?qe.value=ie:null),placeholder:"00",showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:23,id:"hours"},{incrementbuttonicon:k(()=>[ma]),decrementbuttonicon:k(()=>[fa]),_:1},8,["modelValue"])]),e("div",null,[qa,s(w,{modelValue:t(he),"onUpdate:modelValue":i[6]||(i[6]=ie=>U(he)?he.value=ie:null),placeholder:"00",showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:59,id:"minutes"},{incrementbuttonicon:k(()=>[va]),decrementbuttonicon:k(()=>[ga]),_:1},8,["modelValue"])])]),e("div",ha,[s(T,{icon:"pi pi-check px-2 py-0 text-sm",label:"",class:"border-none w-full mx-3",loading:t(_e),onClick:ie=>Ye(ee),size:"small"},null,8,["loading","onClick"])])])]),_:1},8,["close"]),M((p(),q("div",{class:Ne(`clock-btn ${((Mt=t(d))==null?void 0:Mt.is_timer_start)=="true"?"bg-pink-300":"bg-primary-400"}`),onClick:Ve},[e("i",{class:Ne(`pi ${((Ht=t(d))==null?void 0:Ht.is_timer_start)=="true"?"pi-stop stop":"pi-play start"}`)},null,2)],2)),[[Le,{value:((Bt=t(d))==null?void 0:Bt.is_timer_start)=="true"?"Stop":"Start"},void 0,{top:!0}]]),e("div",{class:"text-sm absolute",onClick:i[7]||(i[7]=x=>Oe(x))},b(((Nt=t(d))==null?void 0:Nt.is_timer_start)=="true"?t(xe):pt((Ft=t(d))==null?void 0:Ft.total_duration)),1)]),ba])])]),e("div",ka,[ya,s(n,{style:{width:"90%"},class:"input-fields"},{default:k(()=>[s(l,{display:"chip",modelValue:t(H),"onUpdate:modelValue":i[8]||(i[8]=x=>U(H)?H.value=x:null),filter:"",resetFilterOnHide:"",options:o.tagsLists,optionLabel:"name",placeholder:"Select Tags",class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",wa,[_a,s(t(sl),{modelValue:t(ye),"onUpdate:modelValue":i[9]||(i[9]=x=>U(ye)?ye.value=x:null),editorStyle:"height: 150px",readonly:!t(D)},{toolbar:k(()=>[e("span",xa,[M(e("button",Da,null,512),[[Le,"Bold",void 0,{bottom:!0}]]),M(e("button",Ta,null,512),[[Le,"Italic",void 0,{bottom:!0}]]),M(e("button",Sa,null,512),[[Le,"Underline",void 0,{bottom:!0}]]),M(e("button",$a,null,512),[[Le,"Strikethrough",void 0,{bottom:!0}]]),Ca,Va,Ea,Aa])]),_:1},8,["modelValue","readonly"])]),t(D)?(p(),q("div",ja,[s(T,{type:"submit",label:"Save"})])):z("",!0)],32),s(rl,{class:"mt-3"},{default:k(()=>{var x,jt;return[s(je,{class:"file-upload",header:"Detail"},{default:k(()=>{var ee,ie,ft,qt,Rt,Jt,Yt,Gt;return[e("p",La,"Attachments: "+b((ee=t(d))!=null&&ee.attachments&&((ft=(ie=t(d))==null?void 0:ie.attachments)==null?void 0:ft.length)>0?(Rt=(qt=t(d))==null?void 0:qt.attachments)==null?void 0:Rt.length:0),1),e("div",Ua,[(Jt=t(d))!=null&&Jt.attachments&&((Yt=t(d))==null?void 0:Yt.attachments.length)===0?(p(),q("div",Ia,Ma)):z("",!0),(p(!0),q(Ue,null,Fe((Gt=t(d))==null?void 0:Gt.attachments,c=>(p(),q("div",{key:c,target:"_blank",class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-2 relative",style:{"background-color":"#f7fafc"}},[ze(c==null?void 0:c.file)==="file"?(p(),q("a",{key:0,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:c==null?void 0:c.file},[Ba,e("div",Na,[e("div",Fa,b(Te(c==null?void 0:c.file)),1),e("div",Ra,b(Me(c==null?void 0:c.created_at)),1)])],8,Ha)):z("",!0),ze(c==null?void 0:c.file)==="image"?(p(),q("a",{key:1,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 relative",href:c==null?void 0:c.file},[e("img",{src:c==null?void 0:c.file,alt:"",style:{width:"90%",height:"80px","border-radius":"10px","border-top-left-radius":"10px","object-fit":"cover"}},null,8,Ya),e("div",Ga,[e("div",Ka,b(Te(c==null?void 0:c.file)),1),e("div",Wa,b(Me(c==null?void 0:c.created_at)),1)])],8,Ja)):z("",!0),ze(c==null?void 0:c.file)==="video"?(p(),q("a",{key:2,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:c==null?void 0:c.file},[Qa,e("div",Xa,[e("div",Za,b(Te(c==null?void 0:c.file)),1),e("div",ei,b(Me(c==null?void 0:c.created_at)),1)])],8,Pa)):z("",!0),ze(c==null?void 0:c.file)==="pdf"?(p(),q("a",{key:3,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:c==null?void 0:c.file},[li,e("div",ni,[e("div",oi,b(Te(c==null?void 0:c.file)),1),e("div",ai,b(Me(c==null?void 0:c.created_at)),1)])],8,ti)):z("",!0),ze(c==null?void 0:c.file)==="word"?(p(),q("a",{key:4,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:c==null?void 0:c.file},[si,e("div",ri,[e("div",di,b(Te(c==null?void 0:c.file)),1),e("div",ci,b(Me(c==null?void 0:c.created_at)),1)])],8,ii)):z("",!0),ze(c==null?void 0:c.file)==="excel"?(p(),q("a",{key:5,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:c==null?void 0:c.file},[pi,e("div",mi,[e("div",fi,b(Te(c==null?void 0:c.file)),1),e("div",qi,b(Me(c==null?void 0:c.created_at)),1)])],8,ui)):z("",!0),e("div",{onClick:as=>At(c==null?void 0:c.id),class:"absolute bg-red-500 text-white p-2 flex align-items-center justify-content-center close-btn"},hi,8,vi)]))),128))]),t(D)?(p(),q("div",bi,[e("input",{onChange:Ze,id:"attachInput",class:"float-right file-up-btn",type:"file",placeholder:"+"},null,32),s(T,{type:"button",loading:t(X),onClick:Vt,label:"Upload"},null,8,["loading"])])):z("",!0)]}),_:1}),s(je,{header:`Sub Tasks ${(x=t(W))!=null&&x.length?t(W).length:0}`},{default:k(()=>[t(fe)?M((p(),ge(T,{key:0,icon:"pi pi-plus",label:"Create",onClick:i[10]||(i[10]=ee=>{var ie;return P("openCreateSpace",(ie=t(d))==null?void 0:ie.id,"sub-task")}),class:"mr-2 sub-create",severity:"secondary"},null,512)),[[Le,{value:"Create Sub Task"},void 0,{right:!0}]]):z("",!0),s(nt,{class:"tree-table",value:t(W),lazy:!0,tableProps:{style:{minWidth:"650px"}},style:{overflow:"auto"}},{empty:k(()=>[ki]),default:k(()=>[s(Se,{class:"cursor-pointer tone",field:"name",header:"Name",expander:"",style:{width:"45%"}},{body:k(ee=>[M((p(),q("span",{class:"taskTitle",onClick:ie=>P("handleTaskDetailView",ee.node)},[me(b(ee.node.data.name),1)],8,yi)),[[Le,{value:`${ee.node.data.name}`},void 0,{left:!0}]])]),_:1}),s(Se,{field:"assignee",header:"Assignee",style:{width:"25%"}}),s(Se,{field:"dueDateValue",header:"Due Date",style:te([{width:"11.5%"},{"text-wrap":"nowrap"}])}),s(Se,{field:"priority",header:"Priority",style:{width:"10%"}},{body:k(ee=>{var ie,ft,qt;return[e("span",{class:Ne(["text-xs",((ie=ee.node.data.priority)==null?void 0:ie.name)==="High"?"text-danger":((ft=ee.node.data.priority)==null?void 0:ft.name)==="Medium"?"text-warning":"text-success"])},b((qt=ee.node.data.priority)==null?void 0:qt.name),3)]}),_:1}),s(Se,{field:"action",header:"Action"},{body:k(ee=>[e("div",wi,[s(T,{style:{width:"30px",height:"30px","border-radius":"50%"},icon:"pi pi-ellipsis-v",class:"action-dropdown-det-toggle"}),e("div",_i,[s(T,{icon:"pi pi-trash",class:"mr-1 ac-btn dlt-action",severity:"warning",rounded:"",onClick:ie=>P("confirmDeleteTask",ee.node.key)},null,8,["onClick"]),s(T,{icon:"pi pi-cog",class:"mr-1 ac-btn view-action",severity:"info",onClick:ie=>P("handleTaskDetailView",ee.node),rounded:""},null,8,["onClick"]),s(T,{icon:"pi pi-pencil",class:"mr-1 ac-btn edit-action",severity:"success",onClick:ie=>P("handleTaskEdit",ee.node),rounded:""},null,8,["onClick"]),s(T,{icon:"pi pi-plus",class:"ac-btn sub-action",severity:"success",onClick:ie=>P("openCreateSpace",ee.node.key,"sub-task"),rounded:""},null,8,["onClick"])])])]),_:1})]),_:1},8,["value"])]),_:1},8,["header"]),s(je,{header:`Bounce ${((jt=t(pe))==null?void 0:jt.is_bounce)==="Yes"?"1":""}`},{default:k(()=>[e("div",xi,[e("div",Di,[Ti,s(v,{onChange:i[11]||(i[11]=ee=>Et(t(pe))),disabled:!t(V),modelValue:t(pe),"onUpdate:modelValue":i[12]||(i[12]=ee=>U(pe)?pe.value=ee:null),options:t(St),optionLabel:"is_bounce",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["disabled","modelValue","options"])])])]),_:1},8,["header"])]}),_:1})])])])]),e("div",Si,[e("div",null,[e("div",$i,[e("div",Ci,[e("div",Vi,[t(st)?(p(),ge(T,{key:0,onClick:Ke,label:"↓  Show More",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})):z("",!0)]),t(rt)?(p(),q("div",Ei,[(p(!0),q(Ue,null,Fe(t(de),x=>(p(),q("ul",{key:x,style:{"margin-left":"-15px","margin-top":"-6px"}},[e("li",{innerHTML:x.title,style:{"font-size":"smaller !important"}},null,8,Ai)]))),128)),e("div",ji,[s(T,{onClick:Ct,label:"↑ Hide",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})])])):z("",!0),(p(!0),q(Ue,null,Fe(t(re),x=>(p(),ge(cl,{class:"mb-2",key:x.id},{title:k(()=>[e("div",Li,[x.commentator_image?(p(),q("img",{key:0,class:"mr-2",src:x.commentator_image,alt:"",style:{width:"28px",height:"28px","border-radius":"50%"}},null,8,Ui)):(p(),ge(dl,{key:1,label:x.commentator_name.charAt(),class:"mr-2 capitalize",size:"small",style:{"background-color":"gray",color:"#ededed","border-radius":"50%"}},null,8,["label"])),e("p",Ii,b(x.commentator_name),1)])]),content:k(()=>[Te(x==null?void 0:x.file)?(p(),q("div",Oi,[e("a",{href:x==null?void 0:x.file,target:"_blank",class:"bg-gray-200 attachment-wrapper cursor-pointer flex align-items-center px-3 py-3 gap-2 comment-file",style:{"background-color":"#f7fafc"}},[Mi,e("div",Hi,[e("div",Bi,b(Te(x==null?void 0:x.file)),1)])],8,zi)])):z("",!0),e("p",Ni,b(x!=null&&x.comment?x==null?void 0:x.comment:""),1),e("i",Fi,b(dt(x.time)),1)]),_:2},1024))),128))]),e("form",{onSubmit:Wt(kt,["prevent"]),class:"comment-add"},[t(m)?(p(),q("div",Ri,[e("div",null,[Ji,me(),e("span",null,b(t(f)),1)]),e("div",{onClick:Q,class:"close-comment"},Gi)])):z("",!0),e("div",null,[s(ul,{placeholder:"Add comment",modelValue:t(Ge),"onUpdate:modelValue":i[13]||(i[13]=x=>U(Ge)?Ge.value=x:null),rows:"3",cols:"15",class:"border-gray-300 mb-1 comment-text",required:""},null,8,["modelValue"]),e("input",{class:"hidden",type:"file",ref_key:"fileInput",ref:mt,onChange:B},null,544),s(T,{icon:"pi pi-cloud-upload",onClick:N,"aria-label":"Filter"}),s(T,{class:"ml-2",type:"submit",icon:"pi pi-plus",label:"Add",loading:t(h)},null,8,["loading"])])],32)])])])])}}};const bt=o=>(It("data-v-060a3647"),o=o(),Ot(),o),Wi={class:"card"},Pi={class:"d-flex create-space-btn-wrapper mb-3 mr-2"},Qi={class:"breadCrumWrap"},Xi=bt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Zi=bt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),es=bt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),ts=bt(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),ls={class:"text cursor-pointer"},ns=bt(()=>e("p",null,"Are you sure you want to delete?",-1)),os={__name:"index",setup(o){const u=a(Re("read_task")),_=ke(),C=ke(),{getSingleProject:G,deleteTask:S,getTaskAssignModalData:X,getTagsAssignModalData:le,getTaskDetails:ce}=ke(),{singleProject:Z,isTaskDeleted:F,tasks:ne,kanbanTasks:K}=Qe(ke()),se=a({}),ve=a(!0),R=ht(),O=a(!1),re=a(null),W=wt().query.task_key;console.log(W);const{projects:J}=wt().params,d=a(!1),de=a(null),oe=a(null),ae=a(null),Y=a([]),P=a([]),y=a(!1),h=a(!1),D=a(!1),V=async(L,g)=>{L?oe.value=L:oe.value="",g=="sub-task"?ae.value="Create Sub Task":ae.value="Create Task",d.value=!0,await X(),Y.value=_.users,await le(),P.value=C.tags},fe=async L=>{re.value=L,document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const g=document.createElement("div");g.style.position="absolute",g.style.top="0",g.style.left="0",g.style.width="100%",g.style.height="100%",g.style.backgroundColor="rgba(0, 0, 0, 0)",g.style.zIndex="1000000",document.documentElement.appendChild(g),await X(),Y.value=_.users,await le(),P.value=C.tags,y.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(g)},I=L=>{de.value=L,h.value=!0},ue=async()=>{O.value=!0,await S(de.value,J),F.value===!0?(O.value=!1,R.add({severity:"success",summary:"Successful",detail:"Task Deleted Successfully",group:"br",life:3e3}),h.value=!1):(O.value=!1,R.add({severity:"error",summary:"Error",detail:"Unable to delete task",group:"br",life:3e3}))},H=async L=>{document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const g=document.createElement("div");g.style.position="absolute",g.style.top="0",g.style.left="0",g.style.width="100%",g.style.height="100%",g.style.backgroundColor="rgba(0, 0, 0, 0)",g.style.zIndex="100000010",document.documentElement.appendChild(g),D.value&&(D.value=!1),await ce(L.key),await X(),Y.value=_.users,await le(),P.value=C.tags,D.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(g)};console.log("visibleTaskDetailView",D.value),$e(D,L=>{if(L===!0)return 0;localStorage.removeItem("taskDetailID")}),(()=>{se.value={global:{value:null,matchMode:$l.CONTAINS}}})();const E=L=>{d.value=L},Je=L=>{y.value=L},Ie=()=>{G(J)};return G(J),$e(()=>wt().query.task_key,L=>{L&&H({key:L})}),W&&H({key:W}),Sl(()=>{ve.value=!1}),(L,g)=>{var xe,Ce,Ve,De;const it=pl,qe=ml,he=to,Xe=bo,_e=Uo,Ye=Ki,Oe=gt;return p(),q("div",Wi,[s(it,{position:"bottom-right",group:"br"}),e("div",Pi,[e("div",Qi,[s(qe,{to:"/",class:"text pi pi-home"}),Xi,s(qe,{to:"/companies",class:"text"},{default:k(()=>[me("Companies")]),_:1}),Zi,s(qe,{to:`/companies/${(xe=t(Z))==null?void 0:xe.company_id}`,class:"text"},{default:k(()=>{var $;return[me("Company - "+b(($=t(Z))==null?void 0:$.company_name),1)]}),_:1},8,["to"]),es,s(qe,{to:`/companies/${(Ce=t(Z))==null?void 0:Ce.company_id}/spaces/${(Ve=t(Z))==null?void 0:Ve.space_id}`,class:"text"},{default:k(()=>{var $;return[me(" Space - "+b(($=t(Z))==null?void 0:$.space_name),1)]}),_:1},8,["to"]),ts,e("p",ls,"Project - "+b((De=t(Z))==null?void 0:De.name),1)])]),t(u)?(p(),ge(he,{key:0,kanbanTasks:t(K),tasks:t(ne),onOpenCreateSpace:V,onHandleTaskEdit:g[0]||(g[0]=$=>fe($)),onHandleTaskDetailView:g[1]||(g[1]=$=>H($)),onConfirmDeleteTask:g[2]||(g[2]=$=>I($))},null,8,["kanbanTasks","tasks"])):z("",!0),s(t(yt),{visible:t(d),"onUpdate:visible":g[4]||(g[4]=$=>U(d)?d.value=$:null),modal:"",header:t(ae),style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw","330px":"98vw"}},{default:k(()=>[s(Xe,{usersLists:t(Y),tagsLists:t(P),taskId:t(oe),projects:t(J),onCloseCreateModal:g[3]||(g[3]=$=>E($))},null,8,["usersLists","tagsLists","taskId","projects"])]),_:1},8,["visible","header"]),s(t(yt),{visible:t(y),"onUpdate:visible":g[6]||(g[6]=$=>U(y)?y.value=$:null),modal:"",header:"Edit Task",style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:k(()=>[s(_e,{singleTask:t(re),usersLists:t(Y),tagsLists:t(P),projects:t(J),onCloseEditModal:g[5]||(g[5]=$=>Je($))},null,8,["singleTask","usersLists","tagsLists","projects"])]),_:1},8,["visible"]),s(t(yt),{visible:t(D),"onUpdate:visible":g[10]||(g[10]=$=>U(D)?D.value=$:null),modal:"",header:" ",style:{width:"90rem",height:"80rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:k(()=>[s(Ye,{usersLists:t(Y),tagsLists:t(P),projID:t(J),onOpenCreateSpace:V,onHandleTaskEdit:g[7]||(g[7]=$=>fe($)),onHandleTaskDetailView:g[8]||(g[8]=$=>H($)),onConfirmDeleteTask:g[9]||(g[9]=$=>I($)),onUpdateTaskTable:Ie},null,8,["usersLists","tagsLists","projID"])]),_:1},8,["visible"]),s(t(yt),{visible:t(h),"onUpdate:visible":g[12]||(g[12]=$=>U(h)?h.value=$:null),header:" ",style:{width:"25rem"}},{default:k(()=>[ns,s(Oe,{label:"No",icon:"pi pi-times",text:"",onClick:g[11]||(g[11]=$=>h.value=!1)}),s(Oe,{label:"Yes",icon:"pi pi-check",loading:t(O),text:"",onClick:ue},null,8,["loading"])]),_:1},8,["visible"])])}}},ir=Ut(os,[["__scopeId","data-v-060a3647"]]);export{ir as default};
