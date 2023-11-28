import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const Registration = () => {

        const [districts, setDistricts] = useState([]);
        const [selectedDistrict, setSelectedDistrict] = useState('');
    
        useEffect(() => {
            fetch("/districts.json")
                .then(response => response.json())
                .then(data => setDistricts(data))
                .catch(error => console.error('Error fetching districts:', error));
        }, []);
    
        const handleDistrictChange = (e) => {
            setSelectedDistrict(e.target.value);
        };



    return (
        <div>
              <Helmet>
                <title>Donate | Registration </title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" >

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                             {/* Avatar */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Avatar</span>
                                </label>
                                <input type="photo" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                            </div>


                            {/* Blood Group */}
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


                            {/* Districts */}
                            <div className="form-control">
                        <label className="label">
                            <span className="label-text">District</span>
                        </label>
                        <select
                            name="district"
                            className="select select-bordered"
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                            required
                        >
                            <option value="">Select District</option>
                            {districts.map((district) => (
                                <option key={district.id} value={district.name}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                    </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                          
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Registration;