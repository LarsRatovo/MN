import{j as s,F as d,a as e,n as m,b as h}from"./app-314895d4.js";function p(){var i=l=>{l.preventDefault();var n=document.getElementById("username").value,c=document.getElementById("password").value;h.post("/user/in?username="+n+"&password="+c).then(a=>{if(a.status!==401){let r=a.data;localStorage.setItem("tk",r.token);let t=new Date,o=t.getFullYear()+"-"+t.toLocaleDateString("fr-FR",{month:"2-digit"})+"-"+t.toLocaleDateString("fr-FR",{day:"2-digit"});window.location="/deliveries?tk="+r.token+"&date="+o}else alert("Can't log")})};return s(d,{children:[e(m,{title:"Home"}),s("header",{children:[e("meta",{charSet:"utf-8"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, shrink-to-fit=no"}),e("title",{children:"MN"}),e("link",{rel:"stylesheet",href:"/assets/bootstrap/css/bootstrap.min.css"}),e("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap"}),e("link",{rel:"stylesheet",href:"/assets/fonts/fontawesome-all.min.css"}),e("link",{rel:"stylesheet",href:"/assets/css/Dark-NavBar-Navigation-with-Button.css"}),e("link",{rel:"stylesheet",href:"/assets/css/Dark-NavBar-Navigation-with-Search.css"}),e("link",{rel:"stylesheet",href:"/assets/css/Dark-NavBar.css"}),e("link",{rel:"stylesheet",href:"/assets/css/edit.css"}),e("link",{rel:"stylesheet",href:"/assets/css/Login-Form-Basic-icons.css"})]}),e("section",{className:"position-relative py-4 py-xl-5",children:s("div",{className:"container",children:[e("div",{className:"row mb-5"}),e("div",{className:"row d-flex justify-content-center",children:e("div",{className:"col-md-6 col-xl-4",children:e("div",{className:"card mb-5",children:s("div",{className:"card-body d-flex flex-column align-items-center",children:[e("div",{className:"bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4",style:{background:"rgb(0,0,0)"},children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 16 16",className:"bi bi-person",children:e("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})})}),s("form",{className:"text-center",onSubmit:i,children:[e("div",{className:"mb-3",children:e("input",{className:"form-control",id:"username",type:"text",name:"username",placeholder:"Username",required:!0})}),e("div",{className:"mb-3",children:e("input",{className:"form-control",id:"password",type:"password",name:"password",placeholder:"Password",required:!0})}),e("div",{className:"mb-3",children:e("button",{className:"btn btn-primary d-block w-100",type:"submit",children:"Login"})})]})]})})})})]})}),e("script",{src:"/assets/bootstrap/js/bootstrap.min.js"}),e("script",{src:"/assets/js/bs-init.js"}),e("script",{src:"/assets/js/theme.js"})]})}function f(){return e(p,{})}export{f as default};
