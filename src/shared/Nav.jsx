import  { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import registerImg from '../assets/user.png'

import { AuthContext } from '../provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import usePremium from '../hooks/usePremium';


const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [isPremium] = usePremium()
    // console.log(isPremium)
 
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/allArticles'>All Articles</NavLink>
        <NavLink to='/addArticles'>Add Articles</NavLink>
        <NavLink to='/subscription'>Subscription</NavLink>
        {
            isAdmin && <NavLink to='/dashboard/home'>Dashboard</NavLink>
        }
        {
            isPremium && <NavLink to='/premium'>Premium Articles</NavLink>
        }
        
        <NavLink to='/myArticles'>My Articles</NavLink>
        
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
        <div className='w-11/12 mx-auto sticky top-0 z-30'>
            <div className="navbar bg-blue-400">
               

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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow lora">
                                {links}
                            </ul>
                        </div>
                        
                        <a className=" text-xl lg:text-2xl lora text-white">TRENDIFY</a>
                    </div>

                    <div className="navbar-center hidden lg:flex text-white">
                        <ul className="menu menu-horizontal px-1 space-x-3 lora">
                            {links}
                        </ul>
                    </div>

                    
                
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className='flex gap-2'>
                                <Link to='/myProfile'><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="profile" /></Link>
                                <button onClick={handleLogout} className='btn text-blue-500'><MdLogout /></button>
                            </div>
                        </> :
                            <>
                                <div className='flex gap-2'>
                                    <button className='btn text-blue-500'><Link to='/signup'><img className='w-6 h-6' src={registerImg} alt="" /></Link></button>
                                    <button className='btn text-blue-500'><Link to='/login'><MdLogin /></Link></button>
                                </div>
                            </>
                    }





                </div>

            </div>
        </div>
    );
};

export default Nav;