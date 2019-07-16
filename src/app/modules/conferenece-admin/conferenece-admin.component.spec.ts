import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfereneceAdminComponent } from './conferenece-admin.component';

describe('ConfereneceAdminComponent', () => {
  let component: ConfereneceAdminComponent;
  let fixture: ComponentFixture<ConfereneceAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfereneceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfereneceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
