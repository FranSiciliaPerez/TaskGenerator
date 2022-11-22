import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Assign } from 'src/app/models/assign-task.model';
import { Persons } from 'src/app/models/persons.models';
import { Tasks } from 'src/app/models/tasks.models';
import { AssignTasksService } from 'src/app/services/assign-tasks.service';
import { DataPersonsService } from 'src/app/services/dataperson.service';
import { DatataskService } from 'src/app/services/datatask.service';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assignment:Assign;
  //isLowResolution = lowres;
  constructor(
    private peopleSvc:DataPersonsService,
    private tasksSvc:DatataskService,
    private assignmentsSvc:AssignTasksService
  ){

  }

  ngOnInit(
  ) {

  }

  getTask():Tasks{
    var taskid = this.assignment.taskid;
    if(taskid)
      return this.tasksSvc.getTaskById(taskid);
    return undefined;
  }

  getPerson():Persons{
    var personid = this.assignment.personid;
    if(personid)
      return this.peopleSvc.getPersonsById(personid);
    return undefined;
  }

  onEditClick(){
    this.onEdit.emit(this.assignment);
  }

  onDeleteClick(){
    this.onDelete.emit(this.assignment);
  }
}
