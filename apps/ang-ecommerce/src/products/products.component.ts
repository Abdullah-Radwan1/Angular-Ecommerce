import { afterNextRender, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productStore } from '../stores/product.store';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import untilDestroyed from '../utils/untilDestroyed';
import { cartStore } from '../stores/cart.store';
import { Product } from '@prisma/client';
@Component({
  selector: 'app-product',
  imports: [CommonModule, ProductCardComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  searchTerm = '';
  onSearch(term: string) {
    this.searchSubject.next(term);
  }
  addToCart(product: Product) {
    this.cardStore.addToCart(product);
  }
  cardStore = inject(cartStore);
  productStore = inject(productStore);
  searchSubject = new Subject<string>();
  destroy = untilDestroyed();
  constructor() {
    this.productStore.loadProducts();
    afterNextRender(() => {
      this.searchSubject
        .pipe(debounceTime(500), distinctUntilChanged(), this.destroy())
        .subscribe((term) => {
          console.log(term);
          this.productStore.searchProducts(term);
        });
    });
  }
}
