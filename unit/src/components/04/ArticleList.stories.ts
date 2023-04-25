import type { Meta, StoryObj } from '@storybook/vue3'

import ArticleList from './ArticleList.vue'
import { items } from './fixture'

const meta: Meta<typeof ArticleList> = {
  title: 'ArticleList',
  component: ArticleList
}

export default meta

export const Default: StoryObj<typeof ArticleList> = {
  render: (args) => ({
    components: { ArticleList },
    setup() {
      return { args }
    },
    template: '<ArticleList v-bind="args" />'
  }),
  args: { items }
}

export const NoItems: StoryObj<typeof ArticleList> = {
  render: (args) => ({
    components: { ArticleList },
    setup() {
      return { args }
    },
    template: '<ArticleList v-bind="args" />'
  }),
  args: { items: [] }
}
