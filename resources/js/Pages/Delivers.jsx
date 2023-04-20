import Sidebar from "@/Layouts/Sidebar";
import {Head} from "@inertiajs/react";
import {useState} from "react";

export default function Delivers({delivers}){
    const [deliver,setDeliver]=useState({});
    const update=(deliver,name,value)=>{
        var modal = document.getElementById("myModal");
        modal.style.display="block";
        deliver[name]=value;
        axios.put("/delivers?tk="+localStorage.getItem("tk"),deliver).then(response=>
            modal.style.display="none"
        );
    }
    const set=(event)=>{
        let {name,value}=event.target;
        setDeliver({
            ...deliver,
            [name]:value
        });
    }
    const submit=(event)=>{
        event.preventDefault();
        var modal = document.getElementById("myModal");
        modal.style.display="block";
        console.log(JSON.stringify(deliver));
        axios.post("/delivers?tk="+localStorage.getItem("tk"),deliver).then(response=>{
                modal.style.display="none";
                location.reload();
            }
        );
    }
    return (
        <Sidebar>
            <Head title={"Delivers"}/>
            <div className="card-body">
                <div className="card-header py-3">
                    <h3 className="text-center card-title">Livreurs</h3>
                </div>
                <div className="row">
                    <form onSubmit={submit}>
                    <div className="col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-center align-items-xl-center">
                        <div className="d-flex contain">
                            <label className="form-label d-flex livreures">&nbsp;
                                <input type="text" className="field" placeholder="Nom" name={"surname"} onChange={set}/>
                                <input type="text" className="field" placeholder="prenom" name={"name"} onChange={set}/>
                            </label>
                        </div>
                        <div className="d-flex contain">
                            <label className="form-label livreures">&nbsp;
                                <input type="text" className="field" placeholder="Contact" name={"contact"} onChange={set}/>
                                <button className="btn btn-primary btn-save" type="submit">Sauvegarde</button>
                            </label>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead className="table-dark">
                        <tr>
                            <th>Ref</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Contact</th>
                        </tr>
                        </thead>
                        <tbody className="liste-table">
                        {delivers.map(deliver=>
                            <tr>
                                <td>{deliver.id}</td>
                                <td contentEditable={true} onBlur={(event)=>update(deliver,"surname",event.target.innerHTML)}>{deliver.surname}</td>
                                <td contentEditable={true} onBlur={(event)=>update(deliver,"name",event.target.innerHTML)}>{deliver.name}</td>
                                <td contentEditable={true} onBlur={(event)=>update(deliver,"contact",event.target.innerHTML)}>{deliver.contact}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Sidebar>
    );
}
