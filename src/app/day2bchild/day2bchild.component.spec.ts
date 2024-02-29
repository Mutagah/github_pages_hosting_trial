import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2bchildComponent } from './day2bchild.component';

describe('Day2bchildComponent', () => {
  let component: Day2bchildComponent;
  let fixture: ComponentFixture<Day2bchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day2bchildComponent]
    });
    fixture = TestBed.createComponent(Day2bchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
