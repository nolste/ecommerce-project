import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-category-menu',
  standalone: true,
  imports: [RouterOutlet,
    ProductListComponent,
    HttpClientModule,
    RouterLinkActive,
    RouterLink,
    CommonModule,],
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css'
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }

}
