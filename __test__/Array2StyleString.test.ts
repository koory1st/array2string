/** @format */
import {array2StyleString} from '../src/Array2StyleString'

describe('Test of Array2StyleString', () => {
  test('[] => null', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = []
    expect(array2StyleString(input)).toBeNull()
  })
  test('["color:red", "font-size:10px"] => "color:red;font-size:10px;"', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = ['color:red', 'font-size:10px']
    expect(array2StyleString(input)).toBe('color:red;font-size:10px;')
  })
  test('["color:red;", "font-size:10px;"] => "color:red;font-size:10px;"', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = ['color:red;', 'font-size:10px;']
    expect(array2StyleString(input)).toBe('color:red;font-size:10px;')
  })
  test('[["color", "red"],["font-size", "10px"]] => "color:red;font-size:10px;"', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = [
      ['color', 'red'],
      ['font-size', '10px'],
    ]
    expect(array2StyleString(input)).toBe('color:red;font-size:10px;')
  })
  test('[["color", "red"],["font-size", 10]] => "color:red;font-size:10px;"', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = [
      ['color', 'red'],
      ['font-size', 10],
    ]
    expect(array2StyleString(input)).toBe('color:red;font-size:10px;')
  })
  test('[["color", "red", false],["font-size", 10, false]] => null', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = [
      ['color', 'red', false],
      ['font-size', 10, false],
    ]
    expect(array2StyleString(input)).toBeNull()
  })
  test('[["color", "red", true],["font-size", 10, true]] => "color:red;font-size:10px;"', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = [
      ['color', 'red', true],
      ['font-size', 10, true],
    ]
    expect(array2StyleString(input)).toBe('color:red;font-size:10px;')
  })
  test('[["color", undefined],["font-size", 10]] => "font-size:10px;"', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = [
      ['color', undefined],
      ['font-size', 10],
    ]
    expect(array2StyleString(input)).toBe('font-size:10px;')
  })
  test('[["color", null],["font-size", 10]] => "font-size:10px;"', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = [
      ['color', null],
      ['font-size', 10],
    ]
    expect(array2StyleString(input)).toBe('font-size:10px;')
  })
  test('[["color", ""],["font-size", 10]] => "font-size:10px;"', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = [
      ['color', ''],
      ['font-size', 10],
    ]
    expect(array2StyleString(input)).toBe('font-size:10px;')
  })
  test('[["font-size", 0]] => "font-size:0;"', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = [['font-size', 0]]
    expect(array2StyleString(input)).toBe('font-size:0;')
  })
  test('[["color", ""],["z-index", 10]] => "z-index:10;"', () => {
    const input: (
      | string
      | string[]
      | [string, number]
      | [string, null]
      | [string, undefined]
      | [string, string, boolean]
      | [string, number, boolean]
    )[] = [
      ['color', ''],
      ['z-index', 10],
    ]
    expect(array2StyleString(input)).toBe('z-index:10;')
  })
})
