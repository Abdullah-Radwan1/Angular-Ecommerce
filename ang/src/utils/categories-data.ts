// utils/categories-data.ts
export interface Category {
  id: number;
  name: string;
  imageUrl: string;
  hoverColor: string;
}

export const POPULAR_CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Electronics',
    imageUrl:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    hoverColor: 'group-hover:text-blue-600',
  },
  {
    id: 2,
    name: 'Health & Beauty',
    imageUrl:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    hoverColor: 'group-hover:text-pink-600',
  },
  {
    id: 3,
    name: 'Sneakers',
    imageUrl:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    hoverColor: 'group-hover:text-green-600',
  },
  {
    id: 4,
    name: 'Hoodies',
    imageUrl:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    hoverColor: 'group-hover:text-orange-600',
  },
  {
    id: 5,
    name: 'Accessories',
    imageUrl:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    hoverColor: 'group-hover:text-orange-600',
  },
];
