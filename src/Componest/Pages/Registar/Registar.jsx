import { BiUser, BiImage, BiLogoGmail } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { Link, useNavigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { Helmet } from "react-helmet";
import swal from "sweetalert";


const Registar = () => {
        
    const { createNewUser, updateUserProfile, logOut } = useContext(AuthContext);
    const axiousSecure = useAxiosSecure();
    const navigate = useNavigate()


    const handelCriyateUser = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const userPhoto = form.userPhoto.value;
        const email = form.email.value;
        const password = form.password.value;

        const userDetail = {name, userPhoto, email, password};
        const url = '/addUsers';
        console.log(userDetail);

        createNewUser(email, password)
            .then((result => {
                console.log(result.user);
                updateUserProfile(name, userPhoto)
                    .then( res => console.log(res))
                    .catch(error => console.error(error.message))
                axiousSecure.post(url, userDetail)
                    .then( res => console.log(res))
                    .catch( error => console.log(error))
                swal("Good job!", "Regitration success", "success");
                logOut()
                    .then(res => console.log(res))
                    .catch(err => console.error(err.message))
                form.reset()  
                navigate('/login')
            }))
            .catch( error => console.error(error.message, error.code))
        
        

    }
    return (
        <div className="flex py-12 bg-red-100 mx-16 my-10 rounded-xl border-4">
            <Helmet>
                <title>BITE-BLISS || REGISTAR</title>
            </Helmet>
            <div className="w-1/2 pt-12">
                <img className="w-3/5 mx-auto rounded-full" src="https://i.ibb.co/QJc4SGN/image.png" alt="" />
            </div>
            <div className="w-1/2">               
                <div className="w-fit mx-auto">
                    <div className=" bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 relative transition-all duration-200">
                        <h1 className="text-4xl text-white font-bold  text-center mb-6">Registrar</h1>
                        <form onSubmit={handelCriyateUser}>
                            <div className="relative my-4">
                                <input type="text" name="name" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                                <BiUser className="absolute top-4 right-4"/>
                            </div>
                            <div className="relative my-4">
                                <input type="text" name="userPhoto" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                                <BiImage className="absolute top-4 right-4"/>
                            </div>
                            <div className="relative my-4">
                                <input type="email" name="email" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                                <BiLogoGmail className="absolute top-4 right-4"/>
                            </div>
                            <div className="relative my-4">
                                <input type="password" name="password" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                                <AiOutlineUnlock className="absolute top-4 right-4"/>
                            </div>
                            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Registrar</button>
                        </form>
                        <div>
                            <span className="m-4">Allrady have an account? <Link className="text-blue-500" to='/login'>Login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registar;