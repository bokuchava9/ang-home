import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './products.html',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
  this.productService.getProducts().subscribe((res) => {
    this.products = res.products;  
    console.log('მიღებული პროდუქტები:', this.products);
  });
}
}