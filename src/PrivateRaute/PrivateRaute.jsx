import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";

const PrivateRaute = ({ children }) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span> ;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRaute;