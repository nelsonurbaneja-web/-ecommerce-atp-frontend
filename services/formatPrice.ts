export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("US", {
    style: "currency",
    currency: "USD"
  }).format(price)
}