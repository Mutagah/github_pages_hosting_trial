import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestfulApiConsumptionComponent } from './restful-api-consumption.component';

describe('RestfulApiConsumptionComponent', () => {
  let component: RestfulApiConsumptionComponent;
  let fixture: ComponentFixture<RestfulApiConsumptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestfulApiConsumptionComponent]
    });
    fixture = TestBed.createComponent(RestfulApiConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
