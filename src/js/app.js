import Vue from 'vue';
import App from './components/App';

require("./google-analytics");

new Vue({
  el: '#app',
  render: h => h(App)
});
