import ContentLoader from "react-content-loader"

const FooterLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={125}
    height={32}
    viewBox="0 0 125 32"
    backgroundColor="#dedede"
    foregroundColor="#e5dcdc"
    {...props}
  >
    <rect x="84" y="251" rx="3" ry="3" width="56" height="8" /> 
    <rect x="0" y="0" rx="20" ry="20" width="125" height="32" />
  </ContentLoader>
)

export default FooterLoader