import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the plugin
import { Chart } from 'chart.js';
Chart.register(ChartDataLabels);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] , 
        backgroundColor: ['rgb(251,224,157)', 'blueviolet', 'rgb(201,226,215)'],
        hoverBackgroundColor: ['darkblue', 'black', 'rgba(255, 209, 6, 0.881)'],
       },
      { data: [50, 150, 120]  ,
        backgroundColor: ['rgb(201,226,215)', 'rgb(204,242,252)', 'rgb(220,223,224)'],
        hoverBackgroundColor: ['gray', 'rgba(255, 209, 6, 0.881)', 'darkblue'],
       },
      { data: [250, 130, 70] ,
        backgroundColor: ['blueviolet', 'rgb(201,226,215)', 'rgb(204,242,252)'],
        hoverBackgroundColor: ['gray', 'rgba(255, 209, 6, 0.881)', 'darkblue'],
       },
    ],
  };
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    animation: {
      animateRotate: true, // Enable rotation animation
      animateScale: false, // Disable scale animation (optional)
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public doughnutChartType: ChartType = 'doughnut';

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {  data: [65, 229, 380, 581, 766, 905, 1205],
        label: 'Users',
        backgroundColor: 'blueviolet',
        hoverBackgroundColor:'rgb(220,223,224)',
        borderColor: 'black',
        borderWidth: 1,
       },
       {
        data: [10, 89, 140, 349, 397, 607, 900],
        label: 'Orders',
        backgroundColor: 'rgba(255, 209, 6, 0.881)',
        hoverBackgroundColor : 'rgb(201,226,215)',
        borderColor: 'rgb(201,226,215)',
        borderWidth: 1,
      },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }
}
