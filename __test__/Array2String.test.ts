/** @format */

import {array2string} from '../src/index'

describe('Test array2string', () => {
  /** [] => null */
  test('empty array', () => {
    const input: (string | string[] | [string, boolean])[] = []
    expect(array2string(input)).toEqual(null)
  })
  /** ["abc","efg"] => "abc efg" */
  test('string item', () => {
    const input: (string | string[] | [string, boolean])[] = ['aaa', 'bbb']
    expect(array2string(input)).toEqual('aaa bbb')
  })
  /** ["abc","", "efg"] => "abc efg" */
  test('string item with empty', () => {
    const input: (string | string[] | [string, boolean])[] = ['aaa', '', 'bbb']
    expect(array2string(input)).toEqual('aaa bbb')
  })

  /** ["abc", ["efg"]] => "abc efg" */
  test('array with tuple string', () => {
    const input: (string | string[] | [string, boolean])[] = ['aaa', 'bbb', ['ccc']]
    expect(array2string(input)).toEqual('aaa bbb ccc')
  })
  /** ["abc", ["efg", false]] => "abc" */
  test('array with tuple string and boolean', () => {
    const input: (string | string[] | [string, boolean])[] = ['aaa', 'bbb', ['ccc', false]]
    expect(array2string(input)).toEqual('aaa bbb')
  })
  /** ["abc", ["efg", true]] => "abc efg" */
  test('array with tuple string and boolean', () => {
    const input: (string | string[] | [string, boolean])[] = ['aaa', 'bbb', ['ccc', true]]
    expect(array2string(input)).toEqual('aaa bbb ccc')
  })
})
