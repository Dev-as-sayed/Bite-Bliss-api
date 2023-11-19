import axios from "axios";

const axiousSecure = axios.create({
    baseURL: 'https://bite-bliss-server-alpha.vercel.app'
})

const useAxiosSecure = () => {
    return axiousSecure;
};

export default useAxiosSecure;