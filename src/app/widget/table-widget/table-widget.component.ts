import { Component } from '@angular/core';

@Component({
  selector: 'app-table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.scss']
})
export class TableWidgetComponent {

  public data = [
    { column1: 'Value 1', column2: 'Value A' },
    { column1: 'Value 2', column2: 'Value B' },
    { column1: 'Value 3', column2: 'Value C' },
    { column1: 'Value 4', column2: 'Value D' },
    { column1: 'Value 5', column2: 'Value E' }
  ];
}
