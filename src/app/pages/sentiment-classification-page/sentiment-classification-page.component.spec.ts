import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentClassificationPageComponent } from './sentiment-classification-page.component';

describe('SentimentClassificationPageComponent', () => {
  let component: SentimentClassificationPageComponent;
  let fixture: ComponentFixture<SentimentClassificationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentimentClassificationPageComponent]
    });
    fixture = TestBed.createComponent(SentimentClassificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
