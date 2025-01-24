import React from 'react';
import useArticles from '../../hooks/useArticles';
import PremiumCard from '../../components/premiumCard';
import HelmetTitle from '../../shared/HelmetTitle';

const Premium = () => {
    const [article, loading] =useArticles()
    // console.log(article)
const premiumArticles = article.filter(premium=> premium.type === 'premium')
// console.log(premiumArticles)
    return (
        <div className='my-10'>
            <HelmetTitle title="Premium || Trendify"></HelmetTitle>
            <h2 className='font-bold lora'>Our Premium Articles Are Here...</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8'>
                {
                    loading ?
                     <p>Loading...</p> 
                      : 
                      (
                        premiumArticles.map(data =><PremiumCard key={data._id} data={data}></PremiumCard>)
                      )
                }
            </div>
        </div>
    );
};

export default Premium;