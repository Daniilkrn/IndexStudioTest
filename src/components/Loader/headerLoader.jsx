import React from "react"
import ContentLoader from "react-content-loader"

const HeaderLoader = (props) => {
    return (
        <ContentLoader 
        speed={2}
        width={84}
        height={39}
        viewBox="0 0 84 39"
        backgroundColor="#dedede"
        foregroundColor="#e5dcdc"
        {...props}
      >
        <rect x="84" y="251" rx="3" ry="3" width="56" height="8" /> 
        <rect x="0" y="0" rx="8" ry="8" width="84" height="39" />
      </ContentLoader>
    )
}

export default HeaderLoader