import { useParams } from "react-router-dom";
import useFindFoodForDetail from "../../../Hooks/useFindFoodForDetail/useFindFoodForDetail";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import swal from "sweetalert";

const FoodDetails = () => {

    const {_id} = useParams();
    const { user } = useContext(AuthContext);
    const axiousSecure = useAxiosSecure();
    const url = '/postOrdarsInfo';
    const quantityUrl = `/countQuantitey`;
    const foodFinderSeciou = useFindFoodForDetail(_id);
    const {foodImage, foodName, resturantName, previousPrice, currentPrice, offer, quantity} = foodFinderSeciou;
    console.log(foodFinderSeciou);
    
    console.log( Date());
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const currentDate = `Date: ${day}/${month}/${year}`
    const currentTime = `time: ${hours}:${minutes}:${seconds}`

    const handelUploadeOrdars = () => {
        
        const foodId = _id;
        const userEmal = user.email;
        const nameOfFood = foodName;
        const priceString = currentPrice;
        const price = parseInt(priceString);
        const foodPhoto = foodImage;
        const orderDate = currentDate;
        const orderTime = currentTime;

        const ordarFood ={foodId, userEmal, nameOfFood, price, foodPhoto, orderDate, orderTime}

        axiousSecure.post(url, ordarFood)
            .then( res => {
                console.log(res.data)
                swal("Good job!", "confirm your order", "success");
            })
            .catch( err => console.log(err.message))
        axiousSecure.patch(quantityUrl)
            .then(res => console.log(res.data))
            .catch( err => console.log(err.message))

    }
    return (
        <div className="min-h-[70vh]">
            <div className="p-14 lg:flex w-fit mx-auto">
                <div className="card mb-6 flex-shrink-0 w-full max-w-sm lg:ml-24">
                    <img className="w-80 rounded-lg border-4 border-white shadow-2xl" src={`${foodImage}`} alt="" />
                </div>
                <div className="text-left w-96 h-fit my-auto text-xl leading-8  text-slate-600">
                    <h1 className="font-bold">Name: {foodName}</h1>
                    <p>Restaurant: {resturantName}</p>
                    <p>Privious Price: {previousPrice} $ </p>
                    <p>Current Price: {currentPrice} $</p>
                    <p>Quantity: {quantity}</p>
                    {
                        offer !== ""?
                        <p className="font-bold text-lg text-red-500">Offer: {offer}</p>
                        :
                        ""
                    }
                    <button onClick={handelUploadeOrdars} className="btn btn-outline btn-success mt-8">Order</button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;