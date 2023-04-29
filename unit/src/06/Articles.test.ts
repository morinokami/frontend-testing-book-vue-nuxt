import { afterEach, expect, test } from 'vitest'

import { cleanup, render, screen } from '@testing-library/vue'
import Articles from './Articles.vue'

afterEach(() => {
  cleanup()
})

test.skip('読み込み中の場合「..loading」が表示される', () => {
  render(Articles, { props: { items: [], isLoading: true } })
  expect(screen.getByText('...loading')).toBeInTheDocument()
})

test.skip('一覧要素が空の場合「投稿記事がありません」が表示される', () => {
  render(Articles, { props: { items: [], isLoading: false } })
  expect(screen.getByText('投稿記事がありません')).toBeInTheDocument()
})

test('一覧要素がある場合、一覧が表示される', () => {
  const items = [
    { id: 1, title: 'Testing Next.js' },
    { id: 2, title: 'Storybook play function' },
    { id: 3, title: 'Visual Regression Testing ' }
  ]
  render(Articles, { props: { items, isLoading: false } })
  expect(screen.getByRole('list')).toBeInTheDocument()
})
