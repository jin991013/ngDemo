import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfereneceFieldListComponent } from './conferenece-field-list.component';

describe('ConfereneceFieldListComponent', () => {
  let component: ConfereneceFieldListComponent;
  let fixture: ComponentFixture<ConfereneceFieldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfereneceFieldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfereneceFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
