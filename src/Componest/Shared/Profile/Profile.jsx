import { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import { LuUserCircle } from "react-icons/lu";
import { Link } from "react-router-dom";


const Profile = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then( res => console.log(res))
            .catch(error => console.error(error))
    }

    return (
        <>
            {/* if clitck the dainamic button open a drawer if click the out site is drawer close the drawer */}
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* this part for daynamic user frofile if thare userImage show on the pictur or show a user profile icon */}
                    {
                        user.photoURL?
                        <label htmlFor="my-drawer-4" className="drawer-button btn-outline w-fit border-blue-700 rounded-full">
                            <img className="rounded-full border-4 border-b-slate-900"  style={{ width: '2.5rem', height: '2.5rem' }} src={`${user.photoURL}`}/>
                        </label>
                        :
                        <label htmlFor="my-drawer-4" className="drawer-button btn-outline w-fit rounded-full">
                            <LuUserCircle  style={{ width: '2.5rem', height: '2.5rem' }}></LuUserCircle>
                        </label>
                    }
                </div> 
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-90 min-h-[85vh] my-14 w-64 rounded-xl bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                        <div className=" w-fit mx-auto mt-6">
                            <img src={`${user.photoURL}`} className="rounded-full border-4 border-b-slate-900" style={{ width: '5rem', height: '5rem' }} alt="" />
                        </div>
                        <div className="text-center mb-4">
                            <h2 className="font-bold text-xl">{user.displayName}</h2>
                            <p>{user.email}</p>
                        </div>
                        <li><Link to="/addProduct" onClick={ () => {window.location.href = "/addProduct";}}> Add Food</Link></li>
                        <li><Link to="/myFoods" onClick={ () => {window.location.href = "/myFoods";}}> My Foods</Link></li>
                        <li><Link to="/myOrders" onClick={ () => {window.location.href = "/myOrders";}}> My Orders </Link></li>
                        <li className="mx-auto"><a href=""><button className="btn w-fit btn-outline btn-xs btn-success" onClick={handelLogOut}>logOut</button></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Profile;