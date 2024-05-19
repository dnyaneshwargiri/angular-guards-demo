import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: any[] = []; // Assuming products is an array of any type

  constructor() {
    // Initialize products or fetch from API in real scenario
    this.products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ];
  }

  getProducts(): Observable<any[]> {
    // Simulate API call by returning observable
    return of(this.products).pipe(delay(4000));
  }
}
