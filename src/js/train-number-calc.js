import Vue from 'vue';
import VeeValidate from 'vee-validate';
import TrainNumberCalc from './components/TrainNumberCalc';

import './bootstrap';
import './google-analytics';

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  render: h => h(TrainNumberCalc),
});
