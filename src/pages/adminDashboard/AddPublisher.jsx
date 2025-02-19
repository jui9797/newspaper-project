
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
        
        // image hosting api
        const imageFile = { image: data.image[0] }
        
       
        
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data)
        const publisher ={}
        if(res.data.success ){
            publisher.name =data.name,
            publisher.image =res.data.data.display_url
       
        
        

        }
        // console.log({publisher})
        const publisherRes = await axiosSecure.post('/publishers', publisher)
        // console.log(publisherRes)
        if (publisherRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the publisher.`,
                showConfirmButton: false,
                timer: 1500
            });

        }
        // console.log(res.data)
    }
        return (
            <div className='my-10 lora dark:text-white h-screen'>
                <h2 className='text-2xl lg:text-3xl text-center font-bold lora'>Add a new publisher</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text dark:text-white">Publisher Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Publisher Name"
                                {...register('name', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>




                        <div className="form-control w-full my-6">
                            <input {...register('image')}  type="file" className="file-input w-full max-w-xs dark:text-blue-400" />
                        </div>

                        <button className="btn bg-blue-400 text-white">
                            Add Item <RiArticleFill />
                        </button>
                    </form>
                </div>
            </div>
        );
    };

    export default AddPublisher;