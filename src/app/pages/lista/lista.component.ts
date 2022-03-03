import { FoodsService } from './../services/foods.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Food } from '../model/food';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, AfterViewInit {

  title = 'custom-search-filter-example';

  //searchedKeyword!: string;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  teste =
  [

    { _id: "1", name: "Hamburguer", price: "R$15,00", describe: "Um delicioso clássico. Pão tostado e quentinho, hambúrguer, cebola e picles com ketchup e mostarda." },

    { _id: "2", name: "Batata Frita", price: "R$12,99", describe: "Deliciosas batatas selecionadas, fritas, crocantes por fora, macias por dentro, douradas, irresistíveis, saborosas, famosas, e todos os outros adjetivos positivos que você quiser dar." },

    { _id: "3", name: "Nuggets", price: "R$9,99", describe: "Crocantes, leves e deliciosos. Os frangos empanados mais irresistíveis do Recife" }
  ];

  foods = new MatTableDataSource(this.teste)

  displayedColumns = ['_id', 'name', 'price'];
  sort: any;



  // public doFilter = (value: any) => {
  //   console.log(value);
  //   this.foods.filter = value.trim().toLocaleLowerCase();

  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)
    this.foods.filter = filterValue.trim().toLowerCase();
  }




   //foodService: FoodsService;

  constructor(public dialog: MatDialog) {

   }


  ngOnInit(): void {

  }

   ngAfterViewInit(): void {
     this.foods.sort = this.sort;
     this.foods.paginator = this.paginator;
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
