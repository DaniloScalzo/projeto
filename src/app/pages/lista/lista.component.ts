import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  foods: Food[] = [
    { _id: "1", name: "Queijo", price: "10" }
  ];
  displayedColumns = ['_id', 'name', 'price'];

  constructor() { }

  ngOnInit(): void {
  }

}
