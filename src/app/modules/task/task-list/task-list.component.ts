import { Component, ViewEncapsulation } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChangeStatusComponent } from '../components/change-status-modal/change-status-modal.component';
import { AssignModalComponent } from '../components/assign-modal/assign-modal.component';
import { AddNewModalComponent } from '../components/add-new-modal/add-new-modal.component';

@Component({
  selector: 'task-list',
  styleUrls: ['task-list.component.css'],
  templateUrl: 'task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {
  displayedColumns: string[] = ['id', 'description', 'assigneeId', 'completed', 'actions'];
  dataSource: MatTableDataSource<any>;
  listUser = [];
  listTask = [];
  tasks = this.backend.tasks();
  users = this.backend.users();
  constructor(private backend: BackendService, private router: Router, public dialog: MatDialog) {
    this.getTasks();
    this.users.subscribe((res) => {
      this.listUser = res;
    })

  }

  public getTasks() {
    this.tasks.subscribe((res) => {
      this.listTask = res;
      this.dataSource = new MatTableDataSource(this.listTask);
    })
  }
  public getUserName(id: number) {
    let nameUser = this.listUser.find(user => user.id === id);
    return nameUser?.name ? nameUser?.name : 'N/A';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getDetail(id: any) {
    this.router.navigate(['/task/' + 1], { queryParams: { id: id } });
  }

  public updateTable() {
    this.backend.tasks().subscribe((res) => {
      this.listTask = res;
      this.dataSource.data = res;
    })
  }

  public addTask() {
    const dialogRef = this.dialog.open(AddNewModalComponent);
    dialogRef.componentInstance.applied.subscribe((data: any) => {
      this.updateTable();
    });
  }

  public openModalChangeStatus(taskId) {
    const dialogRef = this.dialog.open(ChangeStatusComponent, {
      data: { "taskId": taskId }
    });
    dialogRef.componentInstance.applied.subscribe((data: any) => {
      this.updateTable();
    });
  }

  public openModalAssignTask(taskId) {
    const dialogRef = this.dialog.open(AssignModalComponent, {
      data: { "taskId": taskId }
    });

    dialogRef.componentInstance.applied.subscribe((data: any) => {
      this.updateTable();
    });
  }
}
