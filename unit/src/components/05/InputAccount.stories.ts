import type { Meta, StoryObj } from '@storybook/vue3'

import InputAccount from './InputAccount.vue'

const meta: Meta<typeof InputAccount> = {
  component: InputAccount
}

export default meta

type Story = StoryObj<typeof InputAccount>

export const Default: Story = {
  render: () => ({
    components: { InputAccount },
    template: '<InputAccount />'
  })
}
