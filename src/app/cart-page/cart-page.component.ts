import { Component,OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
import {Cart} from "../shared/models/Cart";
import {CartItem} from "../shared/models/cartItem";
import {FoodService} from "../services/food/food.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService, private foodService:FoodService) {
    this.setCart();
  }
  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity =parseInt(quantityInString);
    console.warn(quantity)
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  get totalPrice(): number {
    let total = 0;
    for (const cartItem of this.cart.items) {
      total += cartItem.price;
    }
    return total;
  }
}


