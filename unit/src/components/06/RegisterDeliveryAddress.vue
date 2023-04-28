<script setup lang="ts">
defineProps<{
  onChange: (flag: boolean) => void
}>()
</script>

<template>
  <fieldset>
    <legend>新しいお届け先を登録しますか？</legend>
    <label>
      <input
        type="radio"
        name="registerDeliveryAddress"
        :value="0"
        @change="() => onChange(false)"
      />
      いいえ
    </label>
    <label>
      <input
        type="radio"
        name="registerDeliveryAddress"
        :value="1"
        @change="() => onChange(true)"
      />
      はい
    </label>
  </fieldset>
</template>
