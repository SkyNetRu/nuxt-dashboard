<template>
  <v-app dark>
    <div class="wrapper">
      <sidebar/>
      <div class="main-panel">
        <navbar/>
        <div class="content">
          <nuxt/>
        </div>
        <layoutFooter />
      </div>
    </div>
  </v-app>
</template>

<script>
  import sidebar from "@/components/template/sidebar.vue";
  import navbar from "@/components/template/navbar.vue";
  import layoutFooter from "@/components/template/layoutFooter.vue";

  export default {
    components: {
      sidebar,
      navbar,
      layoutFooter
    }
  };
</script>
<style lang="scss">
  @import "@/assets/scss/main.scss";

</style>

<!--<style>-->

<!--  /*html {*/-->
<!--  /*  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;*/-->
<!--  /*  font-size: 16px;*/-->
<!--  /*  word-spacing: 1px;*/-->
<!--  /*  -ms-text-size-adjust: 100%;*/-->
<!--  /*  -webkit-text-size-adjust: 100%;*/-->
<!--  /*  -moz-osx-font-smoothing: grayscale;*/-->
<!--  /*  -webkit-font-smoothing: antialiased;*/-->
<!--  /*  box-sizing: border-box;*/-->
<!--  /*}*/-->

<!--  /**, *:before, *:after {*/-->
<!--  /*  box-sizing: border-box;*/-->
<!--  /*  margin: 0;*/-->
<!--  /*}*/-->

<!--  /*.button&#45;&#45;green {*/-->
<!--  /*  display: inline-block;*/-->
<!--  /*  border-radius: 4px;*/-->
<!--  /*  border: 1px solid #3b8070;*/-->
<!--  /*  color: #3b8070;*/-->
<!--  /*  text-decoration: none;*/-->
<!--  /*  padding: 10px 30px;*/-->
<!--  /*}*/-->

<!--  /*.button&#45;&#45;green:hover {*/-->
<!--  /*  color: #fff;*/-->
<!--  /*  background-color: #3b8070;*/-->
<!--  /*}*/-->

<!--  /*.button&#45;&#45;grey {*/-->
<!--  /*  display: inline-block;*/-->
<!--  /*  border-radius: 4px;*/-->
<!--  /*  border: 1px solid #35495e;*/-->
<!--  /*  color: #35495e;*/-->
<!--  /*  text-decoration: none;*/-->
<!--  /*  padding: 10px 30px;*/-->
<!--  /*  margin-left: 15px;*/-->
<!--  /*}*/-->

<!--  /*.button&#45;&#45;grey:hover {*/-->
<!--  /*  color: #fff;*/-->
<!--  /*  background-color: #35495e;*/-->
<!--  /*}*/-->
<!--</style>-->

