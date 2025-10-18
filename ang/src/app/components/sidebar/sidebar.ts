import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { LucideAngularModule, Search, SlidersHorizontal } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { productStore } from '../../../stores/product.store';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms'; // ✅ Add this

export type SortOption = 'price-low-high' | 'price-high-low' | 'name-a-z' | 'name-z-a';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule, CommonModule, FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  // search icon
  Search = Search;
  // search term
  searchSubject = new Subject<string>();
  productStore = inject(productStore);

  searchTerm = '';
  onSearch(term: string) {
    this.searchSubject.next(term);
    this.applyFilters(); // apply all filters including search
  }
  @Output() filtersChanged = new EventEmitter<any>();
  SlidersHorizontal = SlidersHorizontal;

  minPrice: number = 0;
  maxPrice: number = 1000;
  sortOption: SortOption = 'price-low-high';
  selectedCategories: string[] = [];

  categories = ['PERFUMES', 'SNEAKERS', 'ACCESSORIES', 'ELECTRONICS', 'HOODIES'];

  ngOnInit() {
    // ✅ Load all products once
    this.productStore.loadProducts();

    // ✅ Optionally, also load initial filtered products
    this.productStore.loadFilterdProducts({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      sort: this.sortOption,
      categories: this.selectedCategories,
    });
  }

  onMinPriceChange(event: any) {
    const newMinPrice = parseInt(event.target.value);
    if (newMinPrice <= this.maxPrice) {
      this.minPrice = newMinPrice;
      this.applyFilters();
    }
  }

  onMaxPriceChange(event: any) {
    const newMaxPrice = parseInt(event.target.value);
    if (newMaxPrice >= this.minPrice) {
      this.maxPrice = newMaxPrice;
      this.applyFilters();
    }
  }

  onSortChange(event: any) {
    this.sortOption = event.target.value;
    this.applyFilters();
  }

  onCategoryChange(category: string, event: any) {
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter((c) => c !== category);
    }
    this.applyFilters();
  }

  clearFilters() {
    this.minPrice = 0;
    this.maxPrice = 1000;
    this.sortOption = 'price-low-high';
    this.selectedCategories = [];
    this.applyFilters();
  }

  formatCategoryName(category: string): string {
    return category.charAt(0) + category.slice(1).toLowerCase();
  }

  private applyFilters() {
    // 🔥 Call the store function directly instead of emitting
    this.productStore.loadFilterdProducts({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      sort: this.sortOption,
      categories: this.selectedCategories,
      search: this.searchTerm, // ✅ include search term here
    });

    // Still emit in case parent wants to know about filter change
    this.filtersChanged.emit({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      sort: this.sortOption,
      categories: this.selectedCategories,
      search: this.searchTerm, // ✅ include search term here
    });
  }
}
