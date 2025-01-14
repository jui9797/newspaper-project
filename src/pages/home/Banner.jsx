
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import img1 from '../../assets/pexels-katya-wolf-8715936.jpg'
import img2 from '../../assets/pexels-nietjuh-3123898.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
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
                <SwiperSlide>
                    <img src={img1} alt="img-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="img-2" />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;