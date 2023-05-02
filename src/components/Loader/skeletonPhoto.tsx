import ContentLoader from "react-content-loader"

const SkeletonPhoto = () => (
  <ContentLoader 
    speed={2}
    width={224}
    height={260}
    viewBox="0 0 224 260"
    backgroundColor="#ffffff"
    foregroundColor="#e5dcdc"
  >
    <rect x="84" y="242" rx="3" ry="3" width="56" height="8" />
  </ContentLoader>
)

export default SkeletonPhoto