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
      "gender": "M", 
      "rating": 10
    },
    {
      "name": "Stella Creasy",
      "img": "sfg68sg86f.png",
      "gender": "F", 
      "rating": 10
    },
    {
      "name": "Penny Mordaunt",
      "img": "fgtsdt7fgd7.png",
      "gender": "F", 
      "rating": 10
    },
    {
      "name": "Priti Patel",
      "img": "gf6dg6s.png",
      "gender": "F", 
      "rating": 10
    },
    {
      "name": "Esther McVey",
      "img": "8dfgfds8fg.png",
      "gender": "F", 
      "rating": 10
    },
    {
      "name": "Jo Johnson",
      "img": "gdf7fgdh.jpg",
      "gender": "M", 
      "rating": 10
    },
    {
      "name": "Zac Goldsmith",
      "img": "61sdfds2262756.jpg",
      "gender": "M", 
      "rating": 10
    },
    {
      "name": "Gavin Williamson",
      "img": "fsdfs4af.png",
      "gender": "M", 
      "rating": 10
    }
  ];

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

  chooseTwoRandomMPs() { 
    let random_a = Math.floor((Math.random() * this.total_mps) + 1);
    let random_b = Math.floor((Math.random() * this.total_mps) + 1);
    
    while(random_a == random_b){
      random_b = Math.floor((Math.random() * this.total_mps) + 1);
    }  

    let twoMps : number[] = [random_a,random_b];
    return twoMps;    
  }

  getMPData(mp) {
    //get mp's data from database
    mp = mp - 1;
    let mpData = this.fakeDatabase[mp];
    let data = [{
      "id": mp,
      "name": mpData["name"],
      "rating": mpData["rating"],
      "img": mpData["img"] 
    }]; 
    return data[0]; 
  }

  loadNewMPs() {
    let twoMPs = this.chooseTwoRandomMPs(); 

    this.twoMPsData = [];

    for (let mp in twoMPs) { 
      this.twoMPsData.push(this.getMPData(twoMPs[mp]));
    }  

    //updates DOM on array change
  }

  voteForMP(mp_chosen){ 
    console.log(mp_chosen);

    let newRatings = this.calculateRatings(mp_chosen);

    //update mp's ratings in database
    let mp_a = this.twoMPsData[0]["id"]
    let mp_b = this.twoMPsData[1]["id"]

    this.fakeDatabase[mp_a].rating = newRatings[0];
    this.fakeDatabase[mp_b].rating = newRatings[1];

    console.log(this.fakeDatabase);

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