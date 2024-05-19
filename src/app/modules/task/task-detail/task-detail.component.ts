import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent  {
  public info;
  public id;
  constructor(private backend: BackendService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.backend.task(this.id).subscribe((res)=> {
      this.info = res;
    })
  }


}
