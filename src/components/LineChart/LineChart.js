import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import nodata from '../../nodata.png';
import './LineChart.css';

const LineChart = ({ title, dataset, color }) => {

  const chartRef = useRef(null);

  useEffect(() => {
    if(chartRef.current !== null){
      let chartData = chartRef.current.chartInstance;
      chartData.data.datasets[0].backgroundColor = color;
      chartData.data.datasets[0].borderColor = color;
      chartData.update();
    }
  }, [color])

  useEffect(() => {
    if(dataset.labels){
      let chartData = chartRef.current.chartInstance;
      for(let index = 0; index < dataset.labels.length; index++){
        if(chartData.data.labels.length < 100) {
          chartData.data.labels.push(dataset.labels[index]);
          chartData.data.datasets[0].data.push(dataset.values[index]);
        }
      }
      chartData.update();
    }
  }, [dataset])

  const data = {
    labels: [],
    datasets: [
      {
        label: title,
        data: [],
        fill: false,
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
 
  return (
    <div className="chart-container">
      {
        (dataset.labels) ? 
        (
          <>
            <h1 className="chart-title" >{title}</h1>
            <Line 
              ref={chartRef} 
              data={data} 
              options={options}
              id="chart"
            />
            <p className="dataset-size" >Dataset size: {(dataset.labels.length > 100) ? "100" : dataset.labels.length}</p>
            {(dataset.labels.length > 100) ? (<div id="overflow-error" className="overflow-error">
              This chart supports 100 data points max
            </div>) : (null)}
          </>) :
        (<div className="no-data-container">
          <img src={nodata} alt="no data"/>
          <h1>No Data</h1>
        </div>)
      }
    </div>
  )
 
}

export default LineChart;