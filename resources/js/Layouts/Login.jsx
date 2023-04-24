import {Head} from "@inertiajs/react";
import axios from "axios";

export default function Login() {
    var log=(event)=>{
        event.preventDefault();
        var username=document.getElementById("username").value;
        var password=document.getElementById("password").value;
        axios.post("/user/in?username="+username+"&password="+password).then(
            result=>{
                if(result.status!==401){
                    let user=result.data;
                    localStorage.setItem("tk",user.token);
                    let date=new Date();
                    let val=date.getFullYear()+"-"+date.toLocaleDateString("fr-FR",{month:"2-digit"})+"-"+date.toLocaleDateString("fr-FR",{day:"2-digit"});
                    window.location="/deliveries?tk="+user.token+"&date="+val;
                }else {
                    alert("Can't log");
                }
            }
        )
    };
    return (
        <>
            <Head title={"Home"}/>
            <header>
                <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
                    <title>MN</title>
                    <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css"/>
                    <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap"/>
                    <link rel="stylesheet" href="/assets/fonts/fontawesome-all.min.css"/>
                    <link rel="stylesheet" href="/assets/css/Dark-NavBar-Navigation-with-Button.css"/>
                    <link rel="stylesheet" href="/assets/css/Dark-NavBar-Navigation-with-Search.css"/>
                    <link rel="stylesheet" href="/assets/css/Dark-NavBar.css"/>
                    <link rel="stylesheet" href="/assets/css/edit.css"/>
                    <link rel="stylesheet" href="/assets/css/Login-Form-Basic-icons.css"/>
            </header>
            <section className="position-relative py-4 py-xl-5">
                <div className="container">
                    <div className="row mb-5"></div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6 col-xl-4">
                            <div className="card mb-5">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4"
                                         style={{background: "rgb(0,0,0)"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                             fill="currentColor"
                                             viewBox="0 0 16 16" className="bi bi-person">
                                            <path
                                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                        </svg>
                                    </div>
                                    <form className="text-center" onSubmit={log}>
                                        <div className="mb-3"><input className="form-control" id={"username"} type="text" name="username"
                                                                     placeholder="Username" required/></div>
                                        <div className="mb-3"><input className="form-control" id={"password"} type="password"
                                                                     name="password"
                                                                     placeholder="Password" required/></div>
                                        <div className="mb-3">
                                            <button className="btn btn-primary d-block w-100" type="submit">Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <script src="/assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="/assets/js/bs-init.js"></script>
            <script src="/assets/js/theme.js"></script>
            </>
            );
}
