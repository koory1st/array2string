/** @format */

/**
 * array2StyleString
 * [] => null
 * ["color:red", "font-size:10px"] => "color:red;font-size:10px;"
 * ["color:red;", "font-size:10px;"] => "color:red;font-size:10px;"
 * [["color", "red"],["font-size", "10px"]] => "color:red;font-size:10px;"
 * [["color", "red"],["font-size", 10]] => "color:red;font-size:10px;"
 * [["color", "red", false],["font-size", 10, false]] => null
 * [["color", "red", true],["font-size", 10, true]] => "color:red;font-size:10px;"
 * [["color", ""],["font-size", 10]] => "font-size:10px;"
 * [["font-size", 0]] => "font-size:0;"
 *
 * @param input
 */
export function array2StyleString(
  input: (string | string[] | [string, number] | [string, string, boolean] | [string, number, boolean])[],
): string | null {
  if (!input || input.length === 0) {
    return null
  }

  let rt = ''
  for (const item of input) {
    // ["color:red", "font-size:10px"]
    if (typeof item === 'string') {
      rt += item
      if (!rt.endsWith(';')) {
        rt += ';'
      }
      continue
    }

    // [["color", "red", false],["font-size", 10, false]]
    if (item.length > 2 && !item[2]) {
      continue
    }

    const key = item[0]
    let value = item[1]

    // [["color", ""],["font-size", 10]] => "font-size:10px;"
    if (typeof value === 'string' && !value) {
      continue
    }

    // [["color", "red"],["font-size", 10]]
    if (typeof value === 'number' && value) {
      value = value + 'px'
    }
    rt += key + ':' + value

    if (!rt.endsWith(';')) {
      rt += ';'
    }
  }

  return rt ? rt : null
}
