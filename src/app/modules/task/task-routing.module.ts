import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


const routes: Routes = [
  {
    path: 'task',
    component: TaskComponent,
    children: [
      {
        path: 'list',
        component: TaskListComponent,
      },
      {
        path: ':id',
        component: TaskDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TaskRoutingModule { }
