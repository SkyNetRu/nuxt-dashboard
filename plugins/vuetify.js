import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      dark: true,
      themes: {
        dark: {
          // primary: '#e14eca',
          // accent: '#FF4081',
          // secondary: '#f4f5f7',
          // success: '#00f2c3',
          // info: '#1d8cf8',
          // warning: '#ff8d72',
          // error: '#fd5d93',
          // danger: '#fd5d93'
        },
        light: {
          primary: '#e14eca',
          accent: '#FF4081',
          secondary: '#ffe18d',
          success: '#00f2c3',
          info: '#1d8cf8',
          warning: '#ff8d72',
          error: '#fd5d93'
        }
      }
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
