import{r as u,j as t,a as e,n as N,F as m}from"./app-567b6011.js";import{S as b}from"./Sidebar-7f6b3ade.js";function x({delivers:r,spents:d}){const[c,h]=u.useState({}),i=a=>{const{name:l,value:n}=a.target;h({...c,[l]:n})},s=(a,l,n)=>{var o=document.getElementById("myModal");o.style.display="block",a[l]=n,axios.put("/spent?tk="+localStorage.getItem("tk"),a).then(y=>o.style.display="none")},p=a=>{var l=document.getElementById("myModal");l.style.display="block",a.preventDefault(),axios.post("/spent?tk="+localStorage.getItem("tk"),c).then(n=>{alert("Spent saved"),l.style.display="none",window.location=window.location})},v=()=>{let a=0;return d.forEach(l=>{a+=parseInt(l.amount)}),d?t(m,{children:[e("div",{className:"table-responsive table mt-2",id:"dataTable-1",role:"grid","aria-describedby":"dataTable_info",children:t("table",{className:"table my-0",id:"dataTable",children:[e("thead",{className:"table-dark",children:t("tr",{children:[e("th",{children:"Livreur"}),e("th",{children:"Designation"}),e("th",{children:"Valeur"})]})}),e("tbody",{className:"liste-table",children:d.map(l=>t("tr",{children:[e("td",{children:l.owner.surname+" "+l.owner.name}),e("td",{contentEditable:!0,onBlur:n=>s(l,"reason",n.target.innerHTML),children:l.reason}),e("td",{contentEditable:!0,onBlur:n=>s(l,"amount",n.target.innerHTML),children:l.amount})]}))})]})}),e("div",{className:"row",children:e("div",{className:"col",children:t("h4",{children:["Total depenses: ",a]})})})]}):e(m,{})};return t(b,{children:[e(N,{title:"spent"}),e("div",{className:"container swap",children:e("div",{className:"row contain",children:e("div",{className:"col-md-6 col-xl-8",style:{minWidth:"100%"},children:t("div",{className:"card shadow",style:{paddingRight:"0px",paddingBottom:"0px",paddingLeft:"0px"},children:[e("div",{className:"card-header py-3",children:e("h3",{className:"text-center card-title",children:"Depenses"})}),e("nav",{className:"navbar navbar-light navbar-expand-md sticky-top form-item",children:e("div",{className:"container-fluid",children:e("form",{className:"d-flex justify-content-xl-center add-livraison",style:{minWidth:"100%",minHeight:"100%"},onSubmit:p,children:t("div",{className:"container",children:[t("div",{className:"row",children:[e("div",{className:"col-md-3",children:e("div",{children:e("input",{className:"form-control",type:"date",name:"date_spent",onChange:i})})}),e("div",{className:"col-md-3",children:e("div",{children:t("select",{className:"form-select",name:"deliver",onChange:i,children:[e("option",{value:"",selected:"",children:"Livreurs"}),r.map(a=>e("option",{value:a.id,children:a.name}))]})})}),e("div",{className:"col-md-3",children:e("div",{children:e("input",{className:"form-control",type:"text",name:"reason",onChange:i,placeholder:"Designation"})})}),e("div",{className:"col-md-3",children:e("div",{children:e("input",{className:"form-control",type:"text",name:"amount",onChange:i,placeholder:"Valeur"})})})]}),e("div",{className:"row",children:e("div",{className:"col text-center",children:e("div",{className:"bibodo",children:e("button",{className:"btn btn-primary",type:"submit",children:"Valider"})})})})]})})})}),t("div",{className:"card-body",children:[e("div",{className:"row g-0",children:e("div",{className:"col-md-6 col-xl-12 text-nowrap d-grid d-xl-flex justify-content-xl-center align-items-xl-center",children:t("form",{action:"/spent/filter",method:"post",children:[e("div",{className:"d-flex contain",children:t("label",{className:"form-label d-flex livreures",children:[" ",e("input",{className:"field",type:"date",name:"date"}),e("input",{type:"hidden",name:"tk",value:localStorage.getItem("tk")}),t("select",{className:"form-select",name:"deliver",children:[e("option",{value:"",selected:"",children:"All"}),r.map(a=>e("option",{value:a.id,children:a.surname+" "+a.name}))]})]})}),e("div",{className:"d-flex contain",children:t("label",{className:"form-label livreures",children:[" ",e("button",{className:"btn btn-primary btn-save",type:"submit",children:"Filtrer"})]})})]})})}),v()]})]})})})})]})}export{x as default};
