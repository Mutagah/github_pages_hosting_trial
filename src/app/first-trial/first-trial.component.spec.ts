import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTrialComponent } from './first-trial.component';

describe('FirstTrialComponent', () => {
  let component: FirstTrialComponent;
  let fixture: ComponentFixture<FirstTrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTrialComponent]
    });
    fixture = TestBed.createComponent(FirstTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
