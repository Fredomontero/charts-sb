import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LineChart from './components/LineChart/LineChart';
import { loadDataRequest } from './redux/actions/data_actions';

function App() {

  const dispatch = useDispatch();
  const dataSet = useSelector(state => state.data);

  return (
    <div>
      <h1>Exercise #41</h1>
      <div>
        <LineChart data={ dataSet } color="blue"/>
      </div>
      <div className="buttons-container">
        <div className="btn btn-primary" onClick={() => dispatch(loadDataRequest())} >
          Load Data
        </div>
        <div className="btn btn-danger">
          Unload Data
        </div>
      </div>
    </div>
  );
}

export default App;
