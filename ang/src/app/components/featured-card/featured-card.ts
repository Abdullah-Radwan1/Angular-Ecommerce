import { Component, input } from '@angular/core';
import { featuredDto } from '../../../utils/product.schema';

@Component({
  selector: 'app-featured-card',
  imports: [],
  templateUrl: './featured-card.html',
  styleUrl: './featured-card.scss',
})
export class FeaturedCard {
  product = input.required<featuredDto>();
}
