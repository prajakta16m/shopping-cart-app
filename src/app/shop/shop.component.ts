import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Observable, Observer } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {

  private loading: boolean = false;
  private products: Observable<any[]> | undefined;

  constructor(
    public configService: ConfigService
  ){

  }
  getProducts$ = this.configService.getProducts();
  ngOnInit(): void {
    
  }
  
  


}
