import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useEffect, useState } from "react";
import SingleBlogs from "./SingleBlogs/SingleBlogs";

const Blog = () => {
    const [blogs, setBlogs] = useState();
    const axiousSecure = useAxiosSecure();
    const url = '/getBlogs';

    useEffect( () => {
        // this git for uploade all blogs form data base
        axiousSecure.get(url)
            .then(res => {
                setBlogs(res.data)
            })
            .catch(err => console.error(err.message))
    }, [url, axiousSecure])
    // console.log(blogs);
    return (
        <div>
            <Helmet>
                <title>BITE-BLISS || BLOG</title>
            </Helmet>
            {/* this map for all blogs */}
            <div className="p-16">
                {
                    blogs?.map( blog => <SingleBlogs
                        key={blog._id}
                        blog={blog}
                    ></SingleBlogs>)
                }
            </div>
        </div>
    );
};

export default Blog;