export class ProductAPI3 {
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
  authorsId: number[];
  categoriesId: number[];
  photos: string[] | null;
  createdAt: Date;
  updatedAt: Date;
}
