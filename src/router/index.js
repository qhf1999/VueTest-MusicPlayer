import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import register from '../views/login/register.vue'
import forgot from '../views/login/forgot.vue'
import index from '../views/index/index.vue'
import mymusic from '../views/mymusic/mymusic.vue'
import recommend from '../views/recommend/recommend.vue'
import details from '../views/details/details.vue'
import history from '../views/history/history.vue'
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: login
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/forgot',
            component: forgot
        },
        {
            path: '/index',
            component: index
        },
        {
            path: '/mymusic',
            component: mymusic
        },
        {
            path: '/recommend',
            component: recommend
        },
        {
            path: '/music/details/:id', // 音乐详情列表
            component: details
        },
        {
            path: '/history', // 音乐详情列表
            component: history
        }
    ]
})