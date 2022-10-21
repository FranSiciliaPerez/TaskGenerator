import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Tasks } from 'src/app/models/tasks.models';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss'],
})
export class TasksDetailsComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('task') set person(task:Tasks){
    if(task){
      this.form.controls.personid.setValue(task.taskid);
      this.form.controls.name.setValue(task.name);
      this.form.controls.description.setValue(task.description);
      this.form.controls.dataTimeSeg.setValue(task.dataTimeSeg);
      this.form.controls.picture.setValue(task.image);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private fb:FormBuilder,
    private modal:ModalController  ) { 
    this.form = this.fb.group({
      taskid:[null],
      name:['', [Validators.required]],
      description:['', [Validators.required]],
      dataTimeSeg:['', [Validators.required]],
      picture:['']
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    this.modal.dismiss({task: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(){
    this.modal.dismiss(null, 'cancel');
  }


}
