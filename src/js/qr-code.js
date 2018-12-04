import Vue from 'vue';
import QrCode from './components/QrCode';
import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  render: h => h(QrCode),
});
