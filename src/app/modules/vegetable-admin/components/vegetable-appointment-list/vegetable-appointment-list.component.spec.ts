import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableAppointmentListComponent } from './vegetable-appointment-list.component';

describe('VegetableAppointmentListComponent', () => {
  let component: VegetableAppointmentListComponent;
  let fixture: ComponentFixture<VegetableAppointmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableAppointmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableAppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
