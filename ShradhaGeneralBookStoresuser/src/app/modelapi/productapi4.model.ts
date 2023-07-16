export class ProductAPI4 {
    id: number;
    name: string;
    description: string | null;
    quantity: number;
    price: number;
    cost: number;
    status: boolean;
    hot: boolean;
    publisherId: number ;
    publishingYear: string ;
    authors: string[];
    categories: string[];
    createdAt: Date;
    updatedAt: Date;
    photos: string[];
  }
