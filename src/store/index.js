import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      { title:'Income', score:'85' },
      { title:'Savings', score:'100' },
      { title:'Debt', score:'100' },
      { title:'Retirement', score:'50' },
      { title:'Investments', score:'100' }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
