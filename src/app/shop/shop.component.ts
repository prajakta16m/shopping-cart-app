import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { CommonModule } from '@angular/common';
import { Product, ProductList } from '../../data/product';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  constructor(
    public configService: ConfigService,
    public cartService: CartService
  ){

  }
  getProducts$ = this.configService.getProducts();

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
