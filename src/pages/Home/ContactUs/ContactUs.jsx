

const ContactUs = () => {


    return (
        <>



            <div className="block mx-auto mb-10 max-w-full items-center">
                <h2 className="text-3xl text-center mt-14 font-medium bg-sky-400 text-white mb-3 py-3">Contact Us</h2>

                <div className="flex">

                    <div className="flex w-1/2 items-center bg-blue-300 opacity-70">
                    <form className=" mx-auto shadow-md">
                        <div >
                            <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className=" min-w-full  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    First Name
                                </label>
                                <input className="appearance-none block bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                            </div>
                            <div className=" md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Last Name
                                </label>
                                <input className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <div className="px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    E-mail
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Your Name" id="email" type="email" />

                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="px-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Message
                                </label>
                                <textarea className=" -px-3 no-resize appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>

                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded" type="button">
                                    <p className="text-center">Send</p>
                                </button>
                            </div>

                        </div>
                    </form>
                    </div>
                    <div className="flex flex-1 justify-center bg-blue-200 items-center">
                       <div className="bg-blue-500 rounded-md">
                       <h2 className="text-3xl bg-red-300 rounded-md py-4 px-4 text-white">Emergency Contact Numbers</h2>
                        <p className="text-center text-white text-2xl">Mr. Masud Islam : 01713-334455 <br />Mr. Liton Das : 01713-334456 <br />Mr. Robin Head : 01713-334457</p>
                       </div>
                    </div>
                </div>
            </div>




        </>
    );
};

export default ContactUs;