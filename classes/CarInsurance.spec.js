const CarInsurance = require('./CarInsurance.js')
jest.mock('./CarInsurance.js')

const sampleProducts = [
  { name: 'Medium Coverage', daysLeftToSell: 10, price: 20 },
  { name: 'Full Coverage', daysLeftToSell: 2, price: 0 },
  { name: 'Low Coverage', daysLeftToSell: 5, price: 7 }
]

beforeEach(() => {
  CarInsurance.mockClear()
})

it('calls the CarInsurance class constructor', () => {
  const carInsurance = new CarInsurance()
  expect(CarInsurance).toHaveBeenCalledTimes(1)
})
