import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: user = [] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')


            return res.data;
        }
    })

    const handleMakeAdmin= user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                title: `${user.name} is an Admin now`,
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        }
    })
    }

    return (
        <div>
            <h2 className='text-2xl lg:text-3xl font-bold text-center'>All users:{user.length}</h2>
            {/* table */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Photo</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                user.map((item, index)=>
                                    <tr key={index}>
                                <th>{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <img className='w-10 h-10 rounded-xl' src={item.photoURL} alt="photo" />
                                    </td>
                                <td>
                                    {
                                    item.role === 'admin' ? 'Admin':
                                    <button onClick={()=>handleMakeAdmin(item)} className='btn'>Make admin</button>
                                    }
                                    
                                    </td>
                            </tr>
                                )
                            }
                            
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;