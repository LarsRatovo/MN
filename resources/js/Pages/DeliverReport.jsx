import Sidebar from "@/Layouts/Sidebar";
import {Head} from "@inertiajs/react";
import Deliveries from "@/Pages/Deliveries";
import Delivery from "@/Components/Delivery";
import axios from "axios";

export default function DeliverReport({delivers,deliver,deliveries,date}){
    const show=()=>{
        if(deliveries){
            return (
                <Delivery deliveries={deliveries} delivers={delivers}/>
            )
        }
    }
    const showDeliver=()=>{
        if(deliver){
            return <h3 className="text-center card-title">Compte rendu {deliver.surname+" "+deliver.name}</h3>;
        }
        return <h3 className="text-center card-title">Compte rendu Livreur</h3>
    }
    return (
        <Sidebar>
            <Head title={"Deliver-Report"}/>
            <div className="card shadow">
                <div className="card-header py-3">
                    {showDeliver()}
                </div>
                <div className="card-body">
                    <div className="row">
                        <div
                            className="col-md-6 col-xl-12 text-nowrap d-xl-flex justify-content-xl-center align-items-xl-center">
                            <form action={"/report/deliver"} method={"post"}>
                            <div className="d-flex contain">
                                <label className="form-label d-flex livreures">
                                    <input className="field" type="date" defaultValue={date} name={"date"}/>
                                    <input type={"hidden"} name={"tk"} value={localStorage.getItem("tk")}/>
                                    &nbsp;
                                    <select className="field" name={"id"}>
                                        {delivers.map(deliver=>
                                            <option value={deliver.id}>{deliver.surname+" "+deliver.name}</option>
                                        )}
                                    </select>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </label>
                            </div>
                            </form>
                            <div className="d-flex contain">
                                <label className="form-label livreures">&nbsp;
                                    <form action={"/report/deliver/pdf"} method={"post"}>
                                        <input type={"hidden"} name={"data"} value={JSON.stringify({deliver:deliver,deliveries:deliveries})}/>
                                        <input type={"hidden"} name={"tk"} value={localStorage.getItem("tk")}/>
                                        <button className="btn btn-primary field" type="submit">To pdf</button>
                                    </form>
                                </label>
                            </div>
                        </div>
                    </div>
                    {show()}
                </div>
            </div>
        </Sidebar>
    );
}
