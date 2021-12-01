import { sweeps } from './sweep.mjs'
;(async function () {
  // 2 many measurements are larger than the previous measurement?
  //   const sweep = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

  let sweepCount = 0
  let oldSum = 0

  for (let i = 0; i < sweeps.length; i++) {
    // check for at least three indexes left in array.
    if (sweeps.length - 2 <= i) continue
    let a, b, c
    a = sweeps[i]
    b = sweeps[i + 1]
    c = sweeps[i + 2]
    const sum = a + b + c

    // if index is zero, nothing to compare to, so initialize oldSum with sum.
    if (i === 0) {
      oldSum = sum
      continue
    }

    // check if sum is bigger than oldSum
    if (sum > oldSum) {
      sweepCount++
      oldSum = sum
    }
    // sum was equal or smaller than oldSum, store value and continue
    oldSum = sum
    continue
  }

  console.log(sweepCount)
})()
