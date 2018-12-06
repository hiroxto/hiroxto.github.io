import Vue from 'vue';
import QrCode from './components/QrCode';
import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  template: `
    <b-container>
      <QrCode></QrCode>
    </b-container>
  `,
  components: {
    QrCode,
  },
});
