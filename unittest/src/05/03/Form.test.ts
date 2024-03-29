import { fireEvent, logRoles, render, screen } from '@testing-library/vue'

import Form from './Form.vue'

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
