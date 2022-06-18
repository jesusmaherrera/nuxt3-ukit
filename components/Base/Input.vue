<template>
  <div>
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      for="select"
      v-if="!!label"
    >
      {{ label }}
    </label>
    <select
      class="w-full p-2 border-gray-300 rounded-lg shadow shadow-sm"
      id="select"
      :value="value" @input="$emit('input', $event)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.id">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: [String, Number],
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: []
  },
})
</script>

<style scoped>

</style>