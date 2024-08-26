import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice = Subject<number> = new Subject<number>();
  totalQuantity = Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem) {
    // check if cart item is in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = new CartItem("", "", "", 0, 0);

    if (this.cartItems.length > 0) {

      //find the item based on id
      for (let tempCartItem of this.cartItems) {
        if (tempCartItem.id === theCartItem.id) {
          existingCartItem = tempCartItem;
          break;
        }
      }

      alreadyExistsInCart = (existingCartItem != undefined);
    }



  }
}
