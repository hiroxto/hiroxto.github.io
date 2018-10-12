import Vue from 'vue';
import TrainNumberCalc from './components/TrainNumberCalc';

import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  render: h => h(TrainNumberCalc),
});
