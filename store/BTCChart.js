export const state = () => ({
  chartData: {}
})

export const mutations = {
  setBTCData (state, chartData) {
    state.chartData = chartData;
  }
}

export const actions = {
  async fetch ({commit}) {
    let url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
    const headers = {
      'Content-Type': 'application/json'
    };

    let response = await this.$axios.$get(url, { headers });
    commit('setBTCData', response.bpi);
  }
}


export const getters = {
  chartData: state => state.chartData
}
