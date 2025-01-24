import React from 'react';
import errorImg from '../../src/assets/404 Error-rafiki.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <button className='btn bg-blue-400 text-white'><Link to='/'>Home</Link></button>
            </div>
            <div>
                <img className='w-[500px] h-[400px] mx-auto' src={errorImg} alt="error" />
            </div>
        </div>
    );
};

export default Error;