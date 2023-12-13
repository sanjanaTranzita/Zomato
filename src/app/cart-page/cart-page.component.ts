import { Component,OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
import {Cart} from "../shared/models/Cart";
import {CartItem} from "../shared/models/cartItem";
import {FoodService} from "../services/food/food.service";
import {Router} from "@angular/router";
import {Foods} from "../shared/models/food";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit{
  cart!:Cart;
  food!:Foods;
  constructor(private cartService:CartService, private foodService:FoodService,private router:Router) {
    this.setCart();
  }
  ngOnInit(): void {
  }
  setCart(){

    this.cart = this.cartService.getCart();
    console.warn(this.cart.items.length)
    if(this.cart.items.length<1){
      this.router.navigateByUrl('no-cart')

    }
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
  navigateToHomePage() {
    this.router.navigate(['']);
  }

  get totalPrice(): number {
    let total = 0;
    for (const cartItem of this.cart.items) {
      total += cartItem.price;
    }
    return total;
  }
}


