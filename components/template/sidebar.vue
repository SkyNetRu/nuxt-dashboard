<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <v-navigation-drawer permanent >
        <v-list-item>
          <v-list-item-content>
            <div class="title">
              Sidebar
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            active-class="active"
            :class="item.path === $route.path ? 'active' : ''"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sidebar",
    data() {
      return {
        items: [
          {title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/'},
          {title: 'Photos', icon: 'mdi-image', path: 'photos'},
          {title: 'About', icon: 'mdi-help-box', path: 'about'},
        ],
        right: null,
      }
    },
  }
</script>
<style scoped>
  /*.off-canvas-sidebar, .sidebar {*/
  /*  background: #ba54f5;*/
  /*  background: -webkit-linear-gradient(0deg, #ba54f5, #e14eca);*/
  /*  background: -o-linear-gradient(0deg, #ba54f5 0, #e14eca 100%);*/
  /*  background: -moz-linear-gradient(0deg, #ba54f5 0, #e14eca 100%);*/
  /*  background: linear-gradient(0deg, #ba54f5, #e14eca);*/
  /*  height: calc(100vh - 90px);*/
  /*  width: 230px;*/
  /*  position: fixed;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*  z-index: 1;*/
  /*  background-size: cover;*/
  /*  background-position: 50%;*/
  /*  display: block;*/
  /*  box-shadow: 0 0 45px 0 rgba(0, 0, 0, .6);*/
  /*  margin-top: 80px;*/
  /*  margin-left: 20px;*/
  /*  border-radius: 5px;*/
  /*  transition: .5s cubic-bezier(.685, .0473, .346, 1);*/
  /*}*/

  /*@media (min-width: 991px) {*/
  /*  .main-panel, .sidebar, .sidebar-wrapper {*/
  /*    -webkit-transition-property: top, bottom, width;*/
  /*    transition-property: top, bottom, width;*/
  /*    -webkit-transition-duration: .2s, .2s, .35s;*/
  /*    transition-duration: .2s, .2s, .35s;*/
  /*    -webkit-transition-timing-function: linear, linear, ease;*/
  /*    transition-timing-function: linear, linear, ease;*/
  /*    -webkit-overflow-scrolling: touch;*/
  /*  }*/
  /*}*/

  /*.off-canvas-sidebar, .sidebar {*/
  /*  background: #389466;*/
  /*  background: -webkit-linear-gradient(0deg, #389466, #42b883);*/
  /*  background: -o-linear-gradient(0deg, #389466 0, #42b883 100%);*/
  /*  background: -moz-linear-gradient(0deg, #389466 0, #42b883 100%);*/
  /*  background: linear-gradient(0deg, #389466, #42b883);*/
  /*}*/

  /*.off-canvas-sidebar .sidebar-wrapper, .sidebar .sidebar-wrapper {*/
  /*  width: 100%;*/
  /*  min-height: 100%;*/
  /*  max-height: calc(100vh - 705px);*/
  /*  z-index: 4;*/
  /*  position: relative;*/
  /*  overflow: auto;*/
  /*}*/
</style>
