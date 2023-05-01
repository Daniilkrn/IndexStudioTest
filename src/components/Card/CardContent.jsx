import { Desc, PhotoSection, StyledCardContainer } from "./Card"
import {ReactComponent as Like } from '../../images/IconLikeheart.svg'
import {useState, useEffect} from 'react'
import Seen from "./Seen"
import { useSelector, useDispatch } from "react-redux"
import { setDefaultSeen } from "../../store/reducers2/seenSlice"
import {useRef } from 'react'
import Sliders from "../../Swiper/Swiper"
import { NavLink, useParams } from "react-router-dom"
import CardAbout from "../CardAbout/CardAbout"

const CardContent = ({el,secO_State, fetching}) => {
    const dispatch = useDispatch()
    const seen = useSelector(state => state.seenRTK.seenFlag)

    const [colorLike,setColorLike] = useState(false)
    const [seenState,setSeenState] = useState(false)
    
    const ref = useRef()

    useEffect(() => {
        if(el.seen){
            localStorage.setItem(`${el.id + el.id}`, true)
            setSeenState(true)
        } 
        
    }, [el.id + el.id])
    
    return (
        <NavLink to={`${el.id}`} className="link" onClick={(e) => {
            if(e.target.firstChild === null){
                e.preventDefault()
            }
        }}>
        <StyledCardContainer className={secO_State ? "styledCardContainer horizontal" : "styledCardContainer"} onClick={(e)=>{
            if(!el.seen && e.target.parentNode !== ref.current){
                localStorage.setItem(`${el.id + el.id}`, true)
                setSeenState(true)
            } 
            if(!e.target == ref.current){
                setSeenState(false)
            }
        }}>
                <PhotoSection className={!secO_State ? "photoSection vertical" : "photoSection horizontal"}>
                    <Sliders fetching={fetching} seenState={el.seen} id = {el.id} el={el} secO_State={secO_State} className={secO_State ? "vertical" : "horizontal"}/>
                </PhotoSection>
                <Desc className="desc">
                    <div className="header_card">
                        <div className="price">
                            {el.price + ' ₽'}
                        </div>
                        <Like ref={ref} className={localStorage.getItem(`${el.id}`) ? "like active" : "like"} width={30} height={30} onClick={(e)=>{
                            setColorLike(!colorLike)
                            if(localStorage.getItem(`${el.id}`)) {
                                localStorage.removeItem(`${el.id}`)
                            } else {
                                localStorage.setItem(`${el.id}`,!colorLike)
                            }
                        }}></Like>
                    </div>
                    <div className="title_card">{el.title}</div>
                    <div className="address_card">
                        <div className="address">{el.address}</div>
                        <div className="time">{el.createdAt}</div>
                    </div>
                </Desc> 
        </StyledCardContainer>
        </NavLink>
    )
}

export default CardContent