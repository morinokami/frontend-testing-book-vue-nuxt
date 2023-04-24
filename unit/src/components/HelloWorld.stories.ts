import type { Meta, StoryObj } from '@storybook/vue3'

import HelloWorld from './HelloWorld.vue'

const meta: Meta<typeof HelloWorld> = {
  title: 'HelloWorld',
  component: HelloWorld
}

export default meta

export const Default: StoryObj<typeof HelloWorld> = {
  render: () => ({
    components: { HelloWorld },
    template: '<HelloWorld msg="Hello Storybook" />'
  })
}
