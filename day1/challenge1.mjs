import * as fs from 'fs'

const sweeps = fs
  .readFileSync('./day1/sweeps.txt', 'utf-8')
  .split(/\r?\n/)
  .map((num) => +num)

// Challenge 1. How many measurements are larger than the previous measurement?
const sweepCount = sweeps.reduce(
  (acc, cur, i) => ((sweeps[i - 1] || Infinity) < cur ? acc + 1 : acc),
  0
)
console.log(sweepCount) //1446
