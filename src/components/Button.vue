<script lang="ts" setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: '#2fa'
  },
  label: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <button
    v-bind="$attrs"
    class="text-white font-bold py-2 px-4 rounded"
  >
    <slot />
  </button>
</template>

<style>
</style>
