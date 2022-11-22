import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignTasksPageRoutingModule } from './assign-tasks-routing.module';

import { AssignTasksPage } from './assign-tasks.page';
import { AssignmentComponent } from './components/assignment/assignment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignTasksPageRoutingModule
  ],
  declarations: [AssignTasksPage, AssignmentComponent],
})
export class AssignTasksPageModule {}
