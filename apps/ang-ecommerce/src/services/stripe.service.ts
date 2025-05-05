import { inject, Injectable } from '@angular/core';
import { cartStore } from '../stores/cart.store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  store = inject(cartStore);
  http = inject(HttpClient);
  createCheckoutSession() {
    const items = this.store.items();
    const totalPrice = this.store.totalAmount();

    return this.http.post<{ url: string }>(
      'http://localhost:3000/api/checkout',
      {
        products: this.store.items(),
      }
    );
  }
}
