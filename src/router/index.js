import Vue from 'vue';
import Router from 'vue-router';
import Luck from '@/components/luck/luck';
import Smile from '@/components/smile/smile';
import Today from '@/components/today/today';
import English from '@/components/english/english';
import Ip from '@/components/ip/ip';
import Translate from '@/components/translate/translate';
import About from '@/components/aboutme/aboutme';

Vue.use(Router);

export default new Router({
  routes: [
      // mode: out-in,
    {
      path: '/',
      name: 'home',
      component: resolve => require(['./../components/home.vue'], resolve)
    }, {
      path: '/luck',
      name: 'luck',
      component: Luck
    }, {
      path: '/smile',
      name: 'smile',
      component: Smile
    }, {
      path: '/today',
      name: 'today',
      component: Today
    }, {
      path: '/english',
      name: 'english',
      component: English
    }, {
      path: '/ip',
      name: 'ip',
      component: Ip
    }, {
      path: '/translate',
      name: 'translate',
      component: Translate
    }, {
      path: '/other',
      redirect: '/'
    }, {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});
