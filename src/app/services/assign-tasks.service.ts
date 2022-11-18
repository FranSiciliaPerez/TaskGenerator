import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { Assign } from '../models/assign-task.model';

@Injectable({
  providedIn: 'root'
})
export class AssignTasksService {

  momentjs:any = moment;
  private _assigns:Assign[] = [
    {
      assignTaskId:1,
      personid:1,
      taskid:1,
      createdAt:moment().toISOString(),
      dateNTime:moment().add(1, 'days').toLocaleString(),
    },
    {
        assignTaskId:2,
        personid:2,
        taskid:2,
        createdAt:moment().toISOString(),
        dateNTime:moment().add(1, 'days').toLocaleString(),
      }
  ];

  id:number = this._assigns.length+1;
  constructor() { }

  getAssigns(){
    return this._assigns;
  }

  getAssignById(assignTaskId:number){
    return this._assigns.find(a=>a.assignTaskId==assignTaskId);
  }

  getAssignsByTaskId(taskId:number):Assign[]{
    return this._assigns.filter(a=>a.taskid == taskId);
  }

  getAssignsByPersonId(personid:number):Assign[]{
    return this._assigns.filter(a=>a.personid == personid);
  }

  deleteAssignById(assignTaskId:number){
    this._assigns = this._assigns.filter(a=>a.assignTaskId != assignTaskId); 
  }

  addAssign(assingment:Assign){
    assingment.assignTaskId = this.id++;
    this._assigns.push(assingment);
  }

  updateAssign(assignment:Assign){
    var _assign = this._assigns.find(a=>a.assignTaskId==assignment.assignTaskId);
    if(_assign){
      _assign.taskid = assignment.taskid;
      _assign.personid = assignment.personid;
      _assign.createdAt = assignment.createdAt;
      _assign.dateNTime = assignment.dateNTime;
    }
    
  }
}
