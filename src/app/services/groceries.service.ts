import { Injectable, inject } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.development';
import { firstValueFrom } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  private totalSubject = new BehaviorSubject<number>(0);
  total$ = this.totalSubject.asObservable();

  private itemList: Item[] = [];
  cartList: Item[] = [];

  http = inject(HttpClient)
  
  async getGroceries() {
    const result = await firstValueFrom(this.http.get(`${environment.apiUrl}/groceries`));
    // @ts-ignore
    this.itemList = result;
    console.log(this.itemList)
    
    return this.itemList;
  }

  GetCart(){
    return this.cartList
  }

  AddToCart(i: Item){
    const index = this.itemList.indexOf(i)
    if (index !== -1)
    {
      const cartIndex = this.cartList.indexOf(i)
      if (cartIndex !== -1)
      {
        this.cartList[cartIndex].quantity += 1;
      }
      else{
        i.quantity = 1;
        this.cartList.push(i)
      }
    }
    this.CalculateTotal()
  }

  IncreaseQuantity(i: Item){
    i.quantity += 1
    this.CalculateTotal()
  }

  DecreaseQuantity(i: Item){
    i.quantity -= 1
    if (i.quantity <= 0){
      const index = this.cartList.indexOf(i)
      this.cartList.splice(index, 1)
    }

    this.CalculateTotal()
  }

  CalculateTotal(){
    let total = 0
    this.cartList.forEach(element => {
      total += element.price * element.quantity
    });

    total = parseFloat(total.toFixed(2));
    this.totalSubject.next(total)

    // console.log(total)

  }

}
