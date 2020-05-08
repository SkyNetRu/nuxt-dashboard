<template>
  <section class="container">
    <BTCchart chartData="chartData" />
  </section>
</template>

<script>
import BTCchart from '@/components/dashboard/BTCChart'

export default {
  async fetch ({store}) {
    let checkChartData = false;
    for (let key in store.getters['BTCChart/chartData']) {
      checkChartData = true;
    }
    if (!checkChartData) {
      console.log('get new datachart');
      return await store.dispatch('BTCChart/fetch');
    }
  },
  components: {
    BTCchart
  },
  computed: {
    chartData () {
      console.log('chartData', this.$store.getters['BTCChart/chartData']);
      return this.$store.getters['BTCChart/chartData'];
    }
  }
}
</script>

<style>

</style>

