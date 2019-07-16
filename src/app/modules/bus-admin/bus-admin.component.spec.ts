import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusAdminComponent } from './bus-admin.component';

describe('BusAdminComponent', () => {
  let component: BusAdminComponent;
  let fixture: ComponentFixture<BusAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
