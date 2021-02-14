import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueFormWizard from 'vue-form-wizard'
import "vue-form-wizard/dist/vue-form-wizard.min.css";


Vue.config.productionTip = false

Vue.use(VueFormWizard)
/* eslint-disable no-new */ 
new Vue({
  router,
  store,
  vuetify,
  methods: {
    onComplete: function() {
        alert('Yay. Done!');
     }
  },  
  render: h => h(App)
}).$mount('#app')
