import { sweeps } from './sweep.mjs'
;(async function () {
  // 2. sum three measurements and check if latest sum is larger than the previous measurement?
  let sweepCount = 0

  for (let i = 0; i < sweeps.length - 2; i++) {
    const prevSum = sweeps[i - 1] + sweeps[i] + sweeps[i + 1] || Infinity
    const sum = sweeps[i] + sweeps[i + 1] + sweeps[i + 2]

    // check if sum is bigger than prevSum
    if (sum > prevSum) sweepCount++
  }

  console.log(sweepCount)
})()
