import Vue from 'vue';
import App from './components/App';
import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  template: `
    <b-container>
      <App></App>
      <page-footer></page-footer>
    </b-container>
  `,
  components: {
    App,
  },
});
