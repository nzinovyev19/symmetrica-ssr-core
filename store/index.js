import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    categories: null,
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      const { data: { items } } = await axios.get('http://api.holypony.ru/catalog/categories');
      commit('setCategories', items);
    },
    async nuxtServerInit ({ dispatch }) {
      await dispatch('fetchCategories');
    }
  },
});

export default store;
