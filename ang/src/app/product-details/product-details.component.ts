import { Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { productStore } from '../../stores/product.store';
import { cartStore } from '../../stores/cart.store';
import { Subject, takeUntil } from 'rxjs';
import { ProductCardComponent } from '../components/product-card/product-card.component';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnDestroy {
  // Inject the product store to access products, featured products, and selected product
  productStore = inject(productStore);

  // Inject the cart store to handle adding products to cart
  cartStore = inject(cartStore);

  // Inject ActivatedRoute to access route parameters, e.g., the product ID
  route = inject(ActivatedRoute);

  // A Subject used as a "destroy notifier" to automatically unsubscribe from Observables
  private destroy$ = new Subject<void>();

  constructor() {
    // Subscribe to changes in the route parameters (e.g., /product/:id)
    // 'takeUntil(this.destroy$)' ensures the subscription is automatically unsubscribed when the component is destroyed
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      // Get the 'id' parameter from the current route
      const id = params.get('id');
      console.log(id);
      if (id) {
        // Immediately clear the previously selected product from the store
        // This prevents the old product from flashing on the screen
        this.productStore.clearSelectedProduct();

        // Load the new product based on the current ID
        this.productStore.loadProductById('cm84perfume00003');
      }
    });
  }

  // Method to add a product to the cart
  addToCart(product: any) {
    this.cartStore.addToCart(product);
  }

  // Angular lifecycle hook that runs when the component is destroyed
  ngOnDestroy() {
    // Emit a value to destroy$ to signal Observables using takeUntil to unsubscribe
    this.destroy$.next();

    // Complete the destroy$ Subject to clean up memory
    this.destroy$.complete();
  }
}
