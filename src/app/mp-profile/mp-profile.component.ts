import { Component, OnInit } from '@angular/core';
import { MP } from "../models/mp";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mp-profile',
  templateUrl: './mp-profile.component.html',
  styleUrls: ['./mp-profile.component.scss']
})
export class MpProfileComponent implements OnInit {
 
  mp: MP = "";
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot);
    this.mp = this.route.snapshot.paramMap.get('id');
    console.log(this.mp);
  }

}
