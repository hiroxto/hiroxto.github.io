<template>
  <div>
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
              v-validate="'numeric|between:1,9999'"
              data-vv-as="列車番号"
              @keyup="changeInput"
              @keydown="changeInput"
              :class="inputClass"
              type="text"
              class="form-control"
              name="freightNumber"
              id="freightNumber"
              placeholder="列車番号"
            >
            <div
              v-show="hasErrors"
              class="invalid-feedback"
            >
              {{ errorMessage }}
            </div>

          </div>
        </form>

      </div>
    </div>

    <page-footer></page-footer>
  </div>
</template>

<script>
  export default {
    name: 'TrainNumberCalc',
    data () {
      return {
        trainNumber: null,
        trainType: null,
      };
    },
    computed: {
      hasErrors: function () {
        return this.errors.has('freightNumber');
      },
      errorMessage: function () {
        return this.errors.first('freightNumber');
      },
      inputClass: function () {
        return this.hasErrors ? 'is-invalid' : 'is-valid';
      },
      splitNumber: function () {
        return this
          .trainNumber
          .toString()
          .padStart(4, '0')
          .split('')
          .map((s) => parseInt(s));
      },
      isSpecial: function () {
        return this.splitNumber[0] >= 6;
      },
      isFreightSpecial: function () {
        return this.splitNumber[0] >= 8;
      },
    },
    methods: {
      changeInput: function () {
        this.$validator.validate().then(result => {
          if (!result || this.trainNumber === '') {
            this.trainType = null;

            return;
          }

          this.updateType();
        });
      },
      updateType: function () {
        this.trainType = this.getType();
      },
      getType: function () {
        const splitNumber = this.splitNumber;
        const isPassengerNumber = splitNumber[2] < 5;

        return isPassengerNumber ? this.getPassengerType() : this.getFreightType();
      },
      getPassengerType: function () {
        const splitNumber = this.splitNumber;
        let type = '';

        if (splitNumber[1] === 0) {
          // Check 特急客

          type = `${this.isSpecial ? '臨' : ''}特急客`;
        } else if ((splitNumber[0] !== 0 || splitNumber[1] !== 0) && splitNumber[2] <= 1) {
          // Checks 急客

          type = `${this.isSpecial ? '臨' : ''}急客`;
        } else if (splitNumber[1] !== 0 && splitNumber[2] >= 2) {
          // Checks 客

          type = `${this.isSpecial ? '臨' : ''}客`;
        } else {
          type = '不明';
        }

        return type;
      },
      getFreightType: function () {
        const splitNumber = this.splitNumber;
        let type = '';

        if (splitNumber[1] === 0) {
          // Checks 高速貨A,B

          let ab = (splitNumber[2] <= 6) ? 'A' : 'B';
          type = `${this.isFreightSpecial ? '臨' : ''}高速貨${ab}`;
        } else if ((splitNumber[0] <= 1 || this.isFreightSpecial) && splitNumber[2] === 5) {
          // Checks 高速貨C

          type = `${this.isFreightSpecial ? '臨' : ''}高速貨C`;
        } else if (splitNumber[2] >= 6 && splitNumber[2] <= 8) {
          // Checks 専貨A

          type = `${this.isFreightSpecial ? '臨' : ''}専貨A`;
        } else if (splitNumber[2] === 9) {
          // Checks 専貨B

          type = `${this.isFreightSpecial ? '臨' : ''}専貨B`;
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
