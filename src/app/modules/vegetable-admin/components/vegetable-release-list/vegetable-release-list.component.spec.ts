import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableReleaseListComponent } from './vegetable-release-list.component';

describe('VegetableReleaseListComponent', () => {
  let component: VegetableReleaseListComponent;
  let fixture: ComponentFixture<VegetableReleaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableReleaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableReleaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
