export default {
    namespaced: true,
    state: {
        age: 0
    } as {
        age: number
    },
    mutations: {
        setAge(state,val:number){
            state.age=val;
        }
    },
    actions: {
        setAge({commit},val:number){
            commit("setAge",val)
        }
    },
    getters: {
        getAge(state):string{
            return state.age+"???";
        }
    }
}