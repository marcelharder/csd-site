import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainHemodynamicsComponent } from './explain-hemodynamics.component';

describe('ExplainHemodynamicsComponent', () => {
  let component: ExplainHemodynamicsComponent;
  let fixture: ComponentFixture<ExplainHemodynamicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplainHemodynamicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainHemodynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
