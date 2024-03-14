import { Component, OnDestroy } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnDestroy {

  total = 0;
  private subscription: Subscription;

  constructor(private groceriesService: GroceriesService) {
    this.subscription = this.groceriesService.total$.subscribe(value => {
      this.total = value})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
