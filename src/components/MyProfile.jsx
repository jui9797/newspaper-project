import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const MyProfile = () => {
    const { user, setUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    
    const {data: users = []} =useQuery({
        queryKey: ['user-role'], 
        queryFn: async() =>{
            
            const res = await axiosPublic.get('/allUsers');
            return res.data;
        }
    })
    // console.log(users)
    const displayUser = users.find(data => data.email === user?.email);
    // console.log(displayUser)


    const handleUpdate = (e) => {
        e.preventDefault()

        const name = e.target.name.value


        const photo = e.target.photo.value
        const updatedUser = {
            name,
            photo,
        };

        // update user info in database
        if (user) {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {

                    setUser({
                        ...auth.currentUser,
                        displayName: name,
                        photoURL: photo
                    })


                })

                .catch((error) => {
                    console.log(error)

                })

        }

        // update user info in database
        axiosPublic.patch(`/user/${user.email}`, updatedUser)
            .then(res => {
                // console.log(res.data)
                Swal.fire({
                    title: 'User profile updated.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            })

    }

    return (
        <div className='my-10 lora px-6'>
            <h2 className='text-3xl font-bold dark:text-white mb-4'>Welcome back .... {user.displayName}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {/* profile card */}
                <div className='lg:w-2/3 mx-auto'>
                    <div className="rounded-md shadow-md dark:bg-gray-800 dark:text-gray-800 border-2">
                        <img src={user.photoURL} alt="" className=" lg:w-2/3 mx-auto rounded-t-md h-60 lg:h-72 dark:bg-gray-500 p-4" />
                        <div className="text-center p-3 space-y-2 relative">
                            <div className='p-2 lg:p-3 w-16 rounded-lg bg-blue-400 text-white absolute left-[82px] bottom-24 lg:left-48 lg:bottom-24'>{displayUser?.role}</div>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide dark:text-white">{user.displayName}</h2>
                                <p className=" dark:text-white">Email: {user.email}</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* update form */}
                <div>
                    <div className="">
                        <div className="card bg-gray-100 w-full shrink-0  mx-auto">
                            <h2 className='text-xl p-4 text-center'>Update Form</h2>
                            <form onSubmit={handleUpdate} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={user.displayName}
                                        placeholder="Your name"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        readOnly
                                        defaultValue={user.email}
                                        placeholder="Your email"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        defaultValue={user.photoURL}
                                        placeholder="your photo"
                                        className="input input-bordered"
                                        required
                                    />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-blue-400 border-none text-white">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;