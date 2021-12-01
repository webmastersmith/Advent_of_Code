import { sweeps } from './sweep.mjs'
;(async function () {
  // 1 many measurements are larger than the previous measurement?
  //   const sweep = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
  // tried 1094, not right.
  let sweepCount = 0
  let oldSum = 0

  for (let i = 0; i < sweeps.length; i++) {
    // check for at least three indexes left in array.
    if (sweeps.length - 2 <= i) {
      //   console.log(i)
      continue
    }
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
    // sum was equal or smaller than oldSum, just continue
    oldSum = sum
    continue
  }

  console.log(sweepCount)
})()
