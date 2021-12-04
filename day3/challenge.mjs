import * as fs from 'fs'
const binaries = fs.readFileSync('./day3/binary.txt', 'utf-8').split(/\r?\n/)
const lineLength = binaries[0].length

// Day 3, Challenge 1: Power Consumption -----------------------------------------------------------
function getPowerRating(binary, type, n, i = 0, p = '') {
  if (n === 0) return parseInt(p, 2)
  p = p + getMostCommonBit(binary, type, i)
  return getPowerRating(binary, type, n - 1, i + 1, p)
}
const powerRating = getPowerRating(binaries, 'gamma', lineLength) * getPowerRating(binaries, 'epsilon', lineLength)
console.log(powerRating) // testBinary.txt: 198, binary.txt: 738234


// Day3, Challenge 2: Life Support -----------------------------------------------------------------
function getLifeSupport(binary, type, n, i = 0) {
  if (n === 0) return parseInt(binary.join(''), 2)
  if (binary.length === 1) return parseInt(binary.join(''), 2)
  binary = binary.filter((bin) => bin.indexOf(getMostCommonBit(binary, type, i), i) === i)
  return getLifeSupport(binary, type, n - 1, i + 1)
}
const lifeSupport = getLifeSupport(binaries, 'oxygen', lineLength) * getLifeSupport(binaries, 'c02', lineLength)
console.log(lifeSupport) // testBinary: 230, binary: 3969126


// Utils -------------------------------------------------------------------------------------------
function getMostCommonBit(binary, type, i) {
  return (type === 'gamma' || type === 'oxygen') 
    ? binary.filter((bin) => bin[i] === '1').length / binary.length >= 0.5 ? '1' : '0'
    : binary.filter((bin) => bin[i] === '1').length / binary.length < 0.5 ? '1' : '0'
}
