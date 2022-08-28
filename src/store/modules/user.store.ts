export default {
  namespaced: true,
  state: {
    age: 12
  } as {
    age: number;
  },
  mutations: {
    setAge(state: any, val: number) {
      state.age = val;
    }
  },
  actions: {
    setAge({ commit }: any, val: number) {
      commit('setAge', val);
    }
  },
  getters: {
    getAge(state: any): string {
      return `${state.age}???`;
    }
  }
};
