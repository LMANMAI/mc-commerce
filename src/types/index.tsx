export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category?: string;
}

export interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}
