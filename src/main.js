import Vue from 'vue'
import App from './App.vue'
import router from './router' // 在这里引用的是/router/index.js 里面的Router

Vue.config.productionTip = false;

new Vue({
    // el: '#app',
    router,
    render: h => h(App),
}).$mount('#app');
