<script setup lang="ts">
import type { AddressOption } from './Form.vue'

defineProps<{
  disabled?: boolean
  options: AddressOption[]
}>()
</script>

<template>
  <fieldset :disabled="disabled" :style="{ opacity: disabled ? 0.3 : 1 }">
    <legend>過去のお届け先</legend>
    <select name="pastDeliveryAddress">
      <option v-for="{ id, ...opt } in options" :key="id" v-bind="opt" />
    </select>
  </fieldset>
</template>
