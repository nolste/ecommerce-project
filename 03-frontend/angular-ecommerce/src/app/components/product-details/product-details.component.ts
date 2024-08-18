import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { AppComponent } from '../../app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterOutlet,
    ProductListComponent,
    HttpClientModule,
    RouterLinkActive,
    RouterLink,
    CommonModule,],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product!: Product;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

}