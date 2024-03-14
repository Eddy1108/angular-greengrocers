import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ListComponent } from '../list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [ListComponent],
})

export class GroceriesModule { }
