<template>
  <div>
    try to load a component
    <UkButton
      class="bg-blue-500 hover:bg-blue-700"
      :loading="loading"
      @click="loading = true"
    >
      Submit
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
const loading = ref(false)
</script>
