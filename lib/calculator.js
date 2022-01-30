const print = {
  summonthly(costs) {
    return costs.map(cost => {
      return cost.cost
    }).reduce((a, b) => {
      return a + b.monthly
    }, 0)
  }
}

export default print