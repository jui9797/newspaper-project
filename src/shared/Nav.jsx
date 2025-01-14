import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import registerImg from '../assets/user.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from '../provider/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/allArticles'>All Articles</NavLink>
        <NavLink to='/'>Add Articles</NavLink>
        <NavLink to='/subscription'>Subscription</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/'>My Articles</NavLink>
        <NavLink to='/'>Premium Articles</NavLink>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar bg-blue-100">
               

                    <div className="navbar-start">
                        <div className="dropdown z-10">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-3">
                            {links}
                        </ul>
                    </div>

                    
                
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className='flex gap-2'>
                                <Link to='/myProfile'><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="profile" /></Link>
                                <button onClick={handleLogout} className='btn'><MdLogout /></button>
                            </div>
                        </> :
                            <>
                                <div className='flex gap-2'>
                                    <button className='btn'><Link to='/signup'><img className='w-6 h-6' src={registerImg} alt="" /></Link></button>
                                    <button className='btn'><Link to='/login'><MdLogin /></Link></button>
                                </div>
                            </>
                    }





                </div>

            </div>
        </div>
    );
};

export default Nav;