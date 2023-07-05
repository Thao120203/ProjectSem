export class ProductAPI {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    cost: number;
    status: boolean;
    hot: boolean;
    publisherId: number;
    publisherYear: string;
    authorsId: number[];
    categoriesId: number[];
}