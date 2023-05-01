import ContentLoader from "react-content-loader"

const LoaderCardsPhoto = (props) => (
  <ContentLoader 
    speed={2}
    width={156}
    height={134}
    viewBox="0 0 156 134"
    backgroundColor="#f5efef"
    foregroundColor="#e5dcdc"
    {...props}
  >
    <rect x="84" y="251" rx="3" ry="3" width="56" height="8" /> 
    <rect x="264" y="0" rx="8" ry="8" width="25" height="25" /> 
    <rect x="50" y="124" rx="3" ry="3" width="56" height="8" /> 
    <rect x="185" y="86" rx="6" ry="6" width="156" height="14" />
  </ContentLoader>
)

export default LoaderCardsPhoto