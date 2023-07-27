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
        accuracy: '77.2827%',
        precision: '77.2827%',
        recall: '77.2827%',
        score: '77.2827%',
        imgConfusion: 'assets/image/CNN-classification-matrix.png',
        imgAccuracy: 'assets/image/CNN-classification-accuracy.png',
        imgLoss : 'assets/image/CNN-classification-loss.png',
      },
      {
        title: 'CNN Model - Sentiment Classification',
        accuracy: '99.6702%',
        precision: '99.6702%',
        recall: '99.6702%',
        score: '99.6702%',
        imgConfusion: 'assets/image/CNN-sentiment-matrix.png',
        imgAccuracy: 'assets/image/CNN-sentiment-accuracy.png',
        imgLoss : 'assets/image/CNN-sentiment-loss.png',
      },
      {
        title: 'LSTM Model - Aspect Classification',
        accuracy: '78.0293%',
        precision: '78.0293%',
        recall: '78.0293%',
        score: '78.0293%',
        imgConfusion: 'assets/image/LSTM-classification-matrix.png',
        imgAccuracy: 'assets/image/LSTM-classification-accuracy.png',
        imgLoss : 'assets/image/LSTM-classification-loss.png',
      },
      {
        title: 'LSTM Model - Sentiment Classification',
        accuracy: '98.9011%',
        precision: '98.9011%',
        recall: '98.9011%',
        score: '98.9011%',
        imgConfusion: 'assets/image/LSTM-sentiment-matrix.png',
        imgAccuracy: 'assets/image/LSTM-sentiment-accuracy.png',
        imgLoss : 'assets/image/LSTM-sentiment-loss.png',
      },
      
    ];
  }
}
