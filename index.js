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

const qualityCosts = calculator.summonthly(scenario.costs.quality)
const survivalCosts = calculator.summonthly(scenario.costs.survival)
const totalcosts = qualityCosts + survivalCosts

console.log(`Welcome to FIRE Calc!`);
console.log(`-> Loaded scenario ${scenario.name}`)
console.log()

console.log()
console.log(print.bold('Survival costs'))
console.log('Here is an overview of the costs you need to survive.')
console.log()
print.costsTable(scenario.costs.survival, survivalCosts)

console.log()
console.log(print.bold('Quality-of-Life costs'))
console.log('In addition to surviving, here is what you need to spend for an enjoyable life.')
console.log()
print.costsTable(scenario.costs.quality, qualityCosts)

const fourPercentRequirement = totalcosts * 12 / 0.04;

console.log()
console.log(`-> Your monthly costs add up to ${print.bold(print.currency(totalcosts))}`)
console.log(`-> To be able to withdraw 4 % you will need to have at least ${print.bold(print.currency(fourPercentRequirement))} invested`)
console.log()
