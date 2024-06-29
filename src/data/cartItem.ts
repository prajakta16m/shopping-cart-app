import { Product } from "./product"

export type CartItem = {
    product: Product,
    count: number,
    price: number,
    totalPrice: number
}