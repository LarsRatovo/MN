import{j as t,a as e,n as o}from"./app-dc8ed1a5.js";import{S as m}from"./Sidebar-d1767d50.js";function p({calendar:i,date:d}){const s=a=>{location.href="/calendar?date="+a.target.value+"&tk="+localStorage.getItem("tk")},n=(a,l)=>{var r=document.getElementById("myModal");r.style.display="block";let c={deliver:a,date_work:d};l.target.checked?axios.post("/calendar?tk="+localStorage.getItem("tk"),c).then(h=>{r.style.display="none"}):axios.put("/calendar?tk="+localStorage.getItem("tk"),c).then(h=>{r.style.display="none"})};return t(m,{children:[e(o,{title:"Calendar"}),t("div",{className:"card shadow",children:[e("div",{className:"card-header py-3",children:e("h3",{className:"text-center card-title",children:"Livreurs"})}),t("div",{className:"card-body",children:[e("div",{className:"d-flex contain",children:t("label",{className:"form-label d-flex livreures",children:[" ",e("input",{className:"field",type:"date",onChange:s,defaultValue:d})]})}),e("div",{className:"table-responsive table mt-2",id:"dataTable-1",role:"grid","aria-describedby":"dataTable_info",children:t("table",{className:"table my-0",id:"dataTable",children:[e("thead",{className:"table-dark",children:t("tr",{children:[e("th",{children:"Ref"}),e("th",{children:"Nom"}),e("th",{children:"Prenom"}),e("th",{children:"Contact"}),e("th",{children:"Actif"})]})}),e("tbody",{className:"liste-table",children:i.map(a=>a.actif===null?t("tr",{children:[e("td",{children:a.id}),e("td",{children:a.surname}),e("td",{children:a.name}),e("td",{children:a.contact}),e("td",{children:e("input",{type:"checkbox",onChange:l=>n(a.id,l)})})]}):t("tr",{children:[e("td",{children:a.id}),e("td",{children:a.surname}),e("td",{children:a.name}),e("td",{children:a.contact}),e("td",{children:e("input",{type:"checkbox",onChange:l=>n(a.id,l),defaultChecked:!0})})]}))})]})})]})]})]})}export{p as default};