import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
// import auth from '../../../init.firebase';
// import Loading from '../../components/Shared/Loading';


const SocialLogin = () => {
    const navigate = useNavigate();
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // if (loading) (
    //     // <Loading />
    // );

    // if (user) {
    //     navigate('/dashboard')
    // };

    return (
        <div>
            <button className="btn btn-primary w-full text-white mb-5 text-lg"> <FcGoogle className='text-3xl mr-2 bg-white p-1 rounded-full' />Continue With Google</button>
        </div>
    );
};

export default SocialLogin;