import Vue from 'vue';

import './bootstrap';

new Vue({
  el: '#app',
  template: `
    <b-container>
      <b-jumbotron>
        <h1>404 Not Found</h1>
        <hr>
        <p class="lead">Page not found. Back to <a href="/">Top Page</a>.</p>      
      </b-jumbotron>
      <page-footer></page-footer>
    </b-container>
  `,
});
