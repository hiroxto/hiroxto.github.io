<template>
  <div class="jumbotron">
    <div class="container">

      <h1>貨物列車 種別計算</h1>
      <p class="lead">2〜4ケタの列番から列車種別を計算。現在は貨物列車の列番のみの対応です。旅客列車の種別計算は少々お待ち下さい。</p>

      <div v-if="trainType !== null">
        <div class="alert alert-info" role="alert">
          {{ trainType }}
        </div>
      </div>

      <form>
        <div class="form-group">
          <label for="freightNumber">列車番号 (2〜4ケタの数字)</label>
          <input
            v-model.number="trainNumber"
            @keyup="changeInput"
            @keydown="changeInput"
            :class="[errors.length === 0 ? 'is-valid' : 'is-invalid']"
            type="number"
            class="form-control"
            id="freightNumber"
            placeholder="列車番号"
          >
          <div
            v-if="errors.length !== 0"
            v-for="(error, index) in errors"
            :key="index"
            class="invalid-feedback"
          >
            {{ error }}
          </div>
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
        trainNumber: null,
        trainType: null,
      };
    },
    methods: {
      changeInput: function () {
        this.updateType(this.trainNumber);
      },
      updateType: function (number) {
        if (number === null || number === '') {
          this.trainType = null;
          this.errors = [];
          return null;
        }

        const valid = this.validateNumber(number);

        if (valid === false) {
          this.trainType = null;
          return;
        }

        this.trainType = this.getType(number);
      },
      validateNumber: function (number) {
        this.errors = [];

        if (!Number.isInteger(number)) {
          this.errors.push('入力された数が整数ではありません。');
        } else if (number < 1 || number > 9999) {
          this.errors.push('入力された数が列車番号の範囲ではありません。');
        }

        return this.errors.length === 0;
      },
      getType: function (number) {
        const splitNumber = this.splitNumber(number);
        const isPassengerNumber = splitNumber[2] < 5;

        return isPassengerNumber ? this.getPassengerType(number) : this.getFreightType(number);
      },
      getPassengerType: function (number) {
      },
      getFreightType: function (number) {
        const splitNumber = this.splitNumber(number);
        let type = '';
        let isSpecial = false;

        // 臨時列車 (6000 以上)
        if (splitNumber[0] >= 6) {
          isSpecial = true;
        }

        if (splitNumber[1] === 0) {
          // Checks 高速貨A,B

          let ab = (splitNumber[2] <= 6) ? 'A' : 'B';
          type = isSpecial ? `臨高速貨${ab}` : `高速貨${ab}`;
        } else if ((splitNumber[0] <= 1 || isSpecial) && splitNumber[2] === 5) {
          // Checks 高速貨C

          type = isSpecial ? '臨高速貨C' : '高速貨C';
        } else if (splitNumber[2] >= 6 && splitNumber[2] <= 8) {
          // Checks 専貨A

          type = isSpecial ? '臨専貨A' : '専貨A';
        } else if (splitNumber[2] === 9) {
          // Checks 専貨B

          type = isSpecial ? '臨専貨B' : '専貨B';
        } else {
          // Undefined
          type = '不明';
        }

        return type;
      },
      splitNumber: function (number) {
        return number.toString().padStart(4, '0').split('').map((s) => parseInt(s));
      },
    },
  };
</script>

<style scoped>

</style>
