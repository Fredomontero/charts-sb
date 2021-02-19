import { render, screen } from '@testing-library/react';
import LineChart from './LineChart';

test('Renders No Data Message when there is no data for the chart', () => {
  render(<LineChart dataset={{}} />);
  const noDataElement = screen.getByText(/No Data/i);
  expect(noDataElement).toBeInTheDocument();
});

test('Renders Chart with title Bitcoin Price', () => {
  render(<LineChart title={"Bitcoin price"}s dataset={{labels: ['A', 'B', 'C'], values: [1, 2, 3]}} />);
  let chart = document.getElementById("chart");
  console.log("CHART: ", chart);
  const titleElement = screen.getByText(/Bitcoin Price/i);
  expect(titleElement).toBeInTheDocument();
});
