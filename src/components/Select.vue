<template>
  <div>
    <label
      v-if="!!label"
      class="block text-gray-700 text-sm font-bold mb-2"
      for="select"
    >
      {{ label }}
    </label>
    <select
      v-bind="$attrs"
      id="select"
      class="w-full p-2 border-gray-300 rounded-lg shadow shadow-sm"
      :value="value"
      @input="$emit('input', $event)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.id"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps({
  value: [String, Number],
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: []
  }
})
</script>

<style scoped>

</style>
