import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConfereneceComponent } from './create-conferenece.component';

describe('CreateConfereneceComponent', () => {
  let component: CreateConfereneceComponent;
  let fixture: ComponentFixture<CreateConfereneceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConfereneceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConfereneceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
