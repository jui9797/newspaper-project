import React from 'react';
import Nav from '../../shared/Nav';
import Footer from '../../shared/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div className='bg-[#f7f9fb]'>
            <Nav></Nav>
            <div className='w-11/12 mx-auto min-h-[80vh]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;