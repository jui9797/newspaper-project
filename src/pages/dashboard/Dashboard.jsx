import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className='m-4'>
            {/* drawer */}
            <div className="drawer flex">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="w-11/12 mx-auto">
                    {/* Page content here */}
                    <div className='flex gap-2'>
                    
                    <label htmlFor="my-drawer" className="btn bg-gray-700 text-white drawer-button"><GiHamburgerMenu /></label>
                    <h2 className='text-xl lg:text-3xl'>TRENDIFY</h2>
                    </div>
                    <div className='border-2 w-full'>
                    <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
                        {/* Sidebar content here */}
                        <li><NavLink to='/dashboard/home'>Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/users'>All Users</NavLink></li>
                        <li><NavLink to='/dashboard/articles'>All Articles</NavLink></li>
                        <li><NavLink to='/dashboard/publishers'>Add Publishers</NavLink></li>
                        <li><NavLink to='/'>Back To Home</NavLink></li>
                    </ul>
                </div>
            </div>



            {/* <div className='lg:w-64 min-h-screen bg-pink-300 p-4'>
                <h2 className='uppercase mb-4'>Trendify</h2>
                <ul>
                    <li><NavLink to='/dashboard/home'>Admin Home</NavLink></li>
                    <li><NavLink to='/dashboard/users'>All Users</NavLink></li>
                    <li><NavLink to='/dashboard/articles'>All Articles</NavLink></li>
                    <li><NavLink to='/dashboard/publishers'>All Publishers</NavLink></li>
                </ul>
                <hr />
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/articles'>All articles</NavLink></li>
                </ul>
            </div> */}



        </div>
    );
};

export default Dashboard;