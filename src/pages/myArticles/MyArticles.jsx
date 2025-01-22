import React, { useContext, useRef } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import HelmetTitle from '../../shared/HelmetTitle';

const MyArticles = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    // const modalRef = useRef();
    const { data: article = [], isPending: loading, refetch } = useQuery({
        queryKey: ['article', user?.email],
        queryFn: async () => {
            if (!user?.email) return []; // Return empty if no user email is found
            const res = await axiosPublic.get(`/articles?email=${user.email}`);
            return res.data;
        },
        enabled: !!user?.email,

    })

    
//   delete article 
const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/articles/${id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `this article has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }


    return (
        <div className='my-10'>
            <HelmetTitle title="My Articles || Trendify"></HelmetTitle>
            <h2 className='text-3xl text-center lora font-bold'>My Articles: {article.length}</h2>
            {loading && <p>Loading..</p>}
            {/* article table */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-blue-100'>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Details</th>
                                <th>isPremium</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                article.map((item, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td className='font-bold lora'>{item.title}</td>
                                        <td>
                                            {item.status === 'declined' ? (
                                                <>
                                                    <div className='flex gap-1'>
                                                        <p>declined</p>
                                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                                        <button className="btn btn-xs" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
                                                        <dialog id="my_modal_1" className="modal">
                                                            <div className="modal-box">
                                                                <h3 className="font-bold text-lg">Decline Reason</h3>
                                                                <p className="py-4">
                                                                    {item?.declineReason ? `${item.declineReason}` : ''}
                                                                    </p>
                                                                <div className="modal-action">
                                                                    <form method="dialog">
                                                                        {/* if there is a button in form, it will close the modal */}
                                                                        <button className="btn">Close</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </dialog>
                                                    </div>
                                                </>

                                            ) : (
                                                <p className={item.status === "approved" ? "text-blue-500" : item.status === "pending" ? "text-yellow-500" : "text-red-500"}>
                                                    {item.status}
                                                </p>
                                            )}
                                        </td>
                                        <td>
                                            <button className='btn btn-xs bg-blue-500 text-white'><Link to={`/details/${item._id}`}>Details</Link></button>
                                        </td>

                                        <td>
                                            {item.type === 'premium' ? 'Yes' : 'No'}
                                        </td>
                                        <td>
                                            <button className='btn btn-xs bg-yellow-300'><Link to={`/update/${item._id}`}>update</Link></button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className='btn btn-xs bg-red-500 text-white'>delete</button>
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

export default MyArticles;