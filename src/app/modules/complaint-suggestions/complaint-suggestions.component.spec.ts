import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintSuggestionsComponent } from './complaint-suggestions.component';

describe('ComplaintSuggestionsComponent', () => {
  let component: ComplaintSuggestionsComponent;
  let fixture: ComponentFixture<ComplaintSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
