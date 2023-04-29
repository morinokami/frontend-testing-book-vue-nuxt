import type { Meta, StoryObj } from '@storybook/vue3'

import DeliveryAddress from './DeliveryAddress.vue'

const meta: Meta<typeof DeliveryAddress> = {
  component: DeliveryAddress
}

export default meta

type Story = StoryObj<typeof DeliveryAddress>

export const Default: Story = {
  render: () => ({
    components: { DeliveryAddress },
    template: '<DeliveryAddress />'
  })
}
