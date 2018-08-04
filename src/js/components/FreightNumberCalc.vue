<template>
  <div class="jumbotron">
    <div class="container">

      <h1>列番計算</h1>
      <p class="lead">任意の2〜4桁の数字の列番から列車種別を計算。</p>

      <div v-if="errors.length">
        <div class="alert alert-warning" role="alert">
          <ul>
            <li v-for="error in errors">
              {{ error }}
            </li>
          </ul>
        </div>
      </div>
      <div v-else-if="freightType !== null">
        <div class="alert alert-info" role="alert">
          {{ freightType }}
        </div>
      </div>

      <form>
        <div class="form-group">
          <label for="freightNumber">列車番号 (2〜4ケタの数字)</label>
          <input
            v-model.number="freightNumber"
            v-on:keyup="calcNumber(freightNumber)"
            v-on:keydown="calcNumber(freightNumber)"
            type="number"
            class="form-control"
            id="freightNumber"
            placeholder="列車番号"
          >
        </div>
      </form>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'FreightNumberCalc',
    data () {
      return {
        errors: [],
        freightNumber: null,
        freightType: null,
      };
    },
    methods: {
      calcNumber: function (number) {
        if (number === null || number === '') {
          return null;
        }

        const valid = this.validateNumber(number);

        if (valid === false) {
          return;
        }

        this.freightType = this.getType(number);
      },
      validateNumber: function (number) {
        this.errors = [];

        if (!Number.isInteger(number)) {
          this.errors.push('入力された数が整数ではありません。');
        } else if (number < 50 || number > 9999) {
          this.errors.push('入力された数の範囲が貨物列車の列車番号ではありません。');
        }

        return this.errors.length === 0;
      },
      getType: function (number) {
        const splitNumber = number.toString().split('').map((s) => parseInt(s));

        return '種別';
      },
    },
  };
</script>

<style scoped>

</style>
