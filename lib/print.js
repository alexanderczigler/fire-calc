import chalk from 'Chalk'

const bold = value => chalk.bold(value)

const currency = value => {
  return new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(value)
  // return `${chalk.bold(formatted)}`
}

const tableHead = (nameLength, valueLength) => {
  console.log(` Name${pad(' ', nameLength - 3)} | Monthly cost`)
  console.log(`${pad('-', nameLength)}---|-${pad('-', 12)}-`)
}

const tableFooter = (nameLength, valueLength) => {
  console.log(`${pad('-', nameLength)}---|-${pad('-', 12)}-`)
}

const longest = names => {
  return names.reduce((a, b) => {
    return b.length > a ? b.length : a
  }, 0)
}

const pad = (c, l) => {
  let s = ''
  for (let i = 0; i < l; i++) {
    s += c
  }
  return s
}

const print = {
  bold,
  currency,
  costsTable: (costs, sum) => {
    const longestName = longest(costs.map(c => c.name))
    const longestValue = longest(costs.map(c => currency(c.name.monthly)))

    tableHead(longestName, longestValue)

    costs = costs.sort((a, b) => a.cost.monthly < b.cost.monthly ? 1 : -1)

    costs.forEach(cost => {
      const value = currency(cost.cost.monthly)
      console.log(` ${cost.name}${pad(' ', longestName - cost.name.length + 1)} | ${value}${pad(' ', 12 - value.length)}`)
    })


    tableFooter(longestName, longestValue)
    console.log(` SUM${pad(' ', longestName - 2)} | ${currency(sum)}${pad(' ', 12 - 3)}`)
  }
}

export default print
