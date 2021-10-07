import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/view/index';
import Text from '@/view/text';
import Animation from '@/view/animation';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      name:'index',
      component: Index,
    },
    {
      path:'/text',
      name:'text',
      component: Text,
    },
    {
      path:'/animation',
      name:'animation',
      component: Animation,
    },
  ]
});


export default router;