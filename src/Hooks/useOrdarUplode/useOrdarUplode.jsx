import { useEffect, useState } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useOrdarUplode = () => {
    const [ordars, setOrdars] = useState();
    const axiousSecure = useAxiosSecure();
    const url = '/pastOrdars';

    useEffect( () => {
        axiousSecure.post(url)
            .then( res => setOrdars(res.data))
            .catch( err => console.log(err.message))
    }, [url, axiousSecure])

    return setOrdars;
};

export default useOrdarUplode;