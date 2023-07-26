import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectExtractionPageComponent } from './aspect-extraction-page.component';

describe('AspectExtractionPageComponent', () => {
  let component: AspectExtractionPageComponent;
  let fixture: ComponentFixture<AspectExtractionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspectExtractionPageComponent]
    });
    fixture = TestBed.createComponent(AspectExtractionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
