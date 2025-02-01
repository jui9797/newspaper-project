
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
            <h2 className='font-bold lora'>Our Premium Articles Are Here...</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8'>
                {
                    loading ?
                     <p>Loading...</p> 
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