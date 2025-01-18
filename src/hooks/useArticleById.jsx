import React from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useArticleById = (id) => {

 const axiosSecure = useAxiosSecure()
 const {data: article = {},  refetch} =useQuery({
    queryKey:['article', id],
    queryFn: async() =>{
        
        const res = await axiosSecure.get(`/articles/${id}`);
        return res.data;
    }
   
 })

 return [article, refetch]
    
};

export default useArticleById;