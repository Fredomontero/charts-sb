import React, { useEffect } from 'react';
import Chart from 'chart.js';
import './LineChart.css';

const LineChart = ({ dataset, color }) => {

  console.log("The data is: ", dataset);
  // console.log("The color is: ", color);

  useEffect(() => {
    console.log("DATA: ", dataset)
    if(dataset.labels)
      createChart();
  }, [dataset])

  const createChart = () => {
    var ctx = document.getElementById('myChart');
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataset.labels,
        datasets: [{
            label: '# of Votes',
            data: dataset.values,
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            borderColor: 'rgb(255, 0, 0)',
            borderWidth: 1
        }]
    },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
  });
  }

  return (
    <div className="chart-container">
      {
        (dataset.labels) ? (<canvas id="myChart"></canvas>) : (<h1>No data</h1>)
      }
    </div>
  )
}

export default LineChart

//admision@ailabschool.com
