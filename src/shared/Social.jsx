import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Social = () => {
    const {googleSignIn} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate =useNavigate()

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        const userInfo ={
            
            name:result.user?.
            displayName,
            email:result.user?.email,
            photoURL: result.user?.photoURL
        }
        axiosPublic.post('/users', userInfo)
        .then(res=>{
            console.log(res.data)
            navigate('/');
        })
        
    })
    }

    return (
        <div className="p-4">
        <div className="divider"></div>
        <div>
            <button onClick={handleGoogleSignIn} className="btn bg-slate-400 w-full">
                <FaGoogle className="mr-2"></FaGoogle>
                Google
            </button>
        </div>
    </div>
    );
};

export default Social;