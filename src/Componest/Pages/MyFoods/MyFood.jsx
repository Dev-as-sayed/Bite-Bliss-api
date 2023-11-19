import { Link } from "react-router-dom";
import swal from 'sweetalert';
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const MyFood = ({myFood}) => {

    const { foodImage, _id, foodName, resturantName, foodCategory, previousPrice, currentPrice, offer, quantity } = myFood;
    const axiousSecure = useAxiosSecure();
    const url = `/deletFood/${_id}`;

    const handelDeletFood = _id => {

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
              swal("Your order is safe!");
            }
          });
    }
    
    return (
        <div className="">
            <table className="table mx-auto w-8/12 h-16">
                <tbody>
                {/* row 1 */}
                    <tr className="w-fit mx-auto">
                        <td className="w-1/4">
                            <div className="flex h-fit my-auto items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-14 h-14">
                                        <img src={`${foodImage}`} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{foodName} <br/> {resturantName}</div>
                                </div>
                            </div>
                        </td>
                        <td className="w-fit my-auto flex flex-row">
                            <div>
                                <span>{foodCategory}</span>-offer: <span>{offer}</span>
                                <br/>
                                <span className=" p-2 badge-sm">Quantity: {quantity} </span>
                            </div>
                            <div className=" ml-12">
                                <span className="badge p-2 mr-2 badge-sm">Previous Price: {previousPrice} $</span><br></br>
                                <span className="badge p-2 badge-sm">Present Price: {currentPrice} $</span><br/>
                            </div>
                        </td>
                        <td>
                            <div className=" h-fit p-4 my-auto"> 
                                <button onClick={() => handelDeletFood(_id)} className="btn btn-outline btn-success btn-xs mb-2">DELET</button><br/>
                                <Link to={`/updateFood/${_id}`}><button className="btn btn-outline btn-info btn-xs">UPDATE</button></Link>
                            </div>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyFood;