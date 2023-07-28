import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectClassificationComponent } from './aspect-classification.component';

describe('AspectClassificationComponent', () => {
  let component: AspectClassificationComponent;
  let fixture: ComponentFixture<AspectClassificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspectClassificationComponent]
    });
    fixture = TestBed.createComponent(AspectClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
