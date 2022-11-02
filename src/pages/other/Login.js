import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { BsEnvelope, BsKey } from 'react-icons/bs';
import SocialLogin from './SocialLogin';
// import auth from '../../../init.firebase';


const Login = () => {
    // take user data 
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    // firebase function 
    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useSignInWithEmailAndPassword(auth);

    // email Varification 
    // const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // loading here
    // if (loading) {
    //     // return <Loading />
    // }

    // if (user) {
    //     navigate("/");
    // }
    // Login Form Submit 
    const handleLoginSubmit = e => {
        e.preventDefault();
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;
        // signInWithEmailAndPassword(email, password);
    }

    // error showing 
    // let errorElement;
    // if (error) {
    //     errorElement = <p className='text-danger'>Error: {error?.message}</p>
    // }

    // forget password function
    const hanleForgetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            // await sendPasswordResetEmail(email);
            console.log("Sent email");
        }
        else {
            console.log("Please enter your email address");
        }
    }

    return (
        <div className='container mx-auto px-4 grid grid-cols-1 mt-16' style={{ minHeight: "calc(100vh - 67px)" }}>
            <div className='bg-green-50 flex flex-col justify-center items-center'>
                <h2 className='text-center font-bold text-4xl mb-8'>Login</h2>
                {/* Register Form  */}
                <form onSubmit={handleLoginSubmit} className='w-full md:w-96'>
                    <div className='w-full md:w-96'>
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
                        <button type='submit' className='btn btn-primary w-full my-2 font-bold text-white text-lg'>Login</button>
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
}

export default Login;