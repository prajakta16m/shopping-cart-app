import { Injectable, signal } from "@angular/core";
import { Product } from "../data/product";
import { CartItem } from "../data/cartItem";

export const cartCount =  signal(0);

@Injectable({ providedIn: 'root'})
export class CartService {

    public cartItems: Product[] = [];

    addToCart = (product: Product) => {
        this.cartItems.push(product);
        

        cartCount.set(this.cartItems.length);
    }

    removeFromCart = (product: Product) => {
        this.cartItems = this.cartItems.filter(
            (prod) => { return prod.id != product.id });

        cartCount.set(this.cartItems.length);
    }
  
}