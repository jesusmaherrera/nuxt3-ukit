<template>
  <BaseCheckbox label="company" v-model="booleanValue" />
  {{ booleanValue }}
  <BaseSelect label="company" v-model="value" :options="[{id: 1, label: 'Audi'}, {id: 2, label: 'Mercedes', }, ]"/>
  <BaseInput label="company" v-model="message" type="text"/> {{ message }}
</template>

<script setup lang="ts">
const value = ref(2)
const message = ref('hello')
const booleanValue = ref(true)

</script>