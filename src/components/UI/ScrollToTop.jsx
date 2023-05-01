import styled from "styled-components"
import {ReactComponent as ArrowUp} from '../../images/arrowUp.svg'

const UpBtnContainer = styled.div`
    position: fixed;
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 30px;
    padding: 17px 10px;
    display: flex;
    flex-direction: row;
    align-items: center; 
    right: 22rem;
    bottom: 1rem;
`

const UpBtn = styled.div`
    margin-left: 10px;
`

const ScrollToTOP = ({ref}) => {
    console.log(ref);
    return(
        <UpBtnContainer onClick={()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
        }} className="upBtnContainer">
            <ArrowUp className="arrowUp"></ArrowUp>
            <UpBtn className="upBtn">Вверх</UpBtn>
        </UpBtnContainer>
    )
}

export default ScrollToTOP