import Vue from 'vue';
import TrainNumberCalc from './components/TrainNumberCalc';

require('./google-analytics');

new Vue({
  el: '#app',
  render: h => h(TrainNumberCalc),
});
