import { Component, OnInit } from '@angular/core';
import { Persons } from 'src/app/models/persons.models';
import { ActivatedRoute } from '@angular/router';
import { DataPersonService } from 'src/app/services/dataperson.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage {

  public person:Persons[]; 
    constructor(
      private dataPersons:DataPersonService,
      private activatedRoute : ActivatedRoute
  ) { }
  ngOnInit() {
  }
  getPersons(){
    return this.dataPersons.getPersons(); 
  }
}
