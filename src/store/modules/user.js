/* eslint-disable */
const state = {
  user: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearUser(state) {
    state.user = null;
  },
};

const actions = {
  setUser({ commit }, user) {
    commit('setUser', user);
  },
  clearUserData({ commit }) {
    commit('clearUser');
  },
};

const getters = {
  getUser(state) {
    return state.user;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
