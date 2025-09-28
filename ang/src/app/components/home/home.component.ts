import { Component, inject } from '@angular/core';
import { productStore } from '../../../stores/product.store';
import { cartStore } from '../../../stores/cart.store';
import { POPULAR_CATEGORIES, Category } from '../../../utils/categories-data';
import { FeaturedCard } from '../featured-card/featured-card';
@Component({
  selector: 'app-home',
  imports: [FeaturedCard],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  productStore = inject(productStore);
  cartStore = inject(cartStore);
  categories: Category[] = POPULAR_CATEGORIES; // use the imported data

  constructor() {
    this.productStore.loadFeaturedProducts(); // ✅ calls the loader
    // ✅ now this logs the SIGNAL state (the array), not the void-returning method
  }
}
