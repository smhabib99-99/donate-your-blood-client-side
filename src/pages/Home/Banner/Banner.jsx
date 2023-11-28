import { Link } from "react-router-dom";


const Banner = () => {
    return (
            <>
            <div className="my-10 bg-sky-500 opacity-80">
                <div className="relative -z-10 opacity-70 w-full">
                    <img className='h-96 w-full' src="/banner.avif" alt="" />
                </div>
                <div className="absolute top-72 right-4 left-10 z-10">
                  
                    <div className="flex justify-center">
                    <Link to='/searchPage'>
                    <button className="bg-red-400 rounded-md text-white font-bold text-xl p-2">Search Donors</button>
                    </Link>
                    </div>
                    <div className="flex justify-center">
                        <Link to='/registration'>
                        <button className="bg-red-400 rounded-md text-white font-bold text-xl p-2 my-4">Join as a Donor</button>
                        </Link>
                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;