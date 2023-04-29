<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'

import Agreement from './Agreement.vue'
import InputAccount from './InputAccount.vue'

const checked = ref(false)
const headingId = 'loremipsum' // NOTE: Vue では useId が利用できない
</script>

<template>
  <form :aria-labelledby="headingId">
    <h2 :id="headingId">新規アカウント登録</h2>
    <InputAccount />
    <Agreement
      :on-change="(event) => { checked = (((event.target as HTMLInputElement)).checked) }"
    />
    <div>
      <button :disabled="!checked">サインアップ</button>
    </div>
  </form>
</template>
