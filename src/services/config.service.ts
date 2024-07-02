import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductList } from "../data/product";
import { Observable } from "rxjs/internal/Observable";

@Injectable({providedIn: 'root'})
export class ConfigService {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  getProducts(): Observable<ProductList> {
    return this.http.get<ProductList>('https://dummyjson.com/products?limit=50');
    }

    
}