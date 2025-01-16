import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const MyProfile = () => {
    const { user, setUser } = useContext(AuthContext)


    const handleUpdate=(e)=>{
        e.preventDefault()
        
        const name =e.target.name.value
        const email =e.target.email.value
        
        const photo =e.target.photo.value
        
        
      const updatedUser ={name, email, photo}
      console.log(updatedUser)
        
        
        
        }

    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold'>Welcome back .... {user.displayName}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {/* profile card */}
                <div className='lg:w-2/3 mx-auto'>
                    <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 border-2">
                        <img src={user.photoURL} alt="" className=" lg:w-2/3 mx-auto rounded-t-md h-60 lg:h-72 dark:bg-gray-500 p-4" />
                        <div className="text-center p-3 space-y-2 relative">
                            <div className='p-2 lg:p-3 w-16 rounded-lg bg-black text-white absolute left-[82px] bottom-24 lg:left-48 lg:bottom-24'>Role</div>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">{user.displayName}</h2>
                                <p className="dark:text-gray-800">Email: {user.email}</p>
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
                                    <button className="btn bg-gradient-to-b from-gray-300 to-purple-700 border-none text-black">Update</button>
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