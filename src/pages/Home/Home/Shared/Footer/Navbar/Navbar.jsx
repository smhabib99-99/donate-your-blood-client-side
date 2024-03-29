import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../../providers/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            navigate('/login')
            Swal.fire({
                position: "center",
                icon: "success",
                title: "You successfully logged out",
                showConfirmButton: false,
                timer: 1500
              });
              
        })
        .catch(error => console.log(error));
    }

    const navButtons = <>
        <li className=""><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/registration'>Registration</Link></li>
        <li className=""><Link to='dashboard/users'>Dashboard</Link></li>
        <li><Link to='dashboard/funds'>Funds</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        <>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navButtons}
                        </ul>

                        <div className='flex'>
                            <img className='w-6 md:w-24 md:h-14 rounded-lg ml-2' src="/blood-logo.webp" alt="" />

                        </div>

                    </div>
                    <a className="btn btn-ghost text-2xl">Donate Your Blood</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navButtons}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <>
                         {/* <a className="btn">Button</a> */}
                         <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                        </>:<>
                        <li><Link to='/login'>Login</Link></li>
                        </>
                    }
                   
                </div>
            </div>

        </>
    );
};

export default Navbar;