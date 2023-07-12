import { Category } from "./category.model";

export class CategoryMenuParent {
  category: Category;
  index: number;
  constructor(category: Category, index: number){
    this.category = category;
    this.index = index;
  }
}
