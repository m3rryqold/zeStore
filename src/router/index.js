import Vue from 'vue';
import Router from 'vue-router';
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';

Vue.use(Router);
Vue.use(Bootstrap);
Vue.use(VeeValidate);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'admin',
      //  Parent routes
      component: Index,
      //  child routes
      children: [
        {
          path: 'new',
          name: 'new',
          component: New,
        },
        {
          path: '',
          name: 'products',
          component: Products,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
  ],
});
