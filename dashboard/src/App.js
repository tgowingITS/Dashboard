import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar"

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
    <div>
      <Sidebar items={dummy_sidebar_data} />
    </div>
  );
};

export default App;
