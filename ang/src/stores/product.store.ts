import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Apollo, gql } from 'apollo-angular';
import { catchError, EMPTY, map } from 'rxjs';
import { featuredDto, ProductDto } from '../utils/product.schema';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      image
      Category
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
      Category
    }
  }
`;
const FEATURED_PRODUCTS = gql`
  query featuredProducts {
    featuredProducts {
      id
      name
      description
      image
      price
    }
  }
`;
const GET_PRODUCT_BY_ID = gql`
  query product($id: String!) {
    product(id: $id) {
      id
      name
      description
      price
      image
      Category
    }
  }
`;
const GET_RELATED_PRODUCTS = gql`
  query relatedProducts($category: Category!) {
    relatedProducts(Category: $category) {
      name
      id
      name
      description
      price
      image
      Category
    }
  }
`;
export interface ProductState {
  products: ProductDto[];
  featuredProducts: featuredDto[];
  relatedProducts: ProductDto[];
  loading: boolean;
  error: string | null;
  selectedProduct: ProductDto | null; // ✅ new
}
const initialState: ProductState = {
  products: [],
  relatedProducts: [],
  featuredProducts: [],
  selectedProduct: null, // ✅ initialize

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
        .watchQuery<{ products: ProductDto[] }>({
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
        .query<{ searchProducts: ProductDto[] }>({
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
    loadProductById: (id: string) => {
      patchState(store, { loading: true, error: null });
      apollo
        .query<{ product: ProductDto }>({ query: GET_PRODUCT_BY_ID, variables: { id } })
        .pipe(
          map(({ data }) => {
            patchState(store, {
              error: null,
              loading: false,
              selectedProduct: data.product,
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
    // In your store
    loadRelatedProducts(category: string) {
      apollo
        .query<{ relatedProducts: ProductDto[] }>({
          query: GET_RELATED_PRODUCTS,
          variables: { category }, // e.g., "PERFUMES"
        })
        .pipe(
          map(({ data }) => {
            patchState(store, { relatedProducts: data.relatedProducts });
          })
        )
        .subscribe();
    },
    // ✅ rename the method to avoid shadowing
    loadFeaturedProducts: () => {
      patchState(store, { loading: true, error: null });
      apollo
        .watchQuery<{ featuredProducts: featuredDto[] }>({
          query: FEATURED_PRODUCTS,
        })
        .valueChanges.pipe(
          map(({ data }) => {
            patchState(store, { featuredProducts: data.featuredProducts, loading: false });
          })
        )
        .subscribe();
    },
    clearSelectedProduct: () => {
      patchState(store, { selectedProduct: null, loading: true });
    },
  }))
);

//test
