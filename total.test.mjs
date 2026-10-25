import test from 'node:test'
import assert from 'node:assert/strict'
import { total } from './total.mjs'

test('adds the prices', () => {
  assert.equal(total([10, 20, 5]), 35)
})

test('applies the default discount of 0', () => {
  assert.equal(total([10, 20, 5], 0), 35)
})

test('applies a 10% discount', () => {
  assert.equal(total([10, 20, 5], 10), 31.5)
})

test('applies a 100% discount', () => {
  assert.equal(total([10, 20, 5], 100), 0)
})

test('returns 0 for an empty array', () => {
  assert.equal(total([], 10), 0)
})

test('rejects percentages below 0', () => {
  assert.throws(() => total([10, 20, 5], -1), {
    name: 'RangeError',
    message: /between 0 and 100/,
  })
})

test('rejects percentages above 100', () => {
  assert.throws(() => total([10, 20, 5], 101), {
    name: 'RangeError',
    message: /between 0 and 100/,
  })
})
