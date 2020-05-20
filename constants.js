const productNames = {
  MEDIUM_COVERAGE: 'Medium Coverage',
  FULL_COVERAGE: 'Full Coverage',
  LOW_COVERAGE: 'Low Coverage',
  MEGA_COVERAGE: 'Mega Coverage',
  SPECIAL_FULL_COVERAGE: 'Special Full Coverage',
  SUPER_SALE: 'Super Sale'
}

const initialProducts = [
  { name: 'Medium Coverage', daysLeftToSell: 10, price: 20 },
  { name: 'Full Coverage', daysLeftToSell: 2, price: 0 },
  { name: 'Low Coverage', daysLeftToSell: 5, price: 7 },
  { name: 'Mega Coverage', daysLeftToSell: 0, price: 80 },
  { name: 'Mega Coverage', daysLeftToSell: -1, price: 80 },
  { name: 'Special Full Coverage', daysLeftToSell: 15, price: 20 },
  { name: 'Special Full Coverage', daysLeftToSell: 10, price: 49 },
  { name: 'Special Full Coverage', daysLeftToSell: 5, price: 49 },
  { name: 'Super Sale', daysLeftToSell: 3, price: 6 }
]

module.exports = {
  productNames,
  initialProducts
}
