import TopCollections from './TopCollections';
import NextLaunch from './NextLaunch';
import TopItems from './TopItems';
import DeptCat from './DeptCat';
import Wholesalers from './Wholesalers';


const ContentBody = props => {
  return(
    <div>
      <div className='content-line'>
        <TopCollections />
        <NextLaunch />
      </div>
      <div className='content-line'>
        <TopItems />
        <div className='y-flex'>
          <DeptCat />
          <Wholesalers />
        </div>
      </div>
    </div>
  )

}

export default ContentBody;