import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product, ProductList } from "../data/product";

@Injectable({providedIn: 'root'})
export class ConfigService {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  getProducts = () => {
    return this.http.get<ProductList>('https://dummyjson.com/products?limit=50');
    }

    
}