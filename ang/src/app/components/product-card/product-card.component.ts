import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDto } from '../../../utils/product.schema';
import { RouterLink } from '@angular/router';
import { ToastService } from '../../../services/taost.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input.required<ProductDto>();
  constructor(private toast: ToastService) {}

  addToCart = output<ProductDto>();
  onAddToCart(product: ProductDto) {
    this.addToCart.emit(product);
    this.toast.show('Product added to cart!', 'success');
  }
}
