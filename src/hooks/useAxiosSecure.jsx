
import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://blood-donation-server-chi.vercel.app'
})

const useAxiosSecure = () => {
   
    return axiosSecure;
};

export default useAxiosSecure;