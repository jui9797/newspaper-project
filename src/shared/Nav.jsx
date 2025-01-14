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
        <NavLink to='/'>All Articles</NavLink>
        <NavLink to='/'>Add Articles</NavLink>
        <NavLink to='/subscription'>Subscription</NavLink>
        <NavLink to='/'>Dashboard</NavLink>
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

                    <div className="drawer z-10">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn drawer-button"><GiHamburgerMenu /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-40 p-4">
                                {/* Sidebar content here */}
                                {links}
                            </ul>
                        </div>
                    </div>
                    <a className=" text-xl">Trendify</a>
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