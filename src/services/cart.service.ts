import { Injectable, signal } from "@angular/core";
import { Product } from "../data/product";
import { CartItem } from "../data/cartItem";

export const cartCount =  signal(0);

@Injectable({ providedIn: 'root'})
export class CartService {

    public cartList: CartItem[] = [];

    addToCart = (product: Product) => {
   
        const index = this.cartList.findIndex((item => item.product.id == product.id));

        if(index > -1) {
            this.cartList[index].count = this.cartList[index].count + 1;
            // update prices
            this.cartList[index].totalPrice = (this.cartList[index].count * this.cartList[index].price);
        } else {
            this.cartList.push({
                product: product,
                count: 1,
                price: product.price,
                totalPrice: product.price
            })
        }

        cartCount.set(this.cartList.length);
    }

    removeFromCart = (product: Product) => {
   
        const index = this.cartList.findIndex((item => item.product.id == product.id));

        if(index > -1) {
            this.cartList.splice(index,1);
        } 

        cartCount.set(this.cartList.length);
    }
  
}