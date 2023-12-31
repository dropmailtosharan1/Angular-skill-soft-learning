import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryWidgetComponent } from './summary-widget.component';

describe('SummaryWidgetComponent', () => {
  let component: SummaryWidgetComponent;
  let fixture: ComponentFixture<SummaryWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryWidgetComponent]
    });
    fixture = TestBed.createComponent(SummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
