import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper';
import {useState, useEffect} from "react"
import axios from 'axios';
import imgSlide from '../images/source-404.jpg'
import Seen from '../components/Card/Seen';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const CLIENT_ID = "bVDH6mpzst_zu90yvXBD7POzLD9X9-NFsoIM_tOFBzc"
const urlPhoto = `https://api.unsplash.com/photos/random/?client_id=${CLIENT_ID}&count=4`
const Sliders = ({fetching,setFetching,el,seenState, secO_State, id}) => {

  const [photoData,setPhotoData] = useState([])
  const [photoDataFetching, setPhotoDataFethcing] = useState(true)
  // useEffect(() => {
  //   if(photoDataFetching){
  //     fetch(urlPhoto)
  //       .then(function(response){
  //         return response.json()
  //       })
  //     .then(response => { 
  //       console.log(response.data.urls.full);
  //       setPhotoData([...response.data.urls.full])
  //       setPhotoDataFethcing(false)
  //     })
  //     .catch(function (error){
  //       // SetFetchError(true)
        
  //     })
  //     // .finally(()=>{
  //     //     setTimeout(()=>{
  //     //       setPhotoDataFethcing(false)
  //     //     },1000)
  //     // })
  //   }
  // }, [fetching])  
  
  // useEffect(() => {
  //   if(photoDataFetching){
  //     try{
  //       axios.get(urlPhoto)
  //           .then(response => {
  //             console.log(response.urls);
  //             setPhotoData([...response.data])
  //             console.log(photoData);
  //           })
  //           .catch(function (error){
  //             // SetFetchError(true)
  //           })
  //           .finally(()=>{
  //             setTimeout(()=>{
  //               setPhotoDataFethcing(false)
  //             },1000)
  //           })
  //     } catch (error) {
  //       alert('ошибка')
  //     }
  //   }
  // }, [photoDataFetching])
  
  return (
    <Swiper className='slider'
    modules={[Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={50}
    slidesPerView={1}
    // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={!secO_State ? "vertical" : "horizontal"}>
        {id + id ? 
          <Seen seenState={seenState} id = {id} secO_State={secO_State}/> : ''
        }
      </SwiperSlide>
      <SwiperSlide className={!secO_State ? "vertical" : "horizontal"}>
        {id + id  ? 
          <Seen seenState={seenState} id = {id} secO_State={secO_State}/> : ''
        }
      </SwiperSlide> 
      <SwiperSlide className={!secO_State ? "vertical" : "horizontal"}>
        {id + id  ? 
          <Seen seenState={seenState} id = {id} secO_State={secO_State}/> : ''
        }
      </SwiperSlide>   
      <SwiperSlide className={!secO_State ? "vertical" : "horizontal"}>
        {id + id  ? 
          <Seen seenState={seenState} id = {id} secO_State={secO_State}/> : ''
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