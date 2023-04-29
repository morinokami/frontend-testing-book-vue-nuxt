import type { Meta, StoryObj } from '@storybook/vue3'

import RegisterAddress from './RegisterAddress.vue'

const meta: Meta<typeof RegisterAddress> = {
  component: RegisterAddress
}

export default meta

type Story = StoryObj<typeof RegisterAddress>

export const Default: Story = {
  render: () => ({
    components: { RegisterAddress },
    template: '<RegisterAddress />'
  })
}
