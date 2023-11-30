import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Districts = () => {

    const axiosSecure = useAxiosSecure();
    const {data: districts = []} = useQuery({
        queryKey: ['districts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/districts');
            return res.data;
        }
    })

    return (
        <div>
            <h2>{districts.length}</h2>
        </div>
    );
};

export default Districts;