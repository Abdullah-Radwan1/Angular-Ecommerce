import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Product } from '@prisma/client';
import { Apollo, gql } from 'apollo-angular';
import { catchError, EMPTY, map } from 'rxjs';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      image
    }
  }
`;
const SEARCH_PRODUCTS = gql`
  query searchProducts($term: String!) {
    searchProducts(term: $term) {
      id
      name
      description
      price
      image
    }
  }
`;

export interface ProductState {
  products: Product[];
  featuredProducts: Product[];
  loading: boolean;
  error: string | null;
}
const initialState: ProductState = {
  products: [],
  featuredProducts: [],
  loading: false,
  error: null,
};
export const productStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialState),
  withMethods((store, apollo = inject(Apollo)) => ({
    loadProducts: () => {
      patchState(store, { loading: true, error: null });
      apollo
        .watchQuery<{ products: Product[] }>({
          query: GET_PRODUCTS,
        })
        .valueChanges.pipe(
          map(({ data }) => {
            patchState(store, { products: data.products, loading: false });
          })
        )
        .subscribe();
    },
    searchProducts: (term: string) => {
      patchState(store, { loading: true, error: null });
      apollo
        .query<{ searchProducts: Product[] }>({
          query: SEARCH_PRODUCTS,
          variables: { term }, // Changed from searchTerm to term to match your query
        })
        .pipe(
          map(({ data }) => {
            patchState(store, {
              products: data.searchProducts,
              loading: false,
            });
          }),
          catchError((error) => {
            patchState(store, {
              error: error.message,
              loading: false,
            });

            return EMPTY;
          })
        )
        .subscribe();
    },
  }))
);
