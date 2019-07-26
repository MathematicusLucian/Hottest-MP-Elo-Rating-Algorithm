import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableModule, MatTableDataSource, MatTable, MatSort } from '@angular/material';
import { DataService } from '../data.service';

export class MP {
  constructor(
    id: string,
    name: string,
    gender: string,
    rating: string,
    img: string) {}
}

export interface dataElement {
  Id: string,
  Image: string;
  Name: string;
  Constituency: string;
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
  
  mps: MP[]; 

  gender_chosen = 0;

  genders = [
    {gender_id: 0, gender: 'Male'},
    {gender_id: 1, gender: 'Female'}
  ];

  displayedColumns: string[] = ['Image', 'Name', 'Constituency', 'Rating'];
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
    
    this.getAllMPs(); 
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.scoreboardForm.controls[controlName].hasError(errorName);
  }

  getAllMPs() {
    this.data.getAllMPs().subscribe(
      (res: MP[]) => {
        this.mps = res; 
        console.log(res);

        for (let mp in this.mps){
          this.elements.push({
            Id: this.mps[mp]["id"],
            Image: this.mps[mp]["img"],
            Name: this.mps[mp]["name"],
            Constituency: this.mps[mp]["constit"],
            Rating: this.mps[mp]["rating"]+""
          }); 
        }
        console.log(this.elements);  
    
        this.dataScoreboard.data = this.elements;
      },
      (err) => {
        //this.error = err; 
      }
    );  
    return this.mps;
  }

  filterScoreboard() { 

    if (this.scoreboardForm.valid) {
      
      //filter update

      
      this.table.renderRows(); 
    }

  } 

}
