import{j as l,a as e,n as o}from"./app-d4fac216.js";import{S as m}from"./Sidebar-4326e9fc.js";function p({calendar:i,date:r}){const s=a=>{location.href="/calendar?date="+a.target.value},n=(a,t)=>{var d=document.getElementById("myModal");d.style.display="block";let c={deliver:a,date_work:r};t.target.checked?axios.post("/calendar",c).then(h=>{d.style.display="none"}):axios.put("/calendar",c).then(h=>{d.style.display="none"})};return l(m,{children:[e(o,{title:"Calendar"}),l("div",{className:"card shadow",children:[e("div",{className:"card-header py-3",children:e("h3",{className:"text-center card-title",children:"Livreurs"})}),l("div",{className:"card-body",children:[e("div",{className:"d-flex contain",children:l("label",{className:"form-label d-flex livreures",children:[" ",e("input",{className:"field",type:"date",onChange:s,defaultValue:r})]})}),e("div",{className:"table-responsive table mt-2",id:"dataTable-1",role:"grid","aria-describedby":"dataTable_info",children:l("table",{className:"table my-0",id:"dataTable",children:[e("thead",{className:"table-dark",children:l("tr",{children:[e("th",{children:"Ref"}),e("th",{children:"Nom"}),e("th",{children:"Prenom"}),e("th",{children:"Contact"}),e("th",{children:"Actif"})]})}),e("tbody",{className:"liste-table",children:i.map(a=>a.actif===null?l("tr",{children:[e("td",{children:a.id}),e("td",{children:a.surname}),e("td",{children:a.name}),e("td",{children:a.contact}),e("td",{children:e("input",{type:"checkbox",onChange:t=>n(a.id,t)})})]}):l("tr",{children:[e("td",{children:a.id}),e("td",{children:a.surname}),e("td",{children:a.name}),e("td",{children:a.contact}),e("td",{children:e("input",{type:"checkbox",onChange:t=>n(a.id,t),defaultChecked:!0})})]}))})]})})]})]})]})}export{p as default};
