import  { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const usePremium = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data:ispremium, isPending:isPremuiumLoading, refetch} =useQuery({
        queryKey: [user?.email, 'isPremium'],
        enabled: !! user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/premium/${user.email}`);
                // console.log("API Response:", res.data);
                return res.data?.premiumTaken || null; 
            } catch (error) {
                console.error("Error fetching premium data:", error);
                return null; 
            }
        }
    })
    return [ispremium, isPremuiumLoading, refetch]
};

export default usePremium;