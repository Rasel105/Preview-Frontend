import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import auth from '../../init.firebase';
import Loading from '../../pages/other/Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    // Active route styles 
    let activeStyle = {
        borderBottom: '2px solid #F99A2C'
    };

    if (error) {
        return <p>Error</p>
    }
    if (loading) {
        return <Loading />
    }

    const logout = () => {
        signOut(auth);
        navigate("/")
    };


    return (
        <nav className="fixed top-0 shadow-lg w-full bg-white z-50 bg-opacity-30 backdrop-blur-lg">
            <div className="navbar container mx-auto flex-col md:flex-row px-4">
                {/* navbar left start */}
                <div className="navbar-start w-full md:w-[50%] justify-between md:justify-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary btn-outline lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to="/dashboard" className="my-1" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Preview" className="my-1" style={({ isActive }) => isActive ? activeStyle : undefined}>Preview</NavLink>
                            </li>

                        </ul>
                    </div>
                    <Link to="/" className="normal-case text-xl"><img src={logo} alt="logo" className='h-12' /></Link>
                </div>

                {/* navbar left end */}

                {/* navbar center start  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-medium">
                        <li>
                            <NavLink to="/Home" className="my-1" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Preview" className="my-1 ml-2" style={({ isActive }) => isActive ? activeStyle : undefined}>Preview</NavLink>
                        </li>

                    </ul>
                </div>
                {/* navbar center end  */}

                {/* navbar right start */}
                <div className="navbar-end">
                    {user ? <button onClick={logout} className="btn btn-outline btn-info">Logout</button> : <Link to="/login" className="btn btn-primary border-primary font-bold">Login</Link>}
                </div>

                {/* navbar right end */}

            </div>
        </nav>

    );
};

export default Navbar;