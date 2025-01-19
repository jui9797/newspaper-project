import React from 'react';
import { useForm } from 'react-hook-form';
import { RiArticleFill } from "react-icons/ri";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddPublisher = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        // console.log(data)
        // image hosting api
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data)
        if(res.data.success){
            const publisher ={
                name: data.name,
                image: res.data.data.display_url
            }
            const publisherRes = await axiosSecure.post('/publishers', publisher)
            // console.log(publisherRes.data)
            if(publisherRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        // console.log(res.data)
    }

    return (
        <div className='my-10'>
            <h2 className='text-2xl lg:text-3xl text-center font-bold'>Add a new publisher</h2>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Publisher Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Publisher Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    
                    
                   

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Item <RiArticleFill />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPublisher;