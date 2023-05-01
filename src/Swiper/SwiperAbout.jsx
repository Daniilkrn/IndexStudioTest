import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper';
import {useState, useEffect} from "react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SlidersAbout = ({fetching,setFetching,el,seenState, secO_State, id}) => {

  return (
    <Swiper className='slider'
    modules={[Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={50}
    slidesPerView={1}
    >
      <SwiperSlide className="slideAbout">
        1
      </SwiperSlide>
      <SwiperSlide className="slideAbout">
      </SwiperSlide> 
      <SwiperSlide className="slideAbout">
      </SwiperSlide>   
      <SwiperSlide className="slideAbout">
      </SwiperSlide>   
    </Swiper>
  );
};

export default SlidersAbout