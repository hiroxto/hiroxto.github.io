import Vue from 'vue';
import App from './components/App';

import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  render: h => h(App),
});
