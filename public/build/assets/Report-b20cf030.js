import{a as e,F as h,j as l,r as f,n as u}from"./app-567b6011.js";import{S as p}from"./Sidebar-7f6b3ade.js";import{D as N}from"./Delivery-05996248.js";function y({providers:d,delivers:i}){return e(h,{children:d.map(a=>l("div",{className:"card-body card-livraison",children:[l("form",{action:"/report/image",method:"post",children:[e("input",{type:"hidden",name:"data",value:JSON.stringify(a)}),e("input",{type:"hidden",name:"tk",value:localStorage.getItem("tk")}),e("button",{className:"btn btn-primary",type:"submit",children:"png"})]}),l("div",{className:"row",children:[e("div",{className:"col-md-6 col-lg-11 col-xl-12 d-xl-flex justify-content-xl-start align-items-xl-center",children:e("p",{className:"user-info",children:a.ref})}),e("div",{className:"col",children:e("p",{className:"user-info",children:a.surname})}),e("div",{className:"col",children:e("p",{className:"user-info",children:a.name})}),e("div",{className:"col",children:e("p",{className:"user-info",children:a.contact})}),e("div",{className:"col",children:e("p",{className:"user-info",children:a.recovery})})]}),e(N,{deliveries:a.deliveries,delivers:i})]}))})}function j({date:d,providers:i,report:a,delivers:c}){const[r,s]=f.useState(d),o=t=>{s(t.target.value),location.href="/report?date="+t.target.value+"&tk="+localStorage.getItem("tk")},m=t=>{if(a[0]){let n=parseInt(t.target.value)-a[0].stayed;document.getElementById("diff").innerHTML=n,n===0?document.getElementById("diff").style.color="green":n<=0?document.getElementById("diff").style.color="red":document.getElementById("diff").style.color="orange"}};return l(p,{children:[e(u,{title:"Global-Report"}),e("div",{className:"card-header py-3",children:e("h3",{className:"text-center card-title",children:"Compte rendu global"})}),l("div",{className:"card-body",children:[e("div",{className:"card shadow global",style:{paddingRight:"0px",paddingBottom:"0px",paddingLeft:"0px"},children:l("div",{className:"card-body",children:[l("div",{className:"row",children:[e("div",{className:"col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-start align-items-xl-center",children:e("div",{className:"d-flex contain",children:e("label",{className:"form-label d-flex livreures",children:e("input",{className:"field",onBlur:o,id:"maindate",type:"date",defaultValue:d})})})}),e("div",{className:"col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-start align-items-xl-center",children:e("div",{className:"d-flex contain",children:e("label",{className:"form-label d-flex livreures",children:l("form",{method:"post",action:"/report",children:[e("input",{type:"hidden",name:"date",value:r}),e("input",{type:"text",className:"field",placeholder:"Fournisseurs",name:"key"})," ",e("button",{className:"btn btn-primary",type:"submit",children:"Filtrer"})]})})})})]}),e("div",{className:"row",children:e("div",{className:"col d-block d-xl-flex justify-content-xl-center",children:e("div",{className:"table-responsive table mt-2",id:"dataTable-3",role:"grid","aria-describedby":"dataTable_info",style:{minWidth:"70%"},children:l("table",{className:"table my-0",id:"dataTable",children:[e("thead",{className:"table-dark",children:l("tr",{children:[e("th",{children:"Depense"}),e("th",{children:"Total Versement"}),e("th",{children:"Total frais"}),e("th",{children:"Reste"})]})}),e("tbody",{className:"liste-table",children:(t=>t[0]?l("tr",{children:[e("td",{children:t[0].spent}),e("td",{children:t[0].price}),e("td",{children:t[0].fee}),e("td",{children:t[0].stayed})]}):l("tr",{children:[e("td",{children:"0"}),e("td",{children:"0"}),e("td",{children:"0"}),e("td",{children:"0"})]}))(a)})]})})})}),l("div",{className:"row",children:[e("div",{className:"col",children:e("input",{type:"text",className:"field",placeholder:"Difference",style:{minWidth:"100%"},onBlur:m})}),e("div",{className:"col",children:e("h4",{className:"d-xl-flex justify-content-xl-center",id:"diff",children:"[la difference s'affiche ici]"})})]})]})}),e(y,{providers:i,delivers:c})]})]})}export{j as default};
