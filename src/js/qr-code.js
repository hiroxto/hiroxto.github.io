import Vue from 'vue';
import QrCode from './components/QrCode';
import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  template: `
    <b-container>
      <qr-code></qr-code>
      <page-footer></page-footer>
    </b-container>
  `,
  components: {
    QrCode,
  },
});
