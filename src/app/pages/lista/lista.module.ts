import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import {MatCardModule} from '@angular/material/card';
// Forms Module - for ngModel
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListaRoutingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule

  ]
})
export class ListaModule {

 }
