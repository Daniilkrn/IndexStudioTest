import React from "react"
import ContentLoader from "react-content-loader"
import { Desc, PhotoSection, StyledCardContainer } from "../Card/Card"

const Skeleton = (props) => (
    <ContentLoader 
        speed={2}
        width={224}
        height={104}
        viewBox="0 0 224 104"
        backgroundColor="#f1efef"
        foregroundColor="#e5dcdc"
        {...props}
    >
        <rect x="0" y="0" rx="8" ry="8" width="166" height="25" /> 
        <rect x="175" y="0" rx="9" ry="9" width="25" height="25" /> 
        <rect x="0" y="35" rx="6" ry="6" width="200" height="16" /> 
        <rect x="0" y="60" rx="6" ry="6" width="200" height="16" />
    </ContentLoader>
)

export default Skeleton