import type { Meta, StoryObj } from '@storybook/vue3'

import RegisterDeliveryAddress from './RegisterDeliveryAddress.vue'

const meta: Meta<typeof RegisterDeliveryAddress> = {
  component: RegisterDeliveryAddress
}

export default meta

type Story = StoryObj<typeof RegisterDeliveryAddress>

export const Default: Story = {
  render: () => ({
    components: { RegisterDeliveryAddress },
    template: '<RegisterDeliveryAddress />'
  })
}
