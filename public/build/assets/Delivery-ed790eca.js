import{j as o,a as n,b as i}from"./app-314895d4.js";function D({deliveries:s,delivers:b,autofill:f,provider:u}){const h=[{name:"Annule",value:0,obs:"Annule"},{name:"Retour",value:1,obs:"Retour"},{name:"En cours",value:2,obs:"RAS"},{name:"Effectue",value:3,obs:"Effectue"}],p=["#F96969","#EFF545","white","#95AEDA"],l=(t,e,a)=>{t[e]=a;var r=document.getElementById("myModal");r.style.display="block",i.put("/deliveries?tk="+localStorage.getItem("tk"),t).then(c=>{r.style.display="none"})},g=(t,e,a)=>{h.forEach(r=>{if(r.value===parseInt(e)){t.stat=r.value,t.observation=r.obs;let c=document.getElementById("myModal");c.style.display="block",i.put("/deliveries?tk="+localStorage.getItem("tk"),t).then(d=>{c.style.display="none",a.parentElement.parentElement.style.backgroundColor=p[e]})}})},E=(t,e)=>{var a=document.getElementById("myModal");a.style.display="block";let r=new Date(t.date_delivery),c=new Date(e);if(r.toDateString()!==c.toDateString()&&confirm("Reporter(Ajout de la livraison vers la date choisie et modification du status de la livraison du jour en retour) ou seulement changer la date")){let d={...t,stat:2,date_delivery:e};d.provider=u.ref,i.post("/deliveries?tk="+localStorage.getItem("tk"),d).then(m=>{m.status===401?alert("No provider found"):m.status===201?(alert("Delvery created"),t.stat=1,t.observation="Retour",l(t,"stat",1)):alert("Error was found")})}else l(t,"date_delivery",e);a.style.display="none"},k=(t,e)=>{console.log(e),confirm("Confirm the deletion")&&i.delete("/deliveries/"+e.id+"?tk="+localStorage.getItem("tk")).then(a=>{location.reload()})},I=()=>{let t=0,e=0;return s.forEach(a=>{t+=parseInt(a.fee)*1e3,e+=parseInt(a.price)}),o("table",{children:[o("tr",{children:[n("th",{children:"Frais"}),n("th",{children:"Prix"}),n("th",{children:"Total"})]}),n("td",{children:t}),n("td",{children:e}),n("td",{children:t+e})]})};return o("div",{className:"table-responsive table mt-2",id:"dataTable-1",role:"grid","aria-describedby":"dataTable_info",children:[o("table",{className:"table my-0",id:"dataTable",style:{color:"black"},children:[n("thead",{className:"table-dark",children:o("tr",{children:[n("th",{children:"Ref"}),n("th",{children:"Lieu"}),n("th",{children:"Contact"}),n("th",{children:"Prix"}),n("th",{children:"Fraix"}),n("th",{children:"Total"}),n("th",{children:"Heure"}),n("th",{children:"Type"}),n("th",{children:"Livreur"}),n("th",{children:"Observation"}),n("th",{children:"Status"})]})}),n("tbody",{className:"liste-table",children:s.map(t=>o("tr",{style:{backgroundColor:p[t.stat]},children:[n("td",{onClick:e=>f(e,u,t.date_delivery),onDoubleClick:e=>k(e,t),style:{cursor:"pointer"},children:t.ref}),n("td",{contentEditable:!0,onBlur:e=>l(t,"place",e.target.innerHTML),children:t.place}),n("td",{contentEditable:!0,onBlur:e=>l(t,"contact",e.target.innerHTML),children:t.contact}),n("td",{contentEditable:!0,onBlur:e=>l(t,"price",e.target.innerHTML),children:t.price}),n("td",{contentEditable:!0,onBlur:e=>l(t,"fee",e.target.innerHTML),children:t.fee}),n("td",{children:parseInt(t.price)+parseInt(t.fee)*1e3}),n("td",{children:n("input",{type:"datetime-local",defaultValue:t.date_delivery,onChange:e=>{E(t,e.target.value)}})}),n("td",{children:t.type}),n("td",{children:o("select",{onChange:e=>l(t,"deliver",e.target.value),children:[n("option",{children:"Deliver"}),b.map(e=>e.id===t.deliver?n("option",{value:e.id,selected:!0,children:e.name}):n("option",{value:e.id,children:e.name}))]})}),n("td",{contentEditable:!0,onBlur:e=>l(t,"observation",e.target.innerHTML),children:t.observation}),n("td",{children:n("select",{onChange:e=>g(t,e.target.value,e.target),children:h.map(e=>t.stat===e.value?n("option",{value:e.value,selected:!0,children:e.name}):n("option",{value:e.value,children:e.name}))})})]}))})]}),I()]})}export{D};
