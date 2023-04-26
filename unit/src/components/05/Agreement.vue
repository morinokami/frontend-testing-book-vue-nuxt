<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  onChange?: (e: Event) => void
}>()
</script>

<template>
  <fieldset>
    <legend>利用規約の同意</legend>
    <label>
      <input type="checkbox" @change="(event) => onChange?.(event)" />
      当サービスの<a href="/terms">利用規約</a>を確認し、これに同意します
    </label>
  </fieldset>
</template>
