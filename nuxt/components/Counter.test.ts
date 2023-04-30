import { render, screen } from '@testing-library/vue'

import Counter from './Counter.vue'

describe('Counter', () => {
  it('renders properly', () => {
    render(Counter)
    expect(screen.getByText('Counter: 0')).toBeInTheDocument()
  })
})
