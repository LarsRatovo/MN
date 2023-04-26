import{r as E,j as t,a as e,n as C}from"./app-8a0a780a.js";import{S as I}from"./Sidebar-79239723.js";import{D as L}from"./Delivery-d0711c0b.js";function D({providers:v,delivers:f}){const[m,u]=E.useState({type:"R",stat:2,price:0,fee:0,observation:"RAS"}),N=new URLSearchParams(new URL(window.location.href).search),g=l=>{l.preventDefault();let n=document.getElementById("myModal");n.style.display="block",axios.post("/deliveries?tk="+localStorage.getItem("tk"),m).then(a=>{if(n.style.display="none",a.status===401)alert("No provider found");else if(a.status===201){alert("Delvery created");let i=window.location.href;i=i.replace(new RegExp("#MN[0-9]*"),""),i=i.replace("#form",""),window.location.href=i+"#"+m.provider,window.location.reload()}else alert("Error was found")})},y=l=>{let{name:n,value:a}=l.target;axios.post("/providers/name?name="+a+"&tk="+localStorage.getItem("tk")).then(i=>{let r=document.createElement("ul");r.className="suggestion";let c=document.getElementById("listable");for(let d=0;d<c.children.length;d++)c.children.item(d).tagName==="UL"&&c.removeChild(c.children.item(d));c.appendChild(r);for(let d=0;d<i.data.length;d++){let s=i.data[d],h=document.createElement("li");h.className="suggest",h.innerHTML=s.ref,h.onclick=R=>{for(let p=0;p<c.children.length;p++)c.children.item(p).tagName==="UL"&&c.removeChild(c.children.item(p));l.target.value=h.innerHTML,document.getElementById("type").value==="R"?(u({...m,provider:s.ref,contact:s.contact,place:s.recovery}),document.getElementById("contact").value=s.contact,document.getElementById("place").value=s.recovery):u({...m,provider:s.ref})},r.appendChild(h)}})},x=l=>{let n=document.getElementById("goto").value,a=window.location.href;a=a.replace("#form",""),a=a.replace(new RegExp("#MN[0-9]*"),""),a=a+"#"+n.toUpperCase(),window.location.href=a},o=l=>{let{name:n,value:a}=l.target;a&&a!==""&&u({...m,[n]:a})},w=l=>{window.location.href="/deliveries?date="+l.target.value+"&tk="+localStorage.getItem("tk")},b=(l,n,a)=>{let i=document.getElementById("provider");i.value=n.ref,document.getElementById("type").value="L",u({...m,provider:n.ref,type:"L",date_delivery:a}),document.getElementById("date_delivery").value=a;let r=window.location.href;r=r.replace(new RegExp("#MN[0-9]*"),""),r=r.replace("#form",""),window.location.href=r+"#form"};return t(I,{children:[e(C,{title:"Deliveries"}),e("div",{className:"container swap",style:{paddingRight:"10px"},children:e("div",{className:"row d-md-flex justify-content-md-start contain",children:e("div",{className:"col-md-6 col-xl-9 col-xxl-8",style:{minWidth:"100%"},children:t("div",{className:"card shadow card-shadow",children:[e("div",{className:"card-header py-3",children:e("h3",{className:"text-center card-title",children:"Livraisons"})}),e("nav",{className:"navbar navbar-light navbar-expand-md d-xl-flex form-item",children:e("div",{className:"container-fluid",children:e("form",{className:"d-flex justify-content-xl-center add-livraison",style:{minWidth:"100%",minHeight:"100%"},onSubmit:g,children:t("div",{className:"container",children:[t("div",{className:"row",id:"form",children:[t("div",{className:"col-md-3",children:[t("select",{className:"form-select",name:"type",id:"type",onChange:o,children:[e("option",{value:"R",children:"R"}),e("option",{value:"L",children:"L"})]}),e("div",{children:e("div",{id:"listable",children:e("input",{className:"form-control",type:"text",id:"provider",name:"provider",onChange:y,placeholder:"Fournisseur"})})})]}),e("div",{className:"col-md-3",children:t("div",{children:[e("input",{className:"form-control",type:"text",inputMode:"numeric",name:"price",onChange:o,placeholder:"Prix"}),e("input",{className:"form-control",type:"text",placeholder:"Frais",name:"fee",onChange:o,inputMode:"numeric"})]})}),e("div",{className:"col-md-3",children:t("div",{children:[e("input",{className:"form-control",type:"datetime-local",id:"date_delivery",name:"date_delivery",onChange:o,required:!0}),e("input",{className:"form-control",type:"text",name:"contact",id:"contact",onChange:o,placeholder:"Contact",required:!0})]})}),e("div",{className:"col-md-3",children:t("div",{children:[e("input",{className:"form-control",type:"text",name:"place",id:"place",onChange:o,placeholder:"Lieu",required:!0}),t("select",{className:"form-select",name:"stat",onChange:o,children:[e("option",{value:"2",children:"En cours"}),e("option",{value:"0",children:"Annule"}),e("option",{value:"1",children:"Retour"}),e("option",{value:"3",children:"Effectue"})]})]})})]}),e("div",{className:"row",children:t("div",{className:"col text-center",children:[e("input",{className:"form-control",type:"text",name:"observation",onChange:o,placeholder:"observation"}),e("div",{className:"bibodo",children:e("button",{className:"btn btn-primary",type:"submit",children:"Valider"})})]})})]})})})}),e("div",{className:"d-flex contain",children:t("label",{className:"form-label d-flex livreures",children:[" ",e("input",{className:"field",type:"date",value:N.get("date"),onChange:w})]})}),e("div",{className:"d-flex contain",children:t("label",{className:"form-label d-flex livreures",children:[" ",e("input",{className:"field",type:"text",placeholder:"Aller a",id:"goto"}),e("button",{className:"btn btn-primary",type:"submit",onClick:x,children:"Go"})]})}),v.map(l=>t("div",{className:"card-body card-livraison",id:l.ref,children:[t("div",{className:"row",children:[e("div",{className:"col-md-6 col-lg-11 col-xl-12 d-xl-flex justify-content-xl-start align-items-xl-center",children:e("p",{className:"user-info",style:{cursor:"pointer"},children:l.ref})}),e("div",{className:"col",children:e("p",{className:"user-info",children:l.surname})}),e("div",{className:"col",children:e("p",{className:"user-info",children:l.name})}),e("div",{className:"col",children:e("p",{className:"user-info",children:l.contact})}),e("div",{className:"col",children:e("p",{className:"user-info",children:l.recovery})})]}),e(L,{deliveries:l.deliveries,delivers:f,provider:l,autofill:b})]}))]})})})})]})}export{D as default};