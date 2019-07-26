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

  ea = 0;
  eb = 0;
  face_a_new_rating = 0;
  face_b_new_rating = 0;
  k = 24;  

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

  //MOVE LOGIC TO BACK-END AND JUST PASS winnerID, loserID
  calculateRatings(mp_chosen) {                 
    let ea = 1/(1+10^((this.twoMPsData[0]["rating"] - this.twoMPsData[1]["rating"])/400));
    let eb = 1/(1+10^((this.twoMPsData[1]["rating"] - this.twoMPsData[0]["rating"])/400));

    let face_a_new_rating = 0;
    let face_b_new_rating = 0;

    if(mp_chosen == 0) {
      face_a_new_rating = this.twoMPsData[0]["rating"] + (this.k * ea);
      face_b_new_rating = this.twoMPsData[1]["rating"] - (this.k * eb);
    } else {
      face_a_new_rating = this.twoMPsData[0]["rating"] - (this.k * ea);
      face_b_new_rating = this.twoMPsData[1]["rating"] + (this.k * eb);
    }

    face_a_new_rating = Math.round( face_a_new_rating * 1000 ) / 1000;
    face_b_new_rating = Math.round( face_b_new_rating * 1000 ) / 1000;

    return [face_a_new_rating, face_b_new_rating];
  }
}