import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fakeDatabase = [
    {
      "name": "Boris Johnson",
      "img": "fgaagefeg.png",
      "gender": 0, 
      "rating": 0
    },
    {
      "name": "Stella Creasy",
      "img": "sfg68sg86f.png",
      "gender": 1, 
      "rating": 0
    },
    {
      "name": "Penny Mordaunt",
      "img": "fgtsdt7fgd7.png",
      "gender": 1, 
      "rating": 0
    },
    {
      "name": "Sajid Javid",
      "img": "fd8gstg8fa.jpeg",
      "gender": 0, 
      "rating": 0
    }, 
    {
      "name": "Priti Patel",
      "img": "gf6dg6s.png",
      "gender": 1, 
      "rating": 0
    },
    {
      "name": "Esther McVey",
      "img": "8dfgfds8fg.png",
      "gender": 1, 
      "rating": 0
    },
    {
      "name": "Jo Johnson",
      "img": "gdf7fgdh.jpg",
      "gender": 0, 
      "rating": 0
    },
    {
      "name": "Theresa May",
      "img": "sfhsdfghk.jpeg",
      "gender": 1, 
      "rating": 0
    }, 
    {
      "name": "Luciana Berger",
      "img": "24wea43.jpeg",
      "gender": 1, 
      "rating": 0
    },
    {
      "name": "Zac Goldsmith",
      "img": "61sdfds2262756.jpg",
      "gender": 0, 
      "rating": 0
    },
    {
      "name": "Diane Abbott",
      "img": "gsg7ayg9.jpeg",
      "gender": 1, 
      "rating": 0
    }, 
    {
      "name": "Elizabeth Truss",
      "img": "sftdt8.jpeg",
      "gender": 1, 
      "rating": 0
    }, 
    {
      "name": "Gavin Williamson",
      "img": "fsdfs4af.png",
      "gender": 0, 
      "rating": 0
    }
  ];

  total_mps = 0;
  gender_chosen = 1;

  //constructor(private http: HttpClient) { } 
  constructor() { }

  ngOnInit(){
    //get total_mps count from database
    this.total_mps = this.fakeDatabase.length;
  }

  chooseTwoRandomMPs() { 
    let mpChosenGenderData = this.updateGenderData();
    let total_applicable_mps = mpChosenGenderData.length; 

    let random_a = Math.floor((Math.random() * total_applicable_mps));
    let random_b = Math.floor((Math.random() * total_applicable_mps));
    
    while(random_a == random_b){
      random_b = Math.floor((Math.random() * total_applicable_mps));
    }   

    random_a = mpChosenGenderData[random_a]["id"];  
    random_b = mpChosenGenderData[random_b]["id"]; 

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
  
  updateMPRatings(newRatings,mp_a,mp_b){
    this.fakeDatabase[mp_a].rating = newRatings[0];
    this.fakeDatabase[mp_b].rating = newRatings[1];
  }

}