import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material';
import { DataService } from '../data.service';

export interface dataElement {
  Name: string;
  Rating: string;
  Img: string;
}  

const ELEMENT_DATA: dataElement[] = [];

@Component({
  selector: 'app-mpmash-scoreboard',
  templateUrl: './mpmash-scoreboard.component.html',
  styleUrls: ['./mpmash-scoreboard.component.scss']
})
export class MpmashScoreboardComponent implements OnInit {
  public scoreboardForm: FormGroup; 

  genders = [
    {gender_id: 0, gender: 'Male'},
    {gender_id: 1, gender: 'Female'}
  ];

  displayedColumns: string[] = ['Image', 'Name', 'Rating'];
  columnsToDisplay: string[] = this.displayedColumns;

  constructor(private data: DataService) {}

  dataScoreboard: dataElement[] = ELEMENT_DATA; 

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  ngOnInit() {
    this.scoreboardForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(60)]),
      gender: new FormControl('', [Validators.required])
    });

    //this.dataScoreboard = this.data.fakeDatabase;
    console.log(this.dataScoreboard);
    console.log(this.data.fakeDatabase);
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
