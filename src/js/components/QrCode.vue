<template>
  <div>
    <b-jumbotron>
      <h1>QR Code</h1>
      <p class="lead">
        QR Code generator.
      </p>

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

        <b-form-group
          id="qrCodeLevelInputGroup"
          label="Error correction level :"
          label-for="qrCodeLevelInput"
        >
          <b-form-select
            id="qrCodeLevelInput"
            v-model="level"
            :options="levelsSelectOptions"
          >
          </b-form-select>
        </b-form-group>
      </b-form>

      <hr>

      <qrcode-vue
        :value="value"
        size="200"
        :level="level"
      >
      </qrcode-vue>
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
        level: 'H',
      };
    },
    computed: {
      levelsSelectOptions: function () {
        return [
          { value: 'L', text: 'Level L (7%)' },
          { value: 'M', text: 'Level M (15%)' },
          { value: 'Q', text: 'Level Q (25%)' },
          { value: 'H', text: 'Level H (30%)' },
        ];
      },
    },
    components: {
      QrcodeVue,
    },
  };
</script>

<style scoped>

</style>
