<script setup lang="ts">
import { ref } from 'vue'

import Form from '../06/Form.vue'
import { postMyAddress } from './fetchers'
import { handleSubmit } from './handleSubmit'
import { checkPhoneNumber, ValidationError } from './validations'

const postResult = ref('')

function onSubmit(values: any) {
  try {
    checkPhoneNumber(values.phoneNumber)
    postMyAddress(values)
      .then(() => {
        postResult.value = '登録しました'
      })
      .catch(() => {
        postResult.value = '登録に失敗しました'
      })
  } catch (err) {
    if (err instanceof ValidationError) {
      postResult.value = '不正な入力値が含まれています'
      return
    }
    postResult.value = '不明なエラーが発生しました'
  }
}
</script>

<template>
  <div>
    <Form :on-submit="handleSubmit(onSubmit)" />
    <p v-if="postResult">{{ postResult }}</p>
  </div>
</template>
