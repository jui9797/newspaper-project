import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: user = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')


            return res.data;
        }
    })

    return (
        <div>
            <h2 className='text-3xl'>All users:{user.length}</h2>
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
                                <th>Active</th>
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
                                <td><button className='btn'>Make admin</button></td>
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