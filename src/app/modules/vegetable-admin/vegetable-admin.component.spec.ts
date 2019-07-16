import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableAdminComponent } from './vegetable-admin.component';

describe('VegetableAdminComponent', () => {
  let component: VegetableAdminComponent;
  let fixture: ComponentFixture<VegetableAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
