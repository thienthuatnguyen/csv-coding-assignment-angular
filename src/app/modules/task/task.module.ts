import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from 'src/app/share-modules';  
import { ChangeStatusComponent } from './components/change-status-modal/change-status-modal.component';
import { AssignModalComponent } from './components/assign-modal/assign-modal.component';
import { AddNewModalComponent } from './components/add-new-modal/add-new-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TaskRoutingModule,
    SharedModule
  ],
  declarations: [TaskComponent, TaskListComponent, TaskDetailComponent, ChangeStatusComponent, AssignModalComponent, AddNewModalComponent]
})
export class TaskModule { }
