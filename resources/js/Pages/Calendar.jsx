import Sidebar from "@/Layouts/Sidebar";
import {Head} from "@inertiajs/react";

export default function Calendar({calendar,date}){
    const dateChanger=(event)=>{
        location.href="/calendar?date="+event.target.value;
    }
    const calendarChanger=(id,event)=>{
        var modal = document.getElementById("myModal");
        modal.style.display="block";
        let calendar={
            deliver:id,
            date_work:date
        }
        if(event.target.checked){
            axios.post("/calendar",calendar).then(response=>{
                modal.style.display="none";
            });
        }else {
            axios.put("/calendar",calendar).then(response=>{
                modal.style.display="none";
            });
        }
    }
    return (
        <Sidebar>
            <Head title={"Calendar"}/>
            <div className="card shadow">
                <div className="card-header py-3">
                    <h3 className="text-center card-title">Livreurs</h3>
                </div>
                <div className="card-body">
                    <div className="d-flex contain"><label className="form-label d-flex livreures">&nbsp;<input className="field" type="date" onChange={dateChanger} defaultValue={date}/></label></div>
                    <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                        <table className="table my-0" id="dataTable">
                            <thead className="table-dark">
                            <tr>
                                <th>Ref</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Contact</th>
                                <th>Actif</th>
                            </tr>
                            </thead>
                            <tbody className="liste-table">
                            {
                                calendar.map(day=>{
                                    if(day.actif===null){
                                        return (
                                            <tr>
                                                <td>{day.id}</td>
                                                <td>{day.surname}</td>
                                                <td>{day.name}</td>
                                                <td>{day.contact}</td>
                                                <td><input type="checkbox" onChange={(event)=>calendarChanger(day.id,event)} /></td>
                                            </tr>
                                        );
                                    }else {
                                        return (
                                            <tr>
                                                <td>{day.id}</td>
                                                <td>{day.surname}</td>
                                                <td>{day.name}</td>
                                                <td>{day.contact}</td>
                                                <td><input type="checkbox" onChange={(event)=>calendarChanger(day.id,event)} defaultChecked/></td>
                                            </tr>
                                        );
                                    }
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}
