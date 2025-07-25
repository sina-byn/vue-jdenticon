<script setup lang="ts">
import { ref } from 'vue';

import Jdenticon from './components/Jdenticon.vue';

const value = ref<string>('identicon');
</script>

<template>
  <input type="text" v-model="value" />
  <Jdenticon v-model="value" />
</template>
