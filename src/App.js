import './App.css';
import { useSelector } from 'react-redux';

import LineChart from './components/LineChart/LineChart';

function App() {

  const dataSet = useSelector(state => state.data);

  return (
    <div>
      <h1>Exercise #41</h1>
      <div>
        <LineChart dataset={{}}/>
      </div>
    </div>
  );
}

export default App;
