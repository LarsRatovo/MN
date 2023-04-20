import Sidebar from "@/Layouts/Sidebar";
import {Head} from "@inertiajs/react";
import {useState} from "react";

export default function Spent({delivers,spents}){
    const [spentDeliver,setSpentDeliver]=useState({});
    const set=(event)=>{
        const {name,value}=event.target;
        setSpentDeliver({
            ...spentDeliver,
            [name]:value
        });
    }
    const update=(spent,colname,value)=>{
        var modal = document.getElementById("myModal");
        modal.style.display="block";
        spent[colname]=value;
        axios.put("/spent?tk="+localStorage.getItem("tk"),spent).then(result=>modal.style.display="none");
    }
    const save=(event)=>{
        var modal = document.getElementById("myModal");
        modal.style.display="block";
        event.preventDefault();
        axios.post("/spent?tk="+localStorage.getItem("tk"),spentDeliver).then(result=>{alert("Spent saved");modal.style.display="none";location.reload();});
    }
    const show=()=>{
        let somme=0;
        spents.forEach((spent)=>{
            somme+=parseInt(spent.amount);
        });
        if(spents){
            return <>
                <div className="table-responsive table mt-2" id="dataTable-1" role="grid"
                     aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead className="table-dark">
                        <tr>
                            <th>Livreur</th>
                            <th>Designation</th>
                            <th>Valeur</th>
                        </tr>
                        </thead>
                        <tbody className="liste-table">
                            {spents.map(spent=>
                                <tr>
                                    <td>{spent.owner.surname+" "+spent.owner.name}</td>
                                    <td contentEditable={true} onBlur={(event)=>update(spent,"reason",event.target.innerHTML)}>{spent.reason}</td>
                                    <td contentEditable={true} onBlur={(event)=>update(spent,"amount",event.target.innerHTML)}>{spent.amount}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Total depenses: {somme}</h4>
                    </div>
                </div>
            </>
        }else{
            return <></>
        }
    }
    return (
        <Sidebar>
            <Head title={"spent"}/>
            <div className="container swap">
                <div className="row contain">
                    <div className="col-md-6 col-xl-8" style={{minWidth: '100%'}}>
                        <div className="card shadow" style={{paddingRight: '0px',paddingBottom: '0px',paddingLeft: '0px'}}>
                            <div className="card-header py-3">
                                <h3 className="text-center card-title">Depenses</h3>
                            </div>
                            <nav className="navbar navbar-light navbar-expand-md sticky-top form-item">
                                <div className="container-fluid">
                                    <form className="d-flex justify-content-xl-center add-livraison" style={{minWidth: '100%',minHeight: '100%'}} onSubmit={save}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div><input className="form-control" type="date" name={"date_spent"} onChange={set}/></div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div><select className="form-select" name={"deliver"} onChange={set}>
                                                        <option value="" selected="">Livreurs</option>
                                                        {delivers.map(deliver=>
                                                            <option value={deliver.id}>{deliver.name}</option>
                                                        )}
                                                    </select></div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div><input className="form-control" type="text" name={"reason"} onChange={set}
                                                                placeholder="Designation"/></div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div><input className="form-control" type="text" name={"amount"} onChange={set}
                                                                placeholder="Valeur"/></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col text-center">
                                                    <div className="bibodo">
                                                        <button className="btn btn-primary" type="submit">Valider
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </nav>
                            <div className="card-body">
                                <div className="row g-0">
                                    <div className="col-md-6 col-xl-12 text-nowrap d-grid d-xl-flex justify-content-xl-center align-items-xl-center">
                                        <form action={"/spent/filter"} method={"post"}>
                                        <div className="d-flex contain">
                                            <label className="form-label d-flex livreures">&nbsp;
                                                <input className="field" type="date" name={"date"}/>
                                                <select className="form-select" name={"deliver"}>
                                                    <option value="" selected="">All</option>
                                                    {delivers.map(deliver=>
                                                        <option value={deliver.id}>{deliver.surname+" "+deliver.name}</option>
                                                    )}
                                                </select>
                                        </label></div>
                                        <div className="d-flex contain"><label className="form-label livreures">&nbsp;
                                            <button className="btn btn-primary btn-save" type="submit">Filtrer</button>
                                        </label></div>
                                        </form>
                                    </div>
                                </div>
                                {show()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}
