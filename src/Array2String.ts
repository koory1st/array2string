/** @format */

import {ArgumentError} from './ErrorUtil'
/**
 * array2string
 * @param arrayInput
 */
export function array2string(arrayInput: Array<string | [string, boolean?]>): string | null {
  if (!arrayInput || arrayInput.length === 0) {
    return null
  }
  let rtValue = ''

  for (const item of arrayInput) {
    if (typeof item === 'string') {
      if (item) {
        if (rtValue) {
          rtValue += ' '
        }
        rtValue += item
      }
      continue
    }

    if (item instanceof Array) {
      const classString = item[0]
      if (typeof classString !== 'string') {
        throw new ArgumentError('Error type of 1st argument.')
      }
      if (item.length === 1) {
        if (classString) {
          if (rtValue) {
            rtValue += ' '
          }
          rtValue += classString
        }
        continue
      }

      if (classString && item[1]) {
        if (rtValue) {
          rtValue += ' '
        }
        rtValue += classString
        continue
      }
    }
  }

  return rtValue
}
