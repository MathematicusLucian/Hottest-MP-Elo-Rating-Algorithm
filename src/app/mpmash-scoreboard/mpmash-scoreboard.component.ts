import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableModule, MatTableDataSource, MatTable, MatSort } from '@angular/material';
import { DataService } from '../data.service';

export interface dataElement {
  Image: string;
  Name: string;
  Rating: string;
}  

const ELEMENT_DATA: dataElement[] = [];

@Component({
  selector: 'app-mpmash-scoreboard',
  templateUrl: './mpmash-scoreboard.component.html',
  styleUrls: ['./mpmash-scoreboard.component.scss']
})
export class MpmashScoreboardComponent implements OnInit {
  public scoreboardForm: FormGroup; 

  gender_chosen = 0;

  genders = [
    {gender_id: 0, gender: 'Male'},
    {gender_id: 1, gender: 'Female'}
  ];

  displayedColumns: string[] = ['Image', 'Name', 'Rating'];
  columnsToDisplay: string[] = this.displayedColumns;

  dataScoreboard: MatTableDataSource<dataElement> ;
  elements: dataElement[] = []; 

  constructor(private data: DataService) {
    this.dataScoreboard = new MatTableDataSource<dataElement>();
  }

  @ViewChild(MatTable,{static:true}) table: MatTable<any>; 

  ngOnInit() {
    this.scoreboardForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(60)]),
      gender: new FormControl('', [Validators.required])
    }); 

    console.log(this.dataScoreboard);

    let dataMPs = this.data.fakeDatabase;

    for (let mp in dataMPs){
     /* this.dataScoreboard.push({
        Image: "<img src='./assets/img/" + dataMPs[mp]["img"] + "'>",
        Name: dataMPs[mp]["name"],
        Rating: dataMPs[mp]["rating"]+""
      }); */
    } 

    console.log(this.dataScoreboard); 
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.scoreboardForm.controls[controlName].hasError(errorName);
  }

  filterScoreboard() { 

    if (this.scoreboardForm.valid) {
      
      //filter update

      
      this.table.renderRows(); 
    }

  } 

}
