// store/index.js
import { createStore } from 'vuex';
import auth from './modules/auth';
import user from './modules/user';

const store = createStore({
  modules: {
    auth,
    user,
    // Add other modules here when needed.
  },
});

export default store;
