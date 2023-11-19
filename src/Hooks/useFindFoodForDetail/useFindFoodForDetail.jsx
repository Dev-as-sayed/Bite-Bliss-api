import { useEffect, useState } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useParams } from "react-router-dom";

const useFindFoodForDetail = () => {
    const {_id} = useParams();
    const [foodDetail, setFooodDetail ] = useState({});
    const axiousSecure = useAxiosSecure();
    const url = `/getFoodById/${_id}`;

    useEffect( () => {
        axiousSecure(url)
            .then( res => setFooodDetail(res.data))
            .catch(err => console.log(err.message))
    }, [url, axiousSecure]);
    return foodDetail;
};

export default useFindFoodForDetail;