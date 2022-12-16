import { createApp } from 'vue';
import YartuUIKit from '@yartu/ui-kit';
import { createPinia } from 'pinia';
import App from './App.vue';
import './registerServiceWorker';
import './assets/css/input.css';
import './assets/font-icons/yartu-icons.css';
import router from './router';

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(YartuUIKit)
  .use(pinia)
  .mount('#app');
