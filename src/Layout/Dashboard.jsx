import { NavLink, Outlet } from "react-router-dom";
import { FaRegQuestionCircle, } from 'react-icons/fa';



const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-sky-400">
                <ul className="menu p-4">
                    <li><NavLink to ='/dashboard/my-donation-requests'> 
            <FaRegQuestionCircle></FaRegQuestionCircle>
                    My Donation Requests</NavLink></li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;