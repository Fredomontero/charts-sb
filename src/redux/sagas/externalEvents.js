import { END } from 'redux-saga';

const daysf = ["01", "11", "21"];
const dayst = ["10", "20", "30"];

const externalEventSource = emit => {
  let secs = 0;
  const iv = setInterval(() => {
    if(secs < 11){
      let dates = {
        from: `2020-0${6 + Math.floor(secs/3)}-${daysf[secs%3]}`,
        to: `2020-0${6 + Math.floor(secs/3)}-${dayst[secs%3]}`,
      }
      fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${dates.from}&end=${dates.to}`)
      .then(response => response.json())
      .then(data => {
        let dataset = {labels: [], values: []};
        for(const property in data.bpi) {
          dataset.labels.push(`${property}`);
          dataset.values.push(data.bpi[property]);
        }
        emit(dataset);
        secs += 1;
      });
    }else{
      emit(END);
    }
  }, 1000);
  return () => {
    clearInterval(iv);
  }
};

export default externalEventSource;