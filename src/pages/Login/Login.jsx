import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaGoogle } from 'react-icons/fa';
import { useForm } from "react-hook-form";


const Login = () => {

    const { register, formState: { errors } } = useForm();

    const { loginUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, img: loggedInUser.photoURL }
                fetch('https://sport-elevate-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            navigate(from, { replace: true })
                        }

                    })

            })

    }

    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const logedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => (
                setError(error.message)
            ))
        form.reset()
    }
    return (
        <div className="hero min-h-screen bg-gray-900">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-40">
                <div className="card-body">
                    <h1 className="text-5xl font-bold mb-4">Login now....!</h1>
                    <form onSubmit={handelLogin}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-red-500'><small>{error}</small></p>
                        <div className="form-control mt-6">
                            <input className="btn btn-info" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className='mx-auto'>
                        <button onClick={handelGoogleLogin} className='border flex items-center gap-2 p-3 btn btn-accent'>
                            <FaGoogle></FaGoogle> Login with Google
                        </button>
                    </div>
                    <p className='text-center my-4'>No account yet? <Link to='/signUp' className=''><span className='text-yellow-500'>Register</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;