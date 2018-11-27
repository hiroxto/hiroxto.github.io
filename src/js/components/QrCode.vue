<template>
  <div>
    <b-jumbotron>
      <h1>QR Code</h1>
      <p class="lead">QR Code generator.</p>

      <b-form @submit.prevent="false">
        <b-form-group
          id="qrCodeValueInputGroup"
          label="Value :"
          label-for="qrCodeValueInput"
        >
          <b-form-input
            id="qrCodeValueInput"
            type="text"
            v-model="value"
            placeholder="Value"
          >
          </b-form-input>
        </b-form-group>
      </b-form>

      <qrcode-vue :value="value" size="200" level="H"></qrcode-vue>
    </b-jumbotron>

    <page-footer></page-footer>
  </div>
</template>

<script>
  import QrcodeVue from 'qrcode.vue';

  export default {
    name: 'QrCode',
    data () {
      return {
        value: '',
      };
    },
    components: {
      QrcodeVue,
    },
  };
</script>

<style scoped>

</style>
