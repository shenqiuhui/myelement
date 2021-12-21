<template>
  <aside
    class="my-aside"
    :style="{ width }"
  >
    <slot />
  </aside>
</template>

<script lang="ts">
export default {
  name: 'MyAside'
}
</script>

<script setup lang="ts">
import { withDefaults } from 'vue'

type Props = {
  width: string
}

withDefaults(defineProps<Props>(), {
  width: '300px'
})
</script>

<style lang="scss">
@import '../styles/mixin';
@include b(aside) {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
