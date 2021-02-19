import './App.css';
import { useSelector } from 'react-redux';

import LineChart from './components/LineChart/LineChart';

function App() {

  const dataSet = useSelector(state => state.data);

  return (
    <div>
      <LineChart title={"Bitcoin price"} dataset={dataSet} color="#ff004f"/>
    </div>
  );
}

export default App;
