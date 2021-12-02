import * as fs from 'fs'

const coords = fs
  .readFileSync('./day2/coords.txt', 'utf-8')
  .split(/\r?\n/)
  .map((line) => line.split(' '))
  .map((arr) => [arr[0], +arr[1]])

// day 2, challenge 2. What do you get if you multiply your final horizontal position by your final depth?
const testCoords = [
  ['forward', 5],
  ['down', 5],
  ['forward', 8],
  ['up', 3],
  ['down', 8],
  ['forward', 2],
] // 900

function findLocation(coords) {
  let horizontal = 0
  let depth = 0
  let aim = 0
  for (const coord of coords) {
    switch (coord[0]) {
      case 'forward':
        horizontal += coord[1]
        if (aim !== 0) depth += aim * coord[1]
        break
      case 'up':
        aim -= coord[1]
        break
      case 'down':
        aim += coord[1]
      default:
        break
    }
  }
  return horizontal * depth
}

console.log(findLocation(coords)) // 1544000595
