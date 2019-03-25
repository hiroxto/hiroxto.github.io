<template>
  <div>
    <b-alert
      v-if="isRenderTrainType"
      variant="info"
      show
      v-text="trainType"
    >
    </b-alert>

    <b-form
      @submit.prevent="false"
      autocomplete="off"
    >
      <b-form-group
        id="trainNumberInputGroup"
        label="列車番号 (1〜4ケタの数字)"
        label-for="freightNumber"
      >
        <b-form-input
          v-model="trainNumber"
          v-validate="validateRules"
          data-vv-as="列車番号"
          @keyup.native="changeInput"
          @keydown.native="changeInput"
          :class="inputClass"
          type="text"
          class="form-control"
          name="freightNumber"
          id="freightNumber"
          placeholder="列車番号"
        >
        </b-form-input>

        <div
          v-show="hasErrors"
          class="invalid-feedback"
          v-text="errorMessage"
        >
        </div>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'NumberCalc',
    data () {
      return {
        trainNumber: null,
        trainType: null,
      };
    },
    computed: {
      validateRules: function () {
        return {
          numeric: true,
          between: {
            min: 1,
            max: 9999,
          },
        };
      },
      isRenderTrainType: function () {
        return this.trainType !== null;
      },
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
          .map(s => parseInt(s));
      },
      isPassengerSpecial: function () {
        return this.splitNumber[0] >= 6;
      },
      isFreightSpecial: function () {
        return this.splitNumber[0] >= 8;
      },
    },
    methods: {
      changeInput: function () {
        this
          .$validator
          .validate()
          .then(result => {
            if (!result || this.trainNumber === '') {
              this.trainType = null;
            } else {
              this.updateType();
            }

            return result;
          })
          .catch(() => {});
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
        const isSpecial = this.isPassengerSpecial;
        let type = '';

        if (splitNumber[1] === 0) {
          // Check 特急客

          type = `${isSpecial ? '臨' : ''}特急客`;
        } else if ((splitNumber[0] !== 0 || splitNumber[1] !== 0) && splitNumber[2] <= 1) {
          // Checks 急客

          type = `${isSpecial ? '臨' : ''}急客`;
        } else if (splitNumber[1] !== 0 && splitNumber[2] >= 2) {
          // Checks 客

          type = `${isSpecial ? '臨' : ''}客`;
        } else {
          type = '不明';
        }

        return type;
      },
      getFreightType: function () {
        const splitNumber = this.splitNumber;
        const isSpecial = this.isFreightSpecial;
        let type = '';

        if (splitNumber[1] === 0) {
          // Checks 高速貨A,B

          let ab = (splitNumber[2] <= 6) ? 'A' : 'B';
          type = `${isSpecial ? '臨' : ''}高速貨${ab}`;
        } else if ((splitNumber[0] <= 1 || isSpecial) && splitNumber[2] === 5) {
          // Checks 高速貨C

          type = `${isSpecial ? '臨' : ''}高速貨C`;
        } else if (splitNumber[2] >= 6 && splitNumber[2] <= 8) {
          // Checks 専貨A

          type = `${isSpecial ? '臨' : ''}専貨A`;
        } else if (splitNumber[2] === 9) {
          // Checks 専貨B

          type = `${isSpecial ? '臨' : ''}専貨B`;
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
