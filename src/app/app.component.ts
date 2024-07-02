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
      
      this.count = cartCount();
      let x = document.getElementById("cartAnimation");
      if(x && this.count > 0){
        x.style.transform = "rotate(-15deg)";
        setTimeout(() => {
          x.style.transform = "rotate(0deg)";
        },200);
      }
    });
  }

  
}
