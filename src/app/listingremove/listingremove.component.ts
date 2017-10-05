import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from '../services/db.service';
import { IPerson } from '../interfaces/iperson';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-listingremove',
  templateUrl: './listingremove.component.html',
  styleUrls: ['./listingremove.component.css']
})
export class ListingremoveComponent implements OnInit {
@Output() removeClicked = new EventEmitter<any>();

  baseURL = 'https://firproject28.firebaseio.com/';
  rootNode = 'people';

  peopleCollection: Array<IPerson> = [];

  constructor(private dbservice: DbService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() { 
     this.dbservice.getAllData(`${this.baseURL}/${this.rootNode}.json`)
     .subscribe(
       (response) => {
         this.peopleCollection = response;
        } ,
       (error) => console.log(error)
     );
  }

  removeData(dataID) {
    // console.log(dataID);
    this.removeClicked.emit(dataID);
  }
}
