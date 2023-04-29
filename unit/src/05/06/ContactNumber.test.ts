import { render, screen } from '@testing-library/vue'

import ContactNumber from './ContactNumber.vue'

describe('連絡先', () => {
  test('タイトル', () => {
    render(ContactNumber)
    expect(screen.getByText('連絡先')).toBeInTheDocument()
  })
  test('電話番号', () => {
    render(ContactNumber)
    expect(screen.getByLabelText('電話番号')).toBeInTheDocument()
  })
  test('お名前', () => {
    render(ContactNumber)
    expect(screen.getByLabelText('お名前')).toBeInTheDocument()
  })
})
