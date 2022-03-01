import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import {MatCardModule} from '@angular/material/card';
import { SbarComponent } from './sbar/sbar.component';


@NgModule({
  declarations: [
    SbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    
  ]
})
export class PagesModule { }
