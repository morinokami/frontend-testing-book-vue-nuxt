import type { Meta, StoryObj } from '@storybook/vue3'

import Agreement from './Agreement.vue'

const meta: Meta<typeof Agreement> = {
  component: Agreement
}

export default meta

type Story = StoryObj<typeof Agreement>

export const Default: Story = {
  render: () => ({
    components: { Agreement },
    template: '<Agreement />'
  })
}
