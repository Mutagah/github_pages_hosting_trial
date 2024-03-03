import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomInteractionComponent } from './dom-interaction.component';

describe('DomInteractionComponent', () => {
  let component: DomInteractionComponent;
  let fixture: ComponentFixture<DomInteractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomInteractionComponent]
    });
    fixture = TestBed.createComponent(DomInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
