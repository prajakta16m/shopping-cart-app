import { Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../data/product';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../data/cartItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cartList: CartItem[] = [];

  totalCartPrice = signal(0);

  constructor(
    public cartService: CartService
  ){}

  removeItem(product: Product) {
      this.cartService.removeFromCart(product);
      this.cartList = this.cartService.cartList;

      this.setCartPrice();
  }

  onInputChange(item: CartItem, _event: any) {
    this.setCartPrice();
    if(_event.target.value == 0){
      this.removeItem(item.product);
    }
  }

  setCartPrice() {

    if(this.cartList.length > 0) {
      this.cartList.forEach(prod => 
        prod.totalPrice = prod.count * prod.price
      );
      let val = this.cartList.map(prod => prod.totalPrice).reduce((a,b) => a+b);
      this.totalCartPrice.set(Math.round(val * 100) / 100);
    }
    
  }

  ngOnInit(): void {
    this.cartList = this.cartService.cartList;
    this.setCartPrice();
  }

}
