import { ComponentCustomProperties } from "vue"
import { createStore,Store } from "vuex";
// import {userStore} from "./modules/user.store"
// import {infoStore} from "./modules/info.store"
interface State {
    count: number;
    list:string[];
    user: string;
  }
declare module '@vue/runtime-core' {
    //declare your own store states
    
  
    // provide typings for `this.$store`
    interface ComponentCustomProperties {
      $store: Store<State>
    }
  }

  const obj = import.meta.globEager("./modules/*.store.ts")
  const modules = Object.keys(obj).reduce( (modules:any,modulePath:string) => {
    const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.store\.\w+$/,'$1');
    modules[moduleName] = obj[modulePath].default;
    return modules;
  }, {});
  
export default createStore<State>({
    modules
})