import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableUIComponent {
  @Input() object: {};
  constructor() {
  }

}
