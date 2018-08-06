import Vue from 'vue';
import FreightNumberCalc from './components/FreightNumberCalc';

require('./google-analytics');

new Vue({
  el: '#app',
  render: h => h(FreightNumberCalc),
});
