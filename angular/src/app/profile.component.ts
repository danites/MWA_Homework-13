import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import {DbService} from "./db.service";
@Component({
  selector: 'app-profile',
  template: `
    
    <ul><li>Name :{{currStudent.name}}</li>
    <li>Name :{{currStudent.email}}</li>
    
  `,
  styles: [],
  providers:[DbService],
})
export class ProfileComponent implements OnInit {
 private subscription: Subscription;
  id: number;
   currStudent={};
  constructor(private activatedRoute: ActivatedRoute,private dbService:DbService) {
    this.subscription = activatedRoute.params.subscribe(
        (param: any) => this.id = parseInt(param['id'])
    );
    // constructor will be used once
   // this.onetimeId = activatedRoute.snapsyyhot.params['id']
  this.currStudent= dbService.getDataById(this.id);
   }

  ngOnInit() {

  }

}
