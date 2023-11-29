import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const Registration = () => {

    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const [upazilas, setUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState('');

    const {createUser} = useContext(AuthContext);

    useEffect(() => {
        fetch("/districts.json")
            .then(response => response.json())
            .then(data => setDistricts(data))
            .catch(error => console.error('Error fetching districts:', error));
    }, []);

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };


    useEffect(() => {
        fetch("/upazilas.json")
            .then(res => res.json())
            .then(data => setUpazilas(data))
            .catch(err => console.error("Error in Upazilas:", err));
    }, []);

    const handleUpazilaChange = (e) => {
        setSelectedUpazila(e.target.value);
    }


    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const bloodGroup = e.target.bloodGroup.value;
        const district = e.target.district.value;
        const upazila = e.target.upazila.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
        // if(formData.password===formData.confirmPassword){
        //     Swal.fire({
        //         position: "center",
        //         icon: "success",
        //         title: "Registration as a Donor is Successful!",
        //         showConfirmButton: false,
        //         timer: 1500
        //       });
        //     return;
        // }
        console.log(formData, name, email, bloodGroup, district, upazila, password, confirmPassword);
        if (formData.password !== formData.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Doesn't match!",
              });
            return;
        }
        console.log(formData, name, email, bloodGroup, district, upazila, password, confirmPassword);
        if(formData.password===formData.confirmPassword){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration as a Donor is Successful!",
                showConfirmButton: false,
                timer: 1500
              });
            return;
        }
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
                        <form className="card-body" onSubmit={handleSubmit} >

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


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Avatar</span>
                                </label>
                                <input type="photo" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                            </div>



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





                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="input input-bordered"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>
                                <span>Already Have Account?</span> <Link to="/login"><button className="btn btn-link">Please Login</button></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;