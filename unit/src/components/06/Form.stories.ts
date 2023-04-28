import type { Meta, StoryObj } from '@storybook/vue3'

import Form from './Form.vue'
import { deliveryAddresses } from './fixtures'

const meta: Meta<typeof Form> = {
  component: Form
}

export default meta

type Story = StoryObj<typeof Form>

export const NoDeliveryAddresses: Story = {
  name: '過去のお届け先がない場合',
  render: () => ({
    components: { Form },
    template: '<Form />'
  })
}

export const HasDeliveryAddresses: Story = {
  name: '過去のお届け先がある場合',
  render: (args) => ({
    components: { Form },
    setup() {
      return { args }
    },
    template: '<Form v-bind="args" />'
  }),
  args: { deliveryAddresses }
}
