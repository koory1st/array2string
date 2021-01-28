import { array2string } from '../src/index'

describe('Test array2string', () => {
  test('empty array', () => {
    const input: Array<string | [string, boolean?]> = []
    expect(array2string(input)).toEqual(null)
  })
  test('string item', () => {
    const input: Array<string | [string, boolean?]> = ['aaa', 'bbb']
    expect(array2string(input)).toEqual('aaa bbb')
  })
  test('string item no empty', () => {
    const input: Array<string | [string, boolean?]> = ['aaa', 'bbb']
    expect(array2string(input)).toEqual('aaa bbb')
  })
  test('string item with empty', () => {
    const input: Array<string | [string, boolean?]> = ['aaa', '', 'bbb']
    expect(array2string(input)).toEqual('aaa bbb')
  })

  test('array with tuple string', () => {
    const input: Array<string | [string, boolean?]> = ['aaa', 'bbb', ['ccc']]
    expect(array2string(input)).toEqual('aaa bbb ccc')
  })
  test('array with tuple string and boolean', () => {
    const input: Array<string | [string, boolean?]> = [
      'aaa',
      'bbb',
      ['ccc', false],
    ]
    expect(array2string(input)).toEqual('aaa bbb')
  })
})
