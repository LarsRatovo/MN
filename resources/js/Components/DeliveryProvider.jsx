import Delivery from "@/Components/Delivery";

export default function DeliveryProvider({providers, delivers}) {
    const price=(data)=>{
        let sum=0;
        data.forEach((d)=>{
            sum+=parseInt(d.price);
        });
        return sum;
    }
    const fee=(data)=>{
        let sum=0;
        data.forEach((d)=>{
            sum+=parseInt(d.fee);
        });
        return sum;
    }
    return (
        <>
            {providers.map(provider =>
                <div className="card-body card-livraison">
                    <form action={"/report/image"} method={"post"}>
                        <input type={"hidden"} name={"data"} value={JSON.stringify(provider)}/>
                        <input type={"hidden"} name={"tk"} value={localStorage.getItem("tk")}/>
                        <button className="btn btn-primary" type="submit">png</button>
                    </form>
                    <div className="row">
                        <div
                            className="col-md-6 col-lg-11 col-xl-12 d-xl-flex justify-content-xl-start align-items-xl-center">
                            <p className="user-info">{provider.ref}</p>
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
        </>
    );
}
