import { cleanup, render, screen } from '@testing-library/vue'
import { afterEach, describe, expect, test } from 'vitest'

import PastDeliveryAddress from './PastDeliveryAddress.vue'

afterEach(() => {
  cleanup()
})

describe('過去のお届け先', () => {
  const options = [
    {
      id: 'xxx',
      value: 'xxx',
      'v-html': '〒167-0051 東京都杉並区荻窪1-00-00'
    }
  ]
  test('disabled={true} の場合、combobox も非活性', () => {
    render(PastDeliveryAddress, { props: { disabled: true, options } })
    expect(screen.getByRole('combobox')).toBeDisabled()
  })
})
