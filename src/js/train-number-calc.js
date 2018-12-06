import Vue from 'vue';
import TrainNumberCalc from './components/TrainNumberCalc';
import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  template: `
    <div class="container">
      <TrainNumberCalc></TrainNumberCalc>
    </div>
  `,
  components: {
    TrainNumberCalc,
  },
});
