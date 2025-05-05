
import useArticles from '../../hooks/useArticles';

import HelmetTitle from '../../shared/HelmetTitle';
import useAdmin from '../../hooks/useAdmin';
import usePremium from '../../hooks/usePremium';
import UniqueCard from '../../components/UniqueCard';

const Premium = () => {
    const [article, loading] =useArticles()
    const [isAdmin] = useAdmin()
    const [isPremium] = usePremium()
    // console.log(article)
const premiumArticles = article.filter(premium=> premium.type === 'premium')
// console.log(premiumArticles)
    return (
        <div className='my-10'>
            <HelmetTitle title="Premium || Trendify"></HelmetTitle>
            <h2 className='font-bold lora lg:text-3xl lg: text-center lg:my-4 dark:text-white'>Our Premium Articles Are Here...</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8 lg:py-12 px-5 lg:px-10 dark:border-b-2'>
                {
                    loading ?
                     <div className='flex justify-center items-center h-screen text-5xl'>
                        <p>Loading...</p> 
                     </div>
                      : 
                      (
                        premiumArticles.map(data =><UniqueCard key={data._id} data={data} isAdmin={isAdmin} isPremium={isPremium}></UniqueCard>)
                      )
                }
            </div>
        </div>
    );
};

export default Premium;