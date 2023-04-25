import type { Meta, StoryObj } from '@storybook/vue3'

import Form from './Form.vue'

const meta: Meta<typeof Form> = {
  title: 'Form',
  component: Form
}

export default meta

type Story = StoryObj<typeof Form>

export const Default: Story = {
  render: (args) => ({
    components: { Form },
    setup() {
      return { args }
    },
    template: '<Form v-bind="args" />'
  }),
  args: { name: 'taro' }
}
