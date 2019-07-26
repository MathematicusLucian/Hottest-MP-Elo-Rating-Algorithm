import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

export class MP {
  constructor(
    id: string,
    name: string,
    gender: string,
    rating: string,
    img: string) {}
}

@Component({
  selector: 'app-mpmash',
  templateUrl: './mpmash.component.html',
  styleUrls: ['./mpmash.component.scss']
})
export class MpmashComponent implements OnInit {
  mps: MP[]; 

  gender_chosen = 1;
  mpChosenGenderData = [];

  total_mps = 0; 

  twoMPsData = [];  

  success = '';
  error = '';

  constructor(private data: DataService) {}

  ngOnInit(){
    this.getTwoRandomMPs(this.gender_chosen);
  }

  chooseGender(gender){ 
    this.gender_chosen = gender;
    this.getTwoRandomMPs(gender);
  }

  getTwoRandomMPs(gender) {
    this.data.getTwoRandomMPs(gender).subscribe(
      (res: MP[]) => { 
        this.twoMPsData = res;
      },
      (err) => {
        //this.error = err; 
      }
    );
    return this.mps;
  } 

  voteForMP(mp_chosen){  
    this.success = '';
    this.error = '';

    let mp_not_chosen = 1 - mp_chosen;  

    let winner_mp = this.twoMPsData[mp_chosen]["id"];
    let loser_mp = this.twoMPsData[mp_not_chosen]["id"];  

    this.data.updateMPRatings(winner_mp, loser_mp).subscribe(
      (res: MP[]) => { 
        if(res[0]["update"]=="SUCCESS"){
          //upload two new mps
          this.getTwoRandomMPs(this.gender_chosen);
        }
      },
      (err) => {
        //this.error = err; 
      }
    ); 
  }
}