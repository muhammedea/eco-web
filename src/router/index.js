import { createRouter, createWebHistory } from 'vue-router';
import DefaultView from '../views/DefaultView.vue';
import TradeView from '../views/TradeView.vue';
import EcoProjectView from '../views/EcoProjectView.vue';
import EcoMarketView from '../views/EcoMarketView.vue';
import ApplyScreenView from '../views/ApplyScreenView.vue';

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
        path: '/ecomarket',
        name: 'EcoMarketView',
        component: EcoMarketView,
      },
      {
        path: '/apply',
        name: 'ApplyScreenView',
        component: ApplyScreenView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
