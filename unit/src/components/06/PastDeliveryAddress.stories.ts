import type { Meta, StoryObj } from '@storybook/vue3'

import PastDeliveryAddress from './PastDeliveryAddress.vue'

const meta: Meta<typeof PastDeliveryAddress> = {
  component: PastDeliveryAddress,
  args: {
    options: [
      {
        id: 'xxx',
        value: 'xxx',
        'v−html': '〒167-0051 東京都杉並区荻窪1-00-00'
      }
    ]
  }
}

export default meta

type Story = StoryObj<typeof PastDeliveryAddress>

export const Disabled: Story = {
  render: (args) => ({
    components: { PastDeliveryAddress },
    setup() {
      return { args }
    },
    template: '<PastDeliveryAddress v-bind="args" />'
  }),
  args: {
    disabled: true
  }
}

export const Enabled: Story = {
  render: (args) => ({
    components: { PastDeliveryAddress },
    setup() {
      return { args }
    },
    template: '<PastDeliveryAddress v-bind="args" />'
  }),
  args: {
    disabled: false
  }
}
