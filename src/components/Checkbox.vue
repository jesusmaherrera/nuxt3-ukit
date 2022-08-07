<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [Boolean],
    default: false
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label v-if="label" class="block text-gray-700 text-sm font-bold mb-2">{{ label }}</label>
    <input
      type="checkbox"
      v-bind="$attrs"
      :checked="modelValue"
      class="rounded text-gray-700"
      @input="$emit('update:modelValue', $event.target.checked)"
    >
  </div>
</template>
