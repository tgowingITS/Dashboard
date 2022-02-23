import TopCollectionCard from './TopCollectionCard';
import './TopCollections.css';


const TopCollections = props => {
  const topCollectionData = [
    {
      rank: 1,
      title: 'Jac Jossa'
    },
    {
      rank: 2,
      title: 'Stacy Solomon'
    },
    {
      rank: 3,
      title: 'LadBaby Mum'
    },

  ];

  return( 
    <div>
      <ul className="top-collections-list">
        {topCollectionData.map((data) => ( 
          <TopCollectionCard 
            key={data.rank}
            rank={data.rank}
            title={data.title} 
          />

        ))}
      </ul>
    </div>
  )
};

export default TopCollections;