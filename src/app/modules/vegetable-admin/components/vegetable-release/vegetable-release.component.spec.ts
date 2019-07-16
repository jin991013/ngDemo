import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableReleaseComponent } from './vegetable-release.component';

describe('VegetableReleaseComponent', () => {
  let component: VegetableReleaseComponent;
  let fixture: ComponentFixture<VegetableReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
