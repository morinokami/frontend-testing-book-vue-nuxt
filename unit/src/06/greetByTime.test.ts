import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { greetByTime } from './greetByTime'

describe('greetByTime(', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  // (1) 「おはよう」を返す関数
  test('朝は「おはよう」を返す', () => {
    vi.setSystemTime(new Date(2023, 4, 23, 8, 0, 0))
    expect(greetByTime()).toBe('おはよう')
  })
  // (2) 「こんにちは」を返す関数
  test.skip('昼は「こんにちは」を返す', () => {
    vi.setSystemTime(new Date(2023, 4, 23, 14, 0, 0))
    expect(greetByTime()).toBe('こんにちは')
  })
  // (3) 「こんばんは」を返す関数
  test.skip('夜は「こんばんは」を返す', () => {
    vi.setSystemTime(new Date(2023, 4, 23, 21, 0, 0))
    expect(greetByTime()).toBe('こんばんは')
  })
})
