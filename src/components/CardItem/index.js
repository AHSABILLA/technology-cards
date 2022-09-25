// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} card-item`}>
      <div className="list-Cont">
        <h1 className="heading">{title}</h1>
        <p className="para">{description}</p>
        <img src={imgUrl} alt={title} className="pic" />
      </div>
    </li>
  )
}
export default CardItem
