import { Component, inject } from '@angular/core';
import { productStore } from '../../../stores/product.store';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductDto } from '../../../utils/product.schema';
import { cartStore } from '../../../stores/cart.store';
import { POPULAR_CATEGORIES, Category } from '../../../utils/categories-data';
@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  productStore = inject(productStore);
  cartStore = inject(cartStore);
  categories: Category[] = POPULAR_CATEGORIES; // use the imported data

  addToCart(product: ProductDto) {
    this.cartStore.addToCart(product);
  }
  constructor() {
    this.productStore.loadProducts();
  }
}
