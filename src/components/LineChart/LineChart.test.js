import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, screen } from '@testing-library/react';
import LineChart from './LineChart';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers/index';
import { Provider } from 'react-redux';
import App from '../../App';

Enzyme.configure({ adapter: new Adapter() });

test('Renders No Data Message when there is no data for the chart', () => {
  render(<LineChart dataset={{}} />);
  const noDataElement = screen.getByText(/No Data/i);
  expect(noDataElement).toBeInTheDocument();
});

test('Renders Chart with title Bitcoin Price', () => {
  render(<LineChart title={"Bitcoin Price"} dataset={{labels: ['A', 'B', 'C'], values: [1, 2, 3]}} />);
  const chartTitle = screen.getByText(/Bitcoin Price/i);
  const DatasetSize = screen.getByText(/Dataset size/i);
  expect(chartTitle).toBeInTheDocument();
  expect(DatasetSize).toBeInTheDocument();
});

describe('Testing Chart Component with mockStore', () => {
  const mockStore = createStore(rootReducer, {data: {labels: ['A', 'B', 'C'], values: [1, 2, 3]}});
  const getWrapper = () => mount(
    <Provider store={mockStore}>
      <App>
        <LineChart/>
      </App>
    </Provider>
  )

  it('Dataset Size should be 3 according to the mockStore', () => {
    const wrapper = getWrapper();
    let datasetSize = wrapper.find('LineChart').find('p').text();
    expect(datasetSize).toEqual("Dataset size: 3");
  })
});

describe('Testing data overflow with mockStore', () => {
  let dataset = {labels: [], values: []};
  for(let index = 0; index<101; index++){
    dataset.labels.push(`${index}`);
    dataset.values.push(index);
  }
  const mockStore = createStore(rootReducer, { data: dataset });
  const getWrapper = () => mount(
    <Provider store={mockStore}>
      <App>
        <LineChart/>
      </App>
    </Provider>
  )

  it('Chart should be displayed', () => {
    const wrapper = getWrapper();
    let chart = wrapper.find('LineChart');
    expect(chart.length).toEqual(1);
  });

  it('Dataset Size should be 100 according to the mockStore', () => {
    const wrapper = getWrapper();
    let datasetSize = wrapper.find('LineChart').find('p').text();
    expect(datasetSize).toEqual("Dataset size: 100");
  });

  it('Message for data overflow error should be displayed ', () => {
    const wrapper = getWrapper();
    let errorMsg = wrapper.find('LineChart').find('#overflow-error').text();
    expect(errorMsg).toEqual('This chart supports 100 data points max');
  });
});