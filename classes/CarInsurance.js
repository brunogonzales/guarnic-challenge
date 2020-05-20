const Product = require('./Product.js')
const { productNames } = require('../constants.js')

class CarInsurance {
  constructor(products = []) {
    this.products = products.map((product) => new Product(product))
  }

  updatePrice() {
    this.products = this.products.map((product) => {
      const maxPrice = 50
      const minPrice = 0
      let updatedDaysLeft = product.daysLeftToSell - 1
      let updatedPrice = product.price
      let priceDifference = 0
      let differenceFactor = 1

      if (updatedDaysLeft <= 0) differenceFactor++

      switch (product.name) {
        case productNames.FULL_COVERAGE:
          priceDifference++
          break
        case productNames.MEGA_COVERAGE:
          return { ...product, price: 80 }
        case productNames.SPECIAL_FULL_COVERAGE:
          if (product.daysLeftToSell <= 0) {
            updatedPrice = 0
          } else if (product.daysLeftToSell <= 5) {
            priceDifference += 3
          } else if (product.daysLeftToSell <= 10) {
            priceDifference += 2
          } else {
            priceDifference++
          }
          break
        case productNames.SUPER_SALE:
          priceDifference = -1
          differenceFactor++
          break
        default:
          updatedPrice--
      }

      updatedPrice += priceDifference * differenceFactor
      updatedPrice = updatedPrice <= maxPrice ? updatedPrice : maxPrice
      updatedPrice = updatedPrice >= minPrice ? updatedPrice : minPrice

      return {
        ...product,
        price: updatedPrice,
        daysLeftToSell: updatedDaysLeft
      }
    })
  }

  printProducts() {
    this.products.forEach(({ name, daysLeftToSell, price }) => {
      console.log(name, daysLeftToSell, price)
    })
  }
}

module.exports = CarInsurance
