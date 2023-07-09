import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext)
    const auth = getAuth(app);
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            setError('Passwords must match')
        } else {
            createUser(data.email, data.password)
                .then(result => {
                    const createdUser = result.user;
                    setSuccess('Account Created Successfully')
                    updateProfile(auth.currentUser, {
                        displayName: data.name, photoURL: data.photo
                    })
                        .then(() => {
                            const saveUser = { name: data.name, email: data.email, img: data.photo }
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
                                        reset();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User created successfully',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        navigate('/')
                                    }
                                })
                        })
                })
                .catch(error => {
                    setError(error.message)
                })

            reset()
        }
    }

    return (
        <div className="hero min-h-screen bg-gray-900">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-40">
                <div className="card-body">
                    <h1 className="text-4xl font-bold mb-4">Please Register...!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo")} name='photo' placeholder="URL" className="input input-bordered" />
                        </div>
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
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/
                            })} placeholder="password" className="input input-bordered" />

                            {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}

                            {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 character</p>}

                            {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one uppercase and one spacial character</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirmPassword", { required: true })} placeholder="confirmPassword" className="input input-bordered" />
                            {errors.confirmPassword?.type === 'required' && <span className="text-red-500">Please confirm password</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className="text-red-500"><small>{error}</small></p>
                        <p className='text-green-500'><small>{success}</small></p>
                        <div className="form-control mt-6">
                            <input className="btn btn-info" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center my-4'>Already have an account? <Link to='/login' className=''><span className="text-yellow-500">Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;