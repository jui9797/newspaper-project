
import { Link, NavLink, Outlet } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";
import HelmetTitle from '../../shared/HelmetTitle';
import { FaHome } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import ThemeToggle from '../../hooks/ThemeToggle';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';



const Dashboard = () => {
    const { user} = useContext(AuthContext)
    
    

    return (
        <div className='m-4 bg-[#f7f9fb] dark:bg-gray-800'>
            <HelmetTitle title="Dashboard || Trendify"></HelmetTitle>
            {/* drawer */}
            <div className="drawer flex">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="w-11/12 mx-auto">
                    {/* Page content here */}
                    <div className='flex justify-between items-center bg-blue-400 dark:bg-gray-800 p-4'>
                    
                    <div className='flex justify-center items-center gap-2'>
                    <label htmlFor="my-drawer" className="btn bg-blue-400 my-4 text-white drawer-button"><GiHamburgerMenu /></label>
                    <h2 className='hidden lg:block text-xl lg:text-3xl my-4 font-bold lora text-white'>TRENDIFY</h2>
                    </div>
                    <div className='flex gap-2 text-white justify-center items-center'>
                    <NavLink to='/'>Home</NavLink>
                    {
                        user && <>
                        <div className='flex gap-2'>
                                <Link to='/myProfile'><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="profile" /></Link>
                                
                            </div>
                        </>
                    }
                        <ThemeToggle></ThemeToggle>
                    </div>
                    </div>
                    <div className=' w-full'>
                    <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-blue-400 text-base-content min-h-full w-64 p-4">
                        {/* Sidebar content here */}
                        <li><NavLink to='/dashboard/home'><FaHome /> Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/users'><FaUsers /> All Users</NavLink></li>
                        <li><NavLink to='/dashboard/articles'><RiArticleFill /> All Articles</NavLink></li>
                        <li><NavLink to='/dashboard/publishers'><FaUserAlt /> Add Publishers</NavLink></li>
                        <li><NavLink to='/'><IoHomeSharp />Back To Home</NavLink></li>
                    </ul>
                </div>
            </div>



            



        </div>
    );
};

export default Dashboard;