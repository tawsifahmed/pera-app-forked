import fl from"./toast.esm.3ee1593a.js";import{_ as ql}from"./nuxt-link.f9f129d5.js";import xt from"./multiselect.esm.39052809.js";import Dt from"./dropdown.esm.f0ccdd50.js";import Tt from"./calendar.esm.30479069.js";import vt from"./button.esm.53dfb894.js";import vl from"./inputicon.esm.9b9203ee.js";import ol from"./inputtext.esm.d946f53c.js";import gl from"./iconfield.esm.8ae2ec13.js";import hl from"./toolbar.esm.a8884477.js";import al from"./avatar.esm.6ca34239.js";import bl from"./speeddial.esm.9698751d.js";import il from"./treetable.esm.d3cac22b.js";import{a3 as Pe,$ as a,a4 as gt,aa as wt,ar as Ae,a5 as St,V as Pt,a as It,o as p,b as q,i as e,l as s,u as l,a7 as U,e as M,w as k,c as ve,k as nt,s as H,K as X,t as b,q as pe,F as ze,f as Re,a6 as Ot,ca as sl,a2 as zt,a8 as Mt,a9 as Ht,ao as kl,B as yl,_ as wl,D as _l,h as xl,m as A,n as Dl,g as Tl,cb as Sl,I as Xt,ac as $l,P as Cl}from"./entry.c2c43cd1.js";import{u as ot,a as _t}from"./cookie.4d3ffd11.js";import{d as Vl}from"./vuedraggable.umd.a8de9748.js";import{u as be}from"./company.146b96b2.js";import{a as Je}from"./usePermission.9a7c9f2b.js";import Fe from"./column.esm.d1bb524b.js";import Nt from"./textarea.esm.4633c8bb.js";import El from"./floatlabel.esm.dd73532e.js";import Al from"./inputnumber.esm.39a53f63.js";import jl from"./confirmpopup.esm.56d0fb8f.js";import Ll from"./tabpanel.esm.91eaf20b.js";import Ul from"./tabview.esm.5240f811.js";import Il from"./card.esm.d80f5115.js";import{u as Zt}from"./clock.9cee19db.js";import{s as Ol}from"./basecomponent.esm.ca0d9dff.js";import yt from"./dialog.esm.2f6be234.js";import"./portal.esm.c8900e5f.js";import"./index.esm.6ce4a767.js";import"./baseicon.esm.9b9dedfa.js";import"./index.esm.e8b4c465.js";import"./index.esm.425f2d27.js";import"./index.esm.f171fc5f.js";import"./checkbox.esm.8c9a1123.js";import"./index.esm.e4fc6d54.js";import"./index.esm.c81093e9.js";import"./index.esm.66611ef2.js";import"./overlayeventbus.esm.c4a8e86a.js";import"./virtualscroller.esm.be0856af.js";import"./index.esm.2f234c1d.js";import"./index.esm.58f3c849.js";import"./index.esm.d5458438.js";import"./badge.esm.52ff6f6e.js";import"./index.esm.8f2e3b52.js";import"./paginator.esm.01e1b752.js";import"./index.esm.f2f1d221.js";import"./index.esm.ad5542f4.js";import"./index.esm.1d775b7f.js";import"./index.esm.d1c6029f.js";import"./index.esm.b994e52d.js";import"./index.esm.9aaf41d6.js";import"./workCompany.10ab7266.js";const zl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwElEQVR4nO2dTYgcRRTHy/iBBoligicvXgRRUPCgiDBKdl5NcEDD1JuwLBJFmXmv1yWKEslBe8WDOfmJ6N7FgydFvYiC5K4Y1IuKl6DiNzHRg/kYaTeGYVM1sx/VU6+r6g99mqqa/3u/ruqq7p4ppbKysrKysrKysrKysraodp9uBqSXAOlLbeikRh4FPpaTgIqIlwHSa2DojICkj5KCUCVfI38sINGjJCFUZ76ABI+ShLA65vNpAckdJQkBDL8sIKmjDR2GD6tYBMhfBU8oJtwTNNIJAckcJdsTpgUpzY+ODULjAWDDIUQBABsMIRoA2FAIUQHABkKIDgA2DEKUALBBEKIFgA2BEDUAbACE6AGgcAhJAEDBEJIBgEIhJAUABUJIDgAKg5AkABQEIVkAKARC0gBw9vFtOGBpfnQGkAF4Ve4BgSUNQHLxiTcYe3ziDcYen3iDscfn22B3frALkP+0tQXIfwE+fM2k+q39+y8HpB/tfujZ0PF5Vx0GteHDrvbA0GOT/dCiI/m/dhaWdkiIz6vqMLj7/sWdYOi4I5HflGW5zVYPES8Gw986wD0hJT6vqssgID/narPdY7DWMcMFax1D33e7g+2S4vOmugzO4eAqMPy741rwrq0OIH/mAPCItPi8qU6DgPyMYzg508ZHr1/j416Hh69brfISifF5UZ0GOwtLOzTyb462nx8vC8hH7OWGfanxeVHdBrXhQ/ZewL9UU86qTLtX3G4fquio64ItJb4tq26DLSyuBKSf7e3TA1UZQHrH9nm7R3ukx6eaYBCQn3Sc4e+37jtwtTb8z4Wf8REf350BqNXVbTWVtAD4W5vh0Aqnx3dmAB67qEY+4OgFtuHpPY/fm4egsXs8x6YlZHWKWtyqPCkDGFPHcDEtIRr5TeVRGcAFfwjCP0xKSvXLfeVRGcCY5vbxjRrp1MSkGD6oPCoDGBMY/mD6EER/THtmEJVmdYZAn+9Zx/hvvU0RtWYBoCzLbWDoU8sU9JjtHlC1PujsXbpOpaBZANBYPGhfA/AbGulpx3evqBRUN4Bud7DdNf+vVrvVbWn7hZlO7dm3eIOKXXUD0I4zHJA++b8MGHrL0UPeVrGrTgDtvXSt69nw+J1O6A9v0chnLeXOdvp0h4pZdQLQyCuOs/+oUuqiNWU/nNZTolRdAOYmLrqK+bXlAYdtl4fqM2nxeVNdBsG56KLvXM94bVPV/w7Dn2/2yViSAGDCoguQ2O2lmHd72dyz4eQAlI5F17njJ8THr3DVnfRiVvV2xG2DwaWh4/Mu3wbB8EPO9gwfWkf9pQl+KHR83uXboF6d96/YjuplrXUt3Ay97mhjw39VmRwAaRIfn3iDsccn3mDs8Yk3GHt84g3GHp94g7HHJ95g7PGJNxh7fOINxh6feIOxx+f6Te/MDkMndW949wb8PhXKKxgqI93ChE50sLhrvZ6re0LRbJmikV8MD4BF94RazvzzAHrFTXK2sSKJPaH+zYI08qvhk88SISzPch/Jj8InnyVBWA6wnyS9kocjnn3y114TtKEXtOEvwu8xRiF6QhwbxIXSVmZHtc52UhJsAkJOfkAIOfkBIeTkB4SQkx8QQk5+QAg5+SqMzq0TvM7z/wUrLeMdaCtpkwAAAABJRU5ErkJggg==";const Ml={class:"filter-wrapper pb-2 mb-1"},Hl={class:"mb-2 relative"},Nl={class:"mb-2 relative"},Bl={class:"flex flex-wrap gap-1"},Fl=e("img",{src:zl},null,-1),Rl=e("i",{class:"pi pi-search"},null,-1),Jl=e("p",{class:"text-center font-medium font-italic"},"No data found",-1),Yl=["onMouseenter"],Gl=["onDblclick"],Kl={class:"task-status"},Wl={key:1},Ql={class:"flex align-items-center"},Pl=["onClick"],Xl=["onMouseenter"],Zl={key:0,class:"flex gap-1 w-full h-full align-items-center"},en={class:"flex justify-content-start gap-1"},tn=["src"],ln={class:"inline-block"},nn={class:"task-status-2"},on={key:0,class:"flex align-items-center"},an={key:1},sn={class:"flex align-items-center"},rn={class:"relative"},dn={class:"inline-block"},cn={class:"task-status-2"},un={key:0,class:"flex align-items-center"},pn={key:1,class:"pt-1"},mn={key:1},fn={class:"flex align-items-center"},qn=["onMouseover","onMouseleave"],vn=["onClick","onMouseleave"],gn={key:1,class:"main-container"},hn={class:"content"},bn={class:"boardContainer",style:{display:"flex","overflow-x":"auto","align-items":"start"}},kn={class:"column-container"},yn={class:""},wn=["onClick"],_n={class:""},xn={class:"font-semibold truncate text-sm title"},Dn={class:"flex align-items-center gap-2 mt-1"},Tn={class:"status text-sm"},Sn={class:"mt-2 flex align-items-center gap-2"},$n=e("i",{class:"pi pi-user text-lg"},null,-1),Cn={class:"flex justify-content-start gap-1"},Vn=["src"],En={class:"mt-2 flex align-items-center gap-2"},An=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),jn={class:"mt-2 flex align-items-center gap-2"},Ln=e("i",{class:"pi pi-flag text-lg"},null,-1),Un={class:"text-sm"},In=["onClick"],On=e("p",{class:"mb-1"},"Subtask",-1),zn={class:"text-sm font-semibold"},Mn=["onClick"],Hn={class:"font-semibold truncate text-sm title"},Nn={class:"truncate text-sm desc"},Bn={class:"flex align-items-center gap-2 mt-1"},Fn={class:"status text-sm"},Rn={class:"mt-2 flex align-items-center gap-2"},Jn=e("i",{class:"pi pi-user text-lg"},null,-1),Yn={class:"flex justify-content-start gap-1"},Gn=["src"],Kn={class:"mt-2 flex align-items-center gap-2"},Wn=e("i",{class:"pi pi-calendar-minus text-lg"},null,-1),Qn={class:"mt-2 flex align-items-center gap-2"},Pn=e("i",{class:"pi pi-flag text-lg"},null,-1),Xn={class:"text-sm"},Zn={class:"mt-2 flex align-items-center gap-2"},eo=e("i",{class:"pi pi-angle-right text-lg"},null,-1),to={class:"text-sm font-semibold"},lo={__name:"TaskTable",props:["kanbanTasks","tasks"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask"],setup(o,{emit:c}){var kt;const y=sl(),$=be(),{getSingleProject:G,getTaskAssignModalData:D,editTask:Z}=be(),{modStatusList:le,singleProject:ue,statuslist:ee,isTaskEdited:F}=Pe(be()),ne=a(Je("create_task")),K=a(Je("update_task")),se=a(Je("delete_task")),qe=a(Je("download_task")),R=gt(),O=c,W=(kt=wt().params)==null?void 0:kt.projects,J=a(),r=a(),de=a(),oe=a(),ae=a(),Y=a(),Q=a({}),h=a(!0),v=a([{name:"All",code:""},{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),x=a([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),C=a({}),me=a(null),I=m=>{me.value=m,ce.value!==m&&(N.value={...N.value,[m]:!1},ce.value=null)},ce=a(null),N=a({}),j=a(null),E=a(!1),Ye=m=>{j.value=m.data.name;const u=document.getElementById(`inputTaskName${m.key}`);console.log("inputTFunc",u),ce.value=m.key,N.value=Object.keys(N.value).reduce((z,B)=>(z[B]=!1,z),{}),Ot(()=>{u&&u.focus()}),N.value={...N.value,[m.key]:!0}},Me=a(!1);Ae(j,(m,u)=>{console.log("newVal",m),console.log("oldVal",u),u!==null&&(Me.value=!0,console.log("inputChanged",Me.value))});let L=a(null);const g=m=>{L.value&&(clearTimeout(L.value),L.value=null),L.value=setTimeout(()=>{O("handleTaskDetailView",m),L.value=null},250)},it=m=>{L.value&&(clearTimeout(L.value),L.value=null),Ye(m)},fe=async m=>{if(Me.value!==!0)return R.add({severity:"warn",summary:"Error",detail:"Change task name!",group:"br",life:3e3});await ct(j.value,m),N.value={...N.value,[m]:!1},j.value=null,ce.value=null,Me.value=!1},ge=m=>{C.value={...C.value,[m]:!0}},Xe=m=>{C.value={...C.value,[m]:!1}},Te=m=>[{label:"Add Sub Task",icon:"pi pi-plus text-white",command:()=>{O("openCreateSpace",m.key,"sub-task")},disabled:!ne},{label:"Edit Task",icon:"pi pi-pencil text-white",command:()=>{O("handleTaskEdit",m)},disabled:!K},{label:"Task Detail",icon:"pi pi-window-maximize text-white",command:()=>{O("handleTaskDetailView",m)}},{label:"Delete Task",icon:"pi pi-trash text-white",command:()=>{O("confirmDeleteTask",m.key)},disabled:!se}],Ge=a(),He=a(),Se=a(),je=a(),ke=a(),Le=a(),T=a(null),$t=()=>{if(J.value||r.value||de.value||Y.value||oe.value||ae.value)J.value="",r.value="",de.value="",Y.value="",oe.value="",ae.value="",Ge.value="",He.value="",Se.value="",je.value="",ke.value="",Le.value="",_e.value=!1,xe.value=!1,we();else return},we=async()=>{Ge.value=J.value?J.value.map(m=>m.id):"",He.value=r.value?r.value.code:"",Se.value=de.value?de.value.id:"",je.value=Y.value,ke.value=oe.value,Le.value=ae.value,G(W,Ge.value,He.value,Se.value,je.value,ke.value,Le.value)},_e=a(!1),xe=a(!1),Ze=m=>{const u=new Date(m);oe.value=u.getFullYear()+"-"+(u.getMonth()+1)+"-"+u.getDate(),_e.value=!0,we()},Ke=m=>{xe.value=!0;const u=new Date(m);ae.value=u.getFullYear()+"-"+(u.getMonth()+1)+"-"+u.getDate(),we()},Ct=()=>{_e.value=!1,oe.value="",ke.value="",we()},st=()=>{xe.value=!1,ae.value="",Le.value="",we()},Ue=a(!1),Vt=m=>{if(Ue.value=!0,console.log("lod",m),m.length>0){const u=`data:text/csv;charset=utf-8,"Serial No.","Task Name","Project","Assignee","Priority","Status","Time Tracked","Due Date","Overdue"
`+m.map((P,he)=>{const pt=he+1,We=P.data.name,et=ue.value.name,tt=P.data.assignee.split(", ").join("; "),Be=P.data.priority?P.data.priority:"",Qe=P.data.status.name;let ye=P.data.total_duration;const i=Math.floor(ye/3600),t=Math.floor(ye%3600/60),n=ye%60;i>0?ye=`${i} hr ${t} min ${n} sec`:t>0?ye=`${t} min ${n} sec`:ye=`${n} sec`;const f=P.data.dueDateValue,_=P.data.is_overdue?"Yes":"No";return`"${pt}","${We}","${et}","${tt}","${Be}","${Qe}","${ye}","${f}","${_}"`}).join(`
`),z=encodeURI(u),B=document.createElement("a");B.setAttribute("href",z),B.setAttribute("download","tasks.csv"),document.body.appendChild(B),B.click(),document.body.removeChild(B),Ue.value=!1}else Ue.value=!1,R.add({severity:"error",summary:"Error",detail:"No data found to download",group:"br",life:3e3})},bt=a(!0);St(async()=>{await G(W),bt.value=!1,jt()});async function rt(m,u){var z;try{const B=ot("token"),{data:P,pending:he}=await _t(`${y.public.apiUrl}/tasks/update/${u}`,{method:"POST",headers:{Authorization:`Bearer ${B.value}`},body:{status:m==null?void 0:m.id}},"$7UcE4NQ81w");((z=P.value)==null?void 0:z.app_message)==="success"?(console.log("Status Changed",P),R.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),await G(W)):R.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(B){console.error("Error fetching data:",B)}}const dt=a(!1),ct=async(m,u)=>{if(m instanceof Date){dt.value=!0;let z;if(m){const P=new Date(m);P.setDate(P.getDate()+1),z=P.toISOString()}const B={id:u,dueDate:z?new Date(new Date(z).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,project_id:W};await Z(B),F.value===!0?(dt.value=!1,R.add({severity:"success",summary:"Successful",detail:"Due date updated ",group:"br",life:3e3})):(dt.value=!1,R.add({severity:"error",summary:"Error",detail:"Unable to update due date!",group:"br",life:3e3}))}else if(m!=null&&m.name){const z={id:u,priority:m.name,project_id:W};await Z(z),F.value===!0?R.add({severity:"success",summary:"Successful",detail:"Priority updated ",group:"br",life:3e3}):R.add({severity:"error",summary:"Error",detail:"Unable to update task priority!",group:"br",life:3e3})}else E.value=!0,await Z({id:u,name:m,project_id:W}),F.value===!0?(R.add({severity:"success",summary:"Successful",detail:"Task name updated ",group:"br",life:3e3}),E.value=!1):(R.add({severity:"error",summary:"Error",detail:"Unable to update task name!",group:"br",life:3e3}),E.value=!1)},$e=a(),Et=async(m,u)=>{console.log("newDate",m),u.node.data.dueDateValue;const z=new Date(m);z.setHours(23,59,0,0),$e.value=z,console.log("inlineDueDate",$e.value);let B=new Date($e.value).toLocaleDateString("en-US",{month:"short",day:"2-digit"});console.log("placeHolderValue",B),u.node.data.dueDateValue=B,await ct($e.value,u.node.key)};function At(){const m="0123456789ABCDEF";let u="#";for(let z=0;z<6;z++)u+=m[Math.floor(Math.random()*10)];return u}function Ce(m){return{backgroundColor:At(),color:"white",borderRadius:"50%",border:"2px solid white"}}const jt=async()=>{await D(),Q.value=$.users},Lt=a(!0),Ve=Pt(()=>({animation:250,group:"tasks",disabled:!Lt.value,ghostClass:"ghost"})),Ne=Pt(()=>({backgroundColor:"#fff",boxShadow:"0px 2px 2px #e2e2e2",cursor:"grab",padding:"12px 10px",margin:"8px 0px"})),ut=(m,u)=>{const{added:z,moved:B,removed:P}=m;z&&rt(u,m.added.element.key)};return(m,u)=>{const z=xt,B=Dt,P=Tt,he=vt,pt=vl,We=ol,et=gl,tt=hl,Be=al,Qe=bl,ye=il,i=It("tooltip");return p(),q(ze,null,[e("div",Ml,[s(z,{onChange:u[0]||(u[0]=t=>we()),modelValue:l(J),"onUpdate:modelValue":u[1]||(u[1]=t=>U(J)?J.value=t:null),options:l(Q),filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Filter Assignees",maxSelectedLabels:3,class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),s(B,{onChange:u[2]||(u[2]=t=>we()),modelValue:l(r),"onUpdate:modelValue":u[3]||(u[3]=t=>U(r)?r.value=t:null),options:l(v),optionLabel:"name",placeholder:"Filter Priority",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),s(B,{onChange:u[4]||(u[4]=t=>we()),modelValue:l(de),"onUpdate:modelValue":u[5]||(u[5]=t=>U(de)?de.value=t:null),options:l(le),optionLabel:"name",placeholder:"Filter Status",class:"w-full md:w-17rem mb-2"},null,8,["modelValue","options"]),e("div",Hl,[s(P,{onDateSelect:u[6]||(u[6]=t=>Ze(t)),modelValue:l(oe),"onUpdate:modelValue":u[7]||(u[7]=t=>U(oe)?oe.value=t:null),placeholder:"Filter Start Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),l(_e)?(p(),q("p",{key:0,onClick:Ct,class:"pi pi-times absolute cursor-pointer"})):M("",!0)]),e("div",Nl,[s(P,{onDateSelect:u[8]||(u[8]=t=>Ke(t)),modelValue:l(ae),"onUpdate:modelValue":u[9]||(u[9]=t=>U(ae)?ae.value=t:null),placeholder:"Filter End Due Date",class:"w-full md:w-17rem"},null,8,["modelValue"]),l(xe)?(p(),q("p",{key:0,onClick:st,class:"pi pi-times end-cross absolute cursor-pointer"})):M("",!0)]),s(he,{onClick:$t,label:"Reset",class:"mr-2 w-full md:w-15rem mb-2",severity:"secondary"})]),s(tt,{class:"border-0 px-0"},{start:k(()=>[e("div",Bl,[l(ne)?(p(),ve(he,{key:0,icon:"pi pi-plus",label:"Create Task",onClick:u[10]||(u[10]=t=>O("openCreateSpace","","task")),class:"mr-2",severity:"secondary"})):M("",!0),e("div",null,[s(he,{icon:"pi pi-list",label:"List",onClick:u[11]||(u[11]=()=>h.value=!0),class:nt(["table-btn",{"bg-indigo-400 text-white":l(h)}]),severity:"secondary"},null,8,["class"]),s(he,{icon:"pi pi-th-large",label:"Board",onClick:u[12]||(u[12]=()=>h.value=!1),class:nt(["board-btn",{"bg-indigo-400 text-white":!l(h)}]),severity:"secondary"},null,8,["class"])]),l(qe)?H((p(),ve(he,{key:1,onClick:u[13]||(u[13]=t=>Vt(o.tasks)),loading:l(Ue),style:X(`${l(Ue)===!0?"backGround: red":""}`),class:"excel-export-btn"},{default:k(()=>[Fl]),_:1},8,["loading","style"])),[[i,{value:"Download Tasks"},void 0,{right:!0}]]):M("",!0)])]),end:k(()=>[s(et,{iconPosition:"right",raised:""},{default:k(()=>[s(pt,null,{default:k(()=>[Rl]),_:1}),s(We,{onKeyup:u[14]||(u[14]=t=>we()),modelValue:l(Y),"onUpdate:modelValue":u[15]||(u[15]=t=>U(Y)?Y.value=t:null),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})]),_:1}),l(h)?(p(),ve(ye,{key:0,class:"table-st",stripedRows:"",value:o.tasks,scrollable:"",scrollDirection:"both",lazy:!0,loading:l(bt),filterDisplay:"menu",style:{overflow:"auto"}},{empty:k(()=>[Jl]),default:k(()=>[s(l(Fe),{field:"name",header:"Name",class:"",expander:"",style:{width:"610px"},showAddButton:!0},{body:k(t=>[e("div",{class:"inline-block w-full align-items-center tasktitle-hover cursor-pointer relative",onMouseenter:n=>I(t.node.key)},[e("div",{onDblclick:n=>it(t.node),class:"flex w-full"},[H((p(),q("div",Kl,[s(B,{class:"mr-1 flex justify-content-center align-items-center",onChange:n=>rt(t.node.data.status,t.node.key),modelValue:t.node.data.status,"onUpdate:modelValue":n=>t.node.data.status=n,options:l(ee),disabled:!l(K),optionLabel:"name"},{value:k(n=>[n.value?(p(),q("div",{key:0,class:"flex align-items-center",style:X({backgroundColor:n.value.color_code})},[e("div",{style:X({backgroundColor:n.value.color_code}),class:"status-bg"},null,4)],4)):(p(),q("span",Wl,b(n.placeholder),1))]),option:k(n=>[e("div",Ql,[e("div",{style:X([{backgroundColor:n.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,b(n.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])),[[i,{value:`${t.node.data.status.name}`},void 0,{top:!0}]]),H((p(),q("span",{onClick:n=>g(t.node),style:X(l(ce)===t.node.key?"display: none;":"display: block;"),class:"taskTitle cursor-pointer"},[pe(b(t.node.data.name),1)],12,Pl)),[[i,{value:`${t.node.data.name}`},void 0,{left:!0}]]),e("span",null,[s(We,{id:`inputTaskName${t.node.key}`,style:X(l(ce)===t.node.key?"display: block;":"display: none;"),class:"inline-task-input",modelValue:l(j),"onUpdate:modelValue":u[16]||(u[16]=n=>U(j)?j.value=n:null),type:"text",placeholder:"Edit task title"},null,8,["id","style","modelValue"])])],40,Gl)],40,Yl)]),_:1}),s(l(Fe),{field:"",header:"",style:{width:"75px",padding:"0.75rem .9rem"}},{body:k(t=>[e("div",{class:"w-full h-full flex align-items center",onMouseenter:n=>I(t.node.key)},[l(me)===t.node.key?(p(),q("div",Zl,[l(N)[t.node.key]?M("",!0):H((p(),ve(he,{key:0,onClick:n=>Ye(t.node),severity:"secondary",icon:"pi pi-pencil",class:"w-fit h-fit p-1 ml-auto",style:{"font-size":"0.8rem !important"}},null,8,["onClick"])),[[i,{value:"Edit Name",showDelay:500},void 0,{top:!0}]]),l(N)[t.node.key]?M("",!0):H((p(),ve(he,{key:1,onClick:n=>O("openCreateSpace",t.node.key,"sub-task"),severity:"secondary",icon:"pi pi-plus",class:"w-fit h-fit p-1 ml-auto",style:{"font-size":"0.2rem"}},null,8,["onClick"])),[[i,{value:"Add Sub Task",showDelay:500},void 0,{top:!0}]]),l(N)[t.node.key]?H((p(),ve(he,{key:2,onClick:n=>fe(t.node.key),loading:l(E),severity:"primary",icon:"pi pi-check",class:"p-1 w-full",style:{"font-size":"0.2rem"}},null,8,["onClick","loading"])),[[i,{value:"Update Name"},void 0,{top:!0}]]):M("",!0)])):M("",!0)],40,Xl)]),_:1}),s(l(Fe),{field:"assignee",header:"Assignee",style:{width:"250px"}},{body:k(t=>[e("div",en,[(p(!0),q(ze,null,Re(t.node.data.assigneeObj,(n,f)=>(p(),q("span",{key:f,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:f>0?"-20px":"0",zIndex:10-f})},[n.image?H((p(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:n.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,tn)),[[i,{value:`${n.name}`},void 0,{top:!0}]]):H((p(),ve(Be,{key:1,label:n.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},Ce(f)])},null,8,["label","style"])),[[i,{value:`${n.name}`},void 0,{top:!0}]])],4))),128))])]),_:1}),s(l(Fe),{field:"status",header:"Status",style:{width:"148px"}},{body:k(t=>[e("div",ln,[e("div",nn,[s(B,{class:"mr-1 flex justify-content-center align-items-center",onChange:n=>rt(t.node.data.status,t.node.key),modelValue:t.node.data.status,"onUpdate:modelValue":n=>t.node.data.status=n,options:l(ee),disabled:!l(K),optionLabel:"name"},{value:k(n=>[n.value?(p(),q("div",on,[e("div",{style:X({color:n.value.color_code,fontWeight:500}),class:"pt-1"},b(n.value.name),5)])):(p(),q("span",an,b(n.placeholder),1))]),option:k(n=>[e("div",sn,[e("div",{style:X([{backgroundColor:n.option.color_code},{width:"15px",height:"15px","border-radius":"50%"}]),class:"p-1 mr-2 pi"},null,4),e("div",null,b(n.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])])]),_:1}),s(l(Fe),{field:"dueDateValue",header:"Due Date",style:{textWrap:"nowrap",width:"148px"}},{body:k(t=>[e("div",rn,[s(P,{onDateSelect:n=>Et(n,t),class:nt(["inline-calendar cursor-pointer",t.node.data.dueDateColor==="#087641"&&t.node.data.dueDateValue?"green-calendar":t.node.data.dueDateColor==="#b13a41"&&t.node.data.dueDateValue?"red-calendar":""]),placeholder:t.node.data.dueDateValue?t.node.data.dueDateValue:"Set"},null,8,["onDateSelect","class","placeholder"])])]),_:1}),s(l(Fe),{field:"priority",header:"Priority",style:{width:"140px"}},{body:k(t=>[e("div",dn,[e("div",cn,[s(B,{class:"mr-1 flex justify-content-center align-items-center",onChange:n=>ct(t.node.data.priority,t.node.key),modelValue:t.node.data.priority,"onUpdate:modelValue":n=>t.node.data.priority=n,options:l(x),disabled:!l(K),optionLabel:"name",placeholder:"Set Priority"},{value:k(n=>[n.value?(p(),q("div",un,[n.value.name?(p(),q("div",{key:0,style:X({color:n.value.name==="Low"?"#e1aa1e":n.value.name==="Normal"?"#067bea":n.value.name==="High"?"#ff4928":n.value.name==="Urgent"?"crimson":"",fontWeight:500}),class:"pt-1"},b(n.value.name),5)):(p(),q("div",pn,"Set "))])):(p(),q("span",mn,b(n.placeholder),1))]),option:k(n=>[e("div",fn,[e("div",null,b(n.option.name),1)])]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","options","disabled"])])])]),_:1}),s(l(Fe),{field:"action",header:"Action",style:{width:"73px",position:"relative"}},{body:k(t=>[e("div",{class:"justify-content-start align-items-center webView-action",style:{width:"fit-content"},onMouseover:n=>ge(t.node.key),onMouseleave:n=>Xe(t.node.key)},[s(Qe,{visible:l(C)[t.node.key],"onUpdate:visible":n=>l(C)[t.node.key]=n,model:Te(t.node),direction:"left",class:"custom-speed-dial",tooltipOptions:{position:"top"}},null,8,["visible","onUpdate:visible","model"])],40,qn),e("div",{class:"justify-content-start align-items-center tabView-action",style:{width:"fit-content"},onClick:n=>ge(t.node.key),onMouseleave:n=>Xe(t.node.key)},[s(Qe,{visible:l(C)[t.node.key],"onUpdate:visible":n=>l(C)[t.node.key]=n,model:Te(t.node),direction:"left",class:"custom-speed-dial",tooltipOptions:{position:"top"}},null,8,["visible","onUpdate:visible","model"])],40,vn)]),_:1})]),_:1},8,["value","loading"])):M("",!0),l(h)?M("",!0):(p(),q("div",gn,[e("div",hn,[e("div",null,[e("div",bn,[(p(!0),q(ze,null,Re(o.kanbanTasks,t=>(p(),q("div",{key:t,class:"groupColumnContainer"},[e("div",kn,[e("div",{style:X(`background-color: ${t.statusColor}; `),class:"column-header"},b(t.name)+" - "+b(t.content.length),5),s(l(Vl),{modelValue:t.content,"onUpdate:modelValue":n=>t.content=n,options:l(Ve),disabled:!l(K),class:"draggable scrollbar",itemKey:"name",group:"cardItem",onChange:n=>ut(n,t.status)},{item:k(({element:n})=>[e("div",yn,[(p(),q("div",{class:"task-card",style:X(l(Ne)),key:n.id,onClick:f=>m.$emit("handleTaskDetailView",n,t.content,t.name)},[e("div",_n,[H((p(),q("p",xn,[pe(b(n.data.name),1)])),[[i,{value:`${n.data.name}`},void 0,{top:!0}]]),e("div",Dn,[e("div",{class:"status-icon",style:X(`background-color:${n.data.status.color_code}`)},null,4),e("p",Tn,b(n.data.status.name),1)]),e("div",Sn,[$n,e("div",Cn,[(p(!0),q(ze,null,Re(n.data.assigneeObj,(f,_)=>(p(),q("span",{key:_,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:_>0?"-20px":"0",zIndex:10-_})},[f.image?H((p(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:f.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Vn)),[[i,{value:`${f.name}`},void 0,{top:!0}]]):H((p(),ve(Be,{key:1,label:f.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},Ce(_)])},null,8,["label","style"])),[[i,{value:`${f.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",En,[An,e("p",{style:X(`color: ${n.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},b(n.data.dueDateValue),5)]),e("div",jn,[Ln,e("p",Un,b(n.data.priority),1)]),e("div",{class:"mt-2 flex align-items-center gap-2 cursor-pointer p-1 rounded hover:bg-gray-100",style:{"border-radius":"5px"},onClick:f=>{f.stopPropagation(),l(T)==n.unique_id?T.value=null:T.value=n.unique_id}},[On,e("i",{class:nt(`pi ${l(T)==n.unique_id?"pi-angle-down":"pi-angle-right"}  text-lg`)},null,2),e("p",zn,b(n.children.length),1)],8,In)]),pe(" "+b(n.t_name),1)],12,wn)),e("div",{class:nt(l(T)===n.unique_id?"":"hidden")},[(p(!0),q(ze,null,Re(n.children,f=>(p(),q("div",{key:f.unique_id,class:"sub-card",onClick:_=>m.$emit("handleTaskDetailView",f,t.content,t.name)},[e("p",Hn,b(f.data.name),1),e("p",Nn,b(f.data.description),1),e("div",Bn,[e("div",{class:"status-icon",style:X(`background-color:${f.data.status.color_code}`)},null,4),e("p",Fn,b(f.data.status.name),1)]),e("div",Rn,[Jn,e("div",Yn,[(p(!0),q(ze,null,Re(f.data.assigneeObj,(_,S)=>(p(),q("span",{key:S,class:"flex justify-content-center assignee-wrapper",style:X({marginLeft:S>0?"-20px":"0",zIndex:10-S})},[_.image?H((p(),q("img",{key:0,class:"mr-2 capitalize cursor-pointer",src:_.image,style:{height:"28px",width:"28px","border-radius":"32px",border:"2px solid white"},alt:"",srcset:""},null,8,Gn)),[[i,{value:`${_.name}`},void 0,{top:!0}]]):H((p(),ve(Be,{key:1,label:_.name.charAt(0),class:"mr-2 capitalize cursor-pointer",size:"small",style:X([{"background-color":"black",color:"white","border-radius":"50%",border:"2px solid white"},Ce(S)])},null,8,["label","style"])),[[i,{value:`${_.name}`},void 0,{top:!0}]])],4))),128))])]),e("div",Kn,[Wn,e("p",{style:X(`color: ${f.data.dueDateColor}; font-weight: 500;`),class:"text-sm"},b(f.data.dueDateValue),5)]),e("div",Qn,[Pn,e("p",Xn,b(f.data.priority),1)]),e("div",Zn,[eo,e("p",to,b(f.children.length),1)])],8,Mn))),128))],2)])]),_:2},1032,["modelValue","onUpdate:modelValue","options","disabled","onChange"])])]))),128))])])])]))],64)}}};const rl=o=>(Mt("data-v-8b75ef8a"),o=o(),Ht(),o),no={class:"field flex flex-column"},oo={for:"name"},ao=rl(()=>e("i",{class:"text-red-400 text-italic"},"*",-1)),io={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},so={class:"field"},ro={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},co={class:"field"},uo={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},po={class:"field"},mo={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},fo={class:"field"},qo={class:"pi pi-info-circle cursor-pointer ml-1 text-sm instruction-tip"},vo=rl(()=>e("br",null,null,-1)),go={key:0,class:"text-center",style:{color:"red"}},ho={class:"create-btn-wrapper mb-0"},bo={__name:"CreateTask",props:["createTaskTitle","taskId","projects","usersLists","tagsLists"],emits:["closeCreateModal"],setup(o,{emit:c}){const{createTask:y}=be(),{isTaskCreated:$,detectDuplicateTask:G}=Pe(be()),{createTaskTitle:D,taskId:Z,projects:le,usersLists:ue,tagsLists:ee}=o,F=gt(),ne=a(!1),K=a(Z),se=a(!0),qe=a(!1),R=a(!1),O=a(null),re=a(null),W=a(null),J=a(null),r=a(null),de=a(!1),oe=a([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),ae=c,Y=h=>{if(console.log("test druve"),de.value)re.value=h;else{const v=new Date(h);v.setHours(23,59,0,0),re.value=v}};Ae(re,(h,v)=>{h&&v&&h!==v&&(de.value=!0)});const Q=async()=>{var h,v,x;if(ne.value=!0,O.value===null)R.value=!0,ne.value=!1;else{R.value=!1;let C;if(re.value){const I=new Date(re.value);I.setDate(I.getDate()+1),C=I.toISOString()}const me={name:O.value,dueDate:C?new Date(new Date(C).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:(h=W.value)==null?void 0:h.map(I=>I.id),tags:(v=J.value)==null?void 0:v.map(I=>I.id),priority:(x=r.value)==null?void 0:x.name,project_id:le,parent_task_id:Z};if(C){const I=new Date(C);I.setDate(I.getDate()-1),re.value=I?new Date(I).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await y(me),G.value===!0?(ne.value=!1,F.add({severity:"error",summary:"Error",detail:"Task already exists!",group:"br",life:3e3})):$.value===!0?(ne.value=!1,se.value=!1,qe.value=!0,O.value=null,ae("closeCreateModal",!1),F.add({severity:"success",summary:"Successful",detail:"Task created Successfully",group:"br",life:3e3})):(ne.value=!1,F.add({severity:"error",summary:"Error",detail:"Unable to create task!",group:"br",life:3e3}))}};return St(()=>{const h=document.getElementById("createTaskName");Ot(()=>{h&&h.focus()})}),(h,v)=>{const x=ol,C=Nt,me=xt,I=Tt,ce=Dt,N=vt,j=It("tooltip");return p(),q("div",null,[s(x,{type:"hidden",modelValue:l(K),"onUpdate:modelValue":v[0]||(v[0]=E=>U(K)?K.value=E:null)},null,8,["modelValue"]),e("div",no,[e("label",oo,[pe("Set Task Name"),ao,pe(),H(e("span",io,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(C,{id:"createTaskName",class:"border-gray-300",modelValue:l(O),"onUpdate:modelValue":v[1]||(v[1]=E=>U(O)?O.value=E:null),rows:"3",cols:"20",invalid:h.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",so,[e("label",null,[pe("Assignees "),H(e("span",ro,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(me,{display:"chip",modelValue:l(W),"onUpdate:modelValue":v[2]||(v[2]=E=>U(W)?W.value=E:null),options:o.usersLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",co,[e("label",null,[pe("Tags "),H(e("span",uo,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(me,{display:"chip",modelValue:l(J),"onUpdate:modelValue":v[3]||(v[3]=E=>U(J)?J.value=E:null),options:o.tagsLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:5,class:"w-full"},null,8,["modelValue","options"])]),e("div",po,[e("label",null,[pe("Due Date "),H(e("span",mo,null,512),[[j,{value:"Set your task due date"},void 0,{right:!0}]])]),s(I,{modelValue:l(re),"onUpdate:modelValue":v[4]||(v[4]=E=>U(re)?re.value=E:null),class:"w-full clndr",placeholder:"Set Due Date",showTime:"",hideOnDateTimeSelect:"",hourFormat:"12",onDateSelect:v[5]||(v[5]=E=>Y(E))},null,8,["modelValue"])]),e("div",fo,[e("label",null,[pe("Priority "),H(e("span",qo,null,512),[[j,{value:"Demo Text Text Demo Text Text Demo Text Text Demo Text Text Demo Text Text."},void 0,{right:!0}]])]),s(ce,{modelValue:l(r),"onUpdate:modelValue":v[6]||(v[6]=E=>U(r)?r.value=E:null),options:l(oe),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),vo,l(R)?(p(),q("p",go,"Please add task name")):M("",!0),e("div",ho,[s(N,{label:"Save",icon:"pi pi-check",text:"",onClick:Q,loading:l(ne)},null,8,["loading"])])])}}},ko=zt(bo,[["__scopeId","data-v-8b75ef8a"]]);const at=o=>(Mt("data-v-8f26c046"),o=o(),Ht(),o),yo={class:"position-relative d-flex flex-column justify-content-between w-100 modal-container"},wo={class:"field flex flex-column"},_o=at(()=>e("label",{for:"name"},[pe("Edit Task Name"),e("i",{class:"text-red-400 text-italic"},"*")],-1)),xo={class:"field"},Do=at(()=>e("label",null,"Assignees",-1)),To={class:"field"},So=at(()=>e("label",null,"Tags",-1)),$o={class:"field"},Co=at(()=>e("label",null,"Due Date",-1)),Vo={class:"field"},Eo=at(()=>e("label",null,"Priority",-1)),Ao=at(()=>e("br",null,null,-1)),jo={key:0,class:"text-center",style:{color:"red"}},Lo={class:"create-btn-wrapper mb-0"},Uo={__name:"EditTask",props:["singleTask","usersLists","tagsLists","projects"],emits:["closeEditModal"],setup(o,{emit:c}){var oe,ae,Y,Q,h;const{editTask:y}=be(),{isTaskEdited:$,detectDuplicateTask:G}=Pe(be()),{singleTask:D,usersLists:Z,tagsLists:le,projects:ue}=o,ee=gt(),F=a(!1),ne=a((oe=D==null?void 0:D.data)==null?void 0:oe.name),K=a((ae=D==null?void 0:D.data)!=null&&ae.dueDate?new Date(D.data.dueDate).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),se=a(!1),qe=a(null);qe.value=(Y=D==null?void 0:D.data)!=null&&Y.assigneeObj?(Q=D==null?void 0:D.data)==null?void 0:Q.assigneeObj.map(v=>({id:v.id,name:v.name})):"";const R=a((h=D==null?void 0:D.data)==null?void 0:h.tagsObj),O=a(null);O.value=D.data.priority?{name:D.data.priority.name,code:D.data.priority.code}:"";const re=a([{name:"Urgent",code:"Urgent"},{name:"High",code:"High"},{name:"Normal",code:"Normal"},{name:"Low",code:"Low"}]),W=a(!1),J=c,r=v=>{if(console.log("test druve"),se.value)K.value=v;else{const x=new Date(v);x.setHours(23,59,0,0),K.value=x}};Ae(K,(v,x)=>{v&&x&&v!==x&&(se.value=!0)});const de=async()=>{if(F.value=!0,ne.value===null)W.value=!0,F.value=!1;else{W.value=!1;let v;if(K.value){const C=new Date(K.value);C.setDate(C.getDate()+1),v=C.toISOString()}const x={id:D.key,name:ne.value,priority:O.value.name,dueDate:v?new Date(new Date(v).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null,assignees:qe.value.map(C=>C.id),tags:R.value.map(C=>C.id),project_id:ue};if(v){const C=new Date(v);C.setDate(C.getDate()-1),K.value=C?new Date(C).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await y(x),G.value===!0?(F.value=!1,ee.add({severity:"error",summary:"Error",detail:"Cannnot edit, edited task name already exists!",group:"br",life:3e3})):$.value===!0?(F.value=!1,J("closeEditModal",!1),J("visibleEdit","visibleEdit"),ee.add({severity:"success",summary:"Successful",detail:"Task updated Successfully",group:"br",life:3e3})):(F.value=!1,ee.add({severity:"error",summary:"Error",detail:"Unable to update task!",group:"br",life:3e3}))}};return St(()=>{const v=document.getElementById("editTaskName");Ot(()=>{v&&v.focus()})}),(v,x)=>{const C=Nt,me=xt,I=Tt,ce=Dt,N=vt;return p(),q("div",yo,[e("div",null,[e("div",wo,[_o,s(C,{id:"editTaskName",class:"border-gray-300",modelValue:l(ne),"onUpdate:modelValue":x[0]||(x[0]=j=>U(ne)?ne.value=j:null),rows:"3",cols:"15",invalid:v.spaceDescriptionError},null,8,["modelValue","invalid"])]),e("div",xo,[Do,s(me,{display:"chip",modelValue:l(qe),"onUpdate:modelValue":x[1]||(x[1]=j=>U(qe)?qe.value=j:null),options:o.usersLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",To,[So,s(me,{display:"chip",modelValue:l(R),"onUpdate:modelValue":x[2]||(x[2]=j=>U(R)?R.value=j:null),options:o.tagsLists,filter:"",resetFilterOnHide:"",optionLabel:"name",placeholder:"Select Tags",maxSelectedLabels:3,class:"w-full"},null,8,["modelValue","options"])]),e("div",$o,[Co,s(I,{modelValue:l(K),"onUpdate:modelValue":x[3]||(x[3]=j=>U(K)?K.value=j:null),class:"w-full",placeholder:"Set Due Date",showTime:"",hideOnDateTimeSelect:"",hourFormat:"12",onDateSelect:x[4]||(x[4]=j=>r(j))},null,8,["modelValue"])]),e("div",Vo,[Eo,s(ce,{modelValue:l(O),"onUpdate:modelValue":x[5]||(x[5]=j=>U(O)?O.value=j:null),options:l(re),optionLabel:"name",placeholder:"Set Priority",class:"w-full"},null,8,["modelValue","options"])]),Ao,l(W)?(p(),q("p",jo,"Please add/fill/check up all the fields ")):M("",!0),e("div",Lo,[s(N,{label:"Update",icon:"pi pi-check",text:"",onClick:de,loading:l(F)},null,8,["loading"])])])])}}},Io=zt(Uo,[["__scopeId","data-v-8f26c046"]]),el=kl("fileUpload",()=>{const o=a(!1),c=a(!1),y=a(!1);async function $(D,Z){c.value=!0;const le=new FormData;le.append("task_id",D),le.append("attachments",Z);const ue=ot("token");try{const ee=await fetch("https://pbe.singularitybd.net/api/v1/tasks/attachment-upload",{method:"POST",headers:{Authorization:`Bearer ${ue.value}`},body:le});if(!ee.ok)throw new Error("Network response was not ok");const F=await ee.json();console.log("upload data =>",F),(F==null?void 0:F.user_message)==="success"?o.value=!0:o.value=!1,c.value=!1}catch(ee){console.error("Error uploading file:",ee),o.value=!1,c.value=!1}}async function G(D){const Z=ot("token");try{const le=await fetch(`https://pbe.singularitybd.net/api/v1/tasks/attachment-delete/${D}`,{method:"DELETE",headers:{Authorization:`Bearer ${Z.value}`}});if(!le.ok)throw new Error("Network response was not ok");const ue=await le.json();console.log("delete data =>",ue),(ue==null?void 0:ue.user_message)==="success"?y.value=!0:y.value=!1}catch(le){console.error("Error uploading file:",le),y.value=!1}}return{fileUpload:$,fileDelete:G,isFileUpload:o,isLoading:c,isFileDeleted:y}});var Oo=`
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
`,zo={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},tl=yl.extend({name:"editor",css:Oo,classes:zo}),Mo={name:"BaseEditor",extends:Ol,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:tl,provide:function(){return{$parentInstance:this}},beforeMount:function(){var c;tl.loadStyle({nonce:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0||(c=c.csp)===null||c===void 0?void 0:c.nonce})}};function qt(o){"@babel/helpers - typeof";return qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},qt(o)}function ll(o,c){var y=Object.keys(o);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(o);c&&($=$.filter(function(G){return Object.getOwnPropertyDescriptor(o,G).enumerable})),y.push.apply(y,$)}return y}function Ho(o){for(var c=1;c<arguments.length;c++){var y=arguments[c]!=null?arguments[c]:{};c%2?ll(Object(y),!0).forEach(function($){No(o,$,y[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(y)):ll(Object(y)).forEach(function($){Object.defineProperty(o,$,Object.getOwnPropertyDescriptor(y,$))})}return o}function No(o,c,y){return c=Bo(c),c in o?Object.defineProperty(o,c,{value:y,enumerable:!0,configurable:!0,writable:!0}):o[c]=y,o}function Bo(o){var c=Fo(o,"string");return qt(c)=="symbol"?c:String(c)}function Fo(o,c){if(qt(o)!="object"||!o)return o;var y=o[Symbol.toPrimitive];if(y!==void 0){var $=y.call(o,c||"default");if(qt($)!="object")return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(o)}var nl=function(){try{return window.Quill}catch{return null}}(),dl={name:"Editor",extends:Mo,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(c,y){c!==y&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(c))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var c=this,y={modules:Ho({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};nl?(this.quill=new nl(this.$refs.editorElement,y),this.initQuill(),this.handleLoad()):wl(()=>import("./quill.d31f0e56.js").then($=>$.q),["./quill.d31f0e56.js","./vuedraggable.umd.a8de9748.js","./entry.c2c43cd1.js","./entry.5d0b2de3.css"],import.meta.url).then(function($){$&&_l.isExist(c.$refs.editorElement)&&($.default?c.quill=new $.default(c.$refs.editorElement,y):c.quill=new $(c.$refs.editorElement,y),c.initQuill())}).then(function(){c.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(c){this.quill&&(c?this.quill.setContents(this.quill.clipboard.convert(c)):this.quill.setText(""))},initQuill:function(){var c=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(y,$,G){if(G==="user"){var D=c.$refs.editorElement.children[0].innerHTML,Z=c.quill.getText().trim();D==="<p><br></p>"&&(D=""),c.$emit("update:modelValue",D),c.$emit("text-change",{htmlValue:D,textValue:Z,delta:y,source:G,instance:c.quill})}}),this.quill.on("selection-change",function(y,$,G){var D=c.$refs.editorElement.children[0].innerHTML,Z=c.quill.getText().trim();c.$emit("selection-change",{htmlValue:D,textValue:Z,range:y,oldRange:$,source:G,instance:c.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Ro(o,c,y,$,G,D){return p(),q("div",A({class:o.cx("root")},o.ptmi("root")),[e("div",A({ref:"toolbarElement",class:o.cx("toolbar")},o.ptm("toolbar")),[xl(o.$slots,"toolbar",{},function(){return[e("span",A({class:"ql-formats"},o.ptm("formats")),[e("select",A({class:"ql-header",defaultValue:"0"},o.ptm("header")),[e("option",A({value:"1"},o.ptm("option")),"Heading",16),e("option",A({value:"2"},o.ptm("option")),"Subheading",16),e("option",A({value:"0"},o.ptm("option")),"Normal",16)],16),e("select",A({class:"ql-font"},o.ptm("font")),[e("option",Dl(Tl(o.ptm("option"))),null,16),e("option",A({value:"serif"},o.ptm("option")),null,16),e("option",A({value:"monospace"},o.ptm("option")),null,16)],16)],16),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-bold",type:"button"},o.ptm("bold")),null,16),e("button",A({class:"ql-italic",type:"button"},o.ptm("italic")),null,16),e("button",A({class:"ql-underline",type:"button"},o.ptm("underline")),null,16)],16),(p(),q("span",A({key:G.reRenderColorKey,class:"ql-formats"},o.ptm("formats")),[e("select",A({class:"ql-color"},o.ptm("color")),null,16),e("select",A({class:"ql-background"},o.ptm("background")),null,16)],16)),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-list",value:"ordered",type:"button"},o.ptm("list")),null,16),e("button",A({class:"ql-list",value:"bullet",type:"button"},o.ptm("list")),null,16),e("select",A({class:"ql-align"},o.ptm("select")),[e("option",A({defaultValue:""},o.ptm("option")),null,16),e("option",A({value:"center"},o.ptm("option")),null,16),e("option",A({value:"right"},o.ptm("option")),null,16),e("option",A({value:"justify"},o.ptm("option")),null,16)],16)],16),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-link",type:"button"},o.ptm("link")),null,16),e("button",A({class:"ql-image",type:"button"},o.ptm("image")),null,16),e("button",A({class:"ql-code-block",type:"button"},o.ptm("codeBlock")),null,16)],16),e("span",A({class:"ql-formats"},o.ptm("formats")),[e("button",A({class:"ql-clean",type:"button"},o.ptm("clean")),null,16)],16)]})],16),e("div",A({ref:"editorElement",class:o.cx("content"),style:o.editorStyle},o.ptm("content")),null,16)],16)}dl.render=Ro;const Jo={class:"grid"},Yo={class:"col-12 flex justify-content-between"},Go={class:"m-0 detail-task-name cursor-pointer"},Ko={class:"flex gap-1"},Wo=e("h5",{class:"m-0 ml-2"},"Activity",-1),Qo={class:"col-12 lg:col-7"},Po={class:"task-wrapper card"},Xo={class:"task-det no-scrollbar"},Zo={class:"flex justify-content-between gap-2 flex-wrap align-items-center"},ea={class:"w-full lg:w-fit"},ta={class:"flex justify-content-between gap-2 flex-wrap align-items-centertask-detail-wrapper"},la=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-user"}),e("p",null,"Assignee:")],-1),na={class:"flex mt-2 justify-content-between gap-2 align-items-center task-detail-wrapper"},oa=e("div",{class:"flex justify-content-start gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-calendar"}),e("p",{class:"text-nowrap"},"Due Date:")],-1),aa={class:"w-full lg:w-fit"},ia={class:"flex justify-content-between gap-2 align-items-center task-detail-wrapper"},sa=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",null,"Status:")],-1),ra={class:"flex mt-2 justify-content-start gap-6 align-items-center task-detail-wrapper"},da=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property"},[e("span",{class:"pi pi-stopwatch"}),e("p",{class:"text-nowrap"},"Track Time:")],-1),ca={class:"clock-wrapper relative"},ua={class:"border-round px-2 pt-3 pb-2"},pa={class:"flex justify-content-center align-items-center gap-3 manual-wrapper -mt-1"},ma=e("label",{for:"hours",class:"block mb-2 text-xs"},"Hours",-1),fa=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),qa=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),va=e("label",{for:"minutes",class:"block mb-2 text-xs"},"Minutes",-1),ga=e("span",{class:"pi pi-chevron-up manual-time-changer"},null,-1),ha=e("span",{class:"pi pi-chevron-down manual-time-changer"},null,-1),ba={class:"flex justify-content-center align-items-center",style:{"margin-top":"0.49rem !important"}},ka=e("div",null,null,-1),ya={class:"flex justify-content-between gap-2 align-items-centertask-detail-wrapper mt-3",style:{width:"100%"}},wa=e("div",{class:"flex justify-content-start w-fit gap-2 align-items-center task-detail-property",style:{width:"10%"}},[e("span",{class:"pi pi-tags"}),e("p",null,"Tags:")],-1),_a={class:"field mt-3 flex flex-column"},xa=e("div",{class:"flex justify-content-start gap-2 align-items-center mb-1 task-detail-property"},[e("span",{class:"pi pi-sliders-h"}),e("p",null,"Description:")],-1),Da={class:"ql-formats flex justify-content-end mr-0"},Ta={class:"ql-bold"},Sa={class:"ql-italic"},$a={class:"ql-underline"},Ca={class:"ql-strike"},Va=e("span",{class:"ql-formats"},[e("select",{class:"ql-color"}),e("select",{class:"ql-background"})],-1),Ea=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"ordered"},null,-1),Aa=e("button",{class:"ql-list",type:"button","data-pc-section":"list",value:"bullet"},null,-1),ja=e("button",{class:"ql-link",type:"button","data-pc-section":"link"},null,-1),La={key:0,class:"flex justify-content-end"},Ua={class:"m-0"},Ia={class:"my-3 attach-sec flex align-items-center justify-content-start gap-2",style:{"overflow-x":"scroll"}},Oa={key:0,class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-5 attch-w",style:{"background-color":"#f7fafc"}},za=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),Ma=e("div",{class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},[e("div",{class:"text-xs"},"asdasd....asdme.extng"),e("div",{class:"text-xs"},"9 MAy, 2024")],-1),Ha=[za,Ma],Na=["href"],Ba=e("div",{class:"pi pi-file text-6xl attach-icon"},null,-1),Fa={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Ra={class:"text-xs"},Ja={class:"text-xs"},Ya=["href"],Ga=["src"],Ka={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},Wa={class:"text-xs"},Qa={class:"text-xs"},Pa=["href"],Xa=e("div",{class:"pi pi-video text-6xl attach-icon"},null,-1),Za={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},ei={class:"text-xs"},ti={class:"text-xs"},li=["href"],ni=e("div",{class:"pi pi-file-pdf text-6xl text-danger attach-icon"},null,-1),oi={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},ai={class:"text-xs"},ii={class:"text-xs"},si=["href"],ri=e("div",{class:"pi pi-file-word text-6xl text-blue attach-icon"},null,-1),di={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},ci={class:"text-xs"},ui={class:"text-xs"},pi=["href"],mi=e("div",{class:"pi pi-file-excel text-6xl attach-icon",style:{color:"#04aa6d"}},null,-1),fi={class:"attach-detail flex flex-column justify-content-center align-items-center mt-1 pt-1 px-3"},qi={class:"text-xs"},vi={class:"text-xs"},gi=["onClick"],hi=e("i",{class:"pi pi-times text-xs text-white"},null,-1),bi=[hi],ki={key:0,class:"flex gap-2 w-full justify-content-center"},yi=e("p",{class:"text-center"},"No Data found...",-1),wi=["onClick"],_i={class:"action-dropdown-det"},xi={class:"action-dropdown-content-det"},Di={class:"card"},Ti={class:"flex justify-content-start align-items-center task-detail-wrapper"},Si=e("div",{class:"flex justify-content-start gap-2 align-items-center bounce-detail-property"},[e("span",{class:"pi pi-flag"}),e("p",{class:"text-nowrap"},"Bounce Status:")],-1),$i={class:"col-12 lg:col-5"},Ci={class:"comment-wrapper card no-scrollbar"},Vi={class:"comments no-scrollbar"},Ei={class:"my-2 text-surface-800"},Ai={key:0},ji=["innerHTML"],Li={class:"my-2 text-surface-800"},Ui={class:"flex justify-content-start align-items-center"},Ii=["src"],Oi={class:"text-lg"},zi={key:0,class:"flex justify-content-start my-2"},Mi=["href"],Hi=e("div",{class:"pi pi-file"},null,-1),Ni={class:"attach-detail flex flex-column justify-content-center align-items-center"},Bi={class:"text-xs"},Fi={class:"m-0 ml-1",style:{"font-size":"0.9rem"}},Ri={style:{"line-height":"0"},class:"pb-1 float-right mt-3 mb-2"},Ji={key:0,class:"text-sm font-semibold tracking-wide leading-3 bg-gray-300 px-3 py-2 flex align-itens-center mb-1 relative"},Yi=e("span",{class:"pi pi-file-import mr-2"},null,-1),Gi=e("i",{class:"pi pi-times"},null,-1),Ki=[Gi],Wi={__name:"TaskDetail",props:["usersLists","tagsLists","projID"],emits:["openCreateSpace","handleTaskEdit","handleTaskDetailView","confirmDeleteTask","updateTaskTable"],setup(o,{emit:c}){var We,et,tt,Be,Qe,ye;const y=sl(),{fileUpload:$,fileDelete:G}=el(),{isFileUpload:D,isLoading:Z,isFileDeleted:le}=Pe(el()),{getTaskTimerData:ue,setManualTime:ee,storeTaskTimer:F}=Zt();Pe(Zt());const{editTask:ne,addTaskComment:K,getTaskDetails:se,getSingleProject:qe}=be(),{isTaskEdited:R,isTaskCommentCreated:O,singleTaskComments:re,subTasks:W,taskStatus:J,taskDetails:r,taskActivity:de}=Pe(be());localStorage.setItem("taskDetailID",JSON.stringify(r.value.id));const{usersLists:oe,tagsLists:ae,projID:Y}=o,Q=c,h=gt(),v=a(!1),x=a(Je("update_task")),C=a(Je("edit_bounce")),me=a(Je("create_task")),I=a(null);I.value=(et=(We=r.value)==null?void 0:We.assignee)==null?void 0:et.map(i=>({id:i.id,name:i.name}));const ce=a(!1);Ae(I,i=>{ce.value=!0});const N=a((Be=(tt=r.value)==null?void 0:tt.tags)==null?void 0:Be.map(i=>({id:i.id,name:i.name}))),j=a(!1);Ae(N,i=>{j.value=!0});const E=a((Qe=r.value)!=null&&Qe.due_date?new Date(r.value.due_date).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null),Ye=a(!1),Me=i=>{if(console.log("test druve"),Ye.value)E.value=i;else{const t=new Date(i);t.setHours(23,59,0,0),E.value=t}};Ae(E,(i,t)=>{i&&t&&i!==t&&(Ye.value=!0)});const L=a(E.value);Ae(E,(i,t)=>{i&&(L.value=new Date(i).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase())});const g=a(),it=Sl(),fe=a(null),ge=a(null),Xe=a(!1),Te=a(!1),Ge=async i=>{var n,f;Te.value=!0;let t;if(fe.value>0||ge.value>0){t=fe.value*3600+ge.value*60,console.log("totalSeconds",t);const _=await ee((n=r.value)==null?void 0:n.id,t);(_==null?void 0:_.code)===200?(await se((f=r.value)==null?void 0:f.id),Te.value=!1,h.add({severity:"success",summary:"Duration Added",detail:`Duration: ${fe.value?fe.value:0} hours and ${ge.value?ge.value:0} minutes`,group:"br",life:3e3}),fe.value=null,ge.value=null,i()):(Te.value=!1,h.add({severity:"error",summary:"Error",detail:"Unable to add duration",group:"br",life:3e3})),console.log("responseData",_)}else Te.value=!1,h.add({severity:"error",summary:"Error",detail:"Please add duration",group:"br",life:3e3});t=null},He=i=>{var t;console.log(i.detail),i.detail===3&&((t=r.value)==null?void 0:t.is_timer_start)==="false"&&it.require({target:i.currentTarget,group:"headless",message:"Set task duration:",accept:()=>{h.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{}})},Se=a("00:00:00");let je=null;const ke=a(!1),Le=async()=>{var i,t,n,f,_,S,V,De,Ie,Ee;if(r.value.id,ke.value=!0,((i=r.value)==null?void 0:i.is_timer_start)==="false"){await ue("start",(t=r.value)==null?void 0:t.id),await se((n=r.value)==null?void 0:n.id),T(),ke.value=!1,localStorage.setItem("storeTaskID",JSON.stringify((f=r.value)==null?void 0:f.id)),localStorage.setItem("storeTaskProjectID",JSON.stringify(Number(Y))),localStorage.setItem("storeTaskSpaceID",JSON.stringify((_=r.value)==null?void 0:_.project.space_id)),localStorage.setItem("storeTaskCompanyID",JSON.stringify((S=r.value)==null?void 0:S.project.company_id)),localStorage.setItem("storeTaskTimerStartTime",JSON.stringify(r.value.taskTimer.start_time));let lt={task_id:r.value.id,project_id:Y,space_id:r.value.project.space_id,company_id:r.value.project.company_id,timerStartTime:r.value.taskTimer.start_time};await F(lt),h.add({severity:"success",summary:"Task Timer",detail:"Timer Started",group:"br",life:3e3}),await qe(Y)}else await ue("stop",(V=r.value)==null?void 0:V.id,(Ie=(De=r.value)==null?void 0:De.taskTimer)==null?void 0:Ie.id),await se((Ee=r.value)==null?void 0:Ee.id),$t(),ke.value=!1,localStorage.removeItem("storeTaskID"),localStorage.removeItem("storeTaskProjectID"),localStorage.removeItem("storeTaskSpaceID"),localStorage.removeItem("storeTaskCompanyID"),localStorage.removeItem("storeTaskTimerStartTime"),await F({task_id:null,project_id:null,space_id:null,company_id:null}),h.add({severity:"success",summary:"Task Timer",detail:"Timer Stopped",group:"br",life:3e3}),await qe(Y)},T=()=>{r.value.id,console.log("taskDetails.value.taskTimer.start_time",r.value.taskTimer.start_time);const i=new Date(r.value.taskTimer.start_time).getTime();je=setInterval(()=>{const t=Math.floor((Date.now()-i)/1e3);Se.value=ut(t)},1e3)},$t=()=>{clearInterval(je),Se.value=ut(r.value.total_duration)},we=a([{is_bounce:"No"},{is_bounce:"Yes"}]),_e=a(),xe=a(((ye=r.value)==null?void 0:ye.description)||" "),Ze=a(!1);Ae(xe,i=>{i.length===0&&(xe.value=" "),Ze.value=!0});const Ke=a(null),Ct=a(),st=a(!0),Ue=a(!1),Vt=()=>{Ue.value=!0,st.value=!1},bt=()=>{Ue.value=!1,st.value=!0},rt=async()=>{var i;v.value=!0,await K((i=r.value)==null?void 0:i.id,Ke.value,u.value),O.value===!0?(h.add({severity:"success",summary:"Successful",detail:"Comment added Successfully",group:"br",life:3e3}),Ke.value=null,v.value=!1,u.value=null):(h.add({severity:"error",summary:"Error",detail:"Unable to add comment",group:"br",life:3e3}),v.value=!1)},dt=i=>{const t=new Date(i),f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],_=t.getDate(),S=t.getFullYear().toString().substr(-2),V=t.getHours(),De=t.getMinutes(),Ie=V>=12?"PM":"AM",Ee=V%12||12,lt=De<10?"0"+De:De;return`${_} ${f}'${S}, ${Ee}:${lt}${Ie}`},ct=async()=>{var f,_;let i;if(E.value){const S=new Date(E.value);S.setDate(S.getDate()+1),i=S.toISOString()}console.log("checkDate",L.value);const t=new Date((f=r.value)==null?void 0:f.due_date).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});console.log("formattedDueDate",t);const n={id:(_=r.value)==null?void 0:_.id,...Ze.value===!0?{description:xe.value}:{},project_id:Y,...L.value!==t?{dueDate:i?new Date(new Date(i).getTime()-18*60*60*1e3).toISOString().slice(0,19).replace("T"," "):null}:{},...ce.value===!0?{assignees:I.value.map(S=>S.id)}:{},...j.value===!0?{tags:N.value.map(S=>S.id)}:{}};if(i){const S=new Date(i);S.setDate(S.getDate()-1),E.value=S?new Date(S).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(",","").toLowerCase():null}await ne(n),R.value===!0?(h.add({severity:"success",summary:"Successful",detail:"Task detail updated",group:"br",life:3e3}),Ct.value=null,Ze.value===!0&&(Ze.value=!1,console.log("isDescriptionEdited Flagged")),ce.value===!0&&(ce.value=!1,console.log("isAsigneeEdited Flagged")),j.value===!0&&(j.value=!1,console.log("isTagsEdited Flagged"))):h.add({severity:"error",summary:"Error",detail:"Unable to upadte task detail",group:"br",life:3e3})},$e=a(null),Et=i=>{$e.value=i.target.files[0]},At=async()=>{var i,t;$e.value&&console.log("file =>",$e.value),await $((i=r.value)==null?void 0:i.id,$e.value),D.value===!0?(h.add({severity:"success",summary:"Successfull",detail:"File Upload successfully!",group:"br",life:3e3}),se((t=r.value)==null?void 0:t.id),document.getElementById("attachInput").value=null,$e.value=null):h.add({severity:"error",summary:"Error",detail:"Unable to upload file!",group:"br",life:3e3})},Ce=i=>{const t=["jpg","JPG","jpeg","png","gif","bmp","svg","webp","ico","tiff","tif","heic","heif"],n=["mp4","avi","flv","wmv","mov","3gp","mkv"],f=["pdf","PDF","ppt","pptx"],_=["doc","docx","rtf"],S=["xls","xlsx","csv"];return t.some(V=>i.endsWith("."+V))?"image":n.some(V=>i.endsWith("."+V))?"video":f.some(V=>i.endsWith("."+V))?"pdf":_.some(V=>i.endsWith("."+V))?"word":S.some(V=>i.endsWith("."+V))?"excel":"file"};St(async()=>{var n,f;await se((n=r.value)==null?void 0:n.id);const i={name:r.value.status_name,code:r.value.status};g.value=i;const t={is_bounce:r.value.is_bounce};_e.value=t,((f=r.value)==null?void 0:f.is_timer_start)==="true"&&T()});async function jt(i){var t,n,f;try{const _=ot("token"),{data:S,pending:V}=await _t(`${y.public.apiUrl}/tasks/update/${(t=r.value)==null?void 0:t.id}`,{method:"POST",headers:{Authorization:`Bearer ${_.value}`},body:{status:i.code}},"$nwfJLeTGBC");((n=S.value)==null?void 0:n.app_message)==="success"?(se((f=r.value)==null?void 0:f.id),h.add({severity:"success",summary:"Successful",detail:"Status Changed",group:"br",life:3e3}),Q("updateTaskTable")):h.add({severity:"error",summary:"Error",detail:"Unable to change status",group:"br",life:3e3})}catch(_){console.error("Error fetching data:",_)}}async function Lt(i){var t,n,f;try{const _=ot("token"),{data:S,pending:V}=await _t(`${y.public.apiUrl}/tasks/update/${(t=r.value)==null?void 0:t.id}`,{method:"POST",headers:{Authorization:`Bearer ${_.value}`},body:{is_bounce:i.is_bounce}},"$np1kf0qdb3");console.log("dataBO",S),((n=S.value)==null?void 0:n.app_message)==="success"?(se((f=r.value)==null?void 0:f.id),h.add({severity:"success",summary:"Successfull",detail:"Bounce Status Changed",group:"br",life:3e3})):h.add({severity:"error",summary:"Error",detail:"Unable to change bounce status",group:"br",life:3e3})}catch(_){console.error("Error fetching data:",_)}}const Ve=i=>{const n=i.split("/");return n[n.length-1]},Ne=i=>{const t=["Jan","Feb","Mar","Apr","MAy","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=i,f=new Date(n),_={year:"numeric",month:"long",day:"numeric"},V=f.toLocaleDateString("en-US",_).split(" "),De=t.indexOf(V[0]);return De!==-1&&(V[0]=t[De]),V.join(" ")};function ut(i){const t=Math.floor(i/3600).toString().padStart(2,"0"),n=Math.floor(i%3600/60).toString().padStart(2,"0"),f=(i%60).toString().padStart(2,"0");return`${t}:${n}:${f}`}const kt=async i=>{var t;await G(i),le.value===!0?(h.add({severity:"success",summary:"Successful",detail:"File Deleted successfully!",group:"br",life:3e3}),se((t=r.value)==null?void 0:t.id)):h.add({severity:"error",summary:"Error",detail:"Unable to delete file!",group:"br",life:3e3})},m=a(null),u=a(null),z=a(""),B=i=>{u.value=i.target.files[0],z.value=u.value?u.value.name:""},P=()=>{m.value.click()},he=async()=>{u.value=null},pt=async()=>{var _;const i=ot("token"),{data:t,pending:n,error:f}=await _t(`${y.public.apiUrl}/tasks/share/${(_=r.value)==null?void 0:_.id}`,{method:"GET",headers:{Authorization:`Bearer ${i.value}`}},"$yuqoLxhdIO");if(f.value){h.add({severity:"error",summary:"Error",detail:"Failed to share",life:3e3});return}else{const S=document.createElement("textarea");S.value=t.value.shared_web_link,document.body.appendChild(S),S.select(),document.execCommand("copy"),document.body.removeChild(S),h.add({severity:"success",summary:"Share successful",detail:"Shared link copied",group:"br",life:3e3});return}};return(i,t)=>{var Bt,Ft,Rt,Jt,Yt;const n=xt,f=El,_=Dt,S=Al,V=vt,De=jl,Ie=Ll,Ee=Fe,lt=il,cl=Ul,ul=al,pl=Il,ml=Nt,Oe=It("tooltip");return p(),q("div",Jo,[e("div",Yo,[H((p(),q("h5",Go,[pe(b(l(r).name),1)])),[[Oe,{value:`${l(r).name}`,pt:{width:"200px"}},void 0,{top:!0}]]),e("div",Ko,[H(e("span",{onClick:pt,class:"pi pi-share-alt my-auto cursor-pointer ml-2 share-btn"},null,512),[[Oe,{value:"Share Task"},void 0,{top:!0}]]),Wo])]),e("div",Qo,[e("div",null,[e("div",Po,[e("div",Xo,[e("form",{onSubmit:Xt(ct,["prevent"]),class:"mt-2 task-detail ml-2"},[e("div",Zo,[e("div",ea,[e("div",ta,[la,s(f,{style:{width:"164.94px"},class:"input-fields"},{default:k(()=>[s(n,{display:"chip",modelValue:l(I),"onUpdate:modelValue":t[0]||(t[0]=w=>U(I)?I.value=w:null),filter:"",resetFilterOnHide:"",options:o.usersLists,optionLabel:"name",placeholder:"Select Assignees",maxSelectedLabels:2,class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",na,[oa,s(f,{class:"input-fields"},{default:k(()=>[s(l(Tt),{style:"width: 164.94px; border-radius:7px",modelValue:l(E),"onUpdate:modelValue":t[1]||(t[1]=w=>U(E)?E.value=w:null),placeholder:"Set Due Date",showTime:"",hourFormat:"12",onDateSelect:t[2]||(t[2]=w=>Me(w))},null,8,["modelValue"])]),_:1})])]),e("div",aa,[e("div",ia,[sa,s(_,{onChange:t[3]||(t[3]=w=>jt(l(g))),modelValue:l(g),"onUpdate:modelValue":t[4]||(t[4]=w=>U(g)?g.value=w:null),options:l(J),optionLabel:"name",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["modelValue","options"])]),e("div",ra,[da,e("div",ca,[s(De,{close:l(Xe),group:"headless"},{container:k(({message:w,acceptCallback:Ut,rejectCallback:te})=>[e("div",ua,[e("div",pa,[e("div",null,[ma,s(S,{modelValue:l(fe),"onUpdate:modelValue":t[5]||(t[5]=ie=>U(fe)?fe.value=ie:null),placeholder:"00",showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:23,id:"hours"},{incrementbuttonicon:k(()=>[fa]),decrementbuttonicon:k(()=>[qa]),_:1},8,["modelValue"])]),e("div",null,[va,s(S,{modelValue:l(ge),"onUpdate:modelValue":t[6]||(t[6]=ie=>U(ge)?ge.value=ie:null),placeholder:"00",showButtons:"",buttonLayout:"vertical",style:{width:"3rem"},min:0,max:59,id:"minutes"},{incrementbuttonicon:k(()=>[ga]),decrementbuttonicon:k(()=>[ha]),_:1},8,["modelValue"])])]),e("div",ba,[s(V,{icon:"pi pi-check px-2 py-0 text-sm",label:"",class:"border-none w-full mx-3",loading:l(Te),onClick:ie=>Ge(te),size:"small"},null,8,["loading","onClick"])])])]),_:1},8,["close"]),H(s(V,{loading:l(ke),class:"clock-btn",onClick:Le,icon:((Bt=l(r))==null?void 0:Bt.is_timer_start)=="true"?"pi pi-stop":"pi pi-play",severity:((Ft=l(r))==null?void 0:Ft.is_timer_start)=="true"?" stop-color":"",rounded:"","aria-label":"Filter"},null,8,["loading","icon","severity"]),[[Oe,{value:((Rt=l(r))==null?void 0:Rt.is_timer_start)=="true"?"Stop":"Start"},void 0,{top:!0}]]),e("div",{class:"text-sm absolute",onClick:t[7]||(t[7]=w=>He(w))},b(((Jt=l(r))==null?void 0:Jt.is_timer_start)=="true"?l(Se):ut((Yt=l(r))==null?void 0:Yt.total_duration)),1)]),ka])])]),e("div",ya,[wa,s(f,{style:{width:"90%"},class:"input-fields"},{default:k(()=>[s(n,{display:"chip",modelValue:l(N),"onUpdate:modelValue":t[8]||(t[8]=w=>U(N)?N.value=w:null),filter:"",resetFilterOnHide:"",options:o.tagsLists,optionLabel:"name",placeholder:"Select Tags",class:"w-full"},null,8,["modelValue","options"])]),_:1})]),e("div",_a,[xa,s(l(dl),{modelValue:l(xe),"onUpdate:modelValue":t[9]||(t[9]=w=>U(xe)?xe.value=w:null),editorStyle:"height: 150px",readonly:!l(x)},{toolbar:k(()=>[e("span",Da,[H(e("button",Ta,null,512),[[Oe,"Bold",void 0,{bottom:!0}]]),H(e("button",Sa,null,512),[[Oe,"Italic",void 0,{bottom:!0}]]),H(e("button",$a,null,512),[[Oe,"Underline",void 0,{bottom:!0}]]),H(e("button",Ca,null,512),[[Oe,"Strikethrough",void 0,{bottom:!0}]]),Va,Ea,Aa,ja])]),_:1},8,["modelValue","readonly"])]),l(x)?(p(),q("div",La,[s(V,{type:"submit",label:"Save"})])):M("",!0)],32),s(cl,{class:"mt-3"},{default:k(()=>{var w,Ut;return[s(Ie,{class:"file-upload",header:"Detail"},{default:k(()=>{var te,ie,mt,ft,Gt,Kt,Wt,Qt;return[e("p",Ua,"Attachments: "+b((te=l(r))!=null&&te.attachments&&((mt=(ie=l(r))==null?void 0:ie.attachments)==null?void 0:mt.length)>0?(Gt=(ft=l(r))==null?void 0:ft.attachments)==null?void 0:Gt.length:0),1),e("div",Ia,[(Kt=l(r))!=null&&Kt.attachments&&((Wt=l(r))==null?void 0:Wt.attachments.length)===0?(p(),q("div",Oa,Ha)):M("",!0),(p(!0),q(ze,null,Re((Qt=l(r))==null?void 0:Qt.attachments,d=>(p(),q("div",{key:d,target:"_blank",class:"card attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 py-2 relative",style:{"background-color":"#f7fafc"}},[Ce(d==null?void 0:d.file)==="file"?(p(),q("a",{key:0,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:d==null?void 0:d.file},[Ba,e("div",Fa,[e("div",Ra,b(Ve(d==null?void 0:d.file)),1),e("div",Ja,b(Ne(d==null?void 0:d.created_at)),1)])],8,Na)):M("",!0),Ce(d==null?void 0:d.file)==="image"?(p(),q("a",{key:1,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-0 relative",href:d==null?void 0:d.file},[e("img",{src:d==null?void 0:d.file,alt:"",style:{width:"90%",height:"80px","border-radius":"10px","border-top-left-radius":"10px","object-fit":"cover"}},null,8,Ga),e("div",Ka,[e("div",Wa,b(Ve(d==null?void 0:d.file)),1),e("div",Qa,b(Ne(d==null?void 0:d.created_at)),1)])],8,Ya)):M("",!0),Ce(d==null?void 0:d.file)==="video"?(p(),q("a",{key:2,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:d==null?void 0:d.file},[Xa,e("div",Za,[e("div",ei,b(Ve(d==null?void 0:d.file)),1),e("div",ti,b(Ne(d==null?void 0:d.created_at)),1)])],8,Pa)):M("",!0),Ce(d==null?void 0:d.file)==="pdf"?(p(),q("a",{key:3,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:d==null?void 0:d.file},[ni,e("div",oi,[e("div",ai,b(Ve(d==null?void 0:d.file)),1),e("div",ii,b(Ne(d==null?void 0:d.created_at)),1)])],8,li)):M("",!0),Ce(d==null?void 0:d.file)==="word"?(p(),q("a",{key:4,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:d==null?void 0:d.file},[ri,e("div",di,[e("div",ci,b(Ve(d==null?void 0:d.file)),1),e("div",ui,b(Ne(d==null?void 0:d.created_at)),1)])],8,si)):M("",!0),Ce(d==null?void 0:d.file)==="excel"?(p(),q("a",{key:5,target:"_blank",class:"attachment-wrapper cursor-pointer flex flex-column justify-content-center align-items-center gap-2 px-2 my-6 relative",href:d==null?void 0:d.file},[mi,e("div",fi,[e("div",qi,b(Ve(d==null?void 0:d.file)),1),e("div",vi,b(Ne(d==null?void 0:d.created_at)),1)])],8,pi)):M("",!0),e("div",{onClick:is=>kt(d==null?void 0:d.id),class:"absolute bg-red-500 text-white p-2 flex align-items-center justify-content-center close-btn"},bi,8,gi)]))),128))]),l(x)?(p(),q("div",ki,[e("input",{onChange:Et,id:"attachInput",class:"float-right file-up-btn",type:"file",placeholder:"+"},null,32),s(V,{type:"button",loading:l(Z),onClick:At,label:"Upload"},null,8,["loading"])])):M("",!0)]}),_:1}),s(Ie,{header:`Sub Tasks ${(w=l(W))!=null&&w.length?l(W).length:0}`},{default:k(()=>[l(me)?H((p(),ve(V,{key:0,icon:"pi pi-plus",label:"Create",onClick:t[10]||(t[10]=te=>{var ie;return Q("openCreateSpace",(ie=l(r))==null?void 0:ie.id,"sub-task")}),class:"mr-2 sub-create",severity:"secondary"},null,512)),[[Oe,{value:"Create Sub Task"},void 0,{right:!0}]]):M("",!0),s(lt,{class:"tree-table",value:l(W),lazy:!0,tableProps:{style:{minWidth:"650px"}},style:{overflow:"auto"}},{empty:k(()=>[yi]),default:k(()=>[s(Ee,{class:"cursor-pointer tone",field:"name",header:"Name",expander:"",style:{width:"45%"}},{body:k(te=>[H((p(),q("span",{class:"taskTitle",onClick:ie=>Q("handleTaskDetailView",te.node)},[pe(b(te.node.data.name),1)],8,wi)),[[Oe,{value:`${te.node.data.name}`},void 0,{left:!0}]])]),_:1}),s(Ee,{field:"assignee",header:"Assignee",style:{width:"25%"}}),s(Ee,{field:"dueDateValue",header:"Due Date",style:X([{width:"11.5%"},{"text-wrap":"nowrap"}])}),s(Ee,{field:"priority",header:"Priority",style:{width:"10%"}},{body:k(te=>{var ie,mt,ft;return[e("span",{class:nt(["text-xs",((ie=te.node.data.priority)==null?void 0:ie.name)==="High"?"text-danger":((mt=te.node.data.priority)==null?void 0:mt.name)==="Medium"?"text-warning":"text-success"])},b((ft=te.node.data.priority)==null?void 0:ft.name),3)]}),_:1}),s(Ee,{field:"action",header:"Action"},{body:k(te=>[e("div",_i,[s(V,{style:{width:"30px",height:"30px","border-radius":"50%"},icon:"pi pi-ellipsis-v",class:"action-dropdown-det-toggle"}),e("div",xi,[s(V,{icon:"pi pi-trash",class:"mr-1 ac-btn dlt-action",severity:"warning",rounded:"",onClick:ie=>Q("confirmDeleteTask",te.node.key)},null,8,["onClick"]),s(V,{icon:"pi pi-cog",class:"mr-1 ac-btn view-action",severity:"info",onClick:ie=>Q("handleTaskDetailView",te.node),rounded:""},null,8,["onClick"]),s(V,{icon:"pi pi-pencil",class:"mr-1 ac-btn edit-action",severity:"success",onClick:ie=>Q("handleTaskEdit",te.node),rounded:""},null,8,["onClick"]),s(V,{icon:"pi pi-plus",class:"ac-btn sub-action",severity:"success",onClick:ie=>Q("openCreateSpace",te.node.key,"sub-task"),rounded:""},null,8,["onClick"])])])]),_:1})]),_:1},8,["value"])]),_:1},8,["header"]),s(Ie,{header:`Bounce ${((Ut=l(_e))==null?void 0:Ut.is_bounce)==="Yes"?"1":""}`},{default:k(()=>[e("div",Di,[e("div",Ti,[Si,s(_,{onChange:t[11]||(t[11]=te=>Lt(l(_e))),disabled:!l(C),modelValue:l(_e),"onUpdate:modelValue":t[12]||(t[12]=te=>U(_e)?_e.value=te:null),options:l(we),optionLabel:"is_bounce",placeholder:"Select Status",style:{width:"146.41px"}},null,8,["disabled","modelValue","options"])])])]),_:1},8,["header"])]}),_:1})])])])]),e("div",$i,[e("div",null,[e("div",Ci,[e("div",Vi,[e("div",Ei,[l(st)?(p(),ve(V,{key:0,onClick:Vt,label:"↓  Show More",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})):M("",!0)]),l(Ue)?(p(),q("div",Ai,[(p(!0),q(ze,null,Re(l(de),w=>(p(),q("ul",{key:w,style:{"margin-left":"-15px","margin-top":"-6px"}},[e("li",{innerHTML:w.title,style:{"font-size":"smaller !important"}},null,8,ji)]))),128)),e("div",Li,[s(V,{onClick:bt,label:"↑ Hide",class:"py-1 bg-gray-200 border-gray-100 text-surface-900 activity-btns"})])])):M("",!0),(p(!0),q(ze,null,Re(l(re),w=>(p(),ve(pl,{class:"mb-2",key:w.id},{title:k(()=>[e("div",Ui,[w.commentator_image?(p(),q("img",{key:0,class:"mr-2",src:w.commentator_image,alt:"",style:{width:"28px",height:"28px","border-radius":"50%"}},null,8,Ii)):(p(),ve(ul,{key:1,label:w.commentator_name.charAt(),class:"mr-2 capitalize",size:"small",style:{"background-color":"gray",color:"#ededed","border-radius":"50%"}},null,8,["label"])),e("p",Oi,b(w.commentator_name),1)])]),content:k(()=>[Ve(w==null?void 0:w.file)?(p(),q("div",zi,[e("a",{href:w==null?void 0:w.file,target:"_blank",class:"bg-gray-200 attachment-wrapper cursor-pointer flex align-items-center px-3 py-3 gap-2 comment-file",style:{"background-color":"#f7fafc"}},[Hi,e("div",Ni,[e("div",Bi,b(Ve(w==null?void 0:w.file)),1)])],8,Mi)])):M("",!0),e("p",Fi,b(w!=null&&w.comment?w==null?void 0:w.comment:""),1),e("i",Ri,b(dt(w.time)),1)]),_:2},1024))),128))]),e("form",{onSubmit:Xt(rt,["prevent"]),class:"comment-add"},[l(u)?(p(),q("div",Ji,[e("div",null,[Yi,pe(),e("span",null,b(l(z)),1)]),e("div",{onClick:he,class:"close-comment"},Ki)])):M("",!0),e("div",null,[s(ml,{placeholder:"Add comment",modelValue:l(Ke),"onUpdate:modelValue":t[13]||(t[13]=w=>U(Ke)?Ke.value=w:null),rows:"3",cols:"15",class:"border-gray-300 mb-1 comment-text",required:""},null,8,["modelValue"]),e("input",{class:"hidden",type:"file",ref_key:"fileInput",ref:m,onChange:B},null,544),s(V,{icon:"pi pi-cloud-upload",onClick:P,"aria-label":"Filter"}),s(V,{class:"ml-2",type:"submit",icon:"pi pi-plus",label:"Add",loading:l(v)},null,8,["loading"])])],32)])])])])}}};const ht=o=>(Mt("data-v-060a3647"),o=o(),Ht(),o),Qi={class:"card"},Pi={class:"d-flex create-space-btn-wrapper mb-3 mr-2"},Xi={class:"breadCrumWrap"},Zi=ht(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),es=ht(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),ts=ht(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),ls=ht(()=>e("p",{class:"pi pi-angle-right font-bold"},null,-1)),ns={class:"text cursor-pointer"},os=ht(()=>e("p",null,"Are you sure you want to delete?",-1)),as={__name:"index",setup(o){const c=a(Je("read_task")),y=be(),$=be(),{getSingleProject:G,deleteTask:D,getTaskAssignModalData:Z,getTagsAssignModalData:le,getTaskDetails:ue}=be(),{singleProject:ee,isTaskDeleted:F,tasks:ne,kanbanTasks:K}=Pe(be()),se=a({}),qe=a(!0),R=gt(),O=a(!1),re=a(null),W=wt().query.task_key;console.log(W);const{projects:J}=wt().params,r=a(!1),de=a(null),oe=a(null),ae=a(null),Y=a([]),Q=a([]),h=a(!1),v=a(!1),x=a(!1),C=async(L,g)=>{L?oe.value=L:oe.value="",g=="sub-task"?ae.value="Create Sub Task":ae.value="Create Task",r.value=!0,await Z(),Y.value=y.users,await le(),Q.value=$.tags},me=async L=>{re.value=L,document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const g=document.createElement("div");g.style.position="absolute",g.style.top="0",g.style.left="0",g.style.width="100%",g.style.height="100%",g.style.backgroundColor="rgba(0, 0, 0, 0)",g.style.zIndex="1000000",document.documentElement.appendChild(g),await Z(),Y.value=y.users,await le(),Q.value=$.tags,h.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(g)},I=L=>{de.value=L,v.value=!0},ce=async()=>{O.value=!0,await D(de.value,J),F.value===!0?(O.value=!1,R.add({severity:"success",summary:"Successful",detail:"Task Deleted Successfully",group:"br",life:3e3}),v.value=!1):(O.value=!1,R.add({severity:"error",summary:"Error",detail:"Unable to delete task",group:"br",life:3e3}))},N=async L=>{document.documentElement.style.cursor="wait",document.documentElement.style.position="relative";const g=document.createElement("div");g.style.position="absolute",g.style.top="0",g.style.left="0",g.style.width="100%",g.style.height="100%",g.style.backgroundColor="rgba(0, 0, 0, 0)",g.style.zIndex="100000010",document.documentElement.appendChild(g),x.value&&(x.value=!1),await ue(L.key),await Z(),Y.value=y.users,await le(),Q.value=$.tags,x.value=!0,document.documentElement.style.cursor="auto",document.documentElement.removeChild(g)};console.log("visibleTaskDetailView",x.value),Ae(x,L=>{if(L===!0)return 0;localStorage.removeItem("taskDetailID")}),(()=>{se.value={global:{value:null,matchMode:Cl.CONTAINS}}})();const E=L=>{r.value=L},Ye=L=>{h.value=L},Me=()=>{G(J)};return G(J),Ae(()=>wt().query.task_key,L=>{L&&N({key:L})}),W&&N({key:W}),$l(()=>{qe.value=!1}),(L,g)=>{var Se,je,ke,Le;const it=fl,fe=ql,ge=lo,Xe=ko,Te=Io,Ge=Wi,He=vt;return p(),q("div",Qi,[s(it,{position:"bottom-right",group:"br"}),e("div",Pi,[e("div",Xi,[s(fe,{to:"/",class:"text pi pi-home"}),Zi,s(fe,{to:"/companies",class:"text"},{default:k(()=>[pe("Companies")]),_:1}),es,s(fe,{to:`/companies/${(Se=l(ee))==null?void 0:Se.company_id}`,class:"text"},{default:k(()=>{var T;return[pe("Company - "+b((T=l(ee))==null?void 0:T.company_name),1)]}),_:1},8,["to"]),ts,s(fe,{to:`/companies/${(je=l(ee))==null?void 0:je.company_id}/spaces/${(ke=l(ee))==null?void 0:ke.space_id}`,class:"text"},{default:k(()=>{var T;return[pe(" Space - "+b((T=l(ee))==null?void 0:T.space_name),1)]}),_:1},8,["to"]),ls,e("p",ns,"Project - "+b((Le=l(ee))==null?void 0:Le.name),1)])]),l(c)?(p(),ve(ge,{key:0,kanbanTasks:l(K),tasks:l(ne),onOpenCreateSpace:C,onHandleTaskEdit:g[0]||(g[0]=T=>me(T)),onHandleTaskDetailView:g[1]||(g[1]=T=>N(T)),onConfirmDeleteTask:g[2]||(g[2]=T=>I(T))},null,8,["kanbanTasks","tasks"])):M("",!0),s(l(yt),{visible:l(r),"onUpdate:visible":g[4]||(g[4]=T=>U(r)?r.value=T:null),modal:"",header:l(ae),style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw","330px":"98vw"}},{default:k(()=>[s(Xe,{usersLists:l(Y),tagsLists:l(Q),taskId:l(oe),projects:l(J),onCloseCreateModal:g[3]||(g[3]=T=>E(T))},null,8,["usersLists","tagsLists","taskId","projects"])]),_:1},8,["visible","header"]),s(l(yt),{visible:l(h),"onUpdate:visible":g[6]||(g[6]=T=>U(h)?h.value=T:null),modal:"",header:"Edit Task",style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:k(()=>[s(Te,{singleTask:l(re),usersLists:l(Y),tagsLists:l(Q),projects:l(J),onCloseEditModal:g[5]||(g[5]=T=>Ye(T))},null,8,["singleTask","usersLists","tagsLists","projects"])]),_:1},8,["visible"]),s(l(yt),{visible:l(x),"onUpdate:visible":g[10]||(g[10]=T=>U(x)?x.value=T:null),modal:"",header:" ",style:{width:"90rem",height:"80rem"},breakpoints:{"1199px":"75vw","575px":"95vw"}},{default:k(()=>[s(Ge,{usersLists:l(Y),tagsLists:l(Q),projID:l(J),onOpenCreateSpace:C,onHandleTaskEdit:g[7]||(g[7]=T=>me(T)),onHandleTaskDetailView:g[8]||(g[8]=T=>N(T)),onConfirmDeleteTask:g[9]||(g[9]=T=>I(T)),onUpdateTaskTable:Me},null,8,["usersLists","tagsLists","projID"])]),_:1},8,["visible"]),s(l(yt),{visible:l(v),"onUpdate:visible":g[12]||(g[12]=T=>U(v)?v.value=T:null),header:" ",style:{width:"25rem"}},{default:k(()=>[os,s(He,{label:"No",icon:"pi pi-times",text:"",onClick:g[11]||(g[11]=T=>v.value=!1)}),s(He,{label:"Yes",icon:"pi pi-check",loading:l(O),text:"",onClick:ce},null,8,["loading"])]),_:1},8,["visible"])])}}},sr=zt(as,[["__scopeId","data-v-060a3647"]]);export{sr as default};
