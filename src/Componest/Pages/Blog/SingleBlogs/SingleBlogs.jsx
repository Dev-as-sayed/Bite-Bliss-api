import { FaAngleDoubleRight } from "react-icons/fa";

const SingleBlogs = ({blog}) => {


    return (
        <div className="lg:w-3/4 text-slate-500 mx-auto my-6 ">
            <div className="w-[25rem] mx-auto">
                <img className="w-[25rem] h-[20rem] border-4 border-gray-300 rounded-xl" src={blog.photo} alt="" />
            </div>
            <div className="p-8">
                <h1 className="text-3xl font-bold ">{blog.title}</h1> 
                <h1 className="text-2xl">{blog.foodName}</h1> 
                <p className="my-6">{blog.description}</p>
                <p className="text-2xl mb-4 font-bold">INGREDIENTS</p>
                <p>
                    {
                        blog?.ingredients.map( (mk, idx) => <ul key={idx}>
                            <li className="flex h-8"><span className="mt-[3px] mr-2"><FaAngleDoubleRight /></span><span>{mk}</span></li>
                        </ul>)
                    }
                </p>
                <p>{blog.makingProcess}</p>
            </div>
            <div className="w-full h-1 bg-slate-600"></div>
        </div>
    );
};

export default SingleBlogs;