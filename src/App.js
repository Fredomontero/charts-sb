import { useEffect  } from 'react';
import './App.css';
import Chart from 'chart.js';
import LineChart from './components/LineChart/LineChart';

const generateNumbers = () => {
  let str = "[";
  for(let i = 1; i<=50; i++){
    str += "'";
    // Between 1 and 50
    let n = Math.floor(Math.random() * 50) + 1;
    str += n;
    str += "'";
    str += ",";
  }
  str += "]";
  console.log(str);
}

const createChart = () => {
  var ctx = document.getElementById('myChart');
  ctx.width = 300;
  ctx.height = 300;
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'],
      datasets: [{
          label: '# of Votes',
          data: [19,11,35,33,44,45,49,46,23,11,48,8,36,15,44,1,4,32,15,45,7,4,36,14,10,10,12,13,36,49,32,44,43,45,46,3,6,34,36,44,38,13,9,17,40,34,40,11,14,7],
          backgroundColor: 'rgba(255, 0, 0, 0.3)',
          borderColor: 'rgb(255, 0, 0)',
          borderWidth: 1
      }]
  },
    options: {
      responsive: true
    }
});
}

function App() {

  // useEffect(() => {
  //   createChart();
  // })

  return (
    <div>
      <h1>Hello World</h1>
      <div className="chartContainer">
        {/* <canvas id="myChart" width="400" height="400"></canvas> */}
        <LineChart/>
      </div>
    </div>
  );
}

export default App;
