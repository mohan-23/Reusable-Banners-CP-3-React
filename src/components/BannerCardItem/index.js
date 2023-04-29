import './index.css'

const Banners = props => {
  const {cardItems} = props
  const {headerText, description, className} = cardItems

  return (
    <li className={`${className} banner-card`}>
      <div>
        <h1 className="banner-heading">{headerText}</h1>
        <p className="banner-description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banners
