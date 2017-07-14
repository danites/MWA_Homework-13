import { Component, OnInit } from '@angular/core';
import {DbService} from './db.service';
@Component({
  selector: 'app-student',
  template: `
  
      <ul>
      <li *ngFor="let s of stList"><a [routerLink]="['profile',s.id]">{{s.name}}</a></li>
      </ul>
   
  `,
  styles: [],
 providers:[DbService]
})
export class StudentComponent implements OnInit {
stList:any[];
  constructor(private dbService:DbService) {
this.stList=dbService.getData();
   }

  ngOnInit() {
  }

}
