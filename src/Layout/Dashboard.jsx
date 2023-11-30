import { NavLink, Outlet } from "react-router-dom";
import { FaBlog, FaHome, FaRegQuestionCircle, FaUser, } from 'react-icons/fa';
import { IoCreateSharp } from "react-icons/io5";
import {  MdOutlineContentPaste } from "react-icons/md";



const Dashboard = () => {


    const isAdmin = true;

    return (
        <div className="flex py-2">
            <div className="w-72 min-h-screen px-3 py-5 bg-sky-400">


                {
                    isAdmin ? <>
                    <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard'>
                        <FaHome></FaHome>
                        Admin</NavLink></li>
                </ul>
                <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard/users'>
                        <FaUser></FaUser>
                        All Users</NavLink></li>
                </ul>
                <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard/all-blood-donation-request'>
                       <FaRegQuestionCircle></FaRegQuestionCircle>
                        All Donation Requests</NavLink></li>
                </ul>
                <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard/content-management'>
                       <MdOutlineContentPaste></MdOutlineContentPaste>
                        Content Management</NavLink></li>
                </ul>
                <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard/content-management/add-blog'>
                       <FaBlog></FaBlog>
                        Add Blog Page</NavLink></li>
                </ul>

                <div className="divider"></div>

                    </>:<>
                    <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard'>
                        <FaHome></FaHome>
                        Donor</NavLink></li>
                </ul>
                <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard/my-donation-request'>
                      <FaRegQuestionCircle></FaRegQuestionCircle>
                        My Donation Requests</NavLink></li>
                </ul>

                {/* <ul className="menu p-4">
                    <li><NavLink to='/dashboard/my-donation-requests'>
                        <FaRegQuestionCircle></FaRegQuestionCircle>
                        My Donation Requests</NavLink></li>
                </ul> */}

                <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard/create-donation-request'>
                        <IoCreateSharp></IoCreateSharp>
                        Create Donation Request</NavLink></li>
                </ul>

              


                <div className="divider"></div>
                <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard'>
                        <FaHome></FaHome>
                        Volunteer</NavLink></li>
                </ul>
                <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard/all-blood-donation-request'>
                        <FaRegQuestionCircle></FaRegQuestionCircle>
                        All Donation Requests</NavLink></li>
                </ul>
                <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/dashboard/content-management'>
                       <MdOutlineContentPaste></MdOutlineContentPaste>
                        Content Management</NavLink></li>
                </ul>

                <div className="divider"></div>


                <ul className="menu btn my-3 p-4">
                    <li><NavLink to='/'>
                        <FaHome></FaHome>
                        Home</NavLink></li>
                </ul>

                    </>
                }



            
            
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;