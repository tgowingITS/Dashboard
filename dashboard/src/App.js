import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentBody from './Components/MainPage/ContentBody';

const dummy_sidebar_data = [
  {
    id: 1,
    title: 'Revenue'
  },
  {
    id: 2,
    title: 'Traffic'
  },
  {
    id: 3,
    title: 'Conversion'
  },
  {
    id: 4,
    title: 'AOV'
  },
  {
    id: 5,
    title: 'Returns'
  },
];

const App = () => {

  return (
    <div className='main'>
      <Sidebar items={dummy_sidebar_data} />
      <ContentBody />
    </div>
  );
};

export default App;
