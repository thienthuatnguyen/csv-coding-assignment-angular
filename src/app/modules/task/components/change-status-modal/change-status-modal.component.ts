import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-change-status-modal',
  templateUrl: './change-status-modal.component.html',
  styleUrls: ['./change-status-modal.component.css']
})
export class ChangeStatusComponent {
  @Output() applied = new EventEmitter<any>(false);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  public status;
  public taskId;
  constructor(private backend: BackendService, @Inject(MAT_DIALOG_DATA) public data: { taskId: number }, private _snackBar: MatSnackBar) {
    this.taskId = data.taskId;
  }

  public changeStatus() {
    this.backend.complete(this.taskId, this.status).subscribe((res) => {
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
        () => { this.applied.emit(true); }
      )

  }


}
