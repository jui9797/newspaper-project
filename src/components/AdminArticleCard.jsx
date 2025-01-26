// import useArticleById from "../hooks/useArticleById";

import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import  { useRef } from "react";
// import { MdDelete } from "react-icons/md";



const AdminArticleCard = ({ data }) => {
    const { _id, image, title, authorName, authorEmail, authorPhoto, postedDate, status, publisher, type } = data || {}
    const axiosSecure = useAxiosSecure()

    // console.log(article)
    const modalRef = useRef();

    // apporve
    const handleApprove = (id) => {
        // console.log(id)
        axiosSecure.patch(`/articles/status/${id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${title} is approved by admin.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
               
            })
            .catch(err => console.log(err))

    }

    // decline
    const handleDecline = (id) => {
        modalRef.current.showModal();

    }
    const handleReasonSubmit = (e, id) => {
        e.preventDefault();
        const declineReason = e.target.declineReason.value;
        // console.log("Reason for Decline:", declineReason, id);

        axiosSecure.patch(`/articles/decline/${id}`, { declineReason })
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                   
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: `${title} is declined by admin.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => console.log(err))

        modalRef.current.close();
    };




    // delete
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
                    
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }



    // premium
    const handlePremium = (id) => {
        axiosSecure.patch(`/articles/premium/${id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${title} is premium article now.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                
            })
            .catch(err => console.log(err))

    }



    return (
        <div className='w-full h-[450px] border-2 shadow-xl'>
            <div className='h-[200px]'>
                <img className='h-full w-full' src={image} alt="" />
            </div>
            <div className='h-[250px] pt-2 p-2 '>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='flex gap-2'>
                        <img className='w-8 h-8 lg:w-12 lg:h-12 rounded-full ' src={authorPhoto} alt=" img" />
                        <div>
                            <p className='text-xs font-bold'>{authorName}</p>
                            <p className='text-xs'>{authorEmail}</p>
                        </div>
                    </div>
                    <p className='text-xs'>{postedDate}</p>
                </div>
                <div className=" h-[119px]">
                    <h2 className='my-2 font-bold'>{title}</h2>

                    <div className='flex flex-wrap gap-4 my-1 lg:my-2 text-xs lg:text-base'>
                        <p><span className='font-semibold'>Status: </span>{status}</p>
                        <p><span className='font-semibold'>Type: </span>{type}</p>
                        <p><span className='font-semibold'>Publisher: </span>{publisher}</p>

                    </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                    {
                        status === 'approved' ?
                        <button disabled onClick={() => handleApprove(_id)} className='btn btn-xs sm:btn-sm md:px-2 md:py-2 bg-green-400'>Approve</button>
                        :
                        <button onClick={() => handleApprove(_id)} className='btn btn-xs sm:btn-sm md:px-2 md:py-2 bg-green-400'>Approve</button>
                    }
                    {
                        status === 'declined' ? 
                        <button disabled onClick={() => handleDecline(_id)} className='btn btn-xs sm:btn-sm md:px-2 md:py-2 bg-orange-400'>Decline</button>
                        :
                        <button onClick={() => handleDecline(_id)} className='btn btn-xs sm:btn-sm md:px-2 md:py-2 bg-orange-400'>Decline</button>
                    }
                    
                    <button onClick={() => handleDelete(_id)} className='btn btn-xs sm:btn-sm md:px-2 md:py-2 bg-red-400'>Delete</button>
                    {
                        type === 'premium' ?
                        <button disabled onClick={() => handlePremium(_id)} className='btn btn-xs sm:btn-sm md:px-2 md:py-2 bg-blue-300'>Premium</button>
                        :
                        <button onClick={() => handlePremium(_id)} className='btn btn-xs sm:btn-sm md:px-2 md:py-2 bg-blue-400'>Premium</button>
                    }
                </div>
                {/* modal */}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" ref={modalRef}>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Decline reason</h3>
                        <form onSubmit={(e) => handleReasonSubmit(e, _id)}>
                            <textarea
                                placeholder="Bio"
                                name="declineReason"
                                className="textarea textarea-bordered textarea-xs w-full max-w-xs"></textarea>
                            <button type="submit" className="btn">Submit</button>
                        </form>

                    </div>
                </dialog>

            </div>

        </div>
    );
};

export default AdminArticleCard;