import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persons } from 'src/app/models/persons.models';
import { DataPersonsService } from 'src/app/services/dataperson.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage {

  public person: Persons[];
  constructor(
    private dataPersons: DataPersonsService,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
  }
  
  getPersons() {
    return this.dataPersons.getPersons();
  }
}
