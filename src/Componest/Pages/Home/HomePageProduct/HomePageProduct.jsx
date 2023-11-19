import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";

const HomePageProduct = () => {

    const axiousSecure = useAxiosSecure();
    const [homePageProducts, setHmePageProducts] = useState([])
    const url = '/getHomePageProduct';

    useEffect( () => {
        axiousSecure.get(url, {withCredentials: true})
            .then(res => setHmePageProducts(res.data)) 
            .catch(err => console.log(err.message))   
    }, [url, axiousSecure])

    return (
        <div className="bg-slate-100 mt-10  p-10 lg:p-20">
            <div className="w-fit mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    homePageProducts.map( product => <>
                        <div key={product._id}>
                            <div className="card w-72 text-slate-600 glass">
                                <figure><img className="w-full h-52" src={`${product.foodImage}`} alt="foodImage!"/></figure>
                                <div className="card-body h-fit py-2">
                                    <h2 className="card-title">{product.foodName}</h2>
                                    <p>Restaurant: {product.restaurantName}</p>
                                    {/* {
                                        product.offer !== ""?
                                        <p className="font-bold text-lg text-red-500">{product.offer}</p>
                                        :
                                        ""
                                    } */}
                                    <div className="card-actions justify-center">
                                        <Link to={`/foodDetails/${product._id}`}><button className="btn btn-sm  btn-outline btn-info h-6">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
            <div className="w-fit mx-auto">
                <Link to="/allFood"><button className="btn btn-info mt-12 text-xl font-bold">see all</button></Link>
            </div>
        </div>
    );
};

export default HomePageProduct;