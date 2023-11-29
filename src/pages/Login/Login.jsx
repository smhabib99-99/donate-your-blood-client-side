import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    }


    return (
        <div>
            <Helmet>
                <title>Donate | Login </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Please Login!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleLogin} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Login</button>

                                </div>
                                <p>
                                    <span>New here? </span> <Link to="/registration"><button className="btn btn-link">Please Register</button></Link>
                                </p>
                            </form>

                        </div>

                    </div>

                </div>

        </div>
    );
};

export default Login;