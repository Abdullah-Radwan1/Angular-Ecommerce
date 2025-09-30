import { Component, input } from '@angular/core';
import { featuredDto } from '../../../utils/product.schema';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-featured-card',
  imports: [RouterLink],
  templateUrl: './featured-card.html',
  styleUrl: './featured-card.scss',
})
export class FeaturedCard {
  product = input.required<featuredDto>();
}
