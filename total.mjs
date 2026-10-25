export const total = (prices, discount = 0) => {
  if (discount < 0 || discount > 100) {
    throw new RangeError('discount must be between 0 and 100')
  }

  const subtotal = prices.reduce((sum, price) => sum + price, 0)
  return (subtotal * (100 - discount)) / 100
}
