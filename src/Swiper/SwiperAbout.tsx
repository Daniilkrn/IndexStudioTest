import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SlidersAbout = () => {
  return (
    <Swiper className='slider'
    modules={[Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={50}
    slidesPerView={1}
    >
      <SwiperSlide className="slideAbout">1</SwiperSlide>
      <SwiperSlide className="slideAbout"></SwiperSlide> 
      <SwiperSlide className="slideAbout"></SwiperSlide>   
      <SwiperSlide className="slideAbout"></SwiperSlide>   
    </Swiper>
  );
};

export default SlidersAbout