import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex gap-4'>
           <div className='lg:w-64 min-h-screen bg-pink-300 p-4'>
           <h2 className='uppercase mb-4'>Trendify</h2>
           <ul>
            <li><NavLink to='/dashboard/users'>All Users</NavLink></li>
            <li><NavLink to='/dashboard/articles'>All Articles</NavLink></li>
            <li><NavLink to='/dashboard/publishers'>All Publishers</NavLink></li>
           </ul>
           <hr />
           <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/articles'>All articles</NavLink></li>
           </ul>
           </div>

           <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;