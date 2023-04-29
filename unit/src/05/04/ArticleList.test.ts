import { afterEach, expect, test } from 'vitest'

import { cleanup, render, screen, within } from '@testing-library/vue'
import ArticleListVue from './ArticleList.vue'
import { items } from './fixture'

afterEach(() => {
  cleanup()
})

test('タイトルの表示', () => {
  render(ArticleListVue, { props: { items } })
  expect(screen.getByRole('heading', { name: '記事一覧' })).toBeInTheDocument()
})

test('items の数だけ一覧表示される', () => {
  render(ArticleListVue, { props: { items } })
  expect(screen.getAllByRole('listitem')).toHaveLength(3)
})

test('items の数だけ一覧表示される', () => {
  render(ArticleListVue, { props: { items } })
  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
  expect(within(list).getAllByRole('listitem')).toHaveLength(3)
})

test('一覧アイテムが空のとき「投稿記事がありません」が表示される', () => {
  render(ArticleListVue, { props: { items: [] } })
  const list = screen.queryByRole('list')
  expect(list).not.toBeInTheDocument()
  expect(list).toBeNull()
  expect(screen.getByText('投稿記事がありません')).toBeInTheDocument()
})

test('Snapshot: items の数だけ一覧表示される', () => {
  const { container } = render(ArticleListVue, { props: { items } })
  expect(container).toMatchSnapshot()
})
