import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const usePublisher = () => {
    const axiosPublic = useAxiosPublic()
    const {data: publishers = [],  refetch} =useQuery({
        queryKey:['publishers'],
        queryFn: async() =>{
            
            const res = await axiosPublic.get('/publishers');
            return res.data;
        }
       
     })
    
     return [publishers, refetch]
};

export default usePublisher;