import { MdAutoDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import swal from "sweetalert";


const OredersCard = ({singleOrder}) => {

    const {_id, foodPhoto, nameOfFood, price, orderDate, orderTime} = singleOrder;
    const axiousSecure = useAxiosSecure();
    const url = `/deletOrder/${_id}`;
    const handelDeletOrder = _id => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                console.log(_id);
                axiousSecure.delete(url)
                    .then(() => {
                        swal("Poof! Your imaginary file has been deleted!", { icon: "success" });
                    })
                    .catch( error => console.log(error.message))
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }



    console.log(singleOrder);
    return (
        <div className="card flex flex-row w-[25rem] mx-auto relative shadow-xl">
            <figure><img className="h-full" src={`${foodPhoto}`} alt="Movie"/></figure>
            <div className="card-body z-0">
                <h2 className="card-title">{nameOfFood}</h2>
                <p>Price: {price}$</p>
                <p>{orderDate}</p>
                <p>{orderTime}</p>
                <button onClick={() => handelDeletOrder(_id)}  className="absolute top-5 right-5"><MdAutoDelete className="text-red-500 text-2xl" /></button>
            </div>
        </div>
    );
};

export default OredersCard;