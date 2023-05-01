import styled from "styled-components"
import { getData } from "../../api"
import axios from "axios"
import '../../../src/styles/card.scss'
import { useState, useEffect} from 'react'
import {ReactComponent as Like } from '../../images/IconLikeheart.svg'
import Skeleton from "../Loader/skeletonLoader"
import SkeletonPhoto from "../Loader/skeletonPhoto"
import LoaderCards from "../LoaderHorizontal/loaderCards"
import LoaderCardsPhoto from "../LoaderHorizontal/loaderCardsPhoto"
// interface data {
//     albumId: number,
//     id: number,
//     title: string,
//     url: string,
//     thumbnailUrl: string
// }

// interface axiosProps {
//     title: string,

// }

export const StyledCardContainer = styled.div`
    border-radius: 1em;
    background: #EAEAEA;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 26px;
    max-height: 400px;
    max-width: 224px;
`
export const Desc = styled.div`
    background: white;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
`

export const PhotoSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = ({secO_State}) => {
    return (
        <StyledCardContainer className={secO_State ? "styledCardContainer horizontal" : "styledCardContainer"} >
            <PhotoSection >
            {secO_State ? 
                    <LoaderCardsPhoto/> :
                    <SkeletonPhoto/>
            }
            </PhotoSection>
            <Desc className={secO_State ? "desc horizontal" : "desc "}>
            {secO_State ? 
                    <LoaderCards/> :
                    <Skeleton/>
            }
            </Desc> 
        </StyledCardContainer>
    )
}

export default Card