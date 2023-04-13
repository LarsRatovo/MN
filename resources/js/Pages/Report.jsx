import Sidebar from "@/Layouts/Sidebar";
import {Head} from "@inertiajs/react";
import DeliveryProvider from "@/Components/DeliveryProvider";
import {useState} from "react";

export default function Report({date, providers, report,delivers}) {
    const [vardate,setVardate]=useState(date);
    const changeDate=(event)=>{
        setVardate(event.target.value);
        location.href="/report?date="+event.target.value;
    }
    const diff=(event)=>{
        let real_remainder=parseInt(event.target.value);
        let remainder=report.stayed-real_remainder;
        document.getElementById("diff").innerHTML=remainder;
        if(remainder===0){
            document.getElementById("diff").style.color="green";
        }else if(remainder<=0){
            document.getElementById("diff").style.color="red";
        }else{
            document.getElementById("diff").style.color="orange";
        }
    }
    const show=(report)=>{
        if(report[0]){
            return(
                <tr>
                    <td>{report[0].spent}</td>
                    <td>{report[0].price}</td>
                    <td>{report[0].fee}</td>
                    <td>{report[0].stayed}</td>
                </tr>
            )
        }else {
            return (
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            )
        }
    }
    return (
        <Sidebar>
            <Head title={"Global-Report"}/>
            <div className="card-header py-3">
                <h3 className="text-center card-title">Compte rendu global</h3>
            </div>
            <div className="card-body">
                <div className="card shadow global"
                     style={{paddingRight: '0px', paddingBottom: '0px', paddingLeft: '0px'}}>
                    <div className="card-body">
                        <div className="row">
                            <div
                                className="col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-start align-items-xl-center">
                                <div className="d-flex contain"><label
                                    className="form-label d-flex livreures"><input className="field" onBlur={changeDate} id={"maindate"} type="date" defaultValue={date}/>
                                </label></div>
                            </div>
                            <div
                                className="col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-start align-items-xl-center">
                                <div className="d-flex contain"><label className="form-label d-flex livreures">
                                    <form method={"post"} action={"/report"}>
                                        <input type={"hidden"} name={"date"} value={vardate}/>
                                    <input type="text" className="field" placeholder="Fournisseurs" name={"key"}/>&nbsp;
                                    <button className="btn btn-primary" type="submit">Filtrer</button>
                                    </form>
                                </label></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-block d-xl-flex justify-content-xl-center">
                                <div className="table-responsive table mt-2" id="dataTable-3" role="grid"
                                     aria-describedby="dataTable_info" style={{minWidth: '70%'}}>
                                    <table className="table my-0" id="dataTable">
                                        <thead className="table-dark">
                                        <tr>
                                            <th>Depense</th>
                                            <th>Total Versement</th>
                                            <th>Total frais</th>
                                            <th>Reste</th>
                                        </tr>
                                        </thead>
                                        <tbody className="liste-table">
                                        {
                                            show(report)
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="field" placeholder="Difference" style={{minWidth: '100%'}} onBlur={diff}/></div>
                            <div className="col">
                                <h4 className="d-xl-flex justify-content-xl-center" id={"diff"}>[la difference s'affiche
                                    ici]</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <DeliveryProvider providers={providers} delivers={delivers}/>
            </div>
        </Sidebar>
    );
}
