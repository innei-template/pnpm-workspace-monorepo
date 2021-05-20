import { range } from 'lodash-es'
import { getTime } from 'utils'
const test = () => {
  console.log('hello, rollup')
  range(0, 10).map(console.log)
}
export const date = getTime()
export { test }
