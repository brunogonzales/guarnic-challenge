const Product = require('./Product.js')
const { productNames } = require('../constants')
jest.mock('./Product.js')

beforeEach(() => {
  Product.mockClear()
})

it('calls the Product constructor with the right props', () => {
  const superSaleProduct = new Product({
    name: productNames.SUPER_SALE_COVERAGE,
    price: 4,
    daysLeftToSell: 10
  })
  expect(Product).toHaveBeenCalledTimes(1)
  expect(superSaleProduct.name).toEqual(productNames.SUPER_SALE_COVERAGE)
})
