

const Banner = () => {
    return (
            <>
            <div className="my-10 bg-sky-500 opacity-80">
                <div className="relative -z-10 opacity-70 w-full">
                    <img className='h-96 w-full' src="/banner.avif" alt="" />
                </div>
                <div className="absolute top-72 right-4 left-10 z-10">
                    <div className='items-center text-center'>
                        <input type="search" name="" placeholder='Search donor here....' className='border py-2 pl-6 relative rounded-lg left-1 w-full max-w-xl' id="" />
                        <button className='bg-red-400 rounded-r-lg absolute py-2 px-3 text-white'>Search Donors</button>
                    </div>
                    <div className="flex justify-center">
                    <button className="bg-red-400 rounded-md text-white font-bold text-xl p-2 my-4">Join as Donor</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;