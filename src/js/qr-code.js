import Vue from 'vue';
import QrCode from './components/QrCode';
import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  template: `
    <div class="container">
      <QrCode></QrCode>
    </div>
  `,
  components: {
    QrCode,
  },
});
