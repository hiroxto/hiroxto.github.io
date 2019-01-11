<template>
  <div id="footer">
    <div class="container">
      <p class="footer-text">
        © 2015-{{ currentYear }}
        <a :href="gitHubUserLink">
          Hiroto-K
        </a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    computed: {
      currentYear: function () {
        return (new Date()).getFullYear().toString();
      },
      gitHubUserLink () {
        return 'https://github.com/hiroto-k';
      },
    },
  };
</script>

<style scoped>
  html, body {
    height: 100%;
  }
  #footer {
    margin-bottom: 10px;
    height: 60px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    background-color: #f5f5f5;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
  .footer-text {
    margin: 20px 0;
    line-height: 60px;
  }
</style>
