import { Component, OnInit } from '@angular/core';
import { MP } from "../models/mp";
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mp-profile',
  templateUrl: './mp-profile.component.html',
  styleUrls: ['./mp-profile.component.scss']
})
export class MpProfileComponent implements OnInit {
 
  mp: MP = "";
  MPData = []; 

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() { 
    this.mp = this.route.snapshot.paramMap.get('id'); 
    this.getMPDetails(this.mp); 
  }

  getMPDetails(mp_id) {
    this.data.getMP(mp_id).subscribe(
      (res: MP[]) => {  
        this.MPData = res;
      },
      (err) => {
        //this.error = err; 
      }
    );
    return this.MPData;
  } 

}
