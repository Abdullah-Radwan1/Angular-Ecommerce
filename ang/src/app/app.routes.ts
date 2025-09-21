import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: async () => {
      const mod = await import('./components/home/home.component');
      return mod.HomeComponent;
    },
  },
  {
    path: 'cart',
    loadComponent: async () => {
      const mod = await import('../app/cart/cart.component');
      return mod.CartComponent;
    },
  },
  {
    path: 'products',
    loadComponent: async () => {
      const mod = await import('../app/products/products.component');
      return mod.ProductsComponent;
    },
  },
  {
    path: 'checkout',
    loadComponent: async () => {
      const mod = await import('../app/checkout/checkout.component');
      return mod.CheckoutComponent;
    },
  },
];
