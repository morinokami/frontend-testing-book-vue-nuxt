import { fireEvent, render, screen } from '@testing-library/vue'
import { vi } from 'vitest'

import RegisterDeliveryAddress from './RegisterDeliveryAddress.vue'

describe('新しいお届け先を登録しますか？', () => {
  test('ラジオボタンをクリックすると、コールバックハンドラが呼ばれる', () => {
    const fn = vi.fn()
    render(RegisterDeliveryAddress, { props: { onChange: fn } })
    fireEvent.click(screen.getByLabelText('いいえ'))
    expect(fn).toHaveBeenCalledWith(false)
    fireEvent.click(screen.getByLabelText('はい'))
    expect(fn).toHaveBeenCalledWith(true)
  })
})
