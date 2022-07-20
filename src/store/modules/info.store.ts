export default{
    namespaced: true,
    state: {
        message: ""
    },
    mutations: {
        setMessage(state,val:string){
            state.message = val;
        }
    },
    actions: {
        setMessage({commit},val:string){
            commit("setMessage",val)
        }
    },
    getters: {
        getMessage(state){
            return `hhhhh-----${state.message}`
        }
    }
}