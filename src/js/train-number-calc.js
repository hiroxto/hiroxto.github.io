import Vue from 'vue';
import TrainNumberCalc from './components/TrainNumberCalc';
import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  template: `
    <b-container>
      <TrainNumberCalc></TrainNumberCalc>
    </b-container>
  `,
  components: {
    TrainNumberCalc,
  },
});
