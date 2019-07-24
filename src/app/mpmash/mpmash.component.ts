import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';

@Component({
  selector: 'app-mpmash',
  templateUrl: './mpmash.component.html',
  styleUrls: ['./mpmash.component.scss']
})
export class MpmashComponent implements OnInit {
 
  fakeDatabase = [
    {
      "name": "Boris Johnson",
      "img": "fgaagefeg.png",
      "gender": 0, 
      "rating": 10
    },
    {
      "name": "Stella Creasy",
      "img": "sfg68sg86f.png",
      "gender": 1, 
      "rating": 10
    },
    {
      "name": "Penny Mordaunt",
      "img": "fgtsdt7fgd7.png",
      "gender": 1, 
      "rating": 10
    },
    {
      "name": "Priti Patel",
      "img": "gf6dg6s.png",
      "gender": 1, 
      "rating": 10
    },
    {
      "name": "Esther McVey",
      "img": "8dfgfds8fg.png",
      "gender": 1, 
      "rating": 10
    },
    {
      "name": "Jo Johnson",
      "img": "gdf7fgdh.jpg",
      "gender": 0, 
      "rating": 10
    },
    {
      "name": "Zac Goldsmith",
      "img": "61sdfds2262756.jpg",
      "gender": 0, 
      "rating": 10
    },
    {
      "name": "Gavin Williamson",
      "img": "fsdfs4af.png",
      "gender": 0, 
      "rating": 10
    }
  ];

  gender_chosen = 0;
  mpChosenGenderData = [];

  total_mps = 0; 

  twoMPsData = []; 

  ea = 0;
  eb = 0;
  face_a_new_rating = 0;
  face_b_new_rating = 0;
  k = 24;  

  //constructor(private data: DataService) {}
  constructor() {}

  ngOnInit(){
    //get total_mps count from database
    this.total_mps = this.fakeDatabase.length;
    this.loadNewMPs();
  }

  updateGenderData() {
    let mpChosenGenderData = [];
    for (let mp in this.fakeDatabase) {  
      //console.log(mp);
      //console.log(this.fakeDatabase[mp].gender);
      //console.log(this.gender_chosen);
      if(this.fakeDatabase[mp].gender == this.gender_chosen){
        let data = this.getMPData(mp);
        //console.log(data);
        mpChosenGenderData.push(data);
      }
    }  
    //console.log(mpChosenGenderData);
    return mpChosenGenderData; 
  }

  chooseTwoRandomMPs() { 
    let mpChosenGenderData = this.updateGenderData();
    let total_applicable_mps = mpChosenGenderData.length;

    let random_a = Math.floor((Math.random() * total_applicable_mps) + 1);
    let random_b = Math.floor((Math.random() * total_applicable_mps) + 1);
    
    while(random_a == random_b){
      random_b = Math.floor((Math.random() * total_applicable_mps) + 1);
    }  

    console.log(random_a + ", " + random_b);

    random_a = mpChosenGenderData[random_a]["id"]; 
    //fails if 4

    random_b = mpChosenGenderData[random_b]["id"];

    console.log(random_a + ", " + random_b);

    let twoMps : number[] = [random_a,random_b];
    return twoMps;    
  }

  getMPData(mp) {
    //get mp's data from database 
    mp = mp;
    let mpData = this.fakeDatabase[mp];
    //console.log(mpData);
    let data = [{
      "id": mp,
      "name": mpData["name"],
      "rating": mpData["rating"],
      "img": mpData["img"] 
    }]; 
    return data[0]; 
  }

  chooseGender(gender_chosen){
    this.gender_chosen = gender_chosen;
    this.loadNewMPs();
  }

  loadNewMPs() {
    let twoMPs = this.chooseTwoRandomMPs(); 
    //console.log(twoMPs);

    this.twoMPsData = [];

    for (let mp in twoMPs) { 
      let data = this.getMPData(twoMPs[mp]);
      //console.log(data);
      this.twoMPsData.push(data);
    }  

    //updates DOM on array change
  }

  voteForMP(mp_chosen){ 
    //console.log(mp_chosen);

    let newRatings = this.calculateRatings(mp_chosen);

    //update mp's ratings in database
    let mp_a = this.twoMPsData[0]["id"]
    let mp_b = this.twoMPsData[1]["id"]

    this.fakeDatabase[mp_a].rating = newRatings[0];
    this.fakeDatabase[mp_b].rating = newRatings[1];

    //console.log(this.fakeDatabase);

    //upload two new mps
    this.loadNewMPs();
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