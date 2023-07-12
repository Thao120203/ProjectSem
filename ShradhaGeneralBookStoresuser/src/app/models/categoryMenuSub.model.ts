import { Category } from "./category.model";

export class CategoryMenuSub {
  category: Category;
  index: number;
  indexParent: number;
  constructor(category: Category, index: number, indexParent: number){
    this.category = category;
    this.index = index;
    this.indexParent = indexParent;
  }
}
