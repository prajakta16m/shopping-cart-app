import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ConfigService {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  getProducts = () => {
    this.http.get<any>('https://dummyjson.com/products?limit=10').subscribe(response => {
        // process the configuration.
        console.log(response);
      });
    }
}