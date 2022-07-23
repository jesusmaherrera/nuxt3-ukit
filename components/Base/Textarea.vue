<!-- CustomInput.vue -->
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String],
    default: '',
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="block text-gray-700 text-sm font-bold mb-2" v-if="label">{{
    label
  }}</label>
  <textarea
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
     class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline"
  ></textarea>
</template>
