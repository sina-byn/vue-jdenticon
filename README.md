# vue-jdenticon [![NPM version](https://img.shields.io/npm/v/vue-jdenticon.svg?style=flat)](https://www.npmjs.com/package/vue-jdenticon) [![NPM monthly downloads](https://img.shields.io/npm/dm/vue-jdenticon.svg?style=flat)](https://npmjs.org/package/vue-jdenticon) [![NPM total downloads](https://img.shields.io/npm/dt/vue-jdenticon.svg?style=flat)](https://npmjs.org/package/vue-jdenticon)

A simple wrapper around [Jdenticon](https://jdenticon.com/) for Vue3.

Please consider following this project's author, [Sina Bayandorian](https://github.com/sina-byn), and consider starring the project to show your :heart: and support.

## Installation

```shell
npm i vue-jdenticon
```

## Usage

### Global - Plugin

```ts
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

import Jdenticon from 'vue-jdenticon';

const app = createApp(App);

app.use(Jdenticon);

app.mount('#app');
```

Then:

```ts
<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('identicon');
</script>

<template>
  <input type="text" v-model="value" />
  <Jdenticon v-model="value" />
</template>
```


### Import

```html
<script setup lang="ts">
import { ref } from 'vue';

import { Jdenticon } from 'vue-jdenticon';

const value = ref<string>('identicon');
</script>

<template>
  <input type="text" v-model="value" />
  <Jdenticon v-model="value" />
</template>
```

### Static Jdenticon

```html
<script setup lang="ts">
import { StaticJdenticon } from 'vue-jdenticon';
</script>

<template>
  <StaticJdenticon value="identicon" />
</template>
```