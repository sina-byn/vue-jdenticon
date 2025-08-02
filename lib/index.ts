import type { App } from 'vue';

// * components
import Jdenticon from '../src/components/Jdenticon.vue';
import StaticJdenticon from '../src/components/StaticJdenticon.vue';

export { type JdenticonProps } from '../src/components/Jdenticon.vue';
export { type StaticJdenticonProps } from '../src/components/StaticJdenticon.vue';
export { Jdenticon, StaticJdenticon };

export default {
  install: (app: App) => {
    app.component('Jdenticon', Jdenticon);
    app.component('StaticJdenticon', StaticJdenticon);
  },
};
