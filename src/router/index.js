import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import HomeList from '../pages/home/children/List'
import HomeBody from  '../pages/home/children/Body'
Vue.use(Router);

export default new Router({
    routes: [
        {
          path: '',
          redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: 'list',
                    component: HomeList
                },
                {
                    path: 'body',
                    component: HomeBody
                }
            ]
        }
    ]
})
