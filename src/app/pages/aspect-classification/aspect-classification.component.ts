import { Component } from '@angular/core';
import { TableView } from 'src/app/interface/table-view';

@Component({
  selector: 'app-aspect-classification',
  templateUrl: './aspect-classification.component.html',
  styleUrls: ['./aspect-classification.component.css'],
})
export class AspectClassificationComponent {
  datas: TableView[];
  isValid: boolean = false;
  isInvalid: boolean = false;
  optionsModel: string[] = ['CNN', 'LSTM'];
  modelSelected: string = 'CNN';

  onChangeModel(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.modelSelected = selectedValue;
  }

  constructor() {
    this.datas = [
      {
        no: 1,
        kalimat: 'Tweet Saya ini loh hahahahaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        aspek: 'Perubahan',
        opini: 'jelek',
        trueTuple: '',
        sentiment: '',
        metaAspect: '{ lemma }',
        metaOpinion: '{ lemma }',
      },
      {
        no: 2,
        kalimat:
          'Tweet Saya ini loh hahahahaiiiiiiiiiiiiiiiiiiiiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        aspek: 'Perubahan',
        opini: 'jelek',
        trueTuple: '',
        sentiment: '',
        metaAspect:
          '{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }',
        metaOpinion:
          '{ lemma } { lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }',
      },
      {
        no: 3,
        kalimat: 'Tweet Saya ini loh hahahahaiiiiiiiiiiiiiiiiiiiiiii',
        aspek: 'Perubahan',
        opini: 'jelek',
        trueTuple: '',
        sentiment: '',
        metaAspect: '{ lemma }',
        metaOpinion: '{ lemma }',
      },
      {
        no: 1,
        kalimat: 'Tweet Saya ini loh hahahahaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        aspek: 'Perubahan',
        opini: 'jelek',
        trueTuple: '',
        sentiment: '',
        metaAspect: '{ lemma }',
        metaOpinion: '{ lemma }',
      },
      {
        no: 2,
        kalimat:
          'Tweet Saya ini loh hahahahaiiiiiiiiiiiiiiiiiiiiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        aspek: 'Perubahan',
        opini: 'jelek',
        trueTuple: '',
        sentiment: '',
        metaAspect:
          '{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }',
        metaOpinion:
          '{ lemma } { lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }{ lemma }',
      },
      {
        no: 3,
        kalimat: 'Tweet Saya ini loh hahahahaiiiiiiiiiiiiiiiiiiiiiii',
        aspek: 'Perubahan',
        opini: 'jelek',
        trueTuple: '',
        sentiment: '',
        metaAspect: '{ lemma }',
        metaOpinion: '{ lemma }',
      },
    ];
  }

  onFileSelected(event: Event) {}

  async downloadFile(event: Event) {}
}
