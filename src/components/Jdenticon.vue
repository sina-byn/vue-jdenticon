<script setup lang="ts">
import * as jdenticon from 'jdenticon';

import { watch, useTemplateRef } from 'vue';

export type JdenticonProps = { size?: number };

const icon = useTemplateRef<SVGElement>('icon');
const value = defineModel<string>();

const { size = 100 } = defineProps<JdenticonProps>();

watch([icon, value], () => {
  icon.value && jdenticon.update(icon.value, value.value ?? '');
});
</script>

<template>
  <svg ref="icon" :data-jdenticon-value="value" :width="size" :height="size" />
</template>
