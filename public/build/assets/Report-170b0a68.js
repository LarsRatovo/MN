import{a as e,F as f,j as a,r as u,n as N}from"./app-c224f63b.js";import{S as p}from"./Sidebar-7d27516f.js";import{D as y}from"./Delivery-efe93ece.js";function x({providers:n,delivers:s}){const d=l=>{let i=0;return l.forEach(c=>{i+=parseInt(c.price)}),i},r=l=>{let i=0;return l.forEach(c=>{i+=parseInt(c.fee)}),i};return e(f,{children:n.map(l=>a("div",{className:"card-body card-livraison",children:[a("form",{action:"/report/image",method:"post",children:[e("input",{type:"hidden",name:"data",value:JSON.stringify(l)}),e("button",{className:"btn btn-primary",type:"submit",children:"png"})]}),a("div",{className:"row",children:[e("div",{className:"col-md-6 col-lg-11 col-xl-12 d-xl-flex justify-content-xl-start align-items-xl-center",children:e("p",{className:"user-info",children:l.ref})}),e("div",{className:"col",children:e("p",{className:"user-info",children:l.surname})}),e("div",{className:"col",children:e("p",{className:"user-info",children:l.name})}),e("div",{className:"col",children:e("p",{className:"user-info",children:l.contact})}),e("div",{className:"col",children:e("p",{className:"user-info",children:l.recovery})})]}),e(y,{deliveries:l.deliveries,delivers:s}),a("div",{children:["Total versement : ",d(l.deliveries)]}),a("div",{children:["Total frais : ",r(l.deliveries)]}),a("div",{children:["Total : ",r(l.deliveries)+d(l.deliveries)]})]}))})}function T({date:n,providers:s,report:d,delivers:r}){const[l,i]=u.useState(n),c=t=>{i(t.target.value),location.href="/report?date="+t.target.value},m=t=>{if(d[0]){let h=parseInt(t.target.value),o=d[0].stayed-h;document.getElementById("diff").innerHTML=o,o===0?document.getElementById("diff").style.color="green":o<=0?document.getElementById("diff").style.color="red":document.getElementById("diff").style.color="orange"}};return a(p,{children:[e(N,{title:"Global-Report"}),e("div",{className:"card-header py-3",children:e("h3",{className:"text-center card-title",children:"Compte rendu global"})}),a("div",{className:"card-body",children:[e("div",{className:"card shadow global",style:{paddingRight:"0px",paddingBottom:"0px",paddingLeft:"0px"},children:a("div",{className:"card-body",children:[a("div",{className:"row",children:[e("div",{className:"col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-start align-items-xl-center",children:e("div",{className:"d-flex contain",children:e("label",{className:"form-label d-flex livreures",children:e("input",{className:"field",onBlur:c,id:"maindate",type:"date",defaultValue:n})})})}),e("div",{className:"col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-start align-items-xl-center",children:e("div",{className:"d-flex contain",children:e("label",{className:"form-label d-flex livreures",children:a("form",{method:"post",action:"/report",children:[e("input",{type:"hidden",name:"date",value:l}),e("input",{type:"text",className:"field",placeholder:"Fournisseurs",name:"key"})," ",e("button",{className:"btn btn-primary",type:"submit",children:"Filtrer"})]})})})})]}),e("div",{className:"row",children:e("div",{className:"col d-block d-xl-flex justify-content-xl-center",children:e("div",{className:"table-responsive table mt-2",id:"dataTable-3",role:"grid","aria-describedby":"dataTable_info",style:{minWidth:"70%"},children:a("table",{className:"table my-0",id:"dataTable",children:[e("thead",{className:"table-dark",children:a("tr",{children:[e("th",{children:"Depense"}),e("th",{children:"Total Versement"}),e("th",{children:"Total frais"}),e("th",{children:"Reste"})]})}),e("tbody",{className:"liste-table",children:(t=>t[0]?a("tr",{children:[e("td",{children:t[0].spent}),e("td",{children:t[0].price}),e("td",{children:t[0].fee}),e("td",{children:t[0].stayed})]}):a("tr",{children:[e("td",{children:"0"}),e("td",{children:"0"}),e("td",{children:"0"}),e("td",{children:"0"})]}))(d)})]})})})}),a("div",{className:"row",children:[e("div",{className:"col",children:e("input",{type:"text",className:"field",placeholder:"Difference",style:{minWidth:"100%"},onBlur:m})}),e("div",{className:"col",children:e("h4",{className:"d-xl-flex justify-content-xl-center",id:"diff",children:"[la difference s'affiche ici]"})})]})]})}),e(x,{providers:s,delivers:r})]})]})}export{T as default};