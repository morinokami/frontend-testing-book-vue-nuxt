import type { Meta, StoryObj } from '@storybook/vue3'

import ContactNumber from './ContactNumber.vue'

const meta: Meta<typeof ContactNumber> = {
  component: ContactNumber
}

export default meta

type Story = StoryObj<typeof ContactNumber>

export const Default: Story = {
  render: () => ({
    components: { ContactNumber },
    template: '<ContactNumber />'
  })
}
