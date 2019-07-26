import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

export class MP {
  constructor(
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
    let newRatings = this.calculateRatings(mp_chosen);

    //update mp's ratings in database
    let mp_a = this.twoMPsData[0]["id"]
    let mp_b = this.twoMPsData[1]["id"]

    //this.data.updateMPRatings(newRatings,mp_a,mp_b); 

    this.success = '';
    this.error = '';

    /* this.data.updateMPRatings(newRatings,mp_a,mp_b)
      .subscribe(
        (res) => {
          this.mps    = res;
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      ); */

    //upload two new mps
    this.getTwoRandomMPs(this.gender_chosen);
  }

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