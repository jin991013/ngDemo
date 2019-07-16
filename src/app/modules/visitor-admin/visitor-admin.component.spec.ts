import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAdminComponent } from './visitor-admin.component';

describe('VisitorAdminComponent', () => {
  let component: VisitorAdminComponent;
  let fixture: ComponentFixture<VisitorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
