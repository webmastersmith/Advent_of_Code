import * as fs from 'fs'
/*
Day 3, Challenge 1.
    Each binary number in report will generate two numbers (gamma, epsilon).
        Gamma: the most common bit, starting from [0] of all lines of binary data. (can be one or zero)
        Epsilon: least common bit (opposite of Gamma)
    Convert to decimal and multiply both numbers to get power consumption.
*/
const binaries = fs.readFileSync('./day3/binary.txt', 'utf-8').split(/\r?\n/)

const line = binaries[0]
const gamma = []
const epsilon = []
for (let i = 0; i < line.length; i++) {
  let one = 0
  let zero = 0
  // each line, check if one or zero.  Biggest number wins.
  for (const bin of binaries) {
    bin[i] === '1' ? one++ : zero++
  }
  if (one > zero) {
    gamma.push('1')
    epsilon.push('0')
  } else {
    gamma.push('0')
    epsilon.push('1')
  }
}
const powerConsumption =
  parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)

console.log(powerConsumption) // testBinary.txt: 198, binary.txt: 738234
