import React from 'react';
import useArticles from '../../hooks/useArticles';
import AdminArticleCard from '../../components/AdminArticleCard';

const AdminAllArticles = () => {
    const [article, loading, refetch] = useArticles()
    // console.log(article)
    return (
        <div className='my-10'>
            <h2 className='text-2xl lg:text-3xl text-center'>All Articles</h2>

            {
                loading?
                 (<p>Loading</p>)
                 :
                 (
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:p-4'>
                    {
                         article.map(data=><AdminArticleCard key={data._id} data={data} refetch={refetch}></AdminArticleCard>)
                    }
                   </div>
                 )
            }

        </div>
    );
};

export default AdminAllArticles;