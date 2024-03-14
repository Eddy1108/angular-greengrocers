import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GroceriesModule } from './groceries/groceries.module';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  declarations: [AppComponent, CartComponent, TotalComponent],
  imports: [BrowserModule, GroceriesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
