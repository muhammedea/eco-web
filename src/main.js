import { createApp } from 'vue';
import YartuUIKit from '@yartu/ui-kit';
import App from './App.vue';
import './registerServiceWorker';
import './assets/css/input.css';
import './assets/font-icons/yartu-icons.css';
import router from './router';

createApp(App).use(router).use(YartuUIKit).mount('#app');
