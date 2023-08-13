import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})

export class DonaComponent {

  @Input() title: string = ' Sin titulo';

  @Input('labels') doughnutChartLabels: string[] = ['Label1','Label2','Label3'];

  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: ['#7DD8D9','#D97D93','#77DA9A'],
        hoverBackgroundColor: ['#22D5D7','#D95373','#50D981'],
        hoverBorderColor:['#FFFFFF','#FFFFFF','#FFFFFF']
      },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
}
