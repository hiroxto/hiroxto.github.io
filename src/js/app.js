import Vue from 'vue';
import App from './components/App';
import './bootstrap';
import './google-analytics';

new Vue({
  el: '#app',
  template: `
    <div class="container">
      <App></App>
    </div>
  `,
  components: {
    App,
  },
});
