import{a as e,j as a,F as r}from"./app-314895d4.js";function t(){return e("div",{id:"myModal",className:"modal",children:e("div",{className:"modal-content",children:e("div",{className:"modal-body",children:e("img",{src:"/assets/img/loading.gif"})})})})}function c({children:l}){let s=new Date,i=s.getFullYear()+"-"+s.toLocaleDateString("fr-FR",{month:"2-digit"})+"-"+s.toLocaleDateString("fr-FR",{day:"2-digit"});return a(r,{children:[a("header",{children:[e("link",{rel:"stylesheet",href:"/assets/bootstrap/css/bootstrap.min.css"}),e("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap"}),e("link",{rel:"stylesheet",href:"/assets/fonts/fontawesome-all.min.css"}),e("link",{rel:"stylesheet",href:"/assets/css/Dark-NavBar-Navigation-with-Button.css"}),e("link",{rel:"stylesheet",href:"/assets/css/Dark-NavBar-Navigation-with-Search.css"}),e("link",{rel:"stylesheet",href:"/assets/css/Dark-NavBar.css"}),e("link",{rel:"stylesheet",href:"/assets/css/edit.css"})]}),a("div",{id:"wrapper",children:[e("nav",{className:"navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0",style:{paddingRight:"0px",marginRight:"0px"},children:a("div",{className:"container-fluid d-flex flex-column p-0",children:[e("a",{className:"navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0",href:"/",children:e("div",{className:"sidebar-brand-text mx-3",children:e("span",{children:"MN"})})}),e("hr",{className:"sidebar-divider my-0"}),a("ul",{className:"navbar-nav text-light",id:"accordionSidebar",children:[e("li",{className:"nav-item",children:a("a",{className:"nav-link",href:"/deliveries?tk="+localStorage.getItem("tk")+"&date="+i,children:[e("i",{className:"fas fa-truck"}),e("span",{children:"Livraisons"})]})}),e("li",{className:"nav-item",children:a("a",{className:"nav-link",href:"/report?tk="+localStorage.getItem("tk"),children:[e("i",{className:"fas fa-money-check-alt"}),e("span",{children:"Compte rendu Global"})]})}),e("li",{className:"nav-item",children:a("a",{className:"nav-link",href:"/report/deliver?tk="+localStorage.getItem("tk"),children:[e("i",{className:"fas fa-money-check-alt"}),e("span",{children:"Compte rendu par livreur"})]})}),e("li",{className:"nav-item",children:a("a",{className:"nav-link",href:"/spent?tk="+localStorage.getItem("tk"),children:[e("i",{className:"fas fa-money-check-alt"}),e("span",{children:"Compte rendu des depenses"})]})}),e("li",{className:"nav-item",children:a("a",{className:"nav-link",href:"/calendar?tk="+localStorage.getItem("tk"),children:[e("i",{className:"fas fa-calendar-alt"}),e("span",{children:"Calendrier"})]})}),e("li",{className:"nav-item",children:a("a",{className:"nav-link",href:"/delivers?tk="+localStorage.getItem("tk"),children:[e("i",{className:"fas fa-user-tag"}),e("span",{children:"Livreur"}),"s"]})}),e("li",{className:"nav-item",children:a("a",{className:"nav-link",href:"/providers?tk="+localStorage.getItem("tk"),children:[e("i",{className:"fas fa-user-friends"}),e("span",{children:"Fournisseur"})]})})]})]})}),e("div",{className:"d-flex flex-column",id:"content-wrapper",children:e("main",{children:l})}),e(t,{})]}),e("script",{src:"/assets/bootstrap/js/bootstrap.min.js"}),e("script",{src:"/assets/js/bs-init.js"}),e("script",{src:"/assets/js/theme.js"})]})}export{c as S};
