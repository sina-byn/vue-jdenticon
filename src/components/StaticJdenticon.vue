<script setup lang="ts">
import * as jdenticon from 'jdenticon';

import { watch, useTemplateRef } from 'vue';

export type StaticJdenticonProps = { size?: number; value: string };

const icon = useTemplateRef<SVGElement>('icon');

const { size = 100, value } = defineProps<StaticJdenticonProps>();

watch([icon], () => {
  icon.value && jdenticon.update(icon.value, value ?? '');
});
</script>

<template>
  <svg ref="icon" :data-jdenticon-value="value" :width="size" :height="size" />
</template>
