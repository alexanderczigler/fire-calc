import { readFile } from 'fs/promises';
import calculator from './lib/calculator.js'
import print from './lib/print.js'

const scenario = JSON.parse(
  await readFile('./default.json')
);

scenario.costs.quality.forEach(({ cost }) => {
  if (!cost.monthly) {
    cost.monthly = cost.yearly / 12
  }
})

const qualitycosts = calculator.summonthly(scenario.costs.quality)
const survivalcosts = calculator.summonthly(scenario.costs.survival)
const totalcosts = qualitycosts + survivalcosts

console.log(`Welcome to FIRE Calc!`);
console.log(`-> Loaded scenario ${scenario.name}`)
console.log()

print.costsTable(scenario.costs.quality, 'Quality')

const fourPercentRequirement = totalcosts * 12 / 0.04;

console.log()
console.log(`-> Your monthly costs add up to ${print.currency(totalcosts)}`)
console.log(`-> To be able to withdraw 4 % you will need to have at least ${print.currency(fourPercentRequirement)} invested`)
console.log()
