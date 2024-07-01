export type ProductList = {
    products: Product[]
};
export type Product = {
    id: number,
    title: string,
    thumbnail: string,
    discountPercentage: number,
    price: number,
    rating: number
};