import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from "axios";
import '../../styles/about.scss'
import Sliders from "../../Swiper/Swiper";
import SlidersAbout from "../../Swiper/SwiperAbout";

const CardAbout = () => {

    const params = useParams()
    
    const [aboutData,setAboutData] = useState([])

    useEffect(() => {
        try{
            // const res = await axios.get<data[]>("https://jsonplaceholder.typicode.com/photos?_limit=10&page_3")
            axios.get(`https://testguru.ru/frontend-test/api/v1/items/${params.id}`)
                .then(response => {
                    
                    setAboutData([response.data])
                    console.log(aboutData);
                //   setTitle([...title, ...response.data.items])
                })
                .catch(function (error){
                //   SetFetchError(true)
                  
                })
                .finally(()=>{
                  setTimeout(()=>{
                    // setFetching(false)
                  },1000)
                })
          } catch (error) {
            alert('ошибка')
          }
        }
    , [])
    
    return (
        <div className="aboutContainer">
            <div className="content">
                <div className="headerCard">
                    <div className="title">
                    {
                        aboutData.map(el => 
                            <p key={el.id}>{el.title}</p>
                        )
                    }
                    </div>
                    <div className="price">
                    {
                        aboutData.map(el => 
                            <p className="price" key={el.id}>{'Price: ' + el.price + '₽'}</p>
                        )
                    }
                    </div>
                    <div className="address">
                    {
                        aboutData.map(el => 
                            <p className="address" key={el.id}>{'address: ' + el.address}</p>
                        )
                    }
                    </div>
                    <div className="time">
                    {
                        aboutData.map(el => 
                            <p className="time" key={el.id}>{'created: ' + el.createdAt}</p>
                        )
                    }
                    </div>
                </div>
                <div className="imgAbout">
                    <SlidersAbout></SlidersAbout>
                </div>
                <div className="descCard">
                    {
                        aboutData.map(el => 
                            <p className="about" key={el.id}>{el.about}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CardAbout