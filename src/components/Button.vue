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
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <button
    v-bind="$attrs"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    <div class="flex">
      <UkLoading v-if="loading" class="flex-2" />
      <slot class="flex-auto">
        {{ label }}
      </slot>
    </div>
  </button>
</template>

<style></style>
