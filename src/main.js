import Vue from 'vue'
import './plugins/axios'
import './plugins/three'
import App from './App.vue'
import router from './router' // 在这里引用的是/router/index.js 里面的Router
import Krpano from 'vue-krpano';

Vue.config.productionTip = false;
Vue.use(Krpano);
new Vue({
    // el: '#app',
    router,
    render: h => h(App),
}).$mount('#app');
