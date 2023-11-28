import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import Navbar from "../pages/Home/Home/Shared/Footer/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;