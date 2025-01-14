import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useArticles = () => {
    const axiosPublic =useAxiosPublic()
    const {data: article = [], isPending: loading, refetch} =useQuery({
        queryKey: ['article'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/articles');
            return res.data;
        }
    })
    return [article, loading, refetch]
};

export default useArticles;