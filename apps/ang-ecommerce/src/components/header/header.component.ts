import { Component } from '@angular/core';
import { ShoppingBag, Search, LucideAngularModule, Menu } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  ShoppingBag = ShoppingBag;
  Search = Search;
  Menu = Menu;
}
