import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDto } from '../../../utils/product.schema';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input.required<ProductDto>();

  addToCart = output<ProductDto>();
  onAddToCart(product: ProductDto) {
    this.addToCart.emit(product);
  }
}
