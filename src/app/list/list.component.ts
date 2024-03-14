import { Component } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly groceriesService: GroceriesService) {}

  items = this.groceriesService.getGroceries()


  addCart(c: Item){
    this.groceriesService.AddToCart(c)
  }

}
