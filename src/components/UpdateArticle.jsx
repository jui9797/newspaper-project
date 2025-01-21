
import Select from 'react-select/base';
import useAxiosPublic from '../hooks/useAxiosPublic';
import usePublisher from '../hooks/usePublisher';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import useArticleById from '../hooks/useArticleById';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateArticle = () => {

    const { id } = useParams()
    // console.log(id)
    const [article] = useArticleById(id)
    const navigate = useNavigate()
    // console.log(article)
    const { _id, title, publisher, authorName, authorEmail, authorPhoto, description, view, type, tag, image, postedDate, status } = article || {}
    const axiosPublic = useAxiosPublic();
    const [publishers] = usePublisher();
    const { register, handleSubmit, reset, setValue } = useForm();

    

    

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
                    return response.data.data.display_url; // Return the image URL
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

            // Submit article data to  backend
            // Assuming `axiosSecure` is  API client for secure requests
            const response = await axiosPublic.patch(`/article/update/${_id}`, articleData);
            console.log(response.data)
            if (response.data.modifiedCount > 0) {
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
            console.error('Error uploading images or submitting article:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while adding the article.',
            });
        }
    };




    return (
        <div className='my-10'>
            <h2 className='text-3xl'>Do you wanna update this article</h2>

            {/* update form */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='border-2 p-2'>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* title */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={title}

                                {...register('title', { required: true })}
                                className="input input-bordered w-full" />

                        </div>

                        {/* publisher */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text">Publisher</span>
                            </label>
                            <select defaultValue={publisher} {...register('publisher', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value={publisher}>Select a publisher</option>
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
                                <span className="label-text">Author Name</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={authorName}
                                {...register('authorName', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        {/* author email */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text">Author Email</span>
                            </label>
                            <input
                                type="email"
                                defaultValue={authorEmail}
                                {...register('authorEmail', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* posted date*/}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text">Posted Date</span>
                            </label>
                            <input
                                type="date"
                                defaultValue={postedDate}
                                {...register('date', { required: true })}
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* status */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={status}
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
                                <span className="label-text">Tag</span>
                            </label>
                            <select className="select select-bordered w-full ">
                                <option disabled>Select a tag</option>
                                <option>science</option>
                                <option>health</option>
                                <option>social</option>
                                <option>politics</option>
                            </select>

                        </div>

                        {/* type */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={type}
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
                                <span className="label-text">Author Photo</span>
                            </label>
                            <input {...register('authorPhoto', { required: true })}  name='authorPhoto' type="file" className="file-input w-full max-w-xs" />
                        </div>

                        {/* image */}
                        <div className="form-control w-full my-4 ">
                            <label className="label">
                                <span className="label-text">Article Image</span>
                            </label>
                            <input {...register('image', { required: true })}  type="file" className="file-input w-full max-w-xs" />
                        </div>
                        {/* view */}
                        <div className="form-control w-full my-4 ">
                            <label className="label">
                                <span className="label-text">View</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={view}
                                
                                placeholder={0}
                                {...register('view', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* article details */}
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" defaultValue={description}></textarea>
                    </div>



                    <button className="btn">
                        Add Article
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateArticle;