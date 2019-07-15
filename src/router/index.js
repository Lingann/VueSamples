import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import List from '../components/list/List'
import HomeBody from '../pages/home/body/Body'
import Data from  '../components/data/Data'
import User from  '../components/data/User'
import StartScene from  '../components/Three/scene/StartScene'
import Vtour from '../components/krapno/Vtour'
import VueKrapno from  "../components/krapno/VueKrpano"
import Modal from  "../components/common/modal/Modal"
import Modal2 from  "../components/common/modal/Modal2"
import Modals from  "../pages/widgets/Modals"
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
                },
                {
                    name: 'vtour',
                    path: '/krpano/',
                    component: Vtour
                },
                {
                    name: 'startScene',
                    path: '/three/scene/',
                    component: StartScene
                },
                {
                    name: 'vueKrapno',
                    path: '/krpano/vue/',
                    component: VueKrapno
                },
                {
                    name: 'modal',
                    path: '/common/modal/',
                    component: Modal
                },
                {
                    name: 'modal2',
                    path: '/common/modal2/',
                    component: Modal2
                },
                {
                    name: 'modals',
                    path: '/common/modals/',
                    component: Modals
                },
            ]
        },

    ]
})
