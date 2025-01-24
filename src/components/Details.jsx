import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { FaEye } from "react-icons/fa";

const Details = () => {
    const {id} =useParams()
    // console.log(id)
    const axiosPublic = useAxiosPublic()
    // const hasIncremented = useRef(false);
    const {data: single = {}, isLoading: loading } =useQuery({
        queryKey: ['single', id], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/articles/${id}`);
           
            return res.data;
        }
        
    })
    // console.log(single)

// increment view count(way-1)



useEffect(()=>{
   axiosPublic.patch(`/articles/${id}`)
   .then(res =>{
    console.log(res.data)
    // setCount(res.view)
   })
},[axiosPublic, id])




   const {title, image, description,publisher, view, authorName,authorPhoto, authorEmail, postedDate, status, tag, type } = single || {}
    return (
        <div className='my-10'>
            {
                loading? <span className="loading loading-dots loading-lg"></span> :
                <>
                <div>
                 <div className='h-[200px] md:h-[300px] lg:h-[500px] p-2'>
                    <img className='w-full h-full rounded-lg' src={image} alt="image" />
                 </div>
                 <div className='border-2 p-4 rounded-lg shadow-xl'>
                    <div className='lg:flex justify-between'>
                        
                            <div className='flex gap-2'>
                            <img className='w-12 h-12 rounded-full border-2' src={authorPhoto} alt="image" />
                            <p>{postedDate}</p>
                            </div>
                            <div className='my-2'>
                            <p><span className='font-bold'>Author Name:</span> {authorName}</p>
                            <p><span className='font-bold'>Author Email:</span> {authorEmail}</p>
                            </div>
                        
                        
                    </div>
                   <h2 className=' text-xl lg:text-2xl font-bold mb-4'>{title}</h2>
                   <p className='text-gray-600 mb-4'>{description}</p> 
                   
                    <div>
                    <p><span className='font-bold'>Publisher:</span>{publisher}</p>
                    <p className='flex gap-2 justify-left items-center'><FaEye /> {view}</p>
                    </div>
                    
                   
                   
                   <div className='flex gap-4 mt-2'>
                   <p><span className='font-bold'>Tag:</span> {tag}</p>
                   <p><span className='font-bold'>Type:</span> <span className=''> {type}</span></p>
                   </div>
                </div>   
                </div>
                </>
            }
            
        </div>
    );
};

export default Details;