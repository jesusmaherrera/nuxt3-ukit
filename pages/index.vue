<template>
  <BaseCheckbox label="company" v-model="booleanValue" />
  {{ booleanValue }}
  <BaseSelect label="company" v-model="value" :options="[{id: 1, label: 'Audi'}, {id: 2, label: 'Mercedes', }, ]"/>
  <BaseInput label="company" v-model="message" /> {{ message }}
  <br>
  <BaseTextarea rows="5" cols="20" v-model="BaseTextareaValue" /> {{ BaseTextareaValue }}

</template>

<script setup lang="ts">
const value = ref(2)
const message = ref('hello')
const BaseTextareaValue = ref('BaseTextareaValue')
const booleanValue = ref(true)

</script>