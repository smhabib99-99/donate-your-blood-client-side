import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div>
            <div className="flex justify-evenly bg-sky-400 py-3 mx-10 text-white my-3">
                <h2 className="text-2xl">All Users</h2>
                <h2 className="text-2xl">Total Users:{users.length}</h2>
                <h2 className="text-2xl">Total Funding</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user, index) => <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.photo}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Blue</td>
          </tr>)
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;