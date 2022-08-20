<template>
  <div>
    try to load a component
    <UkButton
      class="bg-gray-400 hover:bg-gray-700 text-white"
    >
      Hi 👌
    </UkButton>
    <UkInput v-model="message" label="company" /> {{ message }}
    <UkSelect
      v-model="value"
      label="company"
      :options="[
        { id: 1, label: 'Audi' },
        { id: 2, label: 'Mercedes' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
const message = ref('hello')
const value = ref(2)
</script>
