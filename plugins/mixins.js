import Vue from 'vue'

Vue.mixin({
  methods: {
    isEmpty (objectParam) {
      for (let key in objectParam) {
        return false;
      }
      return true;
    }
  }
})
