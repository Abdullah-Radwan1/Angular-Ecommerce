import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productStore } from '../../stores/product.store';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import untilDestroyed from '../../utils/untilDestroyed';
import { cartStore } from '../../stores/cart.store';
import { ProductDto } from '../../utils/product.schema';
import { Sidebar } from '../components/sidebar/sidebar';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ProductCardComponent, FormsModule, Sidebar],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  addToCart(product: ProductDto) {
    this.cartStore.addToCart(product);
  }
  sidebarCollapsed = false;

  cartStore = inject(cartStore);
  productStore = inject(productStore);

  destroy = untilDestroyed();
}
