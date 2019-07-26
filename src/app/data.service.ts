import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'; 

export class MP {
  constructor(
    id: string,
    name: string,
    gender: string,
    rating: string,
    img: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'http://localhost:8888/MAMP/analytica_api';
  mps: MP[];  

  total_mps = 0;
  gender_chosen = 1;
 
  constructor(private http: HttpClient) { }  

  ngOnInit(){ 
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }    

  getAllMPs(): Observable<MP[]> {
    return this.http.get(`${this.baseUrl}/getAllMPs/`).pipe(  
      map((res) => {
        this.mps = res['data'];
        return this.mps;
    }),
    catchError(this.handleError));
  } 

  getMP(id): Observable<MP[]> {
    return this.http.get(`${this.baseUrl}/getMP/?id=${id}`).pipe(  
      map((res) => {
        this.mps = res['data']; 
        return this.mps;
    }),
    catchError(this.handleError));
  }  

  getTwoRandomMPs(gender): Observable<MP[]> {
    return this.http.get(`${this.baseUrl}/getTwoRandomMPs/?g=${gender}`).pipe(  
      map((res) => {
        this.mps = res['data'];
        return this.mps;
    }),
    catchError(this.handleError));
  }

  countMPs(gender): Observable<MP[]> {
    return this.http.get(`${this.baseUrl}/countMPs/?g=${gender}`).pipe(  
      map((res) => {
        this.mps = res['data'];
        return this.mps;
    }),
    catchError(this.handleError));
  }  
   
  updateMPRatings(winner_mp, loser_mp){ 
    return this.http.get(`${this.baseUrl}/updateMPRating?w=${winner_mp}&l=${loser_mp}`).pipe(
      map((res) => { 
        return res['data'];
    }),
    catchError(this.handleError)); 
  }

}