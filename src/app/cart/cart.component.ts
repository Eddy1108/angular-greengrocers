import { Component } from '@angular/core';
import { Item } from '../models/item';
import { GroceriesService } from '../services/groceries.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private groceriesService: GroceriesService) {}

  cart = this.groceriesService.GetCart()

  increaseAmount(i: Item){
    this.groceriesService.IncreaseQuantity(i)
  }

  decreaseAmount(i: Item) {
    this.groceriesService.DecreaseQuantity(i)
  }


}
