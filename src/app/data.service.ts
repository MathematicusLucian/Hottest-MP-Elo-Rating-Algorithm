import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'; 

export class MP {
  constructor(
    name: string,
    gender: string,
    rating: string,
    img: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'http://localhost:8888/MAMP/analytica_api/getTwoRandomMPs.php';
  mps: MP[];  

  fakeDatabase: MP[] = [
    {
      name: "Boris Johnson",
      img: "fgaagefeg.png",
      gender: "0", 
      rating: "0"
    },
    {
      name: "Stella Creasy",
      img: "sfg68sg86f.png",
      gender: "1", 
      rating: "0"
    },
    {
      name: "Penny Mordaunt",
      img: "fgtsdt7fgd7.png",
      gender: "1", 
      rating: "0"
    },
    {
      name: "Sajid Javid",
      img: "fd8gstg8fa.jpeg",
      gender: "0", 
      rating: "0"
    }, 
    {
      name: "Priti Patel",
      img: "gf6dg6s.png",
      gender: "1", 
      rating: "0"
    },
    {
      name: "Esther McVey",
      img: "8dfgfds8fg.png",
      gender: "1", 
      rating: "0"
    },
    {
      name: "Jo Johnson",
      img: "gdf7fgdh.jpg",
      gender: "0", 
      rating: "0"
    },
    {
      name: "Theresa May",
      img: "sfhsdfghk.jpeg",
      gender: "1", 
      rating: "0"
    }, 
    {
      name: "Luciana Berger",
      img: "24wea43.jpeg",
      gender: "1", 
      rating: "0"
    },
    {
      name: "Zac Goldsmith",
      img: "61sdfds2262756.jpg",
      gender: "0", 
      rating: "0"
    },
    {
      name: "Diane Abbott",
      img: "gsg7ayg9.jpeg",
      gender: "1", 
      rating: "0"
    }, 
    {
      name: "Elizabeth Truss",
      img: "sftdt8.jpeg",
      gender: "1", 
      rating: "0"
    }, 
    {
      name: "Gavin Williamson",
      img: "fsdfs4af.png",
      gender: "0", 
      rating: "0"
    }
  ];

  total_mps = 0;
  gender_chosen = 1;
  
  constructor(private http: HttpClient) { }  

  ngOnInit(){
    //get total_mps count from database
    this.total_mps = this.mps.length;
  }
  
  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }    

  getAll(): Observable<MP[]> {
    return this.http.get(`${this.baseUrl}`).pipe( ///list
      map((res) => {
        this.mps = res['data'];
        return this.mps;
    }),
    catchError(this.handleError));
  }

  getMPs(): void {
    this.getAll().subscribe(
      (res: MP[]) => {
        this.mps = res;
        this.total_mps = this.mps.length;
        console.log(this.mps);  
      },
      (err) => {
        //this.error = err;
        this.mps = this.fakeDatabase; 
        this.total_mps = this.mps.length;
        console.log(this.fakeDatabase);
      }
    );
    console.log(this.mps);
  }

  chooseTwoRandomMPs(gender_chosen) { 

    let mpChosenGenderData = this.updateGenderData(gender_chosen);
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
    this.getMPs();
    console.log(this.mps); 
    let mpData = this.mps[mp]; 
    let data = [{
      "id": mp,
      name: mpData["name"],
      rating: mpData["rating"],
      img: mpData["img"] 
    }]; 
    return data[0]; 
  }

  updateGenderData(gender_chosen) {
    let mpChosenGenderData = [];
    for (let mp in this.mps) {   
      if(this.mps[mp]["gender"] == gender_chosen){
        let data = this.getMPData(mp); 
        mpChosenGenderData.push(data);
      }
    }   
    return mpChosenGenderData; 
  } 
  
  updateMPRatings(newRatings,mp_a,mp_b){
    this.mps[mp_a]["rating"] = newRatings[0];
    this.mps[mp_b]["rating"] = newRatings[1];
  }

}