import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Assign } from 'src/app/models/assign-task.model';
import { AssignTasksService } from 'src/app/services/assign-tasks.service';
import { AssignTaskDetailComponent } from '../assign-tasks/assign-tasks-details/assign-task-detail/assign-task-detail.component';

@Component({
  selector: 'app-assign-tasks',
  templateUrl: './assign-tasks.page.html',
  styleUrls: ['./assign-tasks.page.scss'],
})
export class AssignTasksPage implements OnInit {
assignement: any;

  constructor(
    private assignmentsSvc:AssignTasksService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {}

  getAssignments(){
    return this.assignmentsSvc.getAssigns();
  }

  async presentAssignForm(assignment:Assign){
    const modal = await this.modal.create({
      component:AssignTaskDetailComponent,
      componentProps:{
        person:assignment
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.assignmentsSvc.addAssign(result.data.assignment);
            break;
          case 'Edit':
            this.assignmentsSvc.updateAssign(result.data.assignment);
            break;
          default:
        }
      }
    });
  }

  onEditAssign(assignment){
    this.presentAssignForm(assignment);
  }

  async onDeleteAlert(assignment){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar la asignación de tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.assignmentsSvc.deleteAssignById(assignment.assignTaskId);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteAssign(assignment){
    this.onDeleteAlert(assignment);
    
  }

  onNewAssign(){
    this.presentAssignForm(null);
    
  }
}
