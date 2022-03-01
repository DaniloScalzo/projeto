import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import {MatCardModule} from '@angular/material/card';
// Forms Module - for ngModel
import { FormsModule } from '@angular/forms'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListaRoutingModule,
    MatCardModule,
    FormsModule

  ]
})
export class ListaModule {

 }
