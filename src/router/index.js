import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import HomeList from '../pages/home/children/List'

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
                }
            ]
        }
    ]
})
