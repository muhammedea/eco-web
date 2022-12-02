import { createRouter, createWebHashHistory } from 'vue-router';
import DefaultView from '../views/DefaultView.vue';
import TradeView from '../views/TradeView.vue';
import EcoProjectView from '../views/EcoProjectView.vue';
import EcoProjectDetailView from '../views/EcoProjectDetailView.vue';
import EcoMarketView from '../views/EcoMarketView.vue';
import ApplyScreenView from '../views/ApplyScreenView.vue';
import ProfileView from '../views/ProfileView.vue';

const routes = [
  {
    path: '/',
    name: 'DeaultView',
    component: DefaultView,
    children: [
      {
        path: '',
        name: 'TradeView',
        component: TradeView,
      },
      {
        path: '/ecoproject',
        name: 'EcoProjectView',
        component: EcoProjectView,
      },
      {
        path: '/ecoproject/detail',
        name: 'EcoProjectDetailView',
        component: EcoProjectDetailView,
      },
      {
        path: '/ecomarket',
        name: 'EcoMarketView',
        component: EcoMarketView,
      },
      {
        path: '/apply',
        name: 'ApplyScreenView',
        component: ApplyScreenView,
      },
      {
        path: '/profile',
        name: 'ProfileView',
        component: ProfileView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      // eslint-disable-next-line
      setTimeout(() => {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop,
          behavior: 'smooth',
        });
      }, 50);
    }
    // eslint-disable-next-line
    setTimeout(() => {
      return window.scrollTo({ top: 0 });
    }, 100);
  },
});

export default router;
