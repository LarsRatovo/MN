import axios from "axios";

export default function Delivery({deliveries, delivers,autofill,provider}) {
    const states = [
        {
            name: 'Annule',
            value: 0,
            obs:'Annule'
        },
        {
            name: 'Retour',
            value: 1,
            obs: 'Retour'
        },
        {
            name: 'En cours',
            value: 2,
            obs: 'RAS'
        },
        {
            name: 'Effectue',
            value: 3,
            obs:'Effectue'
        }
    ];
    const color = ['#F96969', '#EFF545', 'white', '#95AEDA'];
    const update = (delivery, columnName, value) => {
        delivery[columnName]=value;
        var modal = document.getElementById("myModal");
        modal.style.display="block";
        axios.put("/deliveries?tk="+localStorage.getItem("tk"), delivery).
        then(response=>{
            modal.style.display="none";
            location.reload();
        });
    }
    const updateState=(delivery,value)=>{
        states.forEach(state=>{
            if(state.value===parseInt(value)){
                delivery['stat']=state.value;
                delivery['observation']=state.obs;
                let modal = document.getElementById("myModal");
                modal.style.display="block";
                axios.put("/deliveries?tk="+localStorage.getItem("tk"), delivery).
                then(response=>{
                    modal.style.display="none";
                    location.reload();
                });
            }
        })
    }
    const report=(delivery,date)=>{
        var modal = document.getElementById("myModal");
        modal.style.display="block";
        let old=new Date(delivery.date_delivery);
        let nold=new Date(date);
        if(old.toDateString()!==nold.toDateString()&&confirm("Reporter(Ajout de la livraison vers la date choisie et modification du status de la livraison du jour en retour) ou seulement changer la date")){
            let copy={
                ...delivery,
                stat:2,
                date_delivery:date
            }
            copy["provider"]=provider.ref;
            axios.post("/deliveries?tk="+localStorage.getItem("tk"),copy)
                .then(response=>{
                        if(response.status===401){
                            alert("No provider found");
                        }else if(response.status===201){
                            alert("Delvery created");
                            delivery['stat']=1;
                            delivery['observation']='Retour';
                            update(delivery,'stat',1);
                        }else{
                            alert("Error was found");
                        }
                    }
                );
        }else {
            update(delivery,"date_delivery",date);
        }
        modal.style.display="none";
    }
    const remove=(event,delivery)=>{
        console.log(delivery)
        if(confirm("Confirm the deletion")){
            axios.delete("/deliveries/"+delivery.id+"?tk="+localStorage.getItem("tk"))
                .then(response=>{
                    location.reload();
                });
        }
    }
    const sum=()=>{
        let fee=0;
        let price=0;
        deliveries.forEach((d)=>{
            fee+=(parseInt(d.fee)*1000);
            price+=parseInt(d.price);
        })
        return (
            <table>
                <tr>
                    <th>Frais</th>
                    <th>Prix</th>
                    <th>Total</th>
                </tr>
                    <td>{fee}</td>
                    <td>{price}</td>
                    <td>{fee+price}</td>
            </table>
        );
    }
    return (
        <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
            <table className="table my-0" id="dataTable" style={{color:"black"}}>
                <thead className="table-dark">
                <tr>
                    <th>Ref</th>
                    <th>Lieu</th>
                    <th>Contact</th>
                    <th>Prix</th>
                    <th>Fraix</th>
                    <th>Total</th>
                    <th>Heure</th>
                    <th>Type</th>
                    <th>Livreur</th>
                    <th>Observation</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody className="liste-table">
                {
                    deliveries.map(delivery =>
                        <tr style={{backgroundColor: color[delivery.stat]}}>
                            <td onClick={(event)=> autofill(event,provider,delivery.date_delivery)} onDoubleClick={(event)=>remove(event,delivery)} style={{cursor:"pointer"}}>{delivery.ref}</td>
                            <td contentEditable={true} onBlur={(event)=>update(delivery,'place',event.target.innerHTML)}>{delivery.place}</td>
                            <td contentEditable={true} onBlur={(event)=>update(delivery,'contact',event.target.innerHTML)}>{delivery.contact}</td>
                            <td contentEditable={true} onBlur={(event)=>update(delivery,'price',event.target.innerHTML)}>{delivery.price}</td>
                            <td contentEditable={true} onBlur={(event)=>update(delivery,'fee',event.target.innerHTML)}>{delivery.fee}</td>
                            <td>{parseInt(delivery.price) + (parseInt(delivery.fee)*1000)}</td>
                            <td><input type={"datetime-local"} defaultValue={delivery.date_delivery} onChange={(event)=>{report(delivery,event.target.value)}}/></td>
                            <td>{delivery.type}</td>
                            <td><select onChange={(event)=>update(delivery,'deliver',event.target.value)}>
                                <option>Deliver</option>
                                {delivers.map(deliver =>{
                                    if(deliver.id===delivery.deliver){
                                       return <option value={deliver.id} selected>{deliver.name}</option>;
                                    }else{
                                        return <option value={deliver.id}>{deliver.name}</option>;
                                    }
                                })}
                            </select></td>
                            <td contentEditable={true} onBlur={(event)=>update(delivery,'observation',event.target.innerHTML)}>{delivery.observation}</td>
                            <td><select onChange={(event)=>updateState(delivery,event.target.value)}>
                                {states.map(state =>{
                                    if(delivery.stat===state.value){
                                        return <option value={state.value} selected>{state.name}</option>
                                    }else{
                                        return <option value={state.value}>{state.name}</option>
                                    }
                                }
                                )}
                            </select></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            {sum()}
        </div>
    );
}
