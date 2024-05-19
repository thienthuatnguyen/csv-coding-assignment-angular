import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendService } from 'src/app/backend.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'add-new-modal',
  templateUrl: './add-new-modal.component.html',
  styleUrls: ['./add-new-modal.component.css']
})
export class AddNewModalComponent {
  @Output() applied = new EventEmitter<any>(false);

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  public description: '';
  public userId;
  tasks = this.backend.tasks();
  constructor(private backend: BackendService, private _snackBar: MatSnackBar) {
  }

  public addNewTask() {

    this.backend.newTask({ description: this.description }).subscribe(res => {
      this._snackBar.open('Sucess!', 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });

    }, (err) => {
      this._snackBar.open(err, 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }).add(
      ()=> {this.applied.emit(true);}
    )
  }

}
