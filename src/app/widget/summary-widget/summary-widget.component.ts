import { Component } from '@angular/core';

@Component({
  selector: 'app-summary-widget',
  templateUrl: './summary-widget.component.html',
  styleUrls: ['./summary-widget.component.scss']
})
export class SummaryWidgetComponent {
  public summaryData = {
    totalUsers: 1000,
    totalSales: 5000,
    totalRevenue: 75000
  };

}
