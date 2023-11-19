import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import MyFood from "./MyFood";

const MyFoods = () => {
    const [myFoods, setMyFoodsmyFoods] = useState([]);
    const {user } = useContext(AuthContext);
    const axiousSecure = useAxiosSecure();
    const url = `/getMyFoods/${user?.email}`;

    useEffect( () => {
        if(user?.email){
            axiousSecure.get(url, {withCredentials: true})
                .then(res => setMyFoodsmyFoods(res.data))
                .catch(err => console.log(err.message))
        }
    }, [url, user, axiousSecure])

    return (
        <div className="p-16">
            <div>
                {
                    myFoods.map( myFood => <MyFood
                        key={myFood._id}
                        myFood={myFood}
                    ></MyFood>)
                }
            </div>
        </div>
    );
};

export default MyFoods;