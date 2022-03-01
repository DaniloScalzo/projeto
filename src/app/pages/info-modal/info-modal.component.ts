
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Food } from '../model/food';





@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() { console.log(this.data)



  }

}
