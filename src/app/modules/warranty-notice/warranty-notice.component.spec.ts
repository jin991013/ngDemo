import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyNoticeComponent } from './warranty-notice.component';

describe('WarrantyNoticeComponent', () => {
  let component: WarrantyNoticeComponent;
  let fixture: ComponentFixture<WarrantyNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantyNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
