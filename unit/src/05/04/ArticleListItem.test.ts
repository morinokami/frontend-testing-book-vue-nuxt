import { afterEach, expect, test } from 'vitest'

import { cleanup, render, screen } from '@testing-library/vue'
import type { ItemProps } from './ArticleListItem.vue'
import ArticleListItem from './ArticleListItem.vue'

const item: ItemProps = {
  id: 'howto-testing-with-typescript',
  title: 'TypeScript を使ったテストの書き方',
  body: 'テストを書く時、TypeScript を使うことで、テストの保守性が向上します…'
}

afterEach(() => {
  cleanup()
})

test('ID に紐づいたリンクが表示される', () => {
  render(ArticleListItem, { props: item })
  expect(screen.getByRole('link', { name: 'もっと見る' })).toHaveAttribute(
    'href',
    '/articles/howto-testing-with-typescript'
  )
})

test('Snapshot: 一覧要素が表示される', () => {
  const { container } = render(ArticleListItem, { props: item })
  expect(container).toMatchSnapshot()
})
