import { Chart } from 'angular-highcharts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  template: `
    <button (click)="add()">Add Point!</button>
    <div [chart]="chart"></div>
  `
})
export class ChartComponent {
  chart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Shops'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: [
      {
        name: 'Shops',
        data: [
          {
            name: 'Carpentry',
            y: 5,
            drilldown: 'carpentry'
          },
          {
            name: 'HVAC',
            y: 2,
            drilldown: 'hvac'
          },
          {
            name: 'Electrical',
            y: 4,
            drilldown: 'electrical'
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          name: 'Carpentry',
          id: 'carpentry',
          data: [
            ['Regular Time', 80],
            ['Overtime', 10],
            ['Holiday', 5],
            ['Vacation', 5],
          ]
        },
        {
          name: 'HVAC',
          id: 'hvac',
          data: [
            ['Regular Time', 90],
            ['Overtime', 9],
            ['Holiday', 0],
            ['Vacation', 1],
          ]
        },
        {
          name: 'Electrical',
          id: 'electrical',
          data: [
            ['Regular Time', 70],
            ['Overtime', 10],
            ['Holiday', 10],
            ['Vacation', 10],
          ]
        }
      ]
    }
  });

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}

