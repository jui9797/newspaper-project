import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Social = ({ from }) => {
    const { googleSignIn } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {

                    name: result.user?.
                        displayName,
                    email: result.user?.email,
                    photoURL: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId || res.data.message === 'user already exist') {

                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            if(from){
                                navigate(from);
                            }
                            else{
                                navigate('/')
                            }
                           
                        }
                        
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