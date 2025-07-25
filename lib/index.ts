import type { App } from 'vue';

// * components
import Jdenticon from '../src/components/Jdenticon.vue';

export { type JdenticonProps } from '../src/components/Jdenticon.vue';
export { Jdenticon };

export default {
  install: (app: App) => {
    app.component('Jdenticon', Jdenticon);
  },
};
