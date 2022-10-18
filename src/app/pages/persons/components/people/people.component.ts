import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persons } from '../../../../models/persons.models'

@Component({
  selector: 'app-persons',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

  @Input() person : Persons;
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  constructor() { }

  ngOnInit() {}
  
  onEditClick(){
    this.onEdit.emit(this.person);
  }

  onDeleteClick(){
    this.onDelete.emit(this.person);
  }

}
