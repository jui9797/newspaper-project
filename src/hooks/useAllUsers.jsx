import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllUsers = () => {
    const axiosPublic = useAxiosPublic()
    const {data: users = [] } =useQuery({
        queryKey: ['article'], 
        queryFn: async() =>{
            
            const res = await axiosPublic.get('/allUsers');
            return res.data;
        }
    })
    return [users]
};

export default useAllUsers;