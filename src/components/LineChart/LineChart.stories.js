import react from 'react';
import LineChart from './LineChart';

export default {
  title: 'LineChart',
  component: LineChart
}

export const BlueChart = () => <LineChart dataset={{labels: ['A', 'B', 'C'], values: [1, 2, 3]}} color={"#007fff"} />
export const GreenChart = () => <LineChart dataset={{labels: ['A', 'B', 'C'], values: [1, 2, 3]}} color={"#03c03c"} />
export const RedChart = () => <LineChart dataset={{labels: ['A', 'B', 'C'], values: [1, 2, 3]}} color={"#c23b22"} />
export const Empty = () => <LineChart dataset={{}}/>