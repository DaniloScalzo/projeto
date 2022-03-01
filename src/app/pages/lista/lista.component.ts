import { FoodsService } from './../services/foods.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InfoModalComponent } from '../info-modal/info-modal.component';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  title = 'custom-search-filter-example';

  searchedKeyword!: string;

  foods: Food[] = [

    { _id: "1", name: "Hamburguer", price: "R$15,00", describe: "Um delicioso clássico. Pão tostado e quentinho, hambúrguer, cebola e picles com ketchup e mostarda." },

    { _id: "2", name: "Batata Frita", price: "R$12,99", describe: "Deliciosas batatas selecionadas, fritas, crocantes por fora, macias por dentro, douradas, irresistíveis, saborosas, famosas, e todos os outros adjetivos positivos que você quiser dar." },

    { _id: "3", name: "Nuggets", price: "R$9,99", describe: "Crocantes, leves e deliciosos. Os frangos empanados mais irresistíveis do Recife" }
  ];

  displayedColumns = ['_id', 'name', 'price'];





   //foodService: FoodsService;

  constructor(public dialog: MatDialog) {

   }


  ngOnInit(): void {

  }


  openDialog(food: Food[]) {
    this.dialog.open(InfoModalComponent, {
      data: food
    })
  }
}


// this.dialog.open(InfoModalComponent);


// const dialogConfig = new MatDialogConfig();
// dialogConfig.backdropClass = 'backdropBackground';
// dialogConfig.data = {
//   title: 'hamburguer: 2 dsada'
