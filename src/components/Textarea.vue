<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String],
    default: ''
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label v-if="label" class="block text-gray-700 text-sm font-bold mb-2">{{
      label
    }}</label>
    <textarea
      v-bind="$attrs"
      :value="modelValue"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
