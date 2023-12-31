import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <div className="card">
        <div className="card-con">
          <h1>{headerText}</h1>
          <p>{description}</p>
          <button type="button" className="button">
            Show more
          </button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItem
