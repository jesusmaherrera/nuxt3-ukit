<!-- CustomInput.vue -->
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [Boolean],
    default: false
  },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="block text-gray-700 text-sm font-bold mb-2" v-if="label">{{ label }}</label>
  <input
    type="checkbox"
    v-bind="$attrs"
    :checked="modelValue"
    @input="$emit('update:modelValue', $event.target.checked)"
    class="rounded text-gray-700"
  />
</template>