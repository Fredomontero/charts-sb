import React, { useEffect, useRef  } from 'react'
import { Line } from 'react-chartjs-2';
import nodata from '../../nodata.png'

const LineChart = ({ dataset, color }) => {

  const chartRef = useRef(null);

  useEffect(() => {
    if(chartRef.current !== null){
      let chartData = chartRef.current.chartInstance;
      chartData.data.datasets[0].backgroundColor = color;
      chartData.data.datasets[0].borderColor = color;
      chartData.update();
    }
  }, [])

  useEffect(() => {
    if(dataset.labels && data){
      let chartData = chartRef.current.chartInstance;
      chartData.data.labels.push(...dataset.labels);
      chartData.data.datasets[0].data.push(...dataset.values);
      chartData.update();
    }
  }, [dataset])

  const data = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
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
        (<Line 
          ref={chartRef} 
          data={data} 
          options={options}
        />) :
        (<div>
          <img src={nodata} width={200} height={200}/>
          <h1>No Data</h1>
        </div>)
      }
    </div>
  )
 
}

export default LineChart;