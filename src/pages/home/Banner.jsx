
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
// import img1 from '../../assets/pexels-katya-wolf-8715936.jpg'
// import img2 from '../../assets/pexels-nietjuh-3123898.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Banner = () => {
    const {user} = useContext(AuthContext)


// get top 6 viewed articles
const axiosPublic =useAxiosPublic()
    const {data: articles = [], isPending: loading} =useQuery({
        queryKey: ['article'],
        // enabled: !!user?.email,
        queryFn: async() =>{
            
            const res = await axiosPublic.get('/topViewed');
            return res.data;
        }
    })
console.log(articles)

    return (
        <div className='w-full h-[400px] border-2'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* article array empty */}
                {
                    loading && (<SwiperSlide >
                        <p className='text-3xl'>Loading..!</p>
                        </SwiperSlide>)
                }

                {
                    articles?.map(article=>
                    {
                        // console.log(article.image)
                    return <SwiperSlide key={article._id}>
                    <img src={article?.image} alt="img" className='object-cover' />
                    </SwiperSlide>
                    }
                       
                    )
                }

            </Swiper>
        </div>
    );
};

export default Banner;