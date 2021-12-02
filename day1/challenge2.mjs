import * as fs from 'fs'

const sweeps = fs
  .readFileSync('./day1/sweeps.txt', 'utf-8')
  .split(/\r?\n/)
  .map((num) => +num)

// Challenge 2. sum three measurements and check if sum is larger than the previous sum.
let sweepCount = 0

for (let i = 0; i < sweeps.length - 2; i++) {
  const prevSum = sweeps[i - 1] + sweeps[i] + sweeps[i + 1] || Infinity
  const sum = sweeps[i] + sweeps[i + 1] + sweeps[i + 2]

  // check if sum is bigger than prevSum
  if (sum > prevSum) sweepCount++
}

console.log(sweepCount) //1486
