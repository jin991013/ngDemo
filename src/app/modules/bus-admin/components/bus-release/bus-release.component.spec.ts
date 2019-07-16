import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusReleaseComponent } from './bus-release.component';

describe('BusReleaseComponent', () => {
  let component: BusReleaseComponent;
  let fixture: ComponentFixture<BusReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
