import Sidebar from "@/Layouts/Sidebar";
import {useState} from "react";
import {Head} from "@inertiajs/react";

export default function Providers({providers}) {
    const [data,setData]=useState(providers);
    const [provider,setProvider]=useState({});
    const update=(provider,name,value)=>{
        var modal = document.getElementById("myModal");
        modal.style.display="block";
        provider[name]=value;
        axios.put("/providers?tk="+localStorage.getItem("tk"),provider).then(response=>
            modal.style.display="none"
        );
    }
    const set=(event)=>{
        let {name,value}=event.target;
        setProvider({
            ...provider,
            [name]:value
        });
    }
    const submit=(event)=>{
        let modal = document.getElementById("myModal");
        modal.style.display="block";
        event.preventDefault();
        console.log(JSON.stringify(provider));
        axios.post("/providers?tk="+localStorage.getItem("tk"),provider).then(response=>{
                modal.style.display="none";
                location.reload();
        }
        );
    };
    const search=(event)=>{
        let modal = document.getElementById("myModal");
        modal.style.display="block";
        event.preventDefault();
        axios.post("/providers/search?tk="+localStorage.getItem("tk")+"&name="+event.target.name.value,provider).then(response=>{
                modal.style.display="none";
                setData(response.data);
            }
        );
    }
    return (
        <Sidebar>
            <Head title={"Providers"}/>
        <div className="card shadow">
            <div className="card-header py-3">
                <h3 className="text-center card-title">Fournisseurs</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <form onSubmit={submit}>
                    <div className="col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-center align-items-xl-center">
                        <div className="d-flex contain">
                            <label className="form-label d-flex livreures">&nbsp;
                                <input type="text" className="field" name={"surname"} placeholder="Nom" onChange={set}/>
                                <input type="text" className="field" name={"name"} placeholder="prenom" onChange={set}/>
                            </label>
                        </div>
                        <div className="d-flex contain">
                            <label className="form-label livreures">&nbsp;
                                <input type="text" className="field" name={"contact"} placeholder="Contact" onChange={set}/>
                                <input type="text" className="field" name={"recovery"} placeholder="Lieu de recuperation" onChange={set}/>
                            <button className="btn btn-primary btn-save" type="submit">Sauvegarde</button>
                            </label>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="row">
                    <form onSubmit={search}>
                    <div className="col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-center align-items-xl-center">
                        <div className="d-flex contain">
                            <label className="form-label d-flex livreures">&nbsp;
                                <input type="text" className="field" name={"name"} placeholder="Nom,Prenom,Ref,Recup..." onChange={set}/>
                                <button className="btn btn-primary btn-save" type="submit">Filtrer</button>
                            </label>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="table-responsive table mt-2" id="dataTable-1" role="grid"
                     aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead className="table-dark">
                        <tr>
                            <th>Ref</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Contact</th>
                            <th>Lieu de recuperation</th>
                        </tr>
                        </thead>
                        <tbody className="liste-table">
                        {
                            data.map(provider=>
                                <tr>
                                    <td>{provider.ref}</td>
                                    <td contentEditable={true} onBlur={(event)=>update(provider,'surname',event.target.innerHTML)}>{provider.surname}</td>
                                    <td contentEditable={true} onBlur={(event)=>update(provider,'name',event.target.innerHTML)}>{provider.name}</td>
                                    <td contentEditable={true} onBlur={(event=>update(provider,event,'contact',event.target.innerHTML))}>{provider.contact}</td>
                                    <td contentEditable={true} onBlur={(event)=>update(provider,'recovery',event.target.innerHTML)}>{provider.recovery}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </Sidebar>
);
}
