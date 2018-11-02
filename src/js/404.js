import Vue from 'vue';

import './bootstrap';

new Vue({
  el: '#app',
  template: `
    <div>
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">404 Not Found</h1>
          <hr>
          <p class="lead">Page not found. Back to <a href="/">Top Page</a>.</p>
        </div>
      </div>
      <page-footer></page-footer>
    </div>
  `,
});
