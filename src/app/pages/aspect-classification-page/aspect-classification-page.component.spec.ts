import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectClassificationPageComponent } from './aspect-classification-page.component';

describe('AspectClassificationPageComponent', () => {
  let component: AspectClassificationPageComponent;
  let fixture: ComponentFixture<AspectClassificationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspectClassificationPageComponent]
    });
    fixture = TestBed.createComponent(AspectClassificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
