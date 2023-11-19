import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import Profile from "../Profile/Profile";


const NavBar = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    return (
        <div className="navbar bg-green-50 text-slate-600 font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-3 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li className=""><Link to="/blog" >Blog</Link></li>
                    <li><Link to="/allFood">All Food</Link></li>
                </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to="/">BLTE BLISS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog" >Blog</Link></li>
                    <li><Link to="/allFood">All Food</Link></li>
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="mr-6">
                    {
                        user ?
                        <Profile></Profile>
                        :
                        <span>
                            <Link to="/registar" className="btn btn-outline btn-success mr-4">Registar</Link>
                            <Link to="/login" className="btn btn-outline btn-success">Login</Link>
                        </span>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;