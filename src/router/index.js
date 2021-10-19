import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/view/index';
import Text from '@/view/text';
import GNB from '@/view/gnb'
import Animation from '@/view/animation';
import Coupon from '@/view/coupon'

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
    {
      path:'/gnb',
      name:'gnb',
      component: GNB,
    },
    {
      path:'/coupon',
      name:'coupon',
      component: Coupon,
    },
  ]
});


export default router;