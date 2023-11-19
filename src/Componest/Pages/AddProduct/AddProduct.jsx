import { useContext } from "react";
import { Helmet } from "react-helmet";
import { BiUser, BiImage, BiCheese, BiDollar, BiSolidOffer } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";


const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const axiousSecure = useAxiosSecure();
    const url = '/addFoodByUser';
    // console.log(user?.email);

    const handelAddFood = e => {
        e.preventDefault();

        const form = e.target;
        const foodName = form.foodName.value;
        const foodCategory = form.foodCategory.value;
        const offer = form.offer.value;
        const previousPrice = form.previousPrice.value;
        const resturantName = form.resturantName.value;
        const foodImage = form.foodImage.value;
        const quantity = form.quantity.value;
        const currentPrice = form.currentPrice.value;
        const userEmail = user?.email;

        const addFood = { foodName, resturantName, foodCategory, foodImage, offer, quantity, previousPrice, currentPrice, userEmail};

        console.log(addFood, userEmail);

        axiousSecure.post(url, addFood)
            .then(res => {
                console.log(res.data)
                form.reset()
            })
            .catch(error => console.log(error.message))


    }
    return (
        <div className="flex p-12 bg-red-100 px-16 ">
            <Helmet>
                <title>BITE-BLISS || ADD PRODUCT</title>
            </Helmet>
            <div className="w-fit mx-auto">
                <div className=" bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 relative transition-all duration-200">
                    <h1 className="text-4xl text-white font-bold  text-center mb-6">Add your food</h1>
                    <form onSubmit={handelAddFood}>
                        <div className="flex gap-8">
                            <div>
                                <div className="relative my-4">
                                    <input type="text" name="foodName" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Name</label>
                                    <BiUser className="absolute top-4 right-4"/>
                                </div>
                                <div className="relative my-4">
                                    <input type="text" name="foodCategory" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Category</label>
                                    <BiCheese className="absolute top-4 right-4"/>
                                </div>
                                <div className="relative my-4">
                                    <input type="number" name="offer" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Offer</label>
                                    <BiSolidOffer className="absolute top-4 right-4"/>
                                </div>
                                <div className="relative my-4">
                                    <input type="number" name="previousPrice" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Previous Price</label>
                                    <BiDollar className="absolute top-4 right-4"/>
                                </div>
                            </div>
                            <div>
                                <div className="relative my-4">
                                    <input type="text" name="resturantName" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Resturent Name</label>
                                    <BiUser className="absolute top-4 right-4"/>
                                </div>
                                <div className="relative my-4">
                                    <input type="text" name="foodImage" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                                    <BiImage className="absolute top-4 right-4"/>
                                </div>
                                <div className="relative my-4">
                                    <input type="number" name="quantity" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                                    <MdOutlineProductionQuantityLimits className="absolute top-4 right-4"/>
                                </div>
                                <div className="relative my-4">
                                    <input type="number" name="currentPrice" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Current Price</label>
                                    <BiDollar className="absolute top-4 right-4"/>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">ADD PRODUCT</button>
                    </form>
                    <div>
                        {/* <span className="m-4">Allrady have an account? <Link className="text-blue-500" to='/login'>Login</Link></span> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;