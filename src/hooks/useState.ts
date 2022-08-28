import { computed } from 'vue';
import { mapState, useStore } from 'vuex';

export default function (mapper: Array<string>) {
  const store = useStore();
  const stateFns = mapState(mapper);
  const stateMaps = {} as any;
  Object.keys(stateFns).forEach((key) => {
    stateMaps[key] = computed(stateFns[key].bind({ $store: store }));
  });
  return stateMaps;
}
