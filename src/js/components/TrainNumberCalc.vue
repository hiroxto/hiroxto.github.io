<template>
  <b-jumbotron>
    <h1>列車番号から種別計算</h1>
    <p class="lead">
      1〜4ケタの列番から列車種別を計算。
    </p>

    <number-calc></number-calc>

    <hr>

    <h3>計算方法</h3>
    <how-to-calc></how-to-calc>
  </b-jumbotron>
</template>

<script>
  import HowToCalc from './TrainNumberCalc/HowToCalc';
  import NumberCalc from './TrainNumberCalc/NumberCalc';

  export default {
    name: 'TrainNumberCalc',
    components: {
      HowToCalc,
      NumberCalc,
    },
  };
</script>

<style scoped>

</style>
