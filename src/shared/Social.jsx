import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import moment from 'moment/moment';

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
                    photoURL: result.user?.photoURL,
                    premiumTaken: null
                }
                axiosPublic.post('/users', userInfo)
                    .then(async res => {

                        console.log(res.data)
                        if (res.data.insertedId || res.data.message === 'user already exist') {
                            // check user premium or not

                            const { data } = await axiosPublic.get(`/user/${result.user?.email}`);

                            const today = moment().utc();
                            const expirationDate = moment(data.premiumTaken).utc();
                            console.log(expirationDate);
                             if (!expirationDate.isAfter(today)) {
                                console.log('testing')
                             axiosPublic.patch(`/expired/${result.user?.email}`)
                                    .then(res => {
                                        console.log(res.data)
                                        if (res.data.modifiedCount > 0) {
                                            Swal.fire({
                                                position: 'top-end',
                                                icon: 'success',
                                                title: 'User created successfully.',
                                                showConfirmButton: false,
                                                timer: 1500
                                            });


                                        }
                                    })
                            }
                                Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            if (from) {
                                navigate(from);
                            }
                            else {
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
                <button onClick={handleGoogleSignIn} className="btn bg-slate-200 text-blue-600 w-full">
                    <span className='text-2xl'><FcGoogle className="mr-2"></FcGoogle></span>
                    Google
                </button>
            </div>
        </div>
    );
};

export default Social;