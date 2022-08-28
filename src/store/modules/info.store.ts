export default {
  namespaced: true,
  state: {
    message: ''
  },
  mutations: {
    setMessage(state: any, val: string) {
      state.message = val;
    }
  },
  actions: {
    setMessage({ commit }: any, val: string) {
      commit('setMessage', val);
      const name = 'sss';
      console.log(name);
    }
  },
  getters: {
    getMessage(state: any) {
      return `hhhhh-----${state.message}`;
    }
  }
};
