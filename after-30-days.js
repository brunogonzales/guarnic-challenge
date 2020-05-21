const { initialProducts } = require('./constants.js')
const CarInsurance = require('./classes/CarInsurance.js')

const carInsurance = new CarInsurance(initialProducts)

const printProductsAfterDays = (days) => {
  for (let i = 1; i <= days; i++) {
    console.log(`-------- day ${i} --------`)
    console.log('name', 'daysLeftToSell', 'price')
    carInsurance.printProducts()
    carInsurance.updatePrice()
  }
}

printProductsAfterDays(30)
