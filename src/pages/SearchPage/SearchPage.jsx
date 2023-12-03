import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const SearchPage = () => {



    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');


    const [upazilas, setUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState('');



    useEffect(() => {
        fetch("districts.json")
            .then(response => response.json())
            .then(data => setDistricts(data))
            .catch(error => console.error('Error fetching districts:', error));
    }, []);

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };



    useEffect(() => {
        fetch("upazilas.json")
            .then(res => res.json())
            .then(data => setUpazilas(data))
            .catch(err => console.error("Error in Upazilas:", err));
    }, []);

    const handleUpazilaChange = (e) => {
        setSelectedUpazila(e.target.value);
    }



    return (
        <div>
            <Helmet>
                <title>Donate | Search Donors </title>
            </Helmet>
            <h2 className="text-center text-3xl font-semibold text-indigo-600 bg-sky-400 py-3 my-4">Search Blood Donors</h2>




            <div>
                <div>
                    <form className="mx-5 p-10">
                        <h2 className="text-3xl text-center font-extrabold rounded-md bg-sky-400 py-5 text-white">Please input the following fields</h2>

                        <div className=" ">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Blood Group</span>
                                </label>
                                <select name="bloodGroup" className="select select-bordered" required>
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                        </div>

                        <div className="">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">District</span>
                                </label>
                                <select name="district" className="select select-bordered" value={selectedDistrict} onChange={handleDistrictChange} required>
                                    <option value="">Select District</option>
                                    {districts.map((district) => (
                                        <option key={district.id} value={district.name}>
                                            {district.name}
                                        </option>
                                    ))}
                                </select>
                            </div>


                        </div>


                        <div className=" ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upazila</span>
                            </label>
                            <select name="upazila" className="select select-bordered" value={selectedUpazila} onChange={handleUpazilaChange} required >
                                <option value="">Select Upazila</option>
                                {
                                    upazilas.map((upazila) => (<option key={upazila.id} value={upazila.name}>
                                        {upazila.name}
                                    </option>))
                                }

                            </select>
                        </div>

                        </div>

                        <div className="">

                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <button type="submit" value="Add Product" className="btn bg-sky-500 text-3xl text-white btn-block">Search Donors</button>
                    </form>

                </div >
            </div>





        </div>
    );
};

export default SearchPage;