import{r as m,j as l,a as e,n as h}from"./app-c224f63b.js";import{S as u}from"./Sidebar-7d27516f.js";function f({providers:i}){const[c,o]=m.useState({}),n=(t,a,s)=>{var d=document.getElementById("myModal");d.style.display="block",t[a]=s,axios.put("/providers",t).then(p=>d.style.display="none")},r=t=>{let{name:a,value:s}=t.target;o({...c,[a]:s})};return l(u,{children:[e(h,{title:"Providers"}),l("div",{className:"card shadow",children:[e("div",{className:"card-header py-3",children:e("h3",{className:"text-center card-title",children:"Fournisseurs"})}),l("div",{className:"card-body",children:[e("div",{className:"row",children:e("form",{onSubmit:t=>{var a=document.getElementById("myModal");a.style.display="block",t.preventDefault(),console.log(JSON.stringify(c)),axios.post("/providers",c).then(s=>{a.style.display="none",location.reload()})},children:l("div",{className:"col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-center align-items-xl-center",children:[e("div",{className:"d-flex contain",children:l("label",{className:"form-label d-flex livreures",children:[" ",e("input",{type:"text",className:"field",name:"surname",placeholder:"Nom",onChange:r}),e("input",{type:"text",className:"field",name:"name",placeholder:"prenom",onChange:r})]})}),e("div",{className:"d-flex contain",children:l("label",{className:"form-label livreures",children:[" ",e("input",{type:"text",className:"field",name:"contact",placeholder:"Contact",onChange:r}),e("input",{type:"text",className:"field",name:"recovery",placeholder:"Lieu de recuperation",onChange:r}),e("button",{className:"btn btn-primary btn-save",type:"submit",onClick:t=>{this.disabled=!0},children:"Sauvegarde"})]})})]})})}),e("div",{className:"table-responsive table mt-2",id:"dataTable-1",role:"grid","aria-describedby":"dataTable_info",children:l("table",{className:"table my-0",id:"dataTable",children:[e("thead",{className:"table-dark",children:l("tr",{children:[e("th",{children:"Ref"}),e("th",{children:"Nom"}),e("th",{children:"Prenom"}),e("th",{children:"Contact"}),e("th",{children:"Lieu de recuperation"})]})}),e("tbody",{className:"liste-table",children:i.map(t=>l("tr",{children:[e("td",{children:t.ref}),e("td",{contentEditable:!0,onBlur:a=>n(t,"surname",a.target.innerHTML),children:t.surname}),e("td",{contentEditable:!0,onBlur:a=>n(t,"name",a.target.innerHTML),children:t.name}),e("td",{contentEditable:!0,onBlur:a=>n(t,a,"contact",a.target.innerHTML),children:t.contact}),e("td",{contentEditable:!0,onBlur:a=>n(t,"recovery",a.target.innerHTML),children:t.recovery})]}))})]})})]})]})]})}export{f as default};
