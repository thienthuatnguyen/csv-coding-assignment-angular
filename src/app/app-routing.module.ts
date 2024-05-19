import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
  },
  {
    path: 'task',
    loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)
  },
  {
    path: '404',
    component: NotFoundComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

