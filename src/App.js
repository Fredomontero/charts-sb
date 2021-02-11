import './App.css';
import LineChart from './components/LineChart/LineChart';
import { useEffect } from 'react'


function App() {

  const data = {
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    // data: [10, 15, 20, 15, 10, 20, 30, 35, 40, 50, 40, 10]
    labels: [],
    values: []
  }

  const getData = () => {
    // fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-12-01&end=2021-02-01')
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-01-01&end=2021-02-01')
    .then(response => response.json())
    .then(bcdata => {
      for(const property in bcdata.bpi) {
        data.labels.push(`${property}`);
        data.values.push(bcdata.bpi[property]);
      }
    });
    // .then(btdata => console.log(typeof btdata.bpi));
  };

  useEffect(() => {
    console.log("Getting Data");
    getData();
  })

  return (
    <div>
      <h1>Exercise #41</h1>
      <div>
        <LineChart data={ data } color="blue"/>
      </div>
      <div className="buttons-container">
        <div className="btn btn-primary">
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
