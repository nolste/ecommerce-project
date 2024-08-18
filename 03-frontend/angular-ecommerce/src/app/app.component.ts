import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, provideRouter, withComponentInputBinding } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component'
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { appConfig } from './app.config';
import { routes } from './app.routes';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from "./components/cart-status/cart-status.component";


//might have to import appconfig or app.routes here?
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListComponent,
    HttpClientModule,
    RouterLinkActive,
    RouterLink,
    CommonModule,
    ProductCategoryMenuComponent,
    SearchComponent,
    NgbModule,
    CartStatusComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService //provideRouter(routes)
  ]
})
export class AppComponent {
  title = 'angular-ecommerce';
}
