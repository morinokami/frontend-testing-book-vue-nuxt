import type { Meta, StoryObj } from '@storybook/vue3'

import Counter from './Counter.vue'

const meta: Meta<typeof Counter> = {
  component: Counter
}

export default meta

type Story = StoryObj<typeof Counter>

export const Default: Story = {
  render: () => ({
    components: { Counter },
    template: '<Counter />'
  })
}
