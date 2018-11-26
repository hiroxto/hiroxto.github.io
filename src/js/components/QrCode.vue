<template>
  <div>
    <b-jumbotron>
      <h1>QR Code</h1>
      <p class="lead">QR Code generator.</p>
    </b-jumbotron>

    <page-footer></page-footer>
  </div>
</template>

<script>
  import QrcodeVue from 'qrcode.vue';

  export default {
    name: 'QrCode',
    components: {
      QrcodeVue,
    },
  };
</script>

<style scoped>

</style>
