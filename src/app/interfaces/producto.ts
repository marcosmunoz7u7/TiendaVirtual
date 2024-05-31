export interface Products{
  id: number,
  name: string,
  money: ProductsPrices,
  category: number,
  description?: string,
  price: number
}

export interface ProductsPrices{
  cost: number,
  tax: number,
  price: number
}
