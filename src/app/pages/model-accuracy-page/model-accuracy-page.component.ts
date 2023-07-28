import { Component } from '@angular/core';

@Component({
  selector: 'app-model-accuracy-page',
  templateUrl: './model-accuracy-page.component.html',
  styleUrls: ['./model-accuracy-page.component.css'],
})
export class ModelAccuracyPageComponent {
  optionsModel: string[] = ['CNN', 'LSTM'];
  optionsClass: string[] = ['Sentiment', 'Aspect'];
  modelSelected: string = 'CNN';
  classSelected: string = 'Sentiment';

  onChangeModel(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.modelSelected = selectedValue;
  }

  onChangeClass(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.classSelected = selectedValue;
  }
}

/*
  cnn + sentiment
  cnn + aspect
  lstm + sentiment
  lstm + aspect
*/
