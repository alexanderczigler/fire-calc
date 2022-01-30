import chalk from 'Chalk'

const tableHead = () => {
  console.log('Item | Monthly cost | 4 % coverage')
  console.log('-----|--------------|--------------')
}

const tableFooter = () => {
  console.log('-----|--------------|--------------')
  console.log('     |              |')
}

const print = {
  currency: value => {
    const formatted = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(value)
    return `${chalk.bold(formatted)}`
  },
  costsTable: (costs, name) => {
    console.log(`Here are your ${name} costs`)
    tableHead()

    tableFooter()
  }
}

export default print