import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import OredersCard from "./OredersCard";

const MyOrders = () => {

    const [orderFnfo, setOrderInfo] = useState([]);

    const { user } = useContext(AuthContext);
    const axiousSecure = useAxiosSecure();
    const url = `/getMyOrders/${user?.email}`;

    useEffect( () => {
        if(user?.email){
            axiousSecure.get(url, {withCredentials: true})
                .then( res => setOrderInfo(res.data))
                .catch( err => console.error(err.message))
        }
    }, [url, user, axiousSecure])

    // console.log(orderFnfo);


    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold text-center py-12">Order History</h1>
            <div className="grid gap-4 w-fit mx-auto md:grid-cols-2 lg:grid-cols-3">
                {
                    orderFnfo.map( singleOrder => <OredersCard
                        key={singleOrder._id}
                        singleOrder={singleOrder}
                    ></OredersCard>)
                }
            </div>
        </div>
    );
};

export default MyOrders;