import { Component, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Tasks } from 'src/app/models/tasks.models';
import { DatataskService } from 'src/app/services/datatask.service';
import { TasksDetailsComponent } from './tasks-details/tasks-details.component';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage {
  @Input() p : Tasks;
  public task:Tasks[];
  constructor(
    private dataTask: DatataskService,
    private alert:AlertController,
    private modal: ModalController,
    private taskService:DatataskService
  ) { }
  
  ngOnInit() {
  }
  
  getTask() {
    return this.dataTask.getTask();
  }
  async presentTaskForm(task:Tasks){
    const modal = await this.modal.create ({
      component:TasksDetailsComponent,
      componentProps:{
        task:task
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.taskService.addTask(result.data.task);
            break;
          case 'Edit':
            this.taskService.updateTask(result.data.task);
            break;
          default:
        }
      }
    });
  }
  
  onNewTask(){
    this.presentTaskForm(null);
    
  }

  onEditTask(task){
    this.presentTaskForm(task);
  }

  async onDeleteAlert(task){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar a la persona?',
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
            this.taskService.deleteTaskById(task.taskid);
          },
        },
      ],
    });
    await alert.present();

  }
  onDeleteTask(task){
    this.onDeleteAlert(task);
    
  }

}
