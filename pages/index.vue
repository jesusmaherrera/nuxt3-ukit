<template>
  <h1>Hello World!</h1>
  <input type="checkbox" class="rounded text-pink-500 " />
  {{ value }}
  <BaseInput label="company" v-model="value" :options="[{id: 1, label: 'Audi'}, {id: 2, label: 'Mercedes', }, ]"/>
</template>

<script setup lang="ts">
const value = 2
</script>