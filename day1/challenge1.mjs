import { sweeps } from './sweep.mjs'
;(async function () {
  // 1. How many measurements are larger than the previous measurement?
  let sweepCount = 0
  sweeps.reduce((acc, cur, i) => {
    if (i === 0) return cur
    if (cur > acc) {
      sweepCount++
      return cur
    }
    return cur
  }, 0)
  console.log(sweepCount)
})()
