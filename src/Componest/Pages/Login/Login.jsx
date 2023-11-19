import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import swal from "sweetalert";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const Login = () => {

    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const axiousSecure = useAxiosSecure();
    const url = '/jwt';
    console.log(location.state);

    const handelLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        logIn(email, password)
            .then( res => {
                const loggedInUser = res.user;
                const user = {email};

                console.log(loggedInUser)
                form.reset() 
                swal("Good job!", "LogIn success!", "success");
                navigate( location?.state ? location?.state : '/')

                axiousSecure.post(url, user, {withCredentials: true})
                    .then(res => console.log(res.data))
                    .catch(err => console.error(err.message))
            })
            .catch( err => {
                console.log(err.message)
                const errorMessage = err.message;
                swal("Faild!", `${errorMessage}`, "error");
            })

    }
    return (
        <div className="flex py-12 bg-red-100 mx-16 my-10 rounded-xl border-4">
            <Helmet>
                <title>BITE-BLISS || LOGIN</title>
            </Helmet>
            <div className="w-1/2 pt-4">
                <img className="w-3/5 mx-auto rounded-full" src="https://i.ibb.co/j6rv47r/image.png" alt="" />
            </div>
            <div className="w-1/2">               
                <div className="w-fit mx-auto">
                    <div className=" bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 relative transition-all duration-200">
                        <h1 className="text-4xl text-white font-bold  text-center mb-6">Login</h1>
                        <form onSubmit={handelLogin}>
                            <div className="relative my-4">
                                <input type="email" name="email" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                                <BiUser className="absolute top-4 right-4"/>
                            </div>
                            <div className="relative my-4">
                                <input type="password" name="password" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                                <AiOutlineUnlock className="absolute top-4 right-4"/>
                            </div>
                            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Login</button>
                            <div>
                                <span className="m-4">New Here? <Link className="text-blue-500" to='/registar'>Create an Account</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;