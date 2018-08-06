<template>
  <div class="jumbotron">
    <div class="container">

      <h1>列車番号から種別計算</h1>
      <p class="lead">1〜4ケタの列番から列車種別を計算。</p>

      <div v-if="trainType !== null">
        <div class="alert alert-info" role="alert">
          {{ trainType }}
        </div>
      </div>

      <form>
        <div class="form-group">
          <label for="freightNumber">列車番号 (1〜4ケタの数字)</label>
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
    name: 'TrainNumberCalc',
    data () {
      return {
        errors: [],
        trainNumber: null,
        trainType: null,
      };
    },
    computed: {
      splitNumber: function () {
        return this.trainNumber.toString().padStart(4, '0').split('').map((s) => parseInt(s));
      },
      isSpecial: function () {
        return this.splitNumber[0] >= 6;
      },
    },
    methods: {
      changeInput: function () {
        this.updateType();
      },
      updateType: function () {
        const number = this.trainNumber;

        if (number === null || number === '') {
          this.trainType = null;
          this.errors = [];

          return null;
        }

        const valid = this.validateNumber();

        if (valid === false) {
          this.trainType = null;

          return;
        }

        this.trainType = this.getType();
      },
      validateNumber: function () {
        const number = this.trainNumber;

        this.errors = [];

        if (!Number.isInteger(number)) {
          this.errors.push('入力された数が整数ではありません。');
        } else if (number < 1 || number > 9999) {
          this.errors.push('入力された数が列車番号の範囲ではありません。');
        }

        return this.errors.length === 0;
      },
      getType: function () {
        const splitNumber = this.splitNumber;
        const isPassengerNumber = splitNumber[2] < 5;

        return isPassengerNumber ? this.getPassengerType() : this.getFreightType();
      },
      getPassengerType: function () {
        const splitNumber = this.splitNumber;
        let type = '';
        let isSpecial = false;

        // 臨時列車 (6000 以上)
        if (splitNumber[0] >= 6) {
          isSpecial = true;
        }

        if (splitNumber[1] === 0) {
          // Check 特急客

          type = isSpecial ? '臨特急客' : '特急客';
        } else if ((splitNumber[0] !== 0 || splitNumber[1] !== 0) && splitNumber[2] <= 1) {
          // Checks 急客

          type = isSpecial ? '臨急客' : '急客';
        } else if (splitNumber[1] !== 0 && splitNumber[2] >= 2) {
          // Checks 客

          type = isSpecial ? '臨客' : '客';
        } else {
          type = '不明';
        }

        return type;
      },
      getFreightType: function () {
        const splitNumber = this.splitNumber;
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
    },
  };
</script>

<style scoped>

</style>
