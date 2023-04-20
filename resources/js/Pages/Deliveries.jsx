import Sidebar from "@/Layouts/Sidebar";
import {Head} from "@inertiajs/react";
import Delivery from "@/Components/Delivery";
import {useState} from "react";

export default function Deliveries({providers,delivers}){
    const [delivery,setDelivery]=useState({
        type:'R',
        stat:2
    });
    const urlsearch=new URLSearchParams(new URL(window.location.href).search);
    const submit=(event)=>{
        event.preventDefault();
        var modal = document.getElementById("myModal");
        modal.style.display="block";
        axios.post("/deliveries?tk="+localStorage.getItem("tk"),delivery)
            .then(response=>{
                    modal.style.display="none";
                    if(response.status===401){
                        alert("No provider found");
                    }else if(response.status===201){
                        alert("Delvery created");
                        location.reload();
                    }
                }
            );
    }
    const changeprovider=(event)=>{
        let {name,value}=event.target;
        axios.post("/providers/name?name="+value+"&tk="+localStorage.getItem("tk")).
        then(result=>{
            let ul=document.createElement("ul");
            ul.className="suggestion";
            let listable=document.getElementById("listable");
            for(let i=0;i<listable.children.length;i++){
                if(listable.children.item(i).tagName==="UL"){
                    listable.removeChild(listable.children.item(i));
                }
            }
            listable.appendChild(ul);
            for(let i=0;i<result.data.length;i++){
                let provider=result.data[i];
                let li=document.createElement("li");
                li.className="suggest";
                li.innerHTML=provider.ref;
                li.onclick=((ev)=>{
                    for(let i=0;i<listable.children.length;i++){
                        if(listable.children.item(i).tagName==="UL"){
                            listable.removeChild(listable.children.item(i));
                        }
                    }
                    event.target.value=li.innerHTML;
                    if(document.getElementById("type").value==='R'){
                        setDelivery({
                            ...delivery,
                            provider:provider.ref,
                            place:provider.recovery
                        })
                        document.getElementById("place").value=provider.recovery;
                    }else{
                        setDelivery({
                            ...delivery,
                            provider:provider.ref
                        });
                    }
                })
                ul.appendChild(li);
            }
        });
    }
    const change=(event)=>{
        let {name,value}=event.target;
        setDelivery({
            ...delivery,
            [name]:value
        });
    }
    const changeDate=(event)=>{
        window.location.href="/deliveries?date="+event.target.value+"&tk="+localStorage.getItem("tk");
    };
    const autofill=(event,provider)=>{
        let ref=document.getElementById("provider");
        ref.value=provider.ref;
        if(document.getElementById("type").value==='R'){
            setDelivery({
               ...delivery,
                provider:provider.ref,
               place:provider.recovery
            });
            document.getElementById("place").value=provider.recovery;
        }else{
            setDelivery({
                ...delivery,
                provider:provider.ref
            });
        }
        window.location.href=window.location.href+"#form";
    }
    return(
        <Sidebar>
            <Head title={"Deliveries"} />
            <div className="container swap" style={{paddingRight: '10px'}}>
                <div className="row d-md-flex justify-content-md-start contain">
                    <div className="col-md-6 col-xl-9 col-xxl-8" style={{minWidth: '100%'}}>
                        <div className="card shadow card-shadow">
                            <div className="card-header py-3">
                                <h3 className="text-center card-title">Livraisons</h3>
                            </div>
                            <nav className="navbar navbar-light navbar-expand-md d-xl-flex form-item">
                                <div className="container-fluid">
                                    <form className="d-flex justify-content-xl-center add-livraison" style={{minWidth: '100%',minHeight: '100%'}} onSubmit={submit}>
                                        <div className="container">
                                            <div className="row" id={"form"}>
                                                <div className="col-md-3">
                                                    <select className="form-select" name={"type"} id={"type"} onChange={change}>
                                                        <option value="R">R</option>
                                                        <option value="L">L</option>
                                                    </select>
                                                    <div>
                                                        <div id={"listable"}><input className="form-control" type="text" id={"provider"} name={"provider"} onChange={changeprovider} placeholder="Fournisseur"/></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div>
                                                        <input className="form-control" type="text" inputMode="numeric" name={"price"} onChange={change} placeholder="Prix"/>
                                                        <input className="form-control" type="text" placeholder="Frais" name={"fee"} onChange={change} inputMode="numeric"/></div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div>
                                                        <input className="form-control" type="datetime-local" name={"date_delivery"} onChange={change}/>
                                                        <input className="form-control" type="text" name={"contact"} onChange={change} placeholder="Contact"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div>
                                                        <input className="form-control" type="text" name={"place"} id={"place"} onChange={change} placeholder="Lieu"/>
                                                        <select className="form-select" name={"stat"} onChange={change}>
                                                            <option value="2">En cours</option>
                                                            <option value="0">Annule</option>
                                                            <option value="1">Retour</option>
                                                            <option value="3">Effectue</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col text-center">
                                                    <input className="form-control" type="text" name={"observation"} onChange={change} placeholder="observation"/>
                                                    <div className="bibodo"><button className="btn btn-primary" type="submit">Valider</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </nav>
                            <div className="d-flex contain"><label className="form-label d-flex livreures">&nbsp;<input className="field" type="date" value={urlsearch.get("date")} onChange={changeDate}/></label></div>
                            {providers.map(provider=>
                                <div className="card-body card-livraison">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-11 col-xl-12 d-xl-flex justify-content-xl-start align-items-xl-center">
                                            <p className="user-info" onDoubleClick={(event)=>{autofill(event,provider)}}>{provider.ref}</p>
                                        </div>
                                        <div className="col">
                                            <p className="user-info">{provider.surname}</p>
                                        </div>
                                        <div className="col">
                                            <p className="user-info">{provider.name}</p>
                                        </div>
                                        <div className="col">
                                            <p className="user-info">{provider.contact}</p>
                                        </div>
                                        <div className="col">
                                            <p className="user-info">{provider.recovery}</p>
                                        </div>
                                    </div>
                                    <Delivery deliveries={provider.deliveries} delivers={delivers}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}