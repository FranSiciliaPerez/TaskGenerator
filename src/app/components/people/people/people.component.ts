import { Component, Input, OnInit } from '@angular/core';
import { Persons } from '../../../models/persons.models'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

  @Input() p : Persons;
  constructor() { }

  ngOnInit() {}

}
