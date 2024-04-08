import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide1 from './Sliders/Slide1';
import Slide2 from './Sliders/Slide2';
import Slide3 from './Sliders/Slide3';
import Slide4 from './Sliders/Slide4';


const Banner = () => {

    const slides = [Slide1, Slide2, Slide3, Slide4];

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-110px)]'>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper w-full md:max-w-[90%]">
                {
                    slides.map((slide, idx) => <SwiperSlide key={idx}>{slide}</SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner;