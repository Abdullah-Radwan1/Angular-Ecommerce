import { Component, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule, SlidersHorizontal } from 'lucide-angular';
import { CommonModule } from '@angular/common';

// Define the possible sorting options as a type for better type safety
export type SortOption = 'price-low-high' | 'price-high-low' | 'name-a-z' | 'name-z-a';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  // @Output() creates a custom event that parent components can listen to
  // EventEmitter allows this component to send data to its parent component
  // When filters change, we emit an event that parent can capture
  @Output() filtersChanged = new EventEmitter<any>();

  // Lucide icon for the filter button
  SlidersHorizontal = SlidersHorizontal;

  // Default price range values
  minPrice: number = 0;
  maxPrice: number = 1000;

  // Default sorting option
  sortOption: SortOption = 'price-low-high';

  // Array to store selected categories (starts empty - no categories selected)
  selectedCategories: string[] = [];

  // Available categories from your enum
  categories = ['PERFUMES', 'SNEAKERS', 'ACCESSORIES', 'ELECTRONICS', 'HOODIES'];

  // Called when the minimum price slider changes
  // Updates minPrice and ensures it doesn't exceed maxPrice
  onMinPriceChange(event: any) {
    const newMinPrice = parseInt(event.target.value);
    if (newMinPrice <= this.maxPrice) {
      this.minPrice = newMinPrice;
      this.emitFilters(); // Notify parent component about the change
    }
  }

  // Called when the maximum price slider changes
  // Updates maxPrice and ensures it's not less than minPrice
  onMaxPriceChange(event: any) {
    const newMaxPrice = parseInt(event.target.value);
    if (newMaxPrice >= this.minPrice) {
      this.maxPrice = newMaxPrice;
      this.emitFilters(); // Notify parent component about the change
    }
  }

  // Called when a sort radio button is selected
  // Updates the current sorting option
  onSortChange(event: any) {
    this.sortOption = event.target.value;
    this.emitFilters(); // Notify parent component about the change
  }

  // Called when a category checkbox is checked or unchecked
  // Adds or removes the category from selectedCategories array
  onCategoryChange(category: string, event: any) {
    if (event.target.checked) {
      // Add category to selected list if checked
      this.selectedCategories.push(category);
    } else {
      // Remove category from selected list if unchecked
      this.selectedCategories = this.selectedCategories.filter((c) => c !== category);
    }
    this.emitFilters(); // Notify parent component about the change
  }

  // Resets all filters to their default values
  clearFilters() {
    this.minPrice = 0;
    this.maxPrice = 1000;
    this.sortOption = 'price-low-high';
    this.selectedCategories = []; // Clear all selected categories
    this.emitFilters(); // Notify parent component that filters were cleared
  }

  // Converts enum values like "PERFUMES" to display-friendly format like "Perfumes"
  formatCategoryName(category: string): string {
    // First character uppercase + rest of characters lowercase
    return category.charAt(0) + category.slice(1).toLowerCase();
  }

  // Private method that packages all filter data and emits it to parent component
  // This is called whenever any filter changes
  private emitFilters() {
    this.filtersChanged.emit({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      sort: this.sortOption,
      categories: this.selectedCategories,
    });
  }
}
