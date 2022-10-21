import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from '../../../../models/tasks.models';

@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {

  @Input() task : Tasks;
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  constructor() { }

  ngOnInit() {}
  
  onEditClick(){
    this.onEdit.emit(this.task);
  }

  onDeleteClick(){
    this.onDelete.emit(this.task);
  }

}
