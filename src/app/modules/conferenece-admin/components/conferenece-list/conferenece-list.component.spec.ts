import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfereneceListComponent } from './conferenece-list.component';

describe('ConfereneceListComponent', () => {
  let component: ConfereneceListComponent;
  let fixture: ComponentFixture<ConfereneceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfereneceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfereneceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
