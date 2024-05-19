import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve resolved data from ActivatedRoute
    this.route.data.subscribe((data) => {
      this.products = data['products']; // 'products' should match the name specified in resolve property in routing module
    });
  }
}
