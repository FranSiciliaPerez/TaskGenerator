import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksDetailsComponent } from './tasks-details/tasks-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TasksPage, TasksComponent, TasksDetailsComponent],
  exports: [TasksComponent]
})
export class TasksPageModule {}
