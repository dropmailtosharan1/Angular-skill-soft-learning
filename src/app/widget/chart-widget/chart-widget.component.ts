import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent {
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56], label: 'Series A' },
    { data: [28, 48, 40, 19, 86], label: 'Series B' }
  ];
}
