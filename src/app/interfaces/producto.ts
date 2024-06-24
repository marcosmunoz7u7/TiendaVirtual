export interface Productos{
  id: number,
  title: string,
  price: number,
  category: Category,
  description?: string,
  image: string,
  rating: Rating,

}

export enum Category{
  Electronics = "electronics",
  Jewelery= "jewelery",
  MenSCloting= "men's cloting",
  WomenSCloting= "women's cloting",
}

export interface Rating{
  rate: number,
  count: number,
}
export interface ProducsArray{
  results: Productos[];
}

