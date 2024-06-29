import { Component, effect } from '@angular/core';
import { CartService } from '../services/cart.service';
import { cartCount } from '../services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-cart';
  count = cartCount();

  constructor(
    public cartService: CartService
  ){
    effect(() => {
      console.log(`The current count is: ${cartCount()}`);
      this.count = cartCount();
    });
  }

  
}
