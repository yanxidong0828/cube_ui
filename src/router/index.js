import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/index.vue';
import loading from '@/utils/loading';
// import Course from '../views/Course/index.vue';
// import Profile from '../views/Profile/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/course',
    name: 'Course',
    //当路由匹配到的时候才会加载组件   但是当这个组件太大时 该怎么办
    component: loading(()=>import('@/views/Course/index.vue')),
  },
  {
    path: '/profile',
    name: 'Profile',
    component:loading(()=>import('@/views/Profile/index.vue')),
  },


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
