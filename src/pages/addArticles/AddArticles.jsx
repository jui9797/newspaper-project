
import { useForm } from 'react-hook-form';
import usePublisher from '../../hooks/usePublisher';
import Select from 'react-select';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import HelmetTitle from '../../shared/HelmetTitle';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddArticles = () => {
    const axiosPublic = useAxiosPublic();
    const [publishers] = usePublisher();
    const navigate = useNavigate()
    const { register, handleSubmit, reset, setValue } = useForm();

    const options = [
        { value: 'science', label: 'science' },
        { value: 'health', label: 'health' },
        { value: 'social', label: 'social' },
        { value: 'politics', label: 'politics' },
    ];

    const handleTagChange = (selectedOption) => {
        setValue('tag', selectedOption.value);
    };

    const onSubmit = async (data, e) => {
        const imageFile = e.target.authorPhoto.files[0];
        // console.log(imageFile)
        const formData = new FormData();
        formData.append("image", imageFile);

        // const imageResponse = await axiosPublic.post(image_hosting_api, formData);
        // console.log(imageResponse.data.success)
        // console.log(image_hosting_api)
        try {
            // Image upload function
            const uploadImage = async (imageFile) => {
                const formData = new FormData();
                formData.append('image', imageFile);

                const response = await axiosPublic.post(image_hosting_api, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                if (response.data.success) {
                    return response.data.data.display_url;
                } else {
                    throw new Error('Image upload failed');
                }
            };

            // Upload author photo
            const authorPhotoURL = await uploadImage(data.authorPhoto[0]);

            // Upload article image
            const articleImageURL = await uploadImage(data.image[0]);

            // Prepare article data
            const articleData = {
                title: data.title,
                image: articleImageURL,
                publisher: data.publisher,
                description: data.description,
                view: parseInt(data.view),
                authorName: data.authorName,
                authorEmail: data.authorEmail,
                authorPhoto: authorPhotoURL,
                postedDate: data.date,
                status: data.status,
                tag: data.tag,
                type: data.type,




            };


            const response = await axiosPublic.post('/articles', articleData);

            if (response.data.insertedId) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Article added successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/myArticles')
            }
        } catch (error) {
            // console.error('Error uploading images or submitting article:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while adding the article.',
            });
        }
    };


    return (
        <div className='my-10  px-6 lg:px-12'>
            <HelmetTitle title="Add Article || Trendify"></HelmetTitle>
            <h2 className='text-2xl lora font-bold dark:text-white lg:mb-6'>Add an article</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='border-2 p-2'>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* title */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="title"
                                {...register('title', { required: true })}
                                className="input input-bordered w-full" />

                        </div>

                        {/* publisher */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Publisher</span>
                            </label>
                            <select defaultValue="default" {...register('publisher', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a publisher</option>
                                {
                                    publishers.map(publisher => <option key={publisher._id} value={publisher.name}>{publisher.name}</option>)
                                }

                            </select>
                        </div>

                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* author name */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Author Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="author name"
                                {...register('authorName', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        {/* author email */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Author Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                {...register('authorEmail', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* posted date*/}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Posted Date</span>
                            </label>
                            <input
                                type="date"
                                {...register('date', { required: true })}
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* status */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Status</span>
                            </label>
                            <input
                                type="text"
                                defaultValue='pending'
                                placeholder="pending"
                                readOnly
                                {...register('status', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* tag */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Tag</span>
                            </label>
                            <Select
                                {...register('tag')}
                                options={options}
                                onChange={handleTagChange}
                                className="basic-single"
                                classNamePrefix="select"
                                placeholder="Select a category"
                            />

                        </div>

                        {/* type */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Type</span>
                            </label>
                            <input
                                type="text"
                                defaultValue='normal'
                                readOnly
                                placeholder="normal"
                                {...register('type', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="flex flex-col lg:flex-row justify-around gap-4">
                        {/* author photo */}
                        <div className="form-control w-full my-4 ">
                            <label className="label">
                                <span className="label-text dark:text-white">Author Photo</span>
                            </label>
                            <input {...register('authorPhoto', { required: true })} name='authorPhoto' type="file" className="file-input w-full max-w-xs bg-blue-200" />
                        </div>

                        {/* image */}
                        <div className="form-control w-full my-4 ">
                            <label className="label">
                                <span className="label-text dark:text-white">Article Image</span>
                            </label>
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs bg-blue-200" />
                        </div>
                        {/* view */}
                        <div className="form-control w-full my-4 ">
                            <label className="label">
                                <span className="label-text dark:text-white">View</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={0}
                                readOnly
                                placeholder={0}
                                {...register('view', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* article details */}
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text dark:text-white">Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="description"></textarea>
                    </div>



                   <div className='flex justify-center my-4'>
                   <button className="w-1/2 btn bg-blue-400 text-white hover:bg-blue-500 transform transition duration-300 hover:scale-105 border-none">
                        Add Article
                    </button>
                   </div>
                </form>
            </div>
        </div>
    );
};

export default AddArticles;