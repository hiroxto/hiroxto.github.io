import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import TrainNumberCalc from './components/TrainNumberCalc';
import ja from 'vee-validate/dist/locale/ja';

import './bootstrap';
import './google-analytics';

Vue.use(VeeValidate);
Validator.localize('ja', ja);

new Vue({
  el: '#app',
  render: h => h(TrainNumberCalc),
});
