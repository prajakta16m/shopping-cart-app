import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../data/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cartList: Product[] = [];

  constructor(
    public cartService: CartService
  ){}

  removeItem(product: Product) {
      this.cartService.removeFromCart(product);
      this.cartList = this.cartService.cartItems;
  }

  ngOnInit(): void {
    this.cartList = this.cartService.cartItems;
  }

}
