import { Injectable } from '@angular/core';
import { Tasks } from '../models/tasks.models';

@Injectable({
  providedIn: 'root'
})
export class DatataskService {
  tasks:Tasks[] = [
    {
      taskid: 0,
      name: 'Fregar',
      description: 'Fregar cocina y baños',
      dataTimeSeg: 230023,
      image: ''
    },
    {
      taskid: 1,
      name: 'Barrer',
      description: 'Barrer salon y cuartos',
      dataTimeSeg: 333443,
      image: ''
    },
    {
      taskid: 2,
      name: 'Aspirar',
      description: 'Aspirar el polvo de la casa',
      dataTimeSeg: 343443,
      image: ''
    }
  ]
  taskid: number = this.tasks.length + 1;
  constructor() { }

  getTask() {
    return this.tasks;
  }

  getTaskById(taskid: number) {
    return this.tasks.find(p => p.taskid == taskid);
  }

  deleteTaskById(taskid: number) {
    this.tasks = this.tasks.filter(p => p.taskid != taskid);
  }

  addTask(task: Tasks) {
    task.taskid = this.taskid++;
    this.tasks.push(task);
  }

  updateTask(task: Tasks) {
    var _task = this.tasks.find(p => p.taskid == task.taskid);
    if (_task) {
      _task.name = task.name;
      _task.description = task.description;
      _task.dataTimeSeg = task.dataTimeSeg;
      _task.image = task.image;
    }

  }
  
}
