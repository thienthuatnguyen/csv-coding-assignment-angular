import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendService } from 'src/app/backend.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-assign-modal',
  templateUrl: './assign-modal.component.html',
  styleUrls: ['./assign-modal.component.css']
})
export class AssignModalComponent {
  @Output() applied = new EventEmitter<any>(false);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  users = this.backend.users();
  listUser = [];
  public userId;
  public taskId;
  constructor(private backend: BackendService, @Inject(MAT_DIALOG_DATA) public data: { taskId: number }, private _snackBar: MatSnackBar) {
    this.users.subscribe((res) => {
      this.listUser = res;
    })
    this.taskId = data.taskId;
  }

  public assignUser() {
    this.backend.assign(this.taskId, this.userId).subscribe((res) => {
      this._snackBar.open('Sucess!', 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    },
      (err) => {
        this._snackBar.open(err, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }).add(
        ()=> {this.applied.emit(true);}
      )
  }

}
