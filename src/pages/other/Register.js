import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BsEnvelope, BsKey, BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
// import registerVehicle from '../../assets/register-vehicle.png';
// import Loading from '../../components/Shared/Loading';
// import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';


const Register = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const confirmPassRef = useRef("");
    const navigate = useNavigate();

    //  firebase register page fuctionality setup
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword();

    // if (loading) {
    //     return <Loading />
    // }

    if (user) {
        navigate('/')
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPass = confirmPassRef.current.value;

        if (password !== confirmPass || password.length < 6) {
            console.log(" Password must be six digit long or  Password didn't match.")
        } else {
            createUserWithEmailAndPassword(email, password);
            console.log("Registation Successful!");
            console.log("Email Varification sent!")
        }
    }

    return (
        <div className='container mx-auto px-4 grid grid-cols-1 mt-16' style={{ minHeight: "calc(100vh - 67px)" }}>
            <div className='bg-green-50 flex flex-col justify-center items-center'>

                <h2 className='text-center font-bold text-4xl mb-8'>Register</h2>

                {/* Register Form  */}
                <form onSubmit={handleRegisterSubmit} className='w-full md:w-96'>
                    <div className='w-full md:w-96'>
                        <div className="form-control">
                            <label className="input-group">
                                <span className='my-2 bg-primary text-white text-xl'><BsPerson /></span>
                                <input ref={nameRef} type="text" required placeholder="Full Name" className="input input-primary input-bordered w-full my-2" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group">
                                <span className='my-2 bg-primary text-white text-xl'><BsEnvelope /></span>
                                <input ref={emailRef} type="text" required placeholder="Email" className="input input-primary input-bordered w-full my-2" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group">
                                <span className='my-2 bg-primary text-white text-xl'><BsKey /></span>
                                <input ref={passwordRef} type="password" required placeholder="Password" className="input input-primary input-bordered w-full my-2" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group">
                                <span className='my-2 bg-primary text-white text-xl'><BsKey /></span>
                                <input ref={confirmPassRef} type="password" required placeholder="Confirm Password" className="input input-primary input-bordered w-full my-2" />
                            </label>
                        </div>
                        <button type='submit' className='btn btn-primary w-full my-2 font-bold text-white text-lg'>Register</button>
                    </div>
                </form>

                {/* divider and google login */}
                <div className='w-full md:w-96'>
                    <div className="flex justify-center items-center my-5">
                        <div className='h-1 w-20 border-t-[2px] border-primary'></div>
                        <div className='mx-3 text-xl font-bold'>OR</div>
                        <div className='h-1 w-20 border-t-[2px] border-primary'></div>
                    </div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;