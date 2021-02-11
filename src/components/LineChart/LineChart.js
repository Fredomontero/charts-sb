import React, { useEffect } from 'react';
import Chart from 'chart.js';
import './LineChart.css';

const LineChart = ({ data, color }) => {

  console.log("The data is: ", data);
  // console.log("The color is: ", color);

  useEffect(() => {
    if(data.labels)
      createChart();
  }, [data])

  const createChart = () => {
    var ctx = document.getElementById('myChart');
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
            label: '# of Votes',
            data: data.values,
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
      <canvas id="myChart"></canvas>
    </div>
  )
}

export default LineChart
