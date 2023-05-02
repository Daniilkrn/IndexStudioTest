import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper';
import Seen from '../components/Card/Seen';
import { FC } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


type Props = {
  seenState: boolean,
  secO_State: boolean,
  id: string
}

// const CLIENT_ID = "bVDH6mpzst_zu90yvXBD7POzLD9X9-NFsoIM_tOFBzc"
// const urlPhoto = `https://api.unsplash.com/photos/random/?client_id=${CLIENT_ID}&count=4`
const Sliders: FC<Props> = ({secO_State, id}) => {
    
  return (
    <Swiper className='slider'
    modules={[Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={50}
    slidesPerView={1}
    >
      <SwiperSlide className={!secO_State ? "vertical" : "horizontal"}>
        {id + id ? 
          <Seen id = {id} secO_State={secO_State}/> : ''
        }
      </SwiperSlide>
      <SwiperSlide className={!secO_State ? "vertical" : "horizontal"}>
        {id + id  ? 
          <Seen id = {id} secO_State={secO_State}/> : ''
        }
      </SwiperSlide> 
      <SwiperSlide className={!secO_State ? "vertical" : "horizontal"}>
        {id + id  ? 
          <Seen id = {id} secO_State={secO_State}/> : ''
        }
      </SwiperSlide>   
      <SwiperSlide className={!secO_State ? "vertical" : "horizontal"}>
        {id + id  ? 
          <Seen id = {id} secO_State={secO_State}/> : ''
        }
      </SwiperSlide>   
      {/* {
        photoData && 
        photoData.map(el => 
        <SwiperSlide key={el.id}>{el}</SwiperSlide>  
        )    
      } */}
    </Swiper>
  );
};

export default Sliders