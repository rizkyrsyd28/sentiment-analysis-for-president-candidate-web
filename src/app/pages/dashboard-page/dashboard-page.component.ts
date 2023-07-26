import { Component } from '@angular/core';
import { Benchmark } from 'src/app/interface/benchmark';
import { Feature } from 'src/app/interface/feature';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent {
  features: Feature[];
  benchmarks: Benchmark[];

  constructor() {
    this.features = [
      {
        title: 'Training and Testing Data',
        subTitle: '> 10,000',
        icon: 'file',
      },
      {
        title: 'President Candidate',
        subTitle: '5 Candidates as aspects',
        icon: 'person',
      },
      {
        title: 'NLP Model',
        subTitle: 'Using CNN and LSTM',
        icon: 'stack',
      },
    ];

    this.benchmarks = [
      {
        title: 'CNN Model - Aspect Classification',
        accuracy: '32,984',
        precision: '2,42 m',
        recall: '2,400 $',
        score: '320',
        imgConfusion: 'assets/image/diagram1.svg',
        imgAccuracy: 'assets/image/accur1.svg',
      },
      {
        title: 'CNN Model - Aspect Classification',
        accuracy: '32,984',
        precision: '2,42 m',
        recall: '2,400 $',
        score: '320',
        imgConfusion: 'assets/image/diagram1.svg',
        imgAccuracy: 'assets/image/accur1.svg',
      },
    ];
  }
}
