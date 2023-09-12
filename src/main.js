import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faClock,
  faBell,
  faMoon,
  faSun,
  faBars,
  faScrewdriverWrench,
  faRectangleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line
import Toast from 'vue-toastification';
// eslint-disable-next-line
import 'vue-toastification/dist/index.css';

import store from '@/store/store';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

library.add(
  faUser,
  faClock,
  faBell,
  faDiscord,
  faGithub,
  faMoon,
  faSun,
  faBars,
  faScrewdriverWrench,
  faRectangleXmark,
);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(store);
app.use(Toast, {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true,
});
app.mount('#app');
