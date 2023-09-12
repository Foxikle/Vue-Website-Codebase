import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/home',
    name: 'homepath',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "About" */ '@/views/AboutView.vue'),
  },
  {
    path: '/plugins',
    name: 'plugins',
    component: () => import(/* webpackChunkName: "Plugins" */ '@/views/plugins/PluginsView.vue'),
  },
  {
    path: '/plugins/wiki',
    name: 'wiki',
    component: () => import(/* webpackChunkName: "Plugins" */ '@/views/plugins/wiki/WikiHome.vue'),
  },
  {
    path: '/plugins/wiki/customnpcs',
    name: 'customnpcswiki',
    component: () => import(/* webpackChunkName: "Plugins" */ '@/views/plugins/wiki/CustomNPCs.vue'),
  },
  {
    path: '/forums',
    name: 'forums',
    component: () => import(/* webpackChunkName: "Forums" */ '@/views/ForumsView.vue'),
  },
  {
    path: '/server',
    name: 'server',
    component: () => import(/* webpackChunkName: "Server" */ '@/views/server/ServerHomeView.vue'),
  },
  {
    path: '/server/staff',
    name: 'serverstaff',
    component: () => import(/* webpackChunkName: "Server Staff" */ '@/views/server/staffView.vue'),
  },
  {
    path: '/server/games',
    name: 'servergames',
    component: () => import(/* webpackChunkName: "Server Games" */ '@/views/server/ServerGamesView.vue'),
  },
  {
    path: '/server/store',
    name: 'serverstore',
    component: () => import(/* webpackChunkName: "Server Store" */ '@/views/server/ServerStoreView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/LoginPageView.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '@/views/RegisterPageView.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: () => import(/* webpackChunkName: "Privacy Policy" */ '@/views/PrivacyPolicyView.vue'),
  },
  {
    path: '/tos',
    name: 'Terms of Service',
    component: () => import(/* webpackChunkName: "Terms Of Service" */ '@/views/tosView.vue'),
  },
  {
    path: '/admin/home',
    name: 'Admin Pannel',
    component: () => import(/* webpackChunkName: "Admin Panel" */ '@/views/AdminPanel.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
