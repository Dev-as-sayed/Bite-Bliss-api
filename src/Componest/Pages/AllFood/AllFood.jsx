import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllFood = () => {
    const [allFoods, setAllFoods] = useState([]);
    // const [counts, setCounts]= useState(0);
    const [itemPerPage, setItemPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const axiousSecure = useAxiosSecure();
    const url = `/getAllFood?page=${currentPage}&size=${itemPerPage}`;
    // const {count} = counts;
    const {count} = useLoaderData();
    
    // const itemPerPage = 6;
    const numberOfPages = Math.ceil( count / itemPerPage);
    const pages = [];
    for( let i = 0; i < numberOfPages; i++ ){
        pages.push(i)
    }
    const handelItemsPerPage = e => {
        const itemsNumber = parseInt(e.target.value)
        console.log(itemsNumber);
        setItemPerPage(itemsNumber)
        setCurrentPage(0)
    }

    // useEffect( () => {
    //     axiousSecure.get('/getCount')
    //         .then(res => setCounts(res.data))
    // }, [axiousSecure])

    useEffect( () => {
        axiousSecure.get(url)
            .then( res => setAllFoods(res.data))
            .catch(error => console.log(error.message))
    }, [url, axiousSecure, currentPage, itemPerPage])


    // console.log(count, numberOfPages, pages, currentPage);

    return (
        <div className="p-20">
            <Helmet>
                <title>BITE-BLISS || ALL FOOD</title>
            </Helmet>

            <div className="w-fit mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    allFoods.map( singleFood => <>
                        <div key={singleFood._id}>
                            <div className="card w-72 text-slate-600 glass">
                                <figure><img className="w-full h-52" src={`${singleFood.foodImage}`} alt="foodImage!"/></figure>
                                <div className="card-body h-fit py-2">
                                    <h2 className="card-title">{singleFood.foodName}</h2>
                                    <p>Restaurant: {singleFood.restaurantName}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/foodDetails/${singleFood._id}`}><button className="btn btn-sm  btn-outline btn-info h-6">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
            <div className="w-fit mx-auto mt-12">
                {
                    pages.map( page => <button key={page} onClick={ () => setCurrentPage(page)}  className={`btn btn-sm mr-2 btn-outline btn-info h-6 ${ currentPage === page ? 'bg-green-300': ''}`} >{page}</button>)
                }
                <select className= "bg-green-300 text-black btn-sm mr-2 " onChange={handelItemsPerPage} value={itemPerPage}>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                </select>
            </div>
        </div>
    );
};

export default AllFood;