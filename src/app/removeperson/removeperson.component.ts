import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { NgForm } from '@angular/forms';
import { IPerson } from '../interfaces/iperson';

@Component({
  selector: 'app-removeperson',
  templateUrl: './removeperson.component.html',
  styleUrls: ['./removeperson.component.css']
})
export class RemovepersonComponent implements OnInit {
 baseURL = 'https://firproject28.firebaseio.com/';
  rootNode = 'people';
  refID: any;

  fname: string;
  lname: string;

  person: object;

  constructor(private dbService: DbService) { }

  ngOnInit() {
  }

  editData(id){
     console.log(id);
     this.refID = id;
     this.dbService.deleteData(`${this.baseURL}/${this.rootNode}/${this.refID}.json`)
     .subscribe(
       (response) => console.log(response),
       (error) => console.log(error)
     );
  }

  // removeData() {

  //      this.dbService.deleteData(`${this.baseURL}/${this.rootNode}/${this.refID}.json`)
  //      .subscribe(
  //        (response) => console.log(response),
  //        (error) => console.log(error)
  //      );
  // }

}
