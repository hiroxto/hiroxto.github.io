import Vue from 'vue';
import TrainNumberCalc from './components/TrainNumberCalc';
import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  template: `
    <b-container>
      <train-number-calc></train-number-calc>
      <page-footer></page-footer>
    </b-container>
  `,
  components: {
    TrainNumberCalc,
  },
});
