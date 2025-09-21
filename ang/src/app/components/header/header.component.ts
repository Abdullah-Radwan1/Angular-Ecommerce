import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingBag, Search, LucideAngularModule, Menu } from 'lucide-angular';
import { cartStore } from '../../../stores/cart.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  cartStore = inject(cartStore);
  constructor() {}

  ShoppingBag = ShoppingBag;
  Search = Search;
  Menu = Menu;
}
