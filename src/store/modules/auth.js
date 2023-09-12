/* eslint-disable*/
const state = {
  token: null,
  isAuthenticated: false,
};
const mutations = {
  setToken(state, token) {
    state.token = token;
    state.isAuthenticated = !!token;
  },
  clearToken(state) {
    state.token = null;
    state.isAuthenticated = false;
  },
};

const actions = {
  login({ commit }, token) {
    commit('setToken', token);
  },
  logout({ commit }) {
    commit('clearToken');
  },
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
