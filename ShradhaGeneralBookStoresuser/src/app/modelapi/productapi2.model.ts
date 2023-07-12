export class ProductAPI2 {
  id: number;
  name: string;
  description: string | null;
  quantity: number;
  price: number;
  cost: number;
  status: boolean;
  hot: boolean;
  publisherId: number | null;
  publishingYear: string | null;
  authors: string[];
  categories: string[];
  photo: string | null;
  createdAt: Date;
  updatedAt: Date;
  photos: string[];
}
