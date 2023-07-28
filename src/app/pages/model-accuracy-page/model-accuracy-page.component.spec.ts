import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAccuracyPageComponent } from './model-accuracy-page.component';

describe('ModelAccuracyPageComponent', () => {
  let component: ModelAccuracyPageComponent;
  let fixture: ComponentFixture<ModelAccuracyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelAccuracyPageComponent]
    });
    fixture = TestBed.createComponent(ModelAccuracyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
