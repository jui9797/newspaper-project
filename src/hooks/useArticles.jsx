
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useArticles = (filters) => {
    const axiosPublic =useAxiosPublic()
    const {data: article = [], isPending: loading, refetch} =useQuery({
        queryKey: ['articles', filters], 
        queryFn: async() =>{
            const params = new URLSearchParams(filters).toString()
            const res = await axiosPublic.get(`/articles?${params}`);
            return res.data;
        }
    })
    return [article, loading, refetch]
};

export default useArticles;