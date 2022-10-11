<template>
  <div>首页{{ activeIndex }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
