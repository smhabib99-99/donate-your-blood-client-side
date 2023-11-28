import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-red-400 py-3 px-3 rounded-md text-white mx-5" >
                <div className="text-5xl text-center">Opps! <br /> Error Occured </div>
            </div>
            <div>
                <Link to='/'>
                    <button className="text-3xl bg-blue-300 py-3 px-3 rounded-md"> Go Home</button>
                </Link>
            </div>
        </div>

    );
};

export default ErrorPage;