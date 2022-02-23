import './TopCollectionCard.css'

const TopCollectionCard = props => {
  return(
    <div className='card'>
      <div className="rank-banner">{props.rank}</div>
      <h2>{props.title}</h2>
    </div>
  )
};

export default TopCollectionCard;