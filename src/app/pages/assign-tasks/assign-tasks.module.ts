import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssignTasksPageRoutingModule } from './assign-tasks-routing.module';

import { AssignTasksPage } from './assign-tasks.page';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { AssignTaskDetailComponent } from './assign-tasks-details/assign-task-detail/assign-task-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignTasksPageRoutingModule
  ],
  declarations: [AssignTasksPage, AssignmentComponent, AssignTaskDetailComponent],
})
export class AssignTasksPageModule {}
