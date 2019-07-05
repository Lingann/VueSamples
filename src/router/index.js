import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import List from '../components/list/List'
import HomeBody from '../pages/home/body/Body'
import Data from  '../components/data/Data'
import User from  '../components/data/User'
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
                    path: 'body',
                    component: HomeBody
                },
                {
                    name: 'list',
                    path: '/list/',
                    component: List
                },
                {
                    name: 'data',
                    path: '/data/',
                    component: Data
                },
                {
                    name: 'user',
                    path: '/user/',
                    component: User
                }
            ]
        },

    ]
})
