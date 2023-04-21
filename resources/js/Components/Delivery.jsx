export default function Delivery({deliveries, delivers,provider,generate}) {
    const states = [
        {
            name: 'Annule',
            value: 0
        },
        {
            name: 'Retour',
            value: 1
        },
        {
            name: 'En cours',
            value: 2
        },
        {
            name: 'Effectue',
            value: 3
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
    const remove=(delivery)=>{
        if(confirm("Confirm the deletion")){
            axios.delete("/deliveries/"+delivery.id+"?tk="+localStorage.getItem("tk"))
                .then(response=>{
                    location.reload();
                });
        }
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
                            <td onDoubleClick={(event)=>remove(event,delivery)} style={{cursor:"pointer"}}>{delivery.ref}</td>
                            <td contentEditable={true} onBlur={(event)=>update(delivery,'place',event.target.innerHTML)}>{delivery.place}</td>
                            <td contentEditable={true} onBlur={(event)=>update(delivery,'contact',event.target.innerHTML)}>{delivery.contact}</td>
                            <td contentEditable={true} onBlur={(event)=>update(delivery,'price',event.target.innerHTML)}>{delivery.price}</td>
                            <td contentEditable={true} onBlur={(event)=>update(delivery,'fee',event.target.innerHTML)}>{delivery.fee}</td>
                            <td>{parseInt(delivery.price) + parseInt(delivery.fee)}</td>
                            <td><input type={"datetime-local"} defaultValue={delivery.date_delivery} onBlur={(event)=>{update(delivery,'date_delivery',event.target.value)}}/></td>
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
                            <td><select onChange={(event)=>update(delivery,'stat',event.target.value)}>
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
        </div>
    );
}
