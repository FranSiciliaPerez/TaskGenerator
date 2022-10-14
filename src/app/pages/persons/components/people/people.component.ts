import { Component, Input, OnInit } from '@angular/core';
import { Persons } from '../../../../models/persons.models'

@Component({
  selector: 'app-persons',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

  @Input() person : Persons;
  constructor() { }

  ngOnInit() {}

}
