import Sliders from "../../Swiper/Swiper"


const Seen = ({id,secO_State}) => {

    const seen = localStorage.getItem(`${id + id}`)
    
    return (
        <>
        {seen ? 
            <div className={secO_State ? "seen horizontal" : "seen"}>
                <p>Просмотрено</p>
            </div>   
            : <span className="dot">.</span>
        }
        </>
    )
}

export default Seen