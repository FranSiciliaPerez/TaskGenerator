import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DatataskService } from  'src/app/services/datatask.service';
import { AssignTasksService } from 'src/app/services/assign-tasks.service';
import { DataPersonsService } from 'src/app/services/dataperson.service';
import { Assign } from 'src/app/models/assign-task.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-task-detail',
  templateUrl: './assign-task-detail.component.html',
  styleUrls: ['./assign-task-detail.component.scss'],
})
export class AssignTaskDetailComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('assign') set assignment(assignment:Assign){
    if(assignment){
      this.form.controls.id.setValue(assignment.assignTaskId);
      this.form.controls.taskId.setValue(assignment.taskid);
      this.form.controls.personId.setValue(assignment.personid);
      this.form.controls.dateTime.setValue(assignment.dateNTime);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private tasksSvc:DatataskService,
    private peopleSvc:DataPersonsService,
    private assignmentsSvc:AssignTasksService,
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      taskId:[-1, [Validators.min(1)]],
      personId:[-1, [Validators.min(1)]],
      dateTime:['', [Validators.required]],
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({assignment: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  onChangeDateTime(dateNTime){
    this.form.controls.dateTime.setValue(dateNTime);
  }
}
