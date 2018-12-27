<template>
  <b-jumbotron>
    <h1>列車番号から種別計算</h1>
    <p class="lead">
      1〜4ケタの列番から列車種別を計算。
    </p>

    <number-calc></number-calc>
  </b-jumbotron>
</template>

<script>
  import NumberCalc from './TrainNumberCalc/NumberCalc';
  export default {
    name: 'TrainNumberCalc',
    components: {
      NumberCalc,
    },
  };
</script>

<style scoped>

</style>
