import  { useContext, useEffect, useState } from 'react';

import AdminArticleCard from '../../components/AdminArticleCard';
import { Pagination, Stack } from '@mui/material';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';

const AdminAllArticles = () => {
    
    const axiosSecure = useAxiosSecure()
    // console.log(article)
    const {loading} = useContext(AuthContext)
   const [articles, setArticles] = useState([])
   const [totalPage, setTotalPage] = useState(1)
   const [currentPage, setCurrentPage] = useState(1)


   let limit =3
   const handlePagination =(e, value) =>{
    setCurrentPage(value)
   }
const pagination =async(page)=>{
    const result = await axiosSecure.get(`/allArticles?page=${page}&limit=${limit}`)
    // console.log(result.data)
    setArticles(result.data.parPage)
    setTotalPage(Math.ceil(result.data.total / limit))
}


useEffect(()=>{
    pagination(currentPage)
},[currentPage, articles])


    return (
        <div className='my-10'>
            <h2 className='text-2xl lg:text-3xl text-center lora mb-4'>All Articles</h2>

            {
                loading ?
                    (<p>Loading</p>)
                    :
                    (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:p-4'>
                            {
                                articles.map(data => <AdminArticleCard key={data._id} data={data}></AdminArticleCard>)
                            }
                        </div>
                    )
            }
            <div className='flex justify-center items-center my-4'>
                <Stack spacing={2}>

                    <Pagination count={totalPage} page={currentPage} onChange={handlePagination} variant="outlined" shape="rounded" />
                </Stack>
            </div>

        </div>
    );
};

export default AdminAllArticles;