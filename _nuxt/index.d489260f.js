import fl from"./toast.esm.ce38771d.js";import{_ as ql}from"./nuxt-link.5c98a085.js";import xt from"./multiselect.esm.02a2f9e7.js";import Dt from"./dropdown.esm.1498a871.js";import Tt from"./calendar.esm.4505a9b9.js";import vt from"./button.esm.c54db15a.js";import vl from"./inputicon.esm.714e5b85.js";import ol from"./inputtext.esm.233582dc.js";import gl from"./iconfield.esm.8ed024d0.js";import hl from"./toolbar.esm.2a700d64.js";import al from"./avatar.esm.6b61f232.js";import bl from"./speeddial.esm.bcae468e.js";import il from"./treetable.esm.22621cad.js";import{a3 as Qe,$ as a,a4 as gt,aa as wt,ar as Ae,a5 as St,V as Qt,a as It,o as p,b as f,i as e,l as s,u as l,a7 as U,e as M,w as k,c as ve,k as nt,s as H,K as X,t as b,q as pe,F as ze,f as Re,a6 as Ot,ca as sl,a2 as zt,a8 as Mt,a9 as Ht,ao as kl,B as yl,_ as wl,D as _l,h as xl,m as A,n as Dl,g as Tl,cb as Sl,I as Xt,ac as $l,P as Cl}from"./entry.e89720bc.js";import{u as ot,a as _t}from"./cookie.f9cf43a3.js";import{d as Vl}from"./vuedraggable.umd.6360ec42.js";import{u as be}from"./company.6be7c7b7.js";import{a as Je}from"./usePermission.a160ee1c.js";import Fe from"./column.esm.23462c2c.js";import Nt from"./textarea.esm.6822d7a9.js";import El from"./floatlabel.esm.7ffbeb3c.js";import Al from"./inputnumber.esm.e84393aa.js";import jl from"./confirmpopup.esm.b2e9ab39.js";import Ll from"./tabpanel.esm.c2eb47a0.js";import Ul from"./tabview.esm.1f3d5275.js";import Il from"./card.esm.62097fc7.js";import{u as Zt}from"./clock.53991213.js";import{s as Ol}from"./basecomponent.esm.91e596c6.js";import yt from"./dialog.esm.7fe8ed85.js";import"./portal.esm.a34e9c64.js";import"./index.esm.8eab902c.js";import"./baseicon.esm.fe79efc6.js";import"./index.esm.041242c3.js";import"./index.esm.441b8d98.js";import"./index.esm.e703480f.js";import"./checkbox.esm.d0c3b3d0.js";import"./index.esm.14e1d642.js";import"./index.esm.272ad973.js";import"./index.esm.c9862811.js";import"./overlayeventbus.esm.b72d439b.js";import"./virtualscroller.esm.2f55518a.js";import"./index.esm.fb82e9c0.js";import"./index.esm.11311365.js";import"./index.esm.70f86363.js";import"./badge.esm.cf8f221b.js";import"./index.esm.da61ff69.js";import"./paginator.esm.7495ebe4.js";import"./index.esm.f40e3f95.js";import"./index.esm.d38d4e1f.js";import"./index.esm.edc43b09.js";import"./index.esm.50bef698.js";import"./index.esm.e73d6386.js";import"./index.esm.bcd24307.js";import"./workCompany.7a687833.js";const zl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwElEQVR4nO2dTYgcRRTHy/iBBoligicvXgRRUPCgiDBKdl5NcEDD1JuwLBJFmXmv1yWKEslBe8WDOfmJ6N7FgydFvYiC5K4Y1IuKl6DiNzHRg/kYaTeGYVM1sx/VU6+r6g99mqqa/3u/ruqq7p4ppbKysrKysrKysrKysraodp9uBqSXAOlLbeikRh4FPpaTgIqIlwHSa2DojICkj5KCUCVfI38sINGjJCFUZ76ABI+ShLA65vNpAckdJQkBDL8sIKmjDR2GD6tYBMhfBU8oJtwTNNIJAckcJdsTpgUpzY+ODULjAWDDIUQBABsMIRoA2FAIUQHABkKIDgA2DEKUALBBEKIFgA2BEDUAbACE6AGgcAhJAEDBEJIBgEIhJAUABUJIDgAKg5AkABQEIVkAKARC0gBw9vFtOGBpfnQGkAF4Ve4BgSUNQHLxiTcYe3ziDcYen3iDscfn22B3frALkP+0tQXIfwE+fM2k+q39+y8HpB/tfujZ0PF5Vx0GteHDrvbA0GOT/dCiI/m/dhaWdkiIz6vqMLj7/sWdYOi4I5HflGW5zVYPES8Gw986wD0hJT6vqssgID/narPdY7DWMcMFax1D33e7g+2S4vOmugzO4eAqMPy741rwrq0OIH/mAPCItPi8qU6DgPyMYzg508ZHr1/j416Hh69brfISifF5UZ0GOwtLOzTyb462nx8vC8hH7OWGfanxeVHdBrXhQ/ZewL9UU86qTLtX3G4fquio64ItJb4tq26DLSyuBKSf7e3TA1UZQHrH9nm7R3ukx6eaYBCQn3Sc4e+37jtwtTb8z4Wf8REf350BqNXVbTWVtAD4W5vh0Aqnx3dmAB67qEY+4OgFtuHpPY/fm4egsXs8x6YlZHWKWtyqPCkDGFPHcDEtIRr5TeVRGcAFfwjCP0xKSvXLfeVRGcCY5vbxjRrp1MSkGD6oPCoDGBMY/mD6EER/THtmEJVmdYZAn+9Zx/hvvU0RtWYBoCzLbWDoU8sU9JjtHlC1PujsXbpOpaBZANBYPGhfA/AbGulpx3evqBRUN4Bud7DdNf+vVrvVbWn7hZlO7dm3eIOKXXUD0I4zHJA++b8MGHrL0UPeVrGrTgDtvXSt69nw+J1O6A9v0chnLeXOdvp0h4pZdQLQyCuOs/+oUuqiNWU/nNZTolRdAOYmLrqK+bXlAYdtl4fqM2nxeVNdBsG56KLvXM94bVPV/w7Dn2/2yViSAGDCoguQ2O2lmHd72dyz4eQAlI5F17njJ8THr3DVnfRiVvV2xG2DwaWh4/Mu3wbB8EPO9gwfWkf9pQl+KHR83uXboF6d96/YjuplrXUt3Ay97mhjw39VmRwAaRIfn3iDsccn3mDs8Yk3GHt84g3GHp94g7HHJ95g7PGJNxh7fOINxh6feIOxx+f6Te/MDkMndW949wb8PhXKKxgqI93ChE50sLhrvZ6re0LRbJmikV8MD4BF94RazvzzAHrFTXK2sSKJPaH+zYI08qvhk88SISzPch/Jj8InnyVBWA6wnyS9kocjnn3y114TtKEXtOEvwu8xRiF6QhwbxIXSVmZHtc52UhJsAkJOfkAIOfkBIeTkB4SQkx8QQk5+QAg5+SqMzq0TvM7z/wUrLeMdaCtpkwAAAABJRU5ErkJggg==";const Ml={class:"filter-wrapper pb-2 mb-1"},Hl={class:"mb-2 relative"},Nl={class:"mb-2 relative"},Bl={class:"flex flex-wrap gap-1"},Fl=e("img",{src:zl},null,-1),Rl=e("i",{class:"pi pi-search"},null,-1),Jl=e("p",{class:"text-center font-medium font-italic"},"No data found",-1),Yl=["onMouseenter"],Gl=["onDblclick"],Kl={class:"task-status"},Wl={key:1},Pl={class:"flex align-items-center"},Ql=["onClick"],Xl=["onMouseenter"],Zl={key:0,class:"flex gap-1 w-full h-full justify-content-center align-items-center"},en={class:"flex justify-content-start gap-1"},tn=["src"],ln={class:"inline-block"},nn={class:"task-status-2"},on={key:0,class:"flex align-items-center"},an={key:1},sn={class:"flex align-items-center"},rn={class:"inline-block"},dn={class:"task-status-2"},cn={key:0,class:"flex align-items-center"},un={key:1,class:"pt-1"},pn={key:1},mn={class:"flex align-items-center"},fn=["onMouseover","onMouseleave"],qn=["onClick","onMouseleave"],vn={key:1,class:"main-container"},gn={class:"content"},hn={class:"boardContainer",style:{display:"flex","overflow-x":"auto","align-items":"start"}},bn={class:"column-container"},kn={class:""},yn=["onClick"],wn={class:""},_n={class:"font-semibold truncate text-sm title"},xn={class:"flex align-items-center gap-2 mt-1"},Dn={class:"status text-sm"},Tn={class:"mt-2 flex align-items-center gap-2"},Sn=e("i",{class:"pi pi-user text-lg"},null,-1),$n={class:"flex justify-content-start gap-1"},Cn=["src"],Vn={class:"mt-2 flex align-items-center gap-2"},En=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),An={class:"mt-2 flex align-items-center gap-2"},jn=e("i",{class:"pi pi-flag text-lg"},null,-1),Ln={class:"text-sm"},Un=["onClick"],In=e("p",{class:"mb-1"},"Subtask",-1),On={class:"text-sm font-semibold"},zn=["onClick"],Mn={class:"font-semibold truncate text-sm title"},Hn={class:"truncate text-sm desc"},Nn={class:"flex align-items-center gap-2 mt-1"},Bn={class:"status text-sm"},Fn={class:"mt-2 flex align-items-center gap-2"},Rn=e("i",{class:"pi pi-user text-lg"},null,-1),Jn={class:"flex justify-content-start gap-1"},Yn=["src"],Gn={class:"mt-2 flex align-items-center gap-2"},Kn=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),Wn={class:"mt-2 flex align-items-center gap-2"},Pn=e("i",{class:"pi pi-flag text-lg"},null,-1),Qn={class:"text-sm"},Xn={class:"mt-2 flex align-items-center gap-2"},Zn=e("i",{class:"pi pi-angle-right text-lg"},null,-1),eo={class:"text-sm font-semibold"},to={__name:"TaskTable",props:["kanbanTasks","tasks"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask"],setup(o,{emit:c}){var kt;const y=sl(),C=be(),{getSingleProject:G,getTaskAssignModalData:S,editTask:Z}=be(),{modStatusList:le,singleProject:ue,statuslist:ee,isTaskEdited:F}=Qe(be()),ne=a(Je("create_task")),K=a(Je("update_task")),se=a(Je("delete_task")),qe=a(Je("download_task")),R=gt(),O=c,W=(kt=wt().params)==null?void 0:kt.projects,J=a(),r=a(),de=a(),oe=a(),ae=a(),Y=a(),P=a({}),h=a(!0),q=a([{name:"All",code:""},{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),T=a([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),V=a({}),me=a(null),I=m=>{me.value=m,ce.value!==m&&(N.value={...N.value,[m]:!1},ce.value=null)},ce=a(null),N=a({}),j=a(null),E=a(!1),Ye=m=>{j.value=m.data.name;const u=document.getElementById(`inputTaskName${m.key}`);console.log("inputTFunc",u),ce.value=m.key,N.value=Object.keys(N.value).reduce((z,B)=>(z[B]=!1,z),{}),Ot(()=>{u&&u.focus()}),N.value={...N.value,[m.key]:!0}},Me=a(!1);Ae(j,(m,u)=>{console.log("newVal",m),console.log("oldVal",u),u!==null&&(Me.value=!0,console.log("inputChanged",Me.value))});let L=a(null);const v=m=>{L.value&&(clearTimeout(L.value),L.value=null),L.value=setTimeout(()=>{O("handleTaskDetailView",m),L.value=null},250)},it=m=>{L.value&&(clearTimeout(L.value),L.value=null),Ye(m)},fe=async m=>{if(Me.value!==!0)return R.add({severity:"warn",summary:"Error",detail:"Change task name!",group:"br",life:3e3});await ct(j.value,m),N.value={...N.value,[m]:!1},j.value=null,ce.value=null,Me.value=!1},ge=m=>{V.value={...V.value,[m]:!0}},Xe=m=>{V.value={...V.value,[m]:!1}},Te=m=>[{label:"Add Sub Task",icon:"pi pi-plus text-white",command:()=>{O("openCreateSpace",m.key,"sub-task")},disabled:!ne},{label:"Edit Task",icon:"pi pi-pencil text-white",command:()=>{O("handleTaskEdit",m)},disabled:!K},{label:"Task Detail",icon:"pi pi-window-maximize text-white",command:()=>{O("handleTaskDetailView",m)}},{label:"Delete Task",icon:"pi pi-trash text-white",command:()=>{O("confirmDeleteTask",m.key)},disabled:!se}],Ge=a(),He=a(),Se=a(),je=a(),ke=a(),Le=a(),$=a(null),$t=()=>{if(J.value||r.value||de.value||Y.value||oe.value||ae.value)J.value="",r.value="",de.value="",Y.value="",oe.value="",ae.value="",Ge.value="",He.value="",Se.value="",je.value="",ke.value="",Le.value="",_e.value=!1,xe.value=!1,we();else return},we=async()=>{Ge.value=J.value?J.value.map(m=>m.id):"",He.value=r.value?r.value.code:"",Se.value=de.value?de.value.id:"",je.value=Y.value,ke.value=oe.value,Le.value=ae.value,G(W,Ge.value,He.value,Se.value,je.value,ke.value,Le.value)},_e=a(!1),xe=a(!1),Ze=m=>{const u=new Date(m);oe.value=u.getFullYear()+"-"+(u.getMonth()+1)+"-"+u.getDate(),_e.value=!0,we()},Ke=m=>{xe.value=!0;const u=new Date(m);ae.value=u.getFullYear()+"-"+(u.getMonth()+1)+"-"+u.getDate(),we()},Ct=()=>{_e.value=!1,oe.value="",ke.value="",we()},st=()=>{xe.value=!1,ae.value="",Le.value="",we()},Ue=a(!1),Vt=m=>{if(Ue.value=!0,console.log("lod",m),m.length>0){const u=`data:text/csv;charset=utf-8,"Serial No.","Task Name","Project","Assignee","Priority","Status","Time Tracked","Due Date","Overdue"
`+m.map((Q,he)=>{const pt=he+1,We=Q.data.name,et=ue.value.name,tt=Q.data.assignee.split(", ").join("; "),Be=Q.data.priority?Q.data.priority:"",Pe=Q.data.status.name;let ye=Q.data.total_duration;const i=Math.floor(ye/3600),t=Math.floor(ye%3600/60),n=ye%60;i>0?ye=`${i} hr ${t} min ${n} sec`:t>0?ye=`${t} min ${n} sec`:ye=`${n} sec`;const x=Q.data.dueDateValue,g=Q.data.is_overdue?"Yes":"No";return`"${pt}","${We}","${et}","${tt}","${Be}","${Pe}","${ye}","${x}","${g}"`}).join(`
`),z=encodeURI(u),B=document.createElement("a");B.setAttribute("href",z),B.setAttribute("download","tasks.csv"),document.body.appendChild(B),B.click(),document.body.removeChild(B),Ue.value=!1}else Ue.value=!1,R.add({severity:"error",summary:"Error",detail:"No data found to download",group:"br",life:3e3})},bt=a(!0);St(async()=>{await G(W),bt.value=!1,jt()});async function rt(m,u){var z;try{const B=ot("token"),{data:Q,pending:he}=await _t(`${y.public.apiUrl}/tasks/update/${u}`,{method:"POST",headers:{Authorization:`Bearer ${B.value}`},body:{status:m==null?void 0:m.id}},"$7UcE4NQ81w");((z=Q.value)==null?void 0:z.app_message)==="success"?(console.log("Status Changed",Q),R.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),await G(W)):R.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(B){console.error("Error fetching data:",B)}}const dt=a(!1),ct=async(m,u)=>{if(m instanceof Date){dt.value=!0;let z;if(m){const Q=new Date(m);Q.setDate(Q.getDate()+1),z=Q.toISOString()}const B={id:u,dueDate:z?new Date(new Date(z).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,project_id:W};await Z(B),F.value===!0?(dt.value=!1,R.add({severity:"success",summary:"Successful",detail:"Due date updated ",group:"br",life:3e3})):(dt.value=!1,R.add({severity:"error",summary:"Error",detail:"Unable to update due date!",group:"br",life:3e3}))}else if(m!=null&&m.name){const z={id:u,priority:m.name,project_id:W};await Z(z),F.value===!0?R.add({severity:"success",summary:"Successful",detail:"Priority updated ",group:"br",life:3e3}):R.add({severity:"error",summary:"Error",detail:"Unable to update task priority!",group:"br",life:3e3})}else E.value=!0,await Z({id:u,name:m,project_id:W}),F.value===!0?(R.add({severity:"success",summary:"Successful",detail:"Task name updated ",group:"br",life:3e3}),E.value=!1):(R.add({severity:"error",summary:"Error",detail:"Unable to update task name!",group:"br",life:3e3}),E.value=!1)},$e=a(),Et=async(m,u)=>{console.log("newDate",m),u.node.data.dueDateValue;const z=new Date(m);z.setHours(23,59,0,0),$e.value=z,console.log("inlineDueDate",$e.value);let B=new Date($e.value).toLocaleDateString("en-US",{month:"short",day:"2-digit"});console.log("placeHolderValue",B),u.node.data.dueDateValue=B,await ct($e.value,u.node.key)};function At(){const m="0123456789ABCDEF";let u="#";for(let z=0;z<6;z++)u+=m[Math.floor(Math.random()*10)];return u}function Ce(m){return{backgroundColor:At(),color:"white",borderRadius:"50%",border:"2px solid white"}}const jt=async()=>{await S(),P.value=C.users},Lt=a(!0),Ve=Qt(()=>({animation:250,group:"tasks",disabled:!Lt.value,ghostClass:"ghost"})),Ne=Qt(()=>({backgroundColor:"#fff",boxShadow:"0px 2px 2px #e2e2e2",cursor:"grab",padding:"12px 10px",margin:"8px 0px"})),ut=(m,u)=>{const{added:z,moved:B,removed:Q}=m;z&&rt(u,m.added.element.key)};return(m,u)=>{const z=xt,B=Dt,Q=Tt,he=vt,pt=vl,We=ol,et=gl,tt=hl,Be=al,Pe=bl,ye=il,i=It("tooltip");return p(),f(ze,null,[e("div",Ml,[s(z,{onChange:u[0]||(u[0]=t=>we()),modelValue:l(J),"onUpdate:modelValue":u[1]||(u[1]=t=>U(J)?J.value=t:null),options:l(P),filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Filter Assignees",maxSelectedLabels:3,class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),s(B,{onChange:u[2]||(u[2]=t=>we()),modelValue:l(r),"onUpdate:modelValue":u[3]||(u[3]=t=>U(r)?r.value=t:null),options:l(q),optionLabel:"name",placeholder:"Filter Priority",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),s(B,{onChange:u[4]||(u[4]=t=>we()),modelValue:l(de),"onUpdate:modelValue":u[5]||(u[5]=t=>U(de)?de.value=t:null),options:l(le),optionLabel:"name",placeholder:"Filter Status",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),e("div",Hl,[s(Q,{onDateSelect:u[6]||(u[6]=t=>Ze(t)),modelValue:l(oe),"onUpdate:modelValue":u[7]||(u[7]=t=>U(oe)?oe.value=t:null),placeholder:"Filter Start Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),l(_e)?(p(),f("p",{key:0,onClick:Ct,class:"pi pi-times absolute cursor-pointer"})):M("",!0)]),e("div",Nl,[s(Q,{onDateSelect:u[8]||(u[8]=t=>Ke(t)),modelValue:l(ae),"onUpdate:modelValue":u[9]||(u[9]=t=>U(ae)?ae.value=t:null),placeholder:"Filter End Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),l(xe)?(p(),f("p",{key:0,onClick:st,class:"pi pi-times end-cross absolute cursor-pointer"})):M("",!0)]),s(he,{onClick:$t,label:"Reset",class:"mr-2 w-full md:w-15rem mb-2",severity:"secondary"})]),s(tt,{class:"border-0 px-0"},{start:k(()=>[e("div",Bl,[l(ne)?(p(),ve(he,{key:0,icon:"pi pi-plus",label:"Create Task",onClick:u[10]||(u[10]=t=>O("openCreateSpace","","task")),class:"mr-2",severity:"secondary"})):M("",!0),e("div",null,[s(he,{icon:"pi pi-list",label:"List",onClick:u[11]||(u[11]=()=>h.value=!0),class:nt(["table-btn",{"bg-indigo-400 text-white":l(h)}]),severity:"secondary"},null,8,["class"]),s(he,{icon:"pi pi-th-large",label:"Board",onClick:u[12]||(u[12]=()=>h.value=!1),class:nt(["board-btn",{"bg-indigo-400 text-white":!l(h)}]),severity:"secondary"},null,8,["class"])]),l(qe)?H((p(),ve(he,{key:1,onClick:u[13]||(u[13]=t=>Vt(o.tasks)),loading:l(Ue),style:X(`${l(Ue)===!0?"backGround: red":""}`),class:"excel-export-btn"},{default:k(()=>[Fl]),_:1},8,["loading","style"])),[[i,{value:"Download Tasks"},void 0,{right:!0}]]):M("",!0)])]),end:k(()=>[s(et,{iconPosition:"right",raised:""},{default:k(()=>[s(pt,null,{default:k(()=>[Rl]),_:1}),s(We,{onKeyup:u[14]||(u[14]=t=>we()),modelValue:l(Y),"onUpdate:modelValue":u[15]||(u[15]=t=>U(Y)?Y.value=t:null),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})]),_:1}),l(h)?(p(),ve(ye,{key:0,class:"table-st",stripedRows:"",value:o.tasks,scrollable:"",scrollDirection:"both",lazy:!0,loading:l(bt),filterDisplay:"menu",style:{overflow:"auto"},tableProps:{style:{minWidth:"1024px"}}},{empty:k(()=>[Jl]),default:k(()=>[s(l(Fe),{field:"name",header:"Name",class:"",expander:"",style:{width:"45%"},showAddButton:!0},{body:k(t=>[e("div",{class:"inline-block w-full align-items-center tasktitle-hover cursor-pointer relative",onMouseenter:n=>I(t.node.key)},[e("div",{onDblclick:n=>it(t.node),class:"flex w-full"},[H((p(),f("div",Kl,[s(B,{class:"mr-1 flex justify-content-center align-items-center",onChange:n=>rt(t.node.data.status,t.node.key),modelValue:t.node.data.status,"onUpdate:modelValue":n=>t.node.data.status=n,options:l(ee),disabled:!l(K),optionLabel:"name"},{value:k(n=>[n.value?(p(),f("div",{key:0,class:"flex align-items-center",style:X({backgroundColor:n.value.color_code})},[e("div",{style:X({backgroundColor:n.value.color_code}),class:"status-bg"},null,4)],4)):(p(),f("span",Wl,b(n.placeholder),1))]),option:k(n=>[e("div",Pl,[e("div",{style:X([{backgroundColor:n.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,b(n.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])),[[i,{value:`${t.node.data.status.name}`},void 0,{top:!0}]]),H((p(),f("span",{onClick:n=>v(t.node),style:X(l(ce)===t.node.key?"display: none;":"display: block;"),class:"taskTitle cursor-pointer"},[pe(b(t.node.data.name),1)],12,Ql)),[[i,{value:`${t.node.data.name}`},void 0,{left:!0}]]),e("span",null,[s(We,{id:`inputTaskName${t.node.key}`,style:X(l(ce)===t.node.key?"display: block;":"display: none;"),class:"inline-task-input",modelValue:l(j),"onUpdate:modelValue":u[16]||(u[16]=n=>U(j)?j.value=n:null),type:"text",placeholder:"Edit task title"},null,8,["id","style","modelValue"])])],40,Gl)],40,Yl)]),_:1}),s(l(Fe),{field:"",header:"",style:{width:"5%",padding:"0.75rem 0rem"}},{body:k(t=>[e("div",{class:"w-full h-full flex align-items center",onMouseenter:n=>I(t.node.key)},[l(me)===t.node.key?(p(),f("div",Zl,[l(N)[t.node.key]?M("",!0):H((p(),ve(he,{key:0,onClick:n=>Ye(t.node),severity:"secondary",icon:"pi pi-pencil",class:"w-fit h-fit p-1",style:{"font-size":"0.8rem !important"}},null,8,["onClick"])),[[i,{value:"Edit Name",showDelay:500},void 0,{top:!0}]]),l(N)[t.node.key]?M("",!0):H((p(),ve(he,{key:1,onClick:n=>O("openCreateSpace",t.node.key,"sub-task"),severity:"secondary",icon:"pi pi-plus",class:"w-fit h-fit p-1",style:{"font-size":"0.2rem"}},null,8,["onClick"])),[[i,{value:"Add Sub Task",showDelay:500},void 0,{top:!0}]]),l(N)[t.node.key]?H((p(),ve(he,{key:2,onClick:n=>fe(t.node.key),loading:l(E),severity:"primary",icon:"pi pi-check",class:"p-1 w-full",style:{"font-size":"0.2rem",margin:"0 0.65rem"}},null,8,["onClick","loading"])),[[i,{value:"Update Name"},void 0,{top:!0}]]):M("",!0)])):M("",!0)],40,Xl)]),_:1}),s(l(Fe),{field:"assignee",header:"Assignee",style:{width:"16%"}},{body:k(t=>[e("div",en,[(p(!0),f(ze,null,Re(t.node.data.assigneeObj,(n,x)=>(p(),f("span",{key:x,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:x>0?"-20px":"0",zIndex:10-x})},[n.image?H((p(),f("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:n.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,tn)),[[i,{value:`${n.name}`},void 0,{top:!0}]]):H((p(),ve(Be,{key:1,label:n.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},Ce(x)])},null,8,["label","style"])),[[i,{value:`${n.name}`},void 0,{top:!0}]])],4))),128))])]),_:1}),s(l(Fe),{field:"status",header:"Status",style:{width:"10%"}},{body:k(t=>[e("div",ln,[e("div",nn,[s(B,{class:"mr-1 flex justify-content-center align-items-center",onChange:n=>rt(t.node.data.status,t.node.key),modelValue:t.node.data.status,"onUpdate:modelValue":n=>t.node.data.status=n,options:l(ee),disabled:!l(K),optionLabel:"name"},{value:k(n=>[n.value?(p(),f("div",on,[e("div",{style:X({color:n.value.color_code,fontWeight:500}),class:"pt-1"},b(n.value.name),5)])):(p(),f("span",an,b(n.placeholder),1))]),option:k(n=>[e("div",sn,[e("div",{style:X([{backgroundColor:n.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,b(n.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])])]),_:1}),s(l(Fe),{field:"dueDateValue",header:"Due Date",style:{textWrap:"nowrap",width:"9%"}},{body:k(t=>[s(Q,{onDateSelect:n=>Et(n,t),class:nt(["inline-calendar cursor-pointer",t.node.data.dueDateColor==="#087641"&&t.node.data.dueDateValue?"green-calendar":t.node.data.dueDateColor==="#b13a41"&&t.node.data.dueDateValue?"red-calendar":""]),placeholder:t.node.data.dueDateValue?t.node.data.dueDateValue:"Set"},null,8,["onDateSelect","class","placeholder"])]),_:1}),s(l(Fe),{field:"priority",header:"Priority",style:{width:"9%"}},{body:k(t=>[e("div",rn,[e("div",dn,[s(B,{class:"mr-1 flex justify-content-center align-items-center",onChange:n=>ct(t.node.data.priority,t.node.key),modelValue:t.node.data.priority,"onUpdate:modelValue":n=>t.node.data.priority=n,options:l(T),disabled:!l(K),optionLabel:"name",placeholder:"Set Priority"},{value:k(n=>[n.value?(p(),f("div",cn,[n.value.name?(p(),f("div",{key:0,style:X({color:n.value.name==="Low"?"#e1aa1e":n.value.name==="Normal"?"#067bea":n.value.name==="High"?"#ff4928":n.value.name==="Urgent"?"crimson":"",fontWeight:500}),class:"pt-1"},b(n.value.name),5)):(p(),f("div",un,"Set "))])):(p(),f("span",pn,b(n.placeholder),1))]),option:k(n=>[e("div",mn,[e("div",null,b(n.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])])]),_:1}),s(l(Fe),{field:"action",header:"Action",style:{width:"6%",position:"relative"}},{body:k(t=>[e("div",{class:"justify-content-start align-items-center webView-action",style:{width:"fit-content"},onMouseover:n=>ge(t.node.key),onMouseleave:n=>Xe(t.node.key)},[s(Pe,{visible:l(V)[t.node.key],"onUpdate:visible":n=>l(V)[t.node.key]=n,model:Te(t.node),direction:"left",class:"custom-speed-dial",tooltipOptions:{position:"top"}},null,8,["visible","onUpdate:visible","model"])],40,fn),e("div",{class:"justify-content-start align-items-center tabView-action",style:{width:"fit-content"},onClick:n=>ge(t.node.key),onMouseleave:n=>Xe(t.node.key)},[s(Pe,{visible:l(V)[t.node.key],"onUpdate:visible":n=>l(V)[t.node.key]=n,model:Te(t.node),direction:"left",class:"custom-speed-dial",tooltipOptions:{position:"top"}},null,8,["visible","onUpdate:visible","model"])],40,qn)]),_:1})]),_:1},8,["value","loading"])):M("",!0),l(h)?M("",!0):(p(),f("div",vn,[e("div",gn,[e("div",null,[e("div",hn,[(p(!0),f(ze,null,Re(o.kanbanTasks,t=>(p(),f("div",{key:t,class:"groupColumnContainer"},[e("div",bn,[e("div",{style:X(`background-color: ${t.statusColor}; `),class:"column-header"},b(t.name)+" - "+b(t.content.length),5),s(l(Vl),{modelValue:t.content,"onUpdate:modelValue":n=>t.content=n,options:l(Ve),disabled:!l(K),class:"draggable scrollbar",itemKey:"name",group:"cardItem",onChange:n=>ut(n,t.status)},{item:k(({element:n})=>{var x;return[e("div",kn,[(p(),f("div",{class:"task-card",style:X(l(Ne)),key:n.id,onClick:g=>m.$emit("handleTaskDetailView",n,t.content,t.name)},[e("div",wn,[H((p(),f("p",_n,[pe(b(n.data.name),1)])),[[i,{value:`${n.data.name}`},void 0,{top:!0}]]),e("div",xn,[e("div",{class:"status-icon",style:X(`background-color:${n.data.status.color_code}`)},null,4),e("p",Dn,b(n.data.status.name),1)]),e("div",Tn,[Sn,e("div",$n,[(p(!0),f(ze,null,Re(n.data.assigneeObj,(g,w)=>(p(),f("span",{key:w,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:w>0?"-20px":"0",zIndex:10-w})},[g.image?H((p(),f("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:g.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Cn)),[[i,{value:`${g.name}`},void 0,{top:!0}]]):H((p(),ve(Be,{key:1,label:g.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},Ce(w)])},null,8,["label","style"])),[[i,{value:`${g.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",Vn,[En,e("p",{style:X(`color: ${n.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},b(n.data.dueDateValue),5)]),e("div",An,[jn,e("p",Ln,b((x=n.data.priority)==null?void 0:x.name),1)]),e("div",{class:"mt-2 flex align-items-center gap-2 cursor-pointer p-1 rounded hover:bg-gray-100",style:{"border-radius":"5px"},onClick:g=>{g.stopPropagation(),l($)==n.unique_id?$.value=null:$.value=n.unique_id}},[In,e("i",{class:nt(`pi ${l($)==n.unique_id?"pi-angle-down":"pi-angle-right"}  text-lg`)},null,2),e("p",On,b(n.children.length),1)],8,Un)]),pe(" "+b(n.t_name),1)],12,yn)),e("div",{class:nt(l($)===n.unique_id?"":"hidden")},[(p(!0),f(ze,null,Re(n.children,g=>(p(),f("div",{key:g.unique_id,class:"sub-card",onClick:w=>m.$emit("handleTaskDetailView",g,t.content,t.name)},[e("p",Mn,b(g.data.name),1),e("p",Hn,b(g.data.description),1),e("div",Nn,[e("div",{class:"status-icon",style:X(`background-color:${g.data.status.color_code}`)},null,4),e("p",Bn,b(g.data.status.name),1)]),e("div",Fn,[Rn,e("div",Jn,[(p(!0),f(ze,null,Re(g.data.assigneeObj,(w,D)=>(p(),f("span",{key:D,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:D>0?"-20px":"0",zIndex:10-D})},[w.image?H((p(),f("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:w.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Yn)),[[i,{value:`${w.name}`},void 0,{top:!0}]]):H((p(),ve(Be,{key:1,label:w.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},Ce(D)])},null,8,["label","style"])),[[i,{value:`${w.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",Gn,[Kn,e("p",{style:X(`color: ${g.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},b(g.data.dueDateValue),5)]),e("div",Wn,[Pn,e("p",Qn,b(g.data.priority),1)]),e("div",Xn,[Zn,e("p",eo,b(g.children.length),1)])],8,zn))),128))],2)])]}),_:2},1032,["modelValue","onUpdate:modelValue","options","disabled","onChange"])])]))),128))])])])]))],64)}}};const rl=o=>(Mt("data-v-8b75ef8a"),o=o(),Ht(),o),lo={class:"field flex flex-column"},no={for:"name"},oo=rl(()=>e("i",{class:"text-red-400 text-italic"},"*",-1)),ao={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},io={class:"field"},so={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},ro={class:"field"},co={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},uo={class:"field"},po={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},mo={class:"field"},fo={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},qo=rl(()=>e("br",null,null,-1)),vo={key:0,class:"text-center",style:{color:"red"}},go={class:"create-btn-wrapper mb-0"},ho={__name:"CreateTask",props:["createTaskTitle","taskId","projects","usersLists","tagsLists"],emits:["closeCreateModal"],setup(o,{emit:c}){const{createTask:y}=be(),{isTaskCreated:C,detectDuplicateTask:G}=Qe(be()),{createTaskTitle:S,taskId:Z,projects:le,usersLists:ue,tagsLists:ee}=o,F=gt(),ne=a(!1),K=a(Z),se=a(!0),qe=a(!1),R=a(!1),O=a(null),re=a(null),W=a(null),J=a(null),r=a(null),de=a(!1),oe=a([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),ae=c,Y=h=>{if(console.log("test druve"),de.value)re.value=h;else{const q=new Date(h);q.setHours(23,59,0,0),re.value=q}};Ae(re,(h,q)=>{h&&q&&h!==q&&(de.value=!0)});const P=async()=>{var h,q,T;if(ne.value=!0,O.value===null)R.value=!0,ne.value=!1;else{R.value=!1;let V;if(re.value){const I=new Date(re.value);I.setDate(I.getDate()+1),V=I.toISOString()}const me={name:O.value,dueDate:V?new Date(new Date(V).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:(h=W.value)==null?void 0:h.map(I=>I.id),tags:(q=J.value)==null?void 0:q.map(I=>I.id),priority:(T=r.value)==null?void 0:T.name,project_id:le,parent_task_id:Z};if(V){const I=new Date(V);I.setDate(I.getDate()-1),re.value=I?new Date(I).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await y(me),G.value===!0?(ne.value=!1,F.add({severity:"error",summary:"Error",detail:"Task already exists!",group:"br",life:3e3})):C.value===!0?(ne.value=!1,se.value=!1,qe.value=!0,O.value=null,ae("closeCreateModal",!1),F.add({severity:"success",summary:"Successful",detail:"Task created Successfully",group:"br",life:3e3})):(ne.value=!1,F.add({severity:"error",summary:"Error",detail:"Unable to create task!",group:"br",life:3e3}))}};return St(()=>{const h=document.getElementById("createTaskName");Ot(()=>{h&&h.focus()})}),(h,q)=>{const T=ol,V=Nt,me=xt,I=Tt,ce=Dt,N=vt,j=It("tooltip");return p(),f("div",null,[s(T,{type:"hidden",modelValue:l(K),"onUpdate:modelValue":q[0]||(q[0]=E=>U(K)?K.value=E:null)},null,8,["modelValue"]),e("div",lo,[e("label",no,[pe("Set Task Name"),oo,pe(),H(e("span",ao,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(V,{id:"createTaskName",class:"border-gray-300",modelValue:l(O),"onUpdate:modelValue":q[1]||(q[1]=E=>U(O)?O.value=E:null),rows:"3",cols:"20",invalid:h.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",io,[e("label",null,[pe("Assignees "),H(e("span",so,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(me,{display:"chip",modelValue:l(W),"onUpdate:modelValue":q[2]||(q[2]=E=>U(W)?W.value=E:null),options:o.usersLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",ro,[e("label",null,[pe("Tags "),H(e("span",co,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(me,{display:"chip",modelValue:l(J),"onUpdate:modelValue":q[3]||(q[3]=E=>U(J)?J.value=E:null),options:o.tagsLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",uo,[e("label",null,[pe("Due Date "),H(e("span",po,null,512),[[j,{value:"Set your task due date"},void 0,{right:!0}]])]),s(I,{modelValue:l(re),"onUpdate:modelValue":q[4]||(q[4]=E=>U(re)?re.value=E:null),class:"w-full clndr",placeholder:"Set Due Date",showTime:"",hideOnDateTimeSelect:"",hourFormat:"12",onDateSelect:q[5]||(q[5]=E=>Y(E))},null,8,["modelValue"])]),e("div",mo,[e("label",null,[pe("Priority "),H(e("span",fo,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(ce,{modelValue:l(r),"onUpdate:modelValue":q[6]||(q[6]=E=>U(r)?r.value=E:null),options:l(oe),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),qo,l(R)?(p(),f("p",vo,"Please add task name")):M("",!0),e("div",go,[s(N,{label:"Save",icon:"pi pi-check",text:"",onClick:P,loading:l(ne)},null,8,["loading"])])])}}},bo=zt(ho,[["__scopeId","data-v-8b75ef8a"]]);const at=o=>(Mt("data-v-8f26c046"),o=o(),Ht(),o),ko={class:"position-relative d-flex flex-column justify-content-between w-100 modal-container"},yo={class:"field flex flex-column"},wo=at(()=>e("label",{for:"name"},[pe("Edit Task Name"),e("i",{class:"text-red-400 text-italic"},"*")],-1)),_o={class:"field"},xo=at(()=>e("label",null,"Assignees",-1)),Do={class:"field"},To=at(()=>e("label",null,"Tags",-1)),So={class:"field"},$o=at(()=>e("label",null,"Due Date",-1)),Co={class:"field"},Vo=at(()=>e("label",null,"Priority",-1)),Eo=at(()=>e("br",null,null,-1)),Ao={key:0,class:"text-center",style:{color:"red"}},jo={class:"create-btn-wrapper mb-0"},Lo={__name:"EditTask",props:["singleTask","usersLists","tagsLists","projects"],emits:["closeEditModal"],setup(o,{emit:c}){var oe,ae,Y,P,h;const{editTask:y}=be(),{isTaskEdited:C,detectDuplicateTask:G}=Qe(be()),{singleTask:S,usersLists:Z,tagsLists:le,projects:ue}=o,ee=gt(),F=a(!1),ne=a((oe=S==null?void 0:S.data)==null?void 0:oe.name),K=a((ae=S==null?void 0:S.data)!=null&&ae.dueDate?new Date(S.data.dueDate).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),se=a(!1),qe=a(null);qe.value=(Y=S==null?void 0:S.data)!=null&&Y.assigneeObj?(P=S==null?void 0:S.data)==null?void 0:P.assigneeObj.map(q=>({id:q.id,name:q.name})):"";const R=a((h=S==null?void 0:S.data)==null?void 0:h.tagsObj),O=a(null);O.value=S.data.priority?{name:S.data.priority.name,code:S.data.priority.code}:"";const re=a([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),W=a(!1),J=c,r=q=>{if(console.log("test druve"),se.value)K.value=q;else{const T=new Date(q);T.setHours(23,59,0,0),K.value=T}};Ae(K,(q,T)=>{q&&T&&q!==T&&(se.value=!0)});const de=async()=>{if(F.value=!0,ne.value===null)W.value=!0,F.value=!1;else{W.value=!1;let q;if(K.value){const V=new Date(K.value);V.setDate(V.getDate()+1),q=V.toISOString()}const T={id:S.key,name:ne.value,priority:O.value.name,dueDate:q?new Date(new Date(q).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:qe.value.map(V=>V.id),tags:R.value.map(V=>V.id),project_id:ue};if(q){const V=new Date(q);V.setDate(V.getDate()-1),K.value=V?new Date(V).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await y(T),G.value===!0?(F.value=!1,ee.add({severity:"error",summary:"Error",detail:"Cannnot edit, edited task name already exists!",group:"br",life:3e3})):C.value===!0?(F.value=!1,J("closeEditModal",!1),J("visibleEdit","visibleEdit"),ee.add({severity:"success",summary:"Successful",detail:"Task updated Successfully",group:"br",life:3e3})):(F.value=!1,ee.add({severity:"error",summary:"Error",detail:"Unable to update task!",group:"br",life:3e3}))}};return St(()=>{const q=document.getElementById("editTaskName");Ot(()=>{q&&q.focus()})}),(q,T)=>{const V=Nt,me=xt,I=Tt,ce=Dt,N=vt;return p(),f("div",ko,[e("div",null,[e("div",yo,[wo,s(V,{id:"editTaskName",class:"border-gray-300",modelValue:l(ne),"onUpdate:modelValue":T[0]||(T[0]=j=>U(ne)?ne.value=j:null),rows:"3",cols:"15",invalid:q.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",_o,[xo,s(me,{display:"chip",modelValue:l(qe),"onUpdate:modelValue":T[1]||(T[1]=j=>U(qe)?qe.value=j:null),options:o.usersLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",Do,[To,s(me,{display:"chip",modelValue:l(R),"onUpdate:modelValue":T[2]||(T[2]=j=>U(R)?R.value=j:null),options:o.tagsLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",So,[$o,s(I,{modelValue:l(K),"onUpdate:modelValue":T[3]||(T[3]=j=>U(K)?K.value=j:null),class:"w-full",placeholder:"Set Due Date",showTime:"",hideOnDateTimeSelect:"",hourFormat:"12",onDateSelect:T[4]||(T[4]=j=>r(j))},null,8,["modelValue"])]),e("div",Co,[Vo,s(ce,{modelValue:l(O),"onUpdate:modelValue":T[5]||(T[5]=j=>U(O)?O.value=j:null),options:l(re),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),Eo,l(W)?(p(),f("p",Ao,"Please add/fill/check up all the fields ")):M("",!0),e("div",jo,[s(N,{label:"Update",icon:"pi pi-check",text:"",onClick:de,loading:l(F)},null,8,["loading"])])])])}}},Uo=zt(Lo,[["__scopeId","data-v-8f26c046"]]),el=kl("fileUpload",()=>{const o=a(!1),c=a(!1),y=a(!1);async function C(S,Z){c.value=!0;const le=new FormData;le.append("task_id",S),le.append("attachments",Z);const ue=ot("token");try{const ee=await fetch("https://pbe.singularitybd.net/api/v1/tasks/attachment-upload",{method:"POST",headers:{Authorization:`Bearer ${ue.value}`},body:le});if(!ee.ok)throw new Error("Network response was not ok");const F=await ee.json();console.log("upload data =>",F),(F==null?void 0:F.user_message)==="success"?o.value=!0:o.value=!1,c.value=!1}catch(ee){console.error("Error uploading file:",ee),o.value=!1,c.value=!1}}async function G(S){const Z=ot("token");try{const le=await fetch(`https://pbe.singularitybd.net/api/v1/tasks/attachment-delete/${S}`,{method:"DELETE",headers:{Authorization:`Bearer ${Z.value}`}});if(!le.ok)throw new Error("Network response was not ok");const ue=await le.json();console.log("delete data =>",ue),(ue==null?void 0:ue.user_message)==="success"?y.value=!0:y.value=!1}catch(le){console.error("Error uploading file:",le),y.value=!1}}return{fileUpload:C,fileDelete:G,isFileUpload:o,isLoading:c,isFileDeleted:y}});var Io=`
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
`,Oo={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},tl=yl.extend({name:"editor",css:Io,classes:Oo}),zo={name:"BaseEditor",extends:Ol,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:tl,provide:function(){return{$parentInstance:this}},beforeMount:function(){var c;tl.loadStyle({nonce:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0||(c=c.csp)===null||c===void 0?void 0:c.nonce})}};function qt(o){"@babel/helpers - typeof";return qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},qt(o)}function ll(o,c){var y=Object.keys(o);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(o);c&&(C=C.filter(function(G){return Object.getOwnPropertyDescriptor(o,G).enumerable})),y.push.apply(y,C)}return y}function Mo(o){for(var c=1;c<arguments.length;c++){var y=arguments[c]!=null?arguments[c]:{};c%2?ll(Object(y),!0).forEach(function(C){Ho(o,C,y[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(y)):ll(Object(y)).forEach(function(C){Object.defineProperty(o,C,Object.getOwnPropertyDescriptor(y,C))})}return o}function Ho(o,c,y){return c=No(c),c in o?Object.defineProperty(o,c,{value:y,enumerable:!0,configurable:!0,writable:!0}):o[c]=y,o}function No(o){var c=Bo(o,"string");return qt(c)=="symbol"?c:String(c)}function Bo(o,c){if(qt(o)!="object"||!o)return o;var y=o[Symbol.toPrimitive];if(y!==void 0){var C=y.call(o,c||"default");if(qt(C)!="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(o)}var nl=function(){try{return window.Quill}catch{return null}}(),dl={name:"Editor",extends:zo,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(c,y){c!==y&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(c))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var c=this,y={modules:Mo({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};nl?(this.quill=new nl(this.$refs.editorElement,y),this.initQuill(),this.handleLoad()):wl(()=>import("./quill.c17a0c04.js").then(C=>C.q),["./quill.c17a0c04.js","./vuedraggable.umd.6360ec42.js","./entry.e89720bc.js","./entry.5d0b2de3.css"],import.meta.url).then(function(C){C&&_l.isExist(c.$refs.editorElement)&&(C.default?c.quill=new C.default(c.$refs.editorElement,y):c.quill=new C(c.$refs.editorElement,y),c.initQuill())}).then(function(){c.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(c){this.quill&&(c?this.quill.setContents(this.quill.clipboard.convert(c)):this.quill.setText(""))},initQuill:function(){var c=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(y,C,G){if(G==="user"){var S=c.$refs.editorElement.children[0].innerHTML,Z=c.quill.getText().trim();S==="<p><br></p>"&&(S=""),c.$emit("update:modelValue",S),c.$emit("text-change",{htmlValue:S,textValue:Z,delta:y,source:G,instance:c.quill})}}),this.quill.on("selection-change",function(y,C,G){var S=c.$refs.editorElement.children[0].innerHTML,Z=c.quill.getText().trim();c.$emit("selection-change",{htmlValue:S,textValue:Z,range:y,oldRange:C,source:G,instance:c.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Fo(o,c,y,C,G,S){return p(),f("div",A({class:o.cx("root")},o.ptmi("root")),[e("div",A({ref:"toolbarElement",class:o.cx("toolbar")},o.ptm("toolbar")),[xl(o.$slots,"toolbar",{},function(){return[e("span",A({class:"ql-formats"},o.ptm("formats")),[e("select",A({class:"ql-header",defaultValue:"0"},o.ptm("header")),[e("option",A({value:"1"},o.ptm("option")),"Heading",16),e("option",A({value:"2"},o.ptm("option")),"Subheading",16),e("option",A({value:"0"},o.ptm("option")),"Normal",16)],16),e("select",A({class:"ql-font"},o.ptm("font")),[e("option",Dl(Tl(o.ptm("option"))),null,16),e("option",A({value:"serif"},o.ptm("option")),null,16),e("option",A({value:"monospace"},o.ptm("option")),null,16)],16)],16),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-bold",type:"button"},o.ptm("bold")),null,16),e("button",A({class:"ql-italic",type:"button"},o.ptm("italic")),null,16),e("button",A({class:"ql-underline",type:"button"},o.ptm("underline")),null,16)],16),(p(),f("span",A({key:G.reRenderColorKey,class:"ql-formats"},o.ptm("formats")),[e("select",A({class:"ql-color"},o.ptm("color")),null,16),e("select",A({class:"ql-background"},o.ptm("background")),null,16)],16)),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-list",value:"ordered",type:"button"},o.ptm("list")),null,16),e("button",A({class:"ql-list",value:"bullet",type:"button"},o.ptm("list")),null,16),e("select",A({class:"ql-align"},o.ptm("select")),[e("option",A({defaultValue:""},o.ptm("option")),null,16),e("option",A({value:"center"},o.ptm("option")),null,16),e("option",A({value:"right"},o.ptm("option")),null,16),e("option",A({value:"justify"},o.ptm("option")),null,16)],16)],16),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-link",type:"button"},o.ptm("link")),null,16),e("button",A({class:"ql-image",type:"button"},o.ptm("image")),null,16),e("button",A({class:"ql-code-block",type:"button"},o.ptm("codeBlock")),null,16)],16),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-clean",type:"button"},o.ptm("clean")),null,16)],16)]})],16),e("div",A({ref:"editorElement",class:o.cx("content"),style:o.editorStyle},o.ptm("content")),null,16)],16)}dl.render=Fo;const Ro={class:"grid"},Jo={class:"col-12 flex justify-content-between"},Yo={class:"m-0 detail-task-name cursor-pointer"},Go={class:"flex gap-1"},Ko=e("h5",{class:"m-0 ml-2"},"Activity",-1),Wo={class:"col-12 lg:col-7"},Po={class:"task-wrapper card"},Qo={class:"task-det no-scrollbar"},Xo={class:"flex justify-content-between gap-2 flex-wrap align-items-center"},Zo={class:"w-full lg:w-fit"},ea={class:"flex justify-content-between gap-2 flex-wrap align-items-centertask-detail-wrapper"},ta=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-user"}),e("p",null,"Assignee:")],-1),la={class:"flex mt-2 justify-content-between gap-2 align-items-center task-detail-wrapper"},na=e("div",{class:"flex justify-content-start gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-calendar"}),e("p",{class:"text-nowrap"},"Due Date:")],-1),oa={class:"w-full lg:w-fit"},aa={class:"flex justify-content-between gap-2 align-items-center task-detail-wrapper"},ia=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",null,"Status:")],-1),sa={class:"flex mt-2 justify-content-start gap-6 align-items-center task-detail-wrapper"},ra=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-stopwatch"}),e("p",{class:"text-nowrap"},"Track Time:")],-1),da={class:"clock-wrapper relative"},ca={class:"border-round px-2 pt-3 pb-2"},ua={class:"flex justify-content-center align-items-center gap-3 manual-wrapper -mt-1"},pa=e("label",{for:"hours",class:"block mb-2 text-xs"},"Hours",-1),ma=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),fa=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),qa=e("label",{for:"minutes",class:"block mb-2 text-xs"},"Minutes",-1),va=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),ga=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),ha={class:"flex justify-content-center align-items-center",style:{"margin-top":"0.49rem !important"}},ba=e("div",null,null,-1),ka={class:"flex justify-content-between gap-2 align-items-centertask-detail-wrapper mt-3",style:{width:"100%"}},ya=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property",style:{width:"10%"}},[e("span",{class:"pi pi-tags"}),e("p",null,"Tags:")],-1),wa={class:"field mt-3 flex flex-column"},_a=e("div",{class:"flex justify-content-start gap-2 align-items-center mb-1 task-detail-property"},[e("span",{class:"pi pi-sliders-h"}),e("p",null,"Description:")],-1),xa={class:"ql-formats flex justify-content-end mr-0"},Da={class:"ql-bold"},Ta={class:"ql-italic"},Sa={class:"ql-underline"},$a={class:"ql-strike"},Ca=e("span",{class:"ql-formats"},[e("select",{class:"ql-color"}),e("select",{class:"ql-background"})],-1),Va=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"ordered"},null,-1),Ea=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"bullet"},null,-1),Aa=e("button",{class:"ql-link",type:"button","data-pc-section":"link"},null,-1),ja={key:0,class:"flex justify-content-end"},La={class:"m-0"},Ua={class:"my-3 attach-sec flex align-items-center justify-content-start gap-2",style:{"overflow-x":"scroll"}},Ia={key:0,class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-5 attch-w",style:{"background-color":"#f7fafc"}},Oa=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),za=e("div",{class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},[e("div",{class:"text-xs"},"asdasd....asdme.extng"),e("div",{class:"text-xs"},"9 MAy, 2024")],-1),Ma=[Oa,za],Ha=["href"],Na=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),Ba={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Fa={class:"text-xs"},Ra={class:"text-xs"},Ja=["href"],Ya=["src"],Ga={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Ka={class:"text-xs"},Wa={class:"text-xs"},Pa=["href"],Qa=e("div",{class:"pi pi-video text-6xl attach-icon"},null,-1),Xa={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Za={class:"text-xs"},ei={class:"text-xs"},ti=["href"],li=e("div",{class:"pi pi-file-pdf text-6xl text-danger attach-icon"},null,-1),ni={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},oi={class:"text-xs"},ai={class:"text-xs"},ii=["href"],si=e("div",{class:"pi pi-file-word text-6xl text-blue attach-icon"},null,-1),ri={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},di={class:"text-xs"},ci={class:"text-xs"},ui=["href"],pi=e("div",{class:"pi pi-file-excel text-6xl attach-icon",style:{color:"#04aa6d"}},null,-1),mi={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},fi={class:"text-xs"},qi={class:"text-xs"},vi=["onClick"],gi=e("i",{class:"pi pi-times text-xs text-white"},null,-1),hi=[gi],bi={key:0,class:"flex gap-2 w-full justify-content-center"},ki=e("p",{class:"text-center"},"No Data found...",-1),yi=["onClick"],wi={class:"action-dropdown-det"},_i={class:"action-dropdown-content-det"},xi={class:"card"},Di={class:"flex justify-content-start align-items-center task-detail-wrapper"},Ti=e("div",{class:"flex justify-content-start gap-2 align-items-center bounce-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",{class:"text-nowrap"},"Bounce Status:")],-1),Si={class:"col-12 lg:col-5"},$i={class:"comment-wrapper card no-scrollbar"},Ci={class:"comments no-scrollbar"},Vi={class:"my-2 text-surface-800"},Ei={key:0},Ai=["innerHTML"],ji={class:"my-2 text-surface-800"},Li={class:"flex justify-content-start align-items-center"},Ui=["src"],Ii={class:"text-lg"},Oi={key:0,class:"flex justify-content-start my-2"},zi=["href"],Mi=e("div",{class:"pi pi-file"},null,-1),Hi={class:"attach-detail flex flex-column justify-content-center align-items-center"},Ni={class:"text-xs"},Bi={class:"m-0 ml-1",style:{"font-size":"0.9rem"}},Fi={style:{"line-height":"0"},class:"pb-1 float-right mt-3 mb-2"},Ri={key:0,class:"text-sm font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-itens-center mb-1 relative"},Ji=e("span",{class:"pi pi-file-import mr-2"},null,-1),Yi=e("i",{class:"pi pi-times"},null,-1),Gi=[Yi],Ki={__name:"TaskDetail",props:["usersLists","tagsLists","projID"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask","updateTaskTable"],setup(o,{emit:c}){var We,et,tt,Be,Pe,ye;const y=sl(),{fileUpload:C,fileDelete:G}=el(),{isFileUpload:S,isLoading:Z,isFileDeleted:le}=Qe(el()),{getTaskTimerData:ue,setManualTime:ee,storeTaskTimer:F}=Zt();Qe(Zt());const{editTask:ne,addTaskComment:K,getTaskDetails:se,getSingleProject:qe}=be(),{isTaskEdited:R,isTaskCommentCreated:O,singleTaskComments:re,subTasks:W,taskStatus:J,taskDetails:r,taskActivity:de}=Qe(be());localStorage.setItem("taskDetailID",JSON.stringify(r.value.id));const{usersLists:oe,tagsLists:ae,projID:Y}=o,P=c,h=gt(),q=a(!1),T=a(Je("update_task")),V=a(Je("edit_bounce")),me=a(Je("create_task")),I=a(null);I.value=(et=(We=r.value)==null?void 0:We.assignee)==null?void 0:et.map(i=>({id:i.id,name:i.name}));const ce=a(!1);Ae(I,i=>{ce.value=!0});const N=a((Be=(tt=r.value)==null?void 0:tt.tags)==null?void 0:Be.map(i=>({id:i.id,name:i.name}))),j=a(!1);Ae(N,i=>{j.value=!0});const E=a((Pe=r.value)!=null&&Pe.due_date?new Date(r.value.due_date).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),Ye=a(!1),Me=i=>{if(console.log("test druve"),Ye.value)E.value=i;else{const t=new Date(i);t.setHours(23,59,0,0),E.value=t}};Ae(E,(i,t)=>{i&&t&&i!==t&&(Ye.value=!0)});const L=a(E.value);Ae(E,(i,t)=>{i&&(L.value=new Date(i).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase())});const v=a(),it=Sl(),fe=a(null),ge=a(null),Xe=a(!1),Te=a(!1),Ge=async i=>{var n,x;Te.value=!0;let t;if(fe.value>0||ge.value>0){t=fe.value*3600+ge.value*60,console.log("totalSeconds",t);const g=await ee((n=r.value)==null?void 0:n.id,t);(g==null?void 0:g.code)===200?(await se((x=r.value)==null?void 0:x.id),Te.value=!1,h.add({severity:"success",summary:"Duration Added",detail:`Duration: ${fe.value?fe.value:0} hours and ${ge.value?ge.value:0} minutes`,group:"br",life:3e3}),fe.value=null,ge.value=null,i()):(Te.value=!1,h.add({severity:"error",summary:"Error",detail:"Unable to add duration",group:"br",life:3e3})),console.log("responseData",g)}else Te.value=!1,h.add({severity:"error",summary:"Error",detail:"Please add duration",group:"br",life:3e3});t=null},He=i=>{var t;console.log(i.detail),i.detail===3&&((t=r.value)==null?void 0:t.is_timer_start)==="false"&&it.require({target:i.currentTarget,group:"headless",message:"Set task duration:",accept:()=>{h.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{}})},Se=a("00:00:00");let je=null;const ke=a(!1),Le=async()=>{var i,t,n,x,g,w,D,De,Ie,Ee;if(r.value.id,ke.value=!0,((i=r.value)==null?void 0:i.is_timer_start)==="false"){await ue("start",(t=r.value)==null?void 0:t.id),await se((n=r.value)==null?void 0:n.id),$(),ke.value=!1,localStorage.setItem("storeTaskID",JSON.stringify((x=r.value)==null?void 0:x.id)),localStorage.setItem("storeTaskProjectID",JSON.stringify(Number(Y))),localStorage.setItem("storeTaskSpaceID",JSON.stringify((g=r.value)==null?void 0:g.project.space_id)),localStorage.setItem("storeTaskCompanyID",JSON.stringify((w=r.value)==null?void 0:w.project.company_id)),localStorage.setItem("storeTaskTimerStartTime",JSON.stringify(r.value.taskTimer.start_time));let lt={task_id:r.value.id,project_id:Y,space_id:r.value.project.space_id,company_id:r.value.project.company_id,timerStartTime:r.value.taskTimer.start_time};await F(lt),h.add({severity:"success",summary:"Task Timer",detail:"Timer Started",group:"br",life:3e3}),await qe(Y)}else await ue("stop",(D=r.value)==null?void 0:D.id,(Ie=(De=r.value)==null?void 0:De.taskTimer)==null?void 0:Ie.id),await se((Ee=r.value)==null?void 0:Ee.id),$t(),ke.value=!1,localStorage.removeItem("storeTaskID"),localStorage.removeItem("storeTaskProjectID"),localStorage.removeItem("storeTaskSpaceID"),localStorage.removeItem("storeTaskCompanyID"),localStorage.removeItem("storeTaskTimerStartTime"),await F({task_id:null,project_id:null,space_id:null,company_id:null}),h.add({severity:"success",summary:"Task Timer",detail:"Timer Stopped",group:"br",life:3e3}),await qe(Y)},$=()=>{r.value.id,console.log("taskDetails.value.taskTimer.start_time",r.value.taskTimer.start_time);const i=new Date(r.value.taskTimer.start_time).getTime();je=setInterval(()=>{const t=Math.floor((Date.now()-i)/1e3);Se.value=ut(t)},1e3)},$t=()=>{clearInterval(je),Se.value=ut(r.value.total_duration)},we=a([{is_bounce:"No"},{is_bounce:"Yes"}]),_e=a(),xe=a(((ye=r.value)==null?void 0:ye.description)||" "),Ze=a(!1);Ae(xe,i=>{i.length===0&&(xe.value=" "),Ze.value=!0});const Ke=a(null),Ct=a(),st=a(!0),Ue=a(!1),Vt=()=>{Ue.value=!0,st.value=!1},bt=()=>{Ue.value=!1,st.value=!0},rt=async()=>{var i;q.value=!0,await K((i=r.value)==null?void 0:i.id,Ke.value,u.value),O.value===!0?(h.add({severity:"success",summary:"Successful",detail:"Comment added Successfully",group:"br",life:3e3}),Ke.value=null,q.value=!1,u.value=null):(h.add({severity:"error",summary:"Error",detail:"Unable to add comment",group:"br",life:3e3}),q.value=!1)},dt=i=>{const t=new Date(i),x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],g=t.getDate(),w=t.getFullYear().toString().substr(-2),D=t.getHours(),De=t.getMinutes(),Ie=D>=12?"PM":"AM",Ee=D%12||12,lt=De<10?"0"+De:De;return`${g} ${x}'${w}, ${Ee}:${lt}${Ie}`},ct=async()=>{var x,g;let i;if(E.value){const w=new Date(E.value);w.setDate(w.getDate()+1),i=w.toISOString()}console.log("checkDate",L.value);const t=new Date((x=r.value)==null?void 0:x.due_date).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});console.log("formattedDueDate",t);const n={id:(g=r.value)==null?void 0:g.id,...Ze.value===!0?{description:xe.value}:{},project_id:Y,...L.value!==t?{dueDate:i?new Date(new Date(i).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null}:{},...ce.value===!0?{assignees:I.value.map(w=>w.id)}:{},...j.value===!0?{tags:N.value.map(w=>w.id)}:{}};if(i){const w=new Date(i);w.setDate(w.getDate()-1),E.value=w?new Date(w).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await ne(n),R.value===!0?(h.add({severity:"success",summary:"Successful",detail:"Task detail updated",group:"br",life:3e3}),Ct.value=null,Ze.value===!0&&(Ze.value=!1,console.log("isDescriptionEdited Flagged")),ce.value===!0&&(ce.value=!1,console.log("isAsigneeEdited Flagged")),j.value===!0&&(j.value=!1,console.log("isTagsEdited Flagged"))):h.add({severity:"error",summary:"Error",detail:"Unable to upadte task detail",group:"br",life:3e3})},$e=a(null),Et=i=>{$e.value=i.target.files[0]},At=async()=>{var i,t;$e.value&&console.log("file =>",$e.value),await C((i=r.value)==null?void 0:i.id,$e.value),S.value===!0?(h.add({severity:"success",summary:"Successfull",detail:"File Upload successfully!",group:"br",life:3e3}),se((t=r.value)==null?void 0:t.id),document.getElementById("attachInput").value=null,$e.value=null):h.add({severity:"error",summary:"Error",detail:"Unable to upload file!",group:"br",life:3e3})},Ce=i=>{const t=["jpg","JPG","jpeg","png","gif","bmp","svg","webp","ico","tiff","tif","heic","heif"],n=["mp4","avi","flv","wmv","mov","3gp","mkv"],x=["pdf","PDF","ppt","pptx"],g=["doc","docx","rtf"],w=["xls","xlsx","csv"];return t.some(D=>i.endsWith("."+D))?"image":n.some(D=>i.endsWith("."+D))?"video":x.some(D=>i.endsWith("."+D))?"pdf":g.some(D=>i.endsWith("."+D))?"word":w.some(D=>i.endsWith("."+D))?"excel":"file"};St(async()=>{var n,x;await se((n=r.value)==null?void 0:n.id);const i={name:r.value.status_name,code:r.value.status};v.value=i;const t={is_bounce:r.value.is_bounce};_e.value=t,((x=r.value)==null?void 0:x.is_timer_start)==="true"&&$()});async function jt(i){var t,n,x;try{const g=ot("token"),{data:w,pending:D}=await _t(`${y.public.apiUrl}/tasks/update/${(t=r.value)==null?void 0:t.id}`,{method:"POST",headers:{Authorization:`Bearer ${g.value}`},body:{status:i.code}},"$nwfJLeTGBC");((n=w.value)==null?void 0:n.app_message)==="success"?(se((x=r.value)==null?void 0:x.id),h.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),P("updateTaskTable")):h.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(g){console.error("Error fetching data:",g)}}async function Lt(i){var t,n,x;try{const g=ot("token"),{data:w,pending:D}=await _t(`${y.public.apiUrl}/tasks/update/${(t=r.value)==null?void 0:t.id}`,{method:"POST",headers:{Authorization:`Bearer ${g.value}`},body:{is_bounce:i.is_bounce}},"$np1kf0qdb3");console.log("dataBO",w),((n=w.value)==null?void 0:n.app_message)==="success"?(se((x=r.value)==null?void 0:x.id),h.add({severity:"success",summary:"Successfull",detail:"Bounce Status Changed",group:"br",life:3e3})):h.add({severity:"error",summary:"Error",detail:"Unable to change bounce status",group:"br",life:3e3})}catch(g){console.error("Error fetching data:",g)}}const Ve=i=>{const n=i.split("/");return n[n.length-1]},Ne=i=>{const t=["Jan","Feb","Mar","Apr","MAy","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=i,x=new Date(n),g={year:"numeric",month:"long",day:"numeric"},D=x.toLocaleDateString("en-US",g).split(" "),De=t.indexOf(D[0]);return De!==-1&&(D[0]=t[De]),D.join(" ")};function ut(i){const t=Math.floor(i/3600).toString().padStart(2,"0"),n=Math.floor(i%3600/60).toString().padStart(2,"0"),x=(i%60).toString().padStart(2,"0");return`${t}:${n}:${x}`}const kt=async i=>{var t;await G(i),le.value===!0?(h.add({severity:"success",summary:"Successful",detail:"File Deleted successfully!",group:"br",life:3e3}),se((t=r.value)==null?void 0:t.id)):h.add({severity:"error",summary:"Error",detail:"Unable to delete file!",group:"br",life:3e3})},m=a(null),u=a(null),z=a(""),B=i=>{u.value=i.target.files[0],z.value=u.value?u.value.name:""},Q=()=>{m.value.click()},he=async()=>{u.value=null},pt=async()=>{var g;const i=ot("token"),{data:t,pending:n,error:x}=await _t(`${y.public.apiUrl}/tasks/share/${(g=r.value)==null?void 0:g.id}`,{method:"GET",headers:{Authorization:`Bearer ${i.value}`}},"$yuqoLxhdIO");if(x.value){h.add({severity:"error",summary:"Error",detail:"Failed to share",life:3e3});return}else{const w=document.createElement("textarea");w.value=t.value.shared_web_link,document.body.appendChild(w),w.select(),document.execCommand("copy"),document.body.removeChild(w),h.add({severity:"success",summary:"Share successful",detail:"Shared link copied",group:"br",life:3e3});return}};return(i,t)=>{var Bt,Ft,Rt,Jt,Yt;const n=xt,x=El,g=Dt,w=Al,D=vt,De=jl,Ie=Ll,Ee=Fe,lt=il,cl=Ul,ul=al,pl=Il,ml=Nt,Oe=It("tooltip");return p(),f("div",Ro,[e("div",Jo,[H((p(),f("h5",Yo,[pe(b(l(r).name),1)])),[[Oe,{value:`${l(r).name}`,pt:{width:"200px"}},void 0,{top:!0}]]),e("div",Go,[H(e("span",{onClick:pt,class:"pi pi-share-alt my-auto cursor-pointer ml-2 share-btn"},null,512),[[Oe,{value:"Share Task"},void 0,{top:!0}]]),Ko])]),e("div",Wo,[e("div",null,[e("div",Po,[e("div",Qo,[e("form",{onSubmit:Xt(ct,["prevent"]),class:"mt-2 task-detail ml-2"},[e("div",Xo,[e("div",Zo,[e("div",ea,[ta,s(x,{style:{width:"164.94px"},class:"input-fields"},{default:k(()=>[s(n,{display:"chip",modelValue:l(I),"onUpdate:modelValue":t[0]||(t[0]=_=>U(I)?I.value=_:null),filter:"",resetFilterOnHide:"",options:o.usersLists,optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:2,class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",la,[na,s(x,{class:"input-fields"},{default:k(()=>[s(l(Tt),{style:"width: 164.94px; border-radius:7px",modelValue:l(E),"onUpdate:modelValue":t[1]||(t[1]=_=>U(E)?E.value=_:null),placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:t[2]||(t[2]=_=>Me(_))},null,8,["modelValue"])]),_:1})])]),e("div",oa,[e("div",aa,[ia,s(g,{onChange:t[3]||(t[3]=_=>jt(l(v))),modelValue:l(v),"onUpdate:modelValue":t[4]||(t[4]=_=>U(v)?v.value=_:null),options:l(J),optionLabel:"name",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["modelValue","options"])]),e("div",sa,[ra,e("div",da,[s(De,{close:l(Xe),group:"headless"},{container:k(({message:_,acceptCallback:Ut,rejectCallback:te})=>[e("div",ca,[e("div",ua,[e("div",null,[pa,s(w,{modelValue:l(fe),"onUpdate:modelValue":t[5]||(t[5]=ie=>U(fe)?fe.value=ie:null),placeholder:"00",showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:23,id:"hours"},{incrementbuttonicon:k(()=>[ma]),decrementbuttonicon:k(()=>[fa]),_:1},8,["modelValue"])]),e("div",null,[qa,s(w,{modelValue:l(ge),"onUpdate:modelValue":t[6]||(t[6]=ie=>U(ge)?ge.value=ie:null),placeholder:"00",showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:59,id:"minutes"},{incrementbuttonicon:k(()=>[va]),decrementbuttonicon:k(()=>[ga]),_:1},8,["modelValue"])])]),e("div",ha,[s(D,{icon:"pi pi-check px-2 py-0 text-sm",label:"",class:"border-none w-full mx-3",loading:l(Te),onClick:ie=>Ge(te),size:"small"},null,8,["loading","onClick"])])])]),_:1},8,["close"]),H(s(D,{loading:l(ke),class:"clock-btn",onClick:Le,icon:((Bt=l(r))==null?void 0:Bt.is_timer_start)=="true"?"pi pi-stop":"pi pi-play",severity:((Ft=l(r))==null?void 0:Ft.is_timer_start)=="true"?" stop-color":"",rounded:"","aria-label":"Filter"},null,8,["loading","icon","severity"]),[[Oe,{value:((Rt=l(r))==null?void 0:Rt.is_timer_start)=="true"?"Stop":"Start"},void 0,{top:!0}]]),e("div",{class:"text-sm absolute",onClick:t[7]||(t[7]=_=>He(_))},b(((Jt=l(r))==null?void 0:Jt.is_timer_start)=="true"?l(Se):ut((Yt=l(r))==null?void 0:Yt.total_duration)),1)]),ba])])]),e("div",ka,[ya,s(x,{style:{width:"90%"},class:"input-fields"},{default:k(()=>[s(n,{display:"chip",modelValue:l(N),"onUpdate:modelValue":t[8]||(t[8]=_=>U(N)?N.value=_:null),filter:"",resetFilterOnHide:"",options:o.tagsLists,optionLabel:"name",placeholder:"Select Tags",class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",wa,[_a,s(l(dl),{modelValue:l(xe),"onUpdate:modelValue":t[9]||(t[9]=_=>U(xe)?xe.value=_:null),editorStyle:"height: 150px",readonly:!l(T)},{toolbar:k(()=>[e("span",xa,[H(e("button",Da,null,512),[[Oe,"Bold",void 0,{bottom:!0}]]),H(e("button",Ta,null,512),[[Oe,"Italic",void 0,{bottom:!0}]]),H(e("button",Sa,null,512),[[Oe,"Underline",void 0,{bottom:!0}]]),H(e("button",$a,null,512),[[Oe,"Strikethrough",void 0,{bottom:!0}]]),Ca,Va,Ea,Aa])]),_:1},8,["modelValue","readonly"])]),l(T)?(p(),f("div",ja,[s(D,{type:"submit",label:"Save"})])):M("",!0)],32),s(cl,{class:"mt-3"},{default:k(()=>{var _,Ut;return[s(Ie,{class:"file-upload",header:"Detail"},{default:k(()=>{var te,ie,mt,ft,Gt,Kt,Wt,Pt;return[e("p",La,"Attachments: "+b((te=l(r))!=null&&te.attachments&&((mt=(ie=l(r))==null?void 0:ie.attachments)==null?void 0:mt.length)>0?(Gt=(ft=l(r))==null?void 0:ft.attachments)==null?void 0:Gt.length:0),1),e("div",Ua,[(Kt=l(r))!=null&&Kt.attachments&&((Wt=l(r))==null?void 0:Wt.attachments.length)===0?(p(),f("div",Ia,Ma)):M("",!0),(p(!0),f(ze,null,Re((Pt=l(r))==null?void 0:Pt.attachments,d=>(p(),f("div",{key:d,target:"_blank",class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-2 relative",style:{"background-color":"#f7fafc"}},[Ce(d==null?void 0:d.file)==="file"?(p(),f("a",{key:0,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:d==null?void 0:d.file},[Na,e("div",Ba,[e("div",Fa,b(Ve(d==null?void 0:d.file)),1),e("div",Ra,b(Ne(d==null?void 0:d.created_at)),1)])],8,Ha)):M("",!0),Ce(d==null?void 0:d.file)==="image"?(p(),f("a",{key:1,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 relative",href:d==null?void 0:d.file},[e("img",{src:d==null?void 0:d.file,alt:"",style:{width:"90%",height:"80px","border-radius":"10px","border-top-left-radius":"10px","object-fit":"cover"}},null,8,Ya),e("div",Ga,[e("div",Ka,b(Ve(d==null?void 0:d.file)),1),e("div",Wa,b(Ne(d==null?void 0:d.created_at)),1)])],8,Ja)):M("",!0),Ce(d==null?void 0:d.file)==="video"?(p(),f("a",{key:2,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:d==null?void 0:d.file},[Qa,e("div",Xa,[e("div",Za,b(Ve(d==null?void 0:d.file)),1),e("div",ei,b(Ne(d==null?void 0:d.created_at)),1)])],8,Pa)):M("",!0),Ce(d==null?void 0:d.file)==="pdf"?(p(),f("a",{key:3,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:d==null?void 0:d.file},[li,e("div",ni,[e("div",oi,b(Ve(d==null?void 0:d.file)),1),e("div",ai,b(Ne(d==null?void 0:d.created_at)),1)])],8,ti)):M("",!0),Ce(d==null?void 0:d.file)==="word"?(p(),f("a",{key:4,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:d==null?void 0:d.file},[si,e("div",ri,[e("div",di,b(Ve(d==null?void 0:d.file)),1),e("div",ci,b(Ne(d==null?void 0:d.created_at)),1)])],8,ii)):M("",!0),Ce(d==null?void 0:d.file)==="excel"?(p(),f("a",{key:5,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:d==null?void 0:d.file},[pi,e("div",mi,[e("div",fi,b(Ve(d==null?void 0:d.file)),1),e("div",qi,b(Ne(d==null?void 0:d.created_at)),1)])],8,ui)):M("",!0),e("div",{onClick:as=>kt(d==null?void 0:d.id),class:"absolute bg-red-500 text-white p-2 flex align-items-center justify-content-center close-btn"},hi,8,vi)]))),128))]),l(T)?(p(),f("div",bi,[e("input",{onChange:Et,id:"attachInput",class:"float-right file-up-btn",type:"file",placeholder:"+"},null,32),s(D,{type:"button",loading:l(Z),onClick:At,label:"Upload"},null,8,["loading"])])):M("",!0)]}),_:1}),s(Ie,{header:`Sub Tasks ${(_=l(W))!=null&&_.length?l(W).length:0}`},{default:k(()=>[l(me)?H((p(),ve(D,{key:0,icon:"pi pi-plus",label:"Create",onClick:t[10]||(t[10]=te=>{var ie;return P("openCreateSpace",(ie=l(r))==null?void 0:ie.id,"sub-task")}),class:"mr-2 sub-create",severity:"secondary"},null,512)),[[Oe,{value:"Create Sub Task"},void 0,{right:!0}]]):M("",!0),s(lt,{class:"tree-table",value:l(W),lazy:!0,tableProps:{style:{minWidth:"650px"}},style:{overflow:"auto"}},{empty:k(()=>[ki]),default:k(()=>[s(Ee,{class:"cursor-pointer",field:"name",header:"Name",expander:"",style:{width:"45%"}},{body:k(te=>[H((p(),f("span",{class:"subtaskTitle",onClick:ie=>P("handleTaskDetailView",te.node)},[pe(b(te.node.data.name),1)],8,yi)),[[Oe,{value:`${te.node.data.name}`},void 0,{left:!0}]])]),_:1}),s(Ee,{field:"assignee",header:"Assignee",style:{width:"25%"}}),s(Ee,{field:"dueDateValue",header:"Due Date",style:X([{width:"11.5%"},{"text-wrap":"nowrap"}])}),s(Ee,{field:"priority",header:"Priority",style:{width:"10%"}},{body:k(te=>{var ie,mt,ft;return[e("span",{class:nt(["text-xs",((ie=te.node.data.priority)==null?void 0:ie.name)==="High"?"text-danger":((mt=te.node.data.priority)==null?void 0:mt.name)==="Medium"?"text-warning":"text-success"])},b((ft=te.node.data.priority)==null?void 0:ft.name),3)]}),_:1}),s(Ee,{field:"action",header:"Action"},{body:k(te=>[e("div",wi,[s(D,{style:{width:"30px",height:"30px","border-radius":"50%"},icon:"pi pi-ellipsis-v",class:"action-dropdown-det-toggle"}),e("div",_i,[s(D,{icon:"pi pi-trash",class:"mr-1 ac-btn dlt-action",severity:"warning",rounded:"",onClick:ie=>P("confirmDeleteTask",te.node.key)},null,8,["onClick"]),s(D,{icon:"pi pi-cog",class:"mr-1 ac-btn view-action",severity:"info",onClick:ie=>P("handleTaskDetailView",te.node),rounded:""},null,8,["onClick"]),s(D,{icon:"pi pi-pencil",class:"mr-1 ac-btn edit-action",severity:"success",onClick:ie=>P("handleTaskEdit",te.node),rounded:""},null,8,["onClick"]),s(D,{icon:"pi pi-plus",class:"ac-btn sub-action",severity:"success",onClick:ie=>P("openCreateSpace",te.node.key,"sub-task"),rounded:""},null,8,["onClick"])])])]),_:1})]),_:1},8,["value"])]),_:1},8,["header"]),s(Ie,{header:`Bounce ${((Ut=l(_e))==null?void 0:Ut.is_bounce)==="Yes"?"1":""}`},{default:k(()=>[e("div",xi,[e("div",Di,[Ti,s(g,{onChange:t[11]||(t[11]=te=>Lt(l(_e))),disabled:!l(V),modelValue:l(_e),"onUpdate:modelValue":t[12]||(t[12]=te=>U(_e)?_e.value=te:null),options:l(we),optionLabel:"is_bounce",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["disabled","modelValue","options"])])])]),_:1},8,["header"])]}),_:1})])])])]),e("div",Si,[e("div",null,[e("div",$i,[e("div",Ci,[e("div",Vi,[l(st)?(p(),ve(D,{key:0,onClick:Vt,label:"↓  Show More",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})):M("",!0)]),l(Ue)?(p(),f("div",Ei,[(p(!0),f(ze,null,Re(l(de),_=>(p(),f("ul",{key:_,style:{"margin-left":"-15px","margin-top":"-6px"}},[e("li",{innerHTML:_.title,style:{"font-size":"smaller !important"}},null,8,Ai)]))),128)),e("div",ji,[s(D,{onClick:bt,label:"↑ Hide",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})])])):M("",!0),(p(!0),f(ze,null,Re(l(re),_=>(p(),ve(pl,{class:"mb-2",key:_.id},{title:k(()=>[e("div",Li,[_.commentator_image?(p(),f("img",{key:0,class:"mr-2",src:_.commentator_image,alt:"",style:{width:"28px",height:"28px","border-radius":"50%"}},null,8,Ui)):(p(),ve(ul,{key:1,label:_.commentator_name.charAt(),class:"mr-2 capitalize",size:"small",style:{"background-color":"gray",color:"#ededed","border-radius":"50%"}},null,8,["label"])),e("p",Ii,b(_.commentator_name),1)])]),content:k(()=>[Ve(_==null?void 0:_.file)?(p(),f("div",Oi,[e("a",{href:_==null?void 0:_.file,target:"_blank",class:"bg-gray-200 attachment-wrapper cursor-pointer flex align-items-center px-3 py-3 gap-2 comment-file",style:{"background-color":"#f7fafc"}},[Mi,e("div",Hi,[e("div",Ni,b(Ve(_==null?void 0:_.file)),1)])],8,zi)])):M("",!0),e("p",Bi,b(_!=null&&_.comment?_==null?void 0:_.comment:""),1),e("i",Fi,b(dt(_.time)),1)]),_:2},1024))),128))]),e("form",{onSubmit:Xt(rt,["prevent"]),class:"comment-add"},[l(u)?(p(),f("div",Ri,[e("div",null,[Ji,pe(),e("span",null,b(l(z)),1)]),e("div",{onClick:he,class:"close-comment"},Gi)])):M("",!0),e("div",null,[s(ml,{placeholder:"Add comment",modelValue:l(Ke),"onUpdate:modelValue":t[13]||(t[13]=_=>U(Ke)?Ke.value=_:null),rows:"3",cols:"15",class:"border-gray-300 mb-1 comment-text",required:""},null,8,["modelValue"]),e("input",{class:"hidden",type:"file",ref_key:"fileInput",ref:m,onChange:B},null,544),s(D,{icon:"pi pi-cloud-upload",onClick:Q,"aria-label":"Filter"}),s(D,{class:"ml-2",type:"submit",icon:"pi pi-plus",label:"Add",loading:l(q)},null,8,["loading"])])],32)])])])])}}};const ht=o=>(Mt("data-v-060a3647"),o=o(),Ht(),o),Wi={class:"card"},Pi={class:"d-flex create-space-btn-wrapper mb-3 mr-2"},Qi={class:"breadCrumWrap"},Xi=ht(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),Zi=ht(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),es=ht(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),ts=ht(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),ls={class:"text cursor-pointer"},ns=ht(()=>e("p",null,"Are you sure you want to delete?",-1)),os={__name:"index",setup(o){const c=a(Je("read_task")),y=be(),C=be(),{getSingleProject:G,deleteTask:S,getTaskAssignModalData:Z,getTagsAssignModalData:le,getTaskDetails:ue}=be(),{singleProject:ee,isTaskDeleted:F,tasks:ne,kanbanTasks:K}=Qe(be()),se=a({}),qe=a(!0),R=gt(),O=a(!1),re=a(null),W=wt().query.task_key;console.log(W);const{projects:J}=wt().params,r=a(!1),de=a(null),oe=a(null),ae=a(null),Y=a([]),P=a([]),h=a(!1),q=a(!1),T=a(!1),V=async(L,v)=>{L?oe.value=L:oe.value="",v=="sub-task"?ae.value="Create Sub Task":ae.value="Create Task",r.value=!0,await Z(),Y.value=y.users,await le(),P.value=C.tags},me=async L=>{re.value=L,document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const v=document.createElement("div");v.style.position="absolute",v.style.top="0",v.style.left="0",v.style.width="100%",v.style.height="100%",v.style.backgroundColor="rgba(0, 0, 0, 0)",v.style.zIndex="1000000",document.documentElement.appendChild(v),await Z(),Y.value=y.users,await le(),P.value=C.tags,h.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(v)},I=L=>{de.value=L,q.value=!0},ce=async()=>{O.value=!0,await S(de.value,J),F.value===!0?(O.value=!1,R.add({severity:"success",summary:"Successful",detail:"Task Deleted Successfully",group:"br",life:3e3}),q.value=!1):(O.value=!1,R.add({severity:"error",summary:"Error",detail:"Unable to delete task",group:"br",life:3e3}))},N=async L=>{document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const v=document.createElement("div");v.style.position="absolute",v.style.top="0",v.style.left="0",v.style.width="100%",v.style.height="100%",v.style.backgroundColor="rgba(0, 0, 0, 0)",v.style.zIndex="100000010",document.documentElement.appendChild(v),T.value&&(T.value=!1),await ue(L.key),await Z(),Y.value=y.users,await le(),P.value=C.tags,T.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(v)};console.log("visibleTaskDetailView",T.value),Ae(T,L=>{if(L===!0)return 0;localStorage.removeItem("taskDetailID")}),(()=>{se.value={global:{value:null,matchMode:Cl.CONTAINS}}})();const E=L=>{r.value=L},Ye=L=>{h.value=L},Me=()=>{G(J)};return G(J),Ae(()=>wt().query.task_key,L=>{L&&N({key:L})}),W&&N({key:W}),$l(()=>{qe.value=!1}),(L,v)=>{var Se,je,ke,Le;const it=fl,fe=ql,ge=to,Xe=bo,Te=Uo,Ge=Ki,He=vt;return p(),f("div",Wi,[s(it,{position:"bottom-right",group:"br"}),e("div",Pi,[e("div",Qi,[s(fe,{to:"/",class:"text pi pi-home"}),Xi,s(fe,{to:"/companies",class:"text"},{default:k(()=>[pe("Companies")]),_:1}),Zi,s(fe,{to:`/companies/${(Se=l(ee))==null?void 0:Se.company_id}`,class:"text"},{default:k(()=>{var $;return[pe("Company - "+b(($=l(ee))==null?void 0:$.company_name),1)]}),_:1},8,["to"]),es,s(fe,{to:`/companies/${(je=l(ee))==null?void 0:je.company_id}/spaces/${(ke=l(ee))==null?void 0:ke.space_id}`,class:"text"},{default:k(()=>{var $;return[pe(" Space - "+b(($=l(ee))==null?void 0:$.space_name),1)]}),_:1},8,["to"]),ts,e("p",ls,"Project - "+b((Le=l(ee))==null?void 0:Le.name),1)])]),l(c)?(p(),ve(ge,{key:0,kanbanTasks:l(K),tasks:l(ne),onOpenCreateSpace:V,onHandleTaskEdit:v[0]||(v[0]=$=>me($)),onHandleTaskDetailView:v[1]||(v[1]=$=>N($)),onConfirmDeleteTask:v[2]||(v[2]=$=>I($))},null,8,["kanbanTasks","tasks"])):M("",!0),s(l(yt),{visible:l(r),"onUpdate:visible":v[4]||(v[4]=$=>U(r)?r.value=$:null),modal:"",header:l(ae),style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw","330px":"98vw"}},{default:k(()=>[s(Xe,{usersLists:l(Y),tagsLists:l(P),taskId:l(oe),projects:l(J),onCloseCreateModal:v[3]||(v[3]=$=>E($))},null,8,["usersLists","tagsLists","taskId","projects"])]),_:1},8,["visible","header"]),s(l(yt),{visible:l(h),"onUpdate:visible":v[6]||(v[6]=$=>U(h)?h.value=$:null),modal:"",header:"Edit Task",style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:k(()=>[s(Te,{singleTask:l(re),usersLists:l(Y),tagsLists:l(P),projects:l(J),onCloseEditModal:v[5]||(v[5]=$=>Ye($))},null,8,["singleTask","usersLists","tagsLists","projects"])]),_:1},8,["visible"]),s(l(yt),{visible:l(T),"onUpdate:visible":v[10]||(v[10]=$=>U(T)?T.value=$:null),modal:"",header:" ",style:{width:"90rem",height:"80rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:k(()=>[s(Ge,{usersLists:l(Y),tagsLists:l(P),projID:l(J),onOpenCreateSpace:V,onHandleTaskEdit:v[7]||(v[7]=$=>me($)),onHandleTaskDetailView:v[8]||(v[8]=$=>N($)),onConfirmDeleteTask:v[9]||(v[9]=$=>I($)),onUpdateTaskTable:Me},null,8,["usersLists","tagsLists","projID"])]),_:1},8,["visible"]),s(l(yt),{visible:l(q),"onUpdate:visible":v[12]||(v[12]=$=>U(q)?q.value=$:null),header:" ",style:{width:"25rem"}},{default:k(()=>[ns,s(He,{label:"No",icon:"pi pi-times",text:"",onClick:v[11]||(v[11]=$=>q.value=!1)}),s(He,{label:"Yes",icon:"pi pi-check",loading:l(O),text:"",onClick:ce},null,8,["loading"])]),_:1},8,["visible"])])}}},ir=zt(os,[["__scopeId","data-v-060a3647"]]);export{ir as default};
