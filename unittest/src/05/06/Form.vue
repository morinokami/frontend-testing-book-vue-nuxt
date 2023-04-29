<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'

import ContactNumber from './ContactNumber.vue'
import DeliveryAddress from './DeliveryAddress.vue'
import PastDeliveryAddress from './PastDeliveryAddress.vue'
import RegisterDeliveryAddress from './RegisterDeliveryAddress.vue'

// NOTE: React.ComponentProps を表現できないため、代わりに Record を使用している
export type AddressOption = { id: string } & Record<string, string>
defineProps<{
  deliveryAddresses?: AddressOption[]
  onSubmit?: (event: Event) => void
}>()

const registerNew = ref<boolean | undefined>(undefined)
</script>

<template>
  <form @submit.prevent="(event) => onSubmit?.(event)">
    <h2>お届け先情報の入力</h2>
    <ContactNumber />
    <template v-if="deliveryAddresses?.length">
      <RegisterDeliveryAddress :on-change="(flag) => (registerNew = flag)" />
      <DeliveryAddress v-if="registerNew" title="新しいお届け先" />
      <PastDeliveryAddress
        v-else
        :disabled="registerNew === undefined"
        :options="deliveryAddresses"
      />
    </template>
    <DeliveryAddress v-else />
    <hr />
    <div>
      <button>注文内容の確認へ進む</button>
    </div>
  </form>
</template>
