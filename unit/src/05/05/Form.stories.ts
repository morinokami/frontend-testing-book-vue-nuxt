import type { Meta, StoryObj } from '@storybook/vue3'

import Form from './Form.vue'

const meta: Meta<typeof Form> = {
  component: Form
}

export default meta

type Story = StoryObj<typeof Form>

export const Default: Story = {
  render: () => ({
    components: { Form },
    template: '<Form v-bind="args" />'
  })
}
