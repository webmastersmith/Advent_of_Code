import * as fs from 'fs'

const coords = fs
  .readFileSync('./day2/coords.txt', 'utf-8')
  .split(/\r?\n/)
  .map((line) => line.split(' '))
  .map((arr) => [arr[0], +arr[1]])

// day 2, challenge 1. What do you get if you multiply your final horizontal position by your final depth?
const testCoords = [
  ['forward', 5],
  ['down', 5],
  ['forward', 8],
  ['up', 3],
  ['down', 8],
  ['forward', 2],
] // 150

function findLocation(coords) {
  let horizontal = 0
  let depth = 0
  for (const coord of coords) {
    // prettier-ignore
    coord[0] === 'forward' ? horizontal += coord[1] 
        : coord[0] === 'up' ? depth -= coord[1]
        : coord[0] === 'down' ? depth += coord[1]
        : ''
  }
  return horizontal * depth
}

console.log(findLocation(coords)) // 1727835
