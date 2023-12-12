import {Foods} from "./food";

export class CartItem{
  constructor(public food: Foods, public quantity: number) {
    this.food = food;
  }
  get price(): number {
    return this.quantity * this.food.price;
  }
}
