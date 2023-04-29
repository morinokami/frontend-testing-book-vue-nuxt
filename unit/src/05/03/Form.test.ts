import { cleanup, fireEvent, logRoles, render, screen } from '@testing-library/vue'
import { afterEach, expect, test, vi } from 'vitest'

import Form from './Form.vue'

// https://vitest.dev/guide/migration.html#migrating-from-jest の理由により、
// 明示的に cleanup (https://testing-library.com/docs/vue-testing-library/api#cleanup)
// を呼び出す必要がある。
// vitest.config.ts において globals: true とすればこれは不要となる。
afterEach(() => {
  cleanup()
})

test('名前の表示', () => {
  render(Form, { props: { name: 'taro' } })
  expect(screen.getByText('taro')).toBeInTheDocument()
})

test('ボタンの表示', () => {
  render(Form, { props: { name: 'taro' } })
  expect(screen.getByRole('button')).toBeInTheDocument()
})

test('見出しの表示', () => {
  render(Form, { props: { name: 'taro' } })
  expect(screen.getByRole('heading')).toHaveTextContent('アカウント情報')
})

test('ボタンを押下すると、イベントハンドラーが呼ばれる', () => {
  const mockFn = vi.fn()
  render(Form, { props: { name: 'taro', onSubmit: mockFn } })
  fireEvent.click(screen.getByRole('button'))
  expect(mockFn).toHaveBeenCalled()
})

test('Snapshot: アカウント名「taro」が表示される', () => {
  const { container } = render(Form, { props: { name: 'taro' } })
  expect(container).toMatchSnapshot()
})

test('logRoles: レンダリング結果からロール・アクセシブルネームを確認', () => {
  const { container } = render(Form, { props: { name: 'taro' } })
  // NOTE: container が HTMLElement でないため型エラーが発生する
  logRoles(container)
})
