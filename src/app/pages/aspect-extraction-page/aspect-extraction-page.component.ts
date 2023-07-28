import { Component } from '@angular/core';
import { TableView } from 'src/app/interface/table-view';

@Component({
  selector: 'app-aspect-extraction-page',
  templateUrl: './aspect-extraction-page.component.html',
  styleUrls: ['./aspect-extraction-page.component.css'],
})
export class AspectExtractionPageComponent {
  datas: TableView[];
  isValid: boolean = false;
  isInvalid: boolean = false;

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
}
